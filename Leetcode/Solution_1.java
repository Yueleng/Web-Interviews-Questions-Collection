import java.util.Stack;

class Solution_1 {
    public ListNode addTwoNumbersReverse(ListNode l1, ListNode l2) {
        Stack<Integer> stack1 = new Stack<>();
        Stack<Integer> stack2 = new Stack<>();
        int flag = 0;
        ListNode current = l1;
        ListNode newNode;
        ListNode returnedNode = new ListNode(1);
        while (current != null) {
            stack1.push(current.val);
            current = current.next;
        }
        current = l2;
        while (current != null) {
            stack2.push(current.val);
            current = current.next;
        }
        
        current = null;
        while (!stack1.isEmpty() && !stack2.isEmpty()) {
            if (stack1.peek() + stack2.peek() + flag >= 10) {
                newNode = new ListNode(stack1.pop() + stack2.pop() + flag - 10);
                flag = 1;
            } else {
                newNode = new ListNode(stack1.pop() + stack2.pop() + flag);
                flag = 0;
            }
            if (current == null) {
                current = newNode;
                returnedNode = current;
            } else {
                current.next = newNode;
                current = newNode;
            }
            
        }
        
        // same length stack1 and stack2
        if (stack1.isEmpty() && stack2.isEmpty()) {
            if (flag == 1) {
                current.next = new ListNode(1);
                return returnedNode;    
            } else {
                return returnedNode;
            }
            
        } 

        // stack1 is longer
        else if (stack1.isEmpty() == false) {
            while(!stack1.isEmpty()) {
                if (stack1.peek() + flag >= 10) {
                    newNode = new ListNode(stack1.pop() + flag - 10);
                    flag = 1;
                } else {
                    newNode = new ListNode(stack1.pop() + flag);
                    flag = 0;
                }
                current.next = newNode;
                current = newNode;
            }

            if (flag == 1) {
                current.next = new ListNode(1);
                return returnedNode;
            } else return returnedNode;
        } 
        
        // stack2 is longer
        else {
            while(!stack2.isEmpty()) {
                if (stack2.peek() + flag >= 10) {
                    newNode = new ListNode(stack2.pop() + flag - 10);
                    flag = 1;
                } else {
                    newNode = new ListNode(stack2.pop() + flag);
                    flag = 0;
                }
                current.next = newNode;
                current = newNode;
            }

            if (flag == 1) {
                current.next = new ListNode(1);
                return returnedNode;
            } else return returnedNode;
        }    
    }
    
    
    public static void main(String[] args) {
        ListNode l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);

        ListNode l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);
        l2.next.next.next = new ListNode(9);
        Solution_1 solution = new Solution_1();
        ListNode l3 = solution.addTwoNumbersReverse(l1, l2);
        ListNode current = l3;
        while (current != null) {
            System.out.println(current.val);
            current = current.next;
        } 
    }
}