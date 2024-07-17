import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine().trim();

        List<Character> alphaStack = new ArrayList<>();
        List<Integer> encodingStack = new ArrayList<>();

        char state = input.charAt(0);
        alphaStack.add(state);
        int count = 1;

        for (int i = 1; i < input.length(); i++) {
            if (state == input.charAt(i)) {
                count++;
            } else {
                encodingStack.add(count);
                state = input.charAt(i);
                alphaStack.add(state);
                count = 1;
            }
        }
        encodingStack.add(count); // 마지막 문자의 등장 횟수 추가

        StringBuilder result = new StringBuilder();
        for (int i = 0; i < alphaStack.size(); i++) {
            result.append(alphaStack.get(i)).append(encodingStack.get(i));
        }

        System.out.println(result.length());
        System.out.println(result);
    }
}