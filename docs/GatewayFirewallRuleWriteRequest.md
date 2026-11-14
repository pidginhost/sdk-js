# GatewayFirewallRuleWriteRequest

The fields a customer writes; gateway.firewall.clean_rule decides what they may hold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**FwPolicyOutEnum**](FwPolicyOutEnum.md) |  | [default to undefined]
**source** | [**GatewayFirewallSourceRequest**](GatewayFirewallSourceRequest.md) |  | [default to undefined]
**destination** | [**GatewayFirewallDestinationRequest**](GatewayFirewallDestinationRequest.md) |  | [default to undefined]
**protocol** | [**GatewayFirewallProtocolEnum**](GatewayFirewallProtocolEnum.md) |  | [default to undefined]
**ports** | [**Array&lt;GatewayPortRangeRequest&gt;**](GatewayPortRangeRequest.md) |  | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**comment** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GatewayFirewallRuleWriteRequest } from '@pidginhost/sdk';

const instance: GatewayFirewallRuleWriteRequest = {
    action,
    source,
    destination,
    protocol,
    ports,
    enabled,
    comment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
