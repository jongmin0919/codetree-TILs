arr=list(map(str,input().split()))
a=[]
for i in range(int(arr[0])):
    b=input()
    if b.startswith('ap'):
        a.append(b)
    

a=sorted(a)

middle=int(arr[1])-1
print(a[middle])