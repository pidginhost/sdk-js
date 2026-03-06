# PaginatedSSHKeyList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **number** |  | [default to undefined]
**next** | **string** |  | [optional] [default to undefined]
**previous** | **string** |  | [optional] [default to undefined]
**results** | [**Array&lt;SSHKey&gt;**](SSHKey.md) |  | [default to undefined]

## Example

```typescript
import { PaginatedSSHKeyList } from '@pidginhost/sdk';

const instance: PaginatedSSHKeyList = {
    count,
    next,
    previous,
    results,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
