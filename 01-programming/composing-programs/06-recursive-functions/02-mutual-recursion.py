
def split(n):
    """ Return all_but_last digit of n and the last digit of n 
    >>> split(514)
    (51, 4)
    """
    return n // 10, n % 10

def sum_digits(n):
    """Sum all digits of n """
    if n < 10:
        return n
    else:
        all_but_last, last = split(n)
        return sum_digits(all_but_last) + last

def luhn_sum(n):
    if n < 10:
        return n
    else:
        all_but_last, last = split(n)
        return luhn_sum_double(all_but_last) + last

def luhn_sum_double(n):
    all_but_last, last = split(n)
    luhn_digit = sum_digits(last * 2)
    if n < 10:
        return luhn_digit
    else:
        luhn_sum(all_but_last) + luhn_digit


def is_even(n):
    if n == 0:
        return True
    else:
        return is_odd(n-1)

def is_odd(n):
    if n == 0:
        return False
    else:
        return is_even(n-1)

def cascade(n):
    if n < 10:
        print(n)
    else:
        cascade(n//10)
        print(n)
        