from modules import trace1

@trace1
def split(n):
    """ Return all_but_last digit of n and the last digit of n 
    >>> split(514)
    (51, 4)
    """
    return n // 10, n % 10
@trace1
def sum_digits(n):
    """Sum all digits of n """
    if n < 10:
        return n
    else:
        all_but_last, last = split(n)
        return sum_digits(all_but_last) + last

sum_digits(483)