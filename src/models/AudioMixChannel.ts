import {map} from '../common/Mapper';
import SourceChannel from './SourceChannel';

/**
 * @export
 * @class AudioMixChannel
 */
export class AudioMixChannel {
  constructor(obj: any) {
    this.channelNumber = map(obj.channelNumber);
    this.sourceChannels = map<SourceChannel>(obj.sourceChannels, SourceChannel);
  }

  /**
   * Channel number of this mix (starting with 0) (required)
   * @type {number}
   * @memberof AudioMixChannel
   */
  public channelNumber: number;
  /**
   * List of source channels to be mixed (required)
   * @type {Array<SourceChannel>}
   * @memberof AudioMixChannel
   */
  public sourceChannels: Array<SourceChannel>;
}

export default AudioMixChannel;

