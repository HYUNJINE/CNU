package week4;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class testTomato {
    static int N;
    static int M;
    static int[][] box;
    static int[] dx = {1,-1, 0, 0};
    static int[] dy = {0,0, 1, -1};
    static class Cell {
        int x;
        int y;
        int day;
        public Cell (int x, int y , int day) {
            this.x = x;
            this.y = y;
            this.day = day;
        }

    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        box = new int[M][N];
        for (int i=0; i< M; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j=0; j < N; j++) {
                box[i][j] = Integer.parseInt(st.nextToken());
            }
        }
        bfs();
    }
    static void bfs() {
        Queue<Cell> q = new LinkedList<Cell>();
        int day = 0;
//     add item to queue 시작점찾기

        for (int i=0; i< M; i++) {
            for(int j=0; j<N; j++) {
                if(box[i][j] == 1 ) {
                    q.offer(new Cell(i,j,0));
                }
            }
        }
//        remove item from queue, visit countday add item to queue
        while(!q.isEmpty()) {
            Cell cell = q.poll();
            day= cell.day;
            for (int i =0 ; i< 4; i++) {
                int nx= cell.x + dx[i];
                int ny = cell.y + dy[i];

                if (nx >=0 && nx < M && ny >=0 && ny < N) {
                    if (box[nx][ny] == 0) {
                        box[nx][ny] = 1;
                        q.add(new Cell(nx,ny, day+1));
                    }
                }
            }

        }
        if (checkTomato()) {
            System.out.println(day);
        }else {
            System.out.println(-1);
        }
    }
    static boolean checkTomato() {
        for (int i = 0; i < M; i++) {
            for (int j= 0; j <N; j++) {
                if (box[i][j] == 0) {
                    return false;
                }
            }
        }
        return true;
    }
}
