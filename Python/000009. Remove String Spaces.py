###Task
"""
Write a function that removes the spaces from the string, then return the resultant string.

Examples:
Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
"""
###Solution
##My
def no_space(x):
    return x.replace(" ","")
##Codewars recommended
"Moje rozwiązanie pokrywa się z najlepszym rozwiązaniem od Codewars. Wow!"
###Tester => Python 'Codewars' 'Sample Tests' Tester
import codewars_test as test

@test.describe("Fixed Tests")
def basic_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(no_space('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB')
        test.assert_equals(no_space('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd')
        test.assert_equals(no_space('8aaaaa dddd r     '), '8aaaaaddddr')
        test.assert_equals(no_space('jfBm  gk lf8hg  88lbe8 '), 'jfBmgklf8hg88lbe8') 
        test.assert_equals(no_space('8j aam'), '8jaam')