
##Zadanie
"""
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples

high_and_low("1 2 3 4 5")  # return "5 1"
high_and_low("1 2 -3 4 5") # return "5 -3"
high_and_low("1 9 3 4 -5") # return "9 -5"

Notes

    All numbers are valid Int32, no need to validate them.
    There will always be at least one number in the input string.
    Output string must be two numbers separated by a single space, and highest number is first.
"""
##Solution
#Moje
def high_and_low(numbers):
    realnumbers = []
    for i in numbers.split():
        realnumbers.append(int(i))
    realnumbers.sort()
    numbers = f"{max(realnumbers)} {min(realnumbers)}"
    return numbers
#Najlepsze rozwiązanie od Codewars
def high_and_low(numbers): #z.
    nn = [int(s) for s in numbers.split(" ")]
    return "%i %i" % (max(nn),min(nn))

##Tester - codewars_test framework z pominiętym import solution, który jest zawarty w kodzie
import codewars_test as test
@test.describe("Example Tests")
def fixed_tests():
    @test.it('Test Case 1')
    def basic_test_cases():
        test.assert_equals(high_and_low("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9")
    @test.it('Test Case 2')
    def basic_test_cases():
        test.assert_equals(high_and_low("1 2 3"), "3 1")