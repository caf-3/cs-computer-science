""" Generalization"""

from math import pi, sqrt
from pyclbr import Function
from textwrap import indent

def area(r: float, shape_constant: float):
    """Double the r -> radius with the shape_constant.

    >>> area(5, 1)
    25
    """
    assert r > 0, 'The radius must be positive'
    return r * r * shape_constant

def square_area(r):
    """Compute the square area
    
    >>> square_area(10)
    100
    """
    return area(r, 1)

def circle_area(r):
    """Compute the circle area
    
    >>> circle_area(10)
    314.1592653589793
    """
    return area(r, pi)

def hexagon_area(r):
    """Compute the circle area
    
    >>> hexagon_area(3)
    23.382685902179844
    """
    return area(r, 3 * sqrt(3) / 2)


def identity(k):
    """returns k"""
    return k

def cube(k):
    """return the cube of k
    
    >>> cube(5)
    125
    """
    return pow(k, 3)

def summation(n: int, term: Function):
    """Sum the first N terms of a sequence
    >>> summation(5, cube)
    225
    """
    assert type(n) == int, 'The number to sum the terms must be positive'

    total, k = 0, 1
    while k <= n:
        total, k = total + term(k), k + 1
    return total

def sum_naturals(n):
    """Sum the first N natural numbers
    >>> sum_naturals(5)
    15
    """
    return summation(n, identity)

def sum_cubes(n):
    """Sum the first N cubes of natural numbers
    >>> sum_cubes(5)
    225
    """
    return summation(n, cube)
    

