## @pidginhost/sdk@0.3.0

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
npm install @pidginhost/sdk@0.3.0 --save
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
*AccountApi* | [**accountApiTokensCreate2**](docs/AccountApi.md#accountapitokenscreate2) | **POST** /api/v1/account/api-tokens/ | 
*AccountApi* | [**accountApiTokensDestroy**](docs/AccountApi.md#accountapitokensdestroy) | **DELETE** /api/account/api-tokens/{id}/ | 
*AccountApi* | [**accountApiTokensDestroy2**](docs/AccountApi.md#accountapitokensdestroy2) | **DELETE** /api/v1/account/api-tokens/{id}/ | 
*AccountApi* | [**accountApiTokensList**](docs/AccountApi.md#accountapitokenslist) | **GET** /api/account/api-tokens/ | 
*AccountApi* | [**accountApiTokensList2**](docs/AccountApi.md#accountapitokenslist2) | **GET** /api/v1/account/api-tokens/ | 
*AccountApi* | [**accountCompaniesCreate**](docs/AccountApi.md#accountcompaniescreate) | **POST** /api/account/companies/ | 
*AccountApi* | [**accountCompaniesCreate2**](docs/AccountApi.md#accountcompaniescreate2) | **POST** /api/v1/account/companies/ | 
*AccountApi* | [**accountCompaniesDestroy**](docs/AccountApi.md#accountcompaniesdestroy) | **DELETE** /api/account/companies/{id}/ | 
*AccountApi* | [**accountCompaniesDestroy2**](docs/AccountApi.md#accountcompaniesdestroy2) | **DELETE** /api/v1/account/companies/{id}/ | 
*AccountApi* | [**accountCompaniesList**](docs/AccountApi.md#accountcompanieslist) | **GET** /api/account/companies/ | 
*AccountApi* | [**accountCompaniesList2**](docs/AccountApi.md#accountcompanieslist2) | **GET** /api/v1/account/companies/ | 
*AccountApi* | [**accountCompaniesPartialUpdate**](docs/AccountApi.md#accountcompaniespartialupdate) | **PATCH** /api/account/companies/{id}/ | 
*AccountApi* | [**accountCompaniesPartialUpdate2**](docs/AccountApi.md#accountcompaniespartialupdate2) | **PATCH** /api/v1/account/companies/{id}/ | 
*AccountApi* | [**accountCompaniesRetrieve**](docs/AccountApi.md#accountcompaniesretrieve) | **GET** /api/account/companies/{id}/ | 
*AccountApi* | [**accountCompaniesRetrieve2**](docs/AccountApi.md#accountcompaniesretrieve2) | **GET** /api/v1/account/companies/{id}/ | 
*AccountApi* | [**accountCompaniesUpdate**](docs/AccountApi.md#accountcompaniesupdate) | **PUT** /api/account/companies/{id}/ | 
*AccountApi* | [**accountCompaniesUpdate2**](docs/AccountApi.md#accountcompaniesupdate2) | **PUT** /api/v1/account/companies/{id}/ | 
*AccountApi* | [**accountEmailsList**](docs/AccountApi.md#accountemailslist) | **GET** /api/account/emails/ | 
*AccountApi* | [**accountEmailsList2**](docs/AccountApi.md#accountemailslist2) | **GET** /api/v1/account/emails/ | 
*AccountApi* | [**accountProfilePartialUpdate**](docs/AccountApi.md#accountprofilepartialupdate) | **PATCH** /api/account/profile | 
*AccountApi* | [**accountProfilePartialUpdate2**](docs/AccountApi.md#accountprofilepartialupdate2) | **PATCH** /api/v1/account/profile | 
*AccountApi* | [**accountProfileRetrieve**](docs/AccountApi.md#accountprofileretrieve) | **GET** /api/account/profile | 
*AccountApi* | [**accountProfileRetrieve2**](docs/AccountApi.md#accountprofileretrieve2) | **GET** /api/v1/account/profile | 
*AccountApi* | [**accountProfileUpdate**](docs/AccountApi.md#accountprofileupdate) | **PUT** /api/account/profile | 
*AccountApi* | [**accountProfileUpdate2**](docs/AccountApi.md#accountprofileupdate2) | **PUT** /api/v1/account/profile | 
*AccountApi* | [**accountSshKeysCreate**](docs/AccountApi.md#accountsshkeyscreate) | **POST** /api/account/ssh-keys/ | 
*AccountApi* | [**accountSshKeysCreate2**](docs/AccountApi.md#accountsshkeyscreate2) | **POST** /api/v1/account/ssh-keys/ | 
*AccountApi* | [**accountSshKeysDestroy**](docs/AccountApi.md#accountsshkeysdestroy) | **DELETE** /api/account/ssh-keys/{id}/ | 
*AccountApi* | [**accountSshKeysDestroy2**](docs/AccountApi.md#accountsshkeysdestroy2) | **DELETE** /api/v1/account/ssh-keys/{id}/ | 
*AccountApi* | [**accountSshKeysList**](docs/AccountApi.md#accountsshkeyslist) | **GET** /api/account/ssh-keys/ | 
*AccountApi* | [**accountSshKeysList2**](docs/AccountApi.md#accountsshkeyslist2) | **GET** /api/v1/account/ssh-keys/ | 
*AccountApi* | [**accountSshKeysPartialUpdate**](docs/AccountApi.md#accountsshkeyspartialupdate) | **PATCH** /api/account/ssh-keys/{id}/ | 
*AccountApi* | [**accountSshKeysPartialUpdate2**](docs/AccountApi.md#accountsshkeyspartialupdate2) | **PATCH** /api/v1/account/ssh-keys/{id}/ | 
*AccountApi* | [**accountSshKeysRetrieve**](docs/AccountApi.md#accountsshkeysretrieve) | **GET** /api/account/ssh-keys/{id}/ | 
*AccountApi* | [**accountSshKeysRetrieve2**](docs/AccountApi.md#accountsshkeysretrieve2) | **GET** /api/v1/account/ssh-keys/{id}/ | 
*AccountApi* | [**accountSshKeysUpdate**](docs/AccountApi.md#accountsshkeysupdate) | **PUT** /api/account/ssh-keys/{id}/ | 
*AccountApi* | [**accountSshKeysUpdate2**](docs/AccountApi.md#accountsshkeysupdate2) | **PUT** /api/v1/account/ssh-keys/{id}/ | 
*AuthApi* | [**authCliSessionCreate**](docs/AuthApi.md#authclisessioncreate) | **POST** /api/auth/cli-session/ | 
*AuthApi* | [**authCliSessionCreate2**](docs/AuthApi.md#authclisessioncreate2) | **POST** /api/v1/auth/cli-session/ | 
*AuthApi* | [**authCliSessionRetrieve**](docs/AuthApi.md#authclisessionretrieve) | **GET** /api/auth/cli-session/{session_id}/ | 
*AuthApi* | [**authCliSessionRetrieve2**](docs/AuthApi.md#authclisessionretrieve2) | **GET** /api/v1/auth/cli-session/{session_id}/ | 
*BillingApi* | [**billingDepositsCreate**](docs/BillingApi.md#billingdepositscreate) | **POST** /api/billing/deposits/ | 
*BillingApi* | [**billingDepositsCreate2**](docs/BillingApi.md#billingdepositscreate2) | **POST** /api/v1/billing/deposits/ | 
*BillingApi* | [**billingDepositsList**](docs/BillingApi.md#billingdepositslist) | **GET** /api/billing/deposits/ | 
*BillingApi* | [**billingDepositsList2**](docs/BillingApi.md#billingdepositslist2) | **GET** /api/v1/billing/deposits/ | 
*BillingApi* | [**billingDepositsRetrieve**](docs/BillingApi.md#billingdepositsretrieve) | **GET** /api/billing/deposits/{id}/ | 
*BillingApi* | [**billingDepositsRetrieve2**](docs/BillingApi.md#billingdepositsretrieve2) | **GET** /api/v1/billing/deposits/{id}/ | 
*BillingApi* | [**billingFundsList**](docs/BillingApi.md#billingfundslist) | **GET** /api/billing/funds/ | 
*BillingApi* | [**billingFundsList2**](docs/BillingApi.md#billingfundslist2) | **GET** /api/v1/billing/funds/ | 
*BillingApi* | [**billingFundsLogList**](docs/BillingApi.md#billingfundsloglist) | **GET** /api/billing/funds-log/ | 
*BillingApi* | [**billingFundsLogList2**](docs/BillingApi.md#billingfundsloglist2) | **GET** /api/v1/billing/funds-log/ | 
*BillingApi* | [**billingFundsNotificationSettingsCreate**](docs/BillingApi.md#billingfundsnotificationsettingscreate) | **POST** /api/billing/funds/notification-settings/ | 
*BillingApi* | [**billingFundsNotificationSettingsCreate2**](docs/BillingApi.md#billingfundsnotificationsettingscreate2) | **POST** /api/v1/billing/funds/notification-settings/ | 
*BillingApi* | [**billingInvoicesList**](docs/BillingApi.md#billinginvoiceslist) | **GET** /api/billing/invoices/ | 
*BillingApi* | [**billingInvoicesList2**](docs/BillingApi.md#billinginvoiceslist2) | **GET** /api/v1/billing/invoices/ | 
*BillingApi* | [**billingInvoicesPayWithFundsCreate**](docs/BillingApi.md#billinginvoicespaywithfundscreate) | **POST** /api/billing/invoices/{id}/pay-with-funds/ | 
*BillingApi* | [**billingInvoicesPayWithFundsCreate2**](docs/BillingApi.md#billinginvoicespaywithfundscreate2) | **POST** /api/v1/billing/invoices/{id}/pay-with-funds/ | 
*BillingApi* | [**billingInvoicesPdfRetrieve**](docs/BillingApi.md#billinginvoicespdfretrieve) | **GET** /api/billing/invoices/{id}/pdf/ | 
*BillingApi* | [**billingInvoicesPdfRetrieve2**](docs/BillingApi.md#billinginvoicespdfretrieve2) | **GET** /api/v1/billing/invoices/{id}/pdf/ | 
*BillingApi* | [**billingInvoicesRetrieve**](docs/BillingApi.md#billinginvoicesretrieve) | **GET** /api/billing/invoices/{id}/ | 
*BillingApi* | [**billingInvoicesRetrieve2**](docs/BillingApi.md#billinginvoicesretrieve2) | **GET** /api/v1/billing/invoices/{id}/ | 
*BillingApi* | [**billingServicesCancelCreate**](docs/BillingApi.md#billingservicescancelcreate) | **POST** /api/billing/services/{id}/cancel/ | 
*BillingApi* | [**billingServicesCancelCreate2**](docs/BillingApi.md#billingservicescancelcreate2) | **POST** /api/v1/billing/services/{id}/cancel/ | 
*BillingApi* | [**billingServicesChangeBillingCycleCreate**](docs/BillingApi.md#billingserviceschangebillingcyclecreate) | **POST** /api/billing/services/{id}/change-billing-cycle/ | 
*BillingApi* | [**billingServicesChangeBillingCycleCreate2**](docs/BillingApi.md#billingserviceschangebillingcyclecreate2) | **POST** /api/v1/billing/services/{id}/change-billing-cycle/ | 
*BillingApi* | [**billingServicesChangeCompanyCreate**](docs/BillingApi.md#billingserviceschangecompanycreate) | **POST** /api/billing/services/{id}/change-company/ | 
*BillingApi* | [**billingServicesChangeCompanyCreate2**](docs/BillingApi.md#billingserviceschangecompanycreate2) | **POST** /api/v1/billing/services/{id}/change-company/ | 
*BillingApi* | [**billingServicesList**](docs/BillingApi.md#billingserviceslist) | **GET** /api/billing/services/ | 
*BillingApi* | [**billingServicesList2**](docs/BillingApi.md#billingserviceslist2) | **GET** /api/v1/billing/services/ | 
*BillingApi* | [**billingServicesRetrieve**](docs/BillingApi.md#billingservicesretrieve) | **GET** /api/billing/services/{id}/ | 
*BillingApi* | [**billingServicesRetrieve2**](docs/BillingApi.md#billingservicesretrieve2) | **GET** /api/v1/billing/services/{id}/ | 
*BillingApi* | [**billingServicesToggleAutoPaymentCreate**](docs/BillingApi.md#billingservicestoggleautopaymentcreate) | **POST** /api/billing/services/{id}/toggle-auto-payment/ | 
*BillingApi* | [**billingServicesToggleAutoPaymentCreate2**](docs/BillingApi.md#billingservicestoggleautopaymentcreate2) | **POST** /api/v1/billing/services/{id}/toggle-auto-payment/ | 
*BillingApi* | [**billingSubscriptionsList**](docs/BillingApi.md#billingsubscriptionslist) | **GET** /api/billing/subscriptions/ | 
*BillingApi* | [**billingSubscriptionsList2**](docs/BillingApi.md#billingsubscriptionslist2) | **GET** /api/v1/billing/subscriptions/ | 
*BillingApi* | [**billingSubscriptionsRetrieve**](docs/BillingApi.md#billingsubscriptionsretrieve) | **GET** /api/billing/subscriptions/{id}/ | 
*BillingApi* | [**billingSubscriptionsRetrieve2**](docs/BillingApi.md#billingsubscriptionsretrieve2) | **GET** /api/v1/billing/subscriptions/{id}/ | 
*CloudApi* | [**cloudFirewallRulesSetCreate**](docs/CloudApi.md#cloudfirewallrulessetcreate) | **POST** /api/cloud/firewall-rules-set/ | 
*CloudApi* | [**cloudFirewallRulesSetCreate2**](docs/CloudApi.md#cloudfirewallrulessetcreate2) | **POST** /api/v1/cloud/firewall-rules-set/ | 
*CloudApi* | [**cloudFirewallRulesSetDestroy**](docs/CloudApi.md#cloudfirewallrulessetdestroy) | **DELETE** /api/cloud/firewall-rules-set/{id}/ | 
*CloudApi* | [**cloudFirewallRulesSetDestroy2**](docs/CloudApi.md#cloudfirewallrulessetdestroy2) | **DELETE** /api/v1/cloud/firewall-rules-set/{id}/ | 
*CloudApi* | [**cloudFirewallRulesSetList**](docs/CloudApi.md#cloudfirewallrulessetlist) | **GET** /api/cloud/firewall-rules-set/ | 
*CloudApi* | [**cloudFirewallRulesSetList2**](docs/CloudApi.md#cloudfirewallrulessetlist2) | **GET** /api/v1/cloud/firewall-rules-set/ | 
*CloudApi* | [**cloudFirewallRulesSetPartialUpdate**](docs/CloudApi.md#cloudfirewallrulessetpartialupdate) | **PATCH** /api/cloud/firewall-rules-set/{id}/ | 
*CloudApi* | [**cloudFirewallRulesSetPartialUpdate2**](docs/CloudApi.md#cloudfirewallrulessetpartialupdate2) | **PATCH** /api/v1/cloud/firewall-rules-set/{id}/ | 
*CloudApi* | [**cloudFirewallRulesSetRetrieve**](docs/CloudApi.md#cloudfirewallrulessetretrieve) | **GET** /api/cloud/firewall-rules-set/{id}/ | 
*CloudApi* | [**cloudFirewallRulesSetRetrieve2**](docs/CloudApi.md#cloudfirewallrulessetretrieve2) | **GET** /api/v1/cloud/firewall-rules-set/{id}/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesCreate**](docs/CloudApi.md#cloudfirewallrulessetrulescreate) | **POST** /api/cloud/firewall-rules-set/{rules_set_id}/rules/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesCreate2**](docs/CloudApi.md#cloudfirewallrulessetrulescreate2) | **POST** /api/v1/cloud/firewall-rules-set/{rules_set_id}/rules/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesDestroy**](docs/CloudApi.md#cloudfirewallrulessetrulesdestroy) | **DELETE** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesDestroy2**](docs/CloudApi.md#cloudfirewallrulessetrulesdestroy2) | **DELETE** /api/v1/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesList**](docs/CloudApi.md#cloudfirewallrulessetruleslist) | **GET** /api/cloud/firewall-rules-set/{rules_set_id}/rules/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesList2**](docs/CloudApi.md#cloudfirewallrulessetruleslist2) | **GET** /api/v1/cloud/firewall-rules-set/{rules_set_id}/rules/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesPartialUpdate**](docs/CloudApi.md#cloudfirewallrulessetrulespartialupdate) | **PATCH** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesPartialUpdate2**](docs/CloudApi.md#cloudfirewallrulessetrulespartialupdate2) | **PATCH** /api/v1/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesRetrieve**](docs/CloudApi.md#cloudfirewallrulessetrulesretrieve) | **GET** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesRetrieve2**](docs/CloudApi.md#cloudfirewallrulessetrulesretrieve2) | **GET** /api/v1/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesUpdate**](docs/CloudApi.md#cloudfirewallrulessetrulesupdate) | **PUT** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | 
*CloudApi* | [**cloudFirewallRulesSetRulesUpdate2**](docs/CloudApi.md#cloudfirewallrulessetrulesupdate2) | **PUT** /api/v1/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | 
*CloudApi* | [**cloudFirewallRulesSetUpdate**](docs/CloudApi.md#cloudfirewallrulessetupdate) | **PUT** /api/cloud/firewall-rules-set/{id}/ | 
*CloudApi* | [**cloudFirewallRulesSetUpdate2**](docs/CloudApi.md#cloudfirewallrulessetupdate2) | **PUT** /api/v1/cloud/firewall-rules-set/{id}/ | 
*CloudApi* | [**cloudImagesList**](docs/CloudApi.md#cloudimageslist) | **GET** /api/cloud/images/ | 
*CloudApi* | [**cloudImagesList2**](docs/CloudApi.md#cloudimageslist2) | **GET** /api/v1/cloud/images/ | 
*CloudApi* | [**cloudImagesRetrieve**](docs/CloudApi.md#cloudimagesretrieve) | **GET** /api/cloud/images/{id}/ | 
*CloudApi* | [**cloudImagesRetrieve2**](docs/CloudApi.md#cloudimagesretrieve2) | **GET** /api/v1/cloud/images/{id}/ | 
*CloudApi* | [**cloudIpv4Create**](docs/CloudApi.md#cloudipv4create) | **POST** /api/cloud/ipv4/ | 
*CloudApi* | [**cloudIpv4Create2**](docs/CloudApi.md#cloudipv4create2) | **POST** /api/v1/cloud/ipv4/ | 
*CloudApi* | [**cloudIpv4Destroy**](docs/CloudApi.md#cloudipv4destroy) | **DELETE** /api/cloud/ipv4/{id}/ | 
*CloudApi* | [**cloudIpv4Destroy2**](docs/CloudApi.md#cloudipv4destroy2) | **DELETE** /api/v1/cloud/ipv4/{id}/ | 
*CloudApi* | [**cloudIpv4DetachCreate**](docs/CloudApi.md#cloudipv4detachcreate) | **POST** /api/cloud/ipv4/{id}/detach/ | 
*CloudApi* | [**cloudIpv4DetachCreate2**](docs/CloudApi.md#cloudipv4detachcreate2) | **POST** /api/v1/cloud/ipv4/{id}/detach/ | 
*CloudApi* | [**cloudIpv4List**](docs/CloudApi.md#cloudipv4list) | **GET** /api/cloud/ipv4/ | 
*CloudApi* | [**cloudIpv4List2**](docs/CloudApi.md#cloudipv4list2) | **GET** /api/v1/cloud/ipv4/ | 
*CloudApi* | [**cloudIpv4RdnsCreate**](docs/CloudApi.md#cloudipv4rdnscreate) | **POST** /api/cloud/ipv4/{id}/rdns/ | 
*CloudApi* | [**cloudIpv4RdnsCreate2**](docs/CloudApi.md#cloudipv4rdnscreate2) | **POST** /api/v1/cloud/ipv4/{id}/rdns/ | 
*CloudApi* | [**cloudIpv4RdnsRetrieve**](docs/CloudApi.md#cloudipv4rdnsretrieve) | **GET** /api/cloud/ipv4/{id}/rdns/ | 
*CloudApi* | [**cloudIpv4RdnsRetrieve2**](docs/CloudApi.md#cloudipv4rdnsretrieve2) | **GET** /api/v1/cloud/ipv4/{id}/rdns/ | 
*CloudApi* | [**cloudIpv4Retrieve**](docs/CloudApi.md#cloudipv4retrieve) | **GET** /api/cloud/ipv4/{id}/ | 
*CloudApi* | [**cloudIpv4Retrieve2**](docs/CloudApi.md#cloudipv4retrieve2) | **GET** /api/v1/cloud/ipv4/{id}/ | 
*CloudApi* | [**cloudIpv6Create**](docs/CloudApi.md#cloudipv6create) | **POST** /api/cloud/ipv6/ | 
*CloudApi* | [**cloudIpv6Create2**](docs/CloudApi.md#cloudipv6create2) | **POST** /api/v1/cloud/ipv6/ | 
*CloudApi* | [**cloudIpv6Destroy**](docs/CloudApi.md#cloudipv6destroy) | **DELETE** /api/cloud/ipv6/{id}/ | 
*CloudApi* | [**cloudIpv6Destroy2**](docs/CloudApi.md#cloudipv6destroy2) | **DELETE** /api/v1/cloud/ipv6/{id}/ | 
*CloudApi* | [**cloudIpv6DetachCreate**](docs/CloudApi.md#cloudipv6detachcreate) | **POST** /api/cloud/ipv6/{id}/detach/ | 
*CloudApi* | [**cloudIpv6DetachCreate2**](docs/CloudApi.md#cloudipv6detachcreate2) | **POST** /api/v1/cloud/ipv6/{id}/detach/ | 
*CloudApi* | [**cloudIpv6List**](docs/CloudApi.md#cloudipv6list) | **GET** /api/cloud/ipv6/ | 
*CloudApi* | [**cloudIpv6List2**](docs/CloudApi.md#cloudipv6list2) | **GET** /api/v1/cloud/ipv6/ | 
*CloudApi* | [**cloudIpv6RdnsCreate**](docs/CloudApi.md#cloudipv6rdnscreate) | **POST** /api/cloud/ipv6/{id}/rdns/ | 
*CloudApi* | [**cloudIpv6RdnsCreate2**](docs/CloudApi.md#cloudipv6rdnscreate2) | **POST** /api/v1/cloud/ipv6/{id}/rdns/ | 
*CloudApi* | [**cloudIpv6RdnsRetrieve**](docs/CloudApi.md#cloudipv6rdnsretrieve) | **GET** /api/cloud/ipv6/{id}/rdns/ | 
*CloudApi* | [**cloudIpv6RdnsRetrieve2**](docs/CloudApi.md#cloudipv6rdnsretrieve2) | **GET** /api/v1/cloud/ipv6/{id}/rdns/ | 
*CloudApi* | [**cloudIpv6Retrieve**](docs/CloudApi.md#cloudipv6retrieve) | **GET** /api/cloud/ipv6/{id}/ | 
*CloudApi* | [**cloudIpv6Retrieve2**](docs/CloudApi.md#cloudipv6retrieve2) | **GET** /api/v1/cloud/ipv6/{id}/ | 
*CloudApi* | [**cloudPrivateNetworksAddServerCreate**](docs/CloudApi.md#cloudprivatenetworksaddservercreate) | **POST** /api/cloud/private-networks/{id}/add-server/ | 
*CloudApi* | [**cloudPrivateNetworksAddServerCreate2**](docs/CloudApi.md#cloudprivatenetworksaddservercreate2) | **POST** /api/v1/cloud/private-networks/{id}/add-server/ | 
*CloudApi* | [**cloudPrivateNetworksCreate**](docs/CloudApi.md#cloudprivatenetworkscreate) | **POST** /api/cloud/private-networks/ | 
*CloudApi* | [**cloudPrivateNetworksCreate2**](docs/CloudApi.md#cloudprivatenetworkscreate2) | **POST** /api/v1/cloud/private-networks/ | 
*CloudApi* | [**cloudPrivateNetworksDestroy**](docs/CloudApi.md#cloudprivatenetworksdestroy) | **DELETE** /api/cloud/private-networks/{id}/ | 
*CloudApi* | [**cloudPrivateNetworksDestroy2**](docs/CloudApi.md#cloudprivatenetworksdestroy2) | **DELETE** /api/v1/cloud/private-networks/{id}/ | 
*CloudApi* | [**cloudPrivateNetworksList**](docs/CloudApi.md#cloudprivatenetworkslist) | **GET** /api/cloud/private-networks/ | 
*CloudApi* | [**cloudPrivateNetworksList2**](docs/CloudApi.md#cloudprivatenetworkslist2) | **GET** /api/v1/cloud/private-networks/ | 
*CloudApi* | [**cloudPrivateNetworksPartialUpdate**](docs/CloudApi.md#cloudprivatenetworkspartialupdate) | **PATCH** /api/cloud/private-networks/{id}/ | 
*CloudApi* | [**cloudPrivateNetworksPartialUpdate2**](docs/CloudApi.md#cloudprivatenetworkspartialupdate2) | **PATCH** /api/v1/cloud/private-networks/{id}/ | 
*CloudApi* | [**cloudPrivateNetworksRemoveServerCreate**](docs/CloudApi.md#cloudprivatenetworksremoveservercreate) | **POST** /api/cloud/private-networks/{id}/remove-server/ | 
*CloudApi* | [**cloudPrivateNetworksRemoveServerCreate2**](docs/CloudApi.md#cloudprivatenetworksremoveservercreate2) | **POST** /api/v1/cloud/private-networks/{id}/remove-server/ | 
*CloudApi* | [**cloudPrivateNetworksRetrieve**](docs/CloudApi.md#cloudprivatenetworksretrieve) | **GET** /api/cloud/private-networks/{id}/ | 
*CloudApi* | [**cloudPrivateNetworksRetrieve2**](docs/CloudApi.md#cloudprivatenetworksretrieve2) | **GET** /api/v1/cloud/private-networks/{id}/ | 
*CloudApi* | [**cloudPrivateNetworksUpdate**](docs/CloudApi.md#cloudprivatenetworksupdate) | **PUT** /api/cloud/private-networks/{id}/ | 
*CloudApi* | [**cloudPrivateNetworksUpdate2**](docs/CloudApi.md#cloudprivatenetworksupdate2) | **PUT** /api/v1/cloud/private-networks/{id}/ | 
*CloudApi* | [**cloudServerPackagesList**](docs/CloudApi.md#cloudserverpackageslist) | **GET** /api/cloud/server-packages/ | 
*CloudApi* | [**cloudServerPackagesList2**](docs/CloudApi.md#cloudserverpackageslist2) | **GET** /api/v1/cloud/server-packages/ | 
*CloudApi* | [**cloudServerPackagesRetrieve**](docs/CloudApi.md#cloudserverpackagesretrieve) | **GET** /api/cloud/server-packages/{id}/ | 
*CloudApi* | [**cloudServerPackagesRetrieve2**](docs/CloudApi.md#cloudserverpackagesretrieve2) | **GET** /api/v1/cloud/server-packages/{id}/ | 
*CloudApi* | [**cloudServersActivityRetrieve**](docs/CloudApi.md#cloudserversactivityretrieve) | **GET** /api/cloud/servers/{id}/activity/ | 
*CloudApi* | [**cloudServersActivityRetrieve2**](docs/CloudApi.md#cloudserversactivityretrieve2) | **GET** /api/v1/cloud/servers/{id}/activity/ | 
*CloudApi* | [**cloudServersAttachIpv4Create**](docs/CloudApi.md#cloudserversattachipv4create) | **POST** /api/cloud/servers/{id}/attach-ipv4/ | 
*CloudApi* | [**cloudServersAttachIpv4Create2**](docs/CloudApi.md#cloudserversattachipv4create2) | **POST** /api/v1/cloud/servers/{id}/attach-ipv4/ | 
*CloudApi* | [**cloudServersAttachIpv6Create**](docs/CloudApi.md#cloudserversattachipv6create) | **POST** /api/cloud/servers/{id}/attach-ipv6/ | 
*CloudApi* | [**cloudServersAttachIpv6Create2**](docs/CloudApi.md#cloudserversattachipv6create2) | **POST** /api/v1/cloud/servers/{id}/attach-ipv6/ | 
*CloudApi* | [**cloudServersConsoleCreate**](docs/CloudApi.md#cloudserversconsolecreate) | **POST** /api/cloud/servers/{id}/console/ | 
*CloudApi* | [**cloudServersConsoleCreate2**](docs/CloudApi.md#cloudserversconsolecreate2) | **POST** /api/v1/cloud/servers/{id}/console/ | 
*CloudApi* | [**cloudServersCreate**](docs/CloudApi.md#cloudserverscreate) | **POST** /api/cloud/servers/ | 
*CloudApi* | [**cloudServersCreate2**](docs/CloudApi.md#cloudserverscreate2) | **POST** /api/v1/cloud/servers/ | 
*CloudApi* | [**cloudServersDestroy**](docs/CloudApi.md#cloudserversdestroy) | **DELETE** /api/cloud/servers/{id}/ | 
*CloudApi* | [**cloudServersDestroy2**](docs/CloudApi.md#cloudserversdestroy2) | **DELETE** /api/v1/cloud/servers/{id}/ | 
*CloudApi* | [**cloudServersDestroyProtectionCreate**](docs/CloudApi.md#cloudserversdestroyprotectioncreate) | **POST** /api/cloud/servers/{id}/destroy-protection/ | 
*CloudApi* | [**cloudServersDestroyProtectionCreate2**](docs/CloudApi.md#cloudserversdestroyprotectioncreate2) | **POST** /api/v1/cloud/servers/{id}/destroy-protection/ | 
*CloudApi* | [**cloudServersDetachIpv4Create**](docs/CloudApi.md#cloudserversdetachipv4create) | **POST** /api/cloud/servers/{id}/detach-ipv4/ | 
*CloudApi* | [**cloudServersDetachIpv4Create2**](docs/CloudApi.md#cloudserversdetachipv4create2) | **POST** /api/v1/cloud/servers/{id}/detach-ipv4/ | 
*CloudApi* | [**cloudServersDetachIpv6Create**](docs/CloudApi.md#cloudserversdetachipv6create) | **POST** /api/cloud/servers/{id}/detach-ipv6/ | 
*CloudApi* | [**cloudServersDetachIpv6Create2**](docs/CloudApi.md#cloudserversdetachipv6create2) | **POST** /api/v1/cloud/servers/{id}/detach-ipv6/ | 
*CloudApi* | [**cloudServersList**](docs/CloudApi.md#cloudserverslist) | **GET** /api/cloud/servers/ | 
*CloudApi* | [**cloudServersList2**](docs/CloudApi.md#cloudserverslist2) | **GET** /api/v1/cloud/servers/ | 
*CloudApi* | [**cloudServersModifyPackageCreate**](docs/CloudApi.md#cloudserversmodifypackagecreate) | **POST** /api/cloud/servers/{id}/modify-package/ | 
*CloudApi* | [**cloudServersModifyPackageCreate2**](docs/CloudApi.md#cloudserversmodifypackagecreate2) | **POST** /api/v1/cloud/servers/{id}/modify-package/ | 
*CloudApi* | [**cloudServersPartialUpdate**](docs/CloudApi.md#cloudserverspartialupdate) | **PATCH** /api/cloud/servers/{id}/ | 
*CloudApi* | [**cloudServersPartialUpdate2**](docs/CloudApi.md#cloudserverspartialupdate2) | **PATCH** /api/v1/cloud/servers/{id}/ | 
*CloudApi* | [**cloudServersPowerManagementCreate**](docs/CloudApi.md#cloudserverspowermanagementcreate) | **POST** /api/cloud/servers/{id}/power-management/ | 
*CloudApi* | [**cloudServersPowerManagementCreate2**](docs/CloudApi.md#cloudserverspowermanagementcreate2) | **POST** /api/v1/cloud/servers/{id}/power-management/ | 
*CloudApi* | [**cloudServersPowerManagementRetrieve**](docs/CloudApi.md#cloudserverspowermanagementretrieve) | **GET** /api/cloud/servers/{id}/power-management/ | 
*CloudApi* | [**cloudServersPowerManagementRetrieve2**](docs/CloudApi.md#cloudserverspowermanagementretrieve2) | **GET** /api/v1/cloud/servers/{id}/power-management/ | 
*CloudApi* | [**cloudServersPublicInterfaceCreate**](docs/CloudApi.md#cloudserverspublicinterfacecreate) | **POST** /api/cloud/servers/{id}/public-interface/ | 
*CloudApi* | [**cloudServersPublicInterfaceCreate2**](docs/CloudApi.md#cloudserverspublicinterfacecreate2) | **POST** /api/v1/cloud/servers/{id}/public-interface/ | 
*CloudApi* | [**cloudServersPublicInterfaceDestroy**](docs/CloudApi.md#cloudserverspublicinterfacedestroy) | **DELETE** /api/cloud/servers/{id}/public-interface/ | 
*CloudApi* | [**cloudServersPublicInterfaceDestroy2**](docs/CloudApi.md#cloudserverspublicinterfacedestroy2) | **DELETE** /api/v1/cloud/servers/{id}/public-interface/ | 
*CloudApi* | [**cloudServersPublicInterfaceRetrieve**](docs/CloudApi.md#cloudserverspublicinterfaceretrieve) | **GET** /api/cloud/servers/{id}/public-interface/ | 
*CloudApi* | [**cloudServersPublicInterfaceRetrieve2**](docs/CloudApi.md#cloudserverspublicinterfaceretrieve2) | **GET** /api/v1/cloud/servers/{id}/public-interface/ | 
*CloudApi* | [**cloudServersRetrieve**](docs/CloudApi.md#cloudserversretrieve) | **GET** /api/cloud/servers/{id}/ | 
*CloudApi* | [**cloudServersRetrieve2**](docs/CloudApi.md#cloudserversretrieve2) | **GET** /api/v1/cloud/servers/{id}/ | 
*CloudApi* | [**cloudServersRetryProvisionCreate**](docs/CloudApi.md#cloudserversretryprovisioncreate) | **POST** /api/cloud/servers/{id}/retry-provision/ | 
*CloudApi* | [**cloudServersRetryProvisionCreate2**](docs/CloudApi.md#cloudserversretryprovisioncreate2) | **POST** /api/v1/cloud/servers/{id}/retry-provision/ | 
*CloudApi* | [**cloudServersSnapshotsCreate**](docs/CloudApi.md#cloudserverssnapshotscreate) | **POST** /api/cloud/servers/{id}/snapshots/ | 
*CloudApi* | [**cloudServersSnapshotsCreate2**](docs/CloudApi.md#cloudserverssnapshotscreate2) | **POST** /api/v1/cloud/servers/{id}/snapshots/ | 
*CloudApi* | [**cloudServersSnapshotsDestroy**](docs/CloudApi.md#cloudserverssnapshotsdestroy) | **DELETE** /api/cloud/servers/{id}/snapshots/{snapshot_name}/ | 
*CloudApi* | [**cloudServersSnapshotsDestroy2**](docs/CloudApi.md#cloudserverssnapshotsdestroy2) | **DELETE** /api/v1/cloud/servers/{id}/snapshots/{snapshot_name}/ | 
*CloudApi* | [**cloudServersSnapshotsList**](docs/CloudApi.md#cloudserverssnapshotslist) | **GET** /api/cloud/servers/{id}/snapshots/ | 
*CloudApi* | [**cloudServersSnapshotsList2**](docs/CloudApi.md#cloudserverssnapshotslist2) | **GET** /api/v1/cloud/servers/{id}/snapshots/ | 
*CloudApi* | [**cloudServersSnapshotsRollbackCreate**](docs/CloudApi.md#cloudserverssnapshotsrollbackcreate) | **POST** /api/cloud/servers/{id}/snapshots/{snapshot_name}/rollback/ | 
*CloudApi* | [**cloudServersSnapshotsRollbackCreate2**](docs/CloudApi.md#cloudserverssnapshotsrollbackcreate2) | **POST** /api/v1/cloud/servers/{id}/snapshots/{snapshot_name}/rollback/ | 
*CloudApi* | [**cloudServersUpdate**](docs/CloudApi.md#cloudserversupdate) | **PUT** /api/cloud/servers/{id}/ | 
*CloudApi* | [**cloudServersUpdate2**](docs/CloudApi.md#cloudserversupdate2) | **PUT** /api/v1/cloud/servers/{id}/ | 
*CloudApi* | [**cloudServersUsageRetrieve**](docs/CloudApi.md#cloudserversusageretrieve) | **GET** /api/cloud/servers/{id}/usage/ | 
*CloudApi* | [**cloudServersUsageRetrieve2**](docs/CloudApi.md#cloudserversusageretrieve2) | **GET** /api/v1/cloud/servers/{id}/usage/ | 
*CloudApi* | [**cloudServersVolumesCreate**](docs/CloudApi.md#cloudserversvolumescreate) | **POST** /api/cloud/servers/{server_id}/volumes/ | 
*CloudApi* | [**cloudServersVolumesCreate2**](docs/CloudApi.md#cloudserversvolumescreate2) | **POST** /api/v1/cloud/servers/{server_id}/volumes/ | 
*CloudApi* | [**cloudServersVolumesDestroy**](docs/CloudApi.md#cloudserversvolumesdestroy) | **DELETE** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | 
*CloudApi* | [**cloudServersVolumesDestroy2**](docs/CloudApi.md#cloudserversvolumesdestroy2) | **DELETE** /api/v1/cloud/servers/{server_id}/volumes/{volume_id}/ | 
*CloudApi* | [**cloudServersVolumesList**](docs/CloudApi.md#cloudserversvolumeslist) | **GET** /api/cloud/servers/{server_id}/volumes/ | 
*CloudApi* | [**cloudServersVolumesList2**](docs/CloudApi.md#cloudserversvolumeslist2) | **GET** /api/v1/cloud/servers/{server_id}/volumes/ | 
*CloudApi* | [**cloudServersVolumesPartialUpdate**](docs/CloudApi.md#cloudserversvolumespartialupdate) | **PATCH** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | 
*CloudApi* | [**cloudServersVolumesPartialUpdate2**](docs/CloudApi.md#cloudserversvolumespartialupdate2) | **PATCH** /api/v1/cloud/servers/{server_id}/volumes/{volume_id}/ | 
*CloudApi* | [**cloudServersVolumesRetrieve**](docs/CloudApi.md#cloudserversvolumesretrieve) | **GET** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | 
*CloudApi* | [**cloudServersVolumesRetrieve2**](docs/CloudApi.md#cloudserversvolumesretrieve2) | **GET** /api/v1/cloud/servers/{server_id}/volumes/{volume_id}/ | 
*CloudApi* | [**cloudServersVolumesUpdate**](docs/CloudApi.md#cloudserversvolumesupdate) | **PUT** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | 
*CloudApi* | [**cloudServersVolumesUpdate2**](docs/CloudApi.md#cloudserversvolumesupdate2) | **PUT** /api/v1/cloud/servers/{server_id}/volumes/{volume_id}/ | 
*CloudApi* | [**cloudStorageProductsList**](docs/CloudApi.md#cloudstorageproductslist) | **GET** /api/cloud/storage-products/ | 
*CloudApi* | [**cloudStorageProductsList2**](docs/CloudApi.md#cloudstorageproductslist2) | **GET** /api/v1/cloud/storage-products/ | 
*CloudApi* | [**cloudStorageProductsRetrieve**](docs/CloudApi.md#cloudstorageproductsretrieve) | **GET** /api/cloud/storage-products/{id}/ | 
*CloudApi* | [**cloudStorageProductsRetrieve2**](docs/CloudApi.md#cloudstorageproductsretrieve2) | **GET** /api/v1/cloud/storage-products/{id}/ | 
*CloudApi* | [**cloudVolumesAttachCreate**](docs/CloudApi.md#cloudvolumesattachcreate) | **POST** /api/cloud/volumes/{id}/attach/ | 
*CloudApi* | [**cloudVolumesAttachCreate2**](docs/CloudApi.md#cloudvolumesattachcreate2) | **POST** /api/v1/cloud/volumes/{id}/attach/ | 
*CloudApi* | [**cloudVolumesDestroy**](docs/CloudApi.md#cloudvolumesdestroy) | **DELETE** /api/cloud/volumes/{id}/ | 
*CloudApi* | [**cloudVolumesDestroy2**](docs/CloudApi.md#cloudvolumesdestroy2) | **DELETE** /api/v1/cloud/volumes/{id}/ | 
*CloudApi* | [**cloudVolumesDetachCreate**](docs/CloudApi.md#cloudvolumesdetachcreate) | **POST** /api/cloud/volumes/{id}/detach/ | 
*CloudApi* | [**cloudVolumesDetachCreate2**](docs/CloudApi.md#cloudvolumesdetachcreate2) | **POST** /api/v1/cloud/volumes/{id}/detach/ | 
*CloudApi* | [**cloudVolumesList**](docs/CloudApi.md#cloudvolumeslist) | **GET** /api/cloud/volumes/ | 
*CloudApi* | [**cloudVolumesList2**](docs/CloudApi.md#cloudvolumeslist2) | **GET** /api/v1/cloud/volumes/ | 
*CloudApi* | [**cloudVolumesPartialUpdate**](docs/CloudApi.md#cloudvolumespartialupdate) | **PATCH** /api/cloud/volumes/{id}/ | 
*CloudApi* | [**cloudVolumesPartialUpdate2**](docs/CloudApi.md#cloudvolumespartialupdate2) | **PATCH** /api/v1/cloud/volumes/{id}/ | 
*CloudApi* | [**cloudVolumesRetrieve**](docs/CloudApi.md#cloudvolumesretrieve) | **GET** /api/cloud/volumes/{id}/ | 
*CloudApi* | [**cloudVolumesRetrieve2**](docs/CloudApi.md#cloudvolumesretrieve2) | **GET** /api/v1/cloud/volumes/{id}/ | 
*CloudApi* | [**cloudVolumesUpdate**](docs/CloudApi.md#cloudvolumesupdate) | **PUT** /api/cloud/volumes/{id}/ | 
*CloudApi* | [**cloudVolumesUpdate2**](docs/CloudApi.md#cloudvolumesupdate2) | **PUT** /api/v1/cloud/volumes/{id}/ | 
*DedicatedApi* | [**dedicatedServersList**](docs/DedicatedApi.md#dedicatedserverslist) | **GET** /api/dedicated/servers/ | 
*DedicatedApi* | [**dedicatedServersList2**](docs/DedicatedApi.md#dedicatedserverslist2) | **GET** /api/v1/dedicated/servers/ | 
*DedicatedApi* | [**dedicatedServersPowerCreate**](docs/DedicatedApi.md#dedicatedserverspowercreate) | **POST** /api/dedicated/servers/{id}/power/ | 
*DedicatedApi* | [**dedicatedServersPowerCreate2**](docs/DedicatedApi.md#dedicatedserverspowercreate2) | **POST** /api/v1/dedicated/servers/{id}/power/ | 
*DedicatedApi* | [**dedicatedServersRdnsCreate**](docs/DedicatedApi.md#dedicatedserversrdnscreate) | **POST** /api/dedicated/servers/{id}/rdns/ | 
*DedicatedApi* | [**dedicatedServersRdnsCreate2**](docs/DedicatedApi.md#dedicatedserversrdnscreate2) | **POST** /api/v1/dedicated/servers/{id}/rdns/ | 
*DedicatedApi* | [**dedicatedServersReinstallCreate**](docs/DedicatedApi.md#dedicatedserversreinstallcreate) | **POST** /api/dedicated/servers/{id}/reinstall/ | 
*DedicatedApi* | [**dedicatedServersReinstallCreate2**](docs/DedicatedApi.md#dedicatedserversreinstallcreate2) | **POST** /api/v1/dedicated/servers/{id}/reinstall/ | 
*DedicatedApi* | [**dedicatedServersRetrieve**](docs/DedicatedApi.md#dedicatedserversretrieve) | **GET** /api/dedicated/servers/{id}/ | 
*DedicatedApi* | [**dedicatedServersRetrieve2**](docs/DedicatedApi.md#dedicatedserversretrieve2) | **GET** /api/v1/dedicated/servers/{id}/ | 
*DomainApi* | [**domainDomainCancelCreate**](docs/DomainApi.md#domaindomaincancelcreate) | **POST** /api/domain/domain/{domain}/cancel/ | 
*DomainApi* | [**domainDomainCancelCreate2**](docs/DomainApi.md#domaindomaincancelcreate2) | **POST** /api/v1/domain/domain/{domain}/cancel/ | 
*DomainApi* | [**domainDomainCheckAvailabilityCreate**](docs/DomainApi.md#domaindomaincheckavailabilitycreate) | **POST** /api/domain/domain/check-availability/ | 
*DomainApi* | [**domainDomainCheckAvailabilityCreate2**](docs/DomainApi.md#domaindomaincheckavailabilitycreate2) | **POST** /api/v1/domain/domain/check-availability/ | 
*DomainApi* | [**domainDomainContactsCreate**](docs/DomainApi.md#domaindomaincontactscreate) | **POST** /api/domain/domain/{domain}/contacts/ | 
*DomainApi* | [**domainDomainContactsCreate2**](docs/DomainApi.md#domaindomaincontactscreate2) | **POST** /api/v1/domain/domain/{domain}/contacts/ | 
*DomainApi* | [**domainDomainCreate**](docs/DomainApi.md#domaindomaincreate) | **POST** /api/domain/domain/ | 
*DomainApi* | [**domainDomainCreate2**](docs/DomainApi.md#domaindomaincreate2) | **POST** /api/v1/domain/domain/ | 
*DomainApi* | [**domainDomainList**](docs/DomainApi.md#domaindomainlist) | **GET** /api/domain/domain/ | 
*DomainApi* | [**domainDomainList2**](docs/DomainApi.md#domaindomainlist2) | **GET** /api/v1/domain/domain/ | 
*DomainApi* | [**domainDomainNameserversCreate**](docs/DomainApi.md#domaindomainnameserverscreate) | **POST** /api/domain/domain/{domain}/nameservers/ | 
*DomainApi* | [**domainDomainNameserversCreate2**](docs/DomainApi.md#domaindomainnameserverscreate2) | **POST** /api/v1/domain/domain/{domain}/nameservers/ | 
*DomainApi* | [**domainDomainPartialUpdate**](docs/DomainApi.md#domaindomainpartialupdate) | **PATCH** /api/domain/domain/{domain}/ | 
*DomainApi* | [**domainDomainPartialUpdate2**](docs/DomainApi.md#domaindomainpartialupdate2) | **PATCH** /api/v1/domain/domain/{domain}/ | 
*DomainApi* | [**domainDomainRenewCreate**](docs/DomainApi.md#domaindomainrenewcreate) | **POST** /api/domain/domain/{domain}/renew/ | 
*DomainApi* | [**domainDomainRenewCreate2**](docs/DomainApi.md#domaindomainrenewcreate2) | **POST** /api/v1/domain/domain/{domain}/renew/ | 
*DomainApi* | [**domainDomainRetrieve**](docs/DomainApi.md#domaindomainretrieve) | **GET** /api/domain/domain/{domain}/ | 
*DomainApi* | [**domainDomainRetrieve2**](docs/DomainApi.md#domaindomainretrieve2) | **GET** /api/v1/domain/domain/{domain}/ | 
*DomainApi* | [**domainDomainTransferRoDomainCreate**](docs/DomainApi.md#domaindomaintransferrodomaincreate) | **POST** /api/domain/domain/transfer-ro-domain/ | 
*DomainApi* | [**domainDomainTransferRoDomainCreate2**](docs/DomainApi.md#domaindomaintransferrodomaincreate2) | **POST** /api/v1/domain/domain/transfer-ro-domain/ | 
*DomainApi* | [**domainDomainUpdate**](docs/DomainApi.md#domaindomainupdate) | **PUT** /api/domain/domain/{domain}/ | 
*DomainApi* | [**domainDomainUpdate2**](docs/DomainApi.md#domaindomainupdate2) | **PUT** /api/v1/domain/domain/{domain}/ | 
*DomainApi* | [**domainRegistrantsCreate**](docs/DomainApi.md#domainregistrantscreate) | **POST** /api/domain/registrants/ | 
*DomainApi* | [**domainRegistrantsCreate2**](docs/DomainApi.md#domainregistrantscreate2) | **POST** /api/v1/domain/registrants/ | 
*DomainApi* | [**domainRegistrantsDestroy**](docs/DomainApi.md#domainregistrantsdestroy) | **DELETE** /api/domain/registrants/{id}/ | 
*DomainApi* | [**domainRegistrantsDestroy2**](docs/DomainApi.md#domainregistrantsdestroy2) | **DELETE** /api/v1/domain/registrants/{id}/ | 
*DomainApi* | [**domainRegistrantsList**](docs/DomainApi.md#domainregistrantslist) | **GET** /api/domain/registrants/ | 
*DomainApi* | [**domainRegistrantsList2**](docs/DomainApi.md#domainregistrantslist2) | **GET** /api/v1/domain/registrants/ | 
*DomainApi* | [**domainRegistrantsPartialUpdate**](docs/DomainApi.md#domainregistrantspartialupdate) | **PATCH** /api/domain/registrants/{id}/ | 
*DomainApi* | [**domainRegistrantsPartialUpdate2**](docs/DomainApi.md#domainregistrantspartialupdate2) | **PATCH** /api/v1/domain/registrants/{id}/ | 
*DomainApi* | [**domainRegistrantsRetrieve**](docs/DomainApi.md#domainregistrantsretrieve) | **GET** /api/domain/registrants/{id}/ | 
*DomainApi* | [**domainRegistrantsRetrieve2**](docs/DomainApi.md#domainregistrantsretrieve2) | **GET** /api/v1/domain/registrants/{id}/ | 
*DomainApi* | [**domainRegistrantsUpdate**](docs/DomainApi.md#domainregistrantsupdate) | **PUT** /api/domain/registrants/{id}/ | 
*DomainApi* | [**domainRegistrantsUpdate2**](docs/DomainApi.md#domainregistrantsupdate2) | **PUT** /api/v1/domain/registrants/{id}/ | 
*DomainApi* | [**domainTldList**](docs/DomainApi.md#domaintldlist) | **GET** /api/domain/tld/ | 
*DomainApi* | [**domainTldList2**](docs/DomainApi.md#domaintldlist2) | **GET** /api/v1/domain/tld/ | 
*DomainApi* | [**domainTldRetrieve**](docs/DomainApi.md#domaintldretrieve) | **GET** /api/domain/tld/{id}/ | 
*DomainApi* | [**domainTldRetrieve2**](docs/DomainApi.md#domaintldretrieve2) | **GET** /api/v1/domain/tld/{id}/ | 
*FreednsApi* | [**freednsDnsActivateCreate**](docs/FreednsApi.md#freednsdnsactivatecreate) | **POST** /api/freedns/dns/activate/ | 
*FreednsApi* | [**freednsDnsActivateCreate2**](docs/FreednsApi.md#freednsdnsactivatecreate2) | **POST** /api/v1/freedns/dns/activate/ | 
*FreednsApi* | [**freednsDnsAddRecordCreate**](docs/FreednsApi.md#freednsdnsaddrecordcreate) | **POST** /api/freedns/dns/add-record/ | 
*FreednsApi* | [**freednsDnsAddRecordCreate2**](docs/FreednsApi.md#freednsdnsaddrecordcreate2) | **POST** /api/v1/freedns/dns/add-record/ | 
*FreednsApi* | [**freednsDnsDeactivateCreate**](docs/FreednsApi.md#freednsdnsdeactivatecreate) | **POST** /api/freedns/dns/deactivate/ | 
*FreednsApi* | [**freednsDnsDeactivateCreate2**](docs/FreednsApi.md#freednsdnsdeactivatecreate2) | **POST** /api/v1/freedns/dns/deactivate/ | 
*FreednsApi* | [**freednsDnsDeleteRecordCreate**](docs/FreednsApi.md#freednsdnsdeleterecordcreate) | **POST** /api/freedns/dns/delete-record/ | 
*FreednsApi* | [**freednsDnsDeleteRecordCreate2**](docs/FreednsApi.md#freednsdnsdeleterecordcreate2) | **POST** /api/v1/freedns/dns/delete-record/ | 
*FreednsApi* | [**freednsDnsList**](docs/FreednsApi.md#freednsdnslist) | **GET** /api/freedns/dns/ | 
*FreednsApi* | [**freednsDnsList2**](docs/FreednsApi.md#freednsdnslist2) | **GET** /api/v1/freedns/dns/ | 
*FreednsApi* | [**freednsDnsRecordsList**](docs/FreednsApi.md#freednsdnsrecordslist) | **GET** /api/freedns/dns/records/ | 
*FreednsApi* | [**freednsDnsRecordsList2**](docs/FreednsApi.md#freednsdnsrecordslist2) | **GET** /api/v1/freedns/dns/records/ | 
*HostingApi* | [**hostingHostingChangePasswordCreate**](docs/HostingApi.md#hostinghostingchangepasswordcreate) | **POST** /api/hosting/hosting/{id}/change-password/ | 
*HostingApi* | [**hostingHostingChangePasswordCreate2**](docs/HostingApi.md#hostinghostingchangepasswordcreate2) | **POST** /api/v1/hosting/hosting/{id}/change-password/ | 
*HostingApi* | [**hostingHostingList**](docs/HostingApi.md#hostinghostinglist) | **GET** /api/hosting/hosting/ | 
*HostingApi* | [**hostingHostingList2**](docs/HostingApi.md#hostinghostinglist2) | **GET** /api/v1/hosting/hosting/ | 
*HostingApi* | [**hostingHostingRetrieve**](docs/HostingApi.md#hostinghostingretrieve) | **GET** /api/hosting/hosting/{id}/ | 
*HostingApi* | [**hostingHostingRetrieve2**](docs/HostingApi.md#hostinghostingretrieve2) | **GET** /api/v1/hosting/hosting/{id}/ | 
*KubernetesApi* | [**kubernetesClusterTypesList**](docs/KubernetesApi.md#kubernetesclustertypeslist) | **GET** /api/kubernetes/cluster-types/ | 
*KubernetesApi* | [**kubernetesClusterTypesList2**](docs/KubernetesApi.md#kubernetesclustertypeslist2) | **GET** /api/v1/kubernetes/cluster-types/ | 
*KubernetesApi* | [**kubernetesClustersConnectVmCreate**](docs/KubernetesApi.md#kubernetesclustersconnectvmcreate) | **POST** /api/kubernetes/clusters/{id}/connect-vm/ | 
*KubernetesApi* | [**kubernetesClustersConnectVmCreate2**](docs/KubernetesApi.md#kubernetesclustersconnectvmcreate2) | **POST** /api/v1/kubernetes/clusters/{id}/connect-vm/ | 
*KubernetesApi* | [**kubernetesClustersConnectedVmsRetrieve**](docs/KubernetesApi.md#kubernetesclustersconnectedvmsretrieve) | **GET** /api/kubernetes/clusters/{id}/connected-vms/ | 
*KubernetesApi* | [**kubernetesClustersConnectedVmsRetrieve2**](docs/KubernetesApi.md#kubernetesclustersconnectedvmsretrieve2) | **GET** /api/v1/kubernetes/clusters/{id}/connected-vms/ | 
*KubernetesApi* | [**kubernetesClustersCreate**](docs/KubernetesApi.md#kubernetesclusterscreate) | **POST** /api/kubernetes/clusters/ | 
*KubernetesApi* | [**kubernetesClustersCreate2**](docs/KubernetesApi.md#kubernetesclusterscreate2) | **POST** /api/v1/kubernetes/clusters/ | 
*KubernetesApi* | [**kubernetesClustersDestroy**](docs/KubernetesApi.md#kubernetesclustersdestroy) | **DELETE** /api/kubernetes/clusters/{id}/ | 
*KubernetesApi* | [**kubernetesClustersDestroy2**](docs/KubernetesApi.md#kubernetesclustersdestroy2) | **DELETE** /api/v1/kubernetes/clusters/{id}/ | 
*KubernetesApi* | [**kubernetesClustersDisconnectVmCreate**](docs/KubernetesApi.md#kubernetesclustersdisconnectvmcreate) | **POST** /api/kubernetes/clusters/{id}/disconnect-vm/ | 
*KubernetesApi* | [**kubernetesClustersDisconnectVmCreate2**](docs/KubernetesApi.md#kubernetesclustersdisconnectvmcreate2) | **POST** /api/v1/kubernetes/clusters/{id}/disconnect-vm/ | 
*KubernetesApi* | [**kubernetesClustersEligibleVmsRetrieve**](docs/KubernetesApi.md#kubernetesclusterseligiblevmsretrieve) | **GET** /api/kubernetes/clusters/{id}/eligible-vms/ | 
*KubernetesApi* | [**kubernetesClustersEligibleVmsRetrieve2**](docs/KubernetesApi.md#kubernetesclusterseligiblevmsretrieve2) | **GET** /api/v1/kubernetes/clusters/{id}/eligible-vms/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesCreate**](docs/KubernetesApi.md#kubernetesclustershttproutescreate) | **POST** /api/kubernetes/clusters/{cluster_id}/httproutes/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesCreate2**](docs/KubernetesApi.md#kubernetesclustershttproutescreate2) | **POST** /api/v1/kubernetes/clusters/{cluster_id}/httproutes/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesDestroy**](docs/KubernetesApi.md#kubernetesclustershttproutesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesDestroy2**](docs/KubernetesApi.md#kubernetesclustershttproutesdestroy2) | **DELETE** /api/v1/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesPartialUpdate**](docs/KubernetesApi.md#kubernetesclustershttproutespartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesPartialUpdate2**](docs/KubernetesApi.md#kubernetesclustershttproutespartialupdate2) | **PATCH** /api/v1/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesRetrieve**](docs/KubernetesApi.md#kubernetesclustershttproutesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/httproutes/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesRetrieve2**](docs/KubernetesApi.md#kubernetesclustershttproutesretrieve2) | **GET** /api/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesRetrieve3**](docs/KubernetesApi.md#kubernetesclustershttproutesretrieve3) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/httproutes/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesRetrieve4**](docs/KubernetesApi.md#kubernetesclustershttproutesretrieve4) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesUpdate**](docs/KubernetesApi.md#kubernetesclustershttproutesupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersHttproutesUpdate2**](docs/KubernetesApi.md#kubernetesclustershttproutesupdate2) | **PUT** /api/v1/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersKubeVersionUpgradeCreate**](docs/KubernetesApi.md#kubernetesclusterskubeversionupgradecreate) | **POST** /api/kubernetes/clusters/{id}/kube-version-upgrade/ | 
*KubernetesApi* | [**kubernetesClustersKubeVersionUpgradeCreate2**](docs/KubernetesApi.md#kubernetesclusterskubeversionupgradecreate2) | **POST** /api/v1/kubernetes/clusters/{id}/kube-version-upgrade/ | 
*KubernetesApi* | [**kubernetesClustersKubeconfigCreate**](docs/KubernetesApi.md#kubernetesclusterskubeconfigcreate) | **POST** /api/kubernetes/clusters/{id}/kubeconfig/ | 
*KubernetesApi* | [**kubernetesClustersKubeconfigCreate2**](docs/KubernetesApi.md#kubernetesclusterskubeconfigcreate2) | **POST** /api/v1/kubernetes/clusters/{id}/kubeconfig/ | 
*KubernetesApi* | [**kubernetesClustersKubeconfigRetrieve**](docs/KubernetesApi.md#kubernetesclusterskubeconfigretrieve) | **GET** /api/kubernetes/clusters/{id}/kubeconfig/ | 
*KubernetesApi* | [**kubernetesClustersKubeconfigRetrieve2**](docs/KubernetesApi.md#kubernetesclusterskubeconfigretrieve2) | **GET** /api/v1/kubernetes/clusters/{id}/kubeconfig/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallCreate**](docs/KubernetesApi.md#kubernetesclusterslbfirewallcreate) | **POST** /api/kubernetes/clusters/{cluster_id}/lb-firewall/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallCreate2**](docs/KubernetesApi.md#kubernetesclusterslbfirewallcreate2) | **POST** /api/v1/kubernetes/clusters/{cluster_id}/lb-firewall/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallDestroy**](docs/KubernetesApi.md#kubernetesclusterslbfirewalldestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallDestroy2**](docs/KubernetesApi.md#kubernetesclusterslbfirewalldestroy2) | **DELETE** /api/v1/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallList**](docs/KubernetesApi.md#kubernetesclusterslbfirewalllist) | **GET** /api/kubernetes/clusters/{cluster_id}/lb-firewall/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallList2**](docs/KubernetesApi.md#kubernetesclusterslbfirewalllist2) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/lb-firewall/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallPartialUpdate**](docs/KubernetesApi.md#kubernetesclusterslbfirewallpartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallPartialUpdate2**](docs/KubernetesApi.md#kubernetesclusterslbfirewallpartialupdate2) | **PATCH** /api/v1/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallRetrieve**](docs/KubernetesApi.md#kubernetesclusterslbfirewallretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallRetrieve2**](docs/KubernetesApi.md#kubernetesclusterslbfirewallretrieve2) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallUpdate**](docs/KubernetesApi.md#kubernetesclusterslbfirewallupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | 
*KubernetesApi* | [**kubernetesClustersLbFirewallUpdate2**](docs/KubernetesApi.md#kubernetesclusterslbfirewallupdate2) | **PUT** /api/v1/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | 
*KubernetesApi* | [**kubernetesClustersList**](docs/KubernetesApi.md#kubernetesclusterslist) | **GET** /api/kubernetes/clusters/ | 
*KubernetesApi* | [**kubernetesClustersList2**](docs/KubernetesApi.md#kubernetesclusterslist2) | **GET** /api/v1/kubernetes/clusters/ | 
*KubernetesApi* | [**kubernetesClustersPartialUpdate**](docs/KubernetesApi.md#kubernetesclusterspartialupdate) | **PATCH** /api/kubernetes/clusters/{id}/ | 
*KubernetesApi* | [**kubernetesClustersPartialUpdate2**](docs/KubernetesApi.md#kubernetesclusterspartialupdate2) | **PATCH** /api/v1/kubernetes/clusters/{id}/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsCreate**](docs/KubernetesApi.md#kubernetesclustersportforwardscreate) | **POST** /api/kubernetes/clusters/{cluster_id}/port-forwards/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsCreate2**](docs/KubernetesApi.md#kubernetesclustersportforwardscreate2) | **POST** /api/v1/kubernetes/clusters/{cluster_id}/port-forwards/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsDestroy**](docs/KubernetesApi.md#kubernetesclustersportforwardsdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsDestroy2**](docs/KubernetesApi.md#kubernetesclustersportforwardsdestroy2) | **DELETE** /api/v1/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsPartialUpdate**](docs/KubernetesApi.md#kubernetesclustersportforwardspartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsPartialUpdate2**](docs/KubernetesApi.md#kubernetesclustersportforwardspartialupdate2) | **PATCH** /api/v1/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsRetrieve**](docs/KubernetesApi.md#kubernetesclustersportforwardsretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/port-forwards/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsRetrieve2**](docs/KubernetesApi.md#kubernetesclustersportforwardsretrieve2) | **GET** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsRetrieve3**](docs/KubernetesApi.md#kubernetesclustersportforwardsretrieve3) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/port-forwards/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsRetrieve4**](docs/KubernetesApi.md#kubernetesclustersportforwardsretrieve4) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsUpdate**](docs/KubernetesApi.md#kubernetesclustersportforwardsupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | 
*KubernetesApi* | [**kubernetesClustersPortForwardsUpdate2**](docs/KubernetesApi.md#kubernetesclustersportforwardsupdate2) | **PUT** /api/v1/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsCreate**](docs/KubernetesApi.md#kubernetesclustersresourcepoolscreate) | **POST** /api/kubernetes/clusters/{cluster_id}/resource-pools/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsCreate2**](docs/KubernetesApi.md#kubernetesclustersresourcepoolscreate2) | **POST** /api/v1/kubernetes/clusters/{cluster_id}/resource-pools/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsDestroy**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsDestroy2**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsdestroy2) | **DELETE** /api/v1/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsList**](docs/KubernetesApi.md#kubernetesclustersresourcepoolslist) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsList2**](docs/KubernetesApi.md#kubernetesclustersresourcepoolslist2) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/resource-pools/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsNodesDestroy**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsnodesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsNodesDestroy2**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsnodesdestroy2) | **DELETE** /api/v1/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsNodesList**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsnodeslist) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsNodesList2**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsnodeslist2) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsNodesMetricsRetrieve**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsnodesmetricsretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/metrics/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsNodesMetricsRetrieve2**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsnodesmetricsretrieve2) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/metrics/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsNodesRetrieve**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsnodesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsNodesRetrieve2**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsnodesretrieve2) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsNodesRrdRetrieve**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsnodesrrdretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/rrd/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsNodesRrdRetrieve2**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsnodesrrdretrieve2) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/rrd/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsPartialUpdate**](docs/KubernetesApi.md#kubernetesclustersresourcepoolspartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsPartialUpdate2**](docs/KubernetesApi.md#kubernetesclustersresourcepoolspartialupdate2) | **PATCH** /api/v1/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsRetrieve**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsRetrieve2**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsretrieve2) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsUpdate**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | 
*KubernetesApi* | [**kubernetesClustersResourcePoolsUpdate2**](docs/KubernetesApi.md#kubernetesclustersresourcepoolsupdate2) | **PUT** /api/v1/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | 
*KubernetesApi* | [**kubernetesClustersRetrieve**](docs/KubernetesApi.md#kubernetesclustersretrieve) | **GET** /api/kubernetes/clusters/{id}/ | 
*KubernetesApi* | [**kubernetesClustersRetrieve2**](docs/KubernetesApi.md#kubernetesclustersretrieve2) | **GET** /api/v1/kubernetes/clusters/{id}/ | 
*KubernetesApi* | [**kubernetesClustersTalosVersionUpgradeCreate**](docs/KubernetesApi.md#kubernetesclusterstalosversionupgradecreate) | **POST** /api/kubernetes/clusters/{id}/talos-version-upgrade/ | 
*KubernetesApi* | [**kubernetesClustersTalosVersionUpgradeCreate2**](docs/KubernetesApi.md#kubernetesclusterstalosversionupgradecreate2) | **POST** /api/v1/kubernetes/clusters/{id}/talos-version-upgrade/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesCreate**](docs/KubernetesApi.md#kubernetesclusterstcproutescreate) | **POST** /api/kubernetes/clusters/{cluster_id}/tcproutes/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesCreate2**](docs/KubernetesApi.md#kubernetesclusterstcproutescreate2) | **POST** /api/v1/kubernetes/clusters/{cluster_id}/tcproutes/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesDestroy**](docs/KubernetesApi.md#kubernetesclusterstcproutesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesDestroy2**](docs/KubernetesApi.md#kubernetesclusterstcproutesdestroy2) | **DELETE** /api/v1/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesPartialUpdate**](docs/KubernetesApi.md#kubernetesclusterstcproutespartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesPartialUpdate2**](docs/KubernetesApi.md#kubernetesclusterstcproutespartialupdate2) | **PATCH** /api/v1/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesRetrieve**](docs/KubernetesApi.md#kubernetesclusterstcproutesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/tcproutes/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesRetrieve2**](docs/KubernetesApi.md#kubernetesclusterstcproutesretrieve2) | **GET** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesRetrieve3**](docs/KubernetesApi.md#kubernetesclusterstcproutesretrieve3) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/tcproutes/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesRetrieve4**](docs/KubernetesApi.md#kubernetesclusterstcproutesretrieve4) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesUpdate**](docs/KubernetesApi.md#kubernetesclusterstcproutesupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersTcproutesUpdate2**](docs/KubernetesApi.md#kubernetesclusterstcproutesupdate2) | **PUT** /api/v1/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersToggleCloudVmAccessCreate**](docs/KubernetesApi.md#kubernetesclusterstogglecloudvmaccesscreate) | **POST** /api/kubernetes/clusters/{id}/toggle-cloud-vm-access/ | 
*KubernetesApi* | [**kubernetesClustersToggleCloudVmAccessCreate2**](docs/KubernetesApi.md#kubernetesclusterstogglecloudvmaccesscreate2) | **POST** /api/v1/kubernetes/clusters/{id}/toggle-cloud-vm-access/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesCreate**](docs/KubernetesApi.md#kubernetesclustersudproutescreate) | **POST** /api/kubernetes/clusters/{cluster_id}/udproutes/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesCreate2**](docs/KubernetesApi.md#kubernetesclustersudproutescreate2) | **POST** /api/v1/kubernetes/clusters/{cluster_id}/udproutes/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesDestroy**](docs/KubernetesApi.md#kubernetesclustersudproutesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesDestroy2**](docs/KubernetesApi.md#kubernetesclustersudproutesdestroy2) | **DELETE** /api/v1/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesPartialUpdate**](docs/KubernetesApi.md#kubernetesclustersudproutespartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesPartialUpdate2**](docs/KubernetesApi.md#kubernetesclustersudproutespartialupdate2) | **PATCH** /api/v1/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesRetrieve**](docs/KubernetesApi.md#kubernetesclustersudproutesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/udproutes/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesRetrieve2**](docs/KubernetesApi.md#kubernetesclustersudproutesretrieve2) | **GET** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesRetrieve3**](docs/KubernetesApi.md#kubernetesclustersudproutesretrieve3) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/udproutes/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesRetrieve4**](docs/KubernetesApi.md#kubernetesclustersudproutesretrieve4) | **GET** /api/v1/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesUpdate**](docs/KubernetesApi.md#kubernetesclustersudproutesupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersUdproutesUpdate2**](docs/KubernetesApi.md#kubernetesclustersudproutesupdate2) | **PUT** /api/v1/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | 
*KubernetesApi* | [**kubernetesClustersUpdate**](docs/KubernetesApi.md#kubernetesclustersupdate) | **PUT** /api/kubernetes/clusters/{id}/ | 
*KubernetesApi* | [**kubernetesClustersUpdate2**](docs/KubernetesApi.md#kubernetesclustersupdate2) | **PUT** /api/v1/kubernetes/clusters/{id}/ | 
*KubernetesApi* | [**kubernetesClustersUpgradeFeatureCreate**](docs/KubernetesApi.md#kubernetesclustersupgradefeaturecreate) | **POST** /api/kubernetes/clusters/{id}/upgrade-feature/ | 
*KubernetesApi* | [**kubernetesClustersUpgradeFeatureCreate2**](docs/KubernetesApi.md#kubernetesclustersupgradefeaturecreate2) | **POST** /api/v1/kubernetes/clusters/{id}/upgrade-feature/ | 
*SchemaApi* | [**schemaRetrieve**](docs/SchemaApi.md#schemaretrieve) | **GET** /api/schema/ | 
*SchemaApi* | [**schemaRetrieve2**](docs/SchemaApi.md#schemaretrieve2) | **GET** /api/v1/schema/ | 
*SupportApi* | [**supportDepartmentsList**](docs/SupportApi.md#supportdepartmentslist) | **GET** /api/support/departments/ | 
*SupportApi* | [**supportDepartmentsList2**](docs/SupportApi.md#supportdepartmentslist2) | **GET** /api/v1/support/departments/ | 
*SupportApi* | [**supportTicketsCloseCreate**](docs/SupportApi.md#supportticketsclosecreate) | **POST** /api/support/tickets/{id}/close/ | 
*SupportApi* | [**supportTicketsCloseCreate2**](docs/SupportApi.md#supportticketsclosecreate2) | **POST** /api/v1/support/tickets/{id}/close/ | 
*SupportApi* | [**supportTicketsCreate**](docs/SupportApi.md#supportticketscreate) | **POST** /api/support/tickets/ | 
*SupportApi* | [**supportTicketsCreate2**](docs/SupportApi.md#supportticketscreate2) | **POST** /api/v1/support/tickets/ | 
*SupportApi* | [**supportTicketsList**](docs/SupportApi.md#supportticketslist) | **GET** /api/support/tickets/ | 
*SupportApi* | [**supportTicketsList2**](docs/SupportApi.md#supportticketslist2) | **GET** /api/v1/support/tickets/ | 
*SupportApi* | [**supportTicketsMessagesAttachmentRetrieve**](docs/SupportApi.md#supportticketsmessagesattachmentretrieve) | **GET** /api/support/tickets/{id}/messages/{message_id}/attachment/ | 
*SupportApi* | [**supportTicketsMessagesAttachmentRetrieve2**](docs/SupportApi.md#supportticketsmessagesattachmentretrieve2) | **GET** /api/v1/support/tickets/{id}/messages/{message_id}/attachment/ | 
*SupportApi* | [**supportTicketsReopenCreate**](docs/SupportApi.md#supportticketsreopencreate) | **POST** /api/support/tickets/{id}/reopen/ | 
*SupportApi* | [**supportTicketsReopenCreate2**](docs/SupportApi.md#supportticketsreopencreate2) | **POST** /api/v1/support/tickets/{id}/reopen/ | 
*SupportApi* | [**supportTicketsReplyCreate**](docs/SupportApi.md#supportticketsreplycreate) | **POST** /api/support/tickets/{id}/reply/ | 
*SupportApi* | [**supportTicketsReplyCreate2**](docs/SupportApi.md#supportticketsreplycreate2) | **POST** /api/v1/support/tickets/{id}/reply/ | 
*SupportApi* | [**supportTicketsRetrieve**](docs/SupportApi.md#supportticketsretrieve) | **GET** /api/support/tickets/{id}/ | 
*SupportApi* | [**supportTicketsRetrieve2**](docs/SupportApi.md#supportticketsretrieve2) | **GET** /api/v1/support/tickets/{id}/ | 


### Documentation For Models

 - [APITokenCreate](docs/APITokenCreate.md)
 - [APITokenList](docs/APITokenList.md)
 - [ActivateFreeDNS](docs/ActivateFreeDNS.md)
 - [ActivateFreeDNSResponse](docs/ActivateFreeDNSResponse.md)
 - [ActivityLogEntry](docs/ActivityLogEntry.md)
 - [ActivityLogResponse](docs/ActivityLogResponse.md)
 - [AddServerResponse](docs/AddServerResponse.md)
 - [Address](docs/Address.md)
 - [AttachIPv4](docs/AttachIPv4.md)
 - [AttachIPv6](docs/AttachIPv6.md)
 - [AttachVolume](docs/AttachVolume.md)
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
 - [Domain](docs/Domain.md)
 - [DomainCancelResponse](docs/DomainCancelResponse.md)
 - [DomainCreate](docs/DomainCreate.md)
 - [DomainRegistrant](docs/DomainRegistrant.md)
 - [EligibleVM](docs/EligibleVM.md)
 - [EligibleVMsResponse](docs/EligibleVMsResponse.md)
 - [EmailHistory](docs/EmailHistory.md)
 - [FeatureUpgradeRequest](docs/FeatureUpgradeRequest.md)
 - [FeatureUpgradeResponse](docs/FeatureUpgradeResponse.md)
 - [FeaturesEnum](docs/FeaturesEnum.md)
 - [FirewallRule](docs/FirewallRule.md)
 - [FirewallRuleDirectionEnum](docs/FirewallRuleDirectionEnum.md)
 - [FirewallRulesSet](docs/FirewallRulesSet.md)
 - [FirewallRulesSetStatusEnum](docs/FirewallRulesSetStatusEnum.md)
 - [FreeDNSDomain](docs/FreeDNSDomain.md)
 - [FundsBalanceResponse](docs/FundsBalanceResponse.md)
 - [FundsLog](docs/FundsLog.md)
 - [FwPolicyOutEnum](docs/FwPolicyOutEnum.md)
 - [HTTPRoute](docs/HTTPRoute.md)
 - [HostingChangePasswordResponse](docs/HostingChangePasswordResponse.md)
 - [HostingService](docs/HostingService.md)
 - [InvoiceDetail](docs/InvoiceDetail.md)
 - [InvoiceList](docs/InvoiceList.md)
 - [KubeUpgradeResponse](docs/KubeUpgradeResponse.md)
 - [KubeVersionEnum](docs/KubeVersionEnum.md)
 - [LBFirewallRule](docs/LBFirewallRule.md)
 - [LBFirewallRuleActionEnum](docs/LBFirewallRuleActionEnum.md)
 - [LBFirewallRuleDirectionEnum](docs/LBFirewallRuleDirectionEnum.md)
 - [LowBalanceSettings](docs/LowBalanceSettings.md)
 - [NameserversUpdate](docs/NameserversUpdate.md)
 - [NameserversUpdateResponse](docs/NameserversUpdateResponse.md)
 - [NodeMetricsResponse](docs/NodeMetricsResponse.md)
 - [NodeRRDResponse](docs/NodeRRDResponse.md)
 - [NotificationSettingsResponse](docs/NotificationSettingsResponse.md)
 - [OSImage](docs/OSImage.md)
 - [OperationEnum](docs/OperationEnum.md)
 - [PaginatedAPITokenListList](docs/PaginatedAPITokenListList.md)
 - [PaginatedClusterDetailList](docs/PaginatedClusterDetailList.md)
 - [PaginatedClusterTypeList](docs/PaginatedClusterTypeList.md)
 - [PaginatedCompanyList](docs/PaginatedCompanyList.md)
 - [PaginatedDedicatedServerList](docs/PaginatedDedicatedServerList.md)
 - [PaginatedDepositList](docs/PaginatedDepositList.md)
 - [PaginatedDomainList](docs/PaginatedDomainList.md)
 - [PaginatedDomainRegistrantList](docs/PaginatedDomainRegistrantList.md)
 - [PaginatedEmailHistoryList](docs/PaginatedEmailHistoryList.md)
 - [PaginatedFundsLogList](docs/PaginatedFundsLogList.md)
 - [PaginatedHostingServiceList](docs/PaginatedHostingServiceList.md)
 - [PaginatedInvoiceListList](docs/PaginatedInvoiceListList.md)
 - [PaginatedLBFirewallRuleList](docs/PaginatedLBFirewallRuleList.md)
 - [PaginatedOSImageList](docs/PaginatedOSImageList.md)
 - [PaginatedPrivateNetworkList](docs/PaginatedPrivateNetworkList.md)
 - [PaginatedPublicIPv4List](docs/PaginatedPublicIPv4List.md)
 - [PaginatedPublicIPv6List](docs/PaginatedPublicIPv6List.md)
 - [PaginatedResourcePoolList](docs/PaginatedResourcePoolList.md)
 - [PaginatedResourcePoolNodeList](docs/PaginatedResourcePoolNodeList.md)
 - [PaginatedSSHKeyList](docs/PaginatedSSHKeyList.md)
 - [PaginatedServerList](docs/PaginatedServerList.md)
 - [PaginatedServerProductList](docs/PaginatedServerProductList.md)
 - [PaginatedServiceListList](docs/PaginatedServiceListList.md)
 - [PaginatedSnapshotList](docs/PaginatedSnapshotList.md)
 - [PaginatedStorageProductList](docs/PaginatedStorageProductList.md)
 - [PaginatedSubscriptionList](docs/PaginatedSubscriptionList.md)
 - [PaginatedTLDList](docs/PaginatedTLDList.md)
 - [PaginatedTicketListList](docs/PaginatedTicketListList.md)
 - [PatchedClusterDetail](docs/PatchedClusterDetail.md)
 - [PatchedCompany](docs/PatchedCompany.md)
 - [PatchedDomain](docs/PatchedDomain.md)
 - [PatchedDomainRegistrant](docs/PatchedDomainRegistrant.md)
 - [PatchedFirewallRule](docs/PatchedFirewallRule.md)
 - [PatchedFirewallRulesSet](docs/PatchedFirewallRulesSet.md)
 - [PatchedHTTPRoute](docs/PatchedHTTPRoute.md)
 - [PatchedLBFirewallRule](docs/PatchedLBFirewallRule.md)
 - [PatchedPrivateNetwork](docs/PatchedPrivateNetwork.md)
 - [PatchedProfile](docs/PatchedProfile.md)
 - [PatchedResourcePool](docs/PatchedResourcePool.md)
 - [PatchedSSHKey](docs/PatchedSSHKey.md)
 - [PatchedServerDetail](docs/PatchedServerDetail.md)
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
 - [ScopeEnum](docs/ScopeEnum.md)
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
 - [Subscription](docs/Subscription.md)
 - [SubscriptionStatusEnum](docs/SubscriptionStatusEnum.md)
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

