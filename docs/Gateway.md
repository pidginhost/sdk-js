# Gateway


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**name** | **string** |  | [readonly] [default to undefined]
**state** | [**GatewayStateEnum**](GatewayStateEnum.md) |  | [readonly] [default to undefined]
**state_reason** | **string** |  | [readonly] [default to undefined]
**status** | [**ResourceStatusEnum**](ResourceStatusEnum.md) |  | [readonly] [default to undefined]
**desired_revision** | **number** |  | [readonly] [default to undefined]
**applied_revision** | **number** |  | [readonly] [default to undefined]
**ipv4** | **string** |  | [readonly] [default to undefined]
**ipv6** | **string** |  | [readonly] [default to undefined]
**maintenance_weekday** | **number** |  | [readonly] [default to undefined]
**maintenance_hour** | **number** |  | [readonly] [default to undefined]
**ha_enabled** | **boolean** |  | [readonly] [default to undefined]
**current_operation** | **string** |  | [readonly] [default to undefined]
**created** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { Gateway } from '@pidginhost/sdk';

const instance: Gateway = {
    id,
    name,
    state,
    state_reason,
    status,
    desired_revision,
    applied_revision,
    ipv4,
    ipv6,
    maintenance_weekday,
    maintenance_hour,
    ha_enabled,
    current_operation,
    created,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
