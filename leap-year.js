function leapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 4 === 0 && year % 100 != 0) {
        return true;
    } else {
        return false;
    }
}
const year = 2002;
const leapyear = leapYear(year);
console.log(leapyear);