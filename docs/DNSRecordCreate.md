# DNSRecordCreate

Validate input for creating or editing a DNS record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Record hostname (use \&#39;@\&#39; or leave empty for zone apex). | [default to undefined]
**ttl** | **number** | Time to live in seconds. | [default to undefined]
**type** | [**DNSRecordCreateTypeEnum**](DNSRecordCreateTypeEnum.md) | DNS record type.  * &#x60;A&#x60; - A * &#x60;AAAA&#x60; - AAAA * &#x60;TYPE257&#x60; - TYPE257 * &#x60;CNAME&#x60; - CNAME * &#x60;MX&#x60; - MX * &#x60;SRV&#x60; - SRV * &#x60;TXT&#x60; - TXT | [default to undefined]
**address** | **string** | IPv4/IPv6 address (A/AAAA). | [optional] [default to undefined]
**cname** | **string** | Canonical name (CNAME). | [optional] [default to undefined]
**exchange** | **string** | Mail exchange host (MX). | [optional] [default to undefined]
**preference** | **number** | MX preference / priority. | [optional] [default to undefined]
**txtdata** | **string** | TXT record data. | [optional] [default to undefined]
**unencoded** | **string** | Unencoded TXT value. | [optional] [default to undefined]
**target** | **string** | SRV target host. | [optional] [default to undefined]
**priority** | **number** | SRV priority. | [optional] [default to undefined]
**weight** | **number** | SRV weight. | [optional] [default to undefined]
**port** | **number** | SRV port. | [optional] [default to undefined]
**flag** | **number** | CAA flag (TYPE257). | [optional] [default to undefined]
**tag** | **string** | CAA tag (TYPE257). | [optional] [default to undefined]
**value** | **string** | CAA value (TYPE257). | [optional] [default to undefined]
**line** | **number** | Line number of existing record to edit. Omit to add a new record. | [optional] [default to undefined]

## Example

```typescript
import { DNSRecordCreate } from '@pidginhost/sdk';

const instance: DNSRecordCreate = {
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
    line,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
