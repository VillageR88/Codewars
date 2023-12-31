###Task
"""
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.
"""
###Solution
##My
def are_you_playing_banjo(name):
    if name[0].lower() == "r":
        name = name + " plays banjo"
    else:
        name = name + " does not play banjo"
    return name
##Codewars recommended
###Tester => Python 'Codewars' 'Sample Tests' Tester
import codewars_test as test
   
@test.describe("Fixed Tests")
def basic_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(are_you_playing_banjo("martin"), "martin does not play banjo");
        test.assert_equals(are_you_playing_banjo("Rikke"), "Rikke plays banjo");
        test.assert_equals(are_you_playing_banjo("bravo"), "bravo does not play banjo")
        test.assert_equals(are_you_playing_banjo("rolf"), "rolf plays banjo")