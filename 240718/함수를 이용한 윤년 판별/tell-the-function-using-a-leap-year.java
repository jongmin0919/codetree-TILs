import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.Scanner;
/*여기서는 이중 if문을 사용했다.*/
public class Main {
    public static void main(String[] arges) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int year = Integer.parseInt(br.readLine());
        
        //첫번째 조건문 : 1부터 2021년 까지이면서 해당 연도가 4로 나누어 떨어지는 4의 배수인 경우
        if(year%4==0 && (year >= 1 && year <= 2021)){
            
            // 두번째 조건문 : 400으로 나누어 떨어지지 않고 100으로 나누어 떨어지면 평년이므로 false (else는 윤년이므로 true)
            if(year%400!=0 && year%100==0)System.out.println(false);
            else System.out.println(true);
        }else System.out.println(false);
    }
}