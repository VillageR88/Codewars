#Zadanie
"""
Note: This kata is inspired by Convert a Number to a String!. Try that one too.
Description

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
Examples

"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
"""
#Mój kod
def string_to_number(s):
    return int(s)
#Najlepsze rozwiązanie od Codewars
pass
#Tester (wersja 2b - rewizja w kata nr 7)
#półkopia z Codewars basic_test_cases
def basic_test_cases():
    test.assert_equals(string_to_number("1234"), 1234)
    test.assert_equals(string_to_number("605"), 605)
    test.assert_equals(string_to_number("1405"), 1405)
    test.assert_equals(string_to_number("-7"), -7)
#implementacja samorobnego testera
def codewars_sample_tests_workaround_implementation():
    worklist = []
    import inspect
    cos = inspect.getsource(basic_test_cases).splitlines()
    for i in range(1, len(cos)):
        #newi = cos[i].strip().lstrip(f"test.assert_equals(") -> obcina "str" za "("
        #> bardzo dziwny błąd, że obcina "str" zaraz po "("
        #> dlatego musiałem zastosować wariant newi poniżej
        newi = cos[i].strip().lstrip(str("test.assert_equals")).lstrip("(")
        end_index = newi.find(")")
        result = newi[:end_index + 1]
        worklist.append(result)
    worklist2 = []
    for i in worklist:
        evali = eval(i)
        print(evali)
codewars_sample_tests_workaround_implementation()