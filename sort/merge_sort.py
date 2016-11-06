import random,copy

# arrClone = 
# 
class Merge:
    # arrClone
    # def __init__(self):
        # self.arrClone = []
    def mergeSort(self,arr):
        self.arrClone =[None]*len(arr)
        self.sort(arr,0,len(arr)-1)
        return arr
    def sort(self,arr,lo,hi):
        if(lo>=hi):
            return
        mid = int((lo+hi)/2)
        self.sort(arr,lo,mid)
        self.sort(arr,mid+1,hi)
        self.merge(arr,lo,mid,hi)  

    def merge(self,arr,lo,mid,hi):
        for cnt in range(lo,hi+1):
            self.arrClone[cnt] = arr[cnt]
        leftPointer = lo
        rightPointer = mid+1
        for cnt in range(lo,hi+1):
            if leftPointer>mid:
                arr[cnt] = arrClone[rightPointer]
                rightPointer += 1
            elif rightPointer >hi:
                arr[cnt] = arrClone[leftPointer]
                leftPointer +=1
            elif arrClone[rightPointer]<arrClone[leftPointer]:
                arr[cnt] = arrClone[rightPointer]
                rightPointer += 1
            else:
                arr[cnt] = arrClone[leftPointer]
                leftPointer +=1


m =  Merge();

def test():
    arr = randArr(100)
    arrCopy = copy.deepcopy(arr)
    m.mergeSort(arr)
    if arr == arrCopy:
        print 'correct'
    else:
        print 'error'

def merge(arr,lo,mid,hi):
    arrClone = copy.deepcopy(arr)
    # for cnt in range(lo,hi+1):
    #     arrClone[cnt] = arr[cnt]
    leftPointer =lo
    rightPointer = mid+1
    for cnt in range(lo,hi+1):
        if leftPointer>mid:
            arr[cnt] = arrClone[rightPointer]
            rightPointer += 1
        elif rightPointer >hi:
            arr[cnt] = arrClone[leftPointer]
            leftPointer +=1
        elif arrClone[rightPointer]<arrClone[leftPointer]:
            arr[cnt] = arrClone[rightPointer]
            rightPointer += 1
        else:
            arr[cnt] = arrClone[leftPointer]
            leftPointer +=1



        
def sort(arr,lo,hi):
    if(lo>=hi):
        return
    mid = int((lo+hi)/2)
    sort(arr,lo,mid)
    sort(arr,mid+1,hi)
    merge(arr,lo,mid,hi)    

def mergeSort(arr):
    length = len(arr)
    arrClone = [None]*length
    sort(arr,0,length)
    return arr

def randArr(N = 1000,min = -100,max = 100):
    return [random.randrange(min,max) for i in range(N)]

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


# testSort('mergeSort')
test()