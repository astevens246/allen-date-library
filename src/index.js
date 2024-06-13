const { months, mons, days, dys } = require('./utils')

/** checks for leap year if the year is a multiple of 4 and not a multiple of 100 */
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
/**
 * Utility class for date manipulation.
 */
class D {
	/**
     * Challenge 1
	 * Constructs a new D object.
     * @param {...any} args - The arguments to pass to the Date constructor.
     */
	constructor(...args) { //args is an array of parameters 
		this._date = new Date(...args)
	}
    /**
	 * Challenge 2
     * Gets the full year.
     * @returns {number} The full year.
     */
	get year() {
		return this._date.getFullYear()

	}
	/** 
	 * Get the short year
	 * @returns {number} The short year
	 */
	get yr() {
		return this._date.getFullYear() % 100
	}
	/**
	 * Get the month
	 * @returns {string} The month
	 */
	get month() {
		return months[this._date.getMonth()]
	}
	/**
	 * Get the short month
	 * @returns {string} The short month
	 * */
	get mon() {
		return mons[this._date.getMonth()]
	}
	/**
	 * Get the day
	 * @returns {string} The day
	 * */
	get day() {
		return days[this._date.getDay()]
	}
	/**
	 * Get the short day
	 * @returns {string} The short day
	 * */
	get dy() {
		return dys[this._date.getDay()]
	}
	/**
	 * Get the date
	 * @returns {number} The date
	 * */

	get date() {
		return this._date.getDate()
	}
	/**
	 * Get the hours
	 * @returns {number} The hours
	 * */
	get hour() {
		return this._date.getHours()
	}
	/**
	 * Get the minutes
	 * @returns {number} The minutes
	 * */
	get mins() {
		return this._date.getMinutes()
	}
	/**
	 * Get the seconds
	 * @returns {number} The seconds
	 * */
	get secs() {
		return this._date.getSeconds()
	}
/** Define the format method in the D class that takes a mask string as an argument:
 Initialize an empty string, dateStr

 Define an object, special, where each key is a special character and each value is the corresponding date part

 Loop over each character in the mask string:
 	If the character is a key in the special object:
 		Append the value of that key in the special object to dateStr
 	Else:
 		Append the character to dateStr

 Return dateStr
*/

    /**
	 * Challenge 3
     * Formats the date.
     * @param {string} str - The format string.
     * @returns {string} The formatted date.
     */

	/** Ordinal function */
	ordinal(number) {
		if (number > 3 && number < 21) return "th";
		switch (number % 10) {
		  case 1:
			return "st";
		  case 2:
			return "nd";
		  case 3:
			return "rd";
		  default:
			return "th";
		}
	  };
	format(str = '') {
		let dateStr = '';

		const special = {
            'Y': this.year,
            'y': this.yr,
            'M': this.month,
            'm': this.mon,
            'D': String(this.date).padStart(2, '0'),
            'd': this.date,
            'L': this.day,
            'l': this.dy,
            '#': this.ordinal(this.date),
            'H': String(this.hours).padStart(2, '0'),
            'h': this.hours,
            'I': String(this.mins).padStart(2, '0'),
            'i': this.mins,
            'S': String(this.secs).padStart(2, '0'),
            's': this.secs
		};

		for (let i = 0; i < str.length; i+= 1) {
			if (special[str[i]] !== undefined) {
				dateStr += special[str[i]];
			} else {
				dateStr += str[i];
			}
		}

		return dateStr;
	}

