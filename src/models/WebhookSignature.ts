import {map} from '../common/Mapper';
import SignatureType from './SignatureType';

/**
 * @export
 * @class WebhookSignature
 */
export class WebhookSignature {
  constructor(obj: any) {
    this.type = map(obj.type);
    this.key = map(obj.key);
  }

  /**
   * The signature type used for the webhook.  Selects one of the supported signatures. The signature is attached to the list of headers with the key `Bitmovin-Signature`. In case of the `HMAC` type the SHA512 hashing algorithm is used to generate an authentication code from the webhook body. (required)
   * @type {SignatureType}
   * @memberof WebhookSignature
   */
  public type: SignatureType;
  /**
   * The key of the signature (required)
   * @type {string}
   * @memberof WebhookSignature
   */
  public key?: string;
}

export default WebhookSignature;

