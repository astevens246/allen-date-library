const { months, mons, days, dys } = require('./utils')
class D {
	constructor(...args) { //args is an array of parameters 
		this._date = new Date(...args)
	}

	get year() {
		return this._date.getFullYear()

	}
	get yr() {
		return this._date.getFullYear() % 100
	}

	get month() {
		return months[this._date.getMonth()]
	}

	get mon() {
		return mons[this._date.getMonth()]
	}

	get day() {
		return days[this._date.getDay()]
	}

	get dy() {
		return dys[this._date.getDay()]
	}

	get date() {
		return this._date.getDate()
	}

	get hours() {
		return this._date.getHours()
	}

	get mins() {
		return this._date.getMinutes()
	}

	get secs() {
		return this._date.getSeconds()
	}
//Define the format method in the D class that takes a mask string as an argument:
// Initialize an empty string, dateStr

// Define an object, special, where each key is a special character and each value is the corresponding date part

// Loop over each character in the mask string:
// 	If the character is a key in the special object:
// 		Append the value of that key in the special object to dateStr
// 	Else:
// 		Append the character to dateStr

// Return dateStr
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

}

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

module.exports = D