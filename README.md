## @pidginhost/sdk@0.7.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @pidginhost/sdk@0.7.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

## Quickstart

```typescript
import { PidginHost } from "@pidginhost/sdk";

const client = new PidginHost(process.env.PIDGINHOST_API_TOKEN!);

// List all servers
const { data: servers } = await client.cloud.cloudServersList();
for (const server of servers) {
  console.log(server.name);
}

// List SSH keys
const { data: keys } = await client.account.accountSshKeysList();
```

The `PidginHost` client exposes these API groups:
- `client.account` -- account, companies, SSH keys
- `client.auth` -- authentication, tokens
- `client.billing` -- invoices, payments, funds
- `client.cloud` -- servers, images, volumes, IPs, firewalls, networks
- `client.dedicated` -- dedicated servers
- `client.domain` -- domains, registrants, TLDs
- `client.freedns` -- free DNS zones and records
- `client.hosting` -- web hosting
- `client.kubernetes` -- clusters, resource pools, routes
- `client.support` -- support tickets

### Documentation for API Endpoints

All URIs are relative to *https://www.pidginhost.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AccountApi* | [**accountApiTokensCreate**](docs/AccountApi.md#accountapitokenscreate) | **POST** /api/account/api-tokens/ | 
*AccountApi* | [**accountApiTokensDestroy**](docs/AccountApi.md#accountapitokensdestroy) | **DELETE** /api/account/api-tokens/{id}/ | 
*AccountApi* | [**accountApiTokensList**](docs/AccountApi.md#accountapitokenslist) | **GET** /api/account/api-tokens/ | 
*AccountApi* | [**accountCompaniesCreate**](docs/AccountApi.md#accountcompaniescreate) | **POST** /api/account/companies/ | 
*AccountApi* | [**accountCompaniesDestroy**](docs/AccountApi.md#accountcompaniesdestroy) | **DELETE** /api/account/companies/{id}/ | 
*AccountApi* | [**accountCompaniesList**](docs/AccountApi.md#accountcompanieslist) | **GET** /api/account/companies/ | 
*AccountApi* | [**accountCompaniesPartialUpdate**](docs/AccountApi.md#accountcompaniespartialupdate) | **PATCH** /api/account/companies/{id}/ | 
*AccountApi* | [**accountCompaniesRetrieve**](docs/AccountApi.md#accountcompaniesretrieve) | **GET** /api/account/companies/{id}/ | 
*AccountApi* | [**accountCompaniesUpdate**](docs/AccountApi.md#accountcompaniesupdate) | **PUT** /api/account/companies/{id}/ | 
*AccountApi* | [**accountEmailsList**](docs/AccountApi.md#accountemailslist) | **GET** /api/account/emails/ | 
*AccountApi* | [**accountProfilePartialUpdate**](docs/AccountApi.md#accountprofilepartialupdate) | **PATCH** /api/account/profile | 
*AccountApi* | [**accountProfileRetrieve**](docs/AccountApi.md#accountprofileretrieve) | **GET** /api/account/profile | 
*AccountApi* | [**accountProfileUpdate**](docs/AccountApi.md#accountprofileupdate) | **PUT** /api/account/profile | 
*AccountApi* | [**accountSshKeysCreate**](docs/AccountApi.md#accountsshkeyscreate) | **POST** /api/account/ssh-keys/ | 
*AccountApi* | [**accountSshKeysDestroy**](docs/AccountApi.md#accountsshkeysdestroy) | **DELETE** /api/account/ssh-keys/{id}/ | 
*AccountApi* | [**accountSshKeysList**](docs/AccountApi.md#accountsshkeyslist) | **GET** /api/account/ssh-keys/ | 
*AccountApi* | [**accountSshKeysPartialUpdate**](docs/AccountApi.md#accountsshkeyspartialupdate) | **PATCH** /api/account/ssh-keys/{id}/ | 
*AccountApi* | [**accountSshKeysRetrieve**](docs/AccountApi.md#accountsshkeysretrieve) | **GET** /api/account/ssh-keys/{id}/ | 
*AccountApi* | [**accountSshKeysUpdate**](docs/AccountApi.md#accountsshkeysupdate) | **PUT** /api/account/ssh-keys/{id}/ | 
*AuthApi* | [**authCliSessionCreate**](docs/AuthApi.md#authclisessioncreate) | **POST** /api/auth/cli-session/ | 
*AuthApi* | [**authCliSessionRetrieve**](docs/AuthApi.md#authclisessionretrieve) | **GET** /api/auth/cli-session/{session_id}/ | 
*BillingApi* | [**billingDepositsCreate**](docs/BillingApi.md#billingdepositscreate) | **POST** /api/billing/deposits/ | 
*BillingApi* | [**billingDepositsList**](docs/BillingApi.md#billingdepositslist) | **GET** /api/billing/deposits/ | 
*BillingApi* | [**billingDepositsRetrieve**](docs/BillingApi.md#billingdepositsretrieve) | **GET** /api/billing/deposits/{id}/ | 
*BillingApi* | [**billingFundsList**](docs/BillingApi.md#billingfundslist) | **GET** /api/billing/funds/ | 
*BillingApi* | [**billingFundsLogList**](docs/BillingApi.md#billingfundsloglist) | **GET** /api/billing/funds-log/ | 
*BillingApi* | [**billingFundsNotificationSettingsCreate**](docs/BillingApi.md#billingfundsnotificationsettingscreate) | **POST** /api/billing/funds/notification-settings/ | 
*BillingApi* | [**billingInvoicesList**](docs/BillingApi.md#billinginvoiceslist) | **GET** /api/billing/invoices/ | 
*BillingApi* | [**billingInvoicesPayWithFundsCreate**](docs/BillingApi.md#billinginvoicespaywithfundscreate) | **POST** /api/billing/invoices/{id}/pay-with-funds/ | 
*BillingApi* | [**billingInvoicesPdfRetrieve**](docs/BillingApi.md#billinginvoicespdfretrieve) | **GET** /api/billing/invoices/{id}/pdf/ | 
*BillingApi* | [**billingInvoicesRetrieve**](docs/BillingApi.md#billinginvoicesretrieve) | **GET** /api/billing/invoices/{id}/ | 
*BillingApi* | [**billingServicesCancelCreate**](docs/BillingApi.md#billingservicescancelcreate) | **POST** /api/billing/services/{id}/cancel/ | 
*BillingApi* | [**billingServicesChangeBillingCycleCreate**](docs/BillingApi.md#billingserviceschangebillingcyclecreate) | **POST** /api/billing/services/{id}/change-billing-cycle/ | 
*BillingApi* | [**billingServicesChangeCompanyCreate**](docs/BillingApi.md#billingserviceschangecompanycreate) | **POST** /api/billing/services/{id}/change-company/ | 
*BillingApi* | [**billingServicesList**](docs/BillingApi.md#billingserviceslist) | **GET** /api/billing/services/ | 
*BillingApi* | [**billingServicesRetrieve**](docs/BillingApi.md#billingservicesretrieve) | **GET** /api/billing/services/{id}/ | 
*BillingApi* | [**billingServicesToggleAutoPaymentCreate**](docs/BillingApi.md#billingservicestoggleautopaymentcreate) | **POST** /api/billing/services/{id}/toggle-auto-payment/ | 
*BillingApi* | [**billingSubscriptionsList**](docs/BillingApi.md#billingsubscriptionslist) | **GET** /api/billing/subscriptions/ | 
*BillingApi* | [**billingSubscriptionsRetrieve**](docs/BillingApi.md#billingsubscriptionsretrieve) | **GET** /api/billing/subscriptions/{id}/ | 
*CloudApi* | [**cloudBucketsCreate**](docs/CloudApi.md#cloudbucketscreate) | **POST** /api/cloud/buckets/ | 
*CloudApi* | [**cloudBucketsCredentialsRevealCreate**](docs/CloudApi.md#cloudbucketscredentialsrevealcreate) | **POST** /api/cloud/buckets/{id}/credentials/reveal/ | 
*CloudApi* | [**cloudBucketsCredentialsRotateCreate**](docs/CloudApi.md#cloudbucketscredentialsrotatecreate) | **POST** /api/cloud/buckets/{id}/credentials/rotate/ | 
*CloudApi* | [**cloudBucketsDestroy**](docs/CloudApi.md#cloudbucketsdestroy) | **DELETE** /api/cloud/buckets/{id}/ | 
*CloudApi* | [**cloudBucketsList**](docs/CloudApi.md#cloudbucketslist) | **GET** /api/cloud/buckets/ | 
*CloudApi* | [**cloudBucketsResizeCreate**](docs/CloudApi.md#cloudbucketsresizecreate) | **POST** /api/cloud/buckets/{id}/resize/ | 
*CloudApi* | [**cloudBucketsRetrieve**](docs/CloudApi.md#cloudbucketsretrieve) | **GET** /api/cloud/buckets/{id}/ | 
*CloudApi* | [**cloudBucketsVisibilityCreate**](docs/CloudApi.md#cloudbucketsvisibilitycreate) | **POST** /api/cloud/buckets/{id}/visibility/ | 
*CloudApi* | [**cloudFirewallRulesSetCreate**](docs/CloudApi.md#cloudfirewallrulessetcreate) | **POST** /api/cloud/firewall-rules-set/ | 
*CloudApi* | [**cloudFirewallRulesSetDestroy**](docs/CloudApi.md#cloudfirewallrulessetdestroy) | **DELETE** /api/cloud/firewall-rules-set/{id}/ | 
*CloudApi* | [**cloudFirewallRulesSetList**](docs/CloudApi.md#cloudfirewallrulessetlist) | **GET** /api/cloud/firewall-rules-set/ | 
*CloudApi* | [**cloudFirewallRulesSetPartialUpdate**](docs/CloudApi.md#cloudfirewallrulessetpartialupdate) | **PATCH** /api/cloud/firewall-rules-set/{id}/ | 
*CloudApi* | [**cloudFirewallRulesSetRetrieve**](docs/CloudApi.md#cloudfirewallrulessetretrieve) | **GET** /api/cloud/firewall-rules-set/{id}/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesCreate**](docs/CloudApi.md#cloudfirewallrulessetrulescreate) | **POST** /api/cloud/firewall-rules-set/{rules_set_id}/rules/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesDestroy**](docs/CloudApi.md#cloudfirewallrulessetrulesdestroy) | **DELETE** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesList**](docs/CloudApi.md#cloudfirewallrulessetruleslist) | **GET** /api/cloud/firewall-rules-set/{rules_set_id}/rules/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesPartialUpdate**](docs/CloudApi.md#cloudfirewallrulessetrulespartialupdate) | **PATCH** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesRetrieve**](docs/CloudApi.md#cloudfirewallrulessetrulesretrieve) | **GET** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesUpdate**](docs/CloudApi.md#cloudfirewallrulessetrulesupdate) | **PUT** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | 
*CloudApi* | [**cloudFirewallRulesSetUpdate**](docs/CloudApi.md#cloudfirewallrulessetupdate) | **PUT** /api/cloud/firewall-rules-set/{id}/ | 
*CloudApi* | [**cloudFloatingIpv4AuthorizationsList**](docs/CloudApi.md#cloudfloatingipv4authorizationslist) | **GET** /api/cloud/floating-ipv4/{id}/authorizations/ | 
*CloudApi* | [**cloudFloatingIpv4AuthorizeCreate**](docs/CloudApi.md#cloudfloatingipv4authorizecreate) | **POST** /api/cloud/floating-ipv4/{id}/authorize/ | 
*CloudApi* | [**cloudFloatingIpv4Create**](docs/CloudApi.md#cloudfloatingipv4create) | **POST** /api/cloud/floating-ipv4/ | 
*CloudApi* | [**cloudFloatingIpv4Destroy**](docs/CloudApi.md#cloudfloatingipv4destroy) | **DELETE** /api/cloud/floating-ipv4/{id}/ | 
*CloudApi* | [**cloudFloatingIpv4List**](docs/CloudApi.md#cloudfloatingipv4list) | **GET** /api/cloud/floating-ipv4/ | 
*CloudApi* | [**cloudFloatingIpv4Retrieve**](docs/CloudApi.md#cloudfloatingipv4retrieve) | **GET** /api/cloud/floating-ipv4/{id}/ | 
*CloudApi* | [**cloudFloatingIpv4UnauthorizeCreate**](docs/CloudApi.md#cloudfloatingipv4unauthorizecreate) | **POST** /api/cloud/floating-ipv4/{id}/unauthorize/ | 
*CloudApi* | [**cloudFloatingIpv6AuthorizationsList**](docs/CloudApi.md#cloudfloatingipv6authorizationslist) | **GET** /api/cloud/floating-ipv6/{id}/authorizations/ | 
*CloudApi* | [**cloudFloatingIpv6AuthorizeCreate**](docs/CloudApi.md#cloudfloatingipv6authorizecreate) | **POST** /api/cloud/floating-ipv6/{id}/authorize/ | 
*CloudApi* | [**cloudFloatingIpv6Create**](docs/CloudApi.md#cloudfloatingipv6create) | **POST** /api/cloud/floating-ipv6/ | 
*CloudApi* | [**cloudFloatingIpv6Destroy**](docs/CloudApi.md#cloudfloatingipv6destroy) | **DELETE** /api/cloud/floating-ipv6/{id}/ | 
*CloudApi* | [**cloudFloatingIpv6List**](docs/CloudApi.md#cloudfloatingipv6list) | **GET** /api/cloud/floating-ipv6/ | 
*CloudApi* | [**cloudFloatingIpv6Retrieve**](docs/CloudApi.md#cloudfloatingipv6retrieve) | **GET** /api/cloud/floating-ipv6/{id}/ | 
*CloudApi* | [**cloudFloatingIpv6UnauthorizeCreate**](docs/CloudApi.md#cloudfloatingipv6unauthorizecreate) | **POST** /api/cloud/floating-ipv6/{id}/unauthorize/ | 
*CloudApi* | [**cloudGenerationsList**](docs/CloudApi.md#cloudgenerationslist) | **GET** /api/cloud/generations/ | List hardware generations
*CloudApi* | [**cloudGenerationsRetrieve**](docs/CloudApi.md#cloudgenerationsretrieve) | **GET** /api/cloud/generations/{slug}/ | 
*CloudApi* | [**cloudImagesList**](docs/CloudApi.md#cloudimageslist) | **GET** /api/cloud/images/ | 
*CloudApi* | [**cloudImagesRetrieve**](docs/CloudApi.md#cloudimagesretrieve) | **GET** /api/cloud/images/{id}/ | 
*CloudApi* | [**cloudIpv4Create**](docs/CloudApi.md#cloudipv4create) | **POST** /api/cloud/ipv4/ | 
*CloudApi* | [**cloudIpv4Destroy**](docs/CloudApi.md#cloudipv4destroy) | **DELETE** /api/cloud/ipv4/{id}/ | 
*CloudApi* | [**cloudIpv4DetachCreate**](docs/CloudApi.md#cloudipv4detachcreate) | **POST** /api/cloud/ipv4/{id}/detach/ | 
*CloudApi* | [**cloudIpv4List**](docs/CloudApi.md#cloudipv4list) | **GET** /api/cloud/ipv4/ | 
*CloudApi* | [**cloudIpv4RdnsCreate**](docs/CloudApi.md#cloudipv4rdnscreate) | **POST** /api/cloud/ipv4/{id}/rdns/ | 
*CloudApi* | [**cloudIpv4RdnsRetrieve**](docs/CloudApi.md#cloudipv4rdnsretrieve) | **GET** /api/cloud/ipv4/{id}/rdns/ | 
*CloudApi* | [**cloudIpv4Retrieve**](docs/CloudApi.md#cloudipv4retrieve) | **GET** /api/cloud/ipv4/{id}/ | 
*CloudApi* | [**cloudIpv6Create**](docs/CloudApi.md#cloudipv6create) | **POST** /api/cloud/ipv6/ | 
*CloudApi* | [**cloudIpv6Destroy**](docs/CloudApi.md#cloudipv6destroy) | **DELETE** /api/cloud/ipv6/{id}/ | 
*CloudApi* | [**cloudIpv6DetachCreate**](docs/CloudApi.md#cloudipv6detachcreate) | **POST** /api/cloud/ipv6/{id}/detach/ | 
*CloudApi* | [**cloudIpv6List**](docs/CloudApi.md#cloudipv6list) | **GET** /api/cloud/ipv6/ | 
*CloudApi* | [**cloudIpv6RdnsCreate**](docs/CloudApi.md#cloudipv6rdnscreate) | **POST** /api/cloud/ipv6/{id}/rdns/ | 
*CloudApi* | [**cloudIpv6RdnsRetrieve**](docs/CloudApi.md#cloudipv6rdnsretrieve) | **GET** /api/cloud/ipv6/{id}/rdns/ | 
*CloudApi* | [**cloudIpv6Retrieve**](docs/CloudApi.md#cloudipv6retrieve) | **GET** /api/cloud/ipv6/{id}/ | 
*CloudApi* | [**cloudPrivateNetworksAddServerCreate**](docs/CloudApi.md#cloudprivatenetworksaddservercreate) | **POST** /api/cloud/private-networks/{id}/add-server/ | 
*CloudApi* | [**cloudPrivateNetworksCreate**](docs/CloudApi.md#cloudprivatenetworkscreate) | **POST** /api/cloud/private-networks/ | 
*CloudApi* | [**cloudPrivateNetworksDestroy**](docs/CloudApi.md#cloudprivatenetworksdestroy) | **DELETE** /api/cloud/private-networks/{id}/ | 
*CloudApi* | [**cloudPrivateNetworksList**](docs/CloudApi.md#cloudprivatenetworkslist) | **GET** /api/cloud/private-networks/ | 
*CloudApi* | [**cloudPrivateNetworksPartialUpdate**](docs/CloudApi.md#cloudprivatenetworkspartialupdate) | **PATCH** /api/cloud/private-networks/{id}/ | 
*CloudApi* | [**cloudPrivateNetworksRemoveServerCreate**](docs/CloudApi.md#cloudprivatenetworksremoveservercreate) | **POST** /api/cloud/private-networks/{id}/remove-server/ | 
*CloudApi* | [**cloudPrivateNetworksRetrieve**](docs/CloudApi.md#cloudprivatenetworksretrieve) | **GET** /api/cloud/private-networks/{id}/ | 
*CloudApi* | [**cloudPrivateNetworksUpdate**](docs/CloudApi.md#cloudprivatenetworksupdate) | **PUT** /api/cloud/private-networks/{id}/ | 
*CloudApi* | [**cloudServerPackagesByGenerationRetrieve**](docs/CloudApi.md#cloudserverpackagesbygenerationretrieve) | **GET** /api/cloud/server-packages/by-generation/ | 
*CloudApi* | [**cloudServerPackagesList**](docs/CloudApi.md#cloudserverpackageslist) | **GET** /api/cloud/server-packages/ | 
*CloudApi* | [**cloudServerPackagesRetrieve**](docs/CloudApi.md#cloudserverpackagesretrieve) | **GET** /api/cloud/server-packages/{id}/ | 
*CloudApi* | [**cloudServersActivityRetrieve**](docs/CloudApi.md#cloudserversactivityretrieve) | **GET** /api/cloud/servers/{id}/activity/ | 
*CloudApi* | [**cloudServersAttachIpv4Create**](docs/CloudApi.md#cloudserversattachipv4create) | **POST** /api/cloud/servers/{id}/attach-ipv4/ | 
*CloudApi* | [**cloudServersAttachIpv6Create**](docs/CloudApi.md#cloudserversattachipv6create) | **POST** /api/cloud/servers/{id}/attach-ipv6/ | 
*CloudApi* | [**cloudServersConsoleCreate**](docs/CloudApi.md#cloudserversconsolecreate) | **POST** /api/cloud/servers/{id}/console/ | 
*CloudApi* | [**cloudServersCreate**](docs/CloudApi.md#cloudserverscreate) | **POST** /api/cloud/servers/ | 
*CloudApi* | [**cloudServersDestroy**](docs/CloudApi.md#cloudserversdestroy) | **DELETE** /api/cloud/servers/{id}/ | 
*CloudApi* | [**cloudServersDestroyProtectionCreate**](docs/CloudApi.md#cloudserversdestroyprotectioncreate) | **POST** /api/cloud/servers/{id}/destroy-protection/ | 
*CloudApi* | [**cloudServersDetachIpv4Create**](docs/CloudApi.md#cloudserversdetachipv4create) | **POST** /api/cloud/servers/{id}/detach-ipv4/ | 
*CloudApi* | [**cloudServersDetachIpv6Create**](docs/CloudApi.md#cloudserversdetachipv6create) | **POST** /api/cloud/servers/{id}/detach-ipv6/ | 
*CloudApi* | [**cloudServersList**](docs/CloudApi.md#cloudserverslist) | **GET** /api/cloud/servers/ | 
*CloudApi* | [**cloudServersModifyPackageCreate**](docs/CloudApi.md#cloudserversmodifypackagecreate) | **POST** /api/cloud/servers/{id}/modify-package/ | 
*CloudApi* | [**cloudServersPartialUpdate**](docs/CloudApi.md#cloudserverspartialupdate) | **PATCH** /api/cloud/servers/{id}/ | 
*CloudApi* | [**cloudServersPowerManagementCreate**](docs/CloudApi.md#cloudserverspowermanagementcreate) | **POST** /api/cloud/servers/{id}/power-management/ | 
*CloudApi* | [**cloudServersPowerManagementRetrieve**](docs/CloudApi.md#cloudserverspowermanagementretrieve) | **GET** /api/cloud/servers/{id}/power-management/ | 
*CloudApi* | [**cloudServersPublicInterfaceCreate**](docs/CloudApi.md#cloudserverspublicinterfacecreate) | **POST** /api/cloud/servers/{id}/public-interface/ | 
*CloudApi* | [**cloudServersPublicInterfaceDestroy**](docs/CloudApi.md#cloudserverspublicinterfacedestroy) | **DELETE** /api/cloud/servers/{id}/public-interface/ | 
*CloudApi* | [**cloudServersPublicInterfaceRetrieve**](docs/CloudApi.md#cloudserverspublicinterfaceretrieve) | **GET** /api/cloud/servers/{id}/public-interface/ | 
*CloudApi* | [**cloudServersRetrieve**](docs/CloudApi.md#cloudserversretrieve) | **GET** /api/cloud/servers/{id}/ | 
*CloudApi* | [**cloudServersRetryProvisionCreate**](docs/CloudApi.md#cloudserversretryprovisioncreate) | **POST** /api/cloud/servers/{id}/retry-provision/ | 
*CloudApi* | [**cloudServersSnapshotsCreate**](docs/CloudApi.md#cloudserverssnapshotscreate) | **POST** /api/cloud/servers/{id}/snapshots/ | 
*CloudApi* | [**cloudServersSnapshotsDestroy**](docs/CloudApi.md#cloudserverssnapshotsdestroy) | **DELETE** /api/cloud/servers/{id}/snapshots/{snapshot_name}/ | 
*CloudApi* | [**cloudServersSnapshotsList**](docs/CloudApi.md#cloudserverssnapshotslist) | **GET** /api/cloud/servers/{id}/snapshots/ | 
*CloudApi* | [**cloudServersSnapshotsRollbackCreate**](docs/CloudApi.md#cloudserverssnapshotsrollbackcreate) | **POST** /api/cloud/servers/{id}/snapshots/{snapshot_name}/rollback/ | 
*CloudApi* | [**cloudServersUpdate**](docs/CloudApi.md#cloudserversupdate) | **PUT** /api/cloud/servers/{id}/ | 
*CloudApi* | [**cloudServersUsageRetrieve**](docs/CloudApi.md#cloudserversusageretrieve) | **GET** /api/cloud/servers/{id}/usage/ | 
*CloudApi* | [**cloudServersVolumesCreate**](docs/CloudApi.md#cloudserversvolumescreate) | **POST** /api/cloud/servers/{server_id}/volumes/ | 
*CloudApi* | [**cloudServersVolumesDestroy**](docs/CloudApi.md#cloudserversvolumesdestroy) | **DELETE** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | 
*CloudApi* | [**cloudServersVolumesList**](docs/CloudApi.md#cloudserversvolumeslist) | **GET** /api/cloud/servers/{server_id}/volumes/ | 
*CloudApi* | [**cloudServersVolumesPartialUpdate**](docs/CloudApi.md#cloudserversvolumespartialupdate) | **PATCH** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | 
*CloudApi* | [**cloudServersVolumesRetrieve**](docs/CloudApi.md#cloudserversvolumesretrieve) | **GET** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | 
*CloudApi* | [**cloudServersVolumesUpdate**](docs/CloudApi.md#cloudserversvolumesupdate) | **PUT** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | 
*CloudApi* | [**cloudStorageProductsList**](docs/CloudApi.md#cloudstorageproductslist) | **GET** /api/cloud/storage-products/ | 
*CloudApi* | [**cloudStorageProductsRetrieve**](docs/CloudApi.md#cloudstorageproductsretrieve) | **GET** /api/cloud/storage-products/{id}/ | 
*CloudApi* | [**cloudVolumesAttachCreate**](docs/CloudApi.md#cloudvolumesattachcreate) | **POST** /api/cloud/volumes/{id}/attach/ | 
*CloudApi* | [**cloudVolumesDestroy**](docs/CloudApi.md#cloudvolumesdestroy) | **DELETE** /api/cloud/volumes/{id}/ | 
*CloudApi* | [**cloudVolumesDetachCreate**](docs/CloudApi.md#cloudvolumesdetachcreate) | **POST** /api/cloud/volumes/{id}/detach/ | 
*CloudApi* | [**cloudVolumesList**](docs/CloudApi.md#cloudvolumeslist) | **GET** /api/cloud/volumes/ | 
*CloudApi* | [**cloudVolumesPartialUpdate**](docs/CloudApi.md#cloudvolumespartialupdate) | **PATCH** /api/cloud/volumes/{id}/ | 
*CloudApi* | [**cloudVolumesRetrieve**](docs/CloudApi.md#cloudvolumesretrieve) | **GET** /api/cloud/volumes/{id}/ | 
*CloudApi* | [**cloudVolumesUpdate**](docs/CloudApi.md#cloudvolumesupdate) | **PUT** /api/cloud/volumes/{id}/ | 
*DedicatedApi* | [**dedicatedServersList**](docs/DedicatedApi.md#dedicatedserverslist) | **GET** /api/dedicated/servers/ | 
*DedicatedApi* | [**dedicatedServersPowerCreate**](docs/DedicatedApi.md#dedicatedserverspowercreate) | **POST** /api/dedicated/servers/{id}/power/ | 
*DedicatedApi* | [**dedicatedServersRdnsCreate**](docs/DedicatedApi.md#dedicatedserversrdnscreate) | **POST** /api/dedicated/servers/{id}/rdns/ | 
*DedicatedApi* | [**dedicatedServersReinstallCreate**](docs/DedicatedApi.md#dedicatedserversreinstallcreate) | **POST** /api/dedicated/servers/{id}/reinstall/ | 
*DedicatedApi* | [**dedicatedServersRetrieve**](docs/DedicatedApi.md#dedicatedserversretrieve) | **GET** /api/dedicated/servers/{id}/ | 
*DomainApi* | [**domainDomainCancelCreate**](docs/DomainApi.md#domaindomaincancelcreate) | **POST** /api/domain/domain/{domain}/cancel/ | 
*DomainApi* | [**domainDomainCheckAvailabilityCreate**](docs/DomainApi.md#domaindomaincheckavailabilitycreate) | **POST** /api/domain/domain/check-availability/ | 
*DomainApi* | [**domainDomainContactsCreate**](docs/DomainApi.md#domaindomaincontactscreate) | **POST** /api/domain/domain/{domain}/contacts/ | 
*DomainApi* | [**domainDomainCreate**](docs/DomainApi.md#domaindomaincreate) | **POST** /api/domain/domain/ | 
*DomainApi* | [**domainDomainList**](docs/DomainApi.md#domaindomainlist) | **GET** /api/domain/domain/ | 
*DomainApi* | [**domainDomainNameserversCreate**](docs/DomainApi.md#domaindomainnameserverscreate) | **POST** /api/domain/domain/{domain}/nameservers/ | 
*DomainApi* | [**domainDomainPartialUpdate**](docs/DomainApi.md#domaindomainpartialupdate) | **PATCH** /api/domain/domain/{domain}/ | 
*DomainApi* | [**domainDomainRenewCreate**](docs/DomainApi.md#domaindomainrenewcreate) | **POST** /api/domain/domain/{domain}/renew/ | 
*DomainApi* | [**domainDomainRetrieve**](docs/DomainApi.md#domaindomainretrieve) | **GET** /api/domain/domain/{domain}/ | 
*DomainApi* | [**domainDomainTransferRoDomainCreate**](docs/DomainApi.md#domaindomaintransferrodomaincreate) | **POST** /api/domain/domain/transfer-ro-domain/ | 
*DomainApi* | [**domainDomainUpdate**](docs/DomainApi.md#domaindomainupdate) | **PUT** /api/domain/domain/{domain}/ | 
*DomainApi* | [**domainRegistrantsCreate**](docs/DomainApi.md#domainregistrantscreate) | **POST** /api/domain/registrants/ | 
*DomainApi* | [**domainRegistrantsDestroy**](docs/DomainApi.md#domainregistrantsdestroy) | **DELETE** /api/domain/registrants/{id}/ | 
*DomainApi* | [**domainRegistrantsList**](docs/DomainApi.md#domainregistrantslist) | **GET** /api/domain/registrants/ | 
*DomainApi* | [**domainRegistrantsPartialUpdate**](docs/DomainApi.md#domainregistrantspartialupdate) | **PATCH** /api/domain/registrants/{id}/ | 
*DomainApi* | [**domainRegistrantsRetrieve**](docs/DomainApi.md#domainregistrantsretrieve) | **GET** /api/domain/registrants/{id}/ | 
*DomainApi* | [**domainRegistrantsUpdate**](docs/DomainApi.md#domainregistrantsupdate) | **PUT** /api/domain/registrants/{id}/ | 
*DomainApi* | [**domainTldList**](docs/DomainApi.md#domaintldlist) | **GET** /api/domain/tld/ | 
*DomainApi* | [**domainTldRetrieve**](docs/DomainApi.md#domaintldretrieve) | **GET** /api/domain/tld/{id}/ | 
*EmailApi* | [**emailApiCredentialsCreate**](docs/EmailApi.md#emailapicredentialscreate) | **POST** /api/email/api_credentials/ | 
*EmailApi* | [**emailApiCredentialsDestroy**](docs/EmailApi.md#emailapicredentialsdestroy) | **DELETE** /api/email/api_credentials/{id}/ | 
*EmailApi* | [**emailApiCredentialsList**](docs/EmailApi.md#emailapicredentialslist) | **GET** /api/email/api_credentials/ | 
*EmailApi* | [**emailApiCredentialsRetrieve**](docs/EmailApi.md#emailapicredentialsretrieve) | **GET** /api/email/api_credentials/{id}/ | 
*EmailApi* | [**emailDomainsCreate**](docs/EmailApi.md#emaildomainscreate) | **POST** /api/email/domains/ | 
*EmailApi* | [**emailDomainsInboundRoutesCreate**](docs/EmailApi.md#emaildomainsinboundroutescreate) | **POST** /api/email/domains/{domain_pk}/inbound_routes/ | 
*EmailApi* | [**emailDomainsInboundRoutesList**](docs/EmailApi.md#emaildomainsinboundrouteslist) | **GET** /api/email/domains/{domain_pk}/inbound_routes/ | 
*EmailApi* | [**emailDomainsList**](docs/EmailApi.md#emaildomainslist) | **GET** /api/email/domains/ | 
*EmailApi* | [**emailDomainsRetrieve**](docs/EmailApi.md#emaildomainsretrieve) | **GET** /api/email/domains/{id}/ | 
*EmailApi* | [**emailDomainsRotateDkimCreate**](docs/EmailApi.md#emaildomainsrotatedkimcreate) | **POST** /api/email/domains/{id}/rotate_dkim/ | 
*EmailApi* | [**emailDomainsToggleInboundCreate**](docs/EmailApi.md#emaildomainstoggleinboundcreate) | **POST** /api/email/domains/{id}/toggle_inbound/ | 
*EmailApi* | [**emailDomainsVerifyCreate**](docs/EmailApi.md#emaildomainsverifycreate) | **POST** /api/email/domains/{id}/verify/ | 
*EmailApi* | [**emailInboundRoutesCreate**](docs/EmailApi.md#emailinboundroutescreate) | **POST** /api/email/inbound_routes/ | 
*EmailApi* | [**emailInboundRoutesDestroy**](docs/EmailApi.md#emailinboundroutesdestroy) | **DELETE** /api/email/inbound_routes/{id}/ | 
*EmailApi* | [**emailInboundRoutesList**](docs/EmailApi.md#emailinboundrouteslist) | **GET** /api/email/inbound_routes/ | 
*EmailApi* | [**emailInboundRoutesPartialUpdate**](docs/EmailApi.md#emailinboundroutespartialupdate) | **PATCH** /api/email/inbound_routes/{id}/ | 
*EmailApi* | [**emailInboundRoutesRetrieve**](docs/EmailApi.md#emailinboundroutesretrieve) | **GET** /api/email/inbound_routes/{id}/ | 
*EmailApi* | [**emailMessagesRetrieve**](docs/EmailApi.md#emailmessagesretrieve) | **GET** /api/email/messages/{message_id}/ | 
*EmailApi* | [**emailSandboxAddressesCreate**](docs/EmailApi.md#emailsandboxaddressescreate) | **POST** /api/email/sandbox_addresses/ | 
*EmailApi* | [**emailSandboxAddressesDestroy**](docs/EmailApi.md#emailsandboxaddressesdestroy) | **DELETE** /api/email/sandbox_addresses/{id}/ | 
*EmailApi* | [**emailSandboxAddressesList**](docs/EmailApi.md#emailsandboxaddresseslist) | **GET** /api/email/sandbox_addresses/ | 
*EmailApi* | [**emailSandboxAddressesRetrieve**](docs/EmailApi.md#emailsandboxaddressesretrieve) | **GET** /api/email/sandbox_addresses/{id}/ | 
*EmailApi* | [**emailSendCreate**](docs/EmailApi.md#emailsendcreate) | **POST** /api/email/send/ | 
*EmailApi* | [**emailServicesApiCredentialsCreate**](docs/EmailApi.md#emailservicesapicredentialscreate) | **POST** /api/email/services/{service_pk}/api_credentials/ | 
*EmailApi* | [**emailServicesApiCredentialsList**](docs/EmailApi.md#emailservicesapicredentialslist) | **GET** /api/email/services/{service_pk}/api_credentials/ | 
*EmailApi* | [**emailServicesCancelCreate**](docs/EmailApi.md#emailservicescancelcreate) | **POST** /api/email/services/{id}/cancel/ | 
*EmailApi* | [**emailServicesChangeTierPartialUpdate**](docs/EmailApi.md#emailserviceschangetierpartialupdate) | **PATCH** /api/email/services/{id}/change_tier/ | 
*EmailApi* | [**emailServicesCreate**](docs/EmailApi.md#emailservicescreate) | **POST** /api/email/services/ | 
*EmailApi* | [**emailServicesDedicatedIpCreate**](docs/EmailApi.md#emailservicesdedicatedipcreate) | **POST** /api/email/services/{id}/dedicated_ip/ | 
*EmailApi* | [**emailServicesDedicatedIpDestroy**](docs/EmailApi.md#emailservicesdedicatedipdestroy) | **DELETE** /api/email/services/{id}/dedicated_ip/ | 
*EmailApi* | [**emailServicesDestroy**](docs/EmailApi.md#emailservicesdestroy) | **DELETE** /api/email/services/{id}/ | 
*EmailApi* | [**emailServicesDomainsCreate**](docs/EmailApi.md#emailservicesdomainscreate) | **POST** /api/email/services/{service_pk}/domains/ | 
*EmailApi* | [**emailServicesDomainsList**](docs/EmailApi.md#emailservicesdomainslist) | **GET** /api/email/services/{service_pk}/domains/ | 
*EmailApi* | [**emailServicesList**](docs/EmailApi.md#emailserviceslist) | **GET** /api/email/services/ | 
*EmailApi* | [**emailServicesMessagesRetrieve**](docs/EmailApi.md#emailservicesmessagesretrieve) | **GET** /api/email/services/{service_pk}/messages/ | 
*EmailApi* | [**emailServicesPartialUpdate**](docs/EmailApi.md#emailservicespartialupdate) | **PATCH** /api/email/services/{id}/ | 
*EmailApi* | [**emailServicesRestoreCreate**](docs/EmailApi.md#emailservicesrestorecreate) | **POST** /api/email/services/{id}/restore/ | 
*EmailApi* | [**emailServicesRetrieve**](docs/EmailApi.md#emailservicesretrieve) | **GET** /api/email/services/{id}/ | 
*EmailApi* | [**emailServicesSandboxAddressesCreate**](docs/EmailApi.md#emailservicessandboxaddressescreate) | **POST** /api/email/services/{service_pk}/sandbox_addresses/ | 
*EmailApi* | [**emailServicesSandboxAddressesList**](docs/EmailApi.md#emailservicessandboxaddresseslist) | **GET** /api/email/services/{service_pk}/sandbox_addresses/ | 
*EmailApi* | [**emailServicesSmtpCredentialsCreate**](docs/EmailApi.md#emailservicessmtpcredentialscreate) | **POST** /api/email/services/{service_pk}/smtp_credentials/ | 
*EmailApi* | [**emailServicesSmtpCredentialsList**](docs/EmailApi.md#emailservicessmtpcredentialslist) | **GET** /api/email/services/{service_pk}/smtp_credentials/ | 
*EmailApi* | [**emailServicesStatsRetrieve**](docs/EmailApi.md#emailservicesstatsretrieve) | **GET** /api/email/services/{service_pk}/stats/ | 
*EmailApi* | [**emailServicesSuppressionsCreate**](docs/EmailApi.md#emailservicessuppressionscreate) | **POST** /api/email/services/{service_pk}/suppressions/ | 
*EmailApi* | [**emailServicesSuppressionsList**](docs/EmailApi.md#emailservicessuppressionslist) | **GET** /api/email/services/{service_pk}/suppressions/ | 
*EmailApi* | [**emailSmtpCredentialsCreate**](docs/EmailApi.md#emailsmtpcredentialscreate) | **POST** /api/email/smtp_credentials/ | 
*EmailApi* | [**emailSmtpCredentialsDestroy**](docs/EmailApi.md#emailsmtpcredentialsdestroy) | **DELETE** /api/email/smtp_credentials/{id}/ | 
*EmailApi* | [**emailSmtpCredentialsList**](docs/EmailApi.md#emailsmtpcredentialslist) | **GET** /api/email/smtp_credentials/ | 
*EmailApi* | [**emailSmtpCredentialsRetrieve**](docs/EmailApi.md#emailsmtpcredentialsretrieve) | **GET** /api/email/smtp_credentials/{id}/ | 
*EmailApi* | [**emailSuppressionsCreate**](docs/EmailApi.md#emailsuppressionscreate) | **POST** /api/email/suppressions/ | 
*EmailApi* | [**emailSuppressionsDestroy**](docs/EmailApi.md#emailsuppressionsdestroy) | **DELETE** /api/email/suppressions/{id}/ | 
*EmailApi* | [**emailSuppressionsList**](docs/EmailApi.md#emailsuppressionslist) | **GET** /api/email/suppressions/ | 
*EmailApi* | [**emailSuppressionsRetrieve**](docs/EmailApi.md#emailsuppressionsretrieve) | **GET** /api/email/suppressions/{id}/ | 
*FreednsApi* | [**freednsDnsActivateCreate**](docs/FreednsApi.md#freednsdnsactivatecreate) | **POST** /api/freedns/dns/activate/ | 
*FreednsApi* | [**freednsDnsAddRecordCreate**](docs/FreednsApi.md#freednsdnsaddrecordcreate) | **POST** /api/freedns/dns/add-record/ | 
*FreednsApi* | [**freednsDnsDeactivateCreate**](docs/FreednsApi.md#freednsdnsdeactivatecreate) | **POST** /api/freedns/dns/deactivate/ | 
*FreednsApi* | [**freednsDnsDeleteRecordCreate**](docs/FreednsApi.md#freednsdnsdeleterecordcreate) | **POST** /api/freedns/dns/delete-record/ | 
*FreednsApi* | [**freednsDnsList**](docs/FreednsApi.md#freednsdnslist) | **GET** /api/freedns/dns/ | 
*FreednsApi* | [**freednsDnsRecordsList**](docs/FreednsApi.md#freednsdnsrecordslist) | **GET** /api/freedns/dns/records/ | 
*HostingApi* | [**hostingHostingChangePasswordCreate**](docs/HostingApi.md#hostinghostingchangepasswordcreate) | **POST** /api/hosting/hosting/{id}/change-password/ | 
*HostingApi* | [**hostingHostingList**](docs/HostingApi.md#hostinghostinglist) | **GET** /api/hosting/hosting/ | 
*HostingApi* | [**hostingHostingRetrieve**](docs/HostingApi.md#hostinghostingretrieve) | **GET** /api/hosting/hosting/{id}/ | 
*KubernetesApi* | [**kubernetesClusterTypesList**](docs/KubernetesApi.md#kubernetesclustertypeslist) | **GET** /api/kubernetes/cluster-types/ | 
*KubernetesApi* | [**kubernetesClustersConnectVmCreate**](docs/KubernetesApi.md#kubernetesclustersconnectvmcreate) | **POST** /api/kubernetes/clusters/{id}/connect-vm/ | 
*KubernetesApi* | [**kubernetesClustersConnectedVmsRetrieve**](docs/KubernetesApi.md#kubernetesclustersconnectedvmsretrieve) | **GET** /api/kubernetes/clusters/{id}/connected-vms/ | 
*KubernetesApi* | [**kubernetesClustersCreate**](docs/KubernetesApi.md#kubernetesclusterscreate) | **POST** /api/kubernetes/clusters/ | 
*KubernetesApi* | [**kubernetesClustersDestroy**](docs/KubernetesApi.md#kubernetesclustersdestroy) | **DELETE** /api/kubernetes/clusters/{id}/ | 
*KubernetesApi* | [**kubernetesClustersDisconnectVmCreate**](docs/KubernetesApi.md#kubernetesclustersdisconnectvmcreate) | **POST** /api/kubernetes/clusters/{id}/disconnect-vm/ | 
*KubernetesApi* | [**kubernetesClustersEligibleVmsRetrieve**](docs/KubernetesApi.md#kubernetesclusterseligiblevmsretrieve) | **GET** /api/kubernetes/clusters/{id}/eligible-vms/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesCreate**](docs/KubernetesApi.md#kubernetesclustershttproutescreate) | **POST** /api/kubernetes/clusters/{cluster_id}/httproutes/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesDestroy**](docs/KubernetesApi.md#kubernetesclustershttproutesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesPartialUpdate**](docs/KubernetesApi.md#kubernetesclustershttproutespartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesRetrieve**](docs/KubernetesApi.md#kubernetesclustershttproutesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/httproutes/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesRetrieve2**](docs/KubernetesApi.md#kubernetesclustershttproutesretrieve2) | **GET** /api/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesUpdate**](docs/KubernetesApi.md#kubernetesclustershttproutesupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersKubeVersionUpgradeCreate**](docs/KubernetesApi.md#kubernetesclusterskubeversionupgradecreate) | **POST** /api/kubernetes/clusters/{id}/kube-version-upgrade/ | 
*KubernetesApi* | [**kubernetesClustersKubeconfigCreate**](docs/KubernetesApi.md#kubernetesclusterskubeconfigcreate) | **POST** /api/kubernetes/clusters/{id}/kubeconfig/ | 
*KubernetesApi* | [**kubernetesClustersKubeconfigRetrieve**](docs/KubernetesApi.md#kubernetesclusterskubeconfigretrieve) | **GET** /api/kubernetes/clusters/{id}/kubeconfig/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallCreate**](docs/KubernetesApi.md#kubernetesclusterslbfirewallcreate) | **POST** /api/kubernetes/clusters/{cluster_id}/lb-firewall/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallDestroy**](docs/KubernetesApi.md#kubernetesclusterslbfirewalldestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallList**](docs/KubernetesApi.md#kubernetesclusterslbfirewalllist) | **GET** /api/kubernetes/clusters/{cluster_id}/lb-firewall/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallPartialUpdate**](docs/KubernetesApi.md#kubernetesclusterslbfirewallpartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallRetrieve**](docs/KubernetesApi.md#kubernetesclusterslbfirewallretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallUpdate**](docs/KubernetesApi.md#kubernetesclusterslbfirewallupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | 
*KubernetesApi* | [**kubernetesClustersList**](docs/KubernetesApi.md#kubernetesclusterslist) | **GET** /api/kubernetes/clusters/ | 
*KubernetesApi* | [**kubernetesClustersPartialUpdate**](docs/KubernetesApi.md#kubernetesclusterspartialupdate) | **PATCH** /api/kubernetes/clusters/{id}/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsCreate**](docs/KubernetesApi.md#kubernetesclustersportforwardscreate) | **POST** /api/kubernetes/clusters/{cluster_id}/port-forwards/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsDestroy**](docs/KubernetesApi.md#kubernetesclustersportforwardsdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsPartialUpdate**](docs/KubernetesApi.md#kubernetesclustersportforwardspartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsRetrieve**](docs/KubernetesApi.md#kubernetesclustersportforwardsretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/port-forwards/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsRetrieve2**](docs/KubernetesApi.md#kubernetesclustersportforwardsretrieve2) | **GET** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsUpdate**](docs/KubernetesApi.md#kubernetesclustersportforwardsupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsCreate**](docs/KubernetesApi.md#kubernetesclustersresourcepoolscreate) | **POST** /api/kubernetes/clusters/{cluster_id}/resource-pools/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsDestroy**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsList**](docs/KubernetesApi.md#kubernetesclustersresourcepoolslist) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsNodesDestroy**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsnodesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsNodesList**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsnodeslist) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsNodesMetricsRetrieve**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsnodesmetricsretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/metrics/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsNodesRetrieve**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsnodesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsNodesRrdRetrieve**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsnodesrrdretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/rrd/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsPartialUpdate**](docs/KubernetesApi.md#kubernetesclustersresourcepoolspartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsRetrieve**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsUpdate**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | 
*KubernetesApi* | [**kubernetesClustersRetrieve**](docs/KubernetesApi.md#kubernetesclustersretrieve) | **GET** /api/kubernetes/clusters/{id}/ | 
*KubernetesApi* | [**kubernetesClustersTalosVersionUpgradeCreate**](docs/KubernetesApi.md#kubernetesclusterstalosversionupgradecreate) | **POST** /api/kubernetes/clusters/{id}/talos-version-upgrade/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesCreate**](docs/KubernetesApi.md#kubernetesclusterstcproutescreate) | **POST** /api/kubernetes/clusters/{cluster_id}/tcproutes/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesDestroy**](docs/KubernetesApi.md#kubernetesclusterstcproutesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesPartialUpdate**](docs/KubernetesApi.md#kubernetesclusterstcproutespartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesRetrieve**](docs/KubernetesApi.md#kubernetesclusterstcproutesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/tcproutes/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesRetrieve2**](docs/KubernetesApi.md#kubernetesclusterstcproutesretrieve2) | **GET** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesUpdate**](docs/KubernetesApi.md#kubernetesclusterstcproutesupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersToggleCloudVmAccessCreate**](docs/KubernetesApi.md#kubernetesclusterstogglecloudvmaccesscreate) | **POST** /api/kubernetes/clusters/{id}/toggle-cloud-vm-access/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesCreate**](docs/KubernetesApi.md#kubernetesclustersudproutescreate) | **POST** /api/kubernetes/clusters/{cluster_id}/udproutes/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesDestroy**](docs/KubernetesApi.md#kubernetesclustersudproutesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesPartialUpdate**](docs/KubernetesApi.md#kubernetesclustersudproutespartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesRetrieve**](docs/KubernetesApi.md#kubernetesclustersudproutesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/udproutes/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesRetrieve2**](docs/KubernetesApi.md#kubernetesclustersudproutesretrieve2) | **GET** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesUpdate**](docs/KubernetesApi.md#kubernetesclustersudproutesupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersUpdate**](docs/KubernetesApi.md#kubernetesclustersupdate) | **PUT** /api/kubernetes/clusters/{id}/ | 
*KubernetesApi* | [**kubernetesClustersUpgradeFeatureCreate**](docs/KubernetesApi.md#kubernetesclustersupgradefeaturecreate) | **POST** /api/kubernetes/clusters/{id}/upgrade-feature/ | 
*SchemaApi* | [**schemaRetrieve**](docs/SchemaApi.md#schemaretrieve) | **GET** /api/schema/ | 
*SupportApi* | [**supportDepartmentsList**](docs/SupportApi.md#supportdepartmentslist) | **GET** /api/support/departments/ | 
*SupportApi* | [**supportTicketsCloseCreate**](docs/SupportApi.md#supportticketsclosecreate) | **POST** /api/support/tickets/{id}/close/ | 
*SupportApi* | [**supportTicketsCreate**](docs/SupportApi.md#supportticketscreate) | **POST** /api/support/tickets/ | 
*SupportApi* | [**supportTicketsList**](docs/SupportApi.md#supportticketslist) | **GET** /api/support/tickets/ | 
*SupportApi* | [**supportTicketsMessagesAttachmentRetrieve**](docs/SupportApi.md#supportticketsmessagesattachmentretrieve) | **GET** /api/support/tickets/{id}/messages/{message_id}/attachment/ | 
*SupportApi* | [**supportTicketsReopenCreate**](docs/SupportApi.md#supportticketsreopencreate) | **POST** /api/support/tickets/{id}/reopen/ | 
*SupportApi* | [**supportTicketsReplyCreate**](docs/SupportApi.md#supportticketsreplycreate) | **POST** /api/support/tickets/{id}/reply/ | 
*SupportApi* | [**supportTicketsRetrieve**](docs/SupportApi.md#supportticketsretrieve) | **GET** /api/support/tickets/{id}/ | 


### Documentation For Models

 - [APITokenCreate](docs/APITokenCreate.md)
 - [APITokenList](docs/APITokenList.md)
 - [ActivateFreeDNS](docs/ActivateFreeDNS.md)
 - [ActivateFreeDNSResponse](docs/ActivateFreeDNSResponse.md)
 - [ActivityLogEntry](docs/ActivityLogEntry.md)
 - [ActivityLogResponse](docs/ActivityLogResponse.md)
 - [AddServerResponse](docs/AddServerResponse.md)
 - [Address](docs/Address.md)
 - [ApiCredential](docs/ApiCredential.md)
 - [AttachIPv4](docs/AttachIPv4.md)
 - [AttachIPv6](docs/AttachIPv6.md)
 - [AttachVolume](docs/AttachVolume.md)
 - [Bucket](docs/Bucket.md)
 - [CLISessionCreateResponse](docs/CLISessionCreateResponse.md)
 - [CLISessionPollResponse](docs/CLISessionPollResponse.md)
 - [CLISessionPollResponseStatusEnum](docs/CLISessionPollResponseStatusEnum.md)
 - [CancelServiceResponse](docs/CancelServiceResponse.md)
 - [ChangeBillingCycle](docs/ChangeBillingCycle.md)
 - [ChangeBillingCycleResponse](docs/ChangeBillingCycleResponse.md)
 - [ChangeCompany](docs/ChangeCompany.md)
 - [ChangeCompanyResponse](docs/ChangeCompanyResponse.md)
 - [ChangePassword](docs/ChangePassword.md)
 - [CheckAvailability](docs/CheckAvailability.md)
 - [ClusterAdd](docs/ClusterAdd.md)
 - [ClusterAddResponse](docs/ClusterAddResponse.md)
 - [ClusterDetail](docs/ClusterDetail.md)
 - [ClusterPackage](docs/ClusterPackage.md)
 - [ClusterType](docs/ClusterType.md)
 - [ClusterTypeEnum](docs/ClusterTypeEnum.md)
 - [Company](docs/Company.md)
 - [ConnectVMRequest](docs/ConnectVMRequest.md)
 - [ConnectVMResponse](docs/ConnectVMResponse.md)
 - [ConnectedVM](docs/ConnectedVM.md)
 - [ConnectedVMsResponse](docs/ConnectedVMsResponse.md)
 - [ConsoleToken](docs/ConsoleToken.md)
 - [ContactTypeEnum](docs/ContactTypeEnum.md)
 - [ContactsUpdate](docs/ContactsUpdate.md)
 - [ContactsUpdateResponse](docs/ContactsUpdateResponse.md)
 - [CountryEnum](docs/CountryEnum.md)
 - [DNSRecord](docs/DNSRecord.md)
 - [DNSRecordCreate](docs/DNSRecordCreate.md)
 - [DNSRecordCreateTypeEnum](docs/DNSRecordCreateTypeEnum.md)
 - [DNSRecordMutateResponse](docs/DNSRecordMutateResponse.md)
 - [DeactivateFreeDNS](docs/DeactivateFreeDNS.md)
 - [DeactivateFreeDNSResponse](docs/DeactivateFreeDNSResponse.md)
 - [DedicatedRDNS](docs/DedicatedRDNS.md)
 - [DedicatedServer](docs/DedicatedServer.md)
 - [DeleteRecord](docs/DeleteRecord.md)
 - [DeleteRecordResponse](docs/DeleteRecordResponse.md)
 - [Department](docs/Department.md)
 - [Deposit](docs/Deposit.md)
 - [DepositCreate](docs/DepositCreate.md)
 - [DepositStatusEnum](docs/DepositStatusEnum.md)
 - [DestroyProtection](docs/DestroyProtection.md)
 - [DetachIPv4](docs/DetachIPv4.md)
 - [DetachIPv4Response](docs/DetachIPv4Response.md)
 - [DetachIPv6](docs/DetachIPv6.md)
 - [DetachIPv6Response](docs/DetachIPv6Response.md)
 - [DetachVolume](docs/DetachVolume.md)
 - [DisconnectVMRequest](docs/DisconnectVMRequest.md)
 - [DisconnectVMResponse](docs/DisconnectVMResponse.md)
 - [DnsSourceEnum](docs/DnsSourceEnum.md)
 - [Domain](docs/Domain.md)
 - [DomainAdd](docs/DomainAdd.md)
 - [DomainCancelResponse](docs/DomainCancelResponse.md)
 - [DomainCreate](docs/DomainCreate.md)
 - [DomainRegistrant](docs/DomainRegistrant.md)
 - [EligibleVM](docs/EligibleVM.md)
 - [EligibleVMsResponse](docs/EligibleVMsResponse.md)
 - [EmailHistory](docs/EmailHistory.md)
 - [EmailService](docs/EmailService.md)
 - [FeatureUpgradeRequest](docs/FeatureUpgradeRequest.md)
 - [FeatureUpgradeResponse](docs/FeatureUpgradeResponse.md)
 - [FeaturesEnum](docs/FeaturesEnum.md)
 - [FirewallRule](docs/FirewallRule.md)
 - [FirewallRuleDirectionEnum](docs/FirewallRuleDirectionEnum.md)
 - [FirewallRulesSet](docs/FirewallRulesSet.md)
 - [FirewallRulesSetStatusEnum](docs/FirewallRulesSetStatusEnum.md)
 - [FloatingIPAuthorization](docs/FloatingIPAuthorization.md)
 - [FloatingIPAuthorizeRequest](docs/FloatingIPAuthorizeRequest.md)
 - [FloatingIPv4](docs/FloatingIPv4.md)
 - [FloatingIPv4AuthorizeResponse](docs/FloatingIPv4AuthorizeResponse.md)
 - [FloatingIPv4Create](docs/FloatingIPv4Create.md)
 - [FloatingIPv4UnauthorizeResponse](docs/FloatingIPv4UnauthorizeResponse.md)
 - [FloatingIPv6](docs/FloatingIPv6.md)
 - [FloatingIPv6AuthorizeResponse](docs/FloatingIPv6AuthorizeResponse.md)
 - [FloatingIPv6Create](docs/FloatingIPv6Create.md)
 - [FloatingIPv6UnauthorizeResponse](docs/FloatingIPv6UnauthorizeResponse.md)
 - [FreeDNSDomain](docs/FreeDNSDomain.md)
 - [FundsBalanceResponse](docs/FundsBalanceResponse.md)
 - [FundsLog](docs/FundsLog.md)
 - [FwPolicyOutEnum](docs/FwPolicyOutEnum.md)
 - [HTTPRoute](docs/HTTPRoute.md)
 - [HardwareGeneration](docs/HardwareGeneration.md)
 - [HostingChangePasswordResponse](docs/HostingChangePasswordResponse.md)
 - [HostingService](docs/HostingService.md)
 - [InboundRoute](docs/InboundRoute.md)
 - [InvoiceDetail](docs/InvoiceDetail.md)
 - [InvoiceList](docs/InvoiceList.md)
 - [KubeUpgradeResponse](docs/KubeUpgradeResponse.md)
 - [KubeVersionEnum](docs/KubeVersionEnum.md)
 - [LBFirewallRule](docs/LBFirewallRule.md)
 - [LBFirewallRuleActionEnum](docs/LBFirewallRuleActionEnum.md)
 - [LBFirewallRuleDirectionEnum](docs/LBFirewallRuleDirectionEnum.md)
 - [LowBalanceSettings](docs/LowBalanceSettings.md)
 - [ModeEnum](docs/ModeEnum.md)
 - [NameserversUpdate](docs/NameserversUpdate.md)
 - [NameserversUpdateResponse](docs/NameserversUpdateResponse.md)
 - [NodeMetricsResponse](docs/NodeMetricsResponse.md)
 - [NodeRRDResponse](docs/NodeRRDResponse.md)
 - [NotificationSettingsResponse](docs/NotificationSettingsResponse.md)
 - [OSImage](docs/OSImage.md)
 - [OperationEnum](docs/OperationEnum.md)
 - [PaginatedAPITokenListList](docs/PaginatedAPITokenListList.md)
 - [PaginatedApiCredentialList](docs/PaginatedApiCredentialList.md)
 - [PaginatedClusterDetailList](docs/PaginatedClusterDetailList.md)
 - [PaginatedClusterTypeList](docs/PaginatedClusterTypeList.md)
 - [PaginatedCompanyList](docs/PaginatedCompanyList.md)
 - [PaginatedDedicatedServerList](docs/PaginatedDedicatedServerList.md)
 - [PaginatedDepositList](docs/PaginatedDepositList.md)
 - [PaginatedDomainList](docs/PaginatedDomainList.md)
 - [PaginatedDomainRegistrantList](docs/PaginatedDomainRegistrantList.md)
 - [PaginatedEmailHistoryList](docs/PaginatedEmailHistoryList.md)
 - [PaginatedEmailServiceList](docs/PaginatedEmailServiceList.md)
 - [PaginatedFloatingIPAuthorizationList](docs/PaginatedFloatingIPAuthorizationList.md)
 - [PaginatedFloatingIPv4List](docs/PaginatedFloatingIPv4List.md)
 - [PaginatedFloatingIPv6List](docs/PaginatedFloatingIPv6List.md)
 - [PaginatedFundsLogList](docs/PaginatedFundsLogList.md)
 - [PaginatedHostingServiceList](docs/PaginatedHostingServiceList.md)
 - [PaginatedInboundRouteList](docs/PaginatedInboundRouteList.md)
 - [PaginatedInvoiceListList](docs/PaginatedInvoiceListList.md)
 - [PaginatedLBFirewallRuleList](docs/PaginatedLBFirewallRuleList.md)
 - [PaginatedOSImageList](docs/PaginatedOSImageList.md)
 - [PaginatedPrivateNetworkList](docs/PaginatedPrivateNetworkList.md)
 - [PaginatedPublicIPv4List](docs/PaginatedPublicIPv4List.md)
 - [PaginatedPublicIPv6List](docs/PaginatedPublicIPv6List.md)
 - [PaginatedResourcePoolList](docs/PaginatedResourcePoolList.md)
 - [PaginatedResourcePoolNodeList](docs/PaginatedResourcePoolNodeList.md)
 - [PaginatedSSHKeyList](docs/PaginatedSSHKeyList.md)
 - [PaginatedSandboxAddressList](docs/PaginatedSandboxAddressList.md)
 - [PaginatedSendingDomainList](docs/PaginatedSendingDomainList.md)
 - [PaginatedServerList](docs/PaginatedServerList.md)
 - [PaginatedServerProductList](docs/PaginatedServerProductList.md)
 - [PaginatedServiceListList](docs/PaginatedServiceListList.md)
 - [PaginatedSmtpCredentialList](docs/PaginatedSmtpCredentialList.md)
 - [PaginatedSnapshotList](docs/PaginatedSnapshotList.md)
 - [PaginatedStorageProductList](docs/PaginatedStorageProductList.md)
 - [PaginatedSubscriptionList](docs/PaginatedSubscriptionList.md)
 - [PaginatedSuppressionEntryList](docs/PaginatedSuppressionEntryList.md)
 - [PaginatedTLDList](docs/PaginatedTLDList.md)
 - [PaginatedTicketListList](docs/PaginatedTicketListList.md)
 - [PatchedClusterDetail](docs/PatchedClusterDetail.md)
 - [PatchedCompany](docs/PatchedCompany.md)
 - [PatchedDomain](docs/PatchedDomain.md)
 - [PatchedDomainRegistrant](docs/PatchedDomainRegistrant.md)
 - [PatchedEmailService](docs/PatchedEmailService.md)
 - [PatchedFirewallRule](docs/PatchedFirewallRule.md)
 - [PatchedFirewallRulesSet](docs/PatchedFirewallRulesSet.md)
 - [PatchedHTTPRoute](docs/PatchedHTTPRoute.md)
 - [PatchedInboundRoute](docs/PatchedInboundRoute.md)
 - [PatchedLBFirewallRule](docs/PatchedLBFirewallRule.md)
 - [PatchedPrivateNetwork](docs/PatchedPrivateNetwork.md)
 - [PatchedProfile](docs/PatchedProfile.md)
 - [PatchedResourcePool](docs/PatchedResourcePool.md)
 - [PatchedSSHKey](docs/PatchedSSHKey.md)
 - [PatchedServerDetail](docs/PatchedServerDetail.md)
 - [PatchedSubscribe](docs/PatchedSubscribe.md)
 - [PatchedTCPRoute](docs/PatchedTCPRoute.md)
 - [PatchedUDPRoute](docs/PatchedUDPRoute.md)
 - [PatchedVolume](docs/PatchedVolume.md)
 - [PayWithFundsResponse](docs/PayWithFundsResponse.md)
 - [PowerAction](docs/PowerAction.md)
 - [PowerActionActionEnum](docs/PowerActionActionEnum.md)
 - [PowerActionResponse](docs/PowerActionResponse.md)
 - [PowerManagement](docs/PowerManagement.md)
 - [PowerManagementRequest](docs/PowerManagementRequest.md)
 - [PowerManagementRequestActionEnum](docs/PowerManagementRequestActionEnum.md)
 - [Priority3cdEnum](docs/Priority3cdEnum.md)
 - [PrivateNetwork](docs/PrivateNetwork.md)
 - [PrivateNetworkAddHost](docs/PrivateNetworkAddHost.md)
 - [PrivateNetworkRemoveHost](docs/PrivateNetworkRemoveHost.md)
 - [Profile](docs/Profile.md)
 - [PublicIPv4](docs/PublicIPv4.md)
 - [PublicIPv6](docs/PublicIPv6.md)
 - [PublicInterface](docs/PublicInterface.md)
 - [RDNSUpdateResponse](docs/RDNSUpdateResponse.md)
 - [ReasonEnum](docs/ReasonEnum.md)
 - [Reinstall](docs/Reinstall.md)
 - [ReinstallResponse](docs/ReinstallResponse.md)
 - [RemoveServerResponse](docs/RemoveServerResponse.md)
 - [RenewDomain](docs/RenewDomain.md)
 - [ResourcePool](docs/ResourcePool.md)
 - [ResourcePoolAdd](docs/ResourcePoolAdd.md)
 - [ResourcePoolAddResponse](docs/ResourcePoolAddResponse.md)
 - [ResourcePoolNode](docs/ResourcePoolNode.md)
 - [RetryProvision](docs/RetryProvision.md)
 - [ReverseDNS](docs/ReverseDNS.md)
 - [SSHKey](docs/SSHKey.md)
 - [SandboxAddress](docs/SandboxAddress.md)
 - [ScopeEnum](docs/ScopeEnum.md)
 - [SendingDomain](docs/SendingDomain.md)
 - [SendingDomainStatusEnum](docs/SendingDomainStatusEnum.md)
 - [Server](docs/Server.md)
 - [ServerAdd](docs/ServerAdd.md)
 - [ServerAddResponse](docs/ServerAddResponse.md)
 - [ServerDetail](docs/ServerDetail.md)
 - [ServerProduct](docs/ServerProduct.md)
 - [ServerProductUpgrade](docs/ServerProductUpgrade.md)
 - [ServerUpgradeResponse](docs/ServerUpgradeResponse.md)
 - [ServerUsageResponse](docs/ServerUsageResponse.md)
 - [Service](docs/Service.md)
 - [ServiceList](docs/ServiceList.md)
 - [SmtpCredential](docs/SmtpCredential.md)
 - [Snapshot](docs/Snapshot.md)
 - [SnapshotCreate](docs/SnapshotCreate.md)
 - [SnapshotCreateQueued](docs/SnapshotCreateQueued.md)
 - [SnapshotDeleteQueued](docs/SnapshotDeleteQueued.md)
 - [SnapshotRollbackQueued](docs/SnapshotRollbackQueued.md)
 - [SourceEnum](docs/SourceEnum.md)
 - [Status03cEnum](docs/Status03cEnum.md)
 - [Status63aEnum](docs/Status63aEnum.md)
 - [StatusA57Enum](docs/StatusA57Enum.md)
 - [StatusEf2Enum](docs/StatusEf2Enum.md)
 - [StorageProduct](docs/StorageProduct.md)
 - [Subscribe](docs/Subscribe.md)
 - [Subscription](docs/Subscription.md)
 - [SubscriptionStatusEnum](docs/SubscriptionStatusEnum.md)
 - [SuppressionEntry](docs/SuppressionEntry.md)
 - [TCPRoute](docs/TCPRoute.md)
 - [TLD](docs/TLD.md)
 - [TalosUpgradeResponse](docs/TalosUpgradeResponse.md)
 - [ThresholdTypeEnum](docs/ThresholdTypeEnum.md)
 - [TicketCloseResponse](docs/TicketCloseResponse.md)
 - [TicketCreate](docs/TicketCreate.md)
 - [TicketCreatePriorityEnum](docs/TicketCreatePriorityEnum.md)
 - [TicketDetail](docs/TicketDetail.md)
 - [TicketList](docs/TicketList.md)
 - [TicketReopenResponse](docs/TicketReopenResponse.md)
 - [TicketReply](docs/TicketReply.md)
 - [TicketReplyResponse](docs/TicketReplyResponse.md)
 - [TierEnum](docs/TierEnum.md)
 - [ToggleAutoPaymentResponse](docs/ToggleAutoPaymentResponse.md)
 - [ToggleCloudVMAccessResponse](docs/ToggleCloudVMAccessResponse.md)
 - [TransferRoDomain](docs/TransferRoDomain.md)
 - [Type2faEnum](docs/Type2faEnum.md)
 - [UDPRoute](docs/UDPRoute.md)
 - [Volume](docs/Volume.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="cookieAuth"></a>
### cookieAuth

- **Type**: API key
- **API key parameter name**: sessionid
- **Location**: 

<a id="tokenAuth"></a>
### tokenAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

