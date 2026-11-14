# GatewayLBListenerWriteRequest

The fields a customer writes; gateway.lb_listeners.clean_listener decides what they may hold.  protocol, port and mode are set at creation and cannot change.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol** | [**GatewayForwardProtocolEnum**](GatewayForwardProtocolEnum.md) |  | [optional] [default to undefined]
**port** | **number** |  | [optional] [default to undefined]
**mode** | [**GatewayLBListenerModeEnum**](GatewayLBListenerModeEnum.md) | tcp, udp or http; https is not available yet.  * &#x60;tcp&#x60; - tcp * &#x60;udp&#x60; - udp * &#x60;http&#x60; - http * &#x60;https&#x60; - https | [optional] [default to undefined]
**pool** | **number** | A backend pool\&#39;s id; tcp and udp only. | [optional] [default to undefined]
**allowed_sources** | **Array&lt;string&gt;** | IPv4 and IPv6 networks; empty means any source. | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**comment** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { GatewayLBListenerWriteRequest } from '@pidginhost/sdk';

const instance: GatewayLBListenerWriteRequest = {
    protocol,
    port,
    mode,
    pool,
    allowed_sources,
    enabled,
    comment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
