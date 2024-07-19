import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.stream.Collectors;

public class Main {

    public static int[] returnNumber(String[] str) {
        int A = Integer.parseInt(str[0]);
        int B = Integer.parseInt(str[1]);
        int[] numArr = new int[str.length]; 

        if (A > B) {
            numArr[0] = A + 25;
            numArr[1] = B * 2;
        } else if (A < B) {
            numArr[0] = A * 2;
            numArr[1] = B + 25;
        }
        return numArr;  // 세미콜론 추가
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] str = br.readLine().trim().split(" ");
        
        // returnNumber 메서드 호출
        int[] num = returnNumber(str);
        
        // mapToObj 메서드로 int형 타입을 String형 타입으로 변환 후 joining으로 공백을 기준으로 문자열 연결
        String result = Arrays.stream(num)
                              .mapToObj(String::valueOf)
                              .collect(Collectors.joining(" "));
        System.out.println(result);
    }
}