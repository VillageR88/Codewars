###Task
"""
Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
"""
###Solution
##My
def row_sum_odd_numbers(n):
    value = -1
    for i in range(1, n+1):
        total = 0
        for i in range(i):
            value += 2
            total += value
    return total
##Codewars recommended
def row_sum_odd_numbers(n):
    return n ** 3
###Tester => Python 'Codewars' 'Sample Tests' Tester
import codewars_test as test

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(row_sum_odd_numbers(1), 1)
        test.assert_equals(row_sum_odd_numbers(2), 8)
        test.assert_equals(row_sum_odd_numbers(13), 2197)
        test.assert_equals(row_sum_odd_numbers(19), 6859)
        test.assert_equals(row_sum_odd_numbers(41), 68921)