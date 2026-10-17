# DNSRecord

Read-only representation of a DNS record from the cPanel zone dump.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Line** | **number** |  | [readonly] [default to undefined]
**name** | **string** |  | [readonly] [default to undefined]
**ttl** | **number** |  | [readonly] [default to undefined]
**type** | **string** |  | [readonly] [default to undefined]
**address** | **string** |  | [optional] [default to undefined]
**cname** | **string** |  | [optional] [default to undefined]
**exchange** | **string** |  | [optional] [default to undefined]
**preference** | **number** |  | [optional] [default to undefined]
**txtdata** | **string** |  | [optional] [default to undefined]
**unencoded** | **string** |  | [optional] [default to undefined]
**target** | **string** |  | [optional] [default to undefined]
**priority** | **number** |  | [optional] [default to undefined]
**weight** | **number** |  | [optional] [default to undefined]
**port** | **number** |  | [optional] [default to undefined]
**flag** | **number** |  | [optional] [default to undefined]
**tag** | **string** |  | [optional] [default to undefined]
**value** | **string** |  | [optional] [default to undefined]

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
