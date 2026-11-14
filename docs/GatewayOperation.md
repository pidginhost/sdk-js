# GatewayOperation

An operation\'s progress (spec 5.11). A route apply\'s per-server evidence (node, QEMU process, guest boot, config) stays internal: each server shows its status. Error text is never published, as it can be a Proxmox exception\'s text, which names nodes: a failure shows a reason from the fixed vocabulary in gateway.reasons.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [readonly] [default to undefined]
**kind** | [**GatewayOperationKindEnum**](GatewayOperationKindEnum.md) |  | [readonly] [default to undefined]
**status** | [**GatewayOperationStatusEnum**](GatewayOperationStatusEnum.md) |  | [readonly] [default to undefined]
**network** | **number** |  | [readonly] [default to undefined]
**revision** | **number** |  | [readonly] [default to undefined]
**started_at** | **string** |  | [readonly] [default to undefined]
**deadline_at** | **string** |  | [readonly] [default to undefined]
**completed_at** | **string** |  | [readonly] [default to undefined]
**servers** | **Array&lt;number&gt;** |  | [readonly] [default to undefined]
**outcomes** | [**{ [key: string]: GatewayRouteOutcome; }**](GatewayRouteOutcome.md) |  | [readonly] [default to undefined]
**reason** | **string** | Why the operation failed; empty unless it did. | [readonly] [default to undefined]

## Example

```typescript
import { GatewayOperation } from '@pidginhost/sdk';

const instance: GatewayOperation = {
    id,
    kind,
    status,
    network,
    revision,
    started_at,
    deadline_at,
    completed_at,
    servers,
    outcomes,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
