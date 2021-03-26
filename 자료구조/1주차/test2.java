import java.io.*;

import java.util.*;

class Student implements Comparable<Student>{
    String name;
    boolean re;
    int score;

    public void setName(String name) {
        this.name = name;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Student(String name, boolean re , int score) {
        this.name = name;
        this.re = re;
        this.score = score;

    }

    public String getName() {
        return this.name;

    }
    @Override
    public int compareTo(Student s)  {
        if (this.score < s.getScore()) {
            return 1;
        }else if (this.score > s.getScore()) {
            return -1;
        }
        else {
            if (this.re == true && s.isRe()) return 0;
            else if (this.re == true && !s.isRe()) return 1;
            else if (this.re == false && s.isRe()) return -1;
            return 0;
        }
    }

    public boolean isRe() {
        return re;
    }

    public void setRe(boolean re) {
        this.re = re;
    }
}




public class test2 {
    

    public static void main(String[] args) throws java.lang.Exception {
        List<Student> list = new ArrayList<Student>();
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int n = Integer.parseInt(br.readLine());

        for (int i = 0; i < n; i++) {
            String[] str = br.readLine().split(" ");
            String name = str[0];
            Boolean re = Boolean.parseBoolean(str[2]);
            Integer score = Integer.parseInt(str[1]);
            list.add(new Student(name, re, score));
        }
        Collections.sort(list);
        PrintStream out;
       
        try {
            out = new PrintStream(System.out, true, "UTF-8");
            Iterator iter =list.iterator();
             while(iter.hasNext()) {
                Student str = (Student) iter.next();
                out.println(str.re);
                out.println(str.score);
             }
        } catch (UnsupportedEncodingException e) {
            return;
        }
        


       
    }
}
