class Solution(object):
    def postorderTraversal(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """
        def is_leaf(node):
            return node and (not node.left) and (not node.right)

        result = []
        stack = []

        if root:
            # 数组中第一个元素是节点, 第二个是标志位
            isDirectChildInStack = True
            stack.append([root, isDirectChildInStack])
            if root.right:
                stack.append([root.right, False])
            if root.left:
                stack.append([root.left, False])

            while len(stack) > 0:
                [node, flag] = stack.pop()
                if flag or is_leaf(node):
                    result.append(node.val)
                else:
                    stack.append([node, True])
                    if node.right:
                        stack.append([node.right, False])
                    if node.left:
                        stack.append([node.left, False])
        return result
