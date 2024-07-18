const fs = require('fs');

// 유효한 날짜인지 판단하는 함수
function checkNormalYear(month, day) {
    let flag = true;
    
    // 유효한 달인지 판단
    if (month < 1 || month > 12) {
        return "-1";
    }
    
    // 유효한 날짜인지 판단
    switch (month) {
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

    // 계절 반환
    if (flag) return SeasonSelector(month);
    return "-1";
}

// 윤년일 때 유효한 날짜인지 판단하는 함수
function checkLeapYear(month, day) {
    let flag = true;
    
    // 유효한 달인지 판단
    if (month < 1 || month > 12) {
        return "-1";
    }
    
    // 유효한 날짜인지 판단
    switch (month) {
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

    // 계절 반환
    if (flag) return SeasonSelector(month);
    return "-1";
}

// 주어진 연도를 기준으로 윤년, 평년 메서드 중 조건에 따라 메서드를 하나 실행하는 함수
function checkYearIs(year, month, day) {
    if (year % 400 === 0) {
        return checkLeapYear(month, day);
    } else if (year % 100 === 0) {
        return checkNormalYear(month, day);
    } else if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return checkLeapYear(month, day);
    } 
}

// 주어진 달이 속한 계절을 반환하는 함수
function SeasonSelector(month) {
    if (month >= 3 && month <= 5) return "Spring";
    if (month >= 6 && month <= 8) return "Summer";
    if (month >= 9 && month <= 11) return "Fall";
    if (month === 12 || month >= 1 && month <= 2) return "Winter";
    return "-1";
}

// main 함수
function main() {
    const input = fs.readFileSync('/dev/stdin').toString().trim().split(" ");
    const Y = parseInt(input[0]);
    const M = parseInt(input[1]);
    const D = parseInt(input[2]);

    console.log(checkYearIs(Y, M, D));
}

main();