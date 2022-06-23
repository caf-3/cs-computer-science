from urllib.request import urlopen

# associates the name shakespeare with the value of the expression that follows
shakespare = urlopen('http://composingprograms.com/shakespeare.txt')

# for i in shakespare:
#     print(i)

# associates the name words to the set of all unique words that appear in Shakespeare's plays
words = set(shakespare.read().decode().split())
custom_dict = { w for w in words if len(w) == 6 and w == w[::-1] }
print(words)