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
> APITokenCreate accountApiTokensCreate(aPITokenCreateRequest)

Manage your API tokens

### Example

```typescript
import {
    AccountApi,
    Configuration,
    APITokenCreateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let aPITokenCreateRequest: APITokenCreateRequest; //

const { status, data } = await apiInstance.accountApiTokensCreate(
    aPITokenCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **aPITokenCreateRequest** | **APITokenCreateRequest**|  | |


### Return type

**APITokenCreate**

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountCompaniesCreate**
> Company accountCompaniesCreate(companyRequest)

Manage your companies

### Example

```typescript
import {
    AccountApi,
    Configuration,
    CompanyRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let companyRequest: CompanyRequest; //

const { status, data } = await apiInstance.accountCompaniesCreate(
    companyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyRequest** | **CompanyRequest**|  | |


### Return type

**Company**

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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
    PatchedCompanyRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: number; //A unique integer value identifying this company. (default to undefined)
let patchedCompanyRequest: PatchedCompanyRequest; // (optional)

const { status, data } = await apiInstance.accountCompaniesPartialUpdate(
    id,
    patchedCompanyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedCompanyRequest** | **PatchedCompanyRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this company. | defaults to undefined|


### Return type

**Company**

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountCompaniesUpdate**
> Company accountCompaniesUpdate(companyRequest)

Manage your companies

### Example

```typescript
import {
    AccountApi,
    Configuration,
    CompanyRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: number; //A unique integer value identifying this company. (default to undefined)
let companyRequest: CompanyRequest; //

const { status, data } = await apiInstance.accountCompaniesUpdate(
    id,
    companyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **companyRequest** | **CompanyRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this company. | defaults to undefined|


### Return type

**Company**

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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
    PatchedProfileRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let patchedProfileRequest: PatchedProfileRequest; // (optional)

const { status, data } = await apiInstance.accountProfilePartialUpdate(
    patchedProfileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedProfileRequest** | **PatchedProfileRequest**|  | |


### Return type

**Profile**

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **accountProfileUpdate**
> Profile accountProfileUpdate(profileRequest)

Manage your profile data

### Example

```typescript
import {
    AccountApi,
    Configuration,
    ProfileRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let profileRequest: ProfileRequest; //

const { status, data } = await apiInstance.accountProfileUpdate(
    profileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **profileRequest** | **ProfileRequest**|  | |


### Return type

**Profile**

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

# **accountSshKeysCreate**
> SSHKey accountSshKeysCreate(sSHKeyRequest)

Account context + IAM role enforcement for the account residue: billing identity (profile/companies/email history) is owner-only account state, SSH keys are account infra, tokens stay actor-owned.

### Example

```typescript
import {
    AccountApi,
    Configuration,
    SSHKeyRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let sSHKeyRequest: SSHKeyRequest; //

const { status, data } = await apiInstance.accountSshKeysCreate(
    sSHKeyRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sSHKeyRequest** | **SSHKeyRequest**|  | |


### Return type

**SSHKey**

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

# **accountSshKeysDestroy**
> accountSshKeysDestroy()

Account context + IAM role enforcement for the account residue: billing identity (profile/companies/email history) is owner-only account state, SSH keys are account infra, tokens stay actor-owned.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

Account context + IAM role enforcement for the account residue: billing identity (profile/companies/email history) is owner-only account state, SSH keys are account infra, tokens stay actor-owned.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

Account context + IAM role enforcement for the account residue: billing identity (profile/companies/email history) is owner-only account state, SSH keys are account infra, tokens stay actor-owned.

### Example

```typescript
import {
    AccountApi,
    Configuration,
    PatchedSSHKeyUpdateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: string; // (default to undefined)
let patchedSSHKeyUpdateRequest: PatchedSSHKeyUpdateRequest; // (optional)

const { status, data } = await apiInstance.accountSshKeysPartialUpdate(
    id,
    patchedSSHKeyUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedSSHKeyUpdateRequest** | **PatchedSSHKeyUpdateRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**SSHKey**

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

# **accountSshKeysRetrieve**
> SSHKey accountSshKeysRetrieve()

Account context + IAM role enforcement for the account residue: billing identity (profile/companies/email history) is owner-only account state, SSH keys are account infra, tokens stay actor-owned.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

Account context + IAM role enforcement for the account residue: billing identity (profile/companies/email history) is owner-only account state, SSH keys are account infra, tokens stay actor-owned.

### Example

```typescript
import {
    AccountApi,
    Configuration,
    SSHKeyUpdateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AccountApi(configuration);

let id: string; // (default to undefined)
let sSHKeyUpdateRequest: SSHKeyUpdateRequest; // (optional)

const { status, data } = await apiInstance.accountSshKeysUpdate(
    id,
    sSHKeyUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sSHKeyUpdateRequest** | **SSHKeyUpdateRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**SSHKey**

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

