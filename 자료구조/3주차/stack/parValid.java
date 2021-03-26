import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class parValid {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int counter = Integer.parseInt(br.readLine());

        while(counter-- > 0) {
            Stack<Character> stack = new Stack<Character>();
            boolean isVPS =true;
            String input = br.readLine();
            for (int i=0; i< input.length(); i++) {
                char temp = input.charAt(i);
                if (temp == '(') {
                    stack.push(temp);
                }else if (temp == ')') {
                    if (!stack.isEmpty()) {
                        stack.pop();
                    }
                }else {
                    isVPS = false;
                }
            }
            if (!stack.isEmpty()) {
                isVPS = false;
            }
            if(isVPS) {
                System.out.println("YES");
            }
            else {
                System.out.println("NO");

            }
        }

    }
}
