# TicketDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**subject** | **string** |  | [readonly] [default to undefined]
**department** | [**Department**](Department.md) |  | [readonly] [default to undefined]
**priority** | [**Priority3cdEnum**](Priority3cdEnum.md) |  | [readonly] [default to undefined]
**status** | [**StatusEf2Enum**](StatusEf2Enum.md) |  | [readonly] [default to undefined]
**created** | **string** |  | [readonly] [default to undefined]
**updated** | **string** |  | [readonly] [default to undefined]
**messages** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { TicketDetail } from '@pidginhost/sdk';

const instance: TicketDetail = {
    id,
    subject,
    department,
    priority,
    status,
    created,
    updated,
    messages,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
