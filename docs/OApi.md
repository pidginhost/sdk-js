# OApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**oMobileDashboardRetrieve**](#omobiledashboardretrieve) | **GET** /o/mobile/dashboard/ | |
|[**oMobileSessionRetrieve**](#omobilesessionretrieve) | **GET** /o/mobile/session/ | |
|[**oRegisterCreate**](#oregistercreate) | **POST** /o/register | |

# **oMobileDashboardRetrieve**
> Dashboard oMobileDashboardRetrieve()


### Example

```typescript
import {
    OApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new OApi(configuration);

const { status, data } = await apiInstance.oMobileDashboardRetrieve();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Dashboard**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oMobileSessionRetrieve**
> MobileOAuthSession oMobileSessionRetrieve()


### Example

```typescript
import {
    OApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new OApi(configuration);

const { status, data } = await apiInstance.oMobileSessionRetrieve();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**MobileOAuthSession**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **oRegisterCreate**
> oRegisterCreate()

RFC 7591 dynamic client registration (open, throttled).

### Example

```typescript
import {
    OApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new OApi(configuration);

const { status, data } = await apiInstance.oRegisterCreate();
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

