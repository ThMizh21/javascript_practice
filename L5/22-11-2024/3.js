// Sort an array of Dates given in the string format without using any libraries 
// (only parsing the string to convert it to Integer can be used you are not suppose to use string 
//     split etc). Eg ["JAN-09-2015", "FEB-01-2024", "OCT-10-1987", "MAR-14-2000"] output should be 
//     ["OCT-10-1987","MAR-14-2000", "JAN-09-2015",  "FEB-01-2024"]

function sortDates(dates) {
    // Helper function to convert month abbreviation to number
    function getMonthNumber(monthStr) {
        if (monthStr == "JAN") return 1;
        if (monthStr == "FEB") return 2;
        if (monthStr == "MAR") return 3;
        if (monthStr == "APR") return 4;
        if (monthStr == "MAY") return 5;
        if (monthStr == "JUN") return 6;
        if (monthStr == "JUL") return 7;
        if (monthStr == "AUG") return 8;
        if (monthStr == "SEP") return 9;
        if (monthStr == "OCT") return 10;
        if (monthStr == "NOV") return 11;
        if (monthStr == "DEC") return 12;
    }

    // Bubble sort to sort the dates manually
    for (let i = 0; i < dates.length - 1; i++) {
        for (let j = 0; j < dates.length - i - 1; j++) {
            let date1 = dates[j];
            let date2 = dates[j + 1];
            
            // Extract month, day, and year for both dates
            let month1 = getMonthNumber(date1.substring(0, 3)); // first 3 characters
            let day1 = parseInt(date1.substring(4, 6)); // characters 4-5
            let year1 = parseInt(date1.substring(7, 11)); // characters 7-10

            let month2 = getMonthNumber(date2.substring(0, 3)); // first 3 characters
            let day2 = parseInt(date2.substring(4, 6)); // characters 4-5
            let year2 = parseInt(date2.substring(7, 11)); // characters 7-10

            // Compare years, months, and days
            if (year1 > year2 || (year1 === year2 && month1 > month2) || 
                (year1 === year2 && month1 === month2 && day1 > day2)) {
                // Swap if dates are out of order
                dates[j] = date2;
                dates[j + 1] = date1;
            }
        }
    }

    return dates;
}

// Example usage:
const dates = ["JAN-09-2015", "FEB-01-2024", "OCT-10-1987", "MAR-14-2000"];
const sortedDates = sortDates(dates);
console.log(sortedDates);  // Output: ["OCT-10-1987", "MAR-14-2000", "JAN-09-2015", "FEB-01-2024"]
