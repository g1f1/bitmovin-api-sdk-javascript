import {map} from '../common/Mapper';
import BitmovinResource from './BitmovinResource';

/**
 * @export
 * @class KubernetesCluster
 */
export class KubernetesCluster extends BitmovinResource {
  constructor(obj: any) {
    super(obj);
    this.online = map(obj.online);
    this.connected = map(obj.connected);
    this.agentDeploymentDownloadUrl = map(obj.agentDeploymentDownloadUrl);
  }

  /**
   * Shows if the Bitmovin Agent is alive (required)
   * @type {boolean}
   * @memberof KubernetesCluster
   */
  public online?: boolean;
  /**
   * Shows if the Kubernetes cluster is accessible by the Bitmovin Agent (required)
   * @type {boolean}
   * @memberof KubernetesCluster
   */
  public connected?: boolean;
  /**
   * @type {string}
   * @memberof KubernetesCluster
   */
  public agentDeploymentDownloadUrl?: string;
}

export default KubernetesCluster;

