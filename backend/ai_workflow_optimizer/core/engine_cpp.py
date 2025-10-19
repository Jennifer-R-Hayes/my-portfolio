def run_cpp_calc(df):
    # Mock C++ engine integration (ctypes in real setup)
    import time, random
    time.sleep(random.uniform(0.5, 1.5))
    return random.uniform(5, 10), {"result": "C++ calc completed"}
