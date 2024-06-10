const D = require('../src/index');
const { dys, days, months, mons } = require('../src/utils')

const today = new Date()
const d = new D()
const bDay = new D(1993, 7, 26)

test('D.year', () => {
    expect(d.year).toBe(today.getFullYear())
    expect(bDay.year).toBe(1993)
})

test('D.yr', () => {
    expect(d.yr).toBe(today.getFullYear() % 100)
    expect(bDay.yr).toBe(93)
})

test('D.month', () => {
    expect(bDay.month).toBe('August')

})

test('D.mon', () => {
    expect(bDay.mon).toBe('Aug')
})

test('D.day', () => {
    expect(d.day).toBe(days[today.getDay()])
    expect(bDay.day).toBe('Thursday')
}
)

test('D.dy', () => {
    expect(d.dy).toBe(dys[today.getDay()])
    expect(bDay.dy).toBe('Thu')
})

test('D.date', () => {
    expect(d.date).toBe(today.getDate())
    expect(bDay.date).toBe(26)
})

test('D.hour', () => {
    expect(d.hour).toBe(today.getHours())
    expect(bDay.hour).toBe(0)
})

test('D.mins', () => {
    expect(d.mins).toBe(today.getMinutes())
    expect(bDay.mins).toBe(0)
})

test('D.secs', () => {
    expect(d.secs).toBe(today.getSeconds())
    expect(bDay.secs).toBe(0)
})
