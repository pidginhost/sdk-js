# TicketList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**subject** | **string** |  | [readonly] [default to undefined]
**department** | **string** |  | [readonly] [default to undefined]
**priority** | [**TicketPriorityEnum**](TicketPriorityEnum.md) |  | [readonly] [default to undefined]
**status** | [**TicketStatusEnum**](TicketStatusEnum.md) |  | [readonly] [default to undefined]
**created** | **string** |  | [readonly] [default to undefined]
**updated** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { TicketList } from '@pidginhost/sdk';

const instance: TicketList = {
    id,
    subject,
    department,
    priority,
    status,
    created,
    updated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
