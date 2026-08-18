# ClusterType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ClusterTypeEnum**](ClusterTypeEnum.md) |  | [default to undefined]
**worker_nodes_count_min** | **number** |  | [optional] [default to undefined]
**worker_nodes_count_max** | **number** |  | [optional] [default to undefined]
**worker_node_packages** | [**Array&lt;ClusterPackage&gt;**](ClusterPackage.md) |  | [default to undefined]

## Example

```typescript
import { ClusterType } from '@pidginhost/sdk';

const instance: ClusterType = {
    type,
    worker_nodes_count_min,
    worker_nodes_count_max,
    worker_node_packages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
