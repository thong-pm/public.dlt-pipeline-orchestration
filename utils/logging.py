from dlt.pipeline.pipeline import Pipeline


def print_load_summary(source_name: str, pipeline: Pipeline, load_info) -> None:
    """
    Print a human-readable summary of what was loaded into postgres.
    Shows per-table row counts extracted from dlt's load_info metrics.
    """
    print(f"\n{'='*50}")
    print(f"  {source_name} Pipeline Summary")
    print(f"{'='*50}")

    total_rows = 0
    has_metrics = False

    for package in load_info.load_packages:
        for job in package.jobs.get("completed_jobs", []):
            table = job.job_file_info.table_name
            # Skip dlt internal tables
            if table.startswith("_dlt"):
                continue
            rows = job.metrics.get("row_counts", {}) if hasattr(job, "metrics") else {}
            if rows:
                has_metrics = True
                for t, count in rows.items():
                    print(f"  ✓ {t:<35} {count:>6} rows")
                    total_rows += count

    if not has_metrics:
        # Fallback: query postgres directly for row counts
        try:
            with pipeline.sql_client() as client:
                tables = [
                    row[0]
                    for row in client.execute_sql(
                        "SELECT table_name FROM information_schema.tables "
                        f"WHERE table_schema = '{pipeline.dataset_name}' "
                        "AND table_name NOT LIKE '\\_dlt%' "
                        "ORDER BY table_name"
                    )
                ]
                for table in tables:
                    count = client.execute_sql(
                        f'SELECT COUNT(*) FROM "{pipeline.dataset_name}"."{table}"'
                    )[0][0]
                    print(f"  ✓ {table:<35} {count:>6} rows (total in DB)")
                    total_rows += count
        except Exception as e:
            print(f"  (Could not retrieve row counts: {e})")

    print(f"{'─'*50}")
    failed = sum(len(p.jobs.get("failed_jobs", [])) for p in load_info.load_packages)
    print(f"  Failed jobs : {failed}")
    print(f"{'='*50}\n")
