
class Solution(object):

    def maxAreaOfIsland(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        dict = {}

        max_row = len(grid)
        max_col = len(grid[0]) if max_row > 0 else 0

        def is_ok(row, col):
            if row < 0 or col < 0 or col >= max_col or row >= max_row:
                return False
            elif dict.get((row, col)):
                return False
            else:
                dict[(row, col)] = True
                return (grid[row][col] > 0)

        def find(row, col):
            area = 0
            stack = []
            if is_ok(row, col):
                stack.append((row, col))
                while len(stack) > 0:
                    r, c = stack.pop()
                    area += 1
                    if is_ok(r+1, c):
                        stack.append((r+1, c))
                    if is_ok(r-1, c):
                        stack.append((r-1, c))
                    if is_ok(r, c+1):
                        stack.append((r, c+1))
                    if is_ok(r, c-1):
                        stack.append((r, c-1))
            return area

        max = 0
        for row, row_data in enumerate(grid):
            for col, cell in enumerate(row_data):
                cur_area = find(row, col)
                if cur_area > max:
                    max = cur_area
        return max


input = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
         [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
         [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
         [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
         [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]

s = Solution()
print(s.maxAreaOfIsland(input))
