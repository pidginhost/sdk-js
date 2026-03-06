# SnapshotCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Letters, numbers, \&quot;.\&quot;, \&quot;_\&quot; and \&quot;-\&quot; (max 63 characters). | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**include_memory** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { SnapshotCreate } from '@pidginhost/sdk';

const instance: SnapshotCreate = {
    name,
    description,
    include_memory,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
