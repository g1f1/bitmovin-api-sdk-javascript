import {map} from '../common/Mapper';

/**
 * @export
 * @class TimeSpan
 */
export class TimeSpan {
  constructor(obj: any) {
    this.from = map(obj.from);
    this.to = map(obj.to);
  }

  /**
   * Start offset of the time frame in milliseconds (required)
   * @type {number}
   * @memberof TimeSpan
   */
  public from: number;
  /**
   * End offset of the time frame in milliseconds (required)
   * @type {number}
   * @memberof TimeSpan
   */
  public to: number;
}

export default TimeSpan;

