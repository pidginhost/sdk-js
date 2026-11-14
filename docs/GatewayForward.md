# GatewayForward

A port forward (spec 6.7): public ports to one host of an attached network; pending until applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**protocol** | [**GatewayForwardProtocolEnum**](GatewayForwardProtocolEnum.md) |  | [readonly] [default to undefined]
**public_ports** | [**GatewayPortRange**](GatewayPortRange.md) |  | [readonly] [default to undefined]
**allowed_sources** | **any** |  | [readonly] [default to undefined]
**target** | [**GatewayForwardTarget**](GatewayForwardTarget.md) |  | [readonly] [default to undefined]
**preserve_client_ip** | **boolean** | Always false: the target sees the gateway\&#39;s address. | [readonly] [default to undefined]
**enabled** | **boolean** |  | [readonly] [default to undefined]
**comment** | **string** |  | [readonly] [default to undefined]
**changed_revision** | **number** |  | [readonly] [default to undefined]
**pending** | **boolean** |  | [readonly] [default to undefined]

## Example

```typescript
import { GatewayForward } from '@pidginhost/sdk';

const instance: GatewayForward = {
    id,
    protocol,
    public_ports,
    allowed_sources,
    target,
    preserve_client_ip,
    enabled,
    comment,
    changed_revision,
    pending,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
