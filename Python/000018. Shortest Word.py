###Task
"""
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
"""
###Solution
##My
def find_short(s):
    if s.split().__len__() > 1:
        l = s.split()[0].__len__()
        for i in s.split():
            if i.__len__() < l:
                l = i.__len__()
    else:
        l = s.__len__()
    return l # l: shortest word length
##Codewars recommended
def find_short(s):
    return min(len(x) for x in s.split())
###Tester => Python 'Codewars' 'Sample Tests' Tester
##Tester ver. 2.4 "Definder"
#rev. kata no. 7 (ver. 2.2)
#rev. kata no. 11 (ver. 2.3)
#rev. kata no. 12 (ver. 2.4 "Definder")
#półkopia z Codewars basic_test_cases
def basic_test_cases():
    test.assert_equals(find_short("bitcoin take over the world maybe who knows perhaps"), 3)
    test.assert_equals(find_short("turns out random test cases are easier than writing out basic ones"), 3)
    test.assert_equals(find_short("lets talk about javascript the best language"), 3)
    test.assert_equals(find_short("i want to travel the world writing code one day"), 1)
    test.assert_equals(find_short("Lets all go on holiday somewhere very cold"), 2)   
    test.assert_equals(find_short("Let's travel abroad shall we"), 2)
    test.assert_equals(find_short("Dogecoin DarkCoin MadeSafeCoin"), 8)
    test.assert_equals(find_short("Dash ProofOfWork"), 4)
    test.assert_equals(find_short("Lisk"), 4)
    test.assert_equals(find_short("Ripple"), 6)

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