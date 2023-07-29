def split_and_merge(string_, separator):
    word = string_.split()
    new_word = ""
    for i in word:
        new_i = i.replace("", separator).strip(separator)
        new_word += new_i+" "
    return new_word.strip()

print(split_and_merge("My name is John"," "))
print(split_and_merge("My name is John","-"))
print(split_and_merge("Hello World!","."))
print(split_and_merge("Hello World!",","))

#poniżej lepsze rozwiązanie innej osoby
def split_and_merge2(string, sp):
    return ' '.join(sp.join(word) for word in string.split())

print(split_and_merge2("My name is John"," "))
print(split_and_merge2("My name is John","-"))
print(split_and_merge2("Hello World!","."))
print(split_and_merge2("Hello World!",","))