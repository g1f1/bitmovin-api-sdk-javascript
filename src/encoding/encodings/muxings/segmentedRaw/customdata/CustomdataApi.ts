import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import CustomData from '../../../../../models/CustomData';

/**
 * CustomdataApi - object-oriented interface
 * @export
 * @class CustomdataApi
 * @extends {BaseAPI}
 */
export default class CustomdataApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Segmented RAW Muxing Custom Data
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Segmented RAW muxing
   * @throws {RequiredError}
   * @memberof CustomdataApi
   */
  public get(encodingId: string, muxingId: string): Promise<CustomData> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<CustomData>('/encoding/encodings/{encoding_id}/muxings/segmented-raw/{muxing_id}/customData', pathParamMap).then((response) => {
      return new CustomData(response);
    });
  }
}