##Zadanie
"""
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.
Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

"""
##Solution
#Moje
def find_next_square(sq):
  import math
  nxtSq = sq + 1
  if math.sqrt(sq)%1 == 0:
    while (math.sqrt(nxtSq)%1) != 0:
      nxtSq += 1
    return nxtSq
  else:
    return -1
#Najlepsze rozwiązanie od Codewars
def find_next_square(sq):
    root = sq ** 0.5
    if root.is_integer():
        return (root + 1)**2
    return -1

##Tester - codewars_test framework z pominiętym import solution, który jest zawarty w kodzie
import codewars_test as test

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("should return the next square for perfect squares")
    def basic_test_cases():
        test.assert_equals(find_next_square(121), 144, "Wrong output for 121")
        test.assert_equals(find_next_square(625), 676, "Wrong output for 625")
        test.assert_equals(find_next_square(319225), 320356, "Wrong output for 319225")
        test.assert_equals(find_next_square(15241383936), 15241630849, "Wrong output for 15241383936")

    @test.it("should return -1 for numbers which aren't perfect squares")
    def _():
        test.assert_equals(find_next_square(155), -1, "Wrong output for 155")
        test.assert_equals(find_next_square(342786627), -1, "Wrong output for 342786627")