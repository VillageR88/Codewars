##Zadanie
"""
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

"""
##Solution
#Moje
def simple_multiplication(number) :
    if number%2: return number*9 
    else: return number*8
#Najlepsze rozwiązanie od Codewars
def simple_multiplication(number) :
    return number * 9 if number % 2 else number * 8
##Tester - codewars_test framework z pominiętym import solution, który jest zawarty w kodzie
import codewars_test as test

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(simple_multiplication(2), 16)
        test.assert_equals(simple_multiplication(1), 9)
        test.assert_equals(simple_multiplication(8), 64)
        test.assert_equals(simple_multiplication(4), 32)
        test.assert_equals(simple_multiplication(5), 45)