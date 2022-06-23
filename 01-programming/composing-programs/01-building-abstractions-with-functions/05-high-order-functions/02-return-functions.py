def make_adder(k):
    """Return a function that takes n and k then return k + n

       >>> add_three = make_adder(3)
       >>> add_three(4)
       7
    """
    def adder(n):
        return k + n
    return adder