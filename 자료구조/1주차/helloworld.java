import java.util.Scanner;

public class helloworld {
    private static final Scanner sc = new Scanner(System.in);

    public static void main (String[] args) {
        String input_string =sc.nextLine();
        int test_case  = Integer.parseInt(input_string);

        input_string = sc.nextLine();
        String[] repeat_count = input_string.split(" ");
        for (int i =0; i < test_case; i++) {
            int count = Integer.parseInt(repeat_count[i]);
            input_string = sc.nextLine();
            for (int j =0; j< count; j++) {
                System.out.println(input_string);
            }
        }
    }
}
// javac .\helloworld.java
// cat input_helloworld.txt | java helloworld
// 유닉스 계열에서 위 명령어로 컴파일 한 파일을 실행가능!

//javac helloworld.java -encoding UTF-8 (한국말 들어갈경우)

