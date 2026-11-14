# GatewayHealthCheckWriteRequest

The check fields a customer writes; a missing one keeps its value, and a type takes only its own fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**GatewayHealthCheckTypeEnum**](GatewayHealthCheckTypeEnum.md) |  | [optional] [default to undefined]
**path** | **string** | http only. | [optional] [default to undefined]
**status_min** | **number** | http only. | [optional] [default to undefined]
**status_max** | **number** | http only. | [optional] [default to undefined]
**interval_s** | **number** |  | [optional] [default to undefined]
**timeout_s** | **number** | Below interval_s. | [optional] [default to undefined]
**healthy_threshold** | **number** |  | [optional] [default to undefined]
**unhealthy_threshold** | **number** |  | [optional] [default to undefined]
**port** | **number** | Null checks each server\&#39;s own port. | [optional] [default to undefined]

## Example

```typescript
import { GatewayHealthCheckWriteRequest } from '@pidginhost/sdk';

const instance: GatewayHealthCheckWriteRequest = {
    type,
    path,
    status_min,
    status_max,
    interval_s,
    timeout_s,
    healthy_threshold,
    unhealthy_threshold,
    port,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
