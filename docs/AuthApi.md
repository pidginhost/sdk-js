# AuthApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**authCliSessionCreate**](#authclisessioncreate) | **POST** /api/auth/cli-session/ | |
|[**authCliSessionRetrieve**](#authclisessionretrieve) | **GET** /api/auth/cli-session/{session_id}/ | |

# **authCliSessionCreate**
> CLISessionCreateResponse authCliSessionCreate()

Create a CLI authentication session for browser-based approval

### Example

```typescript
import {
    AuthApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

const { status, data } = await apiInstance.authCliSessionCreate();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**CLISessionCreateResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **authCliSessionRetrieve**
> CLISessionPollResponse authCliSessionRetrieve()

Poll a CLI authentication session. Returns token when approved.

### Example

```typescript
import {
    AuthApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new AuthApi(configuration);

let sessionId: string; // (default to undefined)

const { status, data } = await apiInstance.authCliSessionRetrieve(
    sessionId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **sessionId** | [**string**] |  | defaults to undefined|


### Return type

**CLISessionPollResponse**

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

