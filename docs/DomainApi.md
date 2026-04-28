# DomainApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**domainDomainCancelCreate**](#domaindomaincancelcreate) | **POST** /api/domain/domain/{domain}/cancel/ | |
|[**domainDomainCheckAvailabilityCreate**](#domaindomaincheckavailabilitycreate) | **POST** /api/domain/domain/check-availability/ | |
|[**domainDomainContactsCreate**](#domaindomaincontactscreate) | **POST** /api/domain/domain/{domain}/contacts/ | |
|[**domainDomainCreate**](#domaindomaincreate) | **POST** /api/domain/domain/ | |
|[**domainDomainList**](#domaindomainlist) | **GET** /api/domain/domain/ | |
|[**domainDomainNameserversCreate**](#domaindomainnameserverscreate) | **POST** /api/domain/domain/{domain}/nameservers/ | |
|[**domainDomainPartialUpdate**](#domaindomainpartialupdate) | **PATCH** /api/domain/domain/{domain}/ | |
|[**domainDomainRenewCreate**](#domaindomainrenewcreate) | **POST** /api/domain/domain/{domain}/renew/ | |
|[**domainDomainRetrieve**](#domaindomainretrieve) | **GET** /api/domain/domain/{domain}/ | |
|[**domainDomainTransferRoDomainCreate**](#domaindomaintransferrodomaincreate) | **POST** /api/domain/domain/transfer-ro-domain/ | |
|[**domainDomainUpdate**](#domaindomainupdate) | **PUT** /api/domain/domain/{domain}/ | |
|[**domainRegistrantsCreate**](#domainregistrantscreate) | **POST** /api/domain/registrants/ | |
|[**domainRegistrantsDestroy**](#domainregistrantsdestroy) | **DELETE** /api/domain/registrants/{id}/ | |
|[**domainRegistrantsList**](#domainregistrantslist) | **GET** /api/domain/registrants/ | |
|[**domainRegistrantsPartialUpdate**](#domainregistrantspartialupdate) | **PATCH** /api/domain/registrants/{id}/ | |
|[**domainRegistrantsRetrieve**](#domainregistrantsretrieve) | **GET** /api/domain/registrants/{id}/ | |
|[**domainRegistrantsUpdate**](#domainregistrantsupdate) | **PUT** /api/domain/registrants/{id}/ | |
|[**domainTldList**](#domaintldlist) | **GET** /api/domain/tld/ | |
|[**domainTldRetrieve**](#domaintldretrieve) | **GET** /api/domain/tld/{id}/ | |

# **domainDomainCancelCreate**
> DomainCancelResponse domainDomainCancelCreate()

Cancel the service associated with this domain.

### Example

```typescript
import {
    DomainApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let domain: string; // (default to undefined)

const { status, data } = await apiInstance.domainDomainCancelCreate(
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] |  | defaults to undefined|


### Return type

**DomainCancelResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainDomainCheckAvailabilityCreate**
> CheckAvailability domainDomainCheckAvailabilityCreate(checkAvailability)

Manage your domains

### Example

```typescript
import {
    DomainApi,
    Configuration,
    CheckAvailability
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let checkAvailability: CheckAvailability; //

const { status, data } = await apiInstance.domainDomainCheckAvailabilityCreate(
    checkAvailability
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **checkAvailability** | **CheckAvailability**|  | |


### Return type

**CheckAvailability**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainDomainContactsCreate**
> ContactsUpdateResponse domainDomainContactsCreate(contactsUpdate)

Update a contact on this domain using a saved DomainRegistrant.

### Example

```typescript
import {
    DomainApi,
    Configuration,
    ContactsUpdate
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let domain: string; // (default to undefined)
let contactsUpdate: ContactsUpdate; //

const { status, data } = await apiInstance.domainDomainContactsCreate(
    domain,
    contactsUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **contactsUpdate** | **ContactsUpdate**|  | |
| **domain** | [**string**] |  | defaults to undefined|


### Return type

**ContactsUpdateResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainDomainCreate**
> DomainCreate domainDomainCreate(domainCreate)

Manage your domains

### Example

```typescript
import {
    DomainApi,
    Configuration,
    DomainCreate
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let domainCreate: DomainCreate; //

const { status, data } = await apiInstance.domainDomainCreate(
    domainCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domainCreate** | **DomainCreate**|  | |


### Return type

**DomainCreate**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainDomainList**
> PaginatedDomainList domainDomainList()

Manage your domains

### Example

```typescript
import {
    DomainApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.domainDomainList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedDomainList**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainDomainNameserversCreate**
> NameserversUpdateResponse domainDomainNameserversCreate(nameserversUpdate)

Update nameservers for this domain.

### Example

```typescript
import {
    DomainApi,
    Configuration,
    NameserversUpdate
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let domain: string; // (default to undefined)
let nameserversUpdate: NameserversUpdate; //

const { status, data } = await apiInstance.domainDomainNameserversCreate(
    domain,
    nameserversUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nameserversUpdate** | **NameserversUpdate**|  | |
| **domain** | [**string**] |  | defaults to undefined|


### Return type

**NameserversUpdateResponse**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainDomainPartialUpdate**
> Domain domainDomainPartialUpdate()

Manage your domains

### Example

```typescript
import {
    DomainApi,
    Configuration,
    PatchedDomain
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let domain: string; // (default to undefined)
let patchedDomain: PatchedDomain; // (optional)

const { status, data } = await apiInstance.domainDomainPartialUpdate(
    domain,
    patchedDomain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedDomain** | **PatchedDomain**|  | |
| **domain** | [**string**] |  | defaults to undefined|


### Return type

**Domain**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainDomainRenewCreate**
> RenewDomain domainDomainRenewCreate(renewDomain)

Manage your domains

### Example

```typescript
import {
    DomainApi,
    Configuration,
    RenewDomain
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let domain: string; // (default to undefined)
let renewDomain: RenewDomain; //

const { status, data } = await apiInstance.domainDomainRenewCreate(
    domain,
    renewDomain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **renewDomain** | **RenewDomain**|  | |
| **domain** | [**string**] |  | defaults to undefined|


### Return type

**RenewDomain**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainDomainRetrieve**
> Domain domainDomainRetrieve()

Manage your domains

### Example

```typescript
import {
    DomainApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let domain: string; // (default to undefined)

const { status, data } = await apiInstance.domainDomainRetrieve(
    domain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] |  | defaults to undefined|


### Return type

**Domain**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainDomainTransferRoDomainCreate**
> TransferRoDomain domainDomainTransferRoDomainCreate(transferRoDomain)

Manage your domains

### Example

```typescript
import {
    DomainApi,
    Configuration,
    TransferRoDomain
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let transferRoDomain: TransferRoDomain; //

const { status, data } = await apiInstance.domainDomainTransferRoDomainCreate(
    transferRoDomain
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferRoDomain** | **TransferRoDomain**|  | |


### Return type

**TransferRoDomain**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainDomainUpdate**
> Domain domainDomainUpdate()

Manage your domains

### Example

```typescript
import {
    DomainApi,
    Configuration,
    Domain
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let domain: string; // (default to undefined)
let domain2: Domain; // (optional)

const { status, data } = await apiInstance.domainDomainUpdate(
    domain,
    domain2
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain2** | **Domain**|  | |
| **domain** | [**string**] |  | defaults to undefined|


### Return type

**Domain**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainRegistrantsCreate**
> DomainRegistrant domainRegistrantsCreate(domainRegistrant)

Manage your domain registrant views

### Example

```typescript
import {
    DomainApi,
    Configuration,
    DomainRegistrant
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let domainRegistrant: DomainRegistrant; //

const { status, data } = await apiInstance.domainRegistrantsCreate(
    domainRegistrant
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domainRegistrant** | **DomainRegistrant**|  | |


### Return type

**DomainRegistrant**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainRegistrantsDestroy**
> domainRegistrantsDestroy()

Manage your domain registrant views

### Example

```typescript
import {
    DomainApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.domainRegistrantsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainRegistrantsList**
> PaginatedDomainRegistrantList domainRegistrantsList()

Manage your domain registrant views

### Example

```typescript
import {
    DomainApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.domainRegistrantsList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedDomainRegistrantList**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainRegistrantsPartialUpdate**
> DomainRegistrant domainRegistrantsPartialUpdate()

Manage your domain registrant views

### Example

```typescript
import {
    DomainApi,
    Configuration,
    PatchedDomainRegistrant
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let id: string; // (default to undefined)
let patchedDomainRegistrant: PatchedDomainRegistrant; // (optional)

const { status, data } = await apiInstance.domainRegistrantsPartialUpdate(
    id,
    patchedDomainRegistrant
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedDomainRegistrant** | **PatchedDomainRegistrant**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**DomainRegistrant**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainRegistrantsRetrieve**
> DomainRegistrant domainRegistrantsRetrieve()

Manage your domain registrant views

### Example

```typescript
import {
    DomainApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.domainRegistrantsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**DomainRegistrant**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainRegistrantsUpdate**
> DomainRegistrant domainRegistrantsUpdate(domainRegistrant)

Manage your domain registrant views

### Example

```typescript
import {
    DomainApi,
    Configuration,
    DomainRegistrant
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let id: string; // (default to undefined)
let domainRegistrant: DomainRegistrant; //

const { status, data } = await apiInstance.domainRegistrantsUpdate(
    id,
    domainRegistrant
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domainRegistrant** | **DomainRegistrant**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**DomainRegistrant**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainTldList**
> PaginatedTLDList domainTldList()

Manage your TLDs

### Example

```typescript
import {
    DomainApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.domainTldList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedTLDList**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domainTldRetrieve**
> TLD domainTldRetrieve()

Manage your TLDs

### Example

```typescript
import {
    DomainApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DomainApi(configuration);

let id: number; //A unique integer value identifying this top level domain. (default to undefined)

const { status, data } = await apiInstance.domainTldRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this top level domain. | defaults to undefined|


### Return type

**TLD**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

