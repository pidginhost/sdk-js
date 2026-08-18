# DomainAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**dns_source** | [**DnsSourceEnum**](DnsSourceEnum.md) |  | [default to undefined]
**managed_domain** | **number** |  | [optional] [default to undefined]
**managed_external_domain** | **number** |  | [optional] [default to undefined]
**use_inbound** | **boolean** |  | [optional] [default to false]

## Example

```typescript
import { DomainAdd } from '@pidginhost/sdk';

const instance: DomainAdd = {
    name,
    dns_source,
    managed_domain,
    managed_external_domain,
    use_inbound,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
