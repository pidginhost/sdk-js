# PatchedGatewayBackendPoolWriteRequest

The fields a customer writes; gateway.backend_pools.clean_pool decides what they may hold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**policy** | [**GatewayBackendPoolPolicyEnum**](GatewayBackendPoolPolicyEnum.md) |  | [optional] [default to undefined]
**proxy_protocol** | **boolean** | PROXY protocol v2 to the servers; tcp only. | [optional] [default to undefined]
**health_check** | [**GatewayHealthCheckWriteRequest**](GatewayHealthCheckWriteRequest.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PatchedGatewayBackendPoolWriteRequest } from '@pidginhost/sdk';

const instance: PatchedGatewayBackendPoolWriteRequest = {
    name,
    policy,
    proxy_protocol,
    health_check,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
