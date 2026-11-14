# GatewayStatus

A gateway\'s state and the customer part of its last status report; unknown values are null.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state** | [**GatewayStateEnum**](GatewayStateEnum.md) |  | [default to undefined]
**state_reason** | **string** |  | [default to undefined]
**state_changed_at** | **string** |  | [default to undefined]
**desired_revision** | **number** |  | [default to undefined]
**applied_revision** | **number** |  | [default to undefined]
**last_status_at** | **string** |  | [default to undefined]
**agent_version** | **string** |  | [default to undefined]
**envoy_version** | **string** |  | [default to undefined]
**image_version** | **string** |  | [default to undefined]
**attempted_revision** | **number** |  | [default to undefined]
**local_ready** | **boolean** |  | [default to undefined]
**clock_synchronized** | **boolean** |  | [default to undefined]
**apply_error** | [**GatewayApplyError**](GatewayApplyError.md) |  | [default to undefined]
**interfaces** | [**Array&lt;GatewayInterface&gt;**](GatewayInterface.md) |  | [default to undefined]
**conntrack** | [**GatewayConntrack**](GatewayConntrack.md) |  | [default to undefined]
**egress_probe** | [**GatewayEgressProbe**](GatewayEgressProbe.md) |  | [default to undefined]
**security_updates** | **number** |  | [default to undefined]
**reboot_required** | **boolean** |  | [default to undefined]
**uptime_s** | **number** |  | [default to undefined]

## Example

```typescript
import { GatewayStatus } from '@pidginhost/sdk';

const instance: GatewayStatus = {
    state,
    state_reason,
    state_changed_at,
    desired_revision,
    applied_revision,
    last_status_at,
    agent_version,
    envoy_version,
    image_version,
    attempted_revision,
    local_ready,
    clock_synchronized,
    apply_error,
    interfaces,
    conntrack,
    egress_probe,
    security_updates,
    reboot_required,
    uptime_s,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
