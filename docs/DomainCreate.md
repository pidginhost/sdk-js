# DomainCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** | Domain with tld, ex: example.com | [default to undefined]
**nameservers** | **string** | List of 2-5 name-servers separated by comma. | [optional] [default to undefined]
**years** | **number** |  | [optional] [default to 1]

## Example

```typescript
import { DomainCreate } from '@pidginhost/sdk';

const instance: DomainCreate = {
    domain,
    nameservers,
    years,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
