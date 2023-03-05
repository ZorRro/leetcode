/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const inorder = (node, res) => {
  if (node) {
      inorder(node.left, res);
      res.push(node.val);
      inorder(node.right, res)
  } 
  return;

}

/**
* @param {TreeNode} root
* @return {number[]}
*/
var inorderTraversal = function(root) {
  // if(!root) return [];
  // let res = [];
  // inorder(root, res);
  // return res;

  let stack = [], current = root, res = [];
  while(current != null || stack.length > 0) {
      while(current != null) {
          stack.push(current);
          current = current.left;
      }
      current = stack.pop()
      res.push(current.val);
      current = current.right;
  }
  return res;
};

class Node {
  constructor(val,left,right) {
    this.val = val,
    this.left = left
    this.right = right
  }
}


let nodes = [new Node(3, null, null), new Node(5,null, null), new Node(2,null, null), new Node(4,null, null), new Node(1,null, null)]
nodes[2].left = nodes[0];
nodes[3].left = nodes[1];
nodes[4].left = nodes[2];
nodes[4].right = nodes[3];

let tree = nodes[4]
console.log(inorderTraversal(tree));