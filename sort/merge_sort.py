import random,copy

def fullTest(func,times=100,arrSize=1000,arrMin=-1000,arrMax=1000):
    countRight = 0
    countWrong = 0
    for i in range(times):
        if testSort(func,arrSize,arrMin,arrMax):
            countRight += 1
        else:
            countWrong += 1
    print '%s test: right: %d, wrong: %d' %(func.__name__,countRight,countWrong)


def randArr(N = 1000,min = -1000,max = 1000):
    return [random.randrange(min,max) for i in range(N)]

def testSort(func,N=100000,min=-1000,max=1000):
    arr = randArr(N,min,max)
    arrCopy = copy.deepcopy(arr)
    func(arr)
    arrCopy.sort()
    resStr = '%s tested with a %d array ,result: ' %(func.__name__,N)
    if arr == arrCopy:
        # print resStr + 'CORRECT'
        return True
    else:
        # print resStr+ 'ERROR'
        print arr
        print arrCopy

        return False

def mergeSort(arr):
    arr2 = [None]*len(arr)
    def merge(arr,lo,mid,hi):
        for i in range(lo,hi+1):
            arr2[i] = arr[i]
        pleft = lo
        pright = mid+1
        for i in range(lo,hi+1):
            if pleft>mid:
                arr[i] = arr2[pright]
                pright +=1
            elif pright > hi:
                arr[i] = arr2[pleft]
                pleft += 1
            elif arr2[pright] < arr2[pleft]:
                arr[i] = arr2[pright]
                pright += 1
            else:
                arr[i] = arr2[pleft]
                pleft += 1
    def sort(arr,lo,hi):
        if lo>=hi:
            return
        mid = int((lo+hi)/2)
        sort(arr,lo,mid)
        sort(arr,mid+1,hi)
        merge(arr,lo,mid,hi)
    sort(arr,0,len(arr)-1)

def quickSort(arr):
    def swap(arr,i,j):
        arr[i],arr[j] = arr[j],arr[i]
    def shuffle(arr):
        for i in range(len(arr)-1,0,-1):
            swap(arr,i,random.randrange(0,i))
        return arr
    def partition(arr,lo,hi):
        storedIndex = lo
        pivot = arr[hi]
        for i in range(lo,hi):
            if arr[i]<pivot:
                swap(arr,i,storedIndex)
                storedIndex += 1
        swap(arr,storedIndex,hi)
        return storedIndex
    def partition2(arr,lo,hi):
        if hi - lo <= 1:
            return 
        pivot = arr[lo]
        pleft = lo
        pright = hi
        while True:
            while arr[pleft] <= pivot and pleft <= pright:
                pleft += 1
              
            while arr[pright] >= pivot and pleft <= pright:
                pright -= 1
             
            if pleft > pright:
                break
            else:
                swap(arr,pleft,pright)
        swap(arr,lo,pright)
        return pright

    def sort(arr,lo,hi):
        if lo >= hi:
            return
        storedIndex = partition(arr,lo,hi)
        sort(arr,lo,storedIndex-1)
        sort(arr,storedIndex+1,hi)
    shuffle(arr)
    sort(arr,0,len(arr)-1)
    return arr


def heapSort(arr):
    arr.insert(0,'-')
    def swap(arr,i,j):
        arr[i],arr[j] = arr[j],arr[i]
    def makeHeap(arr):
        index = int(len(arr)/2)
        for i in range(index,0,-1):
            sink(arr,i,len(arr)-1)

    def sink(arr,index,max):
        while index*2 <= max:
            maxSon = index*2
            if maxSon<max and arr[maxSon]<arr[maxSon+1]:
                maxSon += 1
            if arr[index] > arr[maxSon]:
                break
            else:
                swap(arr,index,maxSon)
                index = maxSon

    def sort(arr):
        makeHeap(arr)
        for i in range(len(arr)-1,1,-1):
            swap(arr,1,i)
            sink(arr,1,i-1)

    sort(arr)
    arr.pop(0)
    return arr

# testCondition = (times=100,arrSize=100,arrMin=-1000,arrMax=1000)
testCondition = (heapSort,100,100,-1000,1000)

fullTest(heapSort,times = 1000)
fullTest(quickSort,times = 1000)
fullTest(mergeSort,times = 1000)
# fullTest(quickSort,testCondition)
# fullTest(mergeSort,testCondition)