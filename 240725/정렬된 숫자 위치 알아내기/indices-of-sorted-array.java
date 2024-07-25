import java.util.*;

class Num {
    static int itemNumber = 1;
    int name;
    int num;

    Num(int name) {
        this.name = name;
        this.num = Num.itemNumber++;
    }

    // 디버깅용 오버라이딩 toString
    @Override
    public String toString() {
        return "Num{name=" + name + ", num=" + num + "}";
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int length = Integer.parseInt(scanner.nextLine().trim());
        String[] input = scanner.nextLine().trim().split(" ");
        
        List<Num> originalArr = new ArrayList<>();
        List<Num> sortedArr = new ArrayList<>();
        
        // 원본 배열 복사본 만들기
        for (int i = 0; i < length; i++) {
            int value = Integer.parseInt(input[i].trim());
            originalArr.add(new Num(value));
        }
        
        // 공통 자원 1로 초기화
        Num.itemNumber = 1;
        
        // 입력 값을 정렬하여 정렬된 원본 배열 복사본 만들기
        // input을 스트림으로 만든 뒤 int 스트림으로 변환해주고 sorted로 정렬한 후 스트림을 배열로 변환
        int[] sortedValues = Arrays.stream(input)
                                   .mapToInt(Integer::parseInt)
                                   .sorted()
                                   .toArray();
        for (int value : sortedValues) {
            sortedArr.add(new Num(value));
        }
        
        // 2중 for문을 돌리고 대응되는 name을 찾을 때 position 값을 원본 배열 복사본의 
        // 해당 요소에 할당하고 정렬된 원본 배열 복사본의 해당 객체를 삭제 후 break(더 도는건 손해)
        for (int i = 0; i < originalArr.size(); i++) {
            for (int j = 0; j < sortedArr.size(); j++) {
                if (originalArr.get(i).name == sortedArr.get(j).name) {
                    originalArr.get(i).num = sortedArr.get(j).num;
                    sortedArr.remove(j);
                    break;
                }
            }
        }
        
        // 작업이 끝난 뒤 원본 배열 중 각 요소들의 num 들만 담은 배열 반환 받고 join으로 합친 뒤 출력.
        int[] result = new int[length];
        for (int i = 0; i < originalArr.size(); i++) {
            result[i] = originalArr.get(i).num;
        }
        System.out.println(Arrays.toString(result).replaceAll("[\\[\\],]", ""));
    }
}