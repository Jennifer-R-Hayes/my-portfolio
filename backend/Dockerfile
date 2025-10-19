# --- Use an official Python image as base ---
FROM python:3.11-slim

# Install system dependencies for R and C++
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    build-essential \
    g++ \
    r-base \
    r-base-dev \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy Python dependencies first
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the backend
COPY . .

# Expose the FastAPI port
EXPOSE 8000

# Command to run FastAPI using uvicorn
# CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}"]
