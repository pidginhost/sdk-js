# ClusterDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**status** | [**StatusA57Enum**](StatusA57Enum.md) |  | [readonly] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**cluster_type** | **string** |  | [readonly] [default to undefined]
**kube_version** | **string** |  | [readonly] [default to undefined]
**price_per_month** | **string** |  | [default to undefined]
**price_per_hour** | **string** |  | [readonly] [default to undefined]
**features** | [**Array&lt;FeaturesEnum&gt;**](FeaturesEnum.md) |  | [optional] [default to undefined]
**features_ready** | **boolean** |  | [readonly] [default to undefined]
**kubeconfig_valid_until** | **string** |  | [readonly] [default to undefined]
**ipv4_address** | **string** |  | [readonly] [default to undefined]
**_protected** | **boolean** |  | [optional] [default to undefined]
**talos_version** | **string** |  | [readonly] [default to undefined]
**talos_upgrade_available** | **string** |  | [readonly] [default to undefined]
**talos_next_version** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { ClusterDetail } from '@pidginhost/sdk';

const instance: ClusterDetail = {
    id,
    status,
    name,
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
