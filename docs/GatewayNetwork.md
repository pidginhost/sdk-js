# GatewayNetwork

One network the gateway is attached to (spec 5.3). A change is pending until the agent applies its revision (spec 11.2); a failure shows a reason, never its text. The NIC\'s MAC stays internal.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **number** |  | [readonly] [default to undefined]
**role** | [**GatewayNetworkRoleEnum**](GatewayNetworkRoleEnum.md) |  | [readonly] [default to undefined]
**snat** | **boolean** |  | [readonly] [default to undefined]
**state** | [**GatewayNetworkStateEnum**](GatewayNetworkStateEnum.md) |  | [readonly] [default to undefined]
**slot** | **number** |  | [readonly] [default to undefined]
**address** | **string** |  | [readonly] [default to undefined]
**changed_revision** | **number** |  | [readonly] [default to undefined]
**pending** | **boolean** |  | [readonly] [default to undefined]
**reason** | **string** | Why the last network change failed, or empty. | [readonly] [default to undefined]

## Example

```typescript
import { GatewayNetwork } from '@pidginhost/sdk';

const instance: GatewayNetwork = {
    network,
    role,
    snat,
    state,
    slot,
    address,
    changed_revision,
    pending,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
