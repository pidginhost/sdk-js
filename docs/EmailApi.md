# EmailApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**emailApiCredentialsCreate**](#emailapicredentialscreate) | **POST** /api/email/api_credentials/ | |
|[**emailApiCredentialsDestroy**](#emailapicredentialsdestroy) | **DELETE** /api/email/api_credentials/{id}/ | |
|[**emailApiCredentialsList**](#emailapicredentialslist) | **GET** /api/email/api_credentials/ | |
|[**emailApiCredentialsRetrieve**](#emailapicredentialsretrieve) | **GET** /api/email/api_credentials/{id}/ | |
|[**emailDomainsCreate**](#emaildomainscreate) | **POST** /api/email/domains/ | |
|[**emailDomainsInboundRoutesCreate**](#emaildomainsinboundroutescreate) | **POST** /api/email/domains/{domain_pk}/inbound_routes/ | |
|[**emailDomainsInboundRoutesList**](#emaildomainsinboundrouteslist) | **GET** /api/email/domains/{domain_pk}/inbound_routes/ | |
|[**emailDomainsList**](#emaildomainslist) | **GET** /api/email/domains/ | |
|[**emailDomainsRetrieve**](#emaildomainsretrieve) | **GET** /api/email/domains/{id}/ | |
|[**emailDomainsRotateDkimCreate**](#emaildomainsrotatedkimcreate) | **POST** /api/email/domains/{id}/rotate_dkim/ | |
|[**emailDomainsToggleInboundCreate**](#emaildomainstoggleinboundcreate) | **POST** /api/email/domains/{id}/toggle_inbound/ | |
|[**emailDomainsVerifyCreate**](#emaildomainsverifycreate) | **POST** /api/email/domains/{id}/verify/ | |
|[**emailInboundRoutesCreate**](#emailinboundroutescreate) | **POST** /api/email/inbound_routes/ | |
|[**emailInboundRoutesDestroy**](#emailinboundroutesdestroy) | **DELETE** /api/email/inbound_routes/{id}/ | |
|[**emailInboundRoutesList**](#emailinboundrouteslist) | **GET** /api/email/inbound_routes/ | |
|[**emailInboundRoutesPartialUpdate**](#emailinboundroutespartialupdate) | **PATCH** /api/email/inbound_routes/{id}/ | |
|[**emailInboundRoutesRetrieve**](#emailinboundroutesretrieve) | **GET** /api/email/inbound_routes/{id}/ | |
|[**emailMessagesRetrieve**](#emailmessagesretrieve) | **GET** /api/email/messages/{message_id}/ | |
|[**emailSandboxAddressesCreate**](#emailsandboxaddressescreate) | **POST** /api/email/sandbox_addresses/ | |
|[**emailSandboxAddressesDestroy**](#emailsandboxaddressesdestroy) | **DELETE** /api/email/sandbox_addresses/{id}/ | |
|[**emailSandboxAddressesList**](#emailsandboxaddresseslist) | **GET** /api/email/sandbox_addresses/ | |
|[**emailSandboxAddressesRetrieve**](#emailsandboxaddressesretrieve) | **GET** /api/email/sandbox_addresses/{id}/ | |
|[**emailSendCreate**](#emailsendcreate) | **POST** /api/email/send/ | |
|[**emailServicesApiCredentialsCreate**](#emailservicesapicredentialscreate) | **POST** /api/email/services/{service_pk}/api_credentials/ | |
|[**emailServicesApiCredentialsList**](#emailservicesapicredentialslist) | **GET** /api/email/services/{service_pk}/api_credentials/ | |
|[**emailServicesCancelCreate**](#emailservicescancelcreate) | **POST** /api/email/services/{id}/cancel/ | |
|[**emailServicesChangeTierPartialUpdate**](#emailserviceschangetierpartialupdate) | **PATCH** /api/email/services/{id}/change_tier/ | |
|[**emailServicesCreate**](#emailservicescreate) | **POST** /api/email/services/ | |
|[**emailServicesDedicatedIpCreate**](#emailservicesdedicatedipcreate) | **POST** /api/email/services/{id}/dedicated_ip/ | |
|[**emailServicesDedicatedIpDestroy**](#emailservicesdedicatedipdestroy) | **DELETE** /api/email/services/{id}/dedicated_ip/ | |
|[**emailServicesDestroy**](#emailservicesdestroy) | **DELETE** /api/email/services/{id}/ | |
|[**emailServicesDomainsCreate**](#emailservicesdomainscreate) | **POST** /api/email/services/{service_pk}/domains/ | |
|[**emailServicesDomainsList**](#emailservicesdomainslist) | **GET** /api/email/services/{service_pk}/domains/ | |
|[**emailServicesList**](#emailserviceslist) | **GET** /api/email/services/ | |
|[**emailServicesMessagesRetrieve**](#emailservicesmessagesretrieve) | **GET** /api/email/services/{service_pk}/messages/ | |
|[**emailServicesPartialUpdate**](#emailservicespartialupdate) | **PATCH** /api/email/services/{id}/ | |
|[**emailServicesRestoreCreate**](#emailservicesrestorecreate) | **POST** /api/email/services/{id}/restore/ | |
|[**emailServicesRetrieve**](#emailservicesretrieve) | **GET** /api/email/services/{id}/ | |
|[**emailServicesSandboxAddressesCreate**](#emailservicessandboxaddressescreate) | **POST** /api/email/services/{service_pk}/sandbox_addresses/ | |
|[**emailServicesSandboxAddressesList**](#emailservicessandboxaddresseslist) | **GET** /api/email/services/{service_pk}/sandbox_addresses/ | |
|[**emailServicesSmtpCredentialsCreate**](#emailservicessmtpcredentialscreate) | **POST** /api/email/services/{service_pk}/smtp_credentials/ | |
|[**emailServicesSmtpCredentialsList**](#emailservicessmtpcredentialslist) | **GET** /api/email/services/{service_pk}/smtp_credentials/ | |
|[**emailServicesStatsRetrieve**](#emailservicesstatsretrieve) | **GET** /api/email/services/{service_pk}/stats/ | |
|[**emailServicesSuppressionsCreate**](#emailservicessuppressionscreate) | **POST** /api/email/services/{service_pk}/suppressions/ | |
|[**emailServicesSuppressionsList**](#emailservicessuppressionslist) | **GET** /api/email/services/{service_pk}/suppressions/ | |
|[**emailSmtpCredentialsCreate**](#emailsmtpcredentialscreate) | **POST** /api/email/smtp_credentials/ | |
|[**emailSmtpCredentialsDestroy**](#emailsmtpcredentialsdestroy) | **DELETE** /api/email/smtp_credentials/{id}/ | |
|[**emailSmtpCredentialsList**](#emailsmtpcredentialslist) | **GET** /api/email/smtp_credentials/ | |
|[**emailSmtpCredentialsRetrieve**](#emailsmtpcredentialsretrieve) | **GET** /api/email/smtp_credentials/{id}/ | |
|[**emailSuppressionsCreate**](#emailsuppressionscreate) | **POST** /api/email/suppressions/ | |
|[**emailSuppressionsDestroy**](#emailsuppressionsdestroy) | **DELETE** /api/email/suppressions/{id}/ | |
|[**emailSuppressionsList**](#emailsuppressionslist) | **GET** /api/email/suppressions/ | |
|[**emailSuppressionsRetrieve**](#emailsuppressionsretrieve) | **GET** /api/email/suppressions/{id}/ | |

# **emailApiCredentialsCreate**
> ApiCredential emailApiCredentialsCreate()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    ApiCredential
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let apiCredential: ApiCredential; // (optional)

const { status, data } = await apiInstance.emailApiCredentialsCreate(
    apiCredential
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiCredential** | **ApiCredential**|  | |


### Return type

**ApiCredential**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailApiCredentialsDestroy**
> emailApiCredentialsDestroy()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this api credential. (default to undefined)

const { status, data } = await apiInstance.emailApiCredentialsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this api credential. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailApiCredentialsList**
> PaginatedApiCredentialList emailApiCredentialsList()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.emailApiCredentialsList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedApiCredentialList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailApiCredentialsRetrieve**
> ApiCredential emailApiCredentialsRetrieve()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this api credential. (default to undefined)

const { status, data } = await apiInstance.emailApiCredentialsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this api credential. | defaults to undefined|


### Return type

**ApiCredential**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailDomainsCreate**
> SendingDomain emailDomainsCreate(domainAdd)

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    DomainAdd
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let domainAdd: DomainAdd; //

const { status, data } = await apiInstance.emailDomainsCreate(
    domainAdd
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domainAdd** | **DomainAdd**|  | |


### Return type

**SendingDomain**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailDomainsInboundRoutesCreate**
> InboundRoute emailDomainsInboundRoutesCreate(inboundRoute)

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    InboundRoute
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let domainPk: number; // (default to undefined)
let inboundRoute: InboundRoute; //

const { status, data } = await apiInstance.emailDomainsInboundRoutesCreate(
    domainPk,
    inboundRoute
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inboundRoute** | **InboundRoute**|  | |
| **domainPk** | [**number**] |  | defaults to undefined|


### Return type

**InboundRoute**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailDomainsInboundRoutesList**
> PaginatedInboundRouteList emailDomainsInboundRoutesList()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let domainPk: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.emailDomainsInboundRoutesList(
    domainPk,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domainPk** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedInboundRouteList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailDomainsList**
> PaginatedSendingDomainList emailDomainsList()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.emailDomainsList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedSendingDomainList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailDomainsRetrieve**
> SendingDomain emailDomainsRetrieve()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this sending domain. (default to undefined)

const { status, data } = await apiInstance.emailDomainsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this sending domain. | defaults to undefined|


### Return type

**SendingDomain**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailDomainsRotateDkimCreate**
> SendingDomain emailDomainsRotateDkimCreate()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    SendingDomain
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this sending domain. (default to undefined)
let sendingDomain: SendingDomain; // (optional)

const { status, data } = await apiInstance.emailDomainsRotateDkimCreate(
    id,
    sendingDomain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendingDomain** | **SendingDomain**|  | |
| **id** | [**number**] | A unique integer value identifying this sending domain. | defaults to undefined|


### Return type

**SendingDomain**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailDomainsToggleInboundCreate**
> SendingDomain emailDomainsToggleInboundCreate()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    SendingDomain
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this sending domain. (default to undefined)
let sendingDomain: SendingDomain; // (optional)

const { status, data } = await apiInstance.emailDomainsToggleInboundCreate(
    id,
    sendingDomain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendingDomain** | **SendingDomain**|  | |
| **id** | [**number**] | A unique integer value identifying this sending domain. | defaults to undefined|


### Return type

**SendingDomain**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailDomainsVerifyCreate**
> SendingDomain emailDomainsVerifyCreate()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    SendingDomain
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this sending domain. (default to undefined)
let sendingDomain: SendingDomain; // (optional)

const { status, data } = await apiInstance.emailDomainsVerifyCreate(
    id,
    sendingDomain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sendingDomain** | **SendingDomain**|  | |
| **id** | [**number**] | A unique integer value identifying this sending domain. | defaults to undefined|


### Return type

**SendingDomain**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailInboundRoutesCreate**
> InboundRoute emailInboundRoutesCreate(inboundRoute)

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    InboundRoute
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let inboundRoute: InboundRoute; //

const { status, data } = await apiInstance.emailInboundRoutesCreate(
    inboundRoute
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **inboundRoute** | **InboundRoute**|  | |


### Return type

**InboundRoute**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailInboundRoutesDestroy**
> emailInboundRoutesDestroy()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this inbound route. (default to undefined)

const { status, data } = await apiInstance.emailInboundRoutesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this inbound route. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailInboundRoutesList**
> PaginatedInboundRouteList emailInboundRoutesList()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.emailInboundRoutesList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedInboundRouteList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailInboundRoutesPartialUpdate**
> InboundRoute emailInboundRoutesPartialUpdate()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    PatchedInboundRoute
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this inbound route. (default to undefined)
let patchedInboundRoute: PatchedInboundRoute; // (optional)

const { status, data } = await apiInstance.emailInboundRoutesPartialUpdate(
    id,
    patchedInboundRoute
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedInboundRoute** | **PatchedInboundRoute**|  | |
| **id** | [**number**] | A unique integer value identifying this inbound route. | defaults to undefined|


### Return type

**InboundRoute**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailInboundRoutesRetrieve**
> InboundRoute emailInboundRoutesRetrieve()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this inbound route. (default to undefined)

const { status, data } = await apiInstance.emailInboundRoutesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this inbound route. | defaults to undefined|


### Return type

**InboundRoute**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailMessagesRetrieve**
> emailMessagesRetrieve()

Look up a single message via Postal v3 legacy API using the server\'s own token.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let messageId: string; // (default to undefined)

const { status, data } = await apiInstance.emailMessagesRetrieve(
    messageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailSandboxAddressesCreate**
> SandboxAddress emailSandboxAddressesCreate(sandboxAddress)

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    SandboxAddress
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let sandboxAddress: SandboxAddress; //

const { status, data } = await apiInstance.emailSandboxAddressesCreate(
    sandboxAddress
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sandboxAddress** | **SandboxAddress**|  | |


### Return type

**SandboxAddress**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailSandboxAddressesDestroy**
> emailSandboxAddressesDestroy()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this sandbox verified address. (default to undefined)

const { status, data } = await apiInstance.emailSandboxAddressesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this sandbox verified address. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailSandboxAddressesList**
> PaginatedSandboxAddressList emailSandboxAddressesList()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.emailSandboxAddressesList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedSandboxAddressList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailSandboxAddressesRetrieve**
> SandboxAddress emailSandboxAddressesRetrieve()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this sandbox verified address. (default to undefined)

const { status, data } = await apiInstance.emailSandboxAddressesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this sandbox verified address. | defaults to undefined|


### Return type

**SandboxAddress**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailSendCreate**
> emailSendCreate()


### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

const { status, data } = await apiInstance.emailSendCreate();
```

### Parameters
This endpoint does not have any parameters.


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesApiCredentialsCreate**
> ApiCredential emailServicesApiCredentialsCreate()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    ApiCredential
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let servicePk: number; // (default to undefined)
let apiCredential: ApiCredential; // (optional)

const { status, data } = await apiInstance.emailServicesApiCredentialsCreate(
    servicePk,
    apiCredential
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **apiCredential** | **ApiCredential**|  | |
| **servicePk** | [**number**] |  | defaults to undefined|


### Return type

**ApiCredential**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesApiCredentialsList**
> PaginatedApiCredentialList emailServicesApiCredentialsList()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let servicePk: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.emailServicesApiCredentialsList(
    servicePk,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **servicePk** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedApiCredentialList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesCancelCreate**
> EmailService emailServicesCancelCreate()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this email service. (default to undefined)

const { status, data } = await apiInstance.emailServicesCancelCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this email service. | defaults to undefined|


### Return type

**EmailService**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesChangeTierPartialUpdate**
> EmailService emailServicesChangeTierPartialUpdate()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    PatchedSubscribe
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this email service. (default to undefined)
let patchedSubscribe: PatchedSubscribe; // (optional)

const { status, data } = await apiInstance.emailServicesChangeTierPartialUpdate(
    id,
    patchedSubscribe
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedSubscribe** | **PatchedSubscribe**|  | |
| **id** | [**number**] | A unique integer value identifying this email service. | defaults to undefined|


### Return type

**EmailService**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesCreate**
> EmailService emailServicesCreate(subscribe)

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    Subscribe
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let subscribe: Subscribe; //

const { status, data } = await apiInstance.emailServicesCreate(
    subscribe
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subscribe** | **Subscribe**|  | |


### Return type

**EmailService**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesDedicatedIpCreate**
> EmailService emailServicesDedicatedIpCreate()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this email service. (default to undefined)

const { status, data } = await apiInstance.emailServicesDedicatedIpCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this email service. | defaults to undefined|


### Return type

**EmailService**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesDedicatedIpDestroy**
> emailServicesDedicatedIpDestroy()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this email service. (default to undefined)

const { status, data } = await apiInstance.emailServicesDedicatedIpDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this email service. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesDestroy**
> emailServicesDestroy()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this email service. (default to undefined)

const { status, data } = await apiInstance.emailServicesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this email service. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesDomainsCreate**
> SendingDomain emailServicesDomainsCreate(domainAdd)

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    DomainAdd
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let servicePk: number; // (default to undefined)
let domainAdd: DomainAdd; //

const { status, data } = await apiInstance.emailServicesDomainsCreate(
    servicePk,
    domainAdd
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domainAdd** | **DomainAdd**|  | |
| **servicePk** | [**number**] |  | defaults to undefined|


### Return type

**SendingDomain**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesDomainsList**
> PaginatedSendingDomainList emailServicesDomainsList()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let servicePk: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.emailServicesDomainsList(
    servicePk,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **servicePk** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedSendingDomainList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesList**
> PaginatedEmailServiceList emailServicesList()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.emailServicesList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedEmailServiceList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesMessagesRetrieve**
> emailServicesMessagesRetrieve()

List recently observed messages for a customer\'s email service.  Postal v3 legacy API exposes per-message lookups only; phclient builds the list locally from webhook events. Each message_id is deduped, keeping the most recent event_type as the message status.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let servicePk: number; // (default to undefined)

const { status, data } = await apiInstance.emailServicesMessagesRetrieve(
    servicePk
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **servicePk** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesPartialUpdate**
> EmailService emailServicesPartialUpdate()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    PatchedEmailService
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this email service. (default to undefined)
let patchedEmailService: PatchedEmailService; // (optional)

const { status, data } = await apiInstance.emailServicesPartialUpdate(
    id,
    patchedEmailService
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedEmailService** | **PatchedEmailService**|  | |
| **id** | [**number**] | A unique integer value identifying this email service. | defaults to undefined|


### Return type

**EmailService**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesRestoreCreate**
> EmailService emailServicesRestoreCreate()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this email service. (default to undefined)

const { status, data } = await apiInstance.emailServicesRestoreCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this email service. | defaults to undefined|


### Return type

**EmailService**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesRetrieve**
> EmailService emailServicesRetrieve()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this email service. (default to undefined)

const { status, data } = await apiInstance.emailServicesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this email service. | defaults to undefined|


### Return type

**EmailService**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesSandboxAddressesCreate**
> SandboxAddress emailServicesSandboxAddressesCreate(sandboxAddress)

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    SandboxAddress
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let servicePk: number; // (default to undefined)
let sandboxAddress: SandboxAddress; //

const { status, data } = await apiInstance.emailServicesSandboxAddressesCreate(
    servicePk,
    sandboxAddress
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sandboxAddress** | **SandboxAddress**|  | |
| **servicePk** | [**number**] |  | defaults to undefined|


### Return type

**SandboxAddress**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesSandboxAddressesList**
> PaginatedSandboxAddressList emailServicesSandboxAddressesList()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let servicePk: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.emailServicesSandboxAddressesList(
    servicePk,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **servicePk** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedSandboxAddressList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesSmtpCredentialsCreate**
> SmtpCredential emailServicesSmtpCredentialsCreate()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    SmtpCredential
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let servicePk: number; // (default to undefined)
let smtpCredential: SmtpCredential; // (optional)

const { status, data } = await apiInstance.emailServicesSmtpCredentialsCreate(
    servicePk,
    smtpCredential
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smtpCredential** | **SmtpCredential**|  | |
| **servicePk** | [**number**] |  | defaults to undefined|


### Return type

**SmtpCredential**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesSmtpCredentialsList**
> PaginatedSmtpCredentialList emailServicesSmtpCredentialsList()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let servicePk: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.emailServicesSmtpCredentialsList(
    servicePk,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **servicePk** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedSmtpCredentialList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesStatsRetrieve**
> emailServicesStatsRetrieve()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let servicePk: number; // (default to undefined)

const { status, data } = await apiInstance.emailServicesStatsRetrieve(
    servicePk
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **servicePk** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesSuppressionsCreate**
> SuppressionEntry emailServicesSuppressionsCreate()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    SuppressionEntry
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let servicePk: number; // (default to undefined)
let suppressionEntry: SuppressionEntry; // (optional)

const { status, data } = await apiInstance.emailServicesSuppressionsCreate(
    servicePk,
    suppressionEntry
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **suppressionEntry** | **SuppressionEntry**|  | |
| **servicePk** | [**number**] |  | defaults to undefined|


### Return type

**SuppressionEntry**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailServicesSuppressionsList**
> PaginatedSuppressionEntryList emailServicesSuppressionsList()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let servicePk: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.emailServicesSuppressionsList(
    servicePk,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **servicePk** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedSuppressionEntryList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailSmtpCredentialsCreate**
> SmtpCredential emailSmtpCredentialsCreate()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    SmtpCredential
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let smtpCredential: SmtpCredential; // (optional)

const { status, data } = await apiInstance.emailSmtpCredentialsCreate(
    smtpCredential
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **smtpCredential** | **SmtpCredential**|  | |


### Return type

**SmtpCredential**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailSmtpCredentialsDestroy**
> emailSmtpCredentialsDestroy()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this smtp credential. (default to undefined)

const { status, data } = await apiInstance.emailSmtpCredentialsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this smtp credential. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailSmtpCredentialsList**
> PaginatedSmtpCredentialList emailSmtpCredentialsList()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.emailSmtpCredentialsList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedSmtpCredentialList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailSmtpCredentialsRetrieve**
> SmtpCredential emailSmtpCredentialsRetrieve()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this smtp credential. (default to undefined)

const { status, data } = await apiInstance.emailSmtpCredentialsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this smtp credential. | defaults to undefined|


### Return type

**SmtpCredential**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailSuppressionsCreate**
> SuppressionEntry emailSuppressionsCreate()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration,
    SuppressionEntry
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let suppressionEntry: SuppressionEntry; // (optional)

const { status, data } = await apiInstance.emailSuppressionsCreate(
    suppressionEntry
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **suppressionEntry** | **SuppressionEntry**|  | |


### Return type

**SuppressionEntry**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailSuppressionsDestroy**
> emailSuppressionsDestroy()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this suppression entry. (default to undefined)

const { status, data } = await apiInstance.emailSuppressionsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this suppression entry. | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailSuppressionsList**
> PaginatedSuppressionEntryList emailSuppressionsList()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.emailSuppressionsList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedSuppressionEntryList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **emailSuppressionsRetrieve**
> SuppressionEntry emailSuppressionsRetrieve()

Intersect the beta gate and IAM with the configured API permissions.  Keeping the gate additive preserves authentication, custom-token scope, and OAuth scope checks when the customer-facing feature flag is open. Per-action permission overrides (the staff-only restore action) remain in the same intersection.

### Example

```typescript
import {
    EmailApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new EmailApi(configuration);

let id: number; //A unique integer value identifying this suppression entry. (default to undefined)

const { status, data } = await apiInstance.emailSuppressionsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this suppression entry. | defaults to undefined|


### Return type

**SuppressionEntry**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

