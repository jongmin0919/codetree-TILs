import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {

    static int month = 0;
    static int year = 0;
    static boolean flag = true;

    public static String checkNormalYear(int month, int day) {
        flag = true;
        Main.month = 0;

        if (month >= 1 && month <= 12) {
            Main.month = month;
        } else {
            return "-1";
        }
        
        switch (Main.month) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                if (day < 1 || day > 31) flag = false;
                break;
            case 4: case 6: case 9: case 11:
                if (day < 1 || day > 30) flag = false;
                break;
            case 2:
                if (day < 1 || day > 28) flag = false;
                break;
        }

        if(flag){
            if(month >= 3 && month <= 5) return "Spring";
            else if(month >= 6 && month <= 8) return "Summer";
            else if(month >= 9 && month <= 11) return "Fall";
            else if(month == 12 || month >= 1 && month <= 2) return "Winter";
        }
        return "-1"; 
    }

    public static String checkLeapYear(int month, int day) {
        flag = true;
        Main.month = 0;

        if (month >= 1 && month <= 12) {
            Main.month = month;
        } else {
            return "-1";
        }
    
        switch (Main.month) {
            case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                if (day < 1 || day > 31) flag = false;
                break;
            case 4: case 6: case 9: case 11:
                if (day < 1 || day > 30) flag = false;
                break;
            case 2:
                if (day < 1 || day > 29) flag = false;
                break;
        }

        if(flag){
            if(month >= 3 && month <= 5) return "Spring";
            else if(month >= 6 && month <= 8) return "Summer";
            else if(month >= 9 && month <= 11) return "Fall";
            else if(month == 12 || month >= 1 && month <= 2) return "Winter";
        }
        return "-1";
    }

    public static String checkYearIs(int year, int month, int day) {
        if (year % 400 == 0) {
            return checkLeapYear(month, day);
        } else if (year % 100 == 0) {
            return checkNormalYear(month, day);
        } else if (year % 4 == 0) {
            return checkLeapYear(month, day);
        } else {
            return checkNormalYear(month, day);
        }
    }
    

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] arr = br.readLine().split(" ");

        int Y = Integer.parseInt(arr[0]);
        int M = Integer.parseInt(arr[1]);
        int D = Integer.parseInt(arr[2]);

        System.out.println(checkYearIs(Y, M, D));
    }
}