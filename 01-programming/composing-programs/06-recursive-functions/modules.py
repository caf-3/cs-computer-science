def trace1(fn):
    """prints fn and its arguments then returns fn  """

    def traced(x):
        print(f'Calling {fn}({x})')
        return fn(x)
    return traced