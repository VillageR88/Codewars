#Zadanie
"""
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
"""
#Mój kod
print("-------------------------------------------------------------------------------")
def count_positives_sum_negatives(arr):
    lista = arr
    lista.append(1234555556)
    return lista
#Test

def proba():
    test.assert_equals(count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),[10,-65])
    test.assert_equals(count_positives_sum_negatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]),[8,-50])
    test.assert_equals(count_positives_sum_negatives([1]),[1,0])
    test.assert_equals(count_positives_sum_negatives([-1]),[0,-1])
    test.assert_equals(count_positives_sum_negatives([0,0,0,0,0,0,0,0,0]),[0,0])
    test.assert_equals(count_positives_sum_negatives([]),[])

def czarymary(): #Tutaj tworzymy konstrujcę funkcji do wywowłania w oparciu o "Sample Tests"
    worklist = []
    import inspect
    cos = inspect.getsource(proba).splitlines()
    for i in range(1, len(cos)):
        newi = cos[i].strip().lstrip(f"test.assert_equals(")
        end_index = newi.find(")")
        result = newi[:end_index + 1]
        worklist.append(result)
    worklist2 = []
    for i in worklist:
        evali = eval(i)
        print(evali)
czarymary()

"""
def basic_test_cases():
    count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),[10,-65]
basic_test_cases()
"""
"""
def assert_equals():
    return assert_equals
def basic_test_cases():
    assert_equals(count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),[10,-65])
    assert_equals(count_positives_sum_negatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]),[8,-50])
    assert_equals(count_positives_sum_negatives([1]),[1,0])
    assert_equals(count_positives_sum_negatives([-1]),[0,-1])
    assert_equals(count_positives_sum_negatives([0,0,0,0,0,0,0,0,0]),[0,0])
    assert_equals(count_positives_sum_negatives([]),[])
print(basic_test_cases())
#Najlepsze rozwiązanie od Codewars
"""