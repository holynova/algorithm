import random,copy
def quickSort(arr):
    sort(arr,0,len(arr)-1)
    return arr

def swap(arr,i,j):
    if i==j:
        return
    temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp

def partition(arr,left,right):
    curIndex = left
    pivot = arr[right]
    for i in range(left,right):
        if arr[i] <= pivot:
            swap(arr,i,curIndex)
            curIndex += 1
    swap(arr,curIndex,right)
    return curIndex

def sort(arr,left,right):
    if left >= right:
        return
    curIndex = partition(arr,left,right)
    sort(arr,left,curIndex-1)
    sort(arr,curIndex+1,right)



def randArr(N = 1000,min = -100,max = 100):
    return [random.randrange(min,max) for i in range(N)]
    # num = random.randrange(min,max)

# arr = [14,95,55,38,30,12,32,4,1]
def testSort(funcName=''):
    arr = randArr(100)
    arrCopy = copy.deepcopy(arr)
    eval(funcName+'(arr)')
    quickSort(arr)
    # print arr
    arrCopy.sort()
    # print arrCopy
    if arr == arrCopy:
        print 'correct'
    else:
        print 'error'


testSort('quickSort')
# arr = randArr(100);
# print arr
# quickSort(arr)
# # swap(arr,0,1)
# print arr

