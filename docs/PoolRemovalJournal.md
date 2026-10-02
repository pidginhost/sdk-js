# PoolRemovalJournal

What a customer may see about a downsize or pool deletion.  There is no `source` here and the row records none. The spec\'s \"pool journals apply the same split\" is about the customer/staff partition, not a field-for-field mirror of the node operation: a journal\'s initiator is already `actor_label`, and a `source` column would have to be threaded through four call sites to say something no reader distinguishes. The day a `source=\"system\"` caller exists it becomes an additive `AddField`; until then it would be a column nothing can populate truthfully.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**kind** | [**PoolRemovalJournalKindEnum**](PoolRemovalJournalKindEnum.md) |  | [readonly] [default to undefined]
**status** | [**PoolRemovalJournalStatusEnum**](PoolRemovalJournalStatusEnum.md) |  | [readonly] [default to undefined]
**reason** | **string** |  | [readonly] [default to undefined]
**message** | **string** |  | [readonly] [default to undefined]
**requested_pool_size** | **number** |  | [readonly] [default to undefined]
**local_data_loss_accepted** | **boolean** |  | [readonly] [default to undefined]
**actor_label** | **string** | Who requested the removal (user email or staff name). Never token material. | [readonly] [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]
**updated_at** | **string** |  | [readonly] [default to undefined]
**finished_at** | **string** |  | [readonly] [default to undefined]
**items** | [**Array&lt;PoolRemovalItem&gt;**](PoolRemovalItem.md) |  | [readonly] [default to undefined]
**allowed_actions** | **Array&lt;string&gt;** |  | [readonly] [default to undefined]

## Example

```typescript
import { PoolRemovalJournal } from '@pidginhost/sdk';

const instance: PoolRemovalJournal = {
    id,
    kind,
    status,
    reason,
    message,
    requested_pool_size,
    local_data_loss_accepted,
    actor_label,
    created_at,
    updated_at,
    finished_at,
    items,
    allowed_actions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
