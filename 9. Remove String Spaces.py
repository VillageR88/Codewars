#Zadanie
"""
Write a function that removes the spaces from the string, then return the resultant string.

Examples:
Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
"""
#Mój kod
def no_space(x):
    return x.replace(" ","")
#Najlepsze rozwiązanie od Codewars
"Moje rozwiązanie pokrywa się z najlepszym rozwiązaniem od Codewars. Wow!"
#Tester (wersja 2b - rewizja w kata nr 7)
#półkopia z Codewars basic_test_cases
def basic_test_cases():
    test.assert_equals(no_space('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB')
    test.assert_equals(no_space('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd')
    test.assert_equals(no_space('8aaaaa dddd r     '), '8aaaaaddddr')
    test.assert_equals(no_space('jfBm  gk lf8hg  88lbe8 '), 'jfBmgklf8hg88lbe8') 
    test.assert_equals(no_space('8j aam'), '8jaam')
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