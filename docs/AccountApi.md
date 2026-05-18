# AccountApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**accountApiTokensCreate**](#accountapitokenscreate) | **POST** /api/account/api-tokens/ | |
|[**accountApiTokensDestroy**](#accountapitokensdestroy) | **DELETE** /api/account/api-tokens/{id}/ | |
|[**accountApiTokensList**](#accountapitokenslist) | **GET** /api/account/api-tokens/ | |
|[**accountCompaniesCreate**](#accountcompaniescreate) | **POST** /api/account/companies/ | |
|[**accountCompaniesDestroy**](#accountcompaniesdestroy) | **DELETE** /api/account/companies/{id}/ | |
|[**accountCompaniesList**](#accountcompanieslist) | **GET** /api/account/companies/ | |
|[**accountCompaniesPartialUpdate**](#accountcompaniespartialupdate) | **PATCH** /api/account/companies/{id}/ | |
|[**accountCompaniesRetrieve**](#accountcompaniesretrieve) | **GET** /api/account/companies/{id}/ | |
|[**accountCompaniesUpdate**](#accountcompaniesupdate) | **PUT** /api/account/companies/{id}/ | |
|[**accountEmailsList**](#accountemailslist) | **GET** /api/account/emails/ | |
|[**accountProfilePartialUpdate**](#accountprofilepartialupdate) | **PATCH** /api/account/profile | |
|[**accountProfileRetrieve**](#accountprofileretrieve) | **GET** /api/account/profile | |
|[**accountProfileUpdate**](#accountprofileupdate) | **PUT** /api/account/profile | |
|[**accountSshKeysCreate**](#accountsshkeyscreate) | **POST** /api/account/ssh-keys/ | |
|[**accountSshKeysDestroy**](#accountsshkeysdestroy) | **DELETE** /api/account/ssh-keys/{id}/ | |
|[**accountSshKeysList**](#accountsshkeyslist) | **GET** /api/account/ssh-keys/ | |
|[**accountSshKeysPartialUpdate**](#accountsshkeyspartialupdate) | **PATCH** /api/account/ssh-keys/{id}/ | |
|[**accountSshKeysRetrieve**](#accountsshkeysretrieve) | **GET** /api/account/ssh-keys/{id}/ | |
|[**accountSshKeysUpdate**](#accountsshkeysupdate) | **PUT** /api/account/ssh-keys/{id}/ | |

# **accountApiTokensCreate**
> APITokenCreate accountApiTokensCreate(aPITokenCreate)

Manage your API tokens

### Example

```typescript
import {
    AccountApi,
    Configuration,
    APITokenCreate
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let aPITokenCreate: APITokenCreate; //

const { status, data } = await apiInstance.accountApiTokensCreate(
    aPITokenCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aPITokenCreate** | **APITokenCreate**|  | |


### Return type

**APITokenCreate**

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

# **accountApiTokensDestroy**
> accountApiTokensDestroy()

Manage your API tokens

### Example

```typescript
import {
    AccountApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.accountApiTokensDestroy(
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

# **accountApiTokensList**
> PaginatedAPITokenListList accountApiTokensList()

Manage your API tokens

### Example

```typescript
import {
    AccountApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.accountApiTokensList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedAPITokenListList**

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

# **accountCompaniesCreate**
> Company accountCompaniesCreate(company)

Manage your companies

### Example

```typescript
import {
    AccountApi,
    Configuration,
    Company
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let company: Company; //

const { status, data } = await apiInstance.accountCompaniesCreate(
    company
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **company** | **Company**|  | |


### Return type

**Company**

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

# **accountCompaniesDestroy**
> accountCompaniesDestroy()

Manage your companies

### Example

```typescript
import {
    AccountApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: number; //A unique integer value identifying this company. (default to undefined)

const { status, data } = await apiInstance.accountCompaniesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this company. | defaults to undefined|


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

# **accountCompaniesList**
> PaginatedCompanyList accountCompaniesList()

Manage your companies

### Example

```typescript
import {
    AccountApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.accountCompaniesList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedCompanyList**

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

# **accountCompaniesPartialUpdate**
> Company accountCompaniesPartialUpdate()

Manage your companies

### Example

```typescript
import {
    AccountApi,
    Configuration,
    PatchedCompany
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: number; //A unique integer value identifying this company. (default to undefined)
let patchedCompany: PatchedCompany; // (optional)

const { status, data } = await apiInstance.accountCompaniesPartialUpdate(
    id,
    patchedCompany
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedCompany** | **PatchedCompany**|  | |
| **id** | [**number**] | A unique integer value identifying this company. | defaults to undefined|


### Return type

**Company**

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

# **accountCompaniesRetrieve**
> Company accountCompaniesRetrieve()

Manage your companies

### Example

```typescript
import {
    AccountApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: number; //A unique integer value identifying this company. (default to undefined)

const { status, data } = await apiInstance.accountCompaniesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this company. | defaults to undefined|


### Return type

**Company**

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

# **accountCompaniesUpdate**
> Company accountCompaniesUpdate(company)

Manage your companies

### Example

```typescript
import {
    AccountApi,
    Configuration,
    Company
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: number; //A unique integer value identifying this company. (default to undefined)
let company: Company; //

const { status, data } = await apiInstance.accountCompaniesUpdate(
    id,
    company
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **company** | **Company**|  | |
| **id** | [**number**] | A unique integer value identifying this company. | defaults to undefined|


### Return type

**Company**

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

# **accountEmailsList**
> PaginatedEmailHistoryList accountEmailsList()

List email history for the authenticated user.

### Example

```typescript
import {
    AccountApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.accountEmailsList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedEmailHistoryList**

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

# **accountProfilePartialUpdate**
> Profile accountProfilePartialUpdate()

Manage your profile data

### Example

```typescript
import {
    AccountApi,
    Configuration,
    PatchedProfile
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let patchedProfile: PatchedProfile; // (optional)

const { status, data } = await apiInstance.accountProfilePartialUpdate(
    patchedProfile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedProfile** | **PatchedProfile**|  | |


### Return type

**Profile**

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

# **accountProfileRetrieve**
> Profile accountProfileRetrieve()

Manage your profile data

### Example

```typescript
import {
    AccountApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

const { status, data } = await apiInstance.accountProfileRetrieve();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Profile**

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

# **accountProfileUpdate**
> Profile accountProfileUpdate(profile)

Manage your profile data

### Example

```typescript
import {
    AccountApi,
    Configuration,
    Profile
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let profile: Profile; //

const { status, data } = await apiInstance.accountProfileUpdate(
    profile
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profile** | **Profile**|  | |


### Return type

**Profile**

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

# **accountSshKeysCreate**
> SSHKey accountSshKeysCreate()


### Example

```typescript
import {
    AccountApi,
    Configuration,
    SSHKey
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let sSHKey: SSHKey; // (optional)

const { status, data } = await apiInstance.accountSshKeysCreate(
    sSHKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sSHKey** | **SSHKey**|  | |


### Return type

**SSHKey**

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

# **accountSshKeysDestroy**
> accountSshKeysDestroy()


### Example

```typescript
import {
    AccountApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.accountSshKeysDestroy(
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

# **accountSshKeysList**
> PaginatedSSHKeyList accountSshKeysList()


### Example

```typescript
import {
    AccountApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.accountSshKeysList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedSSHKeyList**

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

# **accountSshKeysPartialUpdate**
> SSHKey accountSshKeysPartialUpdate()


### Example

```typescript
import {
    AccountApi,
    Configuration,
    PatchedSSHKey
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: string; // (default to undefined)
let patchedSSHKey: PatchedSSHKey; // (optional)

const { status, data } = await apiInstance.accountSshKeysPartialUpdate(
    id,
    patchedSSHKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedSSHKey** | **PatchedSSHKey**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**SSHKey**

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

# **accountSshKeysRetrieve**
> SSHKey accountSshKeysRetrieve()


### Example

```typescript
import {
    AccountApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.accountSshKeysRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**SSHKey**

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

# **accountSshKeysUpdate**
> SSHKey accountSshKeysUpdate()


### Example

```typescript
import {
    AccountApi,
    Configuration,
    SSHKey
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: string; // (default to undefined)
let sSHKey: SSHKey; // (optional)

const { status, data } = await apiInstance.accountSshKeysUpdate(
    id,
    sSHKey
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sSHKey** | **SSHKey**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**SSHKey**

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

