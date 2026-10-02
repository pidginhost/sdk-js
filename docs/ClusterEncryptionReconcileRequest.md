# ClusterEncryptionReconcileRequest

The staff reconcile body, which alone may carry the override.  A SEPARATE component rather than an optional field on the shared one. The toggle route ignores the flag entirely, so declaring it in one body would hand a generated client an argument that silently does nothing on half the routes carrying it -- the same class of published untruth the rest of this feature\'s schema work exists to prevent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | [**EncryptionModeEnum**](EncryptionModeEnum.md) | Target encryption mode: no encryption, or WireGuard.  * &#x60;none&#x60; - none * &#x60;wireguard&#x60; - wireguard | [default to undefined]
**acknowledge_workload_restart** | **boolean** | Confirms the caller accepts that workloads must be restarted after the change. | [optional] [default to false]
**override_unverifiable** | **boolean** | Record this mode even if verification refuses, together with what was observed. Only the unencrypted mode can be asserted this way: an encrypted state always requires positive per-node evidence. | [optional] [default to false]

## Example

```typescript
import { ClusterEncryptionReconcileRequest } from '@pidginhost/sdk';

const instance: ClusterEncryptionReconcileRequest = {
    mode,
    acknowledge_workload_restart,
    override_unverifiable,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
