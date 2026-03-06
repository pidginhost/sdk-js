# FreednsApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**freednsDnsActivateCreate**](#freednsdnsactivatecreate) | **POST** /api/freedns/dns/activate/ | |
|[**freednsDnsActivateCreate2**](#freednsdnsactivatecreate2) | **POST** /api/v1/freedns/dns/activate/ | |
|[**freednsDnsAddRecordCreate**](#freednsdnsaddrecordcreate) | **POST** /api/freedns/dns/add-record/ | |
|[**freednsDnsAddRecordCreate2**](#freednsdnsaddrecordcreate2) | **POST** /api/v1/freedns/dns/add-record/ | |
|[**freednsDnsDeactivateCreate**](#freednsdnsdeactivatecreate) | **POST** /api/freedns/dns/deactivate/ | |
|[**freednsDnsDeactivateCreate2**](#freednsdnsdeactivatecreate2) | **POST** /api/v1/freedns/dns/deactivate/ | |
|[**freednsDnsDeleteRecordCreate**](#freednsdnsdeleterecordcreate) | **POST** /api/freedns/dns/delete-record/ | |
|[**freednsDnsDeleteRecordCreate2**](#freednsdnsdeleterecordcreate2) | **POST** /api/v1/freedns/dns/delete-record/ | |
|[**freednsDnsList**](#freednsdnslist) | **GET** /api/freedns/dns/ | |
|[**freednsDnsList2**](#freednsdnslist2) | **GET** /api/v1/freedns/dns/ | |
|[**freednsDnsRecordsList**](#freednsdnsrecordslist) | **GET** /api/freedns/dns/records/ | |
|[**freednsDnsRecordsList2**](#freednsdnsrecordslist2) | **GET** /api/v1/freedns/dns/records/ | |

# **freednsDnsActivateCreate**
> ActivateFreeDNSResponse freednsDnsActivateCreate(activateFreeDNS)

Activate FreeDNS for a domain. For internal domains the nameservers are changed to PidginHost NS. A default zone is created on the cPanel node.

### Example

```typescript
import {
    FreednsApi,
    Configuration,
    ActivateFreeDNS
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new FreednsApi(configuration);

let activateFreeDNS: ActivateFreeDNS; //

const { status, data } = await apiInstance.freednsDnsActivateCreate(
    activateFreeDNS
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **activateFreeDNS** | **ActivateFreeDNS**|  | |


### Return type

**ActivateFreeDNSResponse**

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

# **freednsDnsActivateCreate2**
> ActivateFreeDNSResponse freednsDnsActivateCreate2(activateFreeDNS)

Activate FreeDNS for a domain. For internal domains the nameservers are changed to PidginHost NS. A default zone is created on the cPanel node.

### Example

```typescript
import {
    FreednsApi,
    Configuration,
    ActivateFreeDNS
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new FreednsApi(configuration);

let activateFreeDNS: ActivateFreeDNS; //

const { status, data } = await apiInstance.freednsDnsActivateCreate2(
    activateFreeDNS
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **activateFreeDNS** | **ActivateFreeDNS**|  | |


### Return type

**ActivateFreeDNSResponse**

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

# **freednsDnsAddRecordCreate**
> DNSRecordMutateResponse freednsDnsAddRecordCreate(dNSRecordCreate)

Add or edit a DNS record. To edit an existing record, include the \'line\' field with its line number. Required type-specific fields depend on \'type\': A/AAAA → address; CNAME → cname; MX → preference, exchange; SRV → priority, weight, port, target; TXT → txtdata, unencoded; TYPE257 (CAA) → flag, tag, value.

### Example

```typescript
import {
    FreednsApi,
    Configuration,
    DNSRecordCreate
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new FreednsApi(configuration);

let domain: string; //Domain name or PK. (default to undefined)
let source: string; //\'internal\' or \'external\'. (default to undefined)
let dNSRecordCreate: DNSRecordCreate; //

const { status, data } = await apiInstance.freednsDnsAddRecordCreate(
    domain,
    source,
    dNSRecordCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dNSRecordCreate** | **DNSRecordCreate**|  | |
| **domain** | [**string**] | Domain name or PK. | defaults to undefined|
| **source** | [**string**] | \&#39;internal\&#39; or \&#39;external\&#39;. | defaults to undefined|


### Return type

**DNSRecordMutateResponse**

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

# **freednsDnsAddRecordCreate2**
> DNSRecordMutateResponse freednsDnsAddRecordCreate2(dNSRecordCreate)

Add or edit a DNS record. To edit an existing record, include the \'line\' field with its line number. Required type-specific fields depend on \'type\': A/AAAA → address; CNAME → cname; MX → preference, exchange; SRV → priority, weight, port, target; TXT → txtdata, unencoded; TYPE257 (CAA) → flag, tag, value.

### Example

```typescript
import {
    FreednsApi,
    Configuration,
    DNSRecordCreate
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new FreednsApi(configuration);

let domain: string; //Domain name or PK. (default to undefined)
let source: string; //\'internal\' or \'external\'. (default to undefined)
let dNSRecordCreate: DNSRecordCreate; //

const { status, data } = await apiInstance.freednsDnsAddRecordCreate2(
    domain,
    source,
    dNSRecordCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dNSRecordCreate** | **DNSRecordCreate**|  | |
| **domain** | [**string**] | Domain name or PK. | defaults to undefined|
| **source** | [**string**] | \&#39;internal\&#39; or \&#39;external\&#39;. | defaults to undefined|


### Return type

**DNSRecordMutateResponse**

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

# **freednsDnsDeactivateCreate**
> DeactivateFreeDNSResponse freednsDnsDeactivateCreate(deactivateFreeDNS)

Deactivate FreeDNS for a domain. The DNS zone is removed from the cPanel node and, for internal domains, the original nameservers are restored.

### Example

```typescript
import {
    FreednsApi,
    Configuration,
    DeactivateFreeDNS
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new FreednsApi(configuration);

let deactivateFreeDNS: DeactivateFreeDNS; //

const { status, data } = await apiInstance.freednsDnsDeactivateCreate(
    deactivateFreeDNS
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deactivateFreeDNS** | **DeactivateFreeDNS**|  | |


### Return type

**DeactivateFreeDNSResponse**

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

# **freednsDnsDeactivateCreate2**
> DeactivateFreeDNSResponse freednsDnsDeactivateCreate2(deactivateFreeDNS)

Deactivate FreeDNS for a domain. The DNS zone is removed from the cPanel node and, for internal domains, the original nameservers are restored.

### Example

```typescript
import {
    FreednsApi,
    Configuration,
    DeactivateFreeDNS
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new FreednsApi(configuration);

let deactivateFreeDNS: DeactivateFreeDNS; //

const { status, data } = await apiInstance.freednsDnsDeactivateCreate2(
    deactivateFreeDNS
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deactivateFreeDNS** | **DeactivateFreeDNS**|  | |


### Return type

**DeactivateFreeDNSResponse**

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

# **freednsDnsDeleteRecordCreate**
> DeleteRecordResponse freednsDnsDeleteRecordCreate(deleteRecord)

Delete a DNS record by its line number.

### Example

```typescript
import {
    FreednsApi,
    Configuration,
    DeleteRecord
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new FreednsApi(configuration);

let domain: string; //Domain name or PK. (default to undefined)
let source: string; //\'internal\' or \'external\'. (default to undefined)
let deleteRecord: DeleteRecord; //

const { status, data } = await apiInstance.freednsDnsDeleteRecordCreate(
    domain,
    source,
    deleteRecord
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteRecord** | **DeleteRecord**|  | |
| **domain** | [**string**] | Domain name or PK. | defaults to undefined|
| **source** | [**string**] | \&#39;internal\&#39; or \&#39;external\&#39;. | defaults to undefined|


### Return type

**DeleteRecordResponse**

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

# **freednsDnsDeleteRecordCreate2**
> DeleteRecordResponse freednsDnsDeleteRecordCreate2(deleteRecord)

Delete a DNS record by its line number.

### Example

```typescript
import {
    FreednsApi,
    Configuration,
    DeleteRecord
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new FreednsApi(configuration);

let domain: string; //Domain name or PK. (default to undefined)
let source: string; //\'internal\' or \'external\'. (default to undefined)
let deleteRecord: DeleteRecord; //

const { status, data } = await apiInstance.freednsDnsDeleteRecordCreate2(
    domain,
    source,
    deleteRecord
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **deleteRecord** | **DeleteRecord**|  | |
| **domain** | [**string**] | Domain name or PK. | defaults to undefined|
| **source** | [**string**] | \&#39;internal\&#39; or \&#39;external\&#39;. | defaults to undefined|


### Return type

**DeleteRecordResponse**

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **freednsDnsList2**
> Array<FreeDNSDomain> freednsDnsList2()

List all domains with active FreeDNS for the authenticated user.

### Example

```typescript
import {
    FreednsApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new FreednsApi(configuration);

const { status, data } = await apiInstance.freednsDnsList2();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FreeDNSDomain>**

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **freednsDnsRecordsList2**
> Array<DNSRecord> freednsDnsRecordsList2()

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

const { status, data } = await apiInstance.freednsDnsRecordsList2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

