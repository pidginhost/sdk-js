# SupportApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**supportDepartmentsList**](#supportdepartmentslist) | **GET** /api/support/departments/ | |
|[**supportTicketsCloseCreate**](#supportticketsclosecreate) | **POST** /api/support/tickets/{id}/close/ | |
|[**supportTicketsCreate**](#supportticketscreate) | **POST** /api/support/tickets/ | |
|[**supportTicketsList**](#supportticketslist) | **GET** /api/support/tickets/ | |
|[**supportTicketsMessagesAttachmentRetrieve**](#supportticketsmessagesattachmentretrieve) | **GET** /api/support/tickets/{id}/messages/{message_id}/attachment/ | |
|[**supportTicketsReopenCreate**](#supportticketsreopencreate) | **POST** /api/support/tickets/{id}/reopen/ | |
|[**supportTicketsReplyCreate**](#supportticketsreplycreate) | **POST** /api/support/tickets/{id}/reply/ | |
|[**supportTicketsRetrieve**](#supportticketsretrieve) | **GET** /api/support/tickets/{id}/ | |

# **supportDepartmentsList**
> Array<Department> supportDepartmentsList()

List available support departments.

### Example

```typescript
import {
    SupportApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

const { status, data } = await apiInstance.supportDepartmentsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Department>**

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

# **supportTicketsCloseCreate**
> TicketCloseResponse supportTicketsCloseCreate()

Close a ticket.

### Example

```typescript
import {
    SupportApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.supportTicketsCloseCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**TicketCloseResponse**

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

# **supportTicketsCreate**
> TicketDetail supportTicketsCreate(ticketCreate)

Create a new support ticket.

### Example

```typescript
import {
    SupportApi,
    Configuration,
    TicketCreate
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

let ticketCreate: TicketCreate; //

const { status, data } = await apiInstance.supportTicketsCreate(
    ticketCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ticketCreate** | **TicketCreate**|  | |


### Return type

**TicketDetail**

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

# **supportTicketsList**
> PaginatedTicketListList supportTicketsList()

List, create, and manage support tickets.

### Example

```typescript
import {
    SupportApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.supportTicketsList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedTicketListList**

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

# **supportTicketsMessagesAttachmentRetrieve**
> File supportTicketsMessagesAttachmentRetrieve()

Download an attachment from a ticket message.

### Example

```typescript
import {
    SupportApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

let id: string; // (default to undefined)
let messageId: string; // (default to undefined)

const { status, data } = await apiInstance.supportTicketsMessagesAttachmentRetrieve(
    id,
    messageId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **messageId** | [**string**] |  | defaults to undefined|


### Return type

**File**

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

# **supportTicketsReopenCreate**
> TicketReopenResponse supportTicketsReopenCreate()

Reopen a closed ticket.

### Example

```typescript
import {
    SupportApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.supportTicketsReopenCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**TicketReopenResponse**

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

# **supportTicketsReplyCreate**
> TicketReplyResponse supportTicketsReplyCreate(ticketReply)

Reply to a ticket.

### Example

```typescript
import {
    SupportApi,
    Configuration,
    TicketReply
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

let id: string; // (default to undefined)
let ticketReply: TicketReply; //

const { status, data } = await apiInstance.supportTicketsReplyCreate(
    id,
    ticketReply
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ticketReply** | **TicketReply**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**TicketReplyResponse**

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

# **supportTicketsRetrieve**
> TicketDetail supportTicketsRetrieve()

List, create, and manage support tickets.

### Example

```typescript
import {
    SupportApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new SupportApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.supportTicketsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**TicketDetail**

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

