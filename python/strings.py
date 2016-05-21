# strings in python

# Starts as a number
num = 32

# Combines a string and a number with a method
print "Andrew is " + str(num)

# Combines a string and a number with template strings
print "Andrew is almost " + `num`

# Creates a new string of 10 andrews
# output: andrewandrewandrewandrewandrewandrewandrewandrewandrewandrew
lotsOfAndrew = 'andrew' * 10
print lotsOfAndrew

# Search a string and see if it contains a letter or word that you are searching
# for
# Output: True
monkeyButt = 'monkeybutt'
print 'monkey' in monkeyButt

# Replace parts of a string with variables using a string and a tuple
# Output: 'My name is Andrew and I have a bloody toe'
bloody = 'My name is %s and I have a bloody %s'
replaceWithText = ('Andrew', 'toe')
print bloody % replaceWithText
