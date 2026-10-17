# InvoiceList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**number_proforma** | **string** |  | [readonly] [default to undefined]
**number_fiscal** | **string** |  | [readonly] [default to undefined]
**status** | [**InvoiceStatusEnum**](InvoiceStatusEnum.md) |  | [readonly] [default to undefined]
**invoice_type** | [**InvoiceTypeEnum**](InvoiceTypeEnum.md) |  | [readonly] [default to undefined]
**can_pay_with_funds** | **boolean** |  | [readonly] [default to undefined]
**subtotal** | **string** |  | [readonly] [default to undefined]
**vat_value** | **string** |  | [readonly] [default to undefined]
**vat_percentage** | **number** |  | [readonly] [default to undefined]
**total** | **string** |  | [readonly] [default to undefined]
**local_amounts** | [**InvoiceLocalAmounts**](InvoiceLocalAmounts.md) |  | [readonly] [default to undefined]
**invoice_date** | **string** |  | [readonly] [default to undefined]
**due_date** | **string** |  | [readonly] [default to undefined]
**payment_date** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { InvoiceList } from '@pidginhost/sdk';

const instance: InvoiceList = {
    id,
    number_proforma,
    number_fiscal,
    status,
    invoice_type,
    can_pay_with_funds,
    subtotal,
    vat_value,
    vat_percentage,
    total,
    local_amounts,
    invoice_date,
    due_date,
    payment_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
