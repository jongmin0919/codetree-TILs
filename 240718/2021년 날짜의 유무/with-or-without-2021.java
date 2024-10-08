import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {

    static int month = 0;
    static boolean flag = true;

    public static String checkDay(int month, int day){
        flag = true;
        Main.month = 0;

        if(month >= 1 && month <= 12){
            Main.month = month;
        } else {
            return "No";
        }
        
        // 날짜 배열의 각 날에 대응되는 그 달의 날들(2중 배열)을 사용해도 되는데 그렇게 되면 귀찮아져서 그냥 switch문을 사용함
        switch (Main.month) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                if (day < 1 || day > 31) flag = false;
                break;
            case 4: case 6: case 9: case 11:
                if (day < 1 || day > 30) flag = false;
                break;
            case 2:
                if (day < 1 || day > 28) flag = false;
                break;
        }

        return flag ? "Yes" : "No";
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] arr = br.readLine().split(" ");

        int M = Integer.parseInt(arr[0]);
        int D = Integer.parseInt(arr[1]);

        System.out.println(checkDay(M,D));
    }
}