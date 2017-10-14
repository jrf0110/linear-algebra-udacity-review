class Vector {
  static createFromArray(coordinates) {
    return new (
      Vector.bind.apply(Vector, [Vector].concat(coordinates))
    )()
  }

  static eq(v1, v2) {
    return v1.coordinates
      .every((cord, i) => cord === v2.coordinates[i])
  }

  static add(v1, v2) {
    return Vector.createFromArray(
      v1.coordinates.map((coord, i) => coord + v2.coordinates[i])
    )
  }

  static subtract(v1, v2) {
    return Vector.createFromArray(
      v1.coordinates.map((coord, i) => coord - v2.coordinates[i])
    )
  }

  static multiply(v1, v2) {
    return v1.coordinates
      .map((coord, i) => coord * v2.coordinates[i])
      .reduce((a, b) => a + b, 0)
  }

  static angle(v1, v2) {
    const result = Math.acos(v1.normalize().multiply(v2.normalize()))
    return result < Vector.tolerance > result ? 0 : result
  }

  static angleDegrees(v1, v2) {
    return Vector.angle(v1, v2) * (180 / Math.PI)
  }

  static areParallel(v1, v2) {
    const angle = v1.angle(v2)

    return (
      v1.isZero() ||
      v2.isZero() ||
      angle < Vector.tolerance ||
      Math.abs(Math.PI - angle) < Vector.tolerance
    )
  }

  static areOrthogonal(v1, v2) {
    return Math.abs(Vector.multiply(v1, v2)) <= Vector.tolerance
  }

  get dimension() {
    return this.coordinates.length
  }

  constructor() {
    this.coordinates = Array.prototype.slice.call(arguments)
  }

  toString() {
    const arr = len => Array.apply(null, Array(len))

    const widest = this.coordinates
      .reduce((curr, coordinate) => {
        const strLen = coordinate.toString().length

        return strLen > curr ? strLen : curr
      }, 0)

    const cap = `+-${arr(widest + 1).join(' ')}-+`

    return [
      cap,
      this.coordinates
        .map(coord => coord.toString())
        .map(coord => `| ${arr(widest - coord.length + 1).join(' ')}${coord} |`)
        .join('\n'),
      cap,
    ].join('\n')
  }

  eq(v) {
    return Vector.eq(this, v)
  }

  add(v) {
    return Vector.add(this, v)
  }

  subtract(v) {
    return Vector.subtract(this, v)
  }

  multiply(val) {
    if (typeof val === 'number') {
      return Vector.createFromArray(
        this.coordinates.map(coord => coord * val)
      )
    }

    if (val instanceof Vector) {
      return Vector.multiply(this, val)
    }

    throw new TypeError(`Cannot multiply ${typeof val}`)
  }

  magnitude() {
    return Math.sqrt(
      this.coordinates
        .map(v => Math.pow(v, 2))
        .reduce((a, b) => a + b)
    )
  }

  normalize() {
    return this.multiply(1 / this.magnitude())
  }

  angle(v) {
    return Vector.angle(this, v)
  }

  angleDegrees(v) {
    return Vector.angleDegrees(this, v)
  }

  isParallel(v) {
    return Vector.areParallel(this, v)
  }

  isOrthogonal(v) {
    return Vector.areOrthogonal(this, v)
  }

  isZero() {
    return this.coordinates.every(c => c === 0)
  }
}

Vector.tolerance = 1e-7

module.exports = Vector