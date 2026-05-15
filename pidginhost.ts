import { Configuration, AccountApi, AuthApi, BillingApi, CloudApi, DedicatedApi, DomainApi, FreednsApi, HostingApi, KubernetesApi, SupportApi } from "./index";

export class PidginHost {
  public account: AccountApi;
  public auth: AuthApi;
  public billing: BillingApi;
  public cloud: CloudApi;
  public dedicated: DedicatedApi;
  public domain: DomainApi;
  public freedns: FreednsApi;
  public hosting: HostingApi;
  public kubernetes: KubernetesApi;
  public support: SupportApi;

  constructor(token: string, basePath?: string) {
    const config = new Configuration({
      apiKey: `Token ${token}`,
      basePath,
    });

    this.account = new AccountApi(config);
    this.auth = new AuthApi(config);
    this.billing = new BillingApi(config);
    this.cloud = new CloudApi(config);
    this.dedicated = new DedicatedApi(config);
    this.domain = new DomainApi(config);
    this.freedns = new FreednsApi(config);
    this.hosting = new HostingApi(config);
    this.kubernetes = new KubernetesApi(config);
    this.support = new SupportApi(config);
  }
}
