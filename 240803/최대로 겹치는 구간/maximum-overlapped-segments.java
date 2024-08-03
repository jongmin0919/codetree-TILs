import java.util.Arrays;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int length = scanner.nextInt();
        scanner.nextLine(); // 줄바꿈 문자 처리
        
        int minRange = Integer.MAX_VALUE;
        int maxRange = Integer.MIN_VALUE;
        int[][] ranges = new int[length][2];
        
        // 입력 및 범위 계산
        for (int i = 0; i < length; i++) {
            String line = scanner.nextLine();
            String[] parts = line.split(" ");
            int startPoint = Integer.parseInt(parts[0]);
            int endPoint = Integer.parseInt(parts[1]);
            ranges[i] = new int[]{startPoint, endPoint};
            
            if (startPoint < minRange) {
                minRange = startPoint;
            }
            if (endPoint > maxRange) {
                maxRange = endPoint;
            }
        }
        
        // 음수 인덱스를 처리하기 위한 오프셋 계산
        int offset = Math.abs(minRange);
        int size = maxRange - minRange + 1;
        int[] arr = new int[size];
        
        // 배열 값 증가
        for (int[] range : ranges) {
            int startPoint = range[0];
            int endPoint = range[1];
            for (int i = startPoint + offset; i < endPoint + offset; i++) {
                if (i >= 0 && i < size) { // 배열의 범위를 벗어나지 않도록 확인
                    arr[i]++;
                }
            }
        }
        
        // 배열에서 최대값 찾기
        int max = Arrays.stream(arr).max().orElse(0);
        
        System.out.println(max);
        
        scanner.close();
    }
}