import {map} from '../common/Mapper';
import CodecConfiguration from './CodecConfiguration';

/**
 * @export
 * @class AudioConfiguration
 */
export class AudioConfiguration extends CodecConfiguration {
  constructor(obj: any) {
    super(obj);
    this.bitrate = map(obj.bitrate);
    this.rate = map(obj.rate);
  }

  /**
   * Target bitrate for the encoded audio in bps (required)
   * @type {number}
   * @memberof AudioConfiguration
   */
  public bitrate: number;
  /**
   * Audio sampling rate Hz
   * @type {number}
   * @memberof AudioConfiguration
   */
  public rate?: number;
}

export default AudioConfiguration;