	/**Challenge 4 
	Make a when() method 
	This method should compare the date owned by your class instance with the current date. */ 
    /**
     * Compares the date owned by the class instance with the current date.
     * @returns {string} A string describing the difference between the two dates.
     */
	when () {
		const now = new Date() /** creates new date object with current date and time */
		const diffSeconds = Math.round((now - this._date) / 1000) /** calculates the difference in seconds */
		const diffMinutes = Math.round(diffSeconds / 60) /** calculates the difference in minutes */
		const diffHours = Math.round(diffMinutes / 60) /** calculates the difference in hours */
		const day = this._date /** retrieves the date stored in this._date */
		const diff = now - day /** calculates the difference in milliseconds */
		const diffDays = Math.round(diff / (1000 * 60 * 60 * 24)) /** calculates the difference in days*/
		const diffMonths = Math.round(diffDays / 30) /** calculates the difference in months assuming each month is 30 days */
		const diffYears = Math.round(diffDays / 365) /** calculates the difference in years assuming each year is 365 days */

		// Adjust for leap years
		if (isLeapYear(day.getFullYear()) && day.getMonth() > 1) {
			diffDays + 1
		}

		if (diffDays === 0) { /** if the difference in days is 0, return 'Today' */
			return 'Today'
		} else if (Math.abs(diffSeconds) < 60) { /** if the difference in seconds is less than 60, returns number of seconds ago or from now */
			return diffSeconds > 0 ? `${diffSeconds} seconds ago` : `${Math.abs(diffSeconds)} seconds from now`
		} else if (Math.abs(diffMinutes) < 60) { /** if the difference in minutes is less than 60, returns number of minutes ago or from now */
			return diffMinutes > 0 ? `${diffMinutes} minutes ago` : `${Math.abs(diffMinutes)} minutes from now` 
		} else if (Math.abs(diffHours) < 24) { /** if the difference in hours is less than 24, returns number of hours ago or from now */
			return diffHours > 0 ? `${diffHours} hours ago` : `${Math.abs(diffHours)} hours from now`
		} else if (Math.abs(diffDays) < 30) { /** if the difference in days is less than 30, returns number of days ago or from now */
			return diffDays > 0 ? `${diffDays} days ago` : `${Math.abs(diffDays)} days from now`
		} else if (Math.abs(diffMonths) < 12) { /** if the difference in months is less than 12, returns number of months ago or from now */
			return diffMonths > 0 ? `${diffMonths} months ago` : `${Math.abs(diffMonths)} months from now`
		} else { /** otherwise it returns the number of years ago or from now */
			return diffYears > 0 ? `${diffYears} years ago` : `${Math.abs(diffYears)} years from now`
		}

	}

}

// Edge Case: it doesn't work when it's a leap year and it's the month of February
// Problem:  The ordinal method does not account for leap years.
// Solution: adjust the method to account for leap years.
// To identify a leap year, two conditions must be satisfied:
	// The year must be a multiple of 400.
	// Alternatively, if the year is a multiple of 4 and not a multiple of 100, it’s also considered a leap year.



const d = new D(new Date()) // with another date object

console.log( d.year )  // 2021 - Full year
console.log( d.yr )    // 21   - Short year
console.log( d.month ) // July - Full month
console.log( d.mon )   // Jul  - Short month
console.log( d.day )   // Tuesday - Full day
console.log( d.dy )    // Tue  - Short day
console.log( d.date )  // 27   - Date
console.log( d.hours ) // 18   - Hour
console.log( d.mins )  // 6    - Minutes
console.log( d.secs )  // 5    - Seconds


const specificDate = new Date('2011-12-31'); // Set the date to December 31, 2022
const dSpecific = new D(specificDate);
console.log(dSpecific.when()); // Prints the difference between the current date and December 31, 2022

// Create D objects for dates in February and March of a leap year
const leapYearFebDate = new D(new Date('2020-02-01'));
const leapYearMarDate = new D(new Date('2020-03-01'));

// Create D objects for dates in February and March of a non-leap year
const nonLeapYearFebDate = new D(new Date('2021-02-01'));
const nonLeapYearMarDate = new D(new Date('2021-03-01'));

// Compare the outputs of the when method
console.log('Leap year February:', leapYearFebDate.when());
console.log('Leap year March:', leapYearMarDate.when());
console.log('Non-leap year February:', nonLeapYearFebDate.when());
console.log('Non-leap year March:', nonLeapYearMarDate.when());
module.exports = D