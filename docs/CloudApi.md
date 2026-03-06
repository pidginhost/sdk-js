# CloudApi

All URIs are relative to *https://www.pidginhost.com*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**cloudFirewallRulesSetCreate**](#cloudfirewallrulessetcreate) | **POST** /api/cloud/firewall-rules-set/ | |
|[**cloudFirewallRulesSetCreate2**](#cloudfirewallrulessetcreate2) | **POST** /api/v1/cloud/firewall-rules-set/ | |
|[**cloudFirewallRulesSetDestroy**](#cloudfirewallrulessetdestroy) | **DELETE** /api/cloud/firewall-rules-set/{id}/ | |
|[**cloudFirewallRulesSetDestroy2**](#cloudfirewallrulessetdestroy2) | **DELETE** /api/v1/cloud/firewall-rules-set/{id}/ | |
|[**cloudFirewallRulesSetList**](#cloudfirewallrulessetlist) | **GET** /api/cloud/firewall-rules-set/ | |
|[**cloudFirewallRulesSetList2**](#cloudfirewallrulessetlist2) | **GET** /api/v1/cloud/firewall-rules-set/ | |
|[**cloudFirewallRulesSetPartialUpdate**](#cloudfirewallrulessetpartialupdate) | **PATCH** /api/cloud/firewall-rules-set/{id}/ | |
|[**cloudFirewallRulesSetPartialUpdate2**](#cloudfirewallrulessetpartialupdate2) | **PATCH** /api/v1/cloud/firewall-rules-set/{id}/ | |
|[**cloudFirewallRulesSetRetrieve**](#cloudfirewallrulessetretrieve) | **GET** /api/cloud/firewall-rules-set/{id}/ | |
|[**cloudFirewallRulesSetRetrieve2**](#cloudfirewallrulessetretrieve2) | **GET** /api/v1/cloud/firewall-rules-set/{id}/ | |
|[**cloudFirewallRulesSetRulesCreate**](#cloudfirewallrulessetrulescreate) | **POST** /api/cloud/firewall-rules-set/{rules_set_id}/rules/ | |
|[**cloudFirewallRulesSetRulesCreate2**](#cloudfirewallrulessetrulescreate2) | **POST** /api/v1/cloud/firewall-rules-set/{rules_set_id}/rules/ | |
|[**cloudFirewallRulesSetRulesDestroy**](#cloudfirewallrulessetrulesdestroy) | **DELETE** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | |
|[**cloudFirewallRulesSetRulesDestroy2**](#cloudfirewallrulessetrulesdestroy2) | **DELETE** /api/v1/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | |
|[**cloudFirewallRulesSetRulesList**](#cloudfirewallrulessetruleslist) | **GET** /api/cloud/firewall-rules-set/{rules_set_id}/rules/ | |
|[**cloudFirewallRulesSetRulesList2**](#cloudfirewallrulessetruleslist2) | **GET** /api/v1/cloud/firewall-rules-set/{rules_set_id}/rules/ | |
|[**cloudFirewallRulesSetRulesPartialUpdate**](#cloudfirewallrulessetrulespartialupdate) | **PATCH** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | |
|[**cloudFirewallRulesSetRulesPartialUpdate2**](#cloudfirewallrulessetrulespartialupdate2) | **PATCH** /api/v1/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | |
|[**cloudFirewallRulesSetRulesRetrieve**](#cloudfirewallrulessetrulesretrieve) | **GET** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | |
|[**cloudFirewallRulesSetRulesRetrieve2**](#cloudfirewallrulessetrulesretrieve2) | **GET** /api/v1/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | |
|[**cloudFirewallRulesSetRulesUpdate**](#cloudfirewallrulessetrulesupdate) | **PUT** /api/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | |
|[**cloudFirewallRulesSetRulesUpdate2**](#cloudfirewallrulessetrulesupdate2) | **PUT** /api/v1/cloud/firewall-rules-set/{rules_set_id}/rules/{rule_id}/ | |
|[**cloudFirewallRulesSetUpdate**](#cloudfirewallrulessetupdate) | **PUT** /api/cloud/firewall-rules-set/{id}/ | |
|[**cloudFirewallRulesSetUpdate2**](#cloudfirewallrulessetupdate2) | **PUT** /api/v1/cloud/firewall-rules-set/{id}/ | |
|[**cloudImagesList**](#cloudimageslist) | **GET** /api/cloud/images/ | |
|[**cloudImagesList2**](#cloudimageslist2) | **GET** /api/v1/cloud/images/ | |
|[**cloudImagesRetrieve**](#cloudimagesretrieve) | **GET** /api/cloud/images/{id}/ | |
|[**cloudImagesRetrieve2**](#cloudimagesretrieve2) | **GET** /api/v1/cloud/images/{id}/ | |
|[**cloudIpv4Create**](#cloudipv4create) | **POST** /api/cloud/ipv4/ | |
|[**cloudIpv4Create2**](#cloudipv4create2) | **POST** /api/v1/cloud/ipv4/ | |
|[**cloudIpv4Destroy**](#cloudipv4destroy) | **DELETE** /api/cloud/ipv4/{id}/ | |
|[**cloudIpv4Destroy2**](#cloudipv4destroy2) | **DELETE** /api/v1/cloud/ipv4/{id}/ | |
|[**cloudIpv4DetachCreate**](#cloudipv4detachcreate) | **POST** /api/cloud/ipv4/{id}/detach/ | |
|[**cloudIpv4DetachCreate2**](#cloudipv4detachcreate2) | **POST** /api/v1/cloud/ipv4/{id}/detach/ | |
|[**cloudIpv4List**](#cloudipv4list) | **GET** /api/cloud/ipv4/ | |
|[**cloudIpv4List2**](#cloudipv4list2) | **GET** /api/v1/cloud/ipv4/ | |
|[**cloudIpv4RdnsCreate**](#cloudipv4rdnscreate) | **POST** /api/cloud/ipv4/{id}/rdns/ | |
|[**cloudIpv4RdnsCreate2**](#cloudipv4rdnscreate2) | **POST** /api/v1/cloud/ipv4/{id}/rdns/ | |
|[**cloudIpv4RdnsRetrieve**](#cloudipv4rdnsretrieve) | **GET** /api/cloud/ipv4/{id}/rdns/ | |
|[**cloudIpv4RdnsRetrieve2**](#cloudipv4rdnsretrieve2) | **GET** /api/v1/cloud/ipv4/{id}/rdns/ | |
|[**cloudIpv4Retrieve**](#cloudipv4retrieve) | **GET** /api/cloud/ipv4/{id}/ | |
|[**cloudIpv4Retrieve2**](#cloudipv4retrieve2) | **GET** /api/v1/cloud/ipv4/{id}/ | |
|[**cloudIpv6Create**](#cloudipv6create) | **POST** /api/cloud/ipv6/ | |
|[**cloudIpv6Create2**](#cloudipv6create2) | **POST** /api/v1/cloud/ipv6/ | |
|[**cloudIpv6Destroy**](#cloudipv6destroy) | **DELETE** /api/cloud/ipv6/{id}/ | |
|[**cloudIpv6Destroy2**](#cloudipv6destroy2) | **DELETE** /api/v1/cloud/ipv6/{id}/ | |
|[**cloudIpv6DetachCreate**](#cloudipv6detachcreate) | **POST** /api/cloud/ipv6/{id}/detach/ | |
|[**cloudIpv6DetachCreate2**](#cloudipv6detachcreate2) | **POST** /api/v1/cloud/ipv6/{id}/detach/ | |
|[**cloudIpv6List**](#cloudipv6list) | **GET** /api/cloud/ipv6/ | |
|[**cloudIpv6List2**](#cloudipv6list2) | **GET** /api/v1/cloud/ipv6/ | |
|[**cloudIpv6RdnsCreate**](#cloudipv6rdnscreate) | **POST** /api/cloud/ipv6/{id}/rdns/ | |
|[**cloudIpv6RdnsCreate2**](#cloudipv6rdnscreate2) | **POST** /api/v1/cloud/ipv6/{id}/rdns/ | |
|[**cloudIpv6RdnsRetrieve**](#cloudipv6rdnsretrieve) | **GET** /api/cloud/ipv6/{id}/rdns/ | |
|[**cloudIpv6RdnsRetrieve2**](#cloudipv6rdnsretrieve2) | **GET** /api/v1/cloud/ipv6/{id}/rdns/ | |
|[**cloudIpv6Retrieve**](#cloudipv6retrieve) | **GET** /api/cloud/ipv6/{id}/ | |
|[**cloudIpv6Retrieve2**](#cloudipv6retrieve2) | **GET** /api/v1/cloud/ipv6/{id}/ | |
|[**cloudPrivateNetworksAddServerCreate**](#cloudprivatenetworksaddservercreate) | **POST** /api/cloud/private-networks/{id}/add-server/ | |
|[**cloudPrivateNetworksAddServerCreate2**](#cloudprivatenetworksaddservercreate2) | **POST** /api/v1/cloud/private-networks/{id}/add-server/ | |
|[**cloudPrivateNetworksCreate**](#cloudprivatenetworkscreate) | **POST** /api/cloud/private-networks/ | |
|[**cloudPrivateNetworksCreate2**](#cloudprivatenetworkscreate2) | **POST** /api/v1/cloud/private-networks/ | |
|[**cloudPrivateNetworksDestroy**](#cloudprivatenetworksdestroy) | **DELETE** /api/cloud/private-networks/{id}/ | |
|[**cloudPrivateNetworksDestroy2**](#cloudprivatenetworksdestroy2) | **DELETE** /api/v1/cloud/private-networks/{id}/ | |
|[**cloudPrivateNetworksList**](#cloudprivatenetworkslist) | **GET** /api/cloud/private-networks/ | |
|[**cloudPrivateNetworksList2**](#cloudprivatenetworkslist2) | **GET** /api/v1/cloud/private-networks/ | |
|[**cloudPrivateNetworksPartialUpdate**](#cloudprivatenetworkspartialupdate) | **PATCH** /api/cloud/private-networks/{id}/ | |
|[**cloudPrivateNetworksPartialUpdate2**](#cloudprivatenetworkspartialupdate2) | **PATCH** /api/v1/cloud/private-networks/{id}/ | |
|[**cloudPrivateNetworksRemoveServerCreate**](#cloudprivatenetworksremoveservercreate) | **POST** /api/cloud/private-networks/{id}/remove-server/ | |
|[**cloudPrivateNetworksRemoveServerCreate2**](#cloudprivatenetworksremoveservercreate2) | **POST** /api/v1/cloud/private-networks/{id}/remove-server/ | |
|[**cloudPrivateNetworksRetrieve**](#cloudprivatenetworksretrieve) | **GET** /api/cloud/private-networks/{id}/ | |
|[**cloudPrivateNetworksRetrieve2**](#cloudprivatenetworksretrieve2) | **GET** /api/v1/cloud/private-networks/{id}/ | |
|[**cloudPrivateNetworksUpdate**](#cloudprivatenetworksupdate) | **PUT** /api/cloud/private-networks/{id}/ | |
|[**cloudPrivateNetworksUpdate2**](#cloudprivatenetworksupdate2) | **PUT** /api/v1/cloud/private-networks/{id}/ | |
|[**cloudServerPackagesList**](#cloudserverpackageslist) | **GET** /api/cloud/server-packages/ | |
|[**cloudServerPackagesList2**](#cloudserverpackageslist2) | **GET** /api/v1/cloud/server-packages/ | |
|[**cloudServerPackagesRetrieve**](#cloudserverpackagesretrieve) | **GET** /api/cloud/server-packages/{id}/ | |
|[**cloudServerPackagesRetrieve2**](#cloudserverpackagesretrieve2) | **GET** /api/v1/cloud/server-packages/{id}/ | |
|[**cloudServersActivityRetrieve**](#cloudserversactivityretrieve) | **GET** /api/cloud/servers/{id}/activity/ | |
|[**cloudServersActivityRetrieve2**](#cloudserversactivityretrieve2) | **GET** /api/v1/cloud/servers/{id}/activity/ | |
|[**cloudServersAttachIpv4Create**](#cloudserversattachipv4create) | **POST** /api/cloud/servers/{id}/attach-ipv4/ | |
|[**cloudServersAttachIpv4Create2**](#cloudserversattachipv4create2) | **POST** /api/v1/cloud/servers/{id}/attach-ipv4/ | |
|[**cloudServersAttachIpv6Create**](#cloudserversattachipv6create) | **POST** /api/cloud/servers/{id}/attach-ipv6/ | |
|[**cloudServersAttachIpv6Create2**](#cloudserversattachipv6create2) | **POST** /api/v1/cloud/servers/{id}/attach-ipv6/ | |
|[**cloudServersConsoleCreate**](#cloudserversconsolecreate) | **POST** /api/cloud/servers/{id}/console/ | |
|[**cloudServersConsoleCreate2**](#cloudserversconsolecreate2) | **POST** /api/v1/cloud/servers/{id}/console/ | |
|[**cloudServersCreate**](#cloudserverscreate) | **POST** /api/cloud/servers/ | |
|[**cloudServersCreate2**](#cloudserverscreate2) | **POST** /api/v1/cloud/servers/ | |
|[**cloudServersDestroy**](#cloudserversdestroy) | **DELETE** /api/cloud/servers/{id}/ | |
|[**cloudServersDestroy2**](#cloudserversdestroy2) | **DELETE** /api/v1/cloud/servers/{id}/ | |
|[**cloudServersDestroyProtectionCreate**](#cloudserversdestroyprotectioncreate) | **POST** /api/cloud/servers/{id}/destroy-protection/ | |
|[**cloudServersDestroyProtectionCreate2**](#cloudserversdestroyprotectioncreate2) | **POST** /api/v1/cloud/servers/{id}/destroy-protection/ | |
|[**cloudServersDetachIpv4Create**](#cloudserversdetachipv4create) | **POST** /api/cloud/servers/{id}/detach-ipv4/ | |
|[**cloudServersDetachIpv4Create2**](#cloudserversdetachipv4create2) | **POST** /api/v1/cloud/servers/{id}/detach-ipv4/ | |
|[**cloudServersDetachIpv6Create**](#cloudserversdetachipv6create) | **POST** /api/cloud/servers/{id}/detach-ipv6/ | |
|[**cloudServersDetachIpv6Create2**](#cloudserversdetachipv6create2) | **POST** /api/v1/cloud/servers/{id}/detach-ipv6/ | |
|[**cloudServersList**](#cloudserverslist) | **GET** /api/cloud/servers/ | |
|[**cloudServersList2**](#cloudserverslist2) | **GET** /api/v1/cloud/servers/ | |
|[**cloudServersModifyPackageCreate**](#cloudserversmodifypackagecreate) | **POST** /api/cloud/servers/{id}/modify-package/ | |
|[**cloudServersModifyPackageCreate2**](#cloudserversmodifypackagecreate2) | **POST** /api/v1/cloud/servers/{id}/modify-package/ | |
|[**cloudServersPartialUpdate**](#cloudserverspartialupdate) | **PATCH** /api/cloud/servers/{id}/ | |
|[**cloudServersPartialUpdate2**](#cloudserverspartialupdate2) | **PATCH** /api/v1/cloud/servers/{id}/ | |
|[**cloudServersPowerManagementCreate**](#cloudserverspowermanagementcreate) | **POST** /api/cloud/servers/{id}/power-management/ | |
|[**cloudServersPowerManagementCreate2**](#cloudserverspowermanagementcreate2) | **POST** /api/v1/cloud/servers/{id}/power-management/ | |
|[**cloudServersPowerManagementRetrieve**](#cloudserverspowermanagementretrieve) | **GET** /api/cloud/servers/{id}/power-management/ | |
|[**cloudServersPowerManagementRetrieve2**](#cloudserverspowermanagementretrieve2) | **GET** /api/v1/cloud/servers/{id}/power-management/ | |
|[**cloudServersPublicInterfaceCreate**](#cloudserverspublicinterfacecreate) | **POST** /api/cloud/servers/{id}/public-interface/ | |
|[**cloudServersPublicInterfaceCreate2**](#cloudserverspublicinterfacecreate2) | **POST** /api/v1/cloud/servers/{id}/public-interface/ | |
|[**cloudServersPublicInterfaceDestroy**](#cloudserverspublicinterfacedestroy) | **DELETE** /api/cloud/servers/{id}/public-interface/ | |
|[**cloudServersPublicInterfaceDestroy2**](#cloudserverspublicinterfacedestroy2) | **DELETE** /api/v1/cloud/servers/{id}/public-interface/ | |
|[**cloudServersPublicInterfaceRetrieve**](#cloudserverspublicinterfaceretrieve) | **GET** /api/cloud/servers/{id}/public-interface/ | |
|[**cloudServersPublicInterfaceRetrieve2**](#cloudserverspublicinterfaceretrieve2) | **GET** /api/v1/cloud/servers/{id}/public-interface/ | |
|[**cloudServersRetrieve**](#cloudserversretrieve) | **GET** /api/cloud/servers/{id}/ | |
|[**cloudServersRetrieve2**](#cloudserversretrieve2) | **GET** /api/v1/cloud/servers/{id}/ | |
|[**cloudServersRetryProvisionCreate**](#cloudserversretryprovisioncreate) | **POST** /api/cloud/servers/{id}/retry-provision/ | |
|[**cloudServersRetryProvisionCreate2**](#cloudserversretryprovisioncreate2) | **POST** /api/v1/cloud/servers/{id}/retry-provision/ | |
|[**cloudServersSnapshotsCreate**](#cloudserverssnapshotscreate) | **POST** /api/cloud/servers/{id}/snapshots/ | |
|[**cloudServersSnapshotsCreate2**](#cloudserverssnapshotscreate2) | **POST** /api/v1/cloud/servers/{id}/snapshots/ | |
|[**cloudServersSnapshotsDestroy**](#cloudserverssnapshotsdestroy) | **DELETE** /api/cloud/servers/{id}/snapshots/{snapshot_name}/ | |
|[**cloudServersSnapshotsDestroy2**](#cloudserverssnapshotsdestroy2) | **DELETE** /api/v1/cloud/servers/{id}/snapshots/{snapshot_name}/ | |
|[**cloudServersSnapshotsList**](#cloudserverssnapshotslist) | **GET** /api/cloud/servers/{id}/snapshots/ | |
|[**cloudServersSnapshotsList2**](#cloudserverssnapshotslist2) | **GET** /api/v1/cloud/servers/{id}/snapshots/ | |
|[**cloudServersSnapshotsRollbackCreate**](#cloudserverssnapshotsrollbackcreate) | **POST** /api/cloud/servers/{id}/snapshots/{snapshot_name}/rollback/ | |
|[**cloudServersSnapshotsRollbackCreate2**](#cloudserverssnapshotsrollbackcreate2) | **POST** /api/v1/cloud/servers/{id}/snapshots/{snapshot_name}/rollback/ | |
|[**cloudServersUpdate**](#cloudserversupdate) | **PUT** /api/cloud/servers/{id}/ | |
|[**cloudServersUpdate2**](#cloudserversupdate2) | **PUT** /api/v1/cloud/servers/{id}/ | |
|[**cloudServersUsageRetrieve**](#cloudserversusageretrieve) | **GET** /api/cloud/servers/{id}/usage/ | |
|[**cloudServersUsageRetrieve2**](#cloudserversusageretrieve2) | **GET** /api/v1/cloud/servers/{id}/usage/ | |
|[**cloudServersVolumesCreate**](#cloudserversvolumescreate) | **POST** /api/cloud/servers/{server_id}/volumes/ | |
|[**cloudServersVolumesCreate2**](#cloudserversvolumescreate2) | **POST** /api/v1/cloud/servers/{server_id}/volumes/ | |
|[**cloudServersVolumesDestroy**](#cloudserversvolumesdestroy) | **DELETE** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | |
|[**cloudServersVolumesDestroy2**](#cloudserversvolumesdestroy2) | **DELETE** /api/v1/cloud/servers/{server_id}/volumes/{volume_id}/ | |
|[**cloudServersVolumesList**](#cloudserversvolumeslist) | **GET** /api/cloud/servers/{server_id}/volumes/ | |
|[**cloudServersVolumesList2**](#cloudserversvolumeslist2) | **GET** /api/v1/cloud/servers/{server_id}/volumes/ | |
|[**cloudServersVolumesPartialUpdate**](#cloudserversvolumespartialupdate) | **PATCH** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | |
|[**cloudServersVolumesPartialUpdate2**](#cloudserversvolumespartialupdate2) | **PATCH** /api/v1/cloud/servers/{server_id}/volumes/{volume_id}/ | |
|[**cloudServersVolumesRetrieve**](#cloudserversvolumesretrieve) | **GET** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | |
|[**cloudServersVolumesRetrieve2**](#cloudserversvolumesretrieve2) | **GET** /api/v1/cloud/servers/{server_id}/volumes/{volume_id}/ | |
|[**cloudServersVolumesUpdate**](#cloudserversvolumesupdate) | **PUT** /api/cloud/servers/{server_id}/volumes/{volume_id}/ | |
|[**cloudServersVolumesUpdate2**](#cloudserversvolumesupdate2) | **PUT** /api/v1/cloud/servers/{server_id}/volumes/{volume_id}/ | |
|[**cloudStorageProductsList**](#cloudstorageproductslist) | **GET** /api/cloud/storage-products/ | |
|[**cloudStorageProductsList2**](#cloudstorageproductslist2) | **GET** /api/v1/cloud/storage-products/ | |
|[**cloudStorageProductsRetrieve**](#cloudstorageproductsretrieve) | **GET** /api/cloud/storage-products/{id}/ | |
|[**cloudStorageProductsRetrieve2**](#cloudstorageproductsretrieve2) | **GET** /api/v1/cloud/storage-products/{id}/ | |
|[**cloudVolumesAttachCreate**](#cloudvolumesattachcreate) | **POST** /api/cloud/volumes/{id}/attach/ | |
|[**cloudVolumesAttachCreate2**](#cloudvolumesattachcreate2) | **POST** /api/v1/cloud/volumes/{id}/attach/ | |
|[**cloudVolumesDestroy**](#cloudvolumesdestroy) | **DELETE** /api/cloud/volumes/{id}/ | |
|[**cloudVolumesDestroy2**](#cloudvolumesdestroy2) | **DELETE** /api/v1/cloud/volumes/{id}/ | |
|[**cloudVolumesDetachCreate**](#cloudvolumesdetachcreate) | **POST** /api/cloud/volumes/{id}/detach/ | |
|[**cloudVolumesDetachCreate2**](#cloudvolumesdetachcreate2) | **POST** /api/v1/cloud/volumes/{id}/detach/ | |
|[**cloudVolumesList**](#cloudvolumeslist) | **GET** /api/cloud/volumes/ | |
|[**cloudVolumesList2**](#cloudvolumeslist2) | **GET** /api/v1/cloud/volumes/ | |
|[**cloudVolumesPartialUpdate**](#cloudvolumespartialupdate) | **PATCH** /api/cloud/volumes/{id}/ | |
|[**cloudVolumesPartialUpdate2**](#cloudvolumespartialupdate2) | **PATCH** /api/v1/cloud/volumes/{id}/ | |
|[**cloudVolumesRetrieve**](#cloudvolumesretrieve) | **GET** /api/cloud/volumes/{id}/ | |
|[**cloudVolumesRetrieve2**](#cloudvolumesretrieve2) | **GET** /api/v1/cloud/volumes/{id}/ | |
|[**cloudVolumesUpdate**](#cloudvolumesupdate) | **PUT** /api/cloud/volumes/{id}/ | |
|[**cloudVolumesUpdate2**](#cloudvolumesupdate2) | **PUT** /api/v1/cloud/volumes/{id}/ | |

# **cloudFirewallRulesSetCreate**
> FirewallRulesSet cloudFirewallRulesSetCreate(firewallRulesSet)

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudFirewallRulesSetCreate2**
> FirewallRulesSet cloudFirewallRulesSetCreate2(firewallRulesSet)

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudFirewallRulesSetCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudFirewallRulesSetDestroy2**
> cloudFirewallRulesSetDestroy2()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this firewall rules set. (default to undefined)

const { status, data } = await apiInstance.cloudFirewallRulesSetDestroy2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudFirewallRulesSetList2**
> Array<FirewallRulesSet> cloudFirewallRulesSetList2()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

const { status, data } = await apiInstance.cloudFirewallRulesSetList2();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<FirewallRulesSet>**

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

# **cloudFirewallRulesSetPartialUpdate**
> FirewallRulesSet cloudFirewallRulesSetPartialUpdate()

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudFirewallRulesSetPartialUpdate2**
> FirewallRulesSet cloudFirewallRulesSetPartialUpdate2()

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudFirewallRulesSetPartialUpdate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudFirewallRulesSetRetrieve2**
> FirewallRulesSet cloudFirewallRulesSetRetrieve2()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this firewall rules set. (default to undefined)

const { status, data } = await apiInstance.cloudFirewallRulesSetRetrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudFirewallRulesSetRulesCreate2**
> FirewallRule cloudFirewallRulesSetRulesCreate2(firewallRule)

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudFirewallRulesSetRulesCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudFirewallRulesSetRulesDestroy2**
> cloudFirewallRulesSetRulesDestroy2()

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudFirewallRulesSetRulesDestroy2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudFirewallRulesSetRulesList2**
> Array<FirewallRule> cloudFirewallRulesSetRulesList2()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let rulesSetId: string; // (default to undefined)

const { status, data } = await apiInstance.cloudFirewallRulesSetRulesList2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudFirewallRulesSetRulesPartialUpdate2**
> FirewallRule cloudFirewallRulesSetRulesPartialUpdate2()

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudFirewallRulesSetRulesPartialUpdate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudFirewallRulesSetRulesRetrieve2**
> FirewallRule cloudFirewallRulesSetRulesRetrieve2()

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudFirewallRulesSetRulesRetrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudFirewallRulesSetRulesUpdate2**
> FirewallRule cloudFirewallRulesSetRulesUpdate2(firewallRule)

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudFirewallRulesSetRulesUpdate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudFirewallRulesSetUpdate2**
> FirewallRulesSet cloudFirewallRulesSetUpdate2(firewallRulesSet)

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudFirewallRulesSetUpdate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudImagesList2**
> PaginatedOSImageList cloudImagesList2()

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

const { status, data } = await apiInstance.cloudImagesList2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudImagesRetrieve2**
> OSImage cloudImagesRetrieve2()

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

const { status, data } = await apiInstance.cloudImagesRetrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudIpv4Create2**
> PublicIPv4 cloudIpv4Create2()

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudIpv4Create2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudIpv4Destroy2**
> cloudIpv4Destroy2()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv4. (default to undefined)

const { status, data } = await apiInstance.cloudIpv4Destroy2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudIpv4DetachCreate2**
> DetachIPv4Response cloudIpv4DetachCreate2()

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudIpv4DetachCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudIpv4List2**
> PaginatedPublicIPv4List cloudIpv4List2()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudIpv4List2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudIpv4RdnsCreate2**
> ReverseDNS cloudIpv4RdnsCreate2(reverseDNS)

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

const { status, data } = await apiInstance.cloudIpv4RdnsCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudIpv4RdnsRetrieve2**
> ReverseDNS cloudIpv4RdnsRetrieve2()

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

const { status, data } = await apiInstance.cloudIpv4RdnsRetrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudIpv4Retrieve2**
> PublicIPv4 cloudIpv4Retrieve2()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv4. (default to undefined)

const { status, data } = await apiInstance.cloudIpv4Retrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudIpv6Create2**
> PublicIPv6 cloudIpv6Create2()

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudIpv6Create2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudIpv6Destroy2**
> cloudIpv6Destroy2()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv6. (default to undefined)

const { status, data } = await apiInstance.cloudIpv6Destroy2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudIpv6DetachCreate2**
> DetachIPv6Response cloudIpv6DetachCreate2()

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudIpv6DetachCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudIpv6List2**
> PaginatedPublicIPv6List cloudIpv6List2()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudIpv6List2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudIpv6RdnsCreate2**
> ReverseDNS cloudIpv6RdnsCreate2(reverseDNS)

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

const { status, data } = await apiInstance.cloudIpv6RdnsCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudIpv6RdnsRetrieve2**
> ReverseDNS cloudIpv6RdnsRetrieve2()

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

const { status, data } = await apiInstance.cloudIpv6RdnsRetrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudIpv6Retrieve2**
> PublicIPv6 cloudIpv6Retrieve2()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this Public IPv6. (default to undefined)

const { status, data } = await apiInstance.cloudIpv6Retrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudPrivateNetworksAddServerCreate2**
> AddServerResponse cloudPrivateNetworksAddServerCreate2(privateNetworkAddHost)

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

const { status, data } = await apiInstance.cloudPrivateNetworksAddServerCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudPrivateNetworksCreate2**
> PrivateNetwork cloudPrivateNetworksCreate2(privateNetwork)

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

const { status, data } = await apiInstance.cloudPrivateNetworksCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudPrivateNetworksDestroy2**
> cloudPrivateNetworksDestroy2()

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

const { status, data } = await apiInstance.cloudPrivateNetworksDestroy2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudPrivateNetworksList2**
> PaginatedPrivateNetworkList cloudPrivateNetworksList2()

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

const { status, data } = await apiInstance.cloudPrivateNetworksList2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudPrivateNetworksPartialUpdate2**
> PrivateNetwork cloudPrivateNetworksPartialUpdate2()

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

const { status, data } = await apiInstance.cloudPrivateNetworksPartialUpdate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudPrivateNetworksRemoveServerCreate2**
> RemoveServerResponse cloudPrivateNetworksRemoveServerCreate2(privateNetworkRemoveHost)

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

const { status, data } = await apiInstance.cloudPrivateNetworksRemoveServerCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudPrivateNetworksRetrieve2**
> PrivateNetwork cloudPrivateNetworksRetrieve2()

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

const { status, data } = await apiInstance.cloudPrivateNetworksRetrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudPrivateNetworksUpdate2**
> PrivateNetwork cloudPrivateNetworksUpdate2(privateNetwork)

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

const { status, data } = await apiInstance.cloudPrivateNetworksUpdate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
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

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudServerPackagesList(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedServerProductList**

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

# **cloudServerPackagesList2**
> PaginatedServerProductList cloudServerPackagesList2()

List of available server products

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let page: number; //A page number within the paginated result set. (optional) (default to undefined)

const { status, data } = await apiInstance.cloudServerPackagesList2(
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **page** | [**number**] | A page number within the paginated result set. | (optional) defaults to undefined|


### Return type

**PaginatedServerProductList**

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServerPackagesRetrieve2**
> ServerProduct cloudServerPackagesRetrieve2()

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

const { status, data } = await apiInstance.cloudServerPackagesRetrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersActivityRetrieve2**
> ActivityLogResponse cloudServersActivityRetrieve2()

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

const { status, data } = await apiInstance.cloudServersActivityRetrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersAttachIpv4Create**
> AttachIPv4 cloudServersAttachIpv4Create(attachIPv4)

Attach IPv4 address to server.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    AttachIPv4
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let attachIPv4: AttachIPv4; //

const { status, data } = await apiInstance.cloudServersAttachIpv4Create(
    id,
    attachIPv4
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachIPv4** | **AttachIPv4**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**AttachIPv4**

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

# **cloudServersAttachIpv4Create2**
> AttachIPv4 cloudServersAttachIpv4Create2(attachIPv4)

Attach IPv4 address to server.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    AttachIPv4
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let attachIPv4: AttachIPv4; //

const { status, data } = await apiInstance.cloudServersAttachIpv4Create2(
    id,
    attachIPv4
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachIPv4** | **AttachIPv4**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**AttachIPv4**

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

# **cloudServersAttachIpv6Create**
> AttachIPv6 cloudServersAttachIpv6Create(attachIPv6)

Attach IPv6 address to server.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    AttachIPv6
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let attachIPv6: AttachIPv6; //

const { status, data } = await apiInstance.cloudServersAttachIpv6Create(
    id,
    attachIPv6
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachIPv6** | **AttachIPv6**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**AttachIPv6**

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

# **cloudServersAttachIpv6Create2**
> AttachIPv6 cloudServersAttachIpv6Create2(attachIPv6)

Attach IPv6 address to server.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    AttachIPv6
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let attachIPv6: AttachIPv6; //

const { status, data } = await apiInstance.cloudServersAttachIpv6Create2(
    id,
    attachIPv6
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **attachIPv6** | **AttachIPv6**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**AttachIPv6**

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

# **cloudServersConsoleCreate**
> ConsoleToken cloudServersConsoleCreate()

Get a VNC console token for browser-based access.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    Server
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let server: Server; // (optional)

const { status, data } = await apiInstance.cloudServersConsoleCreate(
    id,
    server
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **server** | **Server**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**ConsoleToken**

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

# **cloudServersConsoleCreate2**
> ConsoleToken cloudServersConsoleCreate2()

Get a VNC console token for browser-based access.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    Server
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let server: Server; // (optional)

const { status, data } = await apiInstance.cloudServersConsoleCreate2(
    id,
    server
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **server** | **Server**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**ConsoleToken**

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersCreate2**
> ServerAddResponse cloudServersCreate2(serverAdd)

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

const { status, data } = await apiInstance.cloudServersCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersDestroy2**
> cloudServersDestroy2()

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

const { status, data } = await apiInstance.cloudServersDestroy2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersDestroyProtectionCreate**
> DestroyProtection cloudServersDestroyProtectionCreate(destroyProtection)

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

**DestroyProtection**

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

# **cloudServersDestroyProtectionCreate2**
> DestroyProtection cloudServersDestroyProtectionCreate2(destroyProtection)

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

const { status, data } = await apiInstance.cloudServersDestroyProtectionCreate2(
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

**DestroyProtection**

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

# **cloudServersDetachIpv4Create**
> DetachIPv4 cloudServersDetachIpv4Create()

Detach IPv4 from server

### Example

```typescript
import {
    CloudApi,
    Configuration,
    Server
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let server: Server; // (optional)

const { status, data } = await apiInstance.cloudServersDetachIpv4Create(
    id,
    server
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **server** | **Server**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**DetachIPv4**

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

# **cloudServersDetachIpv4Create2**
> DetachIPv4 cloudServersDetachIpv4Create2()

Detach IPv4 from server

### Example

```typescript
import {
    CloudApi,
    Configuration,
    Server
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let server: Server; // (optional)

const { status, data } = await apiInstance.cloudServersDetachIpv4Create2(
    id,
    server
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **server** | **Server**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**DetachIPv4**

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

# **cloudServersDetachIpv6Create**
> DetachIPv6 cloudServersDetachIpv6Create()

Detach IPv6 from server

### Example

```typescript
import {
    CloudApi,
    Configuration,
    Server
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let server: Server; // (optional)

const { status, data } = await apiInstance.cloudServersDetachIpv6Create(
    id,
    server
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **server** | **Server**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**DetachIPv6**

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

# **cloudServersDetachIpv6Create2**
> DetachIPv6 cloudServersDetachIpv6Create2()

Detach IPv6 from server

### Example

```typescript
import {
    CloudApi,
    Configuration,
    Server
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let server: Server; // (optional)

const { status, data } = await apiInstance.cloudServersDetachIpv6Create2(
    id,
    server
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **server** | **Server**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**DetachIPv6**

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersList2**
> PaginatedServerList cloudServersList2()

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

const { status, data } = await apiInstance.cloudServersList2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersModifyPackageCreate2**
> ServerUpgradeResponse cloudServersModifyPackageCreate2(serverProductUpgrade)

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

const { status, data } = await apiInstance.cloudServersModifyPackageCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersPartialUpdate2**
> ServerDetail cloudServersPartialUpdate2()

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

const { status, data } = await apiInstance.cloudServersPartialUpdate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersPowerManagementCreate2**
> PowerManagement cloudServersPowerManagementCreate2(powerManagementRequest)

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

const { status, data } = await apiInstance.cloudServersPowerManagementCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersPowerManagementRetrieve2**
> PowerManagement cloudServersPowerManagementRetrieve2()

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

const { status, data } = await apiInstance.cloudServersPowerManagementRetrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersPublicInterfaceCreate2**
> PublicInterface cloudServersPublicInterfaceCreate2()

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

const { status, data } = await apiInstance.cloudServersPublicInterfaceCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersPublicInterfaceDestroy2**
> cloudServersPublicInterfaceDestroy2()

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

const { status, data } = await apiInstance.cloudServersPublicInterfaceDestroy2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersPublicInterfaceRetrieve2**
> PublicInterface cloudServersPublicInterfaceRetrieve2()

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

const { status, data } = await apiInstance.cloudServersPublicInterfaceRetrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersRetrieve2**
> ServerDetail cloudServersRetrieve2()

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

const { status, data } = await apiInstance.cloudServersRetrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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
    Configuration,
    Server
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let server: Server; // (optional)

const { status, data } = await apiInstance.cloudServersRetryProvisionCreate(
    id,
    server
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **server** | **Server**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**RetryProvision**

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

# **cloudServersRetryProvisionCreate2**
> RetryProvision cloudServersRetryProvisionCreate2()

Retry provision in case of a failed server

### Example

```typescript
import {
    CloudApi,
    Configuration,
    Server
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let server: Server; // (optional)

const { status, data } = await apiInstance.cloudServersRetryProvisionCreate2(
    id,
    server
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **server** | **Server**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|


### Return type

**RetryProvision**

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersSnapshotsCreate2**
> PaginatedSnapshotList cloudServersSnapshotsCreate2(snapshotCreate)

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

const { status, data } = await apiInstance.cloudServersSnapshotsCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersSnapshotsDestroy2**
> SnapshotDeleteQueued cloudServersSnapshotsDestroy2()

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

const { status, data } = await apiInstance.cloudServersSnapshotsDestroy2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersSnapshotsList2**
> PaginatedSnapshotList cloudServersSnapshotsList2()

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

const { status, data } = await apiInstance.cloudServersSnapshotsList2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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
    Configuration,
    Server
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let snapshotName: string; // (default to undefined)
let server: Server; // (optional)

const { status, data } = await apiInstance.cloudServersSnapshotsRollbackCreate(
    id,
    snapshotName,
    server
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **server** | **Server**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|
| **snapshotName** | [**string**] |  | defaults to undefined|


### Return type

**SnapshotRollbackQueued**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersSnapshotsRollbackCreate2**
> SnapshotRollbackQueued cloudServersSnapshotsRollbackCreate2()

Rollback the server to a specific snapshot.

### Example

```typescript
import {
    CloudApi,
    Configuration,
    Server
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let id: number; //A unique integer value identifying this virtual machine. (default to undefined)
let snapshotName: string; // (default to undefined)
let server: Server; // (optional)

const { status, data } = await apiInstance.cloudServersSnapshotsRollbackCreate2(
    id,
    snapshotName,
    server
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **server** | **Server**|  | |
| **id** | [**number**] | A unique integer value identifying this virtual machine. | defaults to undefined|
| **snapshotName** | [**string**] |  | defaults to undefined|


### Return type

**SnapshotRollbackQueued**

### Authorization

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersUpdate2**
> ServerDetail cloudServersUpdate2()

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

const { status, data } = await apiInstance.cloudServersUpdate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersUsageRetrieve2**
> ServerUsageResponse cloudServersUsageRetrieve2()

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

const { status, data } = await apiInstance.cloudServersUsageRetrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersVolumesCreate2**
> Volume cloudServersVolumesCreate2(volume)

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudServersVolumesCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersVolumesDestroy2**
> cloudServersVolumesDestroy2()

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudServersVolumesDestroy2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersVolumesList2**
> Array<Volume> cloudServersVolumesList2()

Require complete user profile for provisioning (create) API actions.

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

let serverId: string; // (default to undefined)

const { status, data } = await apiInstance.cloudServersVolumesList2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersVolumesPartialUpdate2**
> Volume cloudServersVolumesPartialUpdate2()

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudServersVolumesPartialUpdate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersVolumesRetrieve2**
> Volume cloudServersVolumesRetrieve2()

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudServersVolumesRetrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

Require complete user profile for provisioning (create) API actions.

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudServersVolumesUpdate2**
> Volume cloudServersVolumesUpdate2(volume)

Require complete user profile for provisioning (create) API actions.

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

const { status, data } = await apiInstance.cloudServersVolumesUpdate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudStorageProductsList2**
> PaginatedStorageProductList cloudStorageProductsList2()

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

const { status, data } = await apiInstance.cloudStorageProductsList2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudStorageProductsRetrieve2**
> StorageProduct cloudStorageProductsRetrieve2()

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

const { status, data } = await apiInstance.cloudStorageProductsRetrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudVolumesAttachCreate2**
> AttachVolume cloudVolumesAttachCreate2(attachVolume)

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

const { status, data } = await apiInstance.cloudVolumesAttachCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudVolumesDestroy2**
> cloudVolumesDestroy2()

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

const { status, data } = await apiInstance.cloudVolumesDestroy2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudVolumesDetachCreate2**
> DetachVolume cloudVolumesDetachCreate2(volume)

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

const { status, data } = await apiInstance.cloudVolumesDetachCreate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudVolumesList2**
> Array<Volume> cloudVolumesList2()

Volumes management

### Example

```typescript
import {
    CloudApi,
    Configuration
} from '@pidginhost/sdk';

const configuration = new Configuration();
const apiInstance = new CloudApi(configuration);

const { status, data } = await apiInstance.cloudVolumesList2();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<Volume>**

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudVolumesPartialUpdate2**
> Volume cloudVolumesPartialUpdate2()

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

const { status, data } = await apiInstance.cloudVolumesPartialUpdate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudVolumesRetrieve2**
> Volume cloudVolumesRetrieve2()

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

const { status, data } = await apiInstance.cloudVolumesRetrieve2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **cloudVolumesUpdate2**
> Volume cloudVolumesUpdate2(volume)

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

const { status, data } = await apiInstance.cloudVolumesUpdate2(
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

[cookieAuth](../README.md#cookieAuth), [tokenAuth](../README.md#tokenAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

