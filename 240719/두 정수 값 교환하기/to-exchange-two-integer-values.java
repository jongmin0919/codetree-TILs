import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {

    // 스왑 메서드
    public static int[] swapNumbers(int a, int b) {
        int temp = a;
        a = b;
        b = temp;

        return new int[]{a, b};
    }

    public static void main(String[] args) {
        try {
            BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
            String[] inputArr = br.readLine().split(" ");
            int a = Integer.parseInt(inputArr[0]);
            int b = Integer.parseInt(inputArr[1]);

            int[] swappedArr = swapNumbers(a, b);

            System.out.println(swappedArr[0] + " " + swappedArr[1]);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}