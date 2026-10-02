# FreednsApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**freednsDnsActivateCreate**](#freednsdnsactivatecreate) | **POST** /api/freedns/dns/activate/ | |
|[**freednsDnsAddRecordCreate**](#freednsdnsaddrecordcreate) | **POST** /api/freedns/dns/add-record/ | |
|[**freednsDnsDeactivateCreate**](#freednsdnsdeactivatecreate) | **POST** /api/freedns/dns/deactivate/ | |
|[**freednsDnsDeleteRecordCreate**](#freednsdnsdeleterecordcreate) | **POST** /api/freedns/dns/delete-record/ | |
|[**freednsDnsList**](#freednsdnslist) | **GET** /api/freedns/dns/ | |
|[**freednsDnsRecordsList**](#freednsdnsrecordslist) | **GET** /api/freedns/dns/records/ | |

# **freednsDnsActivateCreate**
> ActivateFreeDNSResponse freednsDnsActivateCreate(activateFreeDNSRequest)

Activate FreeDNS for a domain. For internal domains the nameservers are changed to PidginHost NS. A default zone is created on the cPanel node.

### Example

```typescript
import {
    FreednsApi,
    Configuration,
    ActivateFreeDNSRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new FreednsApi(configuration);

let activateFreeDNSRequest: ActivateFreeDNSRequest; //

const { status, data } = await apiInstance.freednsDnsActivateCreate(
    activateFreeDNSRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **activateFreeDNSRequest** | **ActivateFreeDNSRequest**|  | |


### Return type

**ActivateFreeDNSResponse**

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

# **freednsDnsAddRecordCreate**
> DNSRecordMutateResponse freednsDnsAddRecordCreate(dNSRecordCreateRequest)

Add or edit a DNS record. To edit an existing record, include the \'line\' field with its line number. Required type-specific fields depend on \'type\': A/AAAA → address; CNAME → cname; MX → preference, exchange; SRV → priority, weight, port, target; TXT → txtdata, unencoded; TYPE257 (CAA) → flag, tag, value.

### Example

```typescript
import {
    FreednsApi,
    Configuration,
    DNSRecordCreateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new FreednsApi(configuration);

let domain: string; //Domain name or PK. (default to undefined)
let source: string; //\'internal\' or \'external\'. (default to undefined)
let dNSRecordCreateRequest: DNSRecordCreateRequest; //

const { status, data } = await apiInstance.freednsDnsAddRecordCreate(
    domain,
    source,
    dNSRecordCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dNSRecordCreateRequest** | **DNSRecordCreateRequest**|  | |
| **domain** | [**string**] | Domain name or PK. | defaults to undefined|
| **source** | [**string**] | \&#39;internal\&#39; or \&#39;external\&#39;. | defaults to undefined|


### Return type

**DNSRecordMutateResponse**

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

# **freednsDnsDeactivateCreate**
> DeactivateFreeDNSResponse freednsDnsDeactivateCreate(deactivateFreeDNSRequest)

Deactivate FreeDNS for a domain. The DNS zone is removed from the cPanel node and, for internal domains, the original nameservers are restored.

### Example

```typescript
import {
    FreednsApi,
    Configuration,
    DeactivateFreeDNSRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new FreednsApi(configuration);

let deactivateFreeDNSRequest: DeactivateFreeDNSRequest; //

const { status, data } = await apiInstance.freednsDnsDeactivateCreate(
    deactivateFreeDNSRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deactivateFreeDNSRequest** | **DeactivateFreeDNSRequest**|  | |


### Return type

**DeactivateFreeDNSResponse**

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

# **freednsDnsDeleteRecordCreate**
> DeleteRecordResponse freednsDnsDeleteRecordCreate(deleteRecordRequest)

Delete a DNS record by its line number.

### Example

```typescript
import {
    FreednsApi,
    Configuration,
    DeleteRecordRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new FreednsApi(configuration);

let domain: string; //Domain name or PK. (default to undefined)
let source: string; //\'internal\' or \'external\'. (default to undefined)
let deleteRecordRequest: DeleteRecordRequest; //

const { status, data } = await apiInstance.freednsDnsDeleteRecordCreate(
    domain,
    source,
    deleteRecordRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteRecordRequest** | **DeleteRecordRequest**|  | |
| **domain** | [**string**] | Domain name or PK. | defaults to undefined|
| **source** | [**string**] | \&#39;internal\&#39; or \&#39;external\&#39;. | defaults to undefined|


### Return type

**DeleteRecordResponse**

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

# **freednsDnsList**
> Array<FreeDNSDomain> freednsDnsList()

List all domains with active FreeDNS for the authenticated user.

### Example

```typescript
import {
    FreednsApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new FreednsApi(configuration);

const { status, data } = await apiInstance.freednsDnsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FreeDNSDomain>**

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

# **freednsDnsRecordsList**
> Array<DNSRecord> freednsDnsRecordsList()

List all DNS records for a domain with active FreeDNS.

### Example

```typescript
import {
    FreednsApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new FreednsApi(configuration);

let domain: string; //Domain name or PK. (default to undefined)
let source: string; //\'internal\' or \'external\'. (default to undefined)

const { status, data } = await apiInstance.freednsDnsRecordsList(
    domain,
    source
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **domain** | [**string**] | Domain name or PK. | defaults to undefined|
| **source** | [**string**] | \&#39;internal\&#39; or \&#39;external\&#39;. | defaults to undefined|


### Return type

**Array<DNSRecord>**

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

