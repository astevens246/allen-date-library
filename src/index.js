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
}

// The date Object can be initialized in different ways:
const a = new D() // no parameters
console.log(`Year for a: ${a.year}, Yr for a: ${a.yr}`);

const b = new D('January 1, 1970') // with a string
console.log(`Year for b: ${b.year}, Yr for b: ${b.yr}`);

const c = new D(2001, 4, 12, 16, 45) // with year, month, date, hours, mins
console.log(`Year for c: ${c.year}, Yr for c: ${c.yr}`);

const d = new D(new Date()) // with another date object
console.log(`Year for d: ${d.year}, Yr for d: ${d.yr}`);


console.log(d.year)
console.log(d.yr)

module.exports = D