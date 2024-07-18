import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {

     // 조건에 맞는 소수를 구하는 메서드
     public static boolean primeChecker(int num){

        // 소수를 판별하는 코드
        if (num <= 1) return false; // 1 이하의 숫자는 소수가 아님
        if (num == 2) return true; // 2는 소수
        for(int i = 2 ; i < num ; i++){
            if(num%i == 0) return false;
        }

        // 자릿수끼리 더해서 짝수인지를 구하는 코드
        int add = 0;
        while(num>0){
            add += num%10;
            num = num/10;
        }
        if(add%2 != 0) return false;

        return true;
    }

    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] arr = br.readLine().split(" ");

        int a = Integer.parseInt(arr[0]);
        int b = Integer.parseInt(arr[1]);
        
        int count = 0;
        for(int i = a ; i <= b ; i++){
            count += primeChecker(i) ? 1 : 0;
        }

        System.out.println(count);
        
    }
}