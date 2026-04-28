# KubernetesApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**kubernetesClusterTypesList**](#kubernetesclustertypeslist) | **GET** /api/kubernetes/cluster-types/ | |
|[**kubernetesClustersConnectVmCreate**](#kubernetesclustersconnectvmcreate) | **POST** /api/kubernetes/clusters/{id}/connect-vm/ | |
|[**kubernetesClustersConnectedVmsRetrieve**](#kubernetesclustersconnectedvmsretrieve) | **GET** /api/kubernetes/clusters/{id}/connected-vms/ | |
|[**kubernetesClustersCreate**](#kubernetesclusterscreate) | **POST** /api/kubernetes/clusters/ | |
|[**kubernetesClustersDestroy**](#kubernetesclustersdestroy) | **DELETE** /api/kubernetes/clusters/{id}/ | |
|[**kubernetesClustersDisconnectVmCreate**](#kubernetesclustersdisconnectvmcreate) | **POST** /api/kubernetes/clusters/{id}/disconnect-vm/ | |
|[**kubernetesClustersEligibleVmsRetrieve**](#kubernetesclusterseligiblevmsretrieve) | **GET** /api/kubernetes/clusters/{id}/eligible-vms/ | |
|[**kubernetesClustersHttproutesCreate**](#kubernetesclustershttproutescreate) | **POST** /api/kubernetes/clusters/{cluster_id}/httproutes/ | |
|[**kubernetesClustersHttproutesDestroy**](#kubernetesclustershttproutesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | |
|[**kubernetesClustersHttproutesPartialUpdate**](#kubernetesclustershttproutespartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | |
|[**kubernetesClustersHttproutesRetrieve**](#kubernetesclustershttproutesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/httproutes/ | |
|[**kubernetesClustersHttproutesRetrieve2**](#kubernetesclustershttproutesretrieve2) | **GET** /api/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | |
|[**kubernetesClustersHttproutesUpdate**](#kubernetesclustershttproutesupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | |
|[**kubernetesClustersKubeVersionUpgradeCreate**](#kubernetesclusterskubeversionupgradecreate) | **POST** /api/kubernetes/clusters/{id}/kube-version-upgrade/ | |
|[**kubernetesClustersKubeconfigCreate**](#kubernetesclusterskubeconfigcreate) | **POST** /api/kubernetes/clusters/{id}/kubeconfig/ | |
|[**kubernetesClustersKubeconfigRetrieve**](#kubernetesclusterskubeconfigretrieve) | **GET** /api/kubernetes/clusters/{id}/kubeconfig/ | |
|[**kubernetesClustersLbFirewallCreate**](#kubernetesclusterslbfirewallcreate) | **POST** /api/kubernetes/clusters/{cluster_id}/lb-firewall/ | |
|[**kubernetesClustersLbFirewallDestroy**](#kubernetesclusterslbfirewalldestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | |
|[**kubernetesClustersLbFirewallList**](#kubernetesclusterslbfirewalllist) | **GET** /api/kubernetes/clusters/{cluster_id}/lb-firewall/ | |
|[**kubernetesClustersLbFirewallPartialUpdate**](#kubernetesclusterslbfirewallpartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | |
|[**kubernetesClustersLbFirewallRetrieve**](#kubernetesclusterslbfirewallretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | |
|[**kubernetesClustersLbFirewallUpdate**](#kubernetesclusterslbfirewallupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/lb-firewall/{id}/ | |
|[**kubernetesClustersList**](#kubernetesclusterslist) | **GET** /api/kubernetes/clusters/ | |
|[**kubernetesClustersPartialUpdate**](#kubernetesclusterspartialupdate) | **PATCH** /api/kubernetes/clusters/{id}/ | |
|[**kubernetesClustersPortForwardsCreate**](#kubernetesclustersportforwardscreate) | **POST** /api/kubernetes/clusters/{cluster_id}/port-forwards/ | |
|[**kubernetesClustersPortForwardsDestroy**](#kubernetesclustersportforwardsdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | |
|[**kubernetesClustersPortForwardsPartialUpdate**](#kubernetesclustersportforwardspartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | |
|[**kubernetesClustersPortForwardsRetrieve**](#kubernetesclustersportforwardsretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/port-forwards/ | |
|[**kubernetesClustersPortForwardsRetrieve2**](#kubernetesclustersportforwardsretrieve2) | **GET** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | |
|[**kubernetesClustersPortForwardsUpdate**](#kubernetesclustersportforwardsupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | |
|[**kubernetesClustersResourcePoolsCreate**](#kubernetesclustersresourcepoolscreate) | **POST** /api/kubernetes/clusters/{cluster_id}/resource-pools/ | |
|[**kubernetesClustersResourcePoolsDestroy**](#kubernetesclustersresourcepoolsdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | |
|[**kubernetesClustersResourcePoolsList**](#kubernetesclustersresourcepoolslist) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/ | |
|[**kubernetesClustersResourcePoolsNodesDestroy**](#kubernetesclustersresourcepoolsnodesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/ | |
|[**kubernetesClustersResourcePoolsNodesList**](#kubernetesclustersresourcepoolsnodeslist) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/ | |
|[**kubernetesClustersResourcePoolsNodesMetricsRetrieve**](#kubernetesclustersresourcepoolsnodesmetricsretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/metrics/ | |
|[**kubernetesClustersResourcePoolsNodesRetrieve**](#kubernetesclustersresourcepoolsnodesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/ | |
|[**kubernetesClustersResourcePoolsNodesRrdRetrieve**](#kubernetesclustersresourcepoolsnodesrrdretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/rrd/ | |
|[**kubernetesClustersResourcePoolsPartialUpdate**](#kubernetesclustersresourcepoolspartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | |
|[**kubernetesClustersResourcePoolsRetrieve**](#kubernetesclustersresourcepoolsretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | |
|[**kubernetesClustersResourcePoolsUpdate**](#kubernetesclustersresourcepoolsupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | |
|[**kubernetesClustersRetrieve**](#kubernetesclustersretrieve) | **GET** /api/kubernetes/clusters/{id}/ | |
|[**kubernetesClustersTalosVersionUpgradeCreate**](#kubernetesclusterstalosversionupgradecreate) | **POST** /api/kubernetes/clusters/{id}/talos-version-upgrade/ | |
|[**kubernetesClustersTcproutesCreate**](#kubernetesclusterstcproutescreate) | **POST** /api/kubernetes/clusters/{cluster_id}/tcproutes/ | |
|[**kubernetesClustersTcproutesDestroy**](#kubernetesclusterstcproutesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | |
|[**kubernetesClustersTcproutesPartialUpdate**](#kubernetesclusterstcproutespartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | |
|[**kubernetesClustersTcproutesRetrieve**](#kubernetesclusterstcproutesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/tcproutes/ | |
|[**kubernetesClustersTcproutesRetrieve2**](#kubernetesclusterstcproutesretrieve2) | **GET** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | |
|[**kubernetesClustersTcproutesUpdate**](#kubernetesclusterstcproutesupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | |
|[**kubernetesClustersToggleCloudVmAccessCreate**](#kubernetesclusterstogglecloudvmaccesscreate) | **POST** /api/kubernetes/clusters/{id}/toggle-cloud-vm-access/ | |
|[**kubernetesClustersUdproutesCreate**](#kubernetesclustersudproutescreate) | **POST** /api/kubernetes/clusters/{cluster_id}/udproutes/ | |
|[**kubernetesClustersUdproutesDestroy**](#kubernetesclustersudproutesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | |
|[**kubernetesClustersUdproutesPartialUpdate**](#kubernetesclustersudproutespartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | |
|[**kubernetesClustersUdproutesRetrieve**](#kubernetesclustersudproutesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/udproutes/ | |
|[**kubernetesClustersUdproutesRetrieve2**](#kubernetesclustersudproutesretrieve2) | **GET** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | |
|[**kubernetesClustersUdproutesUpdate**](#kubernetesclustersudproutesupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | |
|[**kubernetesClustersUpdate**](#kubernetesclustersupdate) | **PUT** /api/kubernetes/clusters/{id}/ | |
|[**kubernetesClustersUpgradeFeatureCreate**](#kubernetesclustersupgradefeaturecreate) | **POST** /api/kubernetes/clusters/{id}/upgrade-feature/ | |

# **kubernetesClusterTypesList**
> PaginatedClusterTypeList kubernetesClusterTypesList()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.kubernetesClusterTypesList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedClusterTypeList**

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

# **kubernetesClustersConnectVmCreate**
> ConnectVMResponse kubernetesClustersConnectVmCreate(connectVMRequest)

Connect a cloud VM to the cluster private network.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    ConnectVMRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)
let connectVMRequest: ConnectVMRequest; //

const { status, data } = await apiInstance.kubernetesClustersConnectVmCreate(
    id,
    connectVMRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **connectVMRequest** | **ConnectVMRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ConnectVMResponse**

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

# **kubernetesClustersConnectedVmsRetrieve**
> ConnectedVMsResponse kubernetesClustersConnectedVmsRetrieve()

List cloud VMs connected to the cluster private network.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersConnectedVmsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ConnectedVMsResponse**

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

# **kubernetesClustersCreate**
> ClusterAddResponse kubernetesClustersCreate(clusterAdd)

Create new k8s cluster

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    ClusterAdd
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterAdd: ClusterAdd; //

const { status, data } = await apiInstance.kubernetesClustersCreate(
    clusterAdd
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterAdd** | **ClusterAdd**|  | |


### Return type

**ClusterAddResponse**

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

# **kubernetesClustersDestroy**
> kubernetesClustersDestroy()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersDisconnectVmCreate**
> DisconnectVMResponse kubernetesClustersDisconnectVmCreate(disconnectVMRequest)

Disconnect a cloud VM from the cluster private network.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    DisconnectVMRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)
let disconnectVMRequest: DisconnectVMRequest; //

const { status, data } = await apiInstance.kubernetesClustersDisconnectVmCreate(
    id,
    disconnectVMRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **disconnectVMRequest** | **DisconnectVMRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**DisconnectVMResponse**

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

# **kubernetesClustersEligibleVmsRetrieve**
> EligibleVMsResponse kubernetesClustersEligibleVmsRetrieve()

List cloud VMs eligible for connection to this cluster.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersEligibleVmsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**EligibleVMsResponse**

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

# **kubernetesClustersHttproutesCreate**
> HTTPRoute kubernetesClustersHttproutesCreate(hTTPRoute)

Create new HTTPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    HTTPRoute
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let hTTPRoute: HTTPRoute; //

const { status, data } = await apiInstance.kubernetesClustersHttproutesCreate(
    clusterId,
    hTTPRoute
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hTTPRoute** | **HTTPRoute**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

**HTTPRoute**

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

# **kubernetesClustersHttproutesDestroy**
> kubernetesClustersHttproutesDestroy()

ViewSet for managing HTTPRoute resources.  HTTPRoutes expose HTTP/HTTPS services through the Gateway with optional automatic TLS certificate issuance.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersHttproutesDestroy(
    clusterId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersHttproutesPartialUpdate**
> HTTPRoute kubernetesClustersHttproutesPartialUpdate()

Partially update HTTPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    PatchedHTTPRoute
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let patchedHTTPRoute: PatchedHTTPRoute; // (optional)

const { status, data } = await apiInstance.kubernetesClustersHttproutesPartialUpdate(
    clusterId,
    id,
    patchedHTTPRoute
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedHTTPRoute** | **PatchedHTTPRoute**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**HTTPRoute**

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

# **kubernetesClustersHttproutesRetrieve**
> kubernetesClustersHttproutesRetrieve()

ViewSet for managing HTTPRoute resources.  HTTPRoutes expose HTTP/HTTPS services through the Gateway with optional automatic TLS certificate issuance.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersHttproutesRetrieve(
    clusterId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersHttproutesRetrieve2**
> kubernetesClustersHttproutesRetrieve2()

ViewSet for managing HTTPRoute resources.  HTTPRoutes expose HTTP/HTTPS services through the Gateway with optional automatic TLS certificate issuance.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersHttproutesRetrieve2(
    clusterId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersHttproutesUpdate**
> HTTPRoute kubernetesClustersHttproutesUpdate(hTTPRoute)

Update HTTPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    HTTPRoute
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let hTTPRoute: HTTPRoute; //

const { status, data } = await apiInstance.kubernetesClustersHttproutesUpdate(
    clusterId,
    id,
    hTTPRoute
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hTTPRoute** | **HTTPRoute**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**HTTPRoute**

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

# **kubernetesClustersKubeVersionUpgradeCreate**
> KubeUpgradeResponse kubernetesClustersKubeVersionUpgradeCreate()

Upgrade kubernetes to the next available version.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersKubeVersionUpgradeCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**KubeUpgradeResponse**

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

# **kubernetesClustersKubeconfigCreate**
> string kubernetesClustersKubeconfigCreate()

Download kubeconfig file. Use POST to generate a new kubeconfig.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersKubeconfigCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**string**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersKubeconfigRetrieve**
> string kubernetesClustersKubeconfigRetrieve()

Download kubeconfig file. Use POST to generate a new kubeconfig.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersKubeconfigRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**string**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersLbFirewallCreate**
> LBFirewallRule kubernetesClustersLbFirewallCreate()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    LBFirewallRule
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let lBFirewallRule: LBFirewallRule; // (optional)

const { status, data } = await apiInstance.kubernetesClustersLbFirewallCreate(
    clusterId,
    lBFirewallRule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lBFirewallRule** | **LBFirewallRule**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

**LBFirewallRule**

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

# **kubernetesClustersLbFirewallDestroy**
> kubernetesClustersLbFirewallDestroy()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersLbFirewallDestroy(
    clusterId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersLbFirewallList**
> PaginatedLBFirewallRuleList kubernetesClustersLbFirewallList()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersLbFirewallList(
    clusterId,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedLBFirewallRuleList**

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

# **kubernetesClustersLbFirewallPartialUpdate**
> LBFirewallRule kubernetesClustersLbFirewallPartialUpdate()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    PatchedLBFirewallRule
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let patchedLBFirewallRule: PatchedLBFirewallRule; // (optional)

const { status, data } = await apiInstance.kubernetesClustersLbFirewallPartialUpdate(
    clusterId,
    id,
    patchedLBFirewallRule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedLBFirewallRule** | **PatchedLBFirewallRule**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**LBFirewallRule**

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

# **kubernetesClustersLbFirewallRetrieve**
> LBFirewallRule kubernetesClustersLbFirewallRetrieve()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersLbFirewallRetrieve(
    clusterId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**LBFirewallRule**

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

# **kubernetesClustersLbFirewallUpdate**
> LBFirewallRule kubernetesClustersLbFirewallUpdate()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    LBFirewallRule
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let lBFirewallRule: LBFirewallRule; // (optional)

const { status, data } = await apiInstance.kubernetesClustersLbFirewallUpdate(
    clusterId,
    id,
    lBFirewallRule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lBFirewallRule** | **LBFirewallRule**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**LBFirewallRule**

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

# **kubernetesClustersList**
> PaginatedClusterDetailList kubernetesClustersList()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedClusterDetailList**

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

# **kubernetesClustersPartialUpdate**
> ClusterDetail kubernetesClustersPartialUpdate()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    PatchedClusterDetail
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)
let patchedClusterDetail: PatchedClusterDetail; // (optional)

const { status, data } = await apiInstance.kubernetesClustersPartialUpdate(
    id,
    patchedClusterDetail
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedClusterDetail** | **PatchedClusterDetail**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ClusterDetail**

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

# **kubernetesClustersPortForwardsCreate**
> kubernetesClustersPortForwardsCreate()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersPortForwardsCreate(
    clusterId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersPortForwardsDestroy**
> kubernetesClustersPortForwardsDestroy()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersPortForwardsDestroy(
    clusterId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersPortForwardsPartialUpdate**
> kubernetesClustersPortForwardsPartialUpdate()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersPortForwardsPartialUpdate(
    clusterId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersPortForwardsRetrieve**
> kubernetesClustersPortForwardsRetrieve()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersPortForwardsRetrieve(
    clusterId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersPortForwardsRetrieve2**
> kubernetesClustersPortForwardsRetrieve2()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersPortForwardsRetrieve2(
    clusterId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersPortForwardsUpdate**
> kubernetesClustersPortForwardsUpdate()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersPortForwardsUpdate(
    clusterId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersResourcePoolsCreate**
> ResourcePoolAddResponse kubernetesClustersResourcePoolsCreate(resourcePoolAdd)

Create new resource pool

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    ResourcePoolAdd
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let resourcePoolAdd: ResourcePoolAdd; //

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsCreate(
    clusterId,
    resourcePoolAdd
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourcePoolAdd** | **ResourcePoolAdd**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

**ResourcePoolAddResponse**

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

# **kubernetesClustersResourcePoolsDestroy**
> kubernetesClustersResourcePoolsDestroy()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsDestroy(
    clusterId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersResourcePoolsList**
> PaginatedResourcePoolList kubernetesClustersResourcePoolsList()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsList(
    clusterId,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedResourcePoolList**

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

# **kubernetesClustersResourcePoolsNodesDestroy**
> kubernetesClustersResourcePoolsNodesDestroy()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let poolId: number; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsNodesDestroy(
    clusterId,
    id,
    poolId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|
| **poolId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersResourcePoolsNodesList**
> PaginatedResourcePoolNodeList kubernetesClustersResourcePoolsNodesList()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let poolId: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsNodesList(
    clusterId,
    poolId,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **poolId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedResourcePoolNodeList**

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

# **kubernetesClustersResourcePoolsNodesMetricsRetrieve**
> NodeMetricsResponse kubernetesClustersResourcePoolsNodesMetricsRetrieve()

Get real-time metrics for a node VM.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let poolId: number; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsNodesMetricsRetrieve(
    clusterId,
    id,
    poolId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|
| **poolId** | [**number**] |  | defaults to undefined|


### Return type

**NodeMetricsResponse**

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

# **kubernetesClustersResourcePoolsNodesRetrieve**
> ResourcePoolNode kubernetesClustersResourcePoolsNodesRetrieve()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let poolId: number; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsNodesRetrieve(
    clusterId,
    id,
    poolId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|
| **poolId** | [**number**] |  | defaults to undefined|


### Return type

**ResourcePoolNode**

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

# **kubernetesClustersResourcePoolsNodesRrdRetrieve**
> NodeRRDResponse kubernetesClustersResourcePoolsNodesRrdRetrieve()

Get RRD (historical) metrics data for a node VM.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let poolId: number; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsNodesRrdRetrieve(
    clusterId,
    id,
    poolId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|
| **poolId** | [**number**] |  | defaults to undefined|


### Return type

**NodeRRDResponse**

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

# **kubernetesClustersResourcePoolsPartialUpdate**
> ResourcePool kubernetesClustersResourcePoolsPartialUpdate()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    PatchedResourcePool
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let patchedResourcePool: PatchedResourcePool; // (optional)

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsPartialUpdate(
    clusterId,
    id,
    patchedResourcePool
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedResourcePool** | **PatchedResourcePool**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ResourcePool**

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

# **kubernetesClustersResourcePoolsRetrieve**
> ResourcePool kubernetesClustersResourcePoolsRetrieve()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsRetrieve(
    clusterId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ResourcePool**

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

# **kubernetesClustersResourcePoolsUpdate**
> ResourcePool kubernetesClustersResourcePoolsUpdate()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    ResourcePool
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let resourcePool: ResourcePool; // (optional)

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsUpdate(
    clusterId,
    id,
    resourcePool
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourcePool** | **ResourcePool**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ResourcePool**

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

# **kubernetesClustersRetrieve**
> ClusterDetail kubernetesClustersRetrieve()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ClusterDetail**

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

# **kubernetesClustersTalosVersionUpgradeCreate**
> TalosUpgradeResponse kubernetesClustersTalosVersionUpgradeCreate()

Upgrade Talos to the next available version.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersTalosVersionUpgradeCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**TalosUpgradeResponse**

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

# **kubernetesClustersTcproutesCreate**
> TCPRoute kubernetesClustersTcproutesCreate(tCPRoute)

Create new TCPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    TCPRoute
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let tCPRoute: TCPRoute; //

const { status, data } = await apiInstance.kubernetesClustersTcproutesCreate(
    clusterId,
    tCPRoute
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tCPRoute** | **TCPRoute**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

**TCPRoute**

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

# **kubernetesClustersTcproutesDestroy**
> kubernetesClustersTcproutesDestroy()

ViewSet for managing TCPRoute resources.  TCPRoutes expose TCP services through the Gateway on specific external ports. Reserved ports (22, 6443, 50000, 50001) cannot be exposed.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersTcproutesDestroy(
    clusterId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersTcproutesPartialUpdate**
> TCPRoute kubernetesClustersTcproutesPartialUpdate()

Partially update TCPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    PatchedTCPRoute
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let patchedTCPRoute: PatchedTCPRoute; // (optional)

const { status, data } = await apiInstance.kubernetesClustersTcproutesPartialUpdate(
    clusterId,
    id,
    patchedTCPRoute
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedTCPRoute** | **PatchedTCPRoute**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**TCPRoute**

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

# **kubernetesClustersTcproutesRetrieve**
> kubernetesClustersTcproutesRetrieve()

ViewSet for managing TCPRoute resources.  TCPRoutes expose TCP services through the Gateway on specific external ports. Reserved ports (22, 6443, 50000, 50001) cannot be exposed.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersTcproutesRetrieve(
    clusterId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersTcproutesRetrieve2**
> kubernetesClustersTcproutesRetrieve2()

ViewSet for managing TCPRoute resources.  TCPRoutes expose TCP services through the Gateway on specific external ports. Reserved ports (22, 6443, 50000, 50001) cannot be exposed.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersTcproutesRetrieve2(
    clusterId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersTcproutesUpdate**
> TCPRoute kubernetesClustersTcproutesUpdate(tCPRoute)

Update TCPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    TCPRoute
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let tCPRoute: TCPRoute; //

const { status, data } = await apiInstance.kubernetesClustersTcproutesUpdate(
    clusterId,
    id,
    tCPRoute
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tCPRoute** | **TCPRoute**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**TCPRoute**

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

# **kubernetesClustersToggleCloudVmAccessCreate**
> ToggleCloudVMAccessResponse kubernetesClustersToggleCloudVmAccessCreate()

Toggle cloud VM access for this cluster.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersToggleCloudVmAccessCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ToggleCloudVMAccessResponse**

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

# **kubernetesClustersUdproutesCreate**
> UDPRoute kubernetesClustersUdproutesCreate(uDPRoute)

Create new UDPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    UDPRoute
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let uDPRoute: UDPRoute; //

const { status, data } = await apiInstance.kubernetesClustersUdproutesCreate(
    clusterId,
    uDPRoute
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uDPRoute** | **UDPRoute**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

**UDPRoute**

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

# **kubernetesClustersUdproutesDestroy**
> kubernetesClustersUdproutesDestroy()

ViewSet for managing UDPRoute resources.  UDPRoutes expose UDP services through the Gateway on specific external ports.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersUdproutesDestroy(
    clusterId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersUdproutesPartialUpdate**
> UDPRoute kubernetesClustersUdproutesPartialUpdate()

Partially update UDPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    PatchedUDPRoute
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let patchedUDPRoute: PatchedUDPRoute; // (optional)

const { status, data } = await apiInstance.kubernetesClustersUdproutesPartialUpdate(
    clusterId,
    id,
    patchedUDPRoute
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedUDPRoute** | **PatchedUDPRoute**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**UDPRoute**

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

# **kubernetesClustersUdproutesRetrieve**
> kubernetesClustersUdproutesRetrieve()

ViewSet for managing UDPRoute resources.  UDPRoutes expose UDP services through the Gateway on specific external ports.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersUdproutesRetrieve(
    clusterId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersUdproutesRetrieve2**
> kubernetesClustersUdproutesRetrieve2()

ViewSet for managing UDPRoute resources.  UDPRoutes expose UDP services through the Gateway on specific external ports.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersUdproutesRetrieve2(
    clusterId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

void (empty response body)

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersUdproutesUpdate**
> UDPRoute kubernetesClustersUdproutesUpdate(uDPRoute)

Update UDPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    UDPRoute
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let uDPRoute: UDPRoute; //

const { status, data } = await apiInstance.kubernetesClustersUdproutesUpdate(
    clusterId,
    id,
    uDPRoute
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uDPRoute** | **UDPRoute**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**UDPRoute**

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

# **kubernetesClustersUpdate**
> ClusterDetail kubernetesClustersUpdate(clusterDetail)

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    ClusterDetail
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)
let clusterDetail: ClusterDetail; //

const { status, data } = await apiInstance.kubernetesClustersUpdate(
    id,
    clusterDetail
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterDetail** | **ClusterDetail**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ClusterDetail**

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

# **kubernetesClustersUpgradeFeatureCreate**
> FeatureUpgradeResponse kubernetesClustersUpgradeFeatureCreate(featureUpgradeRequest)

Upgrade a cluster feature to the latest compatible version.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    FeatureUpgradeRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)
let featureUpgradeRequest: FeatureUpgradeRequest; //

const { status, data } = await apiInstance.kubernetesClustersUpgradeFeatureCreate(
    id,
    featureUpgradeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **featureUpgradeRequest** | **FeatureUpgradeRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**FeatureUpgradeResponse**

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

