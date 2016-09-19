const assert = require('assert')
const Vector = require('../lib/vector')

describe('Vector', () => {
  it('constructor(...coordinates)', () => {
    const v1 = new Vector(1, 2, 3)
    assert.deepEqual(v1.coordinates, [1, 2, 3])
  })

  it('.toString()', () => {
    const v1 = new Vector(11, 2, 3)
    assert.equal(v1.toString(), [
      '+-  -+',
      '| 11 |',
      '|  2 |',
      '|  3 |',
      '+-  -+',
    ].join('\n'))
  })

  it('.eq(v)', () => {
    const v1 = new Vector(1, 2, 3)
    const v2 = new Vector(1, 2, 3)
    const v3 = new Vector(2, 2, 3)

    assert(v1.eq(v2))
    assert(!v1.eq(v3))
  })

  it('.add(v)', () => {
    const v1 = new Vector(1, 2, 3)
    const v2 = new Vector(1, 2, 3)

    assert.deepEqual(v1.add(v2).coordinates, [
      2, 4, 6
    ])
  })

  it('.subtract(v)', () => {
    const v1 = new Vector(4, 3, 2)
    const v2 = new Vector(1, 2, -3)

    assert.deepEqual(v1.subtract(v2).coordinates, [
      3, 1, 5
    ])
  })

  it('.multiply(v)', () => {
    const v1 = new Vector(4, 3, -2)

    assert.deepEqual(v1.multiply(2).coordinates, [
      8, 6, -4
    ])
  })

  it('.multiply(v: Vector)', () => {
    const v1 = new Vector(4, 3, -2)
    const v2 = new Vector(2, 3, 1)

    assert.equal(v1.multiply(v2), 15)
  })

  it('.magnitude()', () => {
    const v1 = new Vector(-1, 1, 1)

    assert.equal(v1.magnitude(), Math.sqrt(3))
  })

  it('.normalize()', () => {
    const v1 = new Vector(-1, 1, 1)

    assert.deepEqual(v1.normalize().coordinates, [
      -1 / Math.sqrt(3),
      1 / Math.sqrt(3),
      1 / Math.sqrt(3),
    ])
  })

  it('.angle(v)', () => {
    const v1 = new Vector(3.183, -7.627)
    const v2 = new Vector(-2.668, 5.319)

    assert(Math.abs(v1.angle(v2) - 3.0720263098372476) < 0.001)
  })

  it('.angleDegrees(v)', () => {
    const v1 = new Vector(7.35, 0.221, 5.188)
    const v2 = new Vector(2.751, 8.259, 3.985)

    assert.equal(v1.angleDegrees(v2), 60.27581120523091)
  })
})