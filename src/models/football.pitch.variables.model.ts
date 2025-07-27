export class FootballPitchVariables {
  private readonly _extraSpace: number
  private readonly _length: number
  private readonly _percentageShown: number
  private readonly _width: number

  constructor (length: number, width: number, percentageShown: number) {
    if (!Number.isInteger(percentageShown) || percentageShown < 0.5 || percentageShown > 1) {
      throw new Error('not valid percentage shown')
    }
    this._extraSpace = 3
    this._length = length
    this._width = width
    this._percentageShown = percentageShown
  }

  get extraSpace (): number {
    return this._extraSpace
  }

  /**
   * The length of the pitch.
   */
  get length (): number {
    return this._length
  }

  /**
   * The percentage of the pitch shown. From [0-1]
   */
  get percentageShown (): number {
    return this._percentageShown
  }

  /**
   * The width of the pitch.
   */
  get width () {
    return this._width
  }
}
