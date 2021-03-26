import java.io.*;
import java.util.Arrays;
import java.util.StringTokenizer;

public class sicu {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb = new StringBuilder();
        int n = Integer.parseInt(br.readLine());
        int m = Integer.parseInt(br.readLine());
        int[] sum = new int[n+1];

        for (int i=0; i < m; i++) {

            StringTokenizer st = new StringTokenizer(br.readLine());
            int from = Integer.parseInt(st.nextToken());
            int to = Integer.parseInt(st.nextToken());
            int deep = Integer.parseInt(st.nextToken());

//            sum[from] += deep;
//            sum[to] += deep;
//
            for (int j=from; j<=to ; j++ ) {

                sum[j]+= deep;
            }

        }
        int max= 0;

        Arrays.sort(sum);
        System.out.println(sum[sum.length-1]);

    }
}
