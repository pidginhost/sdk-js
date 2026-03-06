import { Configuration, AccountApi, CloudApi, DomainApi, KubernetesApi } from "./index";

export class PidginHost {
  public account: AccountApi;
  public cloud: CloudApi;
  public domain: DomainApi;
  public kubernetes: KubernetesApi;

  constructor(token: string, basePath?: string) {
    const config = new Configuration({
      apiKey: `Token ${token}`,
      basePath,
    });

    this.account = new AccountApi(config);
    this.cloud = new CloudApi(config);
    this.domain = new DomainApi(config);
    this.kubernetes = new KubernetesApi(config);
  }
}
