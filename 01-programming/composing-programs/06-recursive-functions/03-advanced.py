def reverseString(str):
    if len(str) != 0:
        print(str[-1])
        reverseString(str[:-1])