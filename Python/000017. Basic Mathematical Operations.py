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
##Tester ver. 2.4 "Definder"
#rev. kata no. 7 (ver. 2.2)
#rev. kata no. 11 (ver. 2.3)
#rev. kata no. 12 (ver. 2.4 "Definder")
#półkopia z Codewars basic_test_cases
def basic_test_cases():
    test.assert_equals(basic_op('+', 4, 7), 11)
    test.assert_equals(basic_op('-', 15, 18), -3)
    test.assert_equals(basic_op('*', 5, 5), 25)
    test.assert_equals(basic_op('/', 49, 7), 7)
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