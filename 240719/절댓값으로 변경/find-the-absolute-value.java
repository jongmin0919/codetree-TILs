import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {

    public static void absMaker(int[] arr){
        String str = "";
        for (int item : arr) {
                str += String.valueOf(Math.abs(item)) + " ";
        }
        System.out.println(str.trim());
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String length = br.readLine().trim();
        String[] arr = br.readLine().trim().split(" ");

        int[] numArr = new int[arr.length];
            for (int i = 0; i < arr.length; i++) {
                numArr[i] = Integer.parseInt(arr[i]);
            }
        absMaker(numArr);
    }
}