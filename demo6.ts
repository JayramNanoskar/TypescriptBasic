enum DaysOfTheWeek{
    SUN = 10,//default value 0, we can assign custom value 
    MON, 
    TUE,
    WED, 
    THU, 
    FRI, 
    SAT
}

let day: DaysOfTheWeek;
day = DaysOfTheWeek.MON;
console.log(day);

if(day === DaysOfTheWeek.MON){
    console.log("Hello Welcome");
}
