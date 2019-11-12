import java.util.HashMap;
import java.util.Arrays;
public class TwoSum {
    public static int[] twoSum(int[] nums, int target) {
        if (nums == null || nums.length < 2) {
            return new int[]{0,0};
        }
        HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(nums[i])) {
                return new int[]{map.get(nums[i]), i};
            } else {
                map.put(target-nums[i], i);
            }
        }
        return new int[]{0,0};
    }
    public static void main(String[] args) {
        System.out.println(Arrays.toString(twoSum(new int[]{1,2,3,4,5,6}, 10)));
    }
}


class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        Stack<Integer> stack1 = new Stack<>();
        Stack<Integer> stack2 = new Stack<>();
        while (l1.next == null) {
            stack1.push(l1.val);
            l1 = l1.next;
        }
        
        while (l2.next == null) {
            stack2.push(l2.val);
            l2 = l2.next;
        }
        
        int flag = 0;
        ListNode current;
        while (!stack1.isEmpty() && !stack2.isEmpty()) {
            if (stack1.pop() + stack2.pop() + flag >= 10) {
                ListNode newNode = new ListNode(stack1.pop() + stack2.pop() + flag - 10);
                flag = 1;
            } else {
                ListNode newNode = new ListNode(stack1.pop() + stack2.pop() + flag);
                flag = 0;
            }
            newNode.next = current;
            current = newNode;
        }
        
        if (flag == 1) {
            if (stack1.isEmpty() && stack2.isEmpty()) {
                ListNode newNode = new ListNode(1);
                newNode.next = current;
                return newNode;
            } else if (stack1.isEmpty() == false) {
                while(!stack1.isEmpty()) {
                    if (stack1.pop() + flag >= 10) {
                        ListNode newNode = new ListNode(stack1.pop() + flag - 10);
                        flag = 1;
                    } else {
                        ListNode newNode = new ListNode(stack1.pop() + flag);
                        flag = 0;
                    }
                    newNode.next = current;
                    current = newNode;
                }
                
                if (flag == 1) {
                    ListNode newNode = new ListNode(1);
                    newNode.next = current;
                    current = newNode;
                    return newNode;
                } else return newNode;
            }
        }
    }
}