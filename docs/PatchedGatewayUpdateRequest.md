# PatchedGatewayUpdateRequest

The name, and the maintenance window: weekday 0 (Monday) to 6 (Sunday), hour 0 to 23, Bucharest time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**maintenance_weekday** | **number** |  | [optional] [default to undefined]
**maintenance_hour** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { PatchedGatewayUpdateRequest } from '@pidginhost/sdk';

const instance: PatchedGatewayUpdateRequest = {
    name,
    maintenance_weekday,
    maintenance_hour,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
