# GatewayApplyError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **string** | The kind of the object the agent refused, or null. | [default to undefined]
**id** | **number** |  | [default to undefined]
**message** | **string** |  | [default to undefined]
**rollback** | **string** | not_needed, pending, succeeded or failed. | [default to undefined]

## Example

```typescript
import { GatewayApplyError } from '@pidginhost/sdk';

const instance: GatewayApplyError = {
    kind,
    id,
    message,
    rollback,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
