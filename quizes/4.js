const Vector = require('../lib/vector')

let v, w

v = new Vector(-7.579, -7.88)
w = new Vector(22.737, 23.64)
console.log(`
${v.toString()}
${w.toString()}
  Parallel: ${v.isParallel(w)}
  Orthogonal: ${v.isOrthogonal(w)}
`)

v = new Vector(-2.029, 9.97, 4.172)
w = new Vector(-9.231, -6.639, -7.245)
console.log(`
${v.toString()}
${w.toString()}
  Parallel: ${v.isParallel(w)}
  Orthogonal: ${v.isOrthogonal(w)}
`)

v = new Vector(-2.328, -7.284, -1.214)
w = new Vector(-1.821, 1.072, -2.94)
console.log(`
${v.toString()}
${w.toString()}
  Parallel: ${v.isParallel(w)}
  Orthogonal: ${v.isOrthogonal(w)}
`)

