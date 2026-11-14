# GatewayHealthCheck

A pool\'s health check (spec 5.5); the fields its type does not have are null.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**GatewayHealthCheckTypeEnum**](GatewayHealthCheckTypeEnum.md) |  | [default to undefined]
**path** | **string** |  | [default to undefined]
**status_min** | **number** |  | [default to undefined]
**status_max** | **number** |  | [default to undefined]
**interval_s** | **number** |  | [default to undefined]
**timeout_s** | **number** |  | [default to undefined]
**healthy_threshold** | **number** |  | [default to undefined]
**unhealthy_threshold** | **number** |  | [default to undefined]
**port** | **number** | Null checks each server\&#39;s own port. | [default to undefined]

## Example

```typescript
import { GatewayHealthCheck } from '@pidginhost/sdk';

const instance: GatewayHealthCheck = {
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
