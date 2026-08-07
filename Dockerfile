FROM python:3.12-slim

WORKDIR /app

# Install system dependencies needed for compiling python packages (like psycopg2) and git/curl
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Poetry
RUN pip install --no-cache-dir poetry

# Configure Poetry to install packages globally inside the container (no virtualenv needed)
RUN poetry config virtualenvs.create false

# Copy dependency definition files
COPY pyproject.toml poetry.lock ./

# Install dependencies
RUN poetry install --no-interaction --no-ansi --no-root

# Copy the rest of the application code
COPY . .

# Ensure the entrypoint script is executable
RUN chmod +x scripts/pipeline.sh

CMD ["bash", "scripts/pipeline.sh", "cloud"]
