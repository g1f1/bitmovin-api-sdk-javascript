import {map} from '../common/Mapper';
import EncodingOutput from './EncodingOutput';
import Ignoring from './Ignoring';
import Muxing from './Muxing';
import MuxingStream from './MuxingStream';
import StreamConditionsMode from './StreamConditionsMode';

/**
 * @export
 * @class ChunkedTextMuxing
 */
export class ChunkedTextMuxing extends Muxing {
  constructor(obj: any) {
    super(obj);
    this.segmentLength = map(obj.segmentLength);
    this.segmentNaming = map(obj.segmentNaming);
    this.segmentNamingTemplate = map(obj.segmentNamingTemplate);
    this.segmentsMuxed = map(obj.segmentsMuxed);
  }

  /**
   * Length of the segments in seconds (required)
   * @type {number}
   * @memberof ChunkedTextMuxing
   */
  public segmentLength: number;
  /**
   * Segment naming template
   * @type {string}
   * @memberof ChunkedTextMuxing
   */
  public segmentNaming?: string;
  /**
   * Segment naming template with placeholders which will be replaced during the encoding. The result will be saved in segmentNaming. {rand:4} gets replaced with an alphanumeric string of length specified after the colon. Defaults to 32. If this field is set, segmentNaming must not be specified.
   * @type {string}
   * @memberof ChunkedTextMuxing
   */
  public segmentNamingTemplate?: string;
  /**
   * Number of segments which have been encoded
   * @type {number}
   * @memberof ChunkedTextMuxing
   */
  public segmentsMuxed?: number;
}

export default ChunkedTextMuxing;

