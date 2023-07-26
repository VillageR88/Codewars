#Zadanie
"""
Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
"""
#Mój kod
def add_binary(a,b):
    return bin(a+b).removeprefix("0b")
#Najlepsze rozwiązanie od Codewars
def add_binary(a,b):
    return bin(a+b)[2:]
########################################################################################################################
#Tester (wersja 2d "Definder" - rewizja w kata nr 7 (wersja b), rewizja w kata nr 11 (wersja c),
# rewizja w kata nr 12 (wersja d "Definder"))
#półkopia z Codewars basic_test_cases
def basic_test_cases():
    test.assert_equals(add_binary(1,1),"10")
    test.assert_equals(add_binary(0,1),"1")
    test.assert_equals(add_binary(1,0),"1")
    test.assert_equals(add_binary(2,2),"100")
    test.assert_equals(add_binary(51,12),"111111")
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