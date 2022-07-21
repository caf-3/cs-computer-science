# LIST
digits = [1, 8, 2, 8]
len(digits)  # 4
digits[3]  # 8

[2, 7] + digits * 2
# [2, 7, 1, 8, 2, 8, 1, 8, 2, 8]

pairs = [[10, 20], [30, 40]]
pairs[1]
# [30, 40]

pairs[1][0]
# 30


def count(s, value):
    """Count the number of occurrences of value in sequence s."""
    total, index = 0, 0
    while index < len(s):
        if s[index] == value:
            total = total + 1
        index = index + 1
    return total


count(digits, 8)
# 2


def count(s, value):
    """Count the number of occurrences of value in sequence s."""
    total = 0
    for elem in s:
        if elem == value:
            total = total + 1
    return total


count(digits, 8)

# Ranges commonly appear as the expression in a for header to specify the number of times that the suite should be executed: A common convention is to use a single underscore character for the name in the for header if the name is unused in the suite:
for _ in range(3):
    print('Go Bears!')

# List Comprehensions
odds = [1, 3, 5, 7]
[x+1 for x in odds]

[x for x in odds if 25 % x == 0]