# GatewayLBListener

A load balancer listener (spec 6.8): one public port with a mode; pending until applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**protocol** | [**GatewayForwardProtocolEnum**](GatewayForwardProtocolEnum.md) |  | [readonly] [default to undefined]
**port** | **number** |  | [default to undefined]
**mode** | [**GatewayLBListenerModeEnum**](GatewayLBListenerModeEnum.md) |  | [default to undefined]
**pool** | **number** | The backend pool of a tcp or udp listener; null for http. | [default to undefined]
**allowed_sources** | **Array&lt;string&gt;** | Empty means any source. | [default to undefined]
**enabled** | **boolean** |  | [readonly] [default to undefined]
**comment** | **string** |  | [readonly] [default to undefined]
**changed_revision** | **number** |  | [readonly] [default to undefined]
**pending** | **boolean** |  | [readonly] [default to undefined]

## Example

```typescript
import { GatewayLBListener } from '@pidginhost/sdk';

const instance: GatewayLBListener = {
    id,
    protocol,
    port,
    mode,
    pool,
    allowed_sources,
    enabled,
    comment,
    changed_revision,
    pending,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
