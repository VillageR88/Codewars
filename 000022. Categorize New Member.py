##Zadanie
"""
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Output

Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
Example

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
"""

##Solution
#Moje
def open_or_senior(data):
    mylist = []
    for i, j in data:
        if i >= 55 and j > 7:
            mylist.append("Senior")
        else: mylist.append("Open")
    return mylist
#Najlepsze rozwiązanie od Codewars
def openOrSenior(data):
  return ["Senior" if age >= 55 and handicap >= 8 else "Open" for (age, handicap) in data]
##Tester - codewars_test framework z pominiętym import solution, który jest zawarty w kodzie
import codewars_test as test

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():    
        test.assert_equals(open_or_senior([(45, 12),(55,21),(19, -2),(104, 20)]),['Open', 'Senior', 'Open', 'Senior'])
        test.assert_equals(open_or_senior([(16, 23),(73,1),(56, 20),(1, -1)]),['Open', 'Open', 'Senior', 'Open'])