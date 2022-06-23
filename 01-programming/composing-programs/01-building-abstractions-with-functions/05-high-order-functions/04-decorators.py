def custom_trace(fn):
    """ Returns a version of fn that frist prints before it is called"""

    def exec_decorator(x):
        print(f'Calling {fn} with {x} as argument')
        return fn(x)
    return exec_decorator
@custom_trace
def square(x):
    return x * x

@custom_trace
def sum_squares_up_to(n):
    k = 1
    total = 0
    
    while k <= n:
        total, k = total + square(k), k + 1
    return total
