export class FootballPitchVariables {
  private readonly _length: number
  private readonly _percentageShown: number
  private readonly _width: number

  constructor (length: number, width: number, percentageShown: number) {
    if (!Number.isInteger(percentageShown) || percentageShown < 50 || percentageShown > 100) {
      throw new Error("not valid percentage shown")
    }
    this._length = length
    this._width = width
    this._percentageShown = percentageShown
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
