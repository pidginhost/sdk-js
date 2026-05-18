# CLISessionPollResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | [**CLISessionPollResponseStatusEnum**](CLISessionPollResponseStatusEnum.md) |  | [default to undefined]
**token_key** | **string** | Only present when status is approved | [optional] [default to undefined]
**token_name** | **string** |  | [optional] [default to undefined]
**token_scope** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { CLISessionPollResponse } from '@pidginhost/sdk';

const instance: CLISessionPollResponse = {
    status,
    token_key,
    token_name,
    token_scope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
