# GatewayForwardWriteRequest

The fields a customer writes; gateway.forwards.clean_forward decides what they may hold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol** | [**GatewayForwardProtocolEnum**](GatewayForwardProtocolEnum.md) |  | [default to undefined]
**public_ports** | [**GatewayPortRangeRequest**](GatewayPortRangeRequest.md) |  | [default to undefined]
**target** | [**GatewayForwardTargetRequest**](GatewayForwardTargetRequest.md) |  | [default to undefined]
**allowed_sources** | **Array&lt;string&gt;** | IPv4 networks; empty means any source. | [optional] [default to undefined]
**preserve_client_ip** | **boolean** | Only false is accepted for now. | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**comment** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GatewayForwardWriteRequest } from '@pidginhost/sdk';

const instance: GatewayForwardWriteRequest = {
    protocol,
    public_ports,
    target,
    allowed_sources,
    preserve_client_ip,
    enabled,
    comment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
