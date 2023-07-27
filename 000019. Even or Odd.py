#Zadanie
"""
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
"""
#Mój kod
def even_or_odd(number):
    return list(["Even","Odd"])[number%2]
#Najlepsze rozwiązanie od Codewars
pass
##Tester ver. 2.4 "Definder"
#rev. kata no. 7 (ver. 2.2)
#rev. kata no. 11 (ver. 2.3)
#rev. kata no. 12 (ver. 2.4 "Definder")
#półkopia z Codewars basic_test_cases
def basic_test_cases():
    test.assert_equals(even_or_odd(2), "Even")
    test.assert_equals(even_or_odd(1), "Odd")
    test.assert_equals(even_or_odd(0), "Even")
    test.assert_equals(even_or_odd(1545452), "Even")
    test.assert_equals(even_or_odd(7), "Odd")
    test.assert_equals(even_or_odd(78), "Even")
    test.assert_equals(even_or_odd(17), "Odd")
    test.assert_equals(even_or_odd(74156741), "Odd")
    test.assert_equals(even_or_odd(100000), "Even")
    test.assert_equals(even_or_odd(-123), "Odd")
    test.assert_equals(even_or_odd(-456), "Even")
#implementacja samorobnego testera
def codewars_sample_tests_workaround_implementation():
    def definder():#poszukuje nazwy wszystkich definicji w aktualnym pliku i namierza tą z listy
        def tracker():
            import sys
            import inspect
            import re
            code = inspect.getsource(sys.modules[__name__])
            finder = re.findall(r'\bdef\s+(\w+)\(', code)
            return finder
        def hunter():
            hit_list = tracker()
            words = ["basic_test_cases", "fixed_tests"]
            for i in hit_list:
                if i in words:
                    return i
                else: pass
            print(f"definition not implemented in tester")
        return hunter()
    word = globals()[definder()]
    worklist = []
    import inspect
    cos = inspect.getsource(word).splitlines()
    for i in range(1, len(cos)):
        newi = cos[i].strip().lstrip(str("test.assert_equals")).lstrip("(")
        end_index = newi.rfind(")",0,newi.__len__()-1)
        result = newi[:end_index + 1]
        worklist.append(result)
    worklist2 = []
    for i in worklist:
        evali = eval(i)
        print(evali)
codewars_sample_tests_workaround_implementation()