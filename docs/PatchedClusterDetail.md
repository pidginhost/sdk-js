# PatchedClusterDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**status** | [**StatusA57Enum**](StatusA57Enum.md) |  | [optional] [readonly] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**generation** | **string** |  | [optional] [readonly] [default to undefined]
**cluster_type** | **string** |  | [optional] [readonly] [default to undefined]
**kube_version** | **string** |  | [optional] [readonly] [default to undefined]
**price_per_month** | **string** |  | [optional] [default to undefined]
**price_per_hour** | **string** |  | [optional] [readonly] [default to undefined]
**features** | [**Array&lt;FeaturesEnum&gt;**](FeaturesEnum.md) |  | [optional] [default to undefined]
**features_ready** | **boolean** |  | [optional] [readonly] [default to undefined]
**kubeconfig_valid_until** | **string** |  | [optional] [readonly] [default to undefined]
**ipv4_address** | **string** |  | [optional] [readonly] [default to undefined]
**_protected** | **boolean** |  | [optional] [default to undefined]
**talos_version** | **string** |  | [optional] [readonly] [default to undefined]
**talos_upgrade_available** | **string** |  | [optional] [readonly] [default to undefined]
**talos_next_version** | **string** |  | [optional] [readonly] [default to undefined]
**storage_quota_gb** | **string** |  | [optional] [readonly] [default to undefined]
**last_pool_used_bytes** | **string** |  | [optional] [readonly] [default to undefined]
**last_storage_sync_at** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PatchedClusterDetail } from '@pidginhost/sdk';

const instance: PatchedClusterDetail = {
    id,
    status,
    name,
    generation,
    cluster_type,
    kube_version,
    price_per_month,
    price_per_hour,
    features,
    features_ready,
    kubeconfig_valid_until,
    ipv4_address,
    _protected,
    talos_version,
    talos_upgrade_available,
    talos_next_version,
    storage_quota_gb,
    last_pool_used_bytes,
    last_storage_sync_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
