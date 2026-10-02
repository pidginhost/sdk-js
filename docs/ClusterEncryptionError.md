# ClusterEncryptionError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **string** |  | [default to undefined]
**reason** | [**EncryptionReasonCodeEnum**](EncryptionReasonCodeEnum.md) |  | [optional] [default to undefined]
**extra** | **{ [key: string]: any; }** |  | [optional] [default to undefined]
**code** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ClusterEncryptionError } from '@pidginhost/sdk';

const instance: ClusterEncryptionError = {
    message,
    reason,
    extra,
    code,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
