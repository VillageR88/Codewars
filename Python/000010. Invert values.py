###Task
"""
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
"""
###Solution
##My
def invert(lst):
    lst2 = []
    for i in lst: lst2.append(-i)
    return lst2
##Codewars recommended
def invert(lst):
    return [-x for x in lst]
###Tester => Python 'Codewars' 'Sample Tests' Tester
import codewars_test as test

@test.describe("Invert values")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(invert([1,2,3,4,5]),[-1,-2,-3,-4,-5])
        test.assert_equals(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5])
        test.assert_equals(invert([]), [])