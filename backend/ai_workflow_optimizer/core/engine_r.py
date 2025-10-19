def run_r_model(df):
    # Mock R integration (rpy2 in real setup)
    import time, random
    time.sleep(random.uniform(1.5, 3))
    return random.uniform(15, 35), {"result": "R stats model completed"}
