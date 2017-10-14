const Vector = require('../lib/vector')

console.log('1.',
  new Vector(7.887, 4.138)
    .multiply(new Vector(-8.802, 6.776))
)

console.log('2.',
  new Vector(-5.955, -4.904, -1.874)
    .multiply(new Vector(-4.496, -8.755, 7.103))
)

console.log('2.',
  new Vector(3.183, -7.627)
    .angle(new Vector(-2.668, 5.319))
)

console.log('3.',
  new Vector(7.35, 0.221, 5.188)
    .angleDegrees(new Vector(2.751, 8.259, 3.985))
)