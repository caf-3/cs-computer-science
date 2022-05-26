from operator import floordiv, mod

def divide_exact(n, d):
    """ Return the quotient and reminder of dividing N by D.
    >>> q, r = divide_exact(2013, 10)
    >>> q
    201
    >>> r
    3
    """
    return floordiv(n, d), mod(n, d)

r, q = divide_exact(315, 13)

# Open the interative mode
# python3 -i 01-programming/composing-programs/03-denfining-new-functions/ex.py