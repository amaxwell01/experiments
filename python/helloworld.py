# Import specific method from module
from printer import printme

# Import module with methods
import stringlength

# Person class
class Person:
    # My Cool Method in the person class
    # You must pass in self to be associated with the class
    def myCoolMethod(self, myString):
        printme(myString)
        stringlength.stringlength(myString + " You're awesome")

# Instantiate the person class
andrew = Person()

# Call myCoolMethod on your new Instantiated class
andrew.myCoolMethod("Hello, Andrew!")
