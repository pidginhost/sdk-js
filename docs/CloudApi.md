# CloudApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cloudBucketsCreate**](#cloudbucketscreate) | **POST** /api/cloud/buckets/ | |
|[**cloudBucketsCredentialsRevealCreate**](#cloudbucketscredentialsrevealcreate) | **POST** /api/cloud/buckets/{id}/credentials/reveal/ | |
|[**cloudBucketsCredentialsRotateCreate**](#cloudbucketscredentialsrotatecreate) | **POST** /api/cloud/buckets/{id}/credentials/rotate/ | |
|[**cloudBucketsDestroy**](#cloudbucketsdestroy) | **DELETE** /api/cloud/buckets/{id}/ | |
|[**cloudBucketsList**](#cloudbucketslist) | **GET** /api/cloud/buckets/ | |
|[**cloudBucketsResizeCreate**](#cloudbucketsresizecreate) | **POST** /api/cloud/buckets/{id}/resize/ | |
|[**cloudBucketsRetrieve**](#cloudbucketsretrieve) | **GET** /api/cloud/buckets/{id}/ | |
|[**cloudBucketsVisibilityCreate**](#cloudbucketsvisibilitycreate) | **POST** /api/cloud/buckets/{id}/visibility/ | |
|[**cloudFirewallRulesSetCreate**](#cloudfirewallrulessetcreate) | **POST** /api/cloud/firewall-rules-set/ | |
|[**cloudFirewallRulesSetDestroy**](#cloudfirewallrulessetdestroy) | **DELETE** /api/cloud/firewall-rules-set/{id}/ | |
|[**cloudFirewallRulesSetList**](#cloudfirewallrulessetlist) | **GET** /api/cloud/firewall-rules-set/ | |
|[**cloudFirewallRulesSetPartialUpdate**](#cloudfirewallrulessetpartialupdate) | **PATCH** /api/cloud/firewall-rules-set/{id}/ | |
|[**cloudFirewallRulesSetRetrieve**](#cloudfirewallrulessetretrieve) | **GET** /api/cloud/firewall-rules-set/{id}/ | |
|[**cloudFirewallRulesSetRulesCreate**](#cloudfirewallrulessetrulescreate) | **POST** /api/cloud/firewall-rules-set/{rules_set_id}/rules/ | |
|[**cloudFirewallRulesSetRulesDestroy**](#cloudfirewallrulessetrulesdestroy) | **DELETE** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | |
|[**cloudFirewallRulesSetRulesList**](#cloudfirewallrulessetruleslist) | **GET** /api/cloud/firewall-rules-set/{rules_set_id}/rules/ | |
|[**cloudFirewallRulesSetRulesPartialUpdate**](#cloudfirewallrulessetrulespartialupdate) | **PATCH** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | |
|[**cloudFirewallRulesSetRulesRetrieve**](#cloudfirewallrulessetrulesretrieve) | **GET** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | |
|[**cloudFirewallRulesSetRulesUpdate**](#cloudfirewallrulessetrulesupdate) | **PUT** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | |
|[**cloudFirewallRulesSetUpdate**](#cloudfirewallrulessetupdate) | **PUT** /api/cloud/firewall-rules-set/{id}/ | |
|[**cloudFloatingIpv4AuthorizationsList**](#cloudfloatingipv4authorizationslist) | **GET** /api/cloud/floating-ipv4/{id}/authorizations/ | |
|[**cloudFloatingIpv4AuthorizeCreate**](#cloudfloatingipv4authorizecreate) | **POST** /api/cloud/floating-ipv4/{id}/authorize/ | |
|[**cloudFloatingIpv4Create**](#cloudfloatingipv4create) | **POST** /api/cloud/floating-ipv4/ | |
|[**cloudFloatingIpv4Destroy**](#cloudfloatingipv4destroy) | **DELETE** /api/cloud/floating-ipv4/{id}/ | |
|[**cloudFloatingIpv4List**](#cloudfloatingipv4list) | **GET** /api/cloud/floating-ipv4/ | |
|[**cloudFloatingIpv4RdnsCreate**](#cloudfloatingipv4rdnscreate) | **POST** /api/cloud/floating-ipv4/{id}/rdns/ | |
|[**cloudFloatingIpv4RdnsRetrieve**](#cloudfloatingipv4rdnsretrieve) | **GET** /api/cloud/floating-ipv4/{id}/rdns/ | |
|[**cloudFloatingIpv4Retrieve**](#cloudfloatingipv4retrieve) | **GET** /api/cloud/floating-ipv4/{id}/ | |
|[**cloudFloatingIpv4UnauthorizeCreate**](#cloudfloatingipv4unauthorizecreate) | **POST** /api/cloud/floating-ipv4/{id}/unauthorize/ | |
|[**cloudFloatingIpv6AuthorizationsList**](#cloudfloatingipv6authorizationslist) | **GET** /api/cloud/floating-ipv6/{id}/authorizations/ | |
|[**cloudFloatingIpv6AuthorizeCreate**](#cloudfloatingipv6authorizecreate) | **POST** /api/cloud/floating-ipv6/{id}/authorize/ | |
|[**cloudFloatingIpv6Create**](#cloudfloatingipv6create) | **POST** /api/cloud/floating-ipv6/ | |
|[**cloudFloatingIpv6Destroy**](#cloudfloatingipv6destroy) | **DELETE** /api/cloud/floating-ipv6/{id}/ | |
|[**cloudFloatingIpv6List**](#cloudfloatingipv6list) | **GET** /api/cloud/floating-ipv6/ | |
|[**cloudFloatingIpv6RdnsCreate**](#cloudfloatingipv6rdnscreate) | **POST** /api/cloud/floating-ipv6/{id}/rdns/ | |
|[**cloudFloatingIpv6RdnsRetrieve**](#cloudfloatingipv6rdnsretrieve) | **GET** /api/cloud/floating-ipv6/{id}/rdns/ | |
|[**cloudFloatingIpv6Retrieve**](#cloudfloatingipv6retrieve) | **GET** /api/cloud/floating-ipv6/{id}/ | |
|[**cloudFloatingIpv6UnauthorizeCreate**](#cloudfloatingipv6unauthorizecreate) | **POST** /api/cloud/floating-ipv6/{id}/unauthorize/ | |
|[**cloudGenerationsList**](#cloudgenerationslist) | **GET** /api/cloud/generations/ | List hardware generations|
|[**cloudGenerationsRetrieve**](#cloudgenerationsretrieve) | **GET** /api/cloud/generations/{slug}/ | |
|[**cloudImagesList**](#cloudimageslist) | **GET** /api/cloud/images/ | |
|[**cloudImagesRetrieve**](#cloudimagesretrieve) | **GET** /api/cloud/images/{id}/ | |
|[**cloudIpv4Create**](#cloudipv4create) | **POST** /api/cloud/ipv4/ | |
|[**cloudIpv4Destroy**](#cloudipv4destroy) | **DELETE** /api/cloud/ipv4/{id}/ | |
|[**cloudIpv4DetachCreate**](#cloudipv4detachcreate) | **POST** /api/cloud/ipv4/{id}/detach/ | |
|[**cloudIpv4List**](#cloudipv4list) | **GET** /api/cloud/ipv4/ | |
|[**cloudIpv4RdnsCreate**](#cloudipv4rdnscreate) | **POST** /api/cloud/ipv4/{id}/rdns/ | |
|[**cloudIpv4RdnsRetrieve**](#cloudipv4rdnsretrieve) | **GET** /api/cloud/ipv4/{id}/rdns/ | |
|[**cloudIpv4Retrieve**](#cloudipv4retrieve) | **GET** /api/cloud/ipv4/{id}/ | |
|[**cloudIpv6Create**](#cloudipv6create) | **POST** /api/cloud/ipv6/ | |
|[**cloudIpv6Destroy**](#cloudipv6destroy) | **DELETE** /api/cloud/ipv6/{id}/ | |
|[**cloudIpv6DetachCreate**](#cloudipv6detachcreate) | **POST** /api/cloud/ipv6/{id}/detach/ | |
|[**cloudIpv6List**](#cloudipv6list) | **GET** /api/cloud/ipv6/ | |
|[**cloudIpv6RdnsCreate**](#cloudipv6rdnscreate) | **POST** /api/cloud/ipv6/{id}/rdns/ | |
|[**cloudIpv6RdnsRetrieve**](#cloudipv6rdnsretrieve) | **GET** /api/cloud/ipv6/{id}/rdns/ | |
|[**cloudIpv6Retrieve**](#cloudipv6retrieve) | **GET** /api/cloud/ipv6/{id}/ | |
|[**cloudPrivateNetworksAddServerCreate**](#cloudprivatenetworksaddservercreate) | **POST** /api/cloud/private-networks/{id}/add-server/ | |
|[**cloudPrivateNetworksCreate**](#cloudprivatenetworkscreate) | **POST** /api/cloud/private-networks/ | |
|[**cloudPrivateNetworksDestroy**](#cloudprivatenetworksdestroy) | **DELETE** /api/cloud/private-networks/{id}/ | |
|[**cloudPrivateNetworksList**](#cloudprivatenetworkslist) | **GET** /api/cloud/private-networks/ | |
|[**cloudPrivateNetworksPartialUpdate**](#cloudprivatenetworkspartialupdate) | **PATCH** /api/cloud/private-networks/{id}/ | |
|[**cloudPrivateNetworksRemoveServerCreate**](#cloudprivatenetworksremoveservercreate) | **POST** /api/cloud/private-networks/{id}/remove-server/ | |
|[**cloudPrivateNetworksRetrieve**](#cloudprivatenetworksretrieve) | **GET** /api/cloud/private-networks/{id}/ | |
|[**cloudPrivateNetworksUpdate**](#cloudprivatenetworksupdate) | **PUT** /api/cloud/private-networks/{id}/ | |
|[**cloudServerPackagesByGenerationRetrieve**](#cloudserverpackagesbygenerationretrieve) | **GET** /api/cloud/server-packages/by-generation/ | |
|[**cloudServerPackagesList**](#cloudserverpackageslist) | **GET** /api/cloud/server-packages/ | |
|[**cloudServerPackagesRetrieve**](#cloudserverpackagesretrieve) | **GET** /api/cloud/server-packages/{id}/ | |
|[**cloudServersActivityRetrieve**](#cloudserversactivityretrieve) | **GET** /api/cloud/servers/{id}/activity/ | |
|[**cloudServersAttachIpv4Create**](#cloudserversattachipv4create) | **POST** /api/cloud/servers/{id}/attach-ipv4/ | |
|[**cloudServersAttachIpv6Create**](#cloudserversattachipv6create) | **POST** /api/cloud/servers/{id}/attach-ipv6/ | |
|[**cloudServersBootIsosList**](#cloudserversbootisoslist) | **GET** /api/cloud/servers/{id}/boot-isos/ | |
|[**cloudServersConsoleCreate**](#cloudserversconsolecreate) | **POST** /api/cloud/servers/{id}/console/ | |
|[**cloudServersCreate**](#cloudserverscreate) | **POST** /api/cloud/servers/ | |
|[**cloudServersDestroy**](#cloudserversdestroy) | **DELETE** /api/cloud/servers/{id}/ | |
|[**cloudServersDestroyProtectionCreate**](#cloudserversdestroyprotectioncreate) | **POST** /api/cloud/servers/{id}/destroy-protection/ | |
|[**cloudServersDetachIpv4Create**](#cloudserversdetachipv4create) | **POST** /api/cloud/servers/{id}/detach-ipv4/ | |
|[**cloudServersDetachIpv6Create**](#cloudserversdetachipv6create) | **POST** /api/cloud/servers/{id}/detach-ipv6/ | |
|[**cloudServersList**](#cloudserverslist) | **GET** /api/cloud/servers/ | |
|[**cloudServersModifyPackageCreate**](#cloudserversmodifypackagecreate) | **POST** /api/cloud/servers/{id}/modify-package/ | |
|[**cloudServersPartialUpdate**](#cloudserverspartialupdate) | **PATCH** /api/cloud/servers/{id}/ | |
|[**cloudServersPowerManagementCreate**](#cloudserverspowermanagementcreate) | **POST** /api/cloud/servers/{id}/power-management/ | |
|[**cloudServersPowerManagementRetrieve**](#cloudserverspowermanagementretrieve) | **GET** /api/cloud/servers/{id}/power-management/ | |
|[**cloudServersPublicInterfaceCreate**](#cloudserverspublicinterfacecreate) | **POST** /api/cloud/servers/{id}/public-interface/ | |
|[**cloudServersPublicInterfaceDestroy**](#cloudserverspublicinterfacedestroy) | **DELETE** /api/cloud/servers/{id}/public-interface/ | |
|[**cloudServersPublicInterfaceRetrieve**](#cloudserverspublicinterfaceretrieve) | **GET** /api/cloud/servers/{id}/public-interface/ | |
|[**cloudServersRescueEnterCreate**](#cloudserversrescueentercreate) | **POST** /api/cloud/servers/{id}/rescue/enter/ | |
|[**cloudServersRescueExitCreate**](#cloudserversrescueexitcreate) | **POST** /api/cloud/servers/{id}/rescue/exit/ | |
|[**cloudServersRetrieve**](#cloudserversretrieve) | **GET** /api/cloud/servers/{id}/ | |
|[**cloudServersRetryProvisionCreate**](#cloudserversretryprovisioncreate) | **POST** /api/cloud/servers/{id}/retry-provision/ | |
|[**cloudServersSnapshotsCreate**](#cloudserverssnapshotscreate) | **POST** /api/cloud/servers/{id}/snapshots/ | |
|[**cloudServersSnapshotsDestroy**](#cloudserverssnapshotsdestroy) | **DELETE** /api/cloud/servers/{id}/snapshots/{snapshot_name}/ | |
|[**cloudServersSnapshotsList**](#cloudserverssnapshotslist) | **GET** /api/cloud/servers/{id}/snapshots/ | |
|[**cloudServersSnapshotsRollbackCreate**](#cloudserverssnapshotsrollbackcreate) | **POST** /api/cloud/servers/{id}/snapshots/{snapshot_name}/rollback/ | |
|[**cloudServersUpdate**](#cloudserversupdate) | **PUT** /api/cloud/servers/{id}/ | |
|[**cloudServersUsageRetrieve**](#cloudserversusageretrieve) | **GET** /api/cloud/servers/{id}/usage/ | |
|[**cloudServersVolumesCreate**](#cloudserversvolumescreate) | **POST** /api/cloud/servers/{server_id}/volumes/ | |
|[**cloudServersVolumesDestroy**](#cloudserversvolumesdestroy) | **DELETE** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | |
|[**cloudServersVolumesList**](#cloudserversvolumeslist) | **GET** /api/cloud/servers/{server_id}/volumes/ | |
|[**cloudServersVolumesPartialUpdate**](#cloudserversvolumespartialupdate) | **PATCH** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | |
|[**cloudServersVolumesRetrieve**](#cloudserversvolumesretrieve) | **GET** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | |
|[**cloudServersVolumesUpdate**](#cloudserversvolumesupdate) | **PUT** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | |
|[**cloudStorageProductsList**](#cloudstorageproductslist) | **GET** /api/cloud/storage-products/ | |
|[**cloudStorageProductsRetrieve**](#cloudstorageproductsretrieve) | **GET** /api/cloud/storage-products/{id}/ | |
|[**cloudVolumesAttachCreate**](#cloudvolumesattachcreate) | **POST** /api/cloud/volumes/{id}/attach/ | |
|[**cloudVolumesDestroy**](#cloudvolumesdestroy) | **DELETE** /api/cloud/volumes/{id}/ | |
|[**cloudVolumesDetachCreate**](#cloudvolumesdetachcreate) | **POST** /api/cloud/volumes/{id}/detach/ | |
|[**cloudVolumesList**](#cloudvolumeslist) | **GET** /api/cloud/volumes/ | |
|[**cloudVolumesPartialUpdate**](#cloudvolumespartialupdate) | **PATCH** /api/cloud/volumes/{id}/ | |
|[**cloudVolumesRetrieve**](#cloudvolumesretrieve) | **GET** /api/cloud/volumes/{id}/ | |
|[**cloudVolumesUpdate**](#cloudvolumesupdate) | **PUT** /api/cloud/volumes/{id}/ | |

# **cloudBucketsCreate**
> Bucket cloudBucketsCreate(bucketCreate)

Create a bucket

### Example

```typescript
import {
    CloudApi,
    Configuration,
    BucketCreate
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let bucketCreate: BucketCreate; //

const { status, data } = await apiInstance.cloudBucketsCreate(
    bucketCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bucketCreate** | **BucketCreate**|  | |


### Return type

**Bucket**

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

# **cloudBucketsCredentialsRevealCreate**
> BucketCredentials cloudBucketsCredentialsRevealCreate()

Reveal bucket credentials

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this S3 bucket. (default to undefined)

const { status, data } = await apiInstance.cloudBucketsCredentialsRevealCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this S3 bucket. | defaults to undefined|


### Return type

**BucketCredentials**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  * Cache-Control - Prevents clients and intermediaries from caching credentials. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudBucketsCredentialsRotateCreate**
> BucketCredentials cloudBucketsCredentialsRotateCreate()

Rotate bucket credentials

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this S3 bucket. (default to undefined)

const { status, data } = await apiInstance.cloudBucketsCredentialsRotateCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this S3 bucket. | defaults to undefined|


### Return type

**BucketCredentials**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  * Cache-Control - Prevents clients and intermediaries from caching credentials. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudBucketsDestroy**
> BucketCancelResponse cloudBucketsDestroy()

Cancel a bucket

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this S3 bucket. (default to undefined)

const { status, data } = await apiInstance.cloudBucketsDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this S3 bucket. | defaults to undefined|


### Return type

**BucketCancelResponse**

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

# **cloudBucketsList**
> Array<Bucket> cloudBucketsList()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

const { status, data } = await apiInstance.cloudBucketsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Bucket>**

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

# **cloudBucketsResizeCreate**
> Bucket cloudBucketsResizeCreate(bucketResize)

Resize a bucket

### Example

```typescript
import {
    CloudApi,
    Configuration,
    BucketResize
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this S3 bucket. (default to undefined)
let bucketResize: BucketResize; //

const { status, data } = await apiInstance.cloudBucketsResizeCreate(
    id,
    bucketResize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bucketResize** | **BucketResize**|  | |
| **id** | [**number**] | A unique integer value identifying this S3 bucket. | defaults to undefined|


### Return type

**Bucket**

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

# **cloudBucketsRetrieve**
> Bucket cloudBucketsRetrieve()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this S3 bucket. (default to undefined)

const { status, data } = await apiInstance.cloudBucketsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this S3 bucket. | defaults to undefined|


### Return type

**Bucket**

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

# **cloudBucketsVisibilityCreate**
> Bucket cloudBucketsVisibilityCreate(bucketVisibility)

Set bucket visibility

### Example

```typescript
import {
    CloudApi,
    Configuration,
    BucketVisibility
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this S3 bucket. (default to undefined)
let bucketVisibility: BucketVisibility; //

const { status, data } = await apiInstance.cloudBucketsVisibilityCreate(
    id,
    bucketVisibility
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bucketVisibility** | **BucketVisibility**|  | |
| **id** | [**number**] | A unique integer value identifying this S3 bucket. | defaults to undefined|


### Return type

**Bucket**

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

# **cloudFirewallRulesSetCreate**
> FirewallRulesSet cloudFirewallRulesSetCreate(firewallRulesSet)

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    FirewallRulesSet
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let firewallRulesSet: FirewallRulesSet; //

const { status, data } = await apiInstance.cloudFirewallRulesSetCreate(
    firewallRulesSet
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **firewallRulesSet** | **FirewallRulesSet**|  | |


### Return type

**FirewallRulesSet**

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

# **cloudFirewallRulesSetDestroy**
> cloudFirewallRulesSetDestroy()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this firewall rules set. (default to undefined)

const { status, data } = await apiInstance.cloudFirewallRulesSetDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this firewall rules set. | defaults to undefined|


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

# **cloudFirewallRulesSetList**
> Array<FirewallRulesSet> cloudFirewallRulesSetList()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

const { status, data } = await apiInstance.cloudFirewallRulesSetList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FirewallRulesSet>**

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

# **cloudFirewallRulesSetPartialUpdate**
> FirewallRulesSet cloudFirewallRulesSetPartialUpdate()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PatchedFirewallRulesSet
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this firewall rules set. (default to undefined)
let patchedFirewallRulesSet: PatchedFirewallRulesSet; // (optional)

const { status, data } = await apiInstance.cloudFirewallRulesSetPartialUpdate(
    id,
    patchedFirewallRulesSet
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedFirewallRulesSet** | **PatchedFirewallRulesSet**|  | |
| **id** | [**number**] | A unique integer value identifying this firewall rules set. | defaults to undefined|


### Return type

**FirewallRulesSet**

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

# **cloudFirewallRulesSetRetrieve**
> FirewallRulesSet cloudFirewallRulesSetRetrieve()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this firewall rules set. (default to undefined)

const { status, data } = await apiInstance.cloudFirewallRulesSetRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this firewall rules set. | defaults to undefined|


### Return type

**FirewallRulesSet**

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

# **cloudFirewallRulesSetRulesCreate**
> FirewallRule cloudFirewallRulesSetRulesCreate(firewallRule)

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    FirewallRule
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let rulesSetId: string; // (default to undefined)
let firewallRule: FirewallRule; //

const { status, data } = await apiInstance.cloudFirewallRulesSetRulesCreate(
    rulesSetId,
    firewallRule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **firewallRule** | **FirewallRule**|  | |
| **rulesSetId** | [**string**] |  | defaults to undefined|


### Return type

**FirewallRule**

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

# **cloudFirewallRulesSetRulesDestroy**
> cloudFirewallRulesSetRulesDestroy()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let ruleId: string; // (default to undefined)
let rulesSetId: string; // (default to undefined)

const { status, data } = await apiInstance.cloudFirewallRulesSetRulesDestroy(
    ruleId,
    rulesSetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ruleId** | [**string**] |  | defaults to undefined|
| **rulesSetId** | [**string**] |  | defaults to undefined|


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

# **cloudFirewallRulesSetRulesList**
> Array<FirewallRule> cloudFirewallRulesSetRulesList()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let rulesSetId: string; // (default to undefined)

const { status, data } = await apiInstance.cloudFirewallRulesSetRulesList(
    rulesSetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **rulesSetId** | [**string**] |  | defaults to undefined|


### Return type

**Array<FirewallRule>**

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

# **cloudFirewallRulesSetRulesPartialUpdate**
> FirewallRule cloudFirewallRulesSetRulesPartialUpdate()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PatchedFirewallRule
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let ruleId: string; // (default to undefined)
let rulesSetId: string; // (default to undefined)
let patchedFirewallRule: PatchedFirewallRule; // (optional)

const { status, data } = await apiInstance.cloudFirewallRulesSetRulesPartialUpdate(
    ruleId,
    rulesSetId,
    patchedFirewallRule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedFirewallRule** | **PatchedFirewallRule**|  | |
| **ruleId** | [**string**] |  | defaults to undefined|
| **rulesSetId** | [**string**] |  | defaults to undefined|


### Return type

**FirewallRule**

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

# **cloudFirewallRulesSetRulesRetrieve**
> FirewallRule cloudFirewallRulesSetRulesRetrieve()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let ruleId: string; // (default to undefined)
let rulesSetId: string; // (default to undefined)

const { status, data } = await apiInstance.cloudFirewallRulesSetRulesRetrieve(
    ruleId,
    rulesSetId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **ruleId** | [**string**] |  | defaults to undefined|
| **rulesSetId** | [**string**] |  | defaults to undefined|


### Return type

**FirewallRule**

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

# **cloudFirewallRulesSetRulesUpdate**
> FirewallRule cloudFirewallRulesSetRulesUpdate(firewallRule)

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    FirewallRule
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let ruleId: string; // (default to undefined)
let rulesSetId: string; // (default to undefined)
let firewallRule: FirewallRule; //

const { status, data } = await apiInstance.cloudFirewallRulesSetRulesUpdate(
    ruleId,
    rulesSetId,
    firewallRule
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **firewallRule** | **FirewallRule**|  | |
| **ruleId** | [**string**] |  | defaults to undefined|
| **rulesSetId** | [**string**] |  | defaults to undefined|


### Return type

**FirewallRule**

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

# **cloudFirewallRulesSetUpdate**
> FirewallRulesSet cloudFirewallRulesSetUpdate(firewallRulesSet)

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    FirewallRulesSet
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this firewall rules set. (default to undefined)
let firewallRulesSet: FirewallRulesSet; //

const { status, data } = await apiInstance.cloudFirewallRulesSetUpdate(
    id,
    firewallRulesSet
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **firewallRulesSet** | **FirewallRulesSet**|  | |
| **id** | [**number**] | A unique integer value identifying this firewall rules set. | defaults to undefined|


### Return type

**FirewallRulesSet**

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

# **cloudFloatingIpv4AuthorizationsList**
> PaginatedFloatingIPAuthorizationList cloudFloatingIpv4AuthorizationsList()

Manage floating IPv4 addresses. A floating IP can be authorized on multiple VMs simultaneously; the customer asserts ownership inside the guest via keepalived/VRRP.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv4. (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudFloatingIpv4AuthorizationsList(
    id,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this floating IPv4. | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedFloatingIPAuthorizationList**

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

# **cloudFloatingIpv4AuthorizeCreate**
> FloatingIPv4AuthorizeResponse cloudFloatingIpv4AuthorizeCreate(floatingIPAuthorizeRequest)

Manage floating IPv4 addresses. A floating IP can be authorized on multiple VMs simultaneously; the customer asserts ownership inside the guest via keepalived/VRRP.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    FloatingIPAuthorizeRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv4. (default to undefined)
let floatingIPAuthorizeRequest: FloatingIPAuthorizeRequest; //

const { status, data } = await apiInstance.cloudFloatingIpv4AuthorizeCreate(
    id,
    floatingIPAuthorizeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **floatingIPAuthorizeRequest** | **FloatingIPAuthorizeRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this floating IPv4. | defaults to undefined|


### Return type

**FloatingIPv4AuthorizeResponse**

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

# **cloudFloatingIpv4Create**
> FloatingIPv4 cloudFloatingIpv4Create()

Manage floating IPv4 addresses. A floating IP can be authorized on multiple VMs simultaneously; the customer asserts ownership inside the guest via keepalived/VRRP.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    FloatingIPv4Create
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let floatingIPv4Create: FloatingIPv4Create; // (optional)

const { status, data } = await apiInstance.cloudFloatingIpv4Create(
    floatingIPv4Create
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **floatingIPv4Create** | **FloatingIPv4Create**|  | |


### Return type

**FloatingIPv4**

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

# **cloudFloatingIpv4Destroy**
> cloudFloatingIpv4Destroy()

Manage floating IPv4 addresses. A floating IP can be authorized on multiple VMs simultaneously; the customer asserts ownership inside the guest via keepalived/VRRP.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv4. (default to undefined)

const { status, data } = await apiInstance.cloudFloatingIpv4Destroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this floating IPv4. | defaults to undefined|


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

# **cloudFloatingIpv4List**
> PaginatedFloatingIPv4List cloudFloatingIpv4List()

Manage floating IPv4 addresses. A floating IP can be authorized on multiple VMs simultaneously; the customer asserts ownership inside the guest via keepalived/VRRP.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudFloatingIpv4List(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedFloatingIPv4List**

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

# **cloudFloatingIpv4RdnsCreate**
> ReverseDNS cloudFloatingIpv4RdnsCreate(reverseDNS)

Get or update reverse DNS (PTR) for the IPv4 address wrapped by this floating IP.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    ReverseDNS
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv4. (default to undefined)
let reverseDNS: ReverseDNS; //

const { status, data } = await apiInstance.cloudFloatingIpv4RdnsCreate(
    id,
    reverseDNS
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reverseDNS** | **ReverseDNS**|  | |
| **id** | [**number**] | A unique integer value identifying this floating IPv4. | defaults to undefined|


### Return type

**ReverseDNS**

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

# **cloudFloatingIpv4RdnsRetrieve**
> ReverseDNS cloudFloatingIpv4RdnsRetrieve()

Get or update reverse DNS (PTR) for the IPv4 address wrapped by this floating IP.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv4. (default to undefined)

const { status, data } = await apiInstance.cloudFloatingIpv4RdnsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this floating IPv4. | defaults to undefined|


### Return type

**ReverseDNS**

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

# **cloudFloatingIpv4Retrieve**
> FloatingIPv4 cloudFloatingIpv4Retrieve()

Manage floating IPv4 addresses. A floating IP can be authorized on multiple VMs simultaneously; the customer asserts ownership inside the guest via keepalived/VRRP.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv4. (default to undefined)

const { status, data } = await apiInstance.cloudFloatingIpv4Retrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this floating IPv4. | defaults to undefined|


### Return type

**FloatingIPv4**

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

# **cloudFloatingIpv4UnauthorizeCreate**
> FloatingIPv4UnauthorizeResponse cloudFloatingIpv4UnauthorizeCreate(floatingIPAuthorizeRequest)

Manage floating IPv4 addresses. A floating IP can be authorized on multiple VMs simultaneously; the customer asserts ownership inside the guest via keepalived/VRRP.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    FloatingIPAuthorizeRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv4. (default to undefined)
let floatingIPAuthorizeRequest: FloatingIPAuthorizeRequest; //

const { status, data } = await apiInstance.cloudFloatingIpv4UnauthorizeCreate(
    id,
    floatingIPAuthorizeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **floatingIPAuthorizeRequest** | **FloatingIPAuthorizeRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this floating IPv4. | defaults to undefined|


### Return type

**FloatingIPv4UnauthorizeResponse**

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

# **cloudFloatingIpv6AuthorizationsList**
> PaginatedFloatingIPAuthorizationList cloudFloatingIpv6AuthorizationsList()

Manage floating IPv6 addresses.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv6. (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudFloatingIpv6AuthorizationsList(
    id,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this floating IPv6. | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedFloatingIPAuthorizationList**

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

# **cloudFloatingIpv6AuthorizeCreate**
> FloatingIPv6AuthorizeResponse cloudFloatingIpv6AuthorizeCreate(floatingIPAuthorizeRequest)

Manage floating IPv6 addresses.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    FloatingIPAuthorizeRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv6. (default to undefined)
let floatingIPAuthorizeRequest: FloatingIPAuthorizeRequest; //

const { status, data } = await apiInstance.cloudFloatingIpv6AuthorizeCreate(
    id,
    floatingIPAuthorizeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **floatingIPAuthorizeRequest** | **FloatingIPAuthorizeRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this floating IPv6. | defaults to undefined|


### Return type

**FloatingIPv6AuthorizeResponse**

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

# **cloudFloatingIpv6Create**
> FloatingIPv6 cloudFloatingIpv6Create()

Manage floating IPv6 addresses.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    FloatingIPv6Create
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let floatingIPv6Create: FloatingIPv6Create; // (optional)

const { status, data } = await apiInstance.cloudFloatingIpv6Create(
    floatingIPv6Create
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **floatingIPv6Create** | **FloatingIPv6Create**|  | |


### Return type

**FloatingIPv6**

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

# **cloudFloatingIpv6Destroy**
> cloudFloatingIpv6Destroy()

Manage floating IPv6 addresses.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv6. (default to undefined)

const { status, data } = await apiInstance.cloudFloatingIpv6Destroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this floating IPv6. | defaults to undefined|


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

# **cloudFloatingIpv6List**
> PaginatedFloatingIPv6List cloudFloatingIpv6List()

Manage floating IPv6 addresses.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudFloatingIpv6List(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedFloatingIPv6List**

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

# **cloudFloatingIpv6RdnsCreate**
> ReverseDNS cloudFloatingIpv6RdnsCreate(reverseDNS)

Get or update reverse DNS (PTR) for the IPv6 address wrapped by this floating IP.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    ReverseDNS
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv6. (default to undefined)
let reverseDNS: ReverseDNS; //

const { status, data } = await apiInstance.cloudFloatingIpv6RdnsCreate(
    id,
    reverseDNS
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reverseDNS** | **ReverseDNS**|  | |
| **id** | [**number**] | A unique integer value identifying this floating IPv6. | defaults to undefined|


### Return type

**ReverseDNS**

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

# **cloudFloatingIpv6RdnsRetrieve**
> ReverseDNS cloudFloatingIpv6RdnsRetrieve()

Get or update reverse DNS (PTR) for the IPv6 address wrapped by this floating IP.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv6. (default to undefined)

const { status, data } = await apiInstance.cloudFloatingIpv6RdnsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this floating IPv6. | defaults to undefined|


### Return type

**ReverseDNS**

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

# **cloudFloatingIpv6Retrieve**
> FloatingIPv6 cloudFloatingIpv6Retrieve()

Manage floating IPv6 addresses.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv6. (default to undefined)

const { status, data } = await apiInstance.cloudFloatingIpv6Retrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this floating IPv6. | defaults to undefined|


### Return type

**FloatingIPv6**

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

# **cloudFloatingIpv6UnauthorizeCreate**
> FloatingIPv6UnauthorizeResponse cloudFloatingIpv6UnauthorizeCreate(floatingIPAuthorizeRequest)

Manage floating IPv6 addresses.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    FloatingIPAuthorizeRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv6. (default to undefined)
let floatingIPAuthorizeRequest: FloatingIPAuthorizeRequest; //

const { status, data } = await apiInstance.cloudFloatingIpv6UnauthorizeCreate(
    id,
    floatingIPAuthorizeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **floatingIPAuthorizeRequest** | **FloatingIPAuthorizeRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this floating IPv6. | defaults to undefined|


### Return type

**FloatingIPv6UnauthorizeResponse**

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

# **cloudGenerationsList**
> Array<HardwareGeneration> cloudGenerationsList()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

const { status, data } = await apiInstance.cloudGenerationsList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<HardwareGeneration>**

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

# **cloudGenerationsRetrieve**
> HardwareGeneration cloudGenerationsRetrieve()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let slug: string; // (default to undefined)

const { status, data } = await apiInstance.cloudGenerationsRetrieve(
    slug
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **slug** | [**string**] |  | defaults to undefined|


### Return type

**HardwareGeneration**

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

# **cloudImagesList**
> PaginatedOSImageList cloudImagesList()

List of available OS images

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudImagesList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedOSImageList**

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

# **cloudImagesRetrieve**
> OSImage cloudImagesRetrieve()

List of available OS images

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this operating system. (default to undefined)

const { status, data } = await apiInstance.cloudImagesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this operating system. | defaults to undefined|


### Return type

**OSImage**

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

# **cloudIpv4Create**
> PublicIPv4 cloudIpv4Create()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PublicIPv4
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let publicIPv4: PublicIPv4; // (optional)

const { status, data } = await apiInstance.cloudIpv4Create(
    publicIPv4
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **publicIPv4** | **PublicIPv4**|  | |


### Return type

**PublicIPv4**

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

# **cloudIpv4Destroy**
> cloudIpv4Destroy()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv4. (default to undefined)

const { status, data } = await apiInstance.cloudIpv4Destroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this Public IPv4. | defaults to undefined|


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

# **cloudIpv4DetachCreate**
> DetachIPv4Response cloudIpv4DetachCreate()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PublicIPv4
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv4. (default to undefined)
let publicIPv4: PublicIPv4; // (optional)

const { status, data } = await apiInstance.cloudIpv4DetachCreate(
    id,
    publicIPv4
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **publicIPv4** | **PublicIPv4**|  | |
| **id** | [**number**] | A unique integer value identifying this Public IPv4. | defaults to undefined|


### Return type

**DetachIPv4Response**

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

# **cloudIpv4List**
> PaginatedPublicIPv4List cloudIpv4List()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudIpv4List(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedPublicIPv4List**

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

# **cloudIpv4RdnsCreate**
> ReverseDNS cloudIpv4RdnsCreate(reverseDNS)

Get or update reverse DNS (PTR) for this IPv4 address.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    ReverseDNS
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv4. (default to undefined)
let reverseDNS: ReverseDNS; //

const { status, data } = await apiInstance.cloudIpv4RdnsCreate(
    id,
    reverseDNS
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reverseDNS** | **ReverseDNS**|  | |
| **id** | [**number**] | A unique integer value identifying this Public IPv4. | defaults to undefined|


### Return type

**ReverseDNS**

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

# **cloudIpv4RdnsRetrieve**
> ReverseDNS cloudIpv4RdnsRetrieve()

Get or update reverse DNS (PTR) for this IPv4 address.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv4. (default to undefined)

const { status, data } = await apiInstance.cloudIpv4RdnsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this Public IPv4. | defaults to undefined|


### Return type

**ReverseDNS**

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

# **cloudIpv4Retrieve**
> PublicIPv4 cloudIpv4Retrieve()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv4. (default to undefined)

const { status, data } = await apiInstance.cloudIpv4Retrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this Public IPv4. | defaults to undefined|


### Return type

**PublicIPv4**

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

# **cloudIpv6Create**
> PublicIPv6 cloudIpv6Create()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PublicIPv6
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let publicIPv6: PublicIPv6; // (optional)

const { status, data } = await apiInstance.cloudIpv6Create(
    publicIPv6
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **publicIPv6** | **PublicIPv6**|  | |


### Return type

**PublicIPv6**

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

# **cloudIpv6Destroy**
> cloudIpv6Destroy()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv6. (default to undefined)

const { status, data } = await apiInstance.cloudIpv6Destroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this Public IPv6. | defaults to undefined|


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

# **cloudIpv6DetachCreate**
> DetachIPv6Response cloudIpv6DetachCreate()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PublicIPv6
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv6. (default to undefined)
let publicIPv6: PublicIPv6; // (optional)

const { status, data } = await apiInstance.cloudIpv6DetachCreate(
    id,
    publicIPv6
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **publicIPv6** | **PublicIPv6**|  | |
| **id** | [**number**] | A unique integer value identifying this Public IPv6. | defaults to undefined|


### Return type

**DetachIPv6Response**

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

# **cloudIpv6List**
> PaginatedPublicIPv6List cloudIpv6List()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudIpv6List(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedPublicIPv6List**

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

# **cloudIpv6RdnsCreate**
> ReverseDNS cloudIpv6RdnsCreate(reverseDNS)

Get or update reverse DNS (PTR) for this IPv6 address.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    ReverseDNS
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv6. (default to undefined)
let reverseDNS: ReverseDNS; //

const { status, data } = await apiInstance.cloudIpv6RdnsCreate(
    id,
    reverseDNS
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reverseDNS** | **ReverseDNS**|  | |
| **id** | [**number**] | A unique integer value identifying this Public IPv6. | defaults to undefined|


### Return type

**ReverseDNS**

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

# **cloudIpv6RdnsRetrieve**
> ReverseDNS cloudIpv6RdnsRetrieve()

Get or update reverse DNS (PTR) for this IPv6 address.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv6. (default to undefined)

const { status, data } = await apiInstance.cloudIpv6RdnsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this Public IPv6. | defaults to undefined|


### Return type

**ReverseDNS**

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

# **cloudIpv6Retrieve**
> PublicIPv6 cloudIpv6Retrieve()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv6. (default to undefined)

const { status, data } = await apiInstance.cloudIpv6Retrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this Public IPv6. | defaults to undefined|


### Return type

**PublicIPv6**

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

# **cloudPrivateNetworksAddServerCreate**
> AddServerResponse cloudPrivateNetworksAddServerCreate(privateNetworkAddHost)

Manage private networks

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PrivateNetworkAddHost
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this private network. (default to undefined)
let privateNetworkAddHost: PrivateNetworkAddHost; //

const { status, data } = await apiInstance.cloudPrivateNetworksAddServerCreate(
    id,
    privateNetworkAddHost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **privateNetworkAddHost** | **PrivateNetworkAddHost**|  | |
| **id** | [**number**] | A unique integer value identifying this private network. | defaults to undefined|


### Return type

**AddServerResponse**

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

# **cloudPrivateNetworksCreate**
> PrivateNetwork cloudPrivateNetworksCreate(privateNetwork)

Manage private networks

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PrivateNetwork
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let privateNetwork: PrivateNetwork; //

const { status, data } = await apiInstance.cloudPrivateNetworksCreate(
    privateNetwork
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **privateNetwork** | **PrivateNetwork**|  | |


### Return type

**PrivateNetwork**

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

# **cloudPrivateNetworksDestroy**
> cloudPrivateNetworksDestroy()

Manage private networks

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this private network. (default to undefined)

const { status, data } = await apiInstance.cloudPrivateNetworksDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this private network. | defaults to undefined|


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

# **cloudPrivateNetworksList**
> PaginatedPrivateNetworkList cloudPrivateNetworksList()

Manage private networks

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudPrivateNetworksList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedPrivateNetworkList**

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

# **cloudPrivateNetworksPartialUpdate**
> PrivateNetwork cloudPrivateNetworksPartialUpdate()

Manage private networks

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PatchedPrivateNetwork
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this private network. (default to undefined)
let patchedPrivateNetwork: PatchedPrivateNetwork; // (optional)

const { status, data } = await apiInstance.cloudPrivateNetworksPartialUpdate(
    id,
    patchedPrivateNetwork
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedPrivateNetwork** | **PatchedPrivateNetwork**|  | |
| **id** | [**number**] | A unique integer value identifying this private network. | defaults to undefined|


### Return type

**PrivateNetwork**

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

# **cloudPrivateNetworksRemoveServerCreate**
> RemoveServerResponse cloudPrivateNetworksRemoveServerCreate(privateNetworkRemoveHost)

Manage private networks

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PrivateNetworkRemoveHost
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this private network. (default to undefined)
let privateNetworkRemoveHost: PrivateNetworkRemoveHost; //

const { status, data } = await apiInstance.cloudPrivateNetworksRemoveServerCreate(
    id,
    privateNetworkRemoveHost
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **privateNetworkRemoveHost** | **PrivateNetworkRemoveHost**|  | |
| **id** | [**number**] | A unique integer value identifying this private network. | defaults to undefined|


### Return type

**RemoveServerResponse**

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

# **cloudPrivateNetworksRetrieve**
> PrivateNetwork cloudPrivateNetworksRetrieve()

Manage private networks

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this private network. (default to undefined)

const { status, data } = await apiInstance.cloudPrivateNetworksRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this private network. | defaults to undefined|


### Return type

**PrivateNetwork**

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

# **cloudPrivateNetworksUpdate**
> PrivateNetwork cloudPrivateNetworksUpdate(privateNetwork)

Manage private networks

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PrivateNetwork
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this private network. (default to undefined)
let privateNetwork: PrivateNetwork; //

const { status, data } = await apiInstance.cloudPrivateNetworksUpdate(
    id,
    privateNetwork
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **privateNetwork** | **PrivateNetwork**|  | |
| **id** | [**number**] | A unique integer value identifying this private network. | defaults to undefined|


### Return type

**PrivateNetwork**

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

# **cloudServerPackagesByGenerationRetrieve**
> ServerProduct cloudServerPackagesByGenerationRetrieve()

List of available server products

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

const { status, data } = await apiInstance.cloudServerPackagesByGenerationRetrieve();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ServerProduct**

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

# **cloudServerPackagesList**
> PaginatedServerProductList cloudServerPackagesList()

List of available server products

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let generation: string; //Filter packages available on the given hardware generation (slug). Excludes free-tier-only packages when the generation is not free-tier eligible. (optional) (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudServerPackagesList(
    generation,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **generation** | [**string**] | Filter packages available on the given hardware generation (slug). Excludes free-tier-only packages when the generation is not free-tier eligible. | (optional) defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedServerProductList**

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

# **cloudServerPackagesRetrieve**
> ServerProduct cloudServerPackagesRetrieve()

List of available server products

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this metered product. (default to undefined)

const { status, data } = await apiInstance.cloudServerPackagesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this metered product. | defaults to undefined|


### Return type

**ServerProduct**

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

# **cloudServersActivityRetrieve**
> ActivityLogResponse cloudServersActivityRetrieve()

Get activity log for a server.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)

const { status, data } = await apiInstance.cloudServersActivityRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**ActivityLogResponse**

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

# **cloudServersAttachIpv4Create**
> AttachIPv4Response cloudServersAttachIpv4Create(attachIPv4Request)

Attach IPv4 address to server. The first attach lands on the primary NIC; subsequent attaches add a new secondary NIC carrying just that IPv4. The address is written to the machine\'s network configuration, which the guest OS only reads while booting: a running server answers `reboot_required: true` and stays unreachable on that address until it is restarted. Send `reboot: true` to have the restart issued here.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    AttachIPv4Request
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let attachIPv4Request: AttachIPv4Request; //

const { status, data } = await apiInstance.cloudServersAttachIpv4Create(
    id,
    attachIPv4Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachIPv4Request** | **AttachIPv4Request**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**AttachIPv4Response**

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

# **cloudServersAttachIpv6Create**
> AttachIPv6Response cloudServersAttachIpv6Create(attachIPv6Request)

Attach IPv6 address to server. Like IPv4, the address is written to the machine\'s network configuration and the guest OS reads it while booting: a running server answers `reboot_required: true` until it is restarted. Send `reboot: true` to have the restart issued here.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    AttachIPv6Request
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let attachIPv6Request: AttachIPv6Request; //

const { status, data } = await apiInstance.cloudServersAttachIpv6Create(
    id,
    attachIPv6Request
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachIPv6Request** | **AttachIPv6Request**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**AttachIPv6Response**

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

# **cloudServersBootIsosList**
> PaginatedBootISOList cloudServersBootIsosList()

List the ISO catalog entries visible to this user and their package compatibility.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudServersBootIsosList(
    id,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedBootISOList**

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

# **cloudServersConsoleCreate**
> ConsoleToken cloudServersConsoleCreate()

Get a VNC console token for browser-based access.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)

const { status, data } = await apiInstance.cloudServersConsoleCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**ConsoleToken**

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

# **cloudServersCreate**
> ServerAddResponse cloudServersCreate(serverAdd)

Create new server

### Example

```typescript
import {
    CloudApi,
    Configuration,
    ServerAdd
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let serverAdd: ServerAdd; //

const { status, data } = await apiInstance.cloudServersCreate(
    serverAdd
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serverAdd** | **ServerAdd**|  | |


### Return type

**ServerAddResponse**

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

# **cloudServersDestroy**
> cloudServersDestroy()

Cloud servers

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)

const { status, data } = await apiInstance.cloudServersDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


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

# **cloudServersDestroyProtectionCreate**
> DestroyProtectionResponse cloudServersDestroyProtectionCreate(destroyProtection)

Enable or disable destroy protection.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    DestroyProtection
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let destroyProtection: DestroyProtection; //

const { status, data } = await apiInstance.cloudServersDestroyProtectionCreate(
    id,
    destroyProtection
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **destroyProtection** | **DestroyProtection**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**DestroyProtectionResponse**

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

# **cloudServersDetachIpv4Create**
> ServerDetachIPv4Response cloudServersDetachIpv4Create()

Detach IPv4 from server. Without `ipv4`, the primary NIC\'s IPv4 is detached. Pass `ipv4=<id|slug>` to target a specific attached address (required when the server has more than one IPv4).

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let ipv4: string; //ID or slug of the IPv4 address to detach. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudServersDetachIpv4Create(
    id,
    ipv4
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|
| **ipv4** | [**string**] | ID or slug of the IPv4 address to detach. | (optional) defaults to undefined|


### Return type

**ServerDetachIPv4Response**

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

# **cloudServersDetachIpv6Create**
> DetachIPv6 cloudServersDetachIpv6Create()

Detach IPv6 from server

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)

const { status, data } = await apiInstance.cloudServersDetachIpv6Create(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**DetachIPv6**

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

# **cloudServersList**
> PaginatedServerList cloudServersList()

Cloud servers

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudServersList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedServerList**

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

# **cloudServersModifyPackageCreate**
> ServerUpgradeResponse cloudServersModifyPackageCreate(serverProductUpgrade)

Modify server package: downgrade available only for packages with the same disk size.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    ServerProductUpgrade
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let serverProductUpgrade: ServerProductUpgrade; //

const { status, data } = await apiInstance.cloudServersModifyPackageCreate(
    id,
    serverProductUpgrade
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serverProductUpgrade** | **ServerProductUpgrade**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**ServerUpgradeResponse**

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

# **cloudServersPartialUpdate**
> ServerDetail cloudServersPartialUpdate()

Cloud servers

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PatchedServerDetail
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let patchedServerDetail: PatchedServerDetail; // (optional)

const { status, data } = await apiInstance.cloudServersPartialUpdate(
    id,
    patchedServerDetail
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedServerDetail** | **PatchedServerDetail**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**ServerDetail**

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

# **cloudServersPowerManagementCreate**
> PowerManagement cloudServersPowerManagementCreate(powerManagementRequest)

Server power management

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PowerManagementRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let powerManagementRequest: PowerManagementRequest; //

const { status, data } = await apiInstance.cloudServersPowerManagementCreate(
    id,
    powerManagementRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **powerManagementRequest** | **PowerManagementRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**PowerManagement**

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

# **cloudServersPowerManagementRetrieve**
> PowerManagement cloudServersPowerManagementRetrieve()

Server power management

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)

const { status, data } = await apiInstance.cloudServersPowerManagementRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**PowerManagement**

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

# **cloudServersPublicInterfaceCreate**
> PublicInterface cloudServersPublicInterfaceCreate()

Public interface

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PublicInterface
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let publicInterface: PublicInterface; // (optional)

const { status, data } = await apiInstance.cloudServersPublicInterfaceCreate(
    id,
    publicInterface
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **publicInterface** | **PublicInterface**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**PublicInterface**

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

# **cloudServersPublicInterfaceDestroy**
> cloudServersPublicInterfaceDestroy()

Public interface

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)

const { status, data } = await apiInstance.cloudServersPublicInterfaceDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


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

# **cloudServersPublicInterfaceRetrieve**
> PublicInterface cloudServersPublicInterfaceRetrieve()

Public interface

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)

const { status, data } = await apiInstance.cloudServersPublicInterfaceRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**PublicInterface**

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

# **cloudServersRescueEnterCreate**
> RescueEnterQueued cloudServersRescueEnterCreate()

Boot the server from the default rescue image or a catalog ISO. The server is powered off first; use the console to complete the repair or installation. Not available for HA servers.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    IsoBootRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let isoBootRequest: IsoBootRequest; // (optional)

const { status, data } = await apiInstance.cloudServersRescueEnterCreate(
    id,
    isoBootRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **isoBootRequest** | **IsoBootRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**RescueEnterQueued**

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

# **cloudServersRescueExitCreate**
> RescueExitQueued cloudServersRescueExitCreate()

Exit rescue mode: detach the rescue ISO, restore the original boot order, and boot normally.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)

const { status, data } = await apiInstance.cloudServersRescueExitCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**RescueExitQueued**

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

# **cloudServersRetrieve**
> ServerDetail cloudServersRetrieve()

Cloud servers

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)

const { status, data } = await apiInstance.cloudServersRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**ServerDetail**

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

# **cloudServersRetryProvisionCreate**
> RetryProvision cloudServersRetryProvisionCreate()

Retry provision in case of a failed server

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)

const { status, data } = await apiInstance.cloudServersRetryProvisionCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**RetryProvision**

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

# **cloudServersSnapshotsCreate**
> PaginatedSnapshotList cloudServersSnapshotsCreate(snapshotCreate)

List snapshots for this server or queue a new snapshot.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    SnapshotCreate
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let snapshotCreate: SnapshotCreate; //
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudServersSnapshotsCreate(
    id,
    snapshotCreate,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **snapshotCreate** | **SnapshotCreate**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedSnapshotList**

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

# **cloudServersSnapshotsDestroy**
> SnapshotDeleteQueued cloudServersSnapshotsDestroy()

Delete a snapshot.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let snapshotName: string; // (default to undefined)

const { status, data } = await apiInstance.cloudServersSnapshotsDestroy(
    id,
    snapshotName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|
| **snapshotName** | [**string**] |  | defaults to undefined|


### Return type

**SnapshotDeleteQueued**

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

# **cloudServersSnapshotsList**
> PaginatedSnapshotList cloudServersSnapshotsList()

List snapshots for this server or queue a new snapshot.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudServersSnapshotsList(
    id,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedSnapshotList**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersSnapshotsRollbackCreate**
> SnapshotRollbackQueued cloudServersSnapshotsRollbackCreate()

Rollback the server to a specific snapshot.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let snapshotName: string; // (default to undefined)

const { status, data } = await apiInstance.cloudServersSnapshotsRollbackCreate(
    id,
    snapshotName
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|
| **snapshotName** | [**string**] |  | defaults to undefined|


### Return type

**SnapshotRollbackQueued**

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

# **cloudServersUpdate**
> ServerDetail cloudServersUpdate()

Cloud servers

### Example

```typescript
import {
    CloudApi,
    Configuration,
    ServerDetail
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let serverDetail: ServerDetail; // (optional)

const { status, data } = await apiInstance.cloudServersUpdate(
    id,
    serverDetail
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serverDetail** | **ServerDetail**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**ServerDetail**

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

# **cloudServersUsageRetrieve**
> ServerUsageResponse cloudServersUsageRetrieve()

Get current resource usage for a server.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)

const { status, data } = await apiInstance.cloudServersUsageRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**ServerUsageResponse**

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

# **cloudServersVolumesCreate**
> Volume cloudServersVolumesCreate(volume)

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    Volume
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let serverId: string; // (default to undefined)
let volume: Volume; //

const { status, data } = await apiInstance.cloudServersVolumesCreate(
    serverId,
    volume
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **volume** | **Volume**|  | |
| **serverId** | [**string**] |  | defaults to undefined|


### Return type

**Volume**

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

# **cloudServersVolumesDestroy**
> cloudServersVolumesDestroy()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let serverId: string; // (default to undefined)
let volumeId: string; // (default to undefined)

const { status, data } = await apiInstance.cloudServersVolumesDestroy(
    serverId,
    volumeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serverId** | [**string**] |  | defaults to undefined|
| **volumeId** | [**string**] |  | defaults to undefined|


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

# **cloudServersVolumesList**
> Array<Volume> cloudServersVolumesList()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let serverId: string; // (default to undefined)

const { status, data } = await apiInstance.cloudServersVolumesList(
    serverId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serverId** | [**string**] |  | defaults to undefined|


### Return type

**Array<Volume>**

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

# **cloudServersVolumesPartialUpdate**
> Volume cloudServersVolumesPartialUpdate()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PatchedVolume
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let serverId: string; // (default to undefined)
let volumeId: string; // (default to undefined)
let patchedVolume: PatchedVolume; // (optional)

const { status, data } = await apiInstance.cloudServersVolumesPartialUpdate(
    serverId,
    volumeId,
    patchedVolume
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedVolume** | **PatchedVolume**|  | |
| **serverId** | [**string**] |  | defaults to undefined|
| **volumeId** | [**string**] |  | defaults to undefined|


### Return type

**Volume**

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

# **cloudServersVolumesRetrieve**
> Volume cloudServersVolumesRetrieve()

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let serverId: string; // (default to undefined)
let volumeId: string; // (default to undefined)

const { status, data } = await apiInstance.cloudServersVolumesRetrieve(
    serverId,
    volumeId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serverId** | [**string**] |  | defaults to undefined|
| **volumeId** | [**string**] |  | defaults to undefined|


### Return type

**Volume**

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

# **cloudServersVolumesUpdate**
> Volume cloudServersVolumesUpdate(volume)

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    Volume
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let serverId: string; // (default to undefined)
let volumeId: string; // (default to undefined)
let volume: Volume; //

const { status, data } = await apiInstance.cloudServersVolumesUpdate(
    serverId,
    volumeId,
    volume
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **volume** | **Volume**|  | |
| **serverId** | [**string**] |  | defaults to undefined|
| **volumeId** | [**string**] |  | defaults to undefined|


### Return type

**Volume**

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

# **cloudStorageProductsList**
> PaginatedStorageProductList cloudStorageProductsList()

List of available storage products

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudStorageProductsList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedStorageProductList**

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

# **cloudStorageProductsRetrieve**
> StorageProduct cloudStorageProductsRetrieve()

List of available storage products

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this metered product. (default to undefined)

const { status, data } = await apiInstance.cloudStorageProductsRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this metered product. | defaults to undefined|


### Return type

**StorageProduct**

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

# **cloudVolumesAttachCreate**
> AttachVolume cloudVolumesAttachCreate(attachVolume)

Attach existing volume to a server

### Example

```typescript
import {
    CloudApi,
    Configuration,
    AttachVolume
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this storage. (default to undefined)
let attachVolume: AttachVolume; //

const { status, data } = await apiInstance.cloudVolumesAttachCreate(
    id,
    attachVolume
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachVolume** | **AttachVolume**|  | |
| **id** | [**number**] | A unique integer value identifying this storage. | defaults to undefined|


### Return type

**AttachVolume**

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

# **cloudVolumesDestroy**
> cloudVolumesDestroy()

Volumes management

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this storage. (default to undefined)

const { status, data } = await apiInstance.cloudVolumesDestroy(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this storage. | defaults to undefined|


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

# **cloudVolumesDetachCreate**
> DetachVolume cloudVolumesDetachCreate(volume)

Detach volume from server

### Example

```typescript
import {
    CloudApi,
    Configuration,
    Volume
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this storage. (default to undefined)
let volume: Volume; //

const { status, data } = await apiInstance.cloudVolumesDetachCreate(
    id,
    volume
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **volume** | **Volume**|  | |
| **id** | [**number**] | A unique integer value identifying this storage. | defaults to undefined|


### Return type

**DetachVolume**

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

# **cloudVolumesList**
> Array<Volume> cloudVolumesList()

Volumes management

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

const { status, data } = await apiInstance.cloudVolumesList();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Volume>**

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

# **cloudVolumesPartialUpdate**
> Volume cloudVolumesPartialUpdate()

Volumes management

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PatchedVolume
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this storage. (default to undefined)
let patchedVolume: PatchedVolume; // (optional)

const { status, data } = await apiInstance.cloudVolumesPartialUpdate(
    id,
    patchedVolume
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedVolume** | **PatchedVolume**|  | |
| **id** | [**number**] | A unique integer value identifying this storage. | defaults to undefined|


### Return type

**Volume**

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

# **cloudVolumesRetrieve**
> Volume cloudVolumesRetrieve()

Volumes management

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this storage. (default to undefined)

const { status, data } = await apiInstance.cloudVolumesRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this storage. | defaults to undefined|


### Return type

**Volume**

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

# **cloudVolumesUpdate**
> Volume cloudVolumesUpdate(volume)

Volumes management

### Example

```typescript
import {
    CloudApi,
    Configuration,
    Volume
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this storage. (default to undefined)
let volume: Volume; //

const { status, data } = await apiInstance.cloudVolumesUpdate(
    id,
    volume
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **volume** | **Volume**|  | |
| **id** | [**number**] | A unique integer value identifying this storage. | defaults to undefined|


### Return type

**Volume**

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

