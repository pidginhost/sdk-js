# GatewayBackendPool

A backend pool (spec 5.5): the servers a listener or route sends to; pending until applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**name** | **string** |  | [readonly] [default to undefined]
**policy** | [**GatewayBackendPoolPolicyEnum**](GatewayBackendPoolPolicyEnum.md) |  | [readonly] [default to undefined]
**proxy_protocol** | **boolean** |  | [readonly] [default to undefined]
**health_check** | [**GatewayHealthCheck**](GatewayHealthCheck.md) |  | [readonly] [default to undefined]
**changed_revision** | **number** |  | [readonly] [default to undefined]
**pending** | **boolean** |  | [readonly] [default to undefined]

## Example

```typescript
import { GatewayBackendPool } from '@pidginhost/sdk';

const instance: GatewayBackendPool = {
    id,
    name,
    policy,
    proxy_protocol,
    health_check,
    changed_revision,
    pending,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
