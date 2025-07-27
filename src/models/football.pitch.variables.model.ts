export class FootballPitchVariables {
  private readonly _extraSpace: number
  private readonly _length: number
  private readonly _linesWidth: number
  private readonly _percentageShown: number
  private readonly _width: number

  constructor (length: number, width: number, percentageShown: number) {
    if (length < 90 || length > 120) {
      throw new Error(`not valid length: ${length}`)
    }
    if (width < 45 || width > 90) {
      throw new Error(`not valid width: ${width}`)
    }
    if (percentageShown < 0.5 || percentageShown > 1) {
      throw new Error(`not valid percentage shown: ${percentageShown}`)
    }
    this._extraSpace = 3
    this._length = length
    this._linesWidth = 0.1
    this._width = width
    this._percentageShown = Number.parseFloat(percentageShown.toFixed(2))
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
   * The width of the lines.
   */
  get linesWidth (): number {
    return this._linesWidth
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
