import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {

    public static void palindromeChecker(String str){
        
        String reverseStr = "";
        for(int i = str.length()-1 ; i >= 0 ; i--){
            reverseStr += str.charAt(i);
        }
        if(reverseStr.equals(str)) System.out.println("Yes");
        else System.out.println("No");
    }
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String input = br.readLine().trim();
        palindromeChecker(input);
    }
}