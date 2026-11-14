# GatewayFirewallRule

A firewall rule (spec 5.7): first match wins in position order; a change is pending until applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**position** | **number** |  | [readonly] [default to undefined]
**action** | [**FwPolicyOutEnum**](FwPolicyOutEnum.md) |  | [readonly] [default to undefined]
**source** | [**GatewayFirewallSource**](GatewayFirewallSource.md) |  | [readonly] [default to undefined]
**destination** | [**GatewayFirewallDestination**](GatewayFirewallDestination.md) |  | [readonly] [default to undefined]
**protocol** | [**GatewayFirewallProtocolEnum**](GatewayFirewallProtocolEnum.md) |  | [readonly] [default to undefined]
**ports** | [**Array&lt;GatewayPortRange&gt;**](GatewayPortRange.md) |  | [readonly] [default to undefined]
**enabled** | **boolean** |  | [readonly] [default to undefined]
**comment** | **string** |  | [readonly] [default to undefined]
**changed_revision** | **number** |  | [readonly] [default to undefined]
**pending** | **boolean** |  | [readonly] [default to undefined]

## Example

```typescript
import { GatewayFirewallRule } from '@pidginhost/sdk';

const instance: GatewayFirewallRule = {
    id,
    position,
    action,
    source,
    destination,
    protocol,
    ports,
    enabled,
    comment,
    changed_revision,
    pending,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
