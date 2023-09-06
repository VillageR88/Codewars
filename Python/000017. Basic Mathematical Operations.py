###Task
"""
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) --> output

('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
"""
###Solution
##My
def basic_op(operator, value1, value2):
    return eval(f"{value1}{operator}{value2}")
##Codewars recommended
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