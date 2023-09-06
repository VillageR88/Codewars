###Task
"""
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
Examples

Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398
Assumptions

    You can assume that you are only given numbers.
    You cannot assume the size of the array.
    You can assume that you do get an array and if the array is empty, return 0.

What We're Testing

We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
Advanced users may find this extremely easy and can easily write this in one line.
"""
###Solution
##My
def sum_array(a):
    wynik = 0
    for i in a: wynik += i
    return wynik

##Codewars recommended
###Tester => Python 'Codewars' 'Sample Tests' Tester
#Tester (wersja 2c - rewizja w kata nr 7 (wersja b), rewizja w kata nr 11 (wersja c))
#półkopia z Codewars basic_test_cases
def fixed_tests(): 
    test.assert_equals(sum_array([]), 0)
    test.assert_equals(sum_array([1, 2, 3]), 6)
    test.assert_equals(sum_array([1.1, 2.2, 3.3]), 6.6)
    test.assert_equals(sum_array([4, 5, 6]), 15)
    test.assert_equals(sum_array(range(101)), 5050)
#implementacja samorobnego testera
def codewars_sample_tests_workaround_implementation():
    worklist = []
    import inspect
    cos = inspect.getsource(fixed_tests).splitlines()
    for i in range(1, len(cos)):
        newi = cos[i].strip().lstrip(str("test.assert_equals")).lstrip("(")
        #poprawiony end_index aby szukał ")" przedostatniego
        #stary-> end_index = newi.find(")")
        end_index = newi.rfind(")",0,newi.__len__()-1)
        result = newi[:end_index + 1]
        worklist.append(result)
    worklist2 = []
    for i in worklist:
        evali = eval(i)
        print(evali)
codewars_sample_tests_workaround_implementation()