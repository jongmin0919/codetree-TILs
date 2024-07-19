import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {

    public static int[] modifyNumbers(int a, int b) {
        int[] result = new int[2];
        
        if (a < b) {
            a += 10;
            b *= 2;
        } else {
            b += 10;
            a *= 2;
        }
        
        result[0] = a;
        result[1] = b;
        return result;
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        String[] inputs = br.readLine().trim().split(" ");
        
        int a = Integer.parseInt(inputs[0]);
        int b = Integer.parseInt(inputs[1]);
        
        int[] modifiedValues = modifyNumbers(a, b);
        
        System.out.println(modifiedValues[0] + " " + modifiedValues[1]);
    }
}