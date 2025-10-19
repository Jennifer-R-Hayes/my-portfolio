import random

def recommend_path(task_type, data_size):
    # Simple mock: AI predicts optimal method
    if data_size > 5000 or "simulation" in task_type.lower():
        return "cpp"
    else:
        return random.choice(["r", "cpp"])
