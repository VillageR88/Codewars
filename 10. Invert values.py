#Zadanie
"""
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []

You can assume that all values are integers. Do not mutate the input array/list.
"""
#Mój kod
def invert(lst):
    lst2 = []
    for i in lst: lst2.append(-i)
    return lst2
#Najlepsze rozwiązanie od Codewars
def invert(lst):
    return [-x for x in lst]
#Tester (wersja 2b - rewizja w kata nr 7)
#półkopia z Codewars basic_test_cases
def basic_test_cases():
    test.assert_equals(invert([1,2,3,4,5]),[-1,-2,-3,-4,-5])
    test.assert_equals(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5])
    test.assert_equals(invert([]), [])
#implementacja samorobnego testera
def codewars_sample_tests_workaround_implementation():
    worklist = []
    import inspect
    cos = inspect.getsource(basic_test_cases).splitlines()
    for i in range(1, len(cos)):
        newi = cos[i].strip().lstrip(str("test.assert_equals")).lstrip("(")
        end_index = newi.find(")")
        result = newi[:end_index + 1]
        worklist.append(result)
    worklist2 = []
    for i in worklist:
        evali = eval(i)
        print(evali)
codewars_sample_tests_workaround_implementation()