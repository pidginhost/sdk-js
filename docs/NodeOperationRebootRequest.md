# NodeOperationRebootRequest

A reboot destroys the same local data a delete does, and says so.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_data_loss_accepted** | **boolean** | Acknowledge that data kept on the node itself is destroyed. The drain always deletes emptyDir. | [optional] [default to false]

## Example

```typescript
import { NodeOperationRebootRequest } from '@pidginhost/sdk';

const instance: NodeOperationRebootRequest = {
    local_data_loss_accepted,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
