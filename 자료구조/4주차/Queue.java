public interface Queue {

    public void Enqueue(Object object);
    public Object Dequeue();
    public Object getFront();
    public int size();
}
