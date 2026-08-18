# DNSGlue

A glue / \"personal DNS\" record: registers a child nameserver host at the registry as ``<name>.<domain>`` pointing at ``ip`` (and optional ``ip2``). Required before another domain can delegate to that nameserver.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | only subdomain part | [default to undefined]
**ip** | **string** |  | [default to undefined]
**ip2** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { DNSGlue } from '@pidginhost/sdk';

const instance: DNSGlue = {
    name,
    ip,
    ip2,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
