# TicketCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subject** | **string** |  | [default to undefined]
**department** | **number** |  | [default to undefined]
**priority** | [**TicketCreatePriorityEnum**](TicketCreatePriorityEnum.md) |  | [optional] [default to undefined]
**service_id** | **number** |  | [optional] [default to undefined]
**message** | **string** |  | [default to undefined]
**attachment** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TicketCreate } from '@pidginhost/sdk';

const instance: TicketCreate = {
    subject,
    department,
    priority,
    service_id,
    message,
    attachment,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
