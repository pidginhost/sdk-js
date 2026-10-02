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
|[**kubernetesClustersEncryptionCreate**](#kubernetesclustersencryptioncreate) | **POST** /api/kubernetes/clusters/{id}/encryption/ | |
|[**kubernetesClustersEncryptionRecheckCreate**](#kubernetesclustersencryptionrecheckcreate) | **POST** /api/kubernetes/clusters/{id}/encryption/recheck/ | |
|[**kubernetesClustersEncryptionReconcileCreate**](#kubernetesclustersencryptionreconcilecreate) | **POST** /api/kubernetes/clusters/{id}/encryption/reconcile/ | |
|[**kubernetesClustersEncryptionRetrieve**](#kubernetesclustersencryptionretrieve) | **GET** /api/kubernetes/clusters/{id}/encryption/ | |
|[**kubernetesClustersHttproutesCreate**](#kubernetesclustershttproutescreate) | **POST** /api/kubernetes/clusters/{cluster_id}/httproutes/ | |
|[**kubernetesClustersHttproutesDestroy**](#kubernetesclustershttproutesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | |
|[**kubernetesClustersHttproutesList**](#kubernetesclustershttprouteslist) | **GET** /api/kubernetes/clusters/{cluster_id}/httproutes/ | |
|[**kubernetesClustersHttproutesPartialUpdate**](#kubernetesclustershttproutespartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | |
|[**kubernetesClustersHttproutesRetrieve**](#kubernetesclustershttproutesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/httproutes/{id}/ | |
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
|[**kubernetesClustersNodeOperationsCancelCreate**](#kubernetesclustersnodeoperationscancelcreate) | **POST** /api/kubernetes/clusters/{cluster_id}/node-operations/{id}/cancel/ | |
|[**kubernetesClustersNodeOperationsList**](#kubernetesclustersnodeoperationslist) | **GET** /api/kubernetes/clusters/{cluster_id}/node-operations/ | |
|[**kubernetesClustersNodeOperationsResumeCreate**](#kubernetesclustersnodeoperationsresumecreate) | **POST** /api/kubernetes/clusters/{cluster_id}/node-operations/{id}/resume/ | |
|[**kubernetesClustersNodeOperationsRetrieve**](#kubernetesclustersnodeoperationsretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/node-operations/{id}/ | |
|[**kubernetesClustersNodeOperationsRetryCreate**](#kubernetesclustersnodeoperationsretrycreate) | **POST** /api/kubernetes/clusters/{cluster_id}/node-operations/{id}/retry/ | |
|[**kubernetesClustersPartialUpdate**](#kubernetesclusterspartialupdate) | **PATCH** /api/kubernetes/clusters/{id}/ | |
|[**kubernetesClustersPoolRemovalJournalsList**](#kubernetesclusterspoolremovaljournalslist) | **GET** /api/kubernetes/clusters/{cluster_id}/pool-removal-journals/ | |
|[**kubernetesClustersPoolRemovalJournalsResumeCreate**](#kubernetesclusterspoolremovaljournalsresumecreate) | **POST** /api/kubernetes/clusters/{cluster_id}/pool-removal-journals/{id}/resume/ | |
|[**kubernetesClustersPoolRemovalJournalsRetrieve**](#kubernetesclusterspoolremovaljournalsretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/pool-removal-journals/{id}/ | |
|[**kubernetesClustersPortForwardsCreate**](#kubernetesclustersportforwardscreate) | **POST** /api/kubernetes/clusters/{cluster_id}/port-forwards/ | |
|[**kubernetesClustersPortForwardsDestroy**](#kubernetesclustersportforwardsdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | |
|[**kubernetesClustersPortForwardsList**](#kubernetesclustersportforwardslist) | **GET** /api/kubernetes/clusters/{cluster_id}/port-forwards/ | |
|[**kubernetesClustersPortForwardsPartialUpdate**](#kubernetesclustersportforwardspartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | |
|[**kubernetesClustersPortForwardsRetrieve**](#kubernetesclustersportforwardsretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | |
|[**kubernetesClustersPortForwardsUpdate**](#kubernetesclustersportforwardsupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/port-forwards/{id}/ | |
|[**kubernetesClustersResourcePoolsCreate**](#kubernetesclustersresourcepoolscreate) | **POST** /api/kubernetes/clusters/{cluster_id}/resource-pools/ | |
|[**kubernetesClustersResourcePoolsDestroy**](#kubernetesclustersresourcepoolsdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | |
|[**kubernetesClustersResourcePoolsList**](#kubernetesclustersresourcepoolslist) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/ | |
|[**kubernetesClustersResourcePoolsNodesDestroy**](#kubernetesclustersresourcepoolsnodesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/ | |
|[**kubernetesClustersResourcePoolsNodesList**](#kubernetesclustersresourcepoolsnodeslist) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/ | |
|[**kubernetesClustersResourcePoolsNodesMetricsRetrieve**](#kubernetesclustersresourcepoolsnodesmetricsretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/metrics/ | |
|[**kubernetesClustersResourcePoolsNodesRebootCreate**](#kubernetesclustersresourcepoolsnodesrebootcreate) | **POST** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/reboot/ | |
|[**kubernetesClustersResourcePoolsNodesRetrieve**](#kubernetesclustersresourcepoolsnodesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/ | |
|[**kubernetesClustersResourcePoolsNodesRrdRetrieve**](#kubernetesclustersresourcepoolsnodesrrdretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{pool_id}/nodes/{id}/rrd/ | |
|[**kubernetesClustersResourcePoolsPartialUpdate**](#kubernetesclustersresourcepoolspartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | |
|[**kubernetesClustersResourcePoolsRetrieve**](#kubernetesclustersresourcepoolsretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | |
|[**kubernetesClustersResourcePoolsUpdate**](#kubernetesclustersresourcepoolsupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/resource-pools/{id}/ | |
|[**kubernetesClustersRetrieve**](#kubernetesclustersretrieve) | **GET** /api/kubernetes/clusters/{id}/ | |
|[**kubernetesClustersTalosVersionUpgradeCreate**](#kubernetesclusterstalosversionupgradecreate) | **POST** /api/kubernetes/clusters/{id}/talos-version-upgrade/ | |
|[**kubernetesClustersTcproutesCreate**](#kubernetesclusterstcproutescreate) | **POST** /api/kubernetes/clusters/{cluster_id}/tcproutes/ | |
|[**kubernetesClustersTcproutesDestroy**](#kubernetesclusterstcproutesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | |
|[**kubernetesClustersTcproutesList**](#kubernetesclusterstcprouteslist) | **GET** /api/kubernetes/clusters/{cluster_id}/tcproutes/ | |
|[**kubernetesClustersTcproutesPartialUpdate**](#kubernetesclusterstcproutespartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | |
|[**kubernetesClustersTcproutesRetrieve**](#kubernetesclusterstcproutesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | |
|[**kubernetesClustersTcproutesUpdate**](#kubernetesclusterstcproutesupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/tcproutes/{id}/ | |
|[**kubernetesClustersToggleCloudVmAccessCreate**](#kubernetesclusterstogglecloudvmaccesscreate) | **POST** /api/kubernetes/clusters/{id}/toggle-cloud-vm-access/ | |
|[**kubernetesClustersUdproutesCreate**](#kubernetesclustersudproutescreate) | **POST** /api/kubernetes/clusters/{cluster_id}/udproutes/ | |
|[**kubernetesClustersUdproutesDestroy**](#kubernetesclustersudproutesdestroy) | **DELETE** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | |
|[**kubernetesClustersUdproutesList**](#kubernetesclustersudprouteslist) | **GET** /api/kubernetes/clusters/{cluster_id}/udproutes/ | |
|[**kubernetesClustersUdproutesPartialUpdate**](#kubernetesclustersudproutespartialupdate) | **PATCH** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | |
|[**kubernetesClustersUdproutesRetrieve**](#kubernetesclustersudproutesretrieve) | **GET** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | |
|[**kubernetesClustersUdproutesUpdate**](#kubernetesclustersudproutesupdate) | **PUT** /api/kubernetes/clusters/{cluster_id}/udproutes/{id}/ | |
|[**kubernetesClustersUpdate**](#kubernetesclustersupdate) | **PUT** /api/kubernetes/clusters/{id}/ | |
|[**kubernetesClustersUpgradeFeatureCreate**](#kubernetesclustersupgradefeaturecreate) | **POST** /api/kubernetes/clusters/{id}/upgrade-feature/ | |
|[**kubernetesClustersUpgradeLbCreate**](#kubernetesclustersupgradelbcreate) | **POST** /api/kubernetes/clusters/{id}/upgrade-lb/ | |

# **kubernetesClusterTypesList**
> PaginatedClusterTypeList kubernetesClusterTypesList()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersCreate**
> ClusterAddResponse kubernetesClustersCreate(clusterAddRequest)

Create new k8s cluster

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    ClusterAddRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterAddRequest: ClusterAddRequest; //

const { status, data } = await apiInstance.kubernetesClustersCreate(
    clusterAddRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterAddRequest** | **ClusterAddRequest**|  | |


### Return type

**ClusterAddResponse**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersEncryptionCreate**
> ClusterEncryptionOperation kubernetesClustersEncryptionCreate(clusterEncryptionRequest)

Enable or disable WireGuard encryption for cluster traffic.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    ClusterEncryptionRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)
let clusterEncryptionRequest: ClusterEncryptionRequest; //

const { status, data } = await apiInstance.kubernetesClustersEncryptionCreate(
    id,
    clusterEncryptionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterEncryptionRequest** | **ClusterEncryptionRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ClusterEncryptionOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  * Location - The cluster\&#39;s encryption status resource, to poll for the outcome. <br>  |
|**400** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersEncryptionRecheckCreate**
> ClusterEncryption kubernetesClustersEncryptionRecheckCreate()

Re-count the workloads that still predate the encryption change.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersEncryptionRecheckCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ClusterEncryption**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**409** |  |  -  |
|**429** |  |  -  |
|**503** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersEncryptionReconcileCreate**
> ClusterEncryptionOperation kubernetesClustersEncryptionReconcileCreate(clusterEncryptionReconcileRequest)

Staff only: resolve a cluster whose encryption state is unknown.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    ClusterEncryptionReconcileRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)
let clusterEncryptionReconcileRequest: ClusterEncryptionReconcileRequest; //

const { status, data } = await apiInstance.kubernetesClustersEncryptionReconcileCreate(
    id,
    clusterEncryptionReconcileRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterEncryptionReconcileRequest** | **ClusterEncryptionReconcileRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ClusterEncryptionOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  * Location - The cluster\&#39;s encryption status resource, to poll for the outcome. <br>  |
|**400** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersEncryptionRetrieve**
> ClusterEncryption kubernetesClustersEncryptionRetrieve()

Read the cluster\'s encryption state, restart gate and per-node verification evidence.

### Example

```typescript
import {
    KubernetesApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersEncryptionRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ClusterEncryption**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**403** |  |  -  |
|**404** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersHttproutesCreate**
> HTTPRoute kubernetesClustersHttproutesCreate(hTTPRouteRequest)

Create new HTTPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    HTTPRouteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let hTTPRouteRequest: HTTPRouteRequest; //

const { status, data } = await apiInstance.kubernetesClustersHttproutesCreate(
    clusterId,
    hTTPRouteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hTTPRouteRequest** | **HTTPRouteRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

**HTTPRoute**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersHttproutesList**
> PaginatedHTTPRouteList kubernetesClustersHttproutesList()

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
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersHttproutesList(
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

**PaginatedHTTPRouteList**

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

# **kubernetesClustersHttproutesPartialUpdate**
> HTTPRoute kubernetesClustersHttproutesPartialUpdate()

Partially update HTTPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    PatchedHTTPRouteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let patchedHTTPRouteRequest: PatchedHTTPRouteRequest; // (optional)

const { status, data } = await apiInstance.kubernetesClustersHttproutesPartialUpdate(
    clusterId,
    id,
    patchedHTTPRouteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedHTTPRouteRequest** | **PatchedHTTPRouteRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**HTTPRoute**

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

# **kubernetesClustersHttproutesRetrieve**
> HTTPRoute kubernetesClustersHttproutesRetrieve()

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

const { status, data } = await apiInstance.kubernetesClustersHttproutesRetrieve(
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

**HTTPRoute**

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

# **kubernetesClustersHttproutesUpdate**
> HTTPRoute kubernetesClustersHttproutesUpdate(hTTPRouteRequest)

Update HTTPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    HTTPRouteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let hTTPRouteRequest: HTTPRouteRequest; //

const { status, data } = await apiInstance.kubernetesClustersHttproutesUpdate(
    clusterId,
    id,
    hTTPRouteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **hTTPRouteRequest** | **HTTPRouteRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**HTTPRoute**

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    LBFirewallRuleRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let lBFirewallRuleRequest: LBFirewallRuleRequest; // (optional)

const { status, data } = await apiInstance.kubernetesClustersLbFirewallCreate(
    clusterId,
    lBFirewallRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lBFirewallRuleRequest** | **LBFirewallRuleRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

**LBFirewallRule**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    PatchedLBFirewallRuleRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let patchedLBFirewallRuleRequest: PatchedLBFirewallRuleRequest; // (optional)

const { status, data } = await apiInstance.kubernetesClustersLbFirewallPartialUpdate(
    clusterId,
    id,
    patchedLBFirewallRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedLBFirewallRuleRequest** | **PatchedLBFirewallRuleRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**LBFirewallRule**

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

# **kubernetesClustersLbFirewallRetrieve**
> LBFirewallRule kubernetesClustersLbFirewallRetrieve()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    LBFirewallRuleRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let lBFirewallRuleRequest: LBFirewallRuleRequest; // (optional)

const { status, data } = await apiInstance.kubernetesClustersLbFirewallUpdate(
    clusterId,
    id,
    lBFirewallRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lBFirewallRuleRequest** | **LBFirewallRuleRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**LBFirewallRule**

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

# **kubernetesClustersList**
> PaginatedClusterDetailList kubernetesClustersList()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersNodeOperationsCancelCreate**
> NodeOperation kubernetesClustersNodeOperationsCancelCreate()

Uncordon the node and abort a blocked operation.

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

const { status, data } = await apiInstance.kubernetesClustersNodeOperationsCancelCreate(
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

**NodeOperation**

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

# **kubernetesClustersNodeOperationsList**
> PaginatedNodeOperationList kubernetesClustersNodeOperationsList()

Operation history, status, and the three recovery actions.  Cluster-level rather than node-level on purpose: a successful delete removes the VM row, so an operation addressable only through its node would stop being readable exactly when the customer wants to see how it ended.  None of these routes is gated on `K8S_NODE_OPERATIONS_ENABLED`. Turning new starts off must never strand an operation that is already running -- a cluster with a blocked operation and no way to answer it is a cluster nobody can mutate at all.

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

const { status, data } = await apiInstance.kubernetesClustersNodeOperationsList(
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

**PaginatedNodeOperationList**

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

# **kubernetesClustersNodeOperationsResumeCreate**
> NodeOperation kubernetesClustersNodeOperationsResumeCreate()

Staff-only resume of an operation waiting for support.

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

const { status, data } = await apiInstance.kubernetesClustersNodeOperationsResumeCreate(
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

**NodeOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersNodeOperationsRetrieve**
> NodeOperation kubernetesClustersNodeOperationsRetrieve()

Operation history, status, and the three recovery actions.  Cluster-level rather than node-level on purpose: a successful delete removes the VM row, so an operation addressable only through its node would stop being readable exactly when the customer wants to see how it ended.  None of these routes is gated on `K8S_NODE_OPERATIONS_ENABLED`. Turning new starts off must never strand an operation that is already running -- a cluster with a blocked operation and no way to answer it is a cluster nobody can mutate at all.

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

const { status, data } = await apiInstance.kubernetesClustersNodeOperationsRetrieve(
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

**NodeOperation**

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

# **kubernetesClustersNodeOperationsRetryCreate**
> NodeOperation kubernetesClustersNodeOperationsRetryCreate()

Retry a blocked operation with the overrides that answer its blocker.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    NodeOperationRetryRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let nodeOperationRetryRequest: NodeOperationRetryRequest; // (optional)

const { status, data } = await apiInstance.kubernetesClustersNodeOperationsRetryCreate(
    clusterId,
    id,
    nodeOperationRetryRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nodeOperationRetryRequest** | **NodeOperationRetryRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**NodeOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersPartialUpdate**
> ClusterDetail kubernetesClustersPartialUpdate()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    PatchedClusterDetailRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)
let patchedClusterDetailRequest: PatchedClusterDetailRequest; // (optional)

const { status, data } = await apiInstance.kubernetesClustersPartialUpdate(
    id,
    patchedClusterDetailRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedClusterDetailRequest** | **PatchedClusterDetailRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ClusterDetail**

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

# **kubernetesClustersPoolRemovalJournalsList**
> PaginatedPoolRemovalJournalList kubernetesClustersPoolRemovalJournalsList()

A downsize or pool deletion, its milestones, and its staff resume.  The list route is not in the spec\'s table and is here anyway: with retrieve as the only route, a customer whose downsize parked has no way to learn the journal id, and the panel\'s poll would be the sole path to a published REST resource.

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

const { status, data } = await apiInstance.kubernetesClustersPoolRemovalJournalsList(
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

**PaginatedPoolRemovalJournalList**

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

# **kubernetesClustersPoolRemovalJournalsResumeCreate**
> PoolRemovalJournal kubernetesClustersPoolRemovalJournalsResumeCreate()

Staff-only resume of a pool removal waiting for support.

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

const { status, data } = await apiInstance.kubernetesClustersPoolRemovalJournalsResumeCreate(
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

**PoolRemovalJournal**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersPoolRemovalJournalsRetrieve**
> PoolRemovalJournal kubernetesClustersPoolRemovalJournalsRetrieve()

A downsize or pool deletion, its milestones, and its staff resume.  The list route is not in the spec\'s table and is here anyway: with retrieve as the only route, a customer whose downsize parked has no way to learn the journal id, and the panel\'s poll would be the sole path to a published REST resource.

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

const { status, data } = await apiInstance.kubernetesClustersPoolRemovalJournalsRetrieve(
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

**PoolRemovalJournal**

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

# **kubernetesClustersPortForwardsCreate**
> K8sPortForward kubernetesClustersPortForwardsCreate(k8sPortForwardRequest)

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    K8sPortForwardRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let k8sPortForwardRequest: K8sPortForwardRequest; //

const { status, data } = await apiInstance.kubernetesClustersPortForwardsCreate(
    clusterId,
    k8sPortForwardRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **k8sPortForwardRequest** | **K8sPortForwardRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

**K8sPortForward**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersPortForwardsDestroy**
> kubernetesClustersPortForwardsDestroy()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersPortForwardsList**
> PaginatedK8sPortForwardList kubernetesClustersPortForwardsList()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

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

const { status, data } = await apiInstance.kubernetesClustersPortForwardsList(
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

**PaginatedK8sPortForwardList**

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

# **kubernetesClustersPortForwardsPartialUpdate**
> K8sPortForward kubernetesClustersPortForwardsPartialUpdate()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    PatchedK8sPortForwardRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let patchedK8sPortForwardRequest: PatchedK8sPortForwardRequest; // (optional)

const { status, data } = await apiInstance.kubernetesClustersPortForwardsPartialUpdate(
    clusterId,
    id,
    patchedK8sPortForwardRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedK8sPortForwardRequest** | **PatchedK8sPortForwardRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**K8sPortForward**

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

# **kubernetesClustersPortForwardsRetrieve**
> K8sPortForward kubernetesClustersPortForwardsRetrieve()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

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

const { status, data } = await apiInstance.kubernetesClustersPortForwardsRetrieve(
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

**K8sPortForward**

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

# **kubernetesClustersPortForwardsUpdate**
> K8sPortForward kubernetesClustersPortForwardsUpdate(k8sPortForwardRequest)

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    K8sPortForwardRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let k8sPortForwardRequest: K8sPortForwardRequest; //

const { status, data } = await apiInstance.kubernetesClustersPortForwardsUpdate(
    clusterId,
    id,
    k8sPortForwardRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **k8sPortForwardRequest** | **K8sPortForwardRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**K8sPortForward**

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

# **kubernetesClustersResourcePoolsCreate**
> ResourcePoolAddResponse kubernetesClustersResourcePoolsCreate(resourcePoolAddRequest)

Create new resource pool

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    ResourcePoolAddRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let resourcePoolAddRequest: ResourcePoolAddRequest; //

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsCreate(
    clusterId,
    resourcePoolAddRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourcePoolAddRequest** | **ResourcePoolAddRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

**ResourcePoolAddResponse**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersResourcePoolsNodesDestroy**
> NodeOperation kubernetesClustersResourcePoolsNodesDestroy()

Start a safe delete of one worker node.

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

**NodeOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersResourcePoolsNodesList**
> PaginatedResourcePoolNodeList kubernetesClustersResourcePoolsNodesList()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersResourcePoolsNodesRebootCreate**
> NodeOperation kubernetesClustersResourcePoolsNodesRebootCreate()

Restart one worker node, draining it first.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    NodeOperationRebootRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let poolId: number; // (default to undefined)
let nodeOperationRebootRequest: NodeOperationRebootRequest; // (optional)

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsNodesRebootCreate(
    clusterId,
    id,
    poolId,
    nodeOperationRebootRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **nodeOperationRebootRequest** | **NodeOperationRebootRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|
| **poolId** | [**number**] |  | defaults to undefined|


### Return type

**NodeOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersResourcePoolsNodesRetrieve**
> ResourcePoolNode kubernetesClustersResourcePoolsNodesRetrieve()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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
let timeframe: 'day' | 'hour' | 'month' | 'week' | 'year'; //Window of recorded data to return. (optional) (default to 'hour')

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsNodesRrdRetrieve(
    clusterId,
    id,
    poolId,
    timeframe
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|
| **poolId** | [**number**] |  | defaults to undefined|
| **timeframe** | [**&#39;day&#39; | &#39;hour&#39; | &#39;month&#39; | &#39;week&#39; | &#39;year&#39;**]**Array<&#39;day&#39; &#124; &#39;hour&#39; &#124; &#39;month&#39; &#124; &#39;week&#39; &#124; &#39;year&#39;>** | Window of recorded data to return. | (optional) defaults to 'hour'|


### Return type

**NodeRRDResponse**

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

# **kubernetesClustersResourcePoolsPartialUpdate**
> ResourcePool kubernetesClustersResourcePoolsPartialUpdate()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    PatchedResourcePoolRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let patchedResourcePoolRequest: PatchedResourcePoolRequest; // (optional)

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsPartialUpdate(
    clusterId,
    id,
    patchedResourcePoolRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedResourcePoolRequest** | **PatchedResourcePoolRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ResourcePool**

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

# **kubernetesClustersResourcePoolsRetrieve**
> ResourcePool kubernetesClustersResourcePoolsRetrieve()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    ResourcePoolRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let resourcePoolRequest: ResourcePoolRequest; // (optional)

const { status, data } = await apiInstance.kubernetesClustersResourcePoolsUpdate(
    clusterId,
    id,
    resourcePoolRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **resourcePoolRequest** | **ResourcePoolRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ResourcePool**

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

# **kubernetesClustersRetrieve**
> ClusterDetail kubernetesClustersRetrieve()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersTcproutesCreate**
> TCPRoute kubernetesClustersTcproutesCreate(tCPRouteRequest)

Create new TCPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    TCPRouteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let tCPRouteRequest: TCPRouteRequest; //

const { status, data } = await apiInstance.kubernetesClustersTcproutesCreate(
    clusterId,
    tCPRouteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tCPRouteRequest** | **TCPRouteRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

**TCPRoute**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersTcproutesList**
> PaginatedTCPRouteList kubernetesClustersTcproutesList()

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
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersTcproutesList(
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

**PaginatedTCPRouteList**

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

# **kubernetesClustersTcproutesPartialUpdate**
> TCPRoute kubernetesClustersTcproutesPartialUpdate()

Partially update TCPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    PatchedTCPRouteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let patchedTCPRouteRequest: PatchedTCPRouteRequest; // (optional)

const { status, data } = await apiInstance.kubernetesClustersTcproutesPartialUpdate(
    clusterId,
    id,
    patchedTCPRouteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedTCPRouteRequest** | **PatchedTCPRouteRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**TCPRoute**

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

# **kubernetesClustersTcproutesRetrieve**
> TCPRoute kubernetesClustersTcproutesRetrieve()

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

const { status, data } = await apiInstance.kubernetesClustersTcproutesRetrieve(
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

**TCPRoute**

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

# **kubernetesClustersTcproutesUpdate**
> TCPRoute kubernetesClustersTcproutesUpdate(tCPRouteRequest)

Update TCPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    TCPRouteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let tCPRouteRequest: TCPRouteRequest; //

const { status, data } = await apiInstance.kubernetesClustersTcproutesUpdate(
    clusterId,
    id,
    tCPRouteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **tCPRouteRequest** | **TCPRouteRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**TCPRoute**

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersUdproutesCreate**
> UDPRoute kubernetesClustersUdproutesCreate(uDPRouteRequest)

Create new UDPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    UDPRouteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let uDPRouteRequest: UDPRouteRequest; //

const { status, data } = await apiInstance.kubernetesClustersUdproutesCreate(
    clusterId,
    uDPRouteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uDPRouteRequest** | **UDPRouteRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|


### Return type

**UDPRoute**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersUdproutesList**
> PaginatedUDPRouteList kubernetesClustersUdproutesList()

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
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.kubernetesClustersUdproutesList(
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

**PaginatedUDPRouteList**

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

# **kubernetesClustersUdproutesPartialUpdate**
> UDPRoute kubernetesClustersUdproutesPartialUpdate()

Partially update UDPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    PatchedUDPRouteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let patchedUDPRouteRequest: PatchedUDPRouteRequest; // (optional)

const { status, data } = await apiInstance.kubernetesClustersUdproutesPartialUpdate(
    clusterId,
    id,
    patchedUDPRouteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedUDPRouteRequest** | **PatchedUDPRouteRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**UDPRoute**

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

# **kubernetesClustersUdproutesRetrieve**
> UDPRoute kubernetesClustersUdproutesRetrieve()

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

const { status, data } = await apiInstance.kubernetesClustersUdproutesRetrieve(
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

**UDPRoute**

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

# **kubernetesClustersUdproutesUpdate**
> UDPRoute kubernetesClustersUdproutesUpdate(uDPRouteRequest)

Update UDPRoute

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    UDPRouteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let clusterId: number; // (default to undefined)
let id: string; // (default to undefined)
let uDPRouteRequest: UDPRouteRequest; //

const { status, data } = await apiInstance.kubernetesClustersUdproutesUpdate(
    clusterId,
    id,
    uDPRouteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **uDPRouteRequest** | **UDPRouteRequest**|  | |
| **clusterId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**UDPRoute**

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

# **kubernetesClustersUpdate**
> ClusterDetail kubernetesClustersUpdate(clusterDetailRequest)

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    ClusterDetailRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)
let clusterDetailRequest: ClusterDetailRequest; //

const { status, data } = await apiInstance.kubernetesClustersUpdate(
    id,
    clusterDetailRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **clusterDetailRequest** | **ClusterDetailRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**ClusterDetail**

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

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **kubernetesClustersUpgradeLbCreate**
> LBUpgradePlanResponse kubernetesClustersUpgradeLbCreate()

Inspect or perform the load-balancer upgrade the server computes for this cluster. The caller never selects a level.

### Example

```typescript
import {
    KubernetesApi,
    Configuration,
    LBUpgradeRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new KubernetesApi(configuration);

let id: string; // (default to undefined)
let lBUpgradeRequest: LBUpgradeRequest; // (optional)

const { status, data } = await apiInstance.kubernetesClustersUpgradeLbCreate(
    id,
    lBUpgradeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **lBUpgradeRequest** | **LBUpgradeRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**LBUpgradePlanResponse**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

