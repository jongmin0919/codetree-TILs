import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.stream.Collectors;
import java.util.*;

public class Main {
    public static void printArr(String[] arr){

        String[] stringArr = new String[arr.length];
        for(int i = 0; i < arr.length ;i++){
            int num = Integer.parseInt(arr[i]);
            if(num%2 == 0 ){
                stringArr[i] = String.valueOf(num/2);
                continue;
            }
            stringArr[i] = String.valueOf(num);
        }
        //스트림으로 만든 후 콜렉터의 조이닝 메서드를 이용해 문자열로 취합 후 출력
        String result = Arrays.stream(stringArr).collect(Collectors.joining(" "));

        System.out.println(result);
    }
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String length = br.readLine().trim();
        String[] arr = br.readLine().trim().split(" ");
        
        printArr(arr);
    }
}