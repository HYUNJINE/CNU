import java.util.LinkedList;


public class MyStack implements Stack {
    private LinkedList list = new LinkedList();

    public Object peek() {
        if (isEmpty()) throw new IllegalStateException("stack is empty");
        return list.getLast();
    }
    public Object pop() {
        if (isEmpty()) throw new IllegalStateException("stack is empty");
        Object item = list.removeLast();
        return item;
    }
    public void push(Object object) {
        list.addLast(object);

    }
    public int size() {
        return list.size();
    }
    public boolean isEmpty() {
        return list.isEmpty();
    }
}
