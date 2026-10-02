# AddressRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | [**CountryEnum**](CountryEnum.md) |  | [default to undefined]
**city** | **string** |  | [optional] [default to undefined]
**region** | **string** |  | [optional] [default to undefined]
**zipcode** | **string** |  | [optional] [default to undefined]
**address** | **string** |  | [optional] [default to undefined]
**region_fk** | **number** |  | [optional] [default to undefined]
**locality_fk** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { AddressRequest } from '@pidginhost/sdk';

const instance: AddressRequest = {
    country,
    city,
    region,
    zipcode,
    address,
    region_fk,
    locality_fk,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
