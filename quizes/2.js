const Vector = require('../lib/vector')

console.log('1.', new Vector(-0.221, 7.437).magnitude())
console.log('2.', new Vector(8.813, -1.331, -6.247).magnitude())

console.log('3.\n',
  new Vector(5.581, -2.136).normalize().toString()
)

console.log('4.\n',
  new Vector(1.996, 3.108, -4.554).normalize().toString()
)