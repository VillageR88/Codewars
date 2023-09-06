###Task
"""
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

"""
###Solution
##My
def lovefunc( flower1, flower2 ):
    if flower1%2 is flower2%2: return False
    else: return True
##Codewars recommended
def lovefunc( flower1, flower2 ):
    return (flower1+flower2)%2
###Tester => Python 'Codewars' 'Sample Tests' Tester
#Tester (wersja 2b - rewizja w kata nr 7)
#półkopia z Codewars basic_test_cases
def basic_test_cases():
    test.assert_equals(lovefunc(1,4), True)
    test.assert_equals(lovefunc(2,2), False)
    test.assert_equals(lovefunc(0,1), True)
    test.assert_equals(lovefunc(0,0), False)
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