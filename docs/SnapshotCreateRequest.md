# SnapshotCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Must start with a letter; letters, numbers, \&quot;_\&quot; and \&quot;-\&quot; only (2-40 characters). | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**include_memory** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { SnapshotCreateRequest } from '@pidginhost/sdk';

const instance: SnapshotCreateRequest = {
    name,
    description,
    include_memory,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
