# class Solution:
#     # visited = {}

#     def get_cell(row, col):

#     def maxAreaOfIsland(self, grid):
#         """
#         :type grid: List[List[int]]
#         :rtype: int
#         """
#         max_row = len(grid) - 1
#         max_col = len(grid[0]) - 1
#         visited = {}

#         def get_cell(row, col):
#             if (row >= 0 and row <= max_row) \
#                     and (col >= 0 and col <= max_col) \
#                     and(not (row, col) in visited)\
#                     and(grid[row][col]):
#                 return True
#             else:
#                 return False

#         # visited = {}
#         for row, row_data in enumerate(grid):
#             for col, col_data in enumerate(row_data):
#                 if (row, col) in visited:
#                     continue
#                 else:
#                     visited[(row, col)] = True
#                     if col_data:
#                         tree = {
#                             'me': (row, col),
#                             'parent': False,
#                             'child': [],
#                             'order': 0,
#                         }
#                         directions = [(row-1, col), (row, col-1),
#                                       (row+1, col), (row, col+1)]
#                         for item_index, item in enumerate(directions):
#                             child_row = item[0]
#                             child_col = item[1]
#                             if get_cell(child_row, child_col):
#                                 node = {
#                                     'me': (child_row, child_col),
#                                     'parent': (row, col),
#                                     'child': [],
#                                     'order': item_index,
#                                 }
#                                 tree.child.push(node)
#                             else:
#                                 pass
#                         pass
#         return 1


# input = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
#          [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
#          [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
#          [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
#          [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
#          [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
#          [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
#          [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]

# s = Solution()
# print(s.maxAreaOfIsland(input))


# def create_node(parent=None, row, col):
#     node = {}
#     node.parent = parent
#     node.row = row
#     node.col = col
#     node.child = []

#     directions = [(row-1, col), (row, col-1),
#                   (row+1, col), (row, col+1)]
#     for item_index, item in enumerate(directions):
#         child_row = item[0]
#         child_col = item[1]
#         if get_cell(child_row, child_col):
#             child_node = {}
#             child_node.row = child_row
#             child_node.col = child_col
#             child_node.order = item_index
#             node.child.push(child_node)
#             create_node(child_node, child_row, child_col)


# def bfs(tree):
#     if len(tree.child):
#         for item in tree.child:
#             bfs(item)
#     else:
#         if tree.order + 1 < len(tree.parent.child)
#         bfs(tree.parent[tree.order+1])

#         # while len(tree.child):
#         #     tree.child[0]

#         # pass


# def bfs(node):
#     if node:
#         if node.left:
#             bfs(node.left)
#         elif node.right:
#             bfs(node.right)
#         else:
#             # print(node)
#             return node

#     else:
#         pass


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
            if is_ok(row, col):
                area += 1 + find(row-1, col) + find(row, col-1) + \
                    find(row+1, col) + find(row, col+1)
            # print('find', row, col, area, sep=',')
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
