class Vector {
  static createFromArray(coordinates) {
    return new (
      Vector.bind.apply(Vector, [Vector].concat(coordinates))
    )()
  }

  constructor() {
    this.coordinates = Array.prototype.slice.call(arguments)
    this.dimension = this.coordinates.length
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
    return this.coordinates
      .every((cord, i) => cord === v.coordinates[i])
  }

  add(v) {
    return Vector.createFromArray(
      this.coordinates.map((coord, i) => coord + v.coordinates[i])
    )
  }

  subtract(v) {
    return Vector.createFromArray(
      this.coordinates.map((coord, i) => coord - v.coordinates[i])
    )
  }

  multiply(val) {
    if (typeof val === 'number') {
      return Vector.createFromArray(
        this.coordinates.map(coord => coord * val)
      )
    }

    if (val instanceof Vector) {
      return this.coordinates
        .map((coord, i) => coord * val.coordinates[i])
        .reduce((a, b) => a + b, 0)
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
    return Math.acos(this.normalize().multiply(v.normalize()))
  }

  angleDegrees(v) {
    return this.angle(v) * (180 / Math.PI)
  }
}

module.exports = Vector