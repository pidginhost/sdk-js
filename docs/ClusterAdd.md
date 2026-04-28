# ClusterAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_type** | [**ClusterTypeEnum**](ClusterTypeEnum.md) |  | [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**resource_pool_package** | **string** | ID or slug | [default to undefined]
**resource_pool_size** | **number** |  | [optional] [default to undefined]
**kube_version** | [**KubeVersionEnum**](KubeVersionEnum.md) |  | [optional] [default to undefined]
**features** | [**Array&lt;FeaturesEnum&gt;**](FeaturesEnum.md) |  | [optional] [default to undefined]
**enable_gateway_api** | **boolean** |  | [optional] [default to undefined]
**generation** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ClusterAdd } from '@pidginhost/sdk';

const instance: ClusterAdd = {
    cluster_type,
    name,
    resource_pool_package,
    resource_pool_size,
    kube_version,
    features,
    enable_gateway_api,
    generation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
