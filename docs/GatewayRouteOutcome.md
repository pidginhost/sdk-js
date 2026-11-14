# GatewayRouteOutcome


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** | queued, running, applied or failed. | [default to undefined]
**completed_at** | **string** |  | [default to undefined]
**reason** | **string** | Why the server failed, or why its applied route is not acknowledged. | [default to undefined]

## Example

```typescript
import { GatewayRouteOutcome } from '@pidginhost/sdk';

const instance: GatewayRouteOutcome = {
    status,
    completed_at,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
