###Task
"""
You have an award-winning garden and every day the plants need exactly 40mm of water. 
You created a great piece of JavaScript to calculate the amount of water your plants will need when 
you have taken into consideration the amount of rain water that is forecast for the day. 
Your jealous neighbour hacked your computer and filled your code with bugs.

Your task is to debug the code before your plants die!
"""
###Solution
##My
def rain_amount(mm):
  if (mm < 40):
    return "You need to give your plant " + str(40-mm) + "mm of water"
  else:
    return "Your plant has had more than enough water for today!"
##Codewars recommended
###Tester => Python 'Codewars' 'Sample Tests' Tester
import codewars_test as test

test.describe("Basic tests")
test.assert_equals(rain_amount(100), "Your plant has had more than enough water for today!")
test.assert_equals(rain_amount(40), "Your plant has had more than enough water for today!")
test.assert_equals(rain_amount(39), "You need to give your plant 1mm of water")
test.assert_equals(rain_amount(5), "You need to give your plant 35mm of water")
test.assert_equals(rain_amount(0), "You need to give your plant 40mm of water")