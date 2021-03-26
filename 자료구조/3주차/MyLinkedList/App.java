// package org.cs_cnu.ds2021;




import java.util.Objects;

interface SimpleList<E> {
    /**
     * Returns the number of elements.
     */
    int size();
    /**
     * Returns true if this SimpleList contains no elements.
     */
    boolean isEmpty();

    /**
     * Inserts element to index of SimpleList.
     */
    void add(int index, E element);
    /**
     * Inserts element to last of SimpleList.
     */
    void add(E element);

    /**
     * Removes and returns the element at index of SimpleList.
     */
    E remove(int index);
    /**
     * Removes and returns the last elements of SimpleList.
     */
    E remove();

    /**
     * Returns the element at index of SimpleList.
     */
    E get(int index);
}


class Node<T> {
    T data;
    Node<T> next;

    public Node() {
    }

    public Node(T data) {
        this.data = data;
    }

    public Node(T data, Node<T> next) {
        this.data = data;
        this.next = next;
    }
}

class MyList<E> implements SimpleList<E> {
    private Node<E> head;
    private int size = 0;
    public MyList() {
        head = new Node<E>();
//        head = null;
    }

    @Override
    public int size() {
       return size;
    }

    @Override
    public boolean isEmpty() {
        if (size == 0 ) return true;
        else {
            return false;
        }

    }

    @Override
    public void add(int index, E element) {
//        if (index < 0 || index >= size ) {
//            throw new IndexOutOfBoundsException("index:"+index +"size:" + size);
//        }
//        만약 추가할 때 prev노드의 인덱스는 존재해야하는 경우가 있다. 이때 노드는 만들어주어야한다.

        if (index ==0 && size == 0 ) {
            addFirst(element);
            return;
        } else if (size >0 && index== 0) {
            Node<E> newNode = new Node<>(element);
            Node<E> preNode = head;
            Node<E> nextNode = preNode.next;
            preNode.next = newNode;
            newNode.next = nextNode;
            size++;
        }

         else {
            Node<E> newNode = new Node<>(element);
            Node<E> preNode =  getNode(index-1);
            Node<E> nextNode = preNode.next;
            System.out.println("여기까진 실행");
            preNode.next = newNode;
            newNode.next = nextNode;
            size++;
        }



    }

    @Override
    public void add(E element) {

        if (size == 0 ) addFirst(element);

        else {
            add(size, element);
        }

    }

    private void addFirst(E element) {
        System.out.println(head);
        System.out.println("요기실행");

            size++;
            Node<E> newNode = new Node<>(element);
//            newNode.next = head.next;
//            if (head != null) {
                head.next = newNode;
//            }
            return;

    }

    @Override
    public E remove(int index) {
        if (index < 0 || index >= size ) {
            throw new IndexOutOfBoundsException("index:"+index +"size:" + size);
        }
        if (index ==0 ) {
            Node<E> node = head.next;
            if (node.next instanceof Node) {
                head.next = node.next;
            }else {
                head.next = null;
            }


            size--;
            return node.data;
        }else {

            Node<E> preNode =  getNode(index-1);

            Node<E> removeNode = preNode.next;
            if (removeNode.next instanceof Node) {
                Node<E> postNode = removeNode.next;
                preNode.next = postNode;
            }



            size--;
            return removeNode.data;
//            return preNode.data;
        }

    }

    @Override
    public E remove() {
        Node<E> preNode;
        Node<E> tempNode;
        // head 노드가 null인 경우 모든 노드가 삭제되었으므로 return
        if (head == null) {
            return null;
        }
        if (head.next == null) {
            head = null;
            return null;
        } else {
            preNode = head;
            tempNode = head.next;
            while(tempNode.next != null) {

                preNode = tempNode;
                tempNode = tempNode.next;
            }
            preNode.next = null;
            size--;
        }
        return tempNode.data;
    }

    @Override
    public E get(int index) {
        System.out.println("실행이욤");
        if (index < 0 || index >= size ) {
            throw new IndexOutOfBoundsException("index:"+index +"size:" + size);
        }else {

            Node<E> node = head.next;
            for (int i=0; i < index; i++) {
                node = node.next;
            }
            return node.data;
        }

    }
    public Node<E> getNode(int index) {
        if (index < 0 || index >= size ) {
            throw new IndexOutOfBoundsException("index:"+index +"size:" + size);
        }else {
            Node<E> node = head.next;
            for (int i=0; i < index; i++) {
                node = node.next;
            }
            return node;
        }
    }
}
public class App {
    public static void main( String[] args ){
        System.out.println("Hello, World!");
        System.out.println("class MyList<E> implements SimpleList<E> 를 구현해야합니다!");

    }
}
