# --- backend/mock_data.py ---
# Generates static, realistic ERP-like data (deterministic, no random fluctuations per run)

from faker import Faker
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

fake = Faker()
Faker.seed(42)
np.random.seed(42)

# --- CONFIGURABLE BUSINESS PARAMETERS ---
REGIONS = ["North", "South", "East", "West"]
BASE_SALES = {
    "North": 500_000,
    "South": 420_000,
    "East": 610_000,
    "West": 480_000,
}
MONTHLY_GROWTH_RATE = 0.02  # ~2% MoM growth
BASE_MARGIN = 0.22

# --- Generate static monthly data ---
def generate_sales_data():
    months = pd.date_range(start="2024-01-01", periods=12, freq="MS")
    rows = []
    for region in REGIONS:
        base_sales = BASE_SALES[region]
        for i, month in enumerate(months):
            sales_amount = base_sales * ((1 + MONTHLY_GROWTH_RATE) ** i)
            orders = int(sales_amount / np.random.uniform(900, 1200))
            avg_order_value = sales_amount / orders
            margin = BASE_MARGIN + np.sin(i / 3.0) * 0.03  # slight sinusoidal seasonality
            for j in range(orders):
                order_date = month + timedelta(days=int(np.random.uniform(0, 27)))
                customer = fake.company()
                rows.append({
                    "order_id": f"{region[:1]}-{i:02d}-{j:04d}",
                    "order_date": order_date,
                    "customer": customer,
                    "region": region,
                    "amount": round(avg_order_value * np.random.uniform(0.9, 1.1), 2),
                    "margin": round(margin, 3)
                })
    df = pd.DataFrame(rows)
    return df

# Create DataFrame ONCE at startup
sales_df = generate_sales_data()

# --- Summary Metrics ---
def get_summary_metrics():
    total_sales = sales_df["amount"].sum()
    total_orders = len(sales_df)
    avg_margin = sales_df["margin"].mean()
    
    # Compute YOY growth (fixed for reproducibility)
    prev_period_sales = total_sales * 0.91  # fixed ratio
    yoy_growth = ((total_sales - prev_period_sales) / prev_period_sales) * 100

    return {
        "total_sales": round(total_sales, 2),
        "total_orders": total_orders,
        "avg_margin": round(avg_margin * 100, 2),
        "yoy_growth": round(yoy_growth, 2)
    }

# --- Monthly Sales for Charts ---
def get_sales_by_month():
    df = sales_df.copy()
    df["month"] = pd.to_datetime(df["order_date"]).dt.to_period("M").astype(str)
    monthly = df.groupby("month")["amount"].sum().reset_index()
    monthly["amount"] = monthly["amount"].round(2)
    return monthly.to_dict(orient="records")

# --- Regional Sales Breakdown ---
def get_sales_by_region():
    regional = (
        sales_df.groupby("region")["amount"]
        .sum()
        .reset_index()
        .sort_values(by="amount", ascending=False)
    )
    regional["amount"] = regional["amount"].round(2)
    return regional.to_dict(orient="records")

