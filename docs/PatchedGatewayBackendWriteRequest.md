# PatchedGatewayBackendWriteRequest

The fields a customer writes; gateway.backend_pools.clean_backend decides what they may hold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **number** | An attached private network\&#39;s id. | [optional] [default to undefined]
**address** | **string** | A host of that network, other than the gateway. | [optional] [default to undefined]
**port** | **number** |  | [optional] [default to undefined]
**weight** | **number** |  | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { PatchedGatewayBackendWriteRequest } from '@pidginhost/sdk';

const instance: PatchedGatewayBackendWriteRequest = {
    network,
    address,
    port,
    weight,
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
