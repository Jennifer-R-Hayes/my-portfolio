# REST endpoints for /sales, /orders, /margins

# --- backend/main.py ---
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from mock_data import get_summary_metrics, get_sales_by_month, get_sales_by_region

app = FastAPI(title="ERP Insights Dashboard API", version="1.0")

# Allow your Next.js frontend to connect
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # change to your deployed URL later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "ERP Insights Dashboard API is running"}

# @app.get("/summary")
# def summary():
#     return get_summary_metrics()

# @app.get("/sales-by-month")
# def sales_by_month():
#     return get_sales_by_month()

@app.get("/summary")
def summary():
    return get_summary_metrics()

@app.get("/sales/monthly")
def sales_by_month():
    return get_sales_by_month()

@app.get("/sales/region")
def sales_by_region():
    return get_sales_by_region()

