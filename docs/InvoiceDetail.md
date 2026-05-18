# InvoiceDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**number_proforma** | **string** |  | [readonly] [default to undefined]
**number_fiscal** | **string** |  | [readonly] [default to undefined]
**status** | [**Status03cEnum**](Status03cEnum.md) |  | [readonly] [default to undefined]
**subtotal** | **string** |  | [readonly] [default to undefined]
**vat_value** | **string** |  | [readonly] [default to undefined]
**vat_percentage** | **number** |  | [readonly] [default to undefined]
**total** | **string** |  | [readonly] [default to undefined]
**invoice_date** | **string** |  | [readonly] [default to undefined]
**due_date** | **string** |  | [readonly] [default to undefined]
**payment_date** | **string** |  | [readonly] [default to undefined]
**product_info** | **any** |  | [readonly] [default to undefined]
**client_info** | **any** |  | [readonly] [default to undefined]
**invoice_info** | **any** |  | [readonly] [default to undefined]
**payment_method** | **string** |  | [readonly] [default to undefined]
**services** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { InvoiceDetail } from '@pidginhost/sdk';

const instance: InvoiceDetail = {
    id,
    number_proforma,
    number_fiscal,
    status,
    subtotal,
    vat_value,
    vat_percentage,
    total,
    invoice_date,
    due_date,
    payment_date,
    product_info,
    client_info,
    invoice_info,
    payment_method,
    services,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
