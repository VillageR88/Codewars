#Zadanie
"""
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
Example:

n= 5, m=5: 25
n=-5, m=5:  0
"""
#Początek
#Funkcja
def paperwork(n, m):
    calculation = n*m
    if n < 0 or m < 0:
        calculation = 0
    return calculation
#Test/wywołanie
print(paperwork(5,5))
print(paperwork(1,2))
print(paperwork(-5,5))
print(paperwork(5,-5))
print(paperwork(-5,-5))
print(paperwork(5,0))
#Koniec
#Lepsze rozwiązanie od Codewars
def paperwork(n, m):
    return n * m if n > 0 and m > 0 else 0
print(paperwork(5,5))
print(paperwork(1,2))
print(paperwork(-5,5))
print(paperwork(5,-5))
print(paperwork(-5,-5))
print(paperwork(5,0))
"""
test.assert_equals(paperwork(5,5), 25, "Failed at Paperwork(5,5)")
test.assert_equals(paperwork(1,2), 2, "Failed at Paperwork(1,2)")
test.assert_equals(paperwork(-5,5), 0, "Failed at Paperwork(-5,5)")
test.assert_equals(paperwork(5,-5), 0, "Failed at Paperwork(5,-5)")
test.assert_equals(paperwork(-5,-5), 0, "Failed at Paperwork(-5,-5)")
test.assert_equals(paperwork(5,0), 0, "Failed at Paperwork(5,0)")
"""