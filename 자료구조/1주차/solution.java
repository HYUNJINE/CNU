//import java.io.BufferedReader;
//import java.io.InputStreamReader;
//import java.io.PrintStream;
//import java.io.UnsupportedEncodingException;
//import java.util.ArrayList;
//import java.util.Collections;
//import java.util.Comparator;
//import java.util.Iterator;
//import java.util.List;
//
//abstract class Goods implements Comparable<Goods>{
//    public String name;
//    public int stock;
//
//    public Goods(String name, int stock) {
//        this.name = name;
//        this.stock = stock;
//    }
//
//    @Override
//    public int compareTo(Goods o) {
//        if(this.getClass() == o.getClass()) {
//            return this.compare(o);
//        }else {
//            return this.getClass().toString().compareTo(o.getClass().toString());
//        }
//    }
//
//    abstract public int compare(Object o);
//}
//class Electronics extends  Goods {
//    int model;
//
//    public Electronics(String name, int stock, int model) {
//        super(name, stock);
//        this.name = name;
//        this.stock = stock;
//        this.model = model;
//    }
//
//    @Override
//    public int compare(Object o) {
//        Electronics e = (Electronics) o;
//
//        if (this.model < e.getModel()) {
//            return -1;
//        }else if (this.model > e.getModel()) {
//            return 1;
//        }
//        else {
//            if (this.stock < e.getStock()) {
//                return 1;
//            } else if (this.stock > e.getStock()) {
//                return -1;
//            }
//            return 0;
//        }
//    }
//
//    public int getModel() {
//        return model;
//    }
//
//    public void setModel(int model) {
//        this.model = model;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public int getStock() {
//        return stock;
//    }
//
//    public void setStock(int stock) {
//        this.stock = stock;
//    }
//}
//class Fruit extends Goods {
//    String kinds;
//
//    public Fruit(String name, int stock, String kinds) {
//        super(name, stock);
//        this.name = name;
//        this.kinds = kinds;
//        this.stock = stock;
//
//    }
//
//    public String getKinds() {
//        return kinds;
//    }
//
//    public void setKinds(String kinds) {
//        this.kinds = kinds;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//
//    public int getStock() {
//        return stock;
//    }
//
//    public void setStock(int stock) {
//        this.stock = stock;
//    }
//
//    @Override
//    public int compare(Object o) {
//        return stock;
//        // Fruit f = (Fruit) o;
//        //     if (this.kinds == f.getKinds()) {
//        //         return Double.compare(s2.stock, d2)
//        //     }
//        //     return this.name.compareTo(f.getName());
//
//
//    }
//
//}
//
//public class test2 {
//    public static void main(String[] args) throws java.lang.Exception {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
//        int n = Integer.parseInt(br.readLine());
//        List<Electronics> list = new ArrayList<>();
//        List<Fruit> list2 = new ArrayList<>();
//
//        for (int i = 0; i < n; i++) {
//            String[] str = br.readLine().split(" ");
//            if (str[0].equals("F")) {
//                Fruit fruit = new Fruit(str[1], Integer.parseInt(str[3]), str[2]);
//                list2.add(fruit);
//            } else {
//                Electronics elec = new Electronics(str[1], Integer.parseInt(str[3]), Integer.parseInt(str[2]) );
//                list.add(elec);
//            }
//        }
//        Collections.sort(list);
//        Collections.sort(list2);
//
//        Comparator<Fruit> myComparator = new Comparator<Fruit>() {
//            @Override
//            public int compare(Fruit s1, Fruit s2) {
//                if (s1.kinds == s2.kinds) {
//                    return Double.compare(s2.getStock(), s1.getStock());
//                }
//                return s1.getName().compareTo(s2.getName());
//            }
//        };
//        Collections.sort(list2, myComparator);
//
//        PrintStream out;
//
//        try {
//            out = new PrintStream(System.out, true, "UTF-8");
//            Iterator iter =list.iterator();
//            Iterator iter2 =list2.iterator();
//            while(iter.hasNext()) {
//                Electronics elec = (Electronics) iter.next();
//                out.println(elec.name+ ", " + elec.model + ", " + elec.stock );
//
//            }
//            while(iter2.hasNext()) {
//                Fruit fruit = (Fruit) iter2.next();
//                out.println(fruit.name+ ", " + fruit.kinds + ", " + fruit.stock );
//
//            }
//        } catch (UnsupportedEncodingException e) {
//            return;
//        }
//
//    }
//}