## Data Structure Interface

---
## LinkedList

## Stack

`Stack<E> stack`
  
* `E push(E item)`: Pushes an element on the top of the stack.
* `E pop()`: Removes and returns the top element of the stack. An `EmptyStackException` exception will be thrown if `stack.empty()`.
* `E peek()`: Returns the element of the top of the stack, but does not remove it.
* `boolean empty()`: It returns true if nothing is on the top of the stack. Else, returns false.
* `int search(Object o)` It determines whether an object exists in the stack. If the element is found, it returns the position of the element from the top of the stack(start from `1`). Else, it returns `-1`.

## Queue

`Queue<E> queue`

* `boolean add(E e)` This method is used to add elements at the tail of queue. More specifically, at the last of linked-list if it is used, or according to the priority in case of priority queue implementation. Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions, returning true upon success and throwing an IllegalStateException if no space is currently available.
* `E element()`: Retrieves, but does not remove, the head of this queue.
* `boolean offer(E e)`: Inserts the specified element into this queue if it is possible to do so immediately without violating capacity restrictions.
* `E peek()`: Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
* `E poll()`: Retrieves and removes the head of this queue, or returns null if this queue is empty.
* `E remove()`: Retrieves and removes the head of this queue.
* `int size()`: This method return the no. of elements in the queue.

## Deque (Interface)

* Declare: `Deque<Integer> stack = new ArrayDeque<Integer>();`
* `boolean add(E)`
* `void addFirst(E e)`
* `void addLast(E e)`
* `boolean contains(Object o)`
* `Iterator<E> descendingIterator()`
* `E element()`
* `E getFirst()`
* `E getLast()`
* `Iterator<E> iterator()`
* `boolean offer(E e)`
* `boolean offerFirst(E e)`
* `boolean offerLast(E e)`
* `E peek()`
* `E peekFirst()`
* `E peekLast()`
* `E poll()`
* `E pollFirst()`: Retrieves and removes the first element of this deque, or returns null if this deque is empty.
* `E pollLast()`: Retrieves and removes the last element of this deque, or returns null if this deque is empty.
* `E pop()`: Pops an element from the stack represented by this deque.
* `void push()`: Pushes an element onto the stack represented by this deque (in other words, at the head of this deque) if it is possible to do so immediately without violating capacity restrictions, returning true upon success and throwing an IllegalStateException if no space is currently available.
* `E remove()`: Retrieves and removes the head of the queue represented by this deque (in other words, the first element of this deque).
* `boolean remove(Object o)`
* `E removeFirst(Object o)`
* `boolean removeFirstOccurrence(Object o)`
* `E removeLast()`
* `boolean removeLastOccurrence(Object o)`
* `int size()`

## WeightedQuickUinionFind (API)

* Declare: `WeightedQuickUnionUF sitesUF = new WeightedQuickUnionUF(n);`
* `int count()`: no. of distinctive groups
* `int find(int p)`: find root.
* `boolean connected(int p, int q)`:
* `void union(int p, int q)`:

## ST (Symbol Table API)

* Declare `ST<Key, Value> st = ST<>()`
* `void put(Key key, Value val)`: put key-value pair into the table(remove key from table if value is null)
* `Value get(Key key)`: value paired with key (null if key is absent)
* `void delete (Key key)`: remove key(and its value) from table.
* `boolean contains(Key key)`: is there a value paired with key?
* `boolean isEmpty()` is the table empty?
* `int size()`: number of key-value pairs in the table.
* `Iterable<Key> keys()`: all the keys in the table.

## ST (Ordered Symbol Table API)

* Declare `ST<Key extends Comparable <Key>, Value> st = ST<>()`
* `void put(Key key, Value val)`: put key-value pair into the table(remove key from table if value is null)
* `Value get(Key key)`: value paired with key (null if key is absent)
* `void delete (Key key)`: remove key(and its value) from table.
* `boolean contains(Key key)`: is there a value paired with key?
* `boolean isEmpty()` is the table empty?
* `int size()`: number of key-value pairs in the table.
* `Key min()`: smallest key.
* `Key max()`: largest key.
* `Key floor(Key key)`: largest key less than or equal to key.
* `Key ceiling(Key key)`: smallest key greater than or equal to key.
* `int rank(Key key)`: number of keys less than key.
* `Key select(int k)`: key of rank k.
* `void deleteMin()`: delete smallest key.
* `void deleteMax()`: delete largest key.
* `int size(Key lo, Key hi)`: number of keys in `[lo...hi]`.
* `Iterable<Key> keys(Key lo, Key hi)`: keys in `[lo...hi]`, in sorted order.
* `Iterable<Key> keys()`: all the keys in the table, in sorted order.

## 