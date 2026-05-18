# ServiceList


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
**auto_payment** | **string** |  | [readonly] [default to undefined]
**company** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { ServiceList } from '@pidginhost/sdk';

const instance: ServiceList = {
    id,
    hostname,
    status,
    price,
    next_invoice,
    created,
    billing_cycle,
    auto_payment,
    company,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
