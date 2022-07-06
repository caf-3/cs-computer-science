from operator import getitem
from fractions import gcd
# pairs 
# #(list)
pairs = [25, 10]
x, y = pairs

print(f'x: {x}\ny: {y}')

print(f'pairs[0]: {pairs[0]}\npairs[1]: {pairs[1]}')

item_0 = getitem(pairs, 0)
item_1 = getitem(pairs, 1)

print(f'getitem(pairs, 0): {getitem(pairs, 0)}')
print(f'getitem(pairs, 1): {getitem(pairs, 1)}')

# Representing Rational Numbers.

def add_rationals(x, y):
        nx, dx = numer(x), denom(x)
        ny, dy = numer(y), denom(y)
        return rational(nx * dy + ny * dx, dx * dy)
def mul_rationals(x, y):
    return rational(numer(x) * numer(y), denom(x) * denom(y))
def print_rational(x):
    print(numer(x), '/', denom(x))
def rationals_are_equal(x, y):
    return numer(x) * denom(y) == numer(y) * denom(x)

def rational(n, d):
    g = gcd(n, d)
    return (n//g, d//g)

def numer(x):
    return x[0]

def denom(x):
    return x[1]

half = rational(1, 2)

print_rational(half)

third = rational(1, 3)

rational(mul_rationals(half, third)[0], mul_rationals(half, third)[1])

print_rational(add_rationals(third, third))
