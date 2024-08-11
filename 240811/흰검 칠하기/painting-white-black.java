import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // 입력 읽기
        int lines = Integer.parseInt(scanner.nextLine().trim());
        List<String[]> orderArr = new ArrayList<>();
        
        for (int i = 0; i < lines; i++) {
            orderArr.add(scanner.nextLine().trim().split(" "));
        }

        int min = 0;
        int max = 0;
        int num = 0;

        // Min과 Max를 정확히 계산하여 배열의 크기를 맞춤
        for (String[] order : orderArr) {
            int steps = Integer.parseInt(order[0]);
            int temp = 0;

            if ("R".equals(order[1])) {
                temp = steps - 1;
            } else if ("L".equals(order[1])) {
                temp = -(steps - 1);
            }

            num += temp;
            if (num < min) min = num;
            if (num > max) max = num;
        }

        // 범위 설정: 음수 값을 보정하는 offset 사용
        int size = max - min + 1;

        int[] accumulator = new int[size];
        int[] blackArr = new int[size];
        int[] whiteArr = new int[size];
        char[] colorArr = new char[size];
        Arrays.fill(colorArr, ' ');

        // 초기 position을 offset으로 설정하여 항상 양수 인덱스를 사용
        int position = Math.abs(min);

        for (String[] order : orderArr) {
            int steps = Integer.parseInt(order[0]);

            if ("R".equals(order[1])) {
                for (int i = 0; i < steps; i++) {
                    accumulator[position]++;
                    blackArr[position]++;
                    colorArr[position] = 'B';

                    if (whiteArr[position] >= 2 && blackArr[position] >= 2) {
                        colorArr[position] = 'G';
                    }
                    position++;

                    if (position < 0 || position >= accumulator.length) break;
                }
                position--; // R 명령 후 position 조정
            }

            if ("L".equals(order[1])) {
                for (int i = 0; i < steps; i++) {
                    accumulator[position]++;
                    whiteArr[position]++;
                    colorArr[position] = 'W';

                    if (whiteArr[position] >= 2 && blackArr[position] >= 2) {
                        colorArr[position] = 'G';
                    }
                    position--;

                    if (position < 0 || position >= accumulator.length) break;
                }
                position++; // L 명령 후 position 조정
            }
        }

        // 결과 계산
        int[] result = new int[3]; // W, B, G 카운트
        for (int i = 0; i < colorArr.length; i++) {
            if (colorArr[i] == 'W') result[0]++;
            if (colorArr[i] == 'B') result[1]++;
            if (colorArr[i] == 'G') result[2]++;
        }

        // 결과 출력
        System.out.println(result[0] + " " + result[1] + " " + result[2]);
    }
}