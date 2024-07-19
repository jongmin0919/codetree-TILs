import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {

    public static void differChecker(String str) {
        boolean flag = false;
        for (int i = 0; i < str.length() - 1; i++) {
            if (str.charAt(i) != str.charAt(i + 1)) {
                System.out.println("Yes");
                flag = true;
                break;
            }
        }
        if (!flag) {
            System.out.println("No");
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str = br.readLine().trim();

        differChecker(str);
    }
}