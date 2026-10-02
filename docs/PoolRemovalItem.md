# PoolRemovalItem

One worker a journal is removing, and how far its removal got.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_hostname** | **string** |  | [readonly] [default to undefined]
**cordoned_at** | **string** |  | [readonly] [default to undefined]
**drained_at** | **string** |  | [readonly] [default to undefined]
**detached_at** | **string** |  | [readonly] [default to undefined]
**validated_at** | **string** |  | [readonly] [default to undefined]
**reset_started_at** | **string** |  | [readonly] [default to undefined]
**reset_completed_at** | **string** |  | [readonly] [default to undefined]
**node_deleted_at** | **string** |  | [readonly] [default to undefined]
**vm_deleted_at** | **string** |  | [readonly] [default to undefined]
**uncordoned_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { PoolRemovalItem } from '@pidginhost/sdk';

const instance: PoolRemovalItem = {
    target_hostname,
    cordoned_at,
    drained_at,
    detached_at,
    validated_at,
    reset_started_at,
    reset_completed_at,
    node_deleted_at,
    vm_deleted_at,
    uncordoned_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
