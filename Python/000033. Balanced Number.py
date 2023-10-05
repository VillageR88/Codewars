###Task
"""
A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. 
(For example, the middle digits of 1301 are 3 and 0.)

The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.
The task

Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.
"""
###Solution
##My
# Import math library
import math

def balanced_num(number):
    if len(str(number)) <= 2:
        return "Balanced"
    else:
        left_sum = 0
        right_sum = 0
        if len(str(number))%2:
            left = str(number)[0 : math.floor(len(str(number))/2)]
            right = str(number)[math.floor(len(str(number))/2 + 1) : len(str(number))]
            for i in left:
                left_sum += int(i)
            for i in right:
                right_sum += int(i)
            if left_sum == right_sum:
                return "Balanced"
            else:
                return "Not Balanced"
        else:
            left = str(number)[0 : math.floor((len(str(number))/2) - 1)]
            right = str(number)[math.floor(len(str(number))/2 + 1) : len(str(number))]
            for i in left:
                left_sum += int(i)
            for i in right:
                right_sum += int(i)
            if left_sum == right_sum:
                return "Balanced"
            else:
                return "Not Balanced"
##Codewars recommended
###Tester => Python 'Codewars' 'Sample Tests' Tester
import codewars_test as test

@test.describe('Fixed Tests')
def fixed_tests():
    """
    @test.it('Check Balanced Number')
    def basic_tests():
        test.assert_equals(balanced_num(7)  , "Balanced")
        test.assert_equals(balanced_num(959), "Balanced")
        test.assert_equals(balanced_num(13) , "Balanced")
        test.assert_equals(balanced_num(432), "Not Balanced")
        test.assert_equals(balanced_num(424), "Balanced")
"""
    @test.it('Check Large Number')
    def large_number_tests():
        """
        test.assert_equals(balanced_num(1024)    , "Not Balanced")
        test.assert_equals(balanced_num(66545)   , "Not Balanced")
        test.assert_equals(balanced_num(295591)  , "Not Balanced")
        test.assert_equals(balanced_num(1230987) , "Not Balanced")
        test.assert_equals(balanced_num(56239814), "Balanced")
        """
        test.assert_equals(balanced_num(614224270), "Balanced")
        