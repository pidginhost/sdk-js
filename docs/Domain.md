# Domain


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**domain** | **string** |  | [readonly] [default to undefined]
**tld** | [**TLD**](TLD.md) |  | [readonly] [default to undefined]
**idna** | **boolean** | Domain name is encoded with IDN | [readonly] [default to undefined]
**nameservers** | **string** | List of 2-5 name-servers separated by comma. | [optional] [default to undefined]
**expiration_date** | **string** |  | [readonly] [default to undefined]
**registration_date** | **string** |  | [readonly] [default to undefined]
**service** | [**Service**](Service.md) |  | [readonly] [default to undefined]
**idna_name** | **string** |  | [readonly] [default to undefined]
**max_renew_years** | **number** |  | [readonly] [default to undefined]
**service_status** | **string** | Service status | [readonly] [default to undefined]
**contacts** | **any** |  | [readonly] [default to undefined]

## Example

```typescript
import { Domain } from '@pidginhost/sdk';

const instance: Domain = {
    id,
    domain,
    tld,
    idna,
    nameservers,
    expiration_date,
    registration_date,
    service,
    idna_name,
    max_renew_years,
    service_status,
    contacts,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
