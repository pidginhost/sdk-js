# Deposit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**status** | [**DepositStatusEnum**](DepositStatusEnum.md) |  | [readonly] [default to undefined]
**amount** | **string** | Fara TVA | [readonly] [default to undefined]
**vat_value** | **string** | TVA | [readonly] [default to undefined]
**vat_percentage** | **number** |  | [readonly] [default to undefined]
**total** | **string** | Cu TVA | [readonly] [default to undefined]
**created** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { Deposit } from '@pidginhost/sdk';

const instance: Deposit = {
    id,
    status,
    amount,
    vat_value,
    vat_percentage,
    total,
    created,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
