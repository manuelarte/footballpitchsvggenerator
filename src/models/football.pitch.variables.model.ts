export class FootballPitchVariables {
  private readonly _length: number
  private readonly _width: number

  constructor (length: number, width: number) {
    this._length = length
    this._width = width
  }

  /**
   * The length of the pitch.
   */
  get length (): number {
    return this._length
  }

  /**
   * The width of the pitch.
   */
  get width () {
    return this._width
  }
}
