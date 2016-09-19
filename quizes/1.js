const Vector = require('./lib/vector')

console.log('1.\n',
  new Vector(8.218, -9.341)
    .add(new Vector(-1.129, 2.111))
    .toString()
)

console.log('2.\n',
  new Vector(7.119, 8.215)
    .subtract(new Vector(-8.223, 0.878))
    .toString()
)

console.log('3.\n',
  new Vector(1.671, -1.012, -0.318)
    .multiply(7.41)
    .toString()
)