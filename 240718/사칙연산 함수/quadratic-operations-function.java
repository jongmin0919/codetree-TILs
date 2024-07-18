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
        int b = Integer.parseInt(arr[2]);
        char o = arr[1].charAt(0);
        
        if(calculator(a,b,o) == 0) System.out.println("False");        
        else System.out.printf(a + " " + o + " " + b + " = " + calculator(a,b,o));    
        
        
        
            
        

        
    }
}