import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.Arrays;

public class Main {

    public static String contiguousSubarrayChecker(String[] A, String[] B) {  
        boolean flag = false;
        for (int i = 0; i <= A.length - B.length; i++) {
            if (A[i].equals(B[0])) {
                int cnt = 0;
                for (int j = 0; j < B.length; j++) {
                    if (!A[i + j].equals(B[j])) break;
                    else cnt++;
                }
                if (cnt == B.length) {
                    flag = true;
                    break;
                }
            }
        }
        return flag ? "Yes" : "No";
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] arr = br.readLine().split(" ");

        int aLength = Integer.parseInt(arr[0]);
        int bLength = Integer.parseInt(arr[1]);

        String[] A = br.readLine().split(" ");
        String[] B = br.readLine().split(" ");
       
        System.out.println(contiguousSubarrayChecker(A, B));
    }
}