import java.io.*;
import java.util.StringTokenizer;


public class rangeSum {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb = new StringBuilder();

        int n = Integer.parseInt(br.readLine());
        String[] input = br.readLine().split(" ");
        int[] sum = new int[n+2];
        sum[0] = 0;
        for (int i= 1; i < n+1; i++) {
            sum[i] = sum[i-1] + Integer.parseInt(input[i-1]);
        }
//        System.out.println(sum[0]); 0
//        System.out.println(sum[1]); 10
//        System.out.println(sum[2]); 30
//        System.out.println(sum[3]); 60
//        System.out.println(sum[3]); 100
        int m = Integer.parseInt(br.readLine());
        for(int i= 0; i< m; i++) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            sb.append(-sum[Integer.parseInt(st.nextToken())-1] + sum[Integer.parseInt(st.nextToken())]).append("\n");
//            bw.write(sb.toString());
        }
        bw.write(sb.toString());
        bw.close();
    }
}
