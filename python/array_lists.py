# Arrays
# Outcome: ['Andrew', 'Whitney', 'Banks', 'Penny']
family = ['Andrew', 'Whitney', 'Banks', 'Penny']
print family

# Outcome: Andrew
print family[0]

# Outcome: Whitney
print family[1]

# Outcome: Penny
print family[-1]

example = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

# Get 5 through 8
# Output: [5, 6, 7, 8]
print example[4:8]

# Get 5 through the end of the Array
# Output: [5, 6, 7, 8, 9, 0]
print example[4:]

# Get everything from the beginning to the 5th item in the array
# Output: [1, 2, 3, 4, 5]
print example[:5]

# Get the entire list of the array
# Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
print example[:]

# Get the entire list of the array, but only every other one
# Output: [1, 3, 5, 7, 9]
print example[::2]

# Overwrite the example array with a string
# Outcome: 'blah'
example = 'blah'
print example

# Concat two arrays
# Outcome: [1, 2, 3, 4, 5, 16]
combinedArrays = [1, 2, 3] + [4, 5, 16]
print combinedArrays

# Get the length of an array
# Output: 6
print len(combinedArrays)

# Get the largest number in the array
# Output: 16
print max(combinedArrays)

# Get the smallest number in the array
# Output: 1
print min(combinedArrays)

# Turn a string into a list
# Output: ['A', 'n', 'd', 'r', 'e', 'w']
print list('Andrew')

# Delete an element from the list
# Output: [1, 2, 3, 5, 6]
del combinedArrays[3]
print combinedArrays

# Create a list from a word and then update that list
# Outcome: ['M', 'y', 'C', 'o', 'o', 'l', 'D', 'o', 'g']
myCoolWord = list('MyCoolWord')
myCoolWord[6:] = list('Dog')
print myCoolWord

# Insert new content into a list
# Output: [7, 7.5, 7.6, 7.7, 8, 9]
mySweetNumbers = [7, 8, 9]
mySweetNumbers[1:1] = [7.5, 7.6, 7.7]
print mySweetNumbers

# Insert new content into a list
# Output: [7, 9]
mySweetNumbers = [7, 8, 9]
mySweetNumbers[1:2] = []
print mySweetNumbers

# Sort a list
# Output: [0, 0, 2, 3, 4, 6, 7]
myNotSortedList = [7, 4, 0, 2, 3, 6, 0]
myNotSortedList.sort()
print myNotSortedList

# Create a TUPLE
bucky = (41, 42, 43, 44)
print bucky
