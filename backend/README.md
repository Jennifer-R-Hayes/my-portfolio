# ERP Insights Dashboard API

A mock ERP backend built with FastAPI that powers the ERP Insights Dashboard project.
It simulates key performance metrics and sales data for use in a frontend dashboard built with Next.js.

### Features
- `/summary` — Returns total sales, orders, average margin, and YOY growth
- `/sales-by-month` — Returns monthly aggregated sales data
- `/` — Health check endpoint

### Tech Stack
- FastAPI
- Faker & Pandas (mock data generation)
- Uvicorn

### Run Locally
```bash
pip install -r requirements.txt
python -m uvicorn main:app --reload



# Data Quality Audit Tool

An automated data validation engine that checks import/export data against configurable business rules.

### Features
- Reads datasets from Excel or CSV
- Applies multiple rule types: `not_null`, `greater_than`, `in_list`
- Exports exceptions to CSV
- Generates professional PDF audit summaries

### Example Rules
Defined in `config_rules.json`:
```json
{"id": "R001", "description": "Check for missing Invoice Numbers", "type": "not_null"}


