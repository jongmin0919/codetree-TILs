import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {

    // 사칙연산 오버라이딩 (나누기도 정수가 나와야 되므로 나누기에 대한 오버라이딩은 따로 하지 않음)
     public static int calculator(int a, int b, char operator){
        if(operator == '+') return a + b;
        else if(operator == '-') return a - b;
        else if(operator == '*') return a * b;
        else if(operator == '/') return a / b;
        else return 0; 
    }

    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] arr = br.readLine().split(" ");

        int a = Integer.parseInt(arr[0]);
        int b = Integer.parseInt(arr[1]);
        
        int count = 0;
        for(int i = a ; i <= b ; i++){
            if (i % 2 != 0 && i % 10 != 5 && (i % 3 != 0 || i % 9 == 0)) count++;
        }
        System.out.println(count);
        
        
    }
}