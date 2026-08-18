# SendingDomain


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**name** | **string** |  | [readonly] [default to undefined]
**status** | [**SendingDomainStatusEnum**](SendingDomainStatusEnum.md) |  | [readonly] [default to undefined]
**dns_source** | [**DnsSourceEnum**](DnsSourceEnum.md) |  | [readonly] [default to undefined]
**use_inbound** | **boolean** |  | [readonly] [default to undefined]
**dkim_selector** | **string** |  | [readonly] [default to undefined]
**dkim_record** | **string** |  | [readonly] [default to undefined]
**spf_record** | **string** |  | [readonly] [default to undefined]
**dmarc_record** | **string** |  | [readonly] [default to undefined]
**verified_at** | **string** |  | [readonly] [default to undefined]
**last_check_at** | **string** |  | [readonly] [default to undefined]
**last_check_errors** | **any** |  | [readonly] [default to undefined]

## Example

```typescript
import { SendingDomain } from '@pidginhost/sdk';

const instance: SendingDomain = {
    id,
    name,
    status,
    dns_source,
    use_inbound,
    dkim_selector,
    dkim_record,
    spf_record,
    dmarc_record,
    verified_at,
    last_check_at,
    last_check_errors,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
