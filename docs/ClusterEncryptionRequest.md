# ClusterEncryptionRequest

The body of a toggle or a staff reconcile.  Field errors are re-raised as ``EncryptionConflict`` rather than left as DRF validation errors: the endpoint answers every refusal with the feature\'s stable reason code, and a body that switched shape depending on WHICH refusal it was would force a client to parse two.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | [**EncryptionModeEnum**](EncryptionModeEnum.md) | Target encryption mode: no encryption, or WireGuard.  * &#x60;none&#x60; - none * &#x60;wireguard&#x60; - wireguard | [default to undefined]
**acknowledge_workload_restart** | **boolean** | Confirms the caller accepts that workloads must be restarted after the change. | [optional] [default to false]

## Example

```typescript
import { ClusterEncryptionRequest } from '@pidginhost/sdk';

const instance: ClusterEncryptionRequest = {
    mode,
    acknowledge_workload_restart,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
