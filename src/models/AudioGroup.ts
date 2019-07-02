import {map} from '../common/Mapper';

/**
 * @export
 * @class AudioGroup
 */
export class AudioGroup {
  constructor(obj: any) {
    this.name = map(obj.name);
    this.priority = map(obj.priority);
  }

  /**
   * Name of the audio group (required)
   * @type {string}
   * @memberof AudioGroup
   */
  public name: string;
  /**
   * Priority of the audio group (required)
   * @type {number}
   * @memberof AudioGroup
   */
  public priority: number;
}

export default AudioGroup;

