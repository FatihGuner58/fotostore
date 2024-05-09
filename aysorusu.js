function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}


const month = 2; 
const year = 2024; 
const days = daysInMonth(month, year);
console.log(`Year: ${year}, Month: ${month}, Days: ${days}`);