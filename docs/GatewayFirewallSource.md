# GatewayFirewallSource

Exactly one of network and cidr.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **number** | A private network the gateway is attached to. | [optional] [default to undefined]
**cidr** | **string** | An IPv4 network, such as 10.0.0.0/24. | [optional] [default to undefined]

## Example

```typescript
import { GatewayFirewallSource } from '@pidginhost/sdk';

const instance: GatewayFirewallSource = {
    network,
    cidr,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
