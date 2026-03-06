# ResourcePool


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**_package** | **string** |  | [readonly] [default to undefined]
**size** | **string** |  | [readonly] [default to undefined]
**nodes** | [**Array&lt;ResourcePoolNode&gt;**](ResourcePoolNode.md) |  | [readonly] [default to undefined]
**new_size** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { ResourcePool } from '@pidginhost/sdk';

const instance: ResourcePool = {
    id,
    _package,
    size,
    nodes,
    new_size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
