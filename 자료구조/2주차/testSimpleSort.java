//import java.util.*;
//
//public class testSimpleSort {
//    public static v        List<Student> list = new ArrayList<Student>();
//        list.add(new Student("LEE", 2013, 2));
//        list.add(new Student("LdE", 2033, 4));
//        list.add(new Student("LEz", 201233, 1));
//        list.add(new Student("LEzzE", 201123, 5));
//
//        System.out.println("Testing with Comparable interface");
//        Collections.sort(list);
//        System.out.println(list);
//    Iterator iter = list.iterator();
//        while(iter.hasNext()) {
//        Student str = (Student) iter.next();
//        System.out.println(str.name+ "," +str.id + ", " + str.score);
//
//    }
//        System.out.println("Comparator interface");
//
//    Comparator<Student> myComparator =new Comparator<Student>() {
//        @Override
//        public int compare(Student s1, Student s2) {
//            return s2.getScore() - s1.getScore();
//        }
//    };
//        Collections.sort(list, myComparator);
//    iter = list.iterator();
//        while(iter.hasNext()) {
//        Student str = (Student) iter.next();
//        System.out.println(str.name + ", "+ str.id + " , "+ str.score);
//
//    }
//    //        List<Integer> list = new ArrayList<Integer>();
////
////        list.add(3);
////        list.add(5);
////        list.add(4);
////        list.add(8);
////        list.add(9);
////        list.add(1);
////
////        Collections.sort(list);
////
////        System.out.println(list.toString());
//    oid main(String[] args) throws java.lang.Exception {
//    }
//}
