# GatewayFirewallDestinationRequest

Exactly one of network, cidr and internet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **number** | A private network the gateway is attached to. | [optional] [default to undefined]
**cidr** | **string** | An IPv4 network, such as 10.0.0.0/24. | [optional] [default to undefined]
**internet** | **boolean** | True: egress by the gateway\&#39;s WAN. | [optional] [default to undefined]

## Example

```typescript
import { GatewayFirewallDestinationRequest } from '@pidginhost/sdk';

const instance: GatewayFirewallDestinationRequest = {
    network,
    cidr,
    internet,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
