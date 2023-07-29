#Zadanie
"""
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).
"""
#Mój kod
def rental_car_cost(d):
    if d > 0 and d < 3: return (d * 40)
    elif d >= 3 and d < 7: return (d * 40 - 20)
    elif d >= 7: return (d * 40 - 50)
#Najlepsze rozwiązanie od Codewars
def rental_car_cost(d):
    result = d * 40
    if d >= 7:
        result -= 50
    elif d >= 3:
        result -= 20
    return result
#Tester (wersja 2d "Definder" - rewizja w kata nr 7 (wersja b), rewizja w kata nr 11 (wersja c),
# rewizja w kata nr 12 (wersja d "Definder"))
#półkopia z Codewars basic_test_cases
def basic_test_cases():
    test.assert_equals(rental_car_cost(1),40)
    test.assert_equals(rental_car_cost(4),140)
    test.assert_equals(rental_car_cost(7),230)
    test.assert_equals(rental_car_cost(8),270)
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