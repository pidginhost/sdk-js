# GatewayForwardTargetRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **number** | An attached private network\&#39;s id. | [default to undefined]
**address** | **string** | A host of that network, other than the gateway. | [default to undefined]
**port_start** | **number** | The first public port goes here, the next ones follow in order. | [default to undefined]

## Example

```typescript
import { GatewayForwardTargetRequest } from '@pidginhost/sdk';

const instance: GatewayForwardTargetRequest = {
    network,
    address,
    port_start,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
