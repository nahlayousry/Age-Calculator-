const month =[31,28,31,30,31,30,31,31,30,30,31]
function ageCalc(){
    let today = new Date()
    let inputdate = new Date(document.getElementById("date-inp").value)
    let birthmonth,birthday,birthyear;
    let birthdetails ={
        date:inputdate.getDate(),
        month:inputdate.getMonth()+1,
        year:inputdate.getFullYear()

    }
    let currentYear = today.getFullYear();
    let currentmonth = today.getMonth()+1;
    let currentDate = today.getDate();

    leapChecker(currentYear);
    if(
        birthdetails.year >  currentYear ||
        ( birthdetails.month > currentmonth && birthdetails.year ==currentYear )||
        (birthdetails.date > currentDate && birthdetails.month ==currentmonth && birthdetails.year ==currentYear)
        
    ){
        alert("Not Born Yet");
        displayResult(".",".",".");
        return
    }
    birthyear = currentYear - birthdetails.year;
    if(currentmonth >= birthdetails.month){
        birthmonth = currentmonth - birthdetails.month
    }else{
        birthyear--;
        birthmonth = 12 + currentmonth - birthdetails.month
    }
    if(currentDate >= birthdetails.date){
        birthday =currentDate - birthdetails.date;

    }else{
        birthmonth--;
        let days =month[currentmonth -2]
        birthday= days+currentDate-birthdetails.date;
        if(birthmonth <0){
            birthmonth=11;
            birthyear--;


        }
    }
    displayResult(birthday,birthmonth,birthyear);


}

function displayResult(bDay,bMonth,bYear){
    document.getElementById("years").textContent =bYear
    document.getElementById("months").textContent =bMonth
    document.getElementById("days").textContent =bDay

}

function leapChecker(year){
    if(year% 4==0 || (year%100==0 && year%400 ==0)){
        month[1] =29;

    }else{
        month[1]=28

    }
}