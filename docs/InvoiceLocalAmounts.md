# InvoiceLocalAmounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | [**CurrencyEnum**](CurrencyEnum.md) |  | [default to undefined]
**subtotal** | **string** |  | [default to undefined]
**vat_value** | **string** |  | [default to undefined]
**total** | **string** |  | [default to undefined]
**primary** | **boolean** | True for a Romanian beneficiary (the rule that picks the PDF language); show RON first. | [default to undefined]

## Example

```typescript
import { InvoiceLocalAmounts } from '@pidginhost/sdk';

const instance: InvoiceLocalAmounts = {
    currency,
    subtotal,
    vat_value,
    total,
    primary,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
