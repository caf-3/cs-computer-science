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