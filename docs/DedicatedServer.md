# DedicatedServer

Read-only serializer for dedicated server services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**hostname** | **string** |  | [readonly] [default to undefined]
**status** | [**Status63aEnum**](Status63aEnum.md) |  | [readonly] [default to undefined]
**price** | **string** | Euro without TVA | [readonly] [default to undefined]
**next_invoice** | **string** |  | [readonly] [default to undefined]
**created** | **string** |  | [readonly] [default to undefined]
**billing_cycle** | **string** |  | [readonly] [default to undefined]
**server_status** | **string** |  | [readonly] [default to undefined]
**ips** | **string** |  | [readonly] [default to undefined]
**os_name** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { DedicatedServer } from '@pidginhost/sdk';

const instance: DedicatedServer = {
    id,
    hostname,
    status,
    price,
    next_invoice,
    created,
    billing_cycle,
    server_status,
    ips,
    os_name,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
