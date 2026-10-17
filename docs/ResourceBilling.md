# ResourceBilling


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **string** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**tax_included** | **boolean** |  | [default to undefined]
**cycle_months** | **number** |  | [default to undefined]
**cycle_label** | **string** |  | [default to undefined]
**next_invoice** | **string** |  | [default to undefined]
**profile** | [**ResourceBillingProfile**](ResourceBillingProfile.md) |  | [default to undefined]
**metered** | **boolean** |  | [default to undefined]
**included** | **boolean** |  | [default to undefined]
**hourly_amount** | **string** |  | [optional] [default to undefined]
**monthly_total** | **string** |  | [optional] [default to undefined]
**components** | **{ [key: string]: string; }** |  | [optional] [default to undefined]

## Example

```typescript
import { ResourceBilling } from '@pidginhost/sdk';

const instance: ResourceBilling = {
    amount,
    currency,
    tax_included,
    cycle_months,
    cycle_label,
    next_invoice,
    profile,
    metered,
    included,
    hourly_amount,
    monthly_total,
    components,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
