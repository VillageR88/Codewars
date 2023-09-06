###Task
"""
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
"""
###Solution
##My
def count_positives_sum_negatives(arr):
    if arr == []:
        return []
    else:
        positive_count = 0
        negative_count = 0
        for i in arr:
            if i > 0:
                positive_count += 1
            elif i < 0:
                negative_count += i
            else:
                None
    return[positive_count, negative_count]
##Codewars recommended
###Tester => Python 'Codewars' 'Sample Tests' Tester
import codewars_test as test

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(find_needle(['3', '123124234', None, 'needle', 'world', 'hay', 2, '3', True, False]), 'found the needle at position 3')
        test.assert_equals(find_needle(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']), 'found the needle at position 5')
        test.assert_equals(find_needle([1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54]), 'found the needle at position 30')
