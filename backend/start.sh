# Start FastAPI with Uvicorn on the correct port for Render
uvicorn main:app --host 0.0.0.0 --port ${PORT:-8000}