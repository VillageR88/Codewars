###Task
"""
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
"""
###Solution
##My
def find_short(s):
    if s.split().__len__() > 1:
        l = s.split()[0].__len__()
        for i in s.split():
            if i.__len__() < l:
                l = i.__len__()
    else:
        l = s.__len__()
    return l # l: shortest word length
##Codewars recommended
def find_short(s):
    return min(len(x) for x in s.split())
###Tester => Python 'Codewars' 'Sample Tests' Tester
import codewars_test as test

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(find_short("bitcoin take over the world maybe who knows perhaps"), 3)
        test.assert_equals(find_short("turns out random test cases are easier than writing out basic ones"), 3)
        test.assert_equals(find_short("lets talk about javascript the best language"), 3)
        test.assert_equals(find_short("i want to travel the world writing code one day"), 1)
        test.assert_equals(find_short("Lets all go on holiday somewhere very cold"), 2)   
        test.assert_equals(find_short("Let's travel abroad shall we"), 2)