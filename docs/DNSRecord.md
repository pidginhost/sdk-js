# DNSRecord

Read-only representation of a DNS record from the cPanel zone dump.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Line** | **number** |  | [readonly] [default to undefined]
**name** | **string** |  | [readonly] [default to undefined]
**ttl** | **number** |  | [readonly] [default to undefined]
**type** | **string** |  | [readonly] [default to undefined]
**address** | **string** |  | [readonly] [default to undefined]
**cname** | **string** |  | [readonly] [default to undefined]
**exchange** | **string** |  | [readonly] [default to undefined]
**preference** | **number** |  | [readonly] [default to undefined]
**txtdata** | **string** |  | [readonly] [default to undefined]
**unencoded** | **string** |  | [readonly] [default to undefined]
**target** | **string** |  | [readonly] [default to undefined]
**priority** | **number** |  | [readonly] [default to undefined]
**weight** | **number** |  | [readonly] [default to undefined]
**port** | **number** |  | [readonly] [default to undefined]
**flag** | **number** |  | [readonly] [default to undefined]
**tag** | **string** |  | [readonly] [default to undefined]
**value** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { DNSRecord } from '@pidginhost/sdk';

const instance: DNSRecord = {
    Line,
    name,
    ttl,
    type,
    address,
    cname,
    exchange,
    preference,
    txtdata,
    unencoded,
    target,
    priority,
    weight,
    port,
    flag,
    tag,
    value,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
