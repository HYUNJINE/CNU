public class ArrayQueue implements Queue{
    private static final int MAXQUEUE = 1000;
    private Object[] obj = new Object[MAXQUEUE];
    private int size = 0;
    private int front = 0, rear = 0;


    @Override
    public void Enqueue(Object object) {
        if (size >= MAXQUEUE) System.out.println("The queue is full");
        else {
            obj[rear] = object;
            rear++;
            size++;
        }
    }

    @Override
    public Object Dequeue() {


        return null;
    }

    @Override
    public Object getFront() {
        if (size == 0) throw new IllegalStateException("The queue is empty");
        else {
            return obj[front];
        }

    }

    @Override
    public int size() {
        return 0;
    }
}
