###Task
"""
Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. 
Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. 
He begins to solicit his neighbors to petition to get the association to build the wall. 
Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. 
As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

Your code will show Full name of the neighbor and the truncated version of the name as an array. 
If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"
"""
###Solution
##My
def who_is_paying(name):
  if name != name[0:2]:
    return [name, name[0:2]]
  else:
    return [name[0:2]]
##Codewars recommended
###Tester => Python 'Codewars' 'Sample Tests' Tester
import codewars_test as test

@test.describe("Basic tests")
def basic_tests():
    
    @test.it("Examples")
    def examples():
        test.assert_equals(who_is_paying("Mexico"),["Mexico", "Me"])
        test.assert_equals(who_is_paying("Melania"),["Melania", "Me"])
        test.assert_equals(who_is_paying("Melissa"),["Melissa", "Me"])
        test.assert_equals(who_is_paying("Me"),["Me"])
        test.assert_equals(who_is_paying(""), [""])
        test.assert_equals(who_is_paying("I"), ["I"])