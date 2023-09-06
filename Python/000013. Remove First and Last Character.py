###Task
"""
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
"""
###Solution
##My
def remove_char(s):
    return s.removeprefix(s[0]).removesuffix(s[s.__len__()-1])
##Codewars recommended
def remove_char(s):
    return s[1 : -1]
###Tester => Python 'Codewars' 'Sample Tests' Tester
import codewars_test as test

@test.describe("Fixed Tests")
def basic_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(remove_char('eloquent'), 'loquen')
        test.assert_equals(remove_char('country'), 'ountr')
        test.assert_equals(remove_char('person'), 'erso')
        test.assert_equals(remove_char('place'), 'lac')
        test.assert_equals(remove_char('ok'), '')
        test.assert_equals(remove_char('ooopsss'), 'oopss')
    