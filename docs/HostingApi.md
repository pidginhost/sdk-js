# HostingApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**hostingHostingChangePasswordCreate**](#hostinghostingchangepasswordcreate) | **POST** /api/hosting/hosting/{id}/change-password/ | |
|[**hostingHostingChangePasswordCreate2**](#hostinghostingchangepasswordcreate2) | **POST** /api/v1/hosting/hosting/{id}/change-password/ | |
|[**hostingHostingList**](#hostinghostinglist) | **GET** /api/hosting/hosting/ | |
|[**hostingHostingList2**](#hostinghostinglist2) | **GET** /api/v1/hosting/hosting/ | |
|[**hostingHostingRetrieve**](#hostinghostingretrieve) | **GET** /api/hosting/hosting/{id}/ | |
|[**hostingHostingRetrieve2**](#hostinghostingretrieve2) | **GET** /api/v1/hosting/hosting/{id}/ | |

# **hostingHostingChangePasswordCreate**
> HostingChangePasswordResponse hostingHostingChangePasswordCreate(changePassword)

Change the cPanel password for this hosting service.

### Example

```typescript
import {
    HostingApi,
    Configuration,
    ChangePassword
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new HostingApi(configuration);

let id: string; // (default to undefined)
let changePassword: ChangePassword; //

const { status, data } = await apiInstance.hostingHostingChangePasswordCreate(
    id,
    changePassword
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changePassword** | **ChangePassword**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**HostingChangePasswordResponse**

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

# **hostingHostingChangePasswordCreate2**
> HostingChangePasswordResponse hostingHostingChangePasswordCreate2(changePassword)

Change the cPanel password for this hosting service.

### Example

```typescript
import {
    HostingApi,
    Configuration,
    ChangePassword
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new HostingApi(configuration);

let id: string; // (default to undefined)
let changePassword: ChangePassword; //

const { status, data } = await apiInstance.hostingHostingChangePasswordCreate2(
    id,
    changePassword
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changePassword** | **ChangePassword**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**HostingChangePasswordResponse**

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

# **hostingHostingList**
> PaginatedHostingServiceList hostingHostingList()

List and manage cPanel/shared hosting services.

### Example

```typescript
import {
    HostingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new HostingApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.hostingHostingList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedHostingServiceList**

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

# **hostingHostingList2**
> PaginatedHostingServiceList hostingHostingList2()

List and manage cPanel/shared hosting services.

### Example

```typescript
import {
    HostingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new HostingApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.hostingHostingList2(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedHostingServiceList**

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

# **hostingHostingRetrieve**
> HostingService hostingHostingRetrieve()

List and manage cPanel/shared hosting services.

### Example

```typescript
import {
    HostingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new HostingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.hostingHostingRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**HostingService**

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

# **hostingHostingRetrieve2**
> HostingService hostingHostingRetrieve2()

List and manage cPanel/shared hosting services.

### Example

```typescript
import {
    HostingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new HostingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.hostingHostingRetrieve2(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**HostingService**

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

