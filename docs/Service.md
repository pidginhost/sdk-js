# Service


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**company** | **number** |  | [optional] [default to undefined]
**billing_cycle** | **number** |  | [readonly] [default to undefined]
**hostname** | **string** |  | [readonly] [default to undefined]
**price** | **string** | Euro without TVA | [readonly] [default to undefined]
**status** | [**Status63aEnum**](Status63aEnum.md) |  | [readonly] [default to undefined]
**created** | **string** |  | [readonly] [default to undefined]
**modified** | **string** |  | [readonly] [default to undefined]
**terminated** | **string** |  | [readonly] [default to undefined]
**next_invoice** | **string** |  | [readonly] [default to undefined]
**primary_service** | **number** |  | [readonly] [default to undefined]

## Example

```typescript
import { Service } from '@pidginhost/sdk';

const instance: Service = {
    id,
    company,
    billing_cycle,
    hostname,
    price,
    status,
    created,
    modified,
    terminated,
    next_invoice,
    primary_service,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
