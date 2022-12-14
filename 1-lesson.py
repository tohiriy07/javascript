from typing import List

for x in "Toxirjon":
    print(x)
mylist: list[str | int] = ["apple", "banana", "cherry", "salom", 77989, 3738278]
print(mylist[3:5]);
# list ichidagi birinchi element 0 chi indexni oladi
list=["apple", "banana", "cherry", "Hello", "My world", "apelsin", "melon"]
print(list)
print(len(list))
print(list[-4:-1])
if "apple" in list:
    print("yes \"apple\" in this list")

list[0] = "watermelon"
print(list)

list[1:3]="melon"
print(list)
list.insert(1, "limon")
print(list)
list.append("Ananas")
print(list)

tropical=["mango", "Pineapple", "papaya"]
list.extend(tropical)
print(list)
print(list[-4:-1])

