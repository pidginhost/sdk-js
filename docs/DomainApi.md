# DomainApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**domainDomainCancelCreate**](#domaindomaincancelcreate) | **POST** /api/domain/domain/{domain}/cancel/ | |
|[**domainDomainCancelCreate2**](#domaindomaincancelcreate2) | **POST** /api/v1/domain/domain/{domain}/cancel/ | |
|[**domainDomainCheckAvailabilityCreate**](#domaindomaincheckavailabilitycreate) | **POST** /api/domain/domain/check-availability/ | |
|[**domainDomainCheckAvailabilityCreate2**](#domaindomaincheckavailabilitycreate2) | **POST** /api/v1/domain/domain/check-availability/ | |
|[**domainDomainContactsCreate**](#domaindomaincontactscreate) | **POST** /api/domain/domain/{domain}/contacts/ | |
|[**domainDomainContactsCreate2**](#domaindomaincontactscreate2) | **POST** /api/v1/domain/domain/{domain}/contacts/ | |
|[**domainDomainCreate**](#domaindomaincreate) | **POST** /api/domain/domain/ | |
|[**domainDomainCreate2**](#domaindomaincreate2) | **POST** /api/v1/domain/domain/ | |
|[**domainDomainList**](#domaindomainlist) | **GET** /api/domain/domain/ | |
|[**domainDomainList2**](#domaindomainlist2) | **GET** /api/v1/domain/domain/ | |
|[**domainDomainNameserversCreate**](#domaindomainnameserverscreate) | **POST** /api/domain/domain/{domain}/nameservers/ | |
|[**domainDomainNameserversCreate2**](#domaindomainnameserverscreate2) | **POST** /api/v1/domain/domain/{domain}/nameservers/ | |
|[**domainDomainPartialUpdate**](#domaindomainpartialupdate) | **PATCH** /api/domain/domain/{domain}/ | |
|[**domainDomainPartialUpdate2**](#domaindomainpartialupdate2) | **PATCH** /api/v1/domain/domain/{domain}/ | |
|[**domainDomainRenewCreate**](#domaindomainrenewcreate) | **POST** /api/domain/domain/{domain}/renew/ | |
|[**domainDomainRenewCreate2**](#domaindomainrenewcreate2) | **POST** /api/v1/domain/domain/{domain}/renew/ | |
|[**domainDomainRetrieve**](#domaindomainretrieve) | **GET** /api/domain/domain/{domain}/ | |
|[**domainDomainRetrieve2**](#domaindomainretrieve2) | **GET** /api/v1/domain/domain/{domain}/ | |
|[**domainDomainTransferRoDomainCreate**](#domaindomaintransferrodomaincreate) | **POST** /api/domain/domain/transfer-ro-domain/ | |
|[**domainDomainTransferRoDomainCreate2**](#domaindomaintransferrodomaincreate2) | **POST** /api/v1/domain/domain/transfer-ro-domain/ | |
|[**domainDomainUpdate**](#domaindomainupdate) | **PUT** /api/domain/domain/{domain}/ | |
|[**domainDomainUpdate2**](#domaindomainupdate2) | **PUT** /api/v1/domain/domain/{domain}/ | |
|[**domainRegistrantsCreate**](#domainregistrantscreate) | **POST** /api/domain/registrants/ | |
|[**domainRegistrantsCreate2**](#domainregistrantscreate2) | **POST** /api/v1/domain/registrants/ | |
|[**domainRegistrantsDestroy**](#domainregistrantsdestroy) | **DELETE** /api/domain/registrants/{id}/ | |
|[**domainRegistrantsDestroy2**](#domainregistrantsdestroy2) | **DELETE** /api/v1/domain/registrants/{id}/ | |
|[**domainRegistrantsList**](#domainregistrantslist) | **GET** /api/domain/registrants/ | |
|[**domainRegistrantsList2**](#domainregistrantslist2) | **GET** /api/v1/domain/registrants/ | |
|[**domainRegistrantsPartialUpdate**](#domainregistrantspartialupdate) | **PATCH** /api/domain/registrants/{id}/ | |
|[**domainRegistrantsPartialUpdate2**](#domainregistrantspartialupdate2) | **PATCH** /api/v1/domain/registrants/{id}/ | |
|[**domainRegistrantsRetrieve**](#domainregistrantsretrieve) | **GET** /api/domain/registrants/{id}/ | |
|[**domainRegistrantsRetrieve2**](#domainregistrantsretrieve2) | **GET** /api/v1/domain/registrants/{id}/ | |
|[**domainRegistrantsUpdate**](#domainregistrantsupdate) | **PUT** /api/domain/registrants/{id}/ | |
|[**domainRegistrantsUpdate2**](#domainregistrantsupdate2) | **PUT** /api/v1/domain/registrants/{id}/ | |
|[**domainTldList**](#domaintldlist) | **GET** /api/domain/tld/ | |
|[**domainTldList2**](#domaintldlist2) | **GET** /api/v1/domain/tld/ | |
|[**domainTldRetrieve**](#domaintldretrieve) | **GET** /api/domain/tld/{id}/ | |
|[**domainTldRetrieve2**](#domaintldretrieve2) | **GET** /api/v1/domain/tld/{id}/ | |

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

# **domainDomainCancelCreate2**
> DomainCancelResponse domainDomainCancelCreate2()

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

const { status, data } = await apiInstance.domainDomainCancelCreate2(
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

# **domainDomainCheckAvailabilityCreate2**
> CheckAvailability domainDomainCheckAvailabilityCreate2(checkAvailability)

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

const { status, data } = await apiInstance.domainDomainCheckAvailabilityCreate2(
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

# **domainDomainContactsCreate2**
> ContactsUpdateResponse domainDomainContactsCreate2(contactsUpdate)

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

const { status, data } = await apiInstance.domainDomainContactsCreate2(
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

# **domainDomainCreate2**
> DomainCreate domainDomainCreate2(domainCreate)

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

const { status, data } = await apiInstance.domainDomainCreate2(
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

# **domainDomainList2**
> PaginatedDomainList domainDomainList2()

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

const { status, data } = await apiInstance.domainDomainList2(
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

# **domainDomainNameserversCreate2**
> NameserversUpdateResponse domainDomainNameserversCreate2(nameserversUpdate)

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

const { status, data } = await apiInstance.domainDomainNameserversCreate2(
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

# **domainDomainPartialUpdate2**
> Domain domainDomainPartialUpdate2()

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

const { status, data } = await apiInstance.domainDomainPartialUpdate2(
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

# **domainDomainRenewCreate2**
> RenewDomain domainDomainRenewCreate2(renewDomain)

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

const { status, data } = await apiInstance.domainDomainRenewCreate2(
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

# **domainDomainRetrieve2**
> Domain domainDomainRetrieve2()

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

const { status, data } = await apiInstance.domainDomainRetrieve2(
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

# **domainDomainTransferRoDomainCreate2**
> TransferRoDomain domainDomainTransferRoDomainCreate2(transferRoDomain)

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

const { status, data } = await apiInstance.domainDomainTransferRoDomainCreate2(
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

# **domainDomainUpdate2**
> Domain domainDomainUpdate2()

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

const { status, data } = await apiInstance.domainDomainUpdate2(
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

# **domainRegistrantsCreate2**
> DomainRegistrant domainRegistrantsCreate2(domainRegistrant)

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

const { status, data } = await apiInstance.domainRegistrantsCreate2(
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

# **domainRegistrantsDestroy2**
> domainRegistrantsDestroy2()

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

const { status, data } = await apiInstance.domainRegistrantsDestroy2(
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

# **domainRegistrantsList2**
> PaginatedDomainRegistrantList domainRegistrantsList2()

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

const { status, data } = await apiInstance.domainRegistrantsList2(
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

# **domainRegistrantsPartialUpdate2**
> DomainRegistrant domainRegistrantsPartialUpdate2()

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

const { status, data } = await apiInstance.domainRegistrantsPartialUpdate2(
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

# **domainRegistrantsRetrieve2**
> DomainRegistrant domainRegistrantsRetrieve2()

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

const { status, data } = await apiInstance.domainRegistrantsRetrieve2(
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

# **domainRegistrantsUpdate2**
> DomainRegistrant domainRegistrantsUpdate2(domainRegistrant)

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

const { status, data } = await apiInstance.domainRegistrantsUpdate2(
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

# **domainTldList2**
> PaginatedTLDList domainTldList2()

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

const { status, data } = await apiInstance.domainTldList2(
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

# **domainTldRetrieve2**
> TLD domainTldRetrieve2()

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

const { status, data } = await apiInstance.domainTldRetrieve2(
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

