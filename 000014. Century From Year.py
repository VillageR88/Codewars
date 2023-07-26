#Zadanie
"""
Introduction:
The first century spans from the year 1 up to and including the year 100,
the second century - from the year 101 up to and including the year 200, etc.

Task:
Given a year, return the century it is in.

Examples:
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
"""
#Mój kod
def century(year):
    if year/100 > int(year/100): return int(year/100+1)
    else: return int(year/100)
#Najlepsze rozwiązanie od Codewars
def century(year):
    return (year + 99) // 100
########################################################################################################################
#Tester (wersja 2d "Definder" - rewizja w kata nr 7 (wersja b), rewizja w kata nr 11 (wersja c),
# rewizja w kata nr 12 (wersja d "Definder"))
#półkopia z Codewars basic_test_cases
def basic_test_cases():
    test.assert_equals(century(1705), 18, 'Testing for year 1705')
    test.assert_equals(century(1900), 19, 'Testing for year 1900')
    test.assert_equals(century(1601), 17, 'Testing for year 1601')
    test.assert_equals(century(2000), 20, 'Testing for year 2000')
    test.assert_equals(century(356), 4, 'Testing for year 356')
    test.assert_equals(century(89), 1, 'Testing for year 89')
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