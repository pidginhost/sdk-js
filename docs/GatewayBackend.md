# GatewayBackend

A pool\'s server (spec 5.5) with its health as the gateway last reported it (spec 6.8).  The view passes the health map in the context, read once per request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**network** | **number** | An attached private network\&#39;s id. | [default to undefined]
**address** | **string** |  | [readonly] [default to undefined]
**port** | **number** |  | [readonly] [default to undefined]
**weight** | **number** |  | [readonly] [default to undefined]
**enabled** | **boolean** |  | [readonly] [default to undefined]
**health** | [**GatewayBackendHealthEnum**](GatewayBackendHealthEnum.md) |  | [readonly] [default to undefined]
**health_changed** | **string** |  | [readonly] [default to undefined]
**changed_revision** | **number** |  | [readonly] [default to undefined]
**pending** | **boolean** |  | [readonly] [default to undefined]

## Example

```typescript
import { GatewayBackend } from '@pidginhost/sdk';

const instance: GatewayBackend = {
    id,
    network,
    address,
    port,
    weight,
    enabled,
    health,
    health_changed,
    changed_revision,
    pending,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
