###Task
"""
Task

Create a method all which takes two params:

    a sequence
    a function (function pointer in C)

and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. 
If the sequence is empty, it should return true, since technically nothing failed the test.
Example

all((1, 2, 3, 4, 5), greater_than_9) -> false
all((1, 2, 3, 4, 5), less_than_9)    -> True
"""
###Solution
##My
import functools
def _all(seq, fun):
    for i in seq:
        if fun(i) == False:
            return False
    return True
##Codewars recommended
"""
def _all(seq, fun): 
    return all(map(fun,seq))
"""
###Tester => Python 'Codewars' 'Sample Tests' Tester
import codewars_test as test
    
@test.describe('Example Tests')
def example_tests():

    greater_than_9 = lambda x: x>9
    less_than_9 = lambda x: x<9
    
    @test.it('greater than 9')
    def _():
        test.assert_equals(_all((1, 2, 3, 4, 5), greater_than_9), False)
        
    @test.it('less than 9')
    def _():
        test.assert_equals(_all((1, 2, 3, 4, 5), less_than_9), True)