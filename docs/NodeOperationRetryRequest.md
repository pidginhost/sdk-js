# NodeOperationRetryRequest

The two independent overrides, and the acknowledgement each one needs.  Both flags are tri-state and the third state is what matters: `null`/absent means \"leave it as it is\". A plain boolean default would turn every request that names one flag into a request that silently un-forces the other, and `retry_node_operation` refuses an un-force rather than applying it.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bypass_pdb** | **boolean** |  | [optional] [default to undefined]
**delete_unmanaged_pods** | **boolean** |  | [optional] [default to undefined]
**acknowledge_pdb_bypass** | **boolean** |  | [optional] [default to false]
**acknowledge_unmanaged_pod_deletion** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { NodeOperationRetryRequest } from '@pidginhost/sdk';

const instance: NodeOperationRetryRequest = {
    bypass_pdb,
    delete_unmanaged_pods,
    acknowledge_pdb_bypass,
    acknowledge_unmanaged_pod_deletion,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
