# SchemaApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**schemaRetrieve**](#schemaretrieve) | **GET** /api/schema/ | |

# **schemaRetrieve**
> { [key: string]: any; } schemaRetrieve()

OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json

### Example

```typescript
import {
    SchemaApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new SchemaApi(configuration);

let format: 'json' | 'yaml'; // (optional) (default to undefined)
let lang: 'en' | 'ro'; // (optional) (default to undefined)

const { status, data } = await apiInstance.schemaRetrieve(
    format,
    lang
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **format** | [**&#39;json&#39; | &#39;yaml&#39;**]**Array<&#39;json&#39; &#124; &#39;yaml&#39;>** |  | (optional) defaults to undefined|
| **lang** | [**&#39;en&#39; | &#39;ro&#39;**]**Array<&#39;en&#39; &#124; &#39;ro&#39;>** |  | (optional) defaults to undefined|


### Return type

**{ [key: string]: any; }**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.oai.openapi, application/yaml, application/vnd.oai.openapi+json, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

