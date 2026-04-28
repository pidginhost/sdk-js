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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicatedServersPowerCreate**
> PowerActionResponse dedicatedServersPowerCreate(powerAction)

Execute a power management action (start, stop, restart, shutdown).

### Example

```typescript
import {
    DedicatedApi,
    Configuration,
    PowerAction
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedApi(configuration);

let id: string; // (default to undefined)
let powerAction: PowerAction; //

const { status, data } = await apiInstance.dedicatedServersPowerCreate(
    id,
    powerAction
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **powerAction** | **PowerAction**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PowerActionResponse**

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

# **dedicatedServersRdnsCreate**
> RDNSUpdateResponse dedicatedServersRdnsCreate(dedicatedRDNS)

Update reverse DNS for a dedicated server IP.

### Example

```typescript
import {
    DedicatedApi,
    Configuration,
    DedicatedRDNS
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedApi(configuration);

let id: string; // (default to undefined)
let dedicatedRDNS: DedicatedRDNS; //

const { status, data } = await apiInstance.dedicatedServersRdnsCreate(
    id,
    dedicatedRDNS
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dedicatedRDNS** | **DedicatedRDNS**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**RDNSUpdateResponse**

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

# **dedicatedServersReinstallCreate**
> ReinstallResponse dedicatedServersReinstallCreate(reinstall)

Reinstall the dedicated server with a new operating system.

### Example

```typescript
import {
    DedicatedApi,
    Configuration,
    Reinstall
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedApi(configuration);

let id: string; // (default to undefined)
let reinstall: Reinstall; //

const { status, data } = await apiInstance.dedicatedServersReinstallCreate(
    id,
    reinstall
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reinstall** | **Reinstall**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ReinstallResponse**

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

