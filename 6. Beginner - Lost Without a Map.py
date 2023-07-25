#Zadanie
"""
Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]
"""
#Mój kod
def maps(a):
    for i in range(len(a)):
        a[i]*=2
    return a
#Tester (wersja 2)
#półkopia z Codewars basic_test_cases
def basic_test_cases():
        test.assert_equals(maps([1, 2, 3]), [2, 4, 6])
        test.assert_equals(maps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [0, 2, 4, 6, 8, 10, 12, 14, 16, 18])
        test.assert_equals(maps([]), [])
#implementacja samorobnego testera
def codewars_sample_tests_workaround_implementation():
    worklist = []
    import inspect
    cos = inspect.getsource(basic_test_cases).splitlines()
    for i in range(1, len(cos)):
        newi = cos[i].strip().lstrip(f"test.assert_equals(")
        end_index = newi.find(")")
        result = newi[:end_index + 1]
        worklist.append(result)
    worklist2 = []
    for i in worklist:
        evali = eval(i)
        print(evali)
codewars_sample_tests_workaround_implementation()