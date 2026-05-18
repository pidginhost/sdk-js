# HostingService

Read-only serializer for shared/cPanel hosting services.

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
**package_name** | **string** |  | [readonly] [default to undefined]
**node_url** | **string** |  | [readonly] [default to undefined]
**username** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { HostingService } from '@pidginhost/sdk';

const instance: HostingService = {
    id,
    hostname,
    status,
    price,
    next_invoice,
    created,
    billing_cycle,
    package_name,
    node_url,
    username,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
