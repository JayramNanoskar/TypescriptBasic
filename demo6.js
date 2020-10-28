var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["SUN"] = 10] = "SUN";
    DaysOfTheWeek[DaysOfTheWeek["MON"] = 11] = "MON";
    DaysOfTheWeek[DaysOfTheWeek["TUE"] = 12] = "TUE";
    DaysOfTheWeek[DaysOfTheWeek["WED"] = 13] = "WED";
    DaysOfTheWeek[DaysOfTheWeek["THU"] = 14] = "THU";
    DaysOfTheWeek[DaysOfTheWeek["FRI"] = 15] = "FRI";
    DaysOfTheWeek[DaysOfTheWeek["SAT"] = 16] = "SAT";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
var day;
day = DaysOfTheWeek.MON;
console.log(day);
if (day === DaysOfTheWeek.MON) {
    console.log("Hello Welcome");
}
