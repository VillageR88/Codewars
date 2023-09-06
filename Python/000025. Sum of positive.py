###Task
"""
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
"""
###Solution
##My
def positive_sum(arr):
    positvie_numbers_count = 0
    for i in arr:
        if i > 0:
            positvie_numbers_count += i
    return positvie_numbers_count
##Codewars recommended
def positive_sum(arr):
    return sum(x for x in arr if x > 0)
###Tester => Python 'Codewars' 'Sample Tests' Tester
import codewars_test as test

@test.describe("positive_sum")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(positive_sum([1,2,3,4,5]),15)
        test.assert_equals(positive_sum([1,-2,3,4,5]),13)
        test.assert_equals(positive_sum([-1,2,3,4,-5]),9)
        
    @test.it("returns 0 when array is empty")
    def empty_case():
        test.assert_equals(positive_sum([]),0)      
        
    @test.it("returns 0 when all elements are negative")
    def negative_case():
        test.assert_equals(positive_sum([-1,-2,-3,-4,-5]),0)