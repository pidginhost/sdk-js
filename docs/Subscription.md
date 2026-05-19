# Subscription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**status** | [**SubscriptionStatusEnum**](SubscriptionStatusEnum.md) |  | [readonly] [default to undefined]
**service** | **number** |  | [readonly] [default to undefined]
**service_hostname** | **string** |  | [readonly] [default to undefined]
**subtotal** | **string** |  | [readonly] [default to undefined]
**vat_value** | **string** |  | [readonly] [default to undefined]
**total** | **string** |  | [readonly] [default to undefined]
**creation_date** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { Subscription } from '@pidginhost/sdk';

const instance: Subscription = {
    id,
    status,
    service,
    service_hostname,
    subtotal,
    vat_value,
    total,
    creation_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
