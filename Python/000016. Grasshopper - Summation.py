###Task
"""
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
"""
###Solution
##My
def summation(num):
    incr_list = []
    for i in range(1, num+1): incr_list.append(i)
    return sum(incr_list)
##Codewars recommended
def summation(num):
    return sum(range(num + 1))
###Tester => Python 'Codewars' 'Sample Tests' Tester
import codewars_test as test

@test.describe('Fixed tests')
def basic_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(summation(1), 1)
        test.assert_equals(summation(8), 36)
        test.assert_equals(summation(22), 253)
        test.assert_equals(summation(100), 5050)
        test.assert_equals(summation(213), 22791)