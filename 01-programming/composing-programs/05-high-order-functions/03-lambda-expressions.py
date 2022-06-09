"""
lamda vs def
Both create a function with the same domain, range and behavior
Both functions have as their parent the frame in which they were defined
Both bind that function to the name square
Only def statement gives the function an intrinsic name
"""

square = lambda x: x * x
print(square)

def square(x):
    return x * x
print(square)