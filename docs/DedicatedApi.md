# DedicatedApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**dedicatedServersList**](#dedicatedserverslist) | **GET** /api/dedicated/servers/ | |
|[**dedicatedServersPowerCreate**](#dedicatedserverspowercreate) | **POST** /api/dedicated/servers/{id}/power/ | |
|[**dedicatedServersRdnsCreate**](#dedicatedserversrdnscreate) | **POST** /api/dedicated/servers/{id}/rdns/ | |
|[**dedicatedServersReinstallCreate**](#dedicatedserversreinstallcreate) | **POST** /api/dedicated/servers/{id}/reinstall/ | |
|[**dedicatedServersRetrieve**](#dedicatedserversretrieve) | **GET** /api/dedicated/servers/{id}/ | |

# **dedicatedServersList**
> PaginatedDedicatedServerList dedicatedServersList()

List and manage dedicated server services.

### Example

```typescript
import {
    DedicatedApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.dedicatedServersList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedDedicatedServerList**

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

# **dedicatedServersPowerCreate**
> PowerActionResponse dedicatedServersPowerCreate(powerActionRequest)

Execute a power management action (start, stop, restart, shutdown).

### Example

```typescript
import {
    DedicatedApi,
    Configuration,
    PowerActionRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedApi(configuration);

let id: string; // (default to undefined)
let powerActionRequest: PowerActionRequest; //

const { status, data } = await apiInstance.dedicatedServersPowerCreate(
    id,
    powerActionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **powerActionRequest** | **PowerActionRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PowerActionResponse**

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

# **dedicatedServersRdnsCreate**
> RDNSUpdateResponse dedicatedServersRdnsCreate(dedicatedRDNSRequest)

Update reverse DNS for a dedicated server IP.

### Example

```typescript
import {
    DedicatedApi,
    Configuration,
    DedicatedRDNSRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedApi(configuration);

let id: string; // (default to undefined)
let dedicatedRDNSRequest: DedicatedRDNSRequest; //

const { status, data } = await apiInstance.dedicatedServersRdnsCreate(
    id,
    dedicatedRDNSRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dedicatedRDNSRequest** | **DedicatedRDNSRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RDNSUpdateResponse**

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

# **dedicatedServersReinstallCreate**
> ReinstallResponse dedicatedServersReinstallCreate(reinstallRequest)

Reinstall the dedicated server with a new operating system.

### Example

```typescript
import {
    DedicatedApi,
    Configuration,
    ReinstallRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedApi(configuration);

let id: string; // (default to undefined)
let reinstallRequest: ReinstallRequest; //

const { status, data } = await apiInstance.dedicatedServersReinstallCreate(
    id,
    reinstallRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reinstallRequest** | **ReinstallRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ReinstallResponse**

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

# **dedicatedServersRetrieve**
> DedicatedServer dedicatedServersRetrieve()

List and manage dedicated server services.

### Example

```typescript
import {
    DedicatedApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.dedicatedServersRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**DedicatedServer**

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

