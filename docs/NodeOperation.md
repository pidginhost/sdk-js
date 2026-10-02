# NodeOperation

What a customer may see about their own node operation.  The omissions are the point. Private address, Node UID, VMID, Proxmox placement, and every request/task/lease field stay on the staff serializer: they name internal topology, and a status endpoint is not where that becomes public.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**kind** | [**NodeOperationKindEnum**](NodeOperationKindEnum.md) |  | [readonly] [default to undefined]
**source** | [**NodeOperationSourceEnum**](NodeOperationSourceEnum.md) |  | [readonly] [default to undefined]
**target_hostname** | **string** |  | [readonly] [default to undefined]
**status** | [**NodeOperationStatusEnum**](NodeOperationStatusEnum.md) |  | [readonly] [default to undefined]
**reason** | **string** |  | [readonly] [default to undefined]
**message** | **string** |  | [readonly] [default to undefined]
**bypass_pdb** | **boolean** |  | [readonly] [default to undefined]
**delete_unmanaged_pods** | **boolean** |  | [readonly] [default to undefined]
**local_data_loss_accepted** | **boolean** |  | [readonly] [default to undefined]
**bypass_pdb_confirmed_at** | **string** |  | [readonly] [default to undefined]
**unmanaged_pods_confirmed_at** | **string** |  | [readonly] [default to undefined]
**actor_label** | **string** | Who requested the operation (user email or staff name). Never token material. | [readonly] [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]
**updated_at** | **string** |  | [readonly] [default to undefined]
**finished_at** | **string** |  | [readonly] [default to undefined]
**allowed_actions** | **Array&lt;string&gt;** |  | [readonly] [default to undefined]

## Example

```typescript
import { NodeOperation } from '@pidginhost/sdk';

const instance: NodeOperation = {
    id,
    kind,
    source,
    target_hostname,
    status,
    reason,
    message,
    bypass_pdb,
    delete_unmanaged_pods,
    local_data_loss_accepted,
    bypass_pdb_confirmed_at,
    unmanaged_pods_confirmed_at,
    actor_label,
    created_at,
    updated_at,
    finished_at,
    allowed_actions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
