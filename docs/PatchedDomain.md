# PatchedDomain


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**domain** | **string** |  | [optional] [readonly] [default to undefined]
**tld** | [**TLD**](TLD.md) |  | [optional] [readonly] [default to undefined]
**idna** | **boolean** | Domain name is encoded with IDN | [optional] [readonly] [default to undefined]
**nameservers** | **string** | List of 2-5 name-servers separated by comma. | [optional] [default to undefined]
**expiration_date** | **string** |  | [optional] [readonly] [default to undefined]
**registration_date** | **string** |  | [optional] [readonly] [default to undefined]
**service** | [**Service**](Service.md) |  | [optional] [readonly] [default to undefined]
**idna_name** | **string** |  | [optional] [readonly] [default to undefined]
**max_renew_years** | **number** |  | [optional] [readonly] [default to undefined]
**service_status** | **string** | Service status | [optional] [readonly] [default to undefined]
**contacts** | **any** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PatchedDomain } from '@pidginhost/sdk';

const instance: PatchedDomain = {
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
