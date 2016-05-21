# Python dictionary

# Basic dictionary
# Output: {'name': 'Andrew', 'age': 31, 'sex': 'male'}
myDict = {'name': 'Andrew', 'age': 31, 'sex': 'male'}
print myDict

# Basic dictionary lookup
# Output: Andrew
print myDict['name']

# Basic dictionary boolean check for key
# Output: True
print myDict.has_key('name')

# Basic If / Else statement
if myDict['name'] == 'Andrew':
    print 'Name is Andrew'
else:
    print 'Name is NOT Andrew'


if myDict['name'] == 'Bob':
    print 'Name is Bob'
elif myDict['name'] == 'Andrew':
    print 'Name is Andrew'
else:
    print 'Name is NOT Andrew'
