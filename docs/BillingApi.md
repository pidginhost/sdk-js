# BillingApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**billingDepositsCreate**](#billingdepositscreate) | **POST** /api/billing/deposits/ | |
|[**billingDepositsCreate2**](#billingdepositscreate2) | **POST** /api/v1/billing/deposits/ | |
|[**billingDepositsList**](#billingdepositslist) | **GET** /api/billing/deposits/ | |
|[**billingDepositsList2**](#billingdepositslist2) | **GET** /api/v1/billing/deposits/ | |
|[**billingDepositsRetrieve**](#billingdepositsretrieve) | **GET** /api/billing/deposits/{id}/ | |
|[**billingDepositsRetrieve2**](#billingdepositsretrieve2) | **GET** /api/v1/billing/deposits/{id}/ | |
|[**billingFundsList**](#billingfundslist) | **GET** /api/billing/funds/ | |
|[**billingFundsList2**](#billingfundslist2) | **GET** /api/v1/billing/funds/ | |
|[**billingFundsLogList**](#billingfundsloglist) | **GET** /api/billing/funds-log/ | |
|[**billingFundsLogList2**](#billingfundsloglist2) | **GET** /api/v1/billing/funds-log/ | |
|[**billingFundsNotificationSettingsCreate**](#billingfundsnotificationsettingscreate) | **POST** /api/billing/funds/notification-settings/ | |
|[**billingFundsNotificationSettingsCreate2**](#billingfundsnotificationsettingscreate2) | **POST** /api/v1/billing/funds/notification-settings/ | |
|[**billingInvoicesList**](#billinginvoiceslist) | **GET** /api/billing/invoices/ | |
|[**billingInvoicesList2**](#billinginvoiceslist2) | **GET** /api/v1/billing/invoices/ | |
|[**billingInvoicesPayWithFundsCreate**](#billinginvoicespaywithfundscreate) | **POST** /api/billing/invoices/{id}/pay-with-funds/ | |
|[**billingInvoicesPayWithFundsCreate2**](#billinginvoicespaywithfundscreate2) | **POST** /api/v1/billing/invoices/{id}/pay-with-funds/ | |
|[**billingInvoicesPdfRetrieve**](#billinginvoicespdfretrieve) | **GET** /api/billing/invoices/{id}/pdf/ | |
|[**billingInvoicesPdfRetrieve2**](#billinginvoicespdfretrieve2) | **GET** /api/v1/billing/invoices/{id}/pdf/ | |
|[**billingInvoicesRetrieve**](#billinginvoicesretrieve) | **GET** /api/billing/invoices/{id}/ | |
|[**billingInvoicesRetrieve2**](#billinginvoicesretrieve2) | **GET** /api/v1/billing/invoices/{id}/ | |
|[**billingServicesCancelCreate**](#billingservicescancelcreate) | **POST** /api/billing/services/{id}/cancel/ | |
|[**billingServicesCancelCreate2**](#billingservicescancelcreate2) | **POST** /api/v1/billing/services/{id}/cancel/ | |
|[**billingServicesChangeBillingCycleCreate**](#billingserviceschangebillingcyclecreate) | **POST** /api/billing/services/{id}/change-billing-cycle/ | |
|[**billingServicesChangeBillingCycleCreate2**](#billingserviceschangebillingcyclecreate2) | **POST** /api/v1/billing/services/{id}/change-billing-cycle/ | |
|[**billingServicesChangeCompanyCreate**](#billingserviceschangecompanycreate) | **POST** /api/billing/services/{id}/change-company/ | |
|[**billingServicesChangeCompanyCreate2**](#billingserviceschangecompanycreate2) | **POST** /api/v1/billing/services/{id}/change-company/ | |
|[**billingServicesList**](#billingserviceslist) | **GET** /api/billing/services/ | |
|[**billingServicesList2**](#billingserviceslist2) | **GET** /api/v1/billing/services/ | |
|[**billingServicesRetrieve**](#billingservicesretrieve) | **GET** /api/billing/services/{id}/ | |
|[**billingServicesRetrieve2**](#billingservicesretrieve2) | **GET** /api/v1/billing/services/{id}/ | |
|[**billingServicesToggleAutoPaymentCreate**](#billingservicestoggleautopaymentcreate) | **POST** /api/billing/services/{id}/toggle-auto-payment/ | |
|[**billingServicesToggleAutoPaymentCreate2**](#billingservicestoggleautopaymentcreate2) | **POST** /api/v1/billing/services/{id}/toggle-auto-payment/ | |
|[**billingSubscriptionsList**](#billingsubscriptionslist) | **GET** /api/billing/subscriptions/ | |
|[**billingSubscriptionsList2**](#billingsubscriptionslist2) | **GET** /api/v1/billing/subscriptions/ | |
|[**billingSubscriptionsRetrieve**](#billingsubscriptionsretrieve) | **GET** /api/billing/subscriptions/{id}/ | |
|[**billingSubscriptionsRetrieve2**](#billingsubscriptionsretrieve2) | **GET** /api/v1/billing/subscriptions/{id}/ | |

# **billingDepositsCreate**
> Deposit billingDepositsCreate(depositCreate)

Create a new funds deposit.

### Example

```typescript
import {
    BillingApi,
    Configuration,
    DepositCreate
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let depositCreate: DepositCreate; //

const { status, data } = await apiInstance.billingDepositsCreate(
    depositCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **depositCreate** | **DepositCreate**|  | |


### Return type

**Deposit**

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

# **billingDepositsCreate2**
> Deposit billingDepositsCreate2(depositCreate)

Create a new funds deposit.

### Example

```typescript
import {
    BillingApi,
    Configuration,
    DepositCreate
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let depositCreate: DepositCreate; //

const { status, data } = await apiInstance.billingDepositsCreate2(
    depositCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **depositCreate** | **DepositCreate**|  | |


### Return type

**Deposit**

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

# **billingDepositsList**
> PaginatedDepositList billingDepositsList()

List, create, and retrieve fund deposits.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.billingDepositsList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedDepositList**

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

# **billingDepositsList2**
> PaginatedDepositList billingDepositsList2()

List, create, and retrieve fund deposits.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.billingDepositsList2(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedDepositList**

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

# **billingDepositsRetrieve**
> Deposit billingDepositsRetrieve()

List, create, and retrieve fund deposits.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingDepositsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Deposit**

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

# **billingDepositsRetrieve2**
> Deposit billingDepositsRetrieve2()

List, create, and retrieve fund deposits.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingDepositsRetrieve2(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Deposit**

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

# **billingFundsList**
> Array<FundsBalanceResponse> billingFundsList()

Get current funds balance and notification settings.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

const { status, data } = await apiInstance.billingFundsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FundsBalanceResponse>**

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

# **billingFundsList2**
> Array<FundsBalanceResponse> billingFundsList2()

Get current funds balance and notification settings.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

const { status, data } = await apiInstance.billingFundsList2();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FundsBalanceResponse>**

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

# **billingFundsLogList**
> PaginatedFundsLogList billingFundsLogList()

List funds log entries for the authenticated user.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.billingFundsLogList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedFundsLogList**

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

# **billingFundsLogList2**
> PaginatedFundsLogList billingFundsLogList2()

List funds log entries for the authenticated user.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.billingFundsLogList2(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedFundsLogList**

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

# **billingFundsNotificationSettingsCreate**
> NotificationSettingsResponse billingFundsNotificationSettingsCreate(lowBalanceSettings)

Update low-balance notification settings.

### Example

```typescript
import {
    BillingApi,
    Configuration,
    LowBalanceSettings
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let lowBalanceSettings: LowBalanceSettings; //

const { status, data } = await apiInstance.billingFundsNotificationSettingsCreate(
    lowBalanceSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lowBalanceSettings** | **LowBalanceSettings**|  | |


### Return type

**NotificationSettingsResponse**

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

# **billingFundsNotificationSettingsCreate2**
> NotificationSettingsResponse billingFundsNotificationSettingsCreate2(lowBalanceSettings)

Update low-balance notification settings.

### Example

```typescript
import {
    BillingApi,
    Configuration,
    LowBalanceSettings
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let lowBalanceSettings: LowBalanceSettings; //

const { status, data } = await apiInstance.billingFundsNotificationSettingsCreate2(
    lowBalanceSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lowBalanceSettings** | **LowBalanceSettings**|  | |


### Return type

**NotificationSettingsResponse**

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

# **billingInvoicesList**
> PaginatedInvoiceListList billingInvoicesList()

List and retrieve invoices. Pay with funds or download PDF.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.billingInvoicesList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedInvoiceListList**

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

# **billingInvoicesList2**
> PaginatedInvoiceListList billingInvoicesList2()

List and retrieve invoices. Pay with funds or download PDF.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.billingInvoicesList2(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedInvoiceListList**

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

# **billingInvoicesPayWithFundsCreate**
> PayWithFundsResponse billingInvoicesPayWithFundsCreate()

Pay an unpaid/overdue invoice using account funds.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingInvoicesPayWithFundsCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PayWithFundsResponse**

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

# **billingInvoicesPayWithFundsCreate2**
> PayWithFundsResponse billingInvoicesPayWithFundsCreate2()

Pay an unpaid/overdue invoice using account funds.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingInvoicesPayWithFundsCreate2(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PayWithFundsResponse**

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

# **billingInvoicesPdfRetrieve**
> File billingInvoicesPdfRetrieve()

Download invoice PDF. Use ?type=proforma or ?type=fiscal.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingInvoicesPdfRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

# **billingInvoicesPdfRetrieve2**
> File billingInvoicesPdfRetrieve2()

Download invoice PDF. Use ?type=proforma or ?type=fiscal.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingInvoicesPdfRetrieve2(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


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

# **billingInvoicesRetrieve**
> InvoiceDetail billingInvoicesRetrieve()

List and retrieve invoices. Pay with funds or download PDF.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingInvoicesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**InvoiceDetail**

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

# **billingInvoicesRetrieve2**
> InvoiceDetail billingInvoicesRetrieve2()

List and retrieve invoices. Pay with funds or download PDF.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingInvoicesRetrieve2(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**InvoiceDetail**

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

# **billingServicesCancelCreate**
> CancelServiceResponse billingServicesCancelCreate()

Cancel a service. Pending services are cancelled immediately; active services are terminated.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingServicesCancelCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CancelServiceResponse**

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

# **billingServicesCancelCreate2**
> CancelServiceResponse billingServicesCancelCreate2()

Cancel a service. Pending services are cancelled immediately; active services are terminated.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingServicesCancelCreate2(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**CancelServiceResponse**

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

# **billingServicesChangeBillingCycleCreate**
> ChangeBillingCycleResponse billingServicesChangeBillingCycleCreate(changeBillingCycle)

Change the billing cycle of a service.

### Example

```typescript
import {
    BillingApi,
    Configuration,
    ChangeBillingCycle
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)
let changeBillingCycle: ChangeBillingCycle; //

const { status, data } = await apiInstance.billingServicesChangeBillingCycleCreate(
    id,
    changeBillingCycle
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeBillingCycle** | **ChangeBillingCycle**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChangeBillingCycleResponse**

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

# **billingServicesChangeBillingCycleCreate2**
> ChangeBillingCycleResponse billingServicesChangeBillingCycleCreate2(changeBillingCycle)

Change the billing cycle of a service.

### Example

```typescript
import {
    BillingApi,
    Configuration,
    ChangeBillingCycle
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)
let changeBillingCycle: ChangeBillingCycle; //

const { status, data } = await apiInstance.billingServicesChangeBillingCycleCreate2(
    id,
    changeBillingCycle
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeBillingCycle** | **ChangeBillingCycle**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChangeBillingCycleResponse**

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

# **billingServicesChangeCompanyCreate**
> ChangeCompanyResponse billingServicesChangeCompanyCreate()

Change the company associated with a service.

### Example

```typescript
import {
    BillingApi,
    Configuration,
    ChangeCompany
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)
let changeCompany: ChangeCompany; // (optional)

const { status, data } = await apiInstance.billingServicesChangeCompanyCreate(
    id,
    changeCompany
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeCompany** | **ChangeCompany**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChangeCompanyResponse**

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

# **billingServicesChangeCompanyCreate2**
> ChangeCompanyResponse billingServicesChangeCompanyCreate2()

Change the company associated with a service.

### Example

```typescript
import {
    BillingApi,
    Configuration,
    ChangeCompany
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)
let changeCompany: ChangeCompany; // (optional)

const { status, data } = await apiInstance.billingServicesChangeCompanyCreate2(
    id,
    changeCompany
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **changeCompany** | **ChangeCompany**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ChangeCompanyResponse**

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

# **billingServicesList**
> PaginatedServiceListList billingServicesList()

List and manage billing services.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.billingServicesList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedServiceListList**

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

# **billingServicesList2**
> PaginatedServiceListList billingServicesList2()

List and manage billing services.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.billingServicesList2(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedServiceListList**

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

# **billingServicesRetrieve**
> ServiceList billingServicesRetrieve()

List and manage billing services.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingServicesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ServiceList**

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

# **billingServicesRetrieve2**
> ServiceList billingServicesRetrieve2()

List and manage billing services.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingServicesRetrieve2(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ServiceList**

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

# **billingServicesToggleAutoPaymentCreate**
> ToggleAutoPaymentResponse billingServicesToggleAutoPaymentCreate()

Toggle automatic payment for a service.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingServicesToggleAutoPaymentCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ToggleAutoPaymentResponse**

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

# **billingServicesToggleAutoPaymentCreate2**
> ToggleAutoPaymentResponse billingServicesToggleAutoPaymentCreate2()

Toggle automatic payment for a service.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingServicesToggleAutoPaymentCreate2(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ToggleAutoPaymentResponse**

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

# **billingSubscriptionsList**
> PaginatedSubscriptionList billingSubscriptionsList()

List and retrieve subscriptions.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.billingSubscriptionsList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedSubscriptionList**

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

# **billingSubscriptionsList2**
> PaginatedSubscriptionList billingSubscriptionsList2()

List and retrieve subscriptions.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.billingSubscriptionsList2(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedSubscriptionList**

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

# **billingSubscriptionsRetrieve**
> Subscription billingSubscriptionsRetrieve()

List and retrieve subscriptions.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingSubscriptionsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Subscription**

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

# **billingSubscriptionsRetrieve2**
> Subscription billingSubscriptionsRetrieve2()

List and retrieve subscriptions.

### Example

```typescript
import {
    BillingApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new BillingApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.billingSubscriptionsRetrieve2(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Subscription**

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

