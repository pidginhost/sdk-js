# CompanyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**cif_vat** | **string** |  | [optional] [default to undefined]
**reg** | **string** |  | [optional] [default to undefined]
**iban** | **string** |  | [optional] [default to undefined]
**bank** | **string** |  | [optional] [default to undefined]
**contact_name** | **string** |  | [optional] [default to undefined]
**contact_email** | **string** |  | [optional] [default to undefined]
**address** | [**AddressRequest**](AddressRequest.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CompanyRequest } from '@pidginhost/sdk';

const instance: CompanyRequest = {
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
