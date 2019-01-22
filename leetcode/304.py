class NumMatrix:
    hash = {}

    def __init__(self, matrix):
        """
        :type matrix: List[List[int]]
        """
        hash = {}
        max_col = len(matrix[0])-1
        for row, row_data in enumerate(matrix):
            for col, cell in enumerate(row_data):
                if col != 0 and row != 0:
                    value = cell + hash[(row-1, col)] + \
                        hash[(row, col-1)] - hash[(row-1, col-1)]
                elif col != 0 and row == 0:
                    value = cell + hash[(row, col-1)]
                elif col == 0 and row != 0:
                    value = cell + hash[(row-1, col)]
                else:
                    value = cell

                hash[(row, col)] = value
        self.hash = hash

    def sumRegion(self, row1, col1, row2, col2):
        """
        :type row1: int
        :type col1: int
        :type row2: int
        :type col2: int
        :rtype: int
        """
        left_top = self.hash[(row1-1, col1-1)]
        left = self.hash[(row2-1, col1-1)]
        top = self.hash[(row1-1, col2-1)]
        return left + top - left_top


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)


dict = {}
key = (1, 2)
dict[key] = 'value'
print(dict)
