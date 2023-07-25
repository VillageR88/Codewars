#Zadanie
"""
Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
"""
#Mój kod
def count_positives_sum_negatives(arr):
    if arr == []:
        return []
    else:
        positive_count = 0
        negative_count = 0
        for i in arr:
            if i > 0:
                positive_count += 1
            elif i < 0:
                negative_count += i
            else:
                None
    return[positive_count, negative_count]
#Tester (wersja 2)
#półkopia z Codewars basic_test_cases
def basic_test_cases():
    test.assert_equals(count_positives_sum_negatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]),[10,-65])
    test.assert_equals(count_positives_sum_negatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]),[8,-50])
    test.assert_equals(count_positives_sum_negatives([1]),[1,0])
    test.assert_equals(count_positives_sum_negatives([-1]),[0,-1])
    test.assert_equals(count_positives_sum_negatives([0,0,0,0,0,0,0,0,0]),[0,0])
    test.assert_equals(count_positives_sum_negatives([]),[])
#implementacja samorobnego testera
def codewars_sample_tests_workaround_implementation():
    worklist = []
    import inspect
    cos = inspect.getsource(basic_test_cases).splitlines()
    for i in range(1, len(cos)):
        newi = cos[i].strip().lstrip(f"test.assert_equals(")
        end_index = newi.find(")")
        result = newi[:end_index + 1]
        worklist.append(result)
    worklist2 = []
    for i in worklist:
        evali = eval(i)
        print(evali)
codewars_sample_tests_workaround_implementation()