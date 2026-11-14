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
|[**cloudGatewaysCreate**](#cloudgatewayscreate) | **POST** /api/cloud/gateways/ | |
|[**cloudGatewaysDestroy**](#cloudgatewaysdestroy) | **DELETE** /api/cloud/gateways/{id}/ | |
|[**cloudGatewaysFirewallRulesCreate**](#cloudgatewaysfirewallrulescreate) | **POST** /api/cloud/gateways/{gateway_id}/firewall-rules/ | |
|[**cloudGatewaysFirewallRulesDestroy**](#cloudgatewaysfirewallrulesdestroy) | **DELETE** /api/cloud/gateways/{gateway_id}/firewall-rules/{id}/ | |
|[**cloudGatewaysFirewallRulesList**](#cloudgatewaysfirewallruleslist) | **GET** /api/cloud/gateways/{gateway_id}/firewall-rules/ | |
|[**cloudGatewaysFirewallRulesMoveCreate**](#cloudgatewaysfirewallrulesmovecreate) | **POST** /api/cloud/gateways/{gateway_id}/firewall-rules/{id}/move/ | |
|[**cloudGatewaysFirewallRulesPartialUpdate**](#cloudgatewaysfirewallrulespartialupdate) | **PATCH** /api/cloud/gateways/{gateway_id}/firewall-rules/{id}/ | |
|[**cloudGatewaysFirewallRulesRetrieve**](#cloudgatewaysfirewallrulesretrieve) | **GET** /api/cloud/gateways/{gateway_id}/firewall-rules/{id}/ | |
|[**cloudGatewaysList**](#cloudgatewayslist) | **GET** /api/cloud/gateways/ | |
|[**cloudGatewaysListenersCreate**](#cloudgatewayslistenerscreate) | **POST** /api/cloud/gateways/{gateway_id}/listeners/ | |
|[**cloudGatewaysListenersDestroy**](#cloudgatewayslistenersdestroy) | **DELETE** /api/cloud/gateways/{gateway_id}/listeners/{id}/ | |
|[**cloudGatewaysListenersList**](#cloudgatewayslistenerslist) | **GET** /api/cloud/gateways/{gateway_id}/listeners/ | |
|[**cloudGatewaysListenersPartialUpdate**](#cloudgatewayslistenerspartialupdate) | **PATCH** /api/cloud/gateways/{gateway_id}/listeners/{id}/ | |
|[**cloudGatewaysListenersRetrieve**](#cloudgatewayslistenersretrieve) | **GET** /api/cloud/gateways/{gateway_id}/listeners/{id}/ | |
|[**cloudGatewaysListenersRoutesCreate**](#cloudgatewayslistenersroutescreate) | **POST** /api/cloud/gateways/{gateway_id}/listeners/{listener_id}/routes/ | |
|[**cloudGatewaysListenersRoutesDestroy**](#cloudgatewayslistenersroutesdestroy) | **DELETE** /api/cloud/gateways/{gateway_id}/listeners/{listener_id}/routes/{id}/ | |
|[**cloudGatewaysListenersRoutesList**](#cloudgatewayslistenersrouteslist) | **GET** /api/cloud/gateways/{gateway_id}/listeners/{listener_id}/routes/ | |
|[**cloudGatewaysListenersRoutesPartialUpdate**](#cloudgatewayslistenersroutespartialupdate) | **PATCH** /api/cloud/gateways/{gateway_id}/listeners/{listener_id}/routes/{id}/ | |
|[**cloudGatewaysListenersRoutesRetrieve**](#cloudgatewayslistenersroutesretrieve) | **GET** /api/cloud/gateways/{gateway_id}/listeners/{listener_id}/routes/{id}/ | |
|[**cloudGatewaysNetworksCreate**](#cloudgatewaysnetworkscreate) | **POST** /api/cloud/gateways/{gateway_id}/networks/ | |
|[**cloudGatewaysNetworksDestroy**](#cloudgatewaysnetworksdestroy) | **DELETE** /api/cloud/gateways/{gateway_id}/networks/{network_id}/ | |
|[**cloudGatewaysNetworksList**](#cloudgatewaysnetworkslist) | **GET** /api/cloud/gateways/{gateway_id}/networks/ | |
|[**cloudGatewaysNetworksPartialUpdate**](#cloudgatewaysnetworkspartialupdate) | **PATCH** /api/cloud/gateways/{gateway_id}/networks/{network_id}/ | |
|[**cloudGatewaysNetworksRetrieve**](#cloudgatewaysnetworksretrieve) | **GET** /api/cloud/gateways/{gateway_id}/networks/{network_id}/ | |
|[**cloudGatewaysOperationsList**](#cloudgatewaysoperationslist) | **GET** /api/cloud/gateways/{gateway_id}/operations/ | |
|[**cloudGatewaysOperationsRetrieve**](#cloudgatewaysoperationsretrieve) | **GET** /api/cloud/gateways/{gateway_id}/operations/{id}/ | |
|[**cloudGatewaysPartialUpdate**](#cloudgatewayspartialupdate) | **PATCH** /api/cloud/gateways/{id}/ | |
|[**cloudGatewaysPoolsBackendsCreate**](#cloudgatewayspoolsbackendscreate) | **POST** /api/cloud/gateways/{gateway_id}/pools/{pool_id}/backends/ | |
|[**cloudGatewaysPoolsBackendsDestroy**](#cloudgatewayspoolsbackendsdestroy) | **DELETE** /api/cloud/gateways/{gateway_id}/pools/{pool_id}/backends/{id}/ | |
|[**cloudGatewaysPoolsBackendsList**](#cloudgatewayspoolsbackendslist) | **GET** /api/cloud/gateways/{gateway_id}/pools/{pool_id}/backends/ | |
|[**cloudGatewaysPoolsBackendsPartialUpdate**](#cloudgatewayspoolsbackendspartialupdate) | **PATCH** /api/cloud/gateways/{gateway_id}/pools/{pool_id}/backends/{id}/ | |
|[**cloudGatewaysPoolsBackendsRetrieve**](#cloudgatewayspoolsbackendsretrieve) | **GET** /api/cloud/gateways/{gateway_id}/pools/{pool_id}/backends/{id}/ | |
|[**cloudGatewaysPoolsCreate**](#cloudgatewayspoolscreate) | **POST** /api/cloud/gateways/{gateway_id}/pools/ | |
|[**cloudGatewaysPoolsDestroy**](#cloudgatewayspoolsdestroy) | **DELETE** /api/cloud/gateways/{gateway_id}/pools/{id}/ | |
|[**cloudGatewaysPoolsList**](#cloudgatewayspoolslist) | **GET** /api/cloud/gateways/{gateway_id}/pools/ | |
|[**cloudGatewaysPoolsPartialUpdate**](#cloudgatewayspoolspartialupdate) | **PATCH** /api/cloud/gateways/{gateway_id}/pools/{id}/ | |
|[**cloudGatewaysPoolsRetrieve**](#cloudgatewayspoolsretrieve) | **GET** /api/cloud/gateways/{gateway_id}/pools/{id}/ | |
|[**cloudGatewaysPortForwardsCreate**](#cloudgatewaysportforwardscreate) | **POST** /api/cloud/gateways/{gateway_id}/port-forwards/ | |
|[**cloudGatewaysPortForwardsDestroy**](#cloudgatewaysportforwardsdestroy) | **DELETE** /api/cloud/gateways/{gateway_id}/port-forwards/{id}/ | |
|[**cloudGatewaysPortForwardsList**](#cloudgatewaysportforwardslist) | **GET** /api/cloud/gateways/{gateway_id}/port-forwards/ | |
|[**cloudGatewaysPortForwardsPartialUpdate**](#cloudgatewaysportforwardspartialupdate) | **PATCH** /api/cloud/gateways/{gateway_id}/port-forwards/{id}/ | |
|[**cloudGatewaysPortForwardsRetrieve**](#cloudgatewaysportforwardsretrieve) | **GET** /api/cloud/gateways/{gateway_id}/port-forwards/{id}/ | |
|[**cloudGatewaysReenrollCreate**](#cloudgatewaysreenrollcreate) | **POST** /api/cloud/gateways/{id}/reenroll/ | |
|[**cloudGatewaysRetrieve**](#cloudgatewaysretrieve) | **GET** /api/cloud/gateways/{id}/ | |
|[**cloudGatewaysStatusRetrieve**](#cloudgatewaysstatusretrieve) | **GET** /api/cloud/gateways/{id}/status/ | |
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
|[**cloudPrivateNetworksApplyRouteCreate**](#cloudprivatenetworksapplyroutecreate) | **POST** /api/cloud/private-networks/{id}/apply-route/ | |
|[**cloudPrivateNetworksCreate**](#cloudprivatenetworkscreate) | **POST** /api/cloud/private-networks/ | |
|[**cloudPrivateNetworksDestroy**](#cloudprivatenetworksdestroy) | **DELETE** /api/cloud/private-networks/{id}/ | |
|[**cloudPrivateNetworksList**](#cloudprivatenetworkslist) | **GET** /api/cloud/private-networks/ | |
|[**cloudPrivateNetworksPartialUpdate**](#cloudprivatenetworkspartialupdate) | **PATCH** /api/cloud/private-networks/{id}/ | |
|[**cloudPrivateNetworksRemoveServerCreate**](#cloudprivatenetworksremoveservercreate) | **POST** /api/cloud/private-networks/{id}/remove-server/ | |
|[**cloudPrivateNetworksRetrieve**](#cloudprivatenetworksretrieve) | **GET** /api/cloud/private-networks/{id}/ | |
|[**cloudPrivateNetworksRouteStatusRetrieve**](#cloudprivatenetworksroutestatusretrieve) | **GET** /api/cloud/private-networks/{id}/route-status/ | |
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
|[**cloudServersTrafficRetrieve**](#cloudserverstrafficretrieve) | **GET** /api/cloud/servers/{id}/traffic/ | |
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
> Bucket cloudBucketsCreate(bucketCreateRequest)

Create a bucket

### Example

```typescript
import {
    CloudApi,
    Configuration,
    BucketCreateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let bucketCreateRequest: BucketCreateRequest; //

const { status, data } = await apiInstance.cloudBucketsCreate(
    bucketCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bucketCreateRequest** | **BucketCreateRequest**|  | |


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
> Bucket cloudBucketsResizeCreate(bucketResizeRequest)

Resize a bucket

### Example

```typescript
import {
    CloudApi,
    Configuration,
    BucketResizeRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this S3 bucket. (default to undefined)
let bucketResizeRequest: BucketResizeRequest; //

const { status, data } = await apiInstance.cloudBucketsResizeCreate(
    id,
    bucketResizeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bucketResizeRequest** | **BucketResizeRequest**|  | |
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
> Bucket cloudBucketsVisibilityCreate(bucketVisibilityRequest)

Set bucket visibility

### Example

```typescript
import {
    CloudApi,
    Configuration,
    BucketVisibilityRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this S3 bucket. (default to undefined)
let bucketVisibilityRequest: BucketVisibilityRequest; //

const { status, data } = await apiInstance.cloudBucketsVisibilityCreate(
    id,
    bucketVisibilityRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bucketVisibilityRequest** | **BucketVisibilityRequest**|  | |
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
> FirewallRulesSet cloudFirewallRulesSetCreate(firewallRulesSetRequest)

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    FirewallRulesSetRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let firewallRulesSetRequest: FirewallRulesSetRequest; //

const { status, data } = await apiInstance.cloudFirewallRulesSetCreate(
    firewallRulesSetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **firewallRulesSetRequest** | **FirewallRulesSetRequest**|  | |


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
    PatchedFirewallRulesSetRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this firewall rules set. (default to undefined)
let patchedFirewallRulesSetRequest: PatchedFirewallRulesSetRequest; // (optional)

const { status, data } = await apiInstance.cloudFirewallRulesSetPartialUpdate(
    id,
    patchedFirewallRulesSetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedFirewallRulesSetRequest** | **PatchedFirewallRulesSetRequest**|  | |
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
> FirewallRule cloudFirewallRulesSetRulesCreate(firewallRuleRequest)

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    FirewallRuleRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let rulesSetId: string; // (default to undefined)
let firewallRuleRequest: FirewallRuleRequest; //

const { status, data } = await apiInstance.cloudFirewallRulesSetRulesCreate(
    rulesSetId,
    firewallRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **firewallRuleRequest** | **FirewallRuleRequest**|  | |
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
    PatchedFirewallRuleRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let ruleId: string; // (default to undefined)
let rulesSetId: string; // (default to undefined)
let patchedFirewallRuleRequest: PatchedFirewallRuleRequest; // (optional)

const { status, data } = await apiInstance.cloudFirewallRulesSetRulesPartialUpdate(
    ruleId,
    rulesSetId,
    patchedFirewallRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedFirewallRuleRequest** | **PatchedFirewallRuleRequest**|  | |
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
> FirewallRule cloudFirewallRulesSetRulesUpdate(firewallRuleRequest)

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    FirewallRuleRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let ruleId: string; // (default to undefined)
let rulesSetId: string; // (default to undefined)
let firewallRuleRequest: FirewallRuleRequest; //

const { status, data } = await apiInstance.cloudFirewallRulesSetRulesUpdate(
    ruleId,
    rulesSetId,
    firewallRuleRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **firewallRuleRequest** | **FirewallRuleRequest**|  | |
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
> FirewallRulesSet cloudFirewallRulesSetUpdate(firewallRulesSetRequest)

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    FirewallRulesSetRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this firewall rules set. (default to undefined)
let firewallRulesSetRequest: FirewallRulesSetRequest; //

const { status, data } = await apiInstance.cloudFirewallRulesSetUpdate(
    id,
    firewallRulesSetRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **firewallRulesSetRequest** | **FirewallRulesSetRequest**|  | |
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
    FloatingIPv4CreateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let floatingIPv4CreateRequest: FloatingIPv4CreateRequest; // (optional)

const { status, data } = await apiInstance.cloudFloatingIpv4Create(
    floatingIPv4CreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **floatingIPv4CreateRequest** | **FloatingIPv4CreateRequest**|  | |


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
> ReverseDNS cloudFloatingIpv4RdnsCreate(reverseDNSRequest)

Get or update reverse DNS (PTR) for the IPv4 address wrapped by this floating IP.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    ReverseDNSRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv4. (default to undefined)
let reverseDNSRequest: ReverseDNSRequest; //

const { status, data } = await apiInstance.cloudFloatingIpv4RdnsCreate(
    id,
    reverseDNSRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reverseDNSRequest** | **ReverseDNSRequest**|  | |
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
    FloatingIPv6CreateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let floatingIPv6CreateRequest: FloatingIPv6CreateRequest; // (optional)

const { status, data } = await apiInstance.cloudFloatingIpv6Create(
    floatingIPv6CreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **floatingIPv6CreateRequest** | **FloatingIPv6CreateRequest**|  | |


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
> ReverseDNS cloudFloatingIpv6RdnsCreate(reverseDNSRequest)

Get or update reverse DNS (PTR) for the IPv6 address wrapped by this floating IP.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    ReverseDNSRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this floating IPv6. (default to undefined)
let reverseDNSRequest: ReverseDNSRequest; //

const { status, data } = await apiInstance.cloudFloatingIpv6RdnsCreate(
    id,
    reverseDNSRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reverseDNSRequest** | **ReverseDNSRequest**|  | |
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

# **cloudGatewaysCreate**
> Gateway cloudGatewaysCreate(gatewayCreateRequest)

Reserve a gateway and queue its provisioning (spec 11.1); its state shows the progress.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    GatewayCreateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayCreateRequest: GatewayCreateRequest; //

const { status, data } = await apiInstance.cloudGatewaysCreate(
    gatewayCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayCreateRequest** | **GatewayCreateRequest**|  | |


### Return type

**Gateway**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  * Location - The cluster\&#39;s encryption status resource, to poll for the outcome. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysDestroy**
> GatewayOperation cloudGatewaysDestroy()

Delete the gateway (spec 11.5): its VM is destroyed, then its networks and IPv4 are released. Without the preview\'s revision, networks and servers, 409 with a fresh preview.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: string; // (default to undefined)
let networks: Array<number>; //The preview\'s network ids. (optional) (default to undefined)
let revision: number; //The gateway\'s desired revision from the preview; without it, a preview. (optional) (default to undefined)
let servers: Array<number>; //The preview\'s server ids. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysDestroy(
    id,
    networks,
    revision,
    servers
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|
| **networks** | **Array&lt;number&gt;** | The preview\&#39;s network ids. | (optional) defaults to undefined|
| **revision** | [**number**] | The gateway\&#39;s desired revision from the preview; without it, a preview. | (optional) defaults to undefined|
| **servers** | **Array&lt;number&gt;** | The preview\&#39;s server ids. | (optional) defaults to undefined|


### Return type

**GatewayOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  * Location - The cluster\&#39;s encryption status resource, to poll for the outcome. <br>  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysFirewallRulesCreate**
> GatewayFirewallRule cloudGatewaysFirewallRulesCreate(gatewayFirewallRuleWriteRequest)

Add a rule after the last one (spec 5.7); it is pending until the agent applies its revision.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    GatewayFirewallRuleWriteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let gatewayFirewallRuleWriteRequest: GatewayFirewallRuleWriteRequest; //

const { status, data } = await apiInstance.cloudGatewaysFirewallRulesCreate(
    gatewayId,
    gatewayFirewallRuleWriteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayFirewallRuleWriteRequest** | **GatewayFirewallRuleWriteRequest**|  | |
| **gatewayId** | [**number**] |  | defaults to undefined|


### Return type

**GatewayFirewallRule**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysFirewallRulesDestroy**
> GatewayOperation cloudGatewaysFirewallRulesDestroy()

Delete a rule (spec 5.11): 202 with the record the agent\'s acknowledgement completes. Without the preview\'s revision, 409 with a fresh one.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)
let revision: number; //The gateway\'s desired revision from the preview; without it, a preview. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysFirewallRulesDestroy(
    gatewayId,
    id,
    revision
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|
| **revision** | [**number**] | The gateway\&#39;s desired revision from the preview; without it, a preview. | (optional) defaults to undefined|


### Return type

**GatewayOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  * Location - The cluster\&#39;s encryption status resource, to poll for the outcome. <br>  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysFirewallRulesList**
> PaginatedGatewayFirewallRuleList cloudGatewaysFirewallRulesList()

A gateway\'s firewall rules, in evaluation order

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysFirewallRulesList(
    gatewayId,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedGatewayFirewallRuleList**

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

# **cloudGatewaysFirewallRulesMoveCreate**
> GatewayFirewallRule cloudGatewaysFirewallRulesMoveCreate(gatewayFirewallMoveRequest)

Move a rule to a position, the others keeping their order. Without the preview\'s revision, 409 with a fresh one.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    GatewayFirewallMoveRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)
let gatewayFirewallMoveRequest: GatewayFirewallMoveRequest; //
let revision: number; //The gateway\'s desired revision from the preview; without it, a preview. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysFirewallRulesMoveCreate(
    gatewayId,
    id,
    gatewayFirewallMoveRequest,
    revision
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayFirewallMoveRequest** | **GatewayFirewallMoveRequest**|  | |
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|
| **revision** | [**number**] | The gateway\&#39;s desired revision from the preview; without it, a preview. | (optional) defaults to undefined|


### Return type

**GatewayFirewallRule**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysFirewallRulesPartialUpdate**
> GatewayFirewallRule cloudGatewaysFirewallRulesPartialUpdate()

Change a rule\'s fields; a source or destination is replaced whole. Its position stays.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PatchedGatewayFirewallRuleWriteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)
let patchedGatewayFirewallRuleWriteRequest: PatchedGatewayFirewallRuleWriteRequest; // (optional)

const { status, data } = await apiInstance.cloudGatewaysFirewallRulesPartialUpdate(
    gatewayId,
    id,
    patchedGatewayFirewallRuleWriteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedGatewayFirewallRuleWriteRequest** | **PatchedGatewayFirewallRuleWriteRequest**|  | |
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**GatewayFirewallRule**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysFirewallRulesRetrieve**
> GatewayFirewallRule cloudGatewaysFirewallRulesRetrieve()

A gateway\'s firewall rules, in evaluation order

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysFirewallRulesRetrieve(
    gatewayId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**GatewayFirewallRule**

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

# **cloudGatewaysList**
> PaginatedGatewayList cloudGatewaysList()

Manage gateways

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedGatewayList**

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

# **cloudGatewaysListenersCreate**
> GatewayLBListener cloudGatewaysListenersCreate()

Add a listener (spec 6.8): tcp and udp name a pool, http takes routes. Pending until applied.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    GatewayLBListenerWriteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let gatewayLBListenerWriteRequest: GatewayLBListenerWriteRequest; // (optional)

const { status, data } = await apiInstance.cloudGatewaysListenersCreate(
    gatewayId,
    gatewayLBListenerWriteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayLBListenerWriteRequest** | **GatewayLBListenerWriteRequest**|  | |
| **gatewayId** | [**number**] |  | defaults to undefined|


### Return type

**GatewayLBListener**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysListenersDestroy**
> GatewayOperation cloudGatewaysListenersDestroy()

Delete a listener and its routes (spec 5.11): 202 with the record the agent\'s acknowledgement completes. Without the preview\'s revision, 409 with a fresh one.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)
let revision: number; //The gateway\'s desired revision from the preview; without it, a preview. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysListenersDestroy(
    gatewayId,
    id,
    revision
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|
| **revision** | [**number**] | The gateway\&#39;s desired revision from the preview; without it, a preview. | (optional) defaults to undefined|


### Return type

**GatewayOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  * Location - The cluster\&#39;s encryption status resource, to poll for the outcome. <br>  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysListenersList**
> PaginatedGatewayLBListenerList cloudGatewaysListenersList()

A gateway\'s load balancer listeners

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysListenersList(
    gatewayId,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedGatewayLBListenerList**

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

# **cloudGatewaysListenersPartialUpdate**
> GatewayLBListener cloudGatewaysListenersPartialUpdate()

Change a listener\'s pool, sources, comment or enabled flag; protocol, port and mode are fixed.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PatchedGatewayLBListenerWriteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)
let patchedGatewayLBListenerWriteRequest: PatchedGatewayLBListenerWriteRequest; // (optional)

const { status, data } = await apiInstance.cloudGatewaysListenersPartialUpdate(
    gatewayId,
    id,
    patchedGatewayLBListenerWriteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedGatewayLBListenerWriteRequest** | **PatchedGatewayLBListenerWriteRequest**|  | |
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**GatewayLBListener**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysListenersRetrieve**
> GatewayLBListener cloudGatewaysListenersRetrieve()

A gateway\'s load balancer listeners

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysListenersRetrieve(
    gatewayId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**GatewayLBListener**

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

# **cloudGatewaysListenersRoutesCreate**
> GatewayRoute cloudGatewaysListenersRoutesCreate()

Add a route (spec 5.6): hostnames and a path prefix to a pool. Pending until applied.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    GatewayRouteWriteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let listenerId: number; // (default to undefined)
let gatewayRouteWriteRequest: GatewayRouteWriteRequest; // (optional)

const { status, data } = await apiInstance.cloudGatewaysListenersRoutesCreate(
    gatewayId,
    listenerId,
    gatewayRouteWriteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayRouteWriteRequest** | **GatewayRouteWriteRequest**|  | |
| **gatewayId** | [**number**] |  | defaults to undefined|
| **listenerId** | [**number**] |  | defaults to undefined|


### Return type

**GatewayRoute**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysListenersRoutesDestroy**
> GatewayOperation cloudGatewaysListenersRoutesDestroy()

Delete a route (spec 5.11): 202 with the record the agent\'s acknowledgement completes. Without the preview\'s revision, 409 with a fresh one.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)
let listenerId: number; // (default to undefined)
let revision: number; //The gateway\'s desired revision from the preview; without it, a preview. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysListenersRoutesDestroy(
    gatewayId,
    id,
    listenerId,
    revision
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|
| **listenerId** | [**number**] |  | defaults to undefined|
| **revision** | [**number**] | The gateway\&#39;s desired revision from the preview; without it, a preview. | (optional) defaults to undefined|


### Return type

**GatewayOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  * Location - The cluster\&#39;s encryption status resource, to poll for the outcome. <br>  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysListenersRoutesList**
> PaginatedGatewayRouteList cloudGatewaysListenersRoutesList()

An http listener\'s routes

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let listenerId: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysListenersRoutesList(
    gatewayId,
    listenerId,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **listenerId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedGatewayRouteList**

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

# **cloudGatewaysListenersRoutesPartialUpdate**
> GatewayRoute cloudGatewaysListenersRoutesPartialUpdate()

Change a route; hostnames are replaced whole.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PatchedGatewayRouteWriteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)
let listenerId: number; // (default to undefined)
let patchedGatewayRouteWriteRequest: PatchedGatewayRouteWriteRequest; // (optional)

const { status, data } = await apiInstance.cloudGatewaysListenersRoutesPartialUpdate(
    gatewayId,
    id,
    listenerId,
    patchedGatewayRouteWriteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedGatewayRouteWriteRequest** | **PatchedGatewayRouteWriteRequest**|  | |
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|
| **listenerId** | [**number**] |  | defaults to undefined|


### Return type

**GatewayRoute**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysListenersRoutesRetrieve**
> GatewayRoute cloudGatewaysListenersRoutesRetrieve()

An http listener\'s routes

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)
let listenerId: number; // (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysListenersRoutesRetrieve(
    gatewayId,
    id,
    listenerId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|
| **listenerId** | [**number**] |  | defaults to undefined|


### Return type

**GatewayRoute**

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

# **cloudGatewaysNetworksCreate**
> GatewayOperation cloudGatewaysNetworksCreate(gatewayNetworkCreateRequest)

Attach a network (spec 11.3): the operation reserves it and hotplugs the gateway\'s NIC.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    GatewayNetworkCreateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let gatewayNetworkCreateRequest: GatewayNetworkCreateRequest; //

const { status, data } = await apiInstance.cloudGatewaysNetworksCreate(
    gatewayId,
    gatewayNetworkCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayNetworkCreateRequest** | **GatewayNetworkCreateRequest**|  | |
| **gatewayId** | [**number**] |  | defaults to undefined|


### Return type

**GatewayOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  * Location - The cluster\&#39;s encryption status resource, to poll for the outcome. <br>  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysNetworksDestroy**
> GatewayOperation cloudGatewaysNetworksDestroy()

Detach a network (spec 11.3). Without the preview\'s revision and servers, 409 with a fresh preview.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let networkId: number; // (default to undefined)
let revision: number; //The gateway\'s desired revision from the preview; without it, a preview. (optional) (default to undefined)
let servers: Array<number>; //The preview\'s server ids. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysNetworksDestroy(
    gatewayId,
    networkId,
    revision,
    servers
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **networkId** | [**number**] |  | defaults to undefined|
| **revision** | [**number**] | The gateway\&#39;s desired revision from the preview; without it, a preview. | (optional) defaults to undefined|
| **servers** | **Array&lt;number&gt;** | The preview\&#39;s server ids. | (optional) defaults to undefined|


### Return type

**GatewayOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  * Location - The cluster\&#39;s encryption status resource, to poll for the outcome. <br>  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysNetworksList**
> PaginatedGatewayNetworkList cloudGatewaysNetworksList()

A gateway\'s private networks, by network id

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysNetworksList(
    gatewayId,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedGatewayNetworkList**

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

# **cloudGatewaysNetworksPartialUpdate**
> GatewayNetwork cloudGatewaysNetworksPartialUpdate()

Switch a router network\'s SNAT (spec 6.4). Turning it off without the preview\'s revision and servers answers 409 with a fresh preview; the change is pending until the agent applies it.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PatchedGatewayNetworkUpdateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let networkId: number; // (default to undefined)
let revision: number; //The gateway\'s desired revision from the preview; without it, a preview. (optional) (default to undefined)
let servers: Array<number>; //The preview\'s server ids. (optional) (default to undefined)
let patchedGatewayNetworkUpdateRequest: PatchedGatewayNetworkUpdateRequest; // (optional)

const { status, data } = await apiInstance.cloudGatewaysNetworksPartialUpdate(
    gatewayId,
    networkId,
    revision,
    servers,
    patchedGatewayNetworkUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedGatewayNetworkUpdateRequest** | **PatchedGatewayNetworkUpdateRequest**|  | |
| **gatewayId** | [**number**] |  | defaults to undefined|
| **networkId** | [**number**] |  | defaults to undefined|
| **revision** | [**number**] | The gateway\&#39;s desired revision from the preview; without it, a preview. | (optional) defaults to undefined|
| **servers** | **Array&lt;number&gt;** | The preview\&#39;s server ids. | (optional) defaults to undefined|


### Return type

**GatewayNetwork**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysNetworksRetrieve**
> GatewayNetwork cloudGatewaysNetworksRetrieve()

A gateway\'s private networks, by network id

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let networkId: number; // (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysNetworksRetrieve(
    gatewayId,
    networkId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **networkId** | [**number**] |  | defaults to undefined|


### Return type

**GatewayNetwork**

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

# **cloudGatewaysOperationsList**
> PaginatedGatewayOperationList cloudGatewaysOperationsList()

A gateway\'s operations, newest first

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysOperationsList(
    gatewayId,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedGatewayOperationList**

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

# **cloudGatewaysOperationsRetrieve**
> GatewayOperation cloudGatewaysOperationsRetrieve()

A gateway\'s operations, newest first

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: string; // (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysOperationsRetrieve(
    gatewayId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GatewayOperation**

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

# **cloudGatewaysPartialUpdate**
> Gateway cloudGatewaysPartialUpdate()

Rename the gateway or change its maintenance window. The name is not compiled, so no revision follows; a new window reaches the agent in a new revision (spec 11.4).

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PatchedGatewayUpdateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: string; // (default to undefined)
let patchedGatewayUpdateRequest: PatchedGatewayUpdateRequest; // (optional)

const { status, data } = await apiInstance.cloudGatewaysPartialUpdate(
    id,
    patchedGatewayUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedGatewayUpdateRequest** | **PatchedGatewayUpdateRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Gateway**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysPoolsBackendsCreate**
> GatewayBackend cloudGatewaysPoolsBackendsCreate()

Add a server to the pool (spec 5.5); it is pending until the agent applies its revision.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    GatewayBackendWriteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let poolId: number; // (default to undefined)
let gatewayBackendWriteRequest: GatewayBackendWriteRequest; // (optional)

const { status, data } = await apiInstance.cloudGatewaysPoolsBackendsCreate(
    gatewayId,
    poolId,
    gatewayBackendWriteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayBackendWriteRequest** | **GatewayBackendWriteRequest**|  | |
| **gatewayId** | [**number**] |  | defaults to undefined|
| **poolId** | [**number**] |  | defaults to undefined|


### Return type

**GatewayBackend**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysPoolsBackendsDestroy**
> GatewayOperation cloudGatewaysPoolsBackendsDestroy()

Remove a server (spec 5.11): 202 with the record the agent\'s acknowledgement completes. Without the preview\'s revision, 409 with a fresh one.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)
let poolId: number; // (default to undefined)
let revision: number; //The gateway\'s desired revision from the preview; without it, a preview. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysPoolsBackendsDestroy(
    gatewayId,
    id,
    poolId,
    revision
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|
| **poolId** | [**number**] |  | defaults to undefined|
| **revision** | [**number**] | The gateway\&#39;s desired revision from the preview; without it, a preview. | (optional) defaults to undefined|


### Return type

**GatewayOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  * Location - The cluster\&#39;s encryption status resource, to poll for the outcome. <br>  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysPoolsBackendsList**
> PaginatedGatewayBackendList cloudGatewaysPoolsBackendsList()

A backend pool\'s servers

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let poolId: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysPoolsBackendsList(
    gatewayId,
    poolId,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **poolId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedGatewayBackendList**

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

# **cloudGatewaysPoolsBackendsPartialUpdate**
> GatewayBackend cloudGatewaysPoolsBackendsPartialUpdate()

Change a server. The last enabled server of a pool in use cannot be disabled.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PatchedGatewayBackendWriteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)
let poolId: number; // (default to undefined)
let patchedGatewayBackendWriteRequest: PatchedGatewayBackendWriteRequest; // (optional)

const { status, data } = await apiInstance.cloudGatewaysPoolsBackendsPartialUpdate(
    gatewayId,
    id,
    poolId,
    patchedGatewayBackendWriteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedGatewayBackendWriteRequest** | **PatchedGatewayBackendWriteRequest**|  | |
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|
| **poolId** | [**number**] |  | defaults to undefined|


### Return type

**GatewayBackend**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysPoolsBackendsRetrieve**
> GatewayBackend cloudGatewaysPoolsBackendsRetrieve()

A backend pool\'s servers

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)
let poolId: number; // (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysPoolsBackendsRetrieve(
    gatewayId,
    id,
    poolId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|
| **poolId** | [**number**] |  | defaults to undefined|


### Return type

**GatewayBackend**

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

# **cloudGatewaysPoolsCreate**
> GatewayBackendPool cloudGatewaysPoolsCreate()

Add a backend pool (spec 5.5); it is pending until the agent applies its revision.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    GatewayBackendPoolWriteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let gatewayBackendPoolWriteRequest: GatewayBackendPoolWriteRequest; // (optional)

const { status, data } = await apiInstance.cloudGatewaysPoolsCreate(
    gatewayId,
    gatewayBackendPoolWriteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayBackendPoolWriteRequest** | **GatewayBackendPoolWriteRequest**|  | |
| **gatewayId** | [**number**] |  | defaults to undefined|


### Return type

**GatewayBackendPool**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysPoolsDestroy**
> GatewayOperation cloudGatewaysPoolsDestroy()

Delete an unused pool and its servers (spec 5.11): 202 with the record the agent\'s acknowledgement completes. Without the preview\'s revision, 409 with a fresh one.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)
let revision: number; //The gateway\'s desired revision from the preview; without it, a preview. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysPoolsDestroy(
    gatewayId,
    id,
    revision
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|
| **revision** | [**number**] | The gateway\&#39;s desired revision from the preview; without it, a preview. | (optional) defaults to undefined|


### Return type

**GatewayOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  * Location - The cluster\&#39;s encryption status resource, to poll for the outcome. <br>  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysPoolsList**
> PaginatedGatewayBackendPoolList cloudGatewaysPoolsList()

A gateway\'s backend pools

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysPoolsList(
    gatewayId,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedGatewayBackendPoolList**

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

# **cloudGatewaysPoolsPartialUpdate**
> GatewayBackendPool cloudGatewaysPoolsPartialUpdate()

Change a pool; health_check takes the fields to change. Every listener and route on it must still fit.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PatchedGatewayBackendPoolWriteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)
let patchedGatewayBackendPoolWriteRequest: PatchedGatewayBackendPoolWriteRequest; // (optional)

const { status, data } = await apiInstance.cloudGatewaysPoolsPartialUpdate(
    gatewayId,
    id,
    patchedGatewayBackendPoolWriteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedGatewayBackendPoolWriteRequest** | **PatchedGatewayBackendPoolWriteRequest**|  | |
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**GatewayBackendPool**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysPoolsRetrieve**
> GatewayBackendPool cloudGatewaysPoolsRetrieve()

A gateway\'s backend pools

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysPoolsRetrieve(
    gatewayId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**GatewayBackendPool**

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

# **cloudGatewaysPortForwardsCreate**
> GatewayForward cloudGatewaysPortForwardsCreate(gatewayForwardWriteRequest)

Add a port forward (spec 6.7); it is pending until the agent applies its revision.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    GatewayForwardWriteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let gatewayForwardWriteRequest: GatewayForwardWriteRequest; //

const { status, data } = await apiInstance.cloudGatewaysPortForwardsCreate(
    gatewayId,
    gatewayForwardWriteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayForwardWriteRequest** | **GatewayForwardWriteRequest**|  | |
| **gatewayId** | [**number**] |  | defaults to undefined|


### Return type

**GatewayForward**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysPortForwardsDestroy**
> GatewayOperation cloudGatewaysPortForwardsDestroy()

Delete a forward (spec 5.11): 202 with the record the agent\'s acknowledgement completes. Without the preview\'s revision, 409 with a fresh one.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)
let revision: number; //The gateway\'s desired revision from the preview; without it, a preview. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysPortForwardsDestroy(
    gatewayId,
    id,
    revision
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|
| **revision** | [**number**] | The gateway\&#39;s desired revision from the preview; without it, a preview. | (optional) defaults to undefined|


### Return type

**GatewayOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  * Location - The cluster\&#39;s encryption status resource, to poll for the outcome. <br>  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysPortForwardsList**
> PaginatedGatewayForwardList cloudGatewaysPortForwardsList()

A gateway\'s port forwards

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysPortForwardsList(
    gatewayId,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedGatewayForwardList**

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

# **cloudGatewaysPortForwardsPartialUpdate**
> GatewayForward cloudGatewaysPortForwardsPartialUpdate()

Change a forward\'s fields; public_ports and target are each replaced whole.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PatchedGatewayForwardWriteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)
let patchedGatewayForwardWriteRequest: PatchedGatewayForwardWriteRequest; // (optional)

const { status, data } = await apiInstance.cloudGatewaysPortForwardsPartialUpdate(
    gatewayId,
    id,
    patchedGatewayForwardWriteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedGatewayForwardWriteRequest** | **PatchedGatewayForwardWriteRequest**|  | |
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**GatewayForward**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysPortForwardsRetrieve**
> GatewayForward cloudGatewaysPortForwardsRetrieve()

A gateway\'s port forwards

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let gatewayId: number; // (default to undefined)
let id: number; // (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysPortForwardsRetrieve(
    gatewayId,
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayId** | [**number**] |  | defaults to undefined|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**GatewayForward**

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

# **cloudGatewaysReenrollCreate**
> GatewayOperation cloudGatewaysReenrollCreate()

Re-enroll the gateway (spec 8.1 step 6): its agent token is revoked and it restarts to enroll again. Without the preview\'s revision, networks and servers, 409 with a fresh preview.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    GatewayReenrollRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: string; // (default to undefined)
let gatewayReenrollRequest: GatewayReenrollRequest; // (optional)

const { status, data } = await apiInstance.cloudGatewaysReenrollCreate(
    id,
    gatewayReenrollRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **gatewayReenrollRequest** | **GatewayReenrollRequest**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GatewayOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  * Location - The cluster\&#39;s encryption status resource, to poll for the outcome. <br>  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudGatewaysRetrieve**
> Gateway cloudGatewaysRetrieve()

Manage gateways

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**Gateway**

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

# **cloudGatewaysStatusRetrieve**
> GatewayStatus cloudGatewaysStatusRetrieve()

The gateway\'s state and the customer part of its agent\'s last report (spec 9.5).

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: string; // (default to undefined)

const { status, data } = await apiInstance.cloudGatewaysStatusRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] |  | defaults to undefined|


### Return type

**GatewayStatus**

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
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

const { status, data } = await apiInstance.cloudIpv4Create();
```

### Parameters
This endpoint does not have any parameters.


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
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv4. (default to undefined)

const { status, data } = await apiInstance.cloudIpv4DetachCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this Public IPv4. | defaults to undefined|


### Return type

**DetachIPv4Response**

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
> ReverseDNS cloudIpv4RdnsCreate(reverseDNSRequest)

Get or update reverse DNS (PTR) for this IPv4 address.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    ReverseDNSRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv4. (default to undefined)
let reverseDNSRequest: ReverseDNSRequest; //

const { status, data } = await apiInstance.cloudIpv4RdnsCreate(
    id,
    reverseDNSRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reverseDNSRequest** | **ReverseDNSRequest**|  | |
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
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

const { status, data } = await apiInstance.cloudIpv6Create();
```

### Parameters
This endpoint does not have any parameters.


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
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv6. (default to undefined)

const { status, data } = await apiInstance.cloudIpv6DetachCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this Public IPv6. | defaults to undefined|


### Return type

**DetachIPv6Response**

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
> ReverseDNS cloudIpv6RdnsCreate(reverseDNSRequest)

Get or update reverse DNS (PTR) for this IPv6 address.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    ReverseDNSRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv6. (default to undefined)
let reverseDNSRequest: ReverseDNSRequest; //

const { status, data } = await apiInstance.cloudIpv6RdnsCreate(
    id,
    reverseDNSRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reverseDNSRequest** | **ReverseDNSRequest**|  | |
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
> AddServerResponse cloudPrivateNetworksAddServerCreate(privateNetworkAddHostRequest)

Manage private networks

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PrivateNetworkAddHostRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this private network. (default to undefined)
let privateNetworkAddHostRequest: PrivateNetworkAddHostRequest; //

const { status, data } = await apiInstance.cloudPrivateNetworksAddServerCreate(
    id,
    privateNetworkAddHostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **privateNetworkAddHostRequest** | **PrivateNetworkAddHostRequest**|  | |
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

# **cloudPrivateNetworksApplyRouteCreate**
> GatewayOperation cloudPrivateNetworksApplyRouteCreate(applyRouteRequest)

Re-render the named servers\' routes and reboot them (spec 6.3); naming a server acknowledges its reboot.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    ApplyRouteRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; // (default to undefined)
let applyRouteRequest: ApplyRouteRequest; //

const { status, data } = await apiInstance.cloudPrivateNetworksApplyRouteCreate(
    id,
    applyRouteRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applyRouteRequest** | **ApplyRouteRequest**|  | |
| **id** | [**number**] |  | defaults to undefined|


### Return type

**GatewayOperation**

### Authorization

[tokenAuth](../README.md#tokenAuth), [cookieAuth](../README.md#cookieAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  * Location - The cluster\&#39;s encryption status resource, to poll for the outcome. <br>  |
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudPrivateNetworksCreate**
> PrivateNetwork cloudPrivateNetworksCreate(privateNetworkRequest)

Manage private networks

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PrivateNetworkRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let privateNetworkRequest: PrivateNetworkRequest; //

const { status, data } = await apiInstance.cloudPrivateNetworksCreate(
    privateNetworkRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **privateNetworkRequest** | **PrivateNetworkRequest**|  | |


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
    PatchedPrivateNetworkUpdateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this private network. (default to undefined)
let patchedPrivateNetworkUpdateRequest: PatchedPrivateNetworkUpdateRequest; // (optional)

const { status, data } = await apiInstance.cloudPrivateNetworksPartialUpdate(
    id,
    patchedPrivateNetworkUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedPrivateNetworkUpdateRequest** | **PatchedPrivateNetworkUpdateRequest**|  | |
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
> RemoveServerResponse cloudPrivateNetworksRemoveServerCreate(privateNetworkRemoveHostRequest)

Manage private networks

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PrivateNetworkRemoveHostRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this private network. (default to undefined)
let privateNetworkRemoveHostRequest: PrivateNetworkRemoveHostRequest; //

const { status, data } = await apiInstance.cloudPrivateNetworksRemoveServerCreate(
    id,
    privateNetworkRemoveHostRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **privateNetworkRemoveHostRequest** | **PrivateNetworkRemoveHostRequest**|  | |
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

# **cloudPrivateNetworksRouteStatusRetrieve**
> RouteStatus cloudPrivateNetworksRouteStatusRetrieve()

Each server\'s default route against the spec 6.2 rule, read from Proxmox, and the network\'s route applies.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; // (default to undefined)

const { status, data } = await apiInstance.cloudPrivateNetworksRouteStatusRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] |  | defaults to undefined|


### Return type

**RouteStatus**

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
> PrivateNetwork cloudPrivateNetworksUpdate()

Manage private networks

### Example

```typescript
import {
    CloudApi,
    Configuration,
    PrivateNetworkUpdateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this private network. (default to undefined)
let privateNetworkUpdateRequest: PrivateNetworkUpdateRequest; // (optional)

const { status, data } = await apiInstance.cloudPrivateNetworksUpdate(
    id,
    privateNetworkUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **privateNetworkUpdateRequest** | **PrivateNetworkUpdateRequest**|  | |
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
> Array<BootISO> cloudServersBootIsosList()

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

const { status, data } = await apiInstance.cloudServersBootIsosList(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**Array<BootISO>**

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
> ServerAddResponse cloudServersCreate(serverAddRequest)

Create new server

### Example

```typescript
import {
    CloudApi,
    Configuration,
    ServerAddRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let serverAddRequest: ServerAddRequest; //

const { status, data } = await apiInstance.cloudServersCreate(
    serverAddRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serverAddRequest** | **ServerAddRequest**|  | |


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
> DestroyProtectionResponse cloudServersDestroyProtectionCreate(destroyProtectionRequest)

Enable or disable destroy protection.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    DestroyProtectionRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let destroyProtectionRequest: DestroyProtectionRequest; //

const { status, data } = await apiInstance.cloudServersDestroyProtectionCreate(
    id,
    destroyProtectionRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **destroyProtectionRequest** | **DestroyProtectionRequest**|  | |
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
> ServerUpgradeResponse cloudServersModifyPackageCreate(serverProductUpgradeRequest)

Modify server package: downgrade available only for packages with the same disk size.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    ServerProductUpgradeRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let serverProductUpgradeRequest: ServerProductUpgradeRequest; //

const { status, data } = await apiInstance.cloudServersModifyPackageCreate(
    id,
    serverProductUpgradeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serverProductUpgradeRequest** | **ServerProductUpgradeRequest**|  | |
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
    PatchedServerDetailRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let patchedServerDetailRequest: PatchedServerDetailRequest; // (optional)

const { status, data } = await apiInstance.cloudServersPartialUpdate(
    id,
    patchedServerDetailRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedServerDetailRequest** | **PatchedServerDetailRequest**|  | |
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
    PublicInterfaceRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let publicInterfaceRequest: PublicInterfaceRequest; // (optional)

const { status, data } = await apiInstance.cloudServersPublicInterfaceCreate(
    id,
    publicInterfaceRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **publicInterfaceRequest** | **PublicInterfaceRequest**|  | |
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
> SnapshotCreateQueued cloudServersSnapshotsCreate(snapshotCreateRequest)

Cloud servers

### Example

```typescript
import {
    CloudApi,
    Configuration,
    SnapshotCreateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let snapshotCreateRequest: SnapshotCreateRequest; //

const { status, data } = await apiInstance.cloudServersSnapshotsCreate(
    id,
    snapshotCreateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **snapshotCreateRequest** | **SnapshotCreateRequest**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**SnapshotCreateQueued**

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
> Array<Snapshot> cloudServersSnapshotsList()

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

const { status, data } = await apiInstance.cloudServersSnapshotsList(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**Array<Snapshot>**

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

# **cloudServersTrafficRetrieve**
> ServerTrafficResponse cloudServersTrafficRetrieve()

Get this month\'s traffic usage for a server.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)

const { status, data } = await apiInstance.cloudServersTrafficRetrieve(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**ServerTrafficResponse**

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

# **cloudServersUpdate**
> ServerDetail cloudServersUpdate()

Cloud servers

### Example

```typescript
import {
    CloudApi,
    Configuration,
    ServerDetailRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let serverDetailRequest: ServerDetailRequest; // (optional)

const { status, data } = await apiInstance.cloudServersUpdate(
    id,
    serverDetailRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **serverDetailRequest** | **ServerDetailRequest**|  | |
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
> Volume cloudServersVolumesCreate(volumeRequest)

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    VolumeRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let serverId: string; // (default to undefined)
let volumeRequest: VolumeRequest; //

const { status, data } = await apiInstance.cloudServersVolumesCreate(
    serverId,
    volumeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **volumeRequest** | **VolumeRequest**|  | |
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
    PatchedVolumeUpdateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let serverId: string; // (default to undefined)
let volumeId: string; // (default to undefined)
let patchedVolumeUpdateRequest: PatchedVolumeUpdateRequest; // (optional)

const { status, data } = await apiInstance.cloudServersVolumesPartialUpdate(
    serverId,
    volumeId,
    patchedVolumeUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedVolumeUpdateRequest** | **PatchedVolumeUpdateRequest**|  | |
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
|**409** |  |  -  |

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
> Volume cloudServersVolumesUpdate(volumeUpdateRequest)

Adds :class:`~account.iam_enforcement.IAMActionPermission` as an intersection with the route\'s existing permission classes (spec §6).  Detail routes (``self.detail``) defer the role/scope check to ``has_object_permission`` so the account-scoped ``get_object`` answers 404 for foreign IDs before any role denial; every other route enforces in ``has_permission``. A detail action that never calls ``get_object`` would skip enforcement — the route probes pin the denial for each route.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    VolumeUpdateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let serverId: string; // (default to undefined)
let volumeId: string; // (default to undefined)
let volumeUpdateRequest: VolumeUpdateRequest; //

const { status, data } = await apiInstance.cloudServersVolumesUpdate(
    serverId,
    volumeId,
    volumeUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **volumeUpdateRequest** | **VolumeUpdateRequest**|  | |
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
|**409** |  |  -  |

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
> AttachVolume cloudVolumesAttachCreate(attachVolumeRequest)

Attach existing volume to a server

### Example

```typescript
import {
    CloudApi,
    Configuration,
    AttachVolumeRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this storage. (default to undefined)
let attachVolumeRequest: AttachVolumeRequest; //

const { status, data } = await apiInstance.cloudVolumesAttachCreate(
    id,
    attachVolumeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachVolumeRequest** | **AttachVolumeRequest**|  | |
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
> DetachVolume cloudVolumesDetachCreate()

Detach volume from server

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this storage. (default to undefined)

const { status, data } = await apiInstance.cloudVolumesDetachCreate(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | A unique integer value identifying this storage. | defaults to undefined|


### Return type

**DetachVolume**

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
    PatchedVolumeUpdateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this storage. (default to undefined)
let patchedVolumeUpdateRequest: PatchedVolumeUpdateRequest; // (optional)

const { status, data } = await apiInstance.cloudVolumesPartialUpdate(
    id,
    patchedVolumeUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **patchedVolumeUpdateRequest** | **PatchedVolumeUpdateRequest**|  | |
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
|**409** |  |  -  |

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
> Volume cloudVolumesUpdate(volumeUpdateRequest)

Volumes management

### Example

```typescript
import {
    CloudApi,
    Configuration,
    VolumeUpdateRequest
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this storage. (default to undefined)
let volumeUpdateRequest: VolumeUpdateRequest; //

const { status, data } = await apiInstance.cloudVolumesUpdate(
    id,
    volumeUpdateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **volumeUpdateRequest** | **VolumeUpdateRequest**|  | |
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
|**409** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

