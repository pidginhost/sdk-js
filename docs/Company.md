# Company


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**name** | **string** |  | [default to undefined]
**cif_vat** | **string** |  | [optional] [default to undefined]
**reg** | **string** |  | [optional] [default to undefined]
**iban** | **string** |  | [optional] [default to undefined]
**bank** | **string** |  | [optional] [default to undefined]
**contact_name** | **string** |  | [optional] [default to undefined]
**contact_email** | **string** |  | [optional] [default to undefined]
**address** | [**Address**](Address.md) |  | [optional] [default to undefined]

## Example

```typescript
import { Company } from '@pidginhost/sdk';

const instance: Company = {
    id,
    name,
    cif_vat,
    reg,
    iban,
    bank,
    contact_name,
    contact_email,
    address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
