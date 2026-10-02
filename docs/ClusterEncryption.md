# ClusterEncryption

The cluster\'s encryption state. Read-only, in full.  Every field here is written by the encryption action service or by the restart recheck; none of them is writable through any serializer, which is what keeps ``start_encryption_operation`` the only write path.  PUBLISHED WHETHER OR NOT ``K8S_ENCRYPTION_ENABLED`` IS SET, and that is not an oversight -- the spec requires it, so that the global gate \"cannot strand an `unknown` cluster\": the read, an already-queued operation and the staff reconcile recovery all stay reachable while the feature is dark, and only the ordinary toggle POST answers 404. So this is the one flag whose only call site is ``set_encryption``.  It also makes the API and the panel disagree about what a disabled feature exposes: ``cluster_fe.views.encryption_context`` returns None while the flag is off and the detail page drops the whole card. That difference is PUSH against PULL. The panel would put a red \"State unknown\" badge in front of every customer who opened their cluster page, for a feature they have not been told about; a caller who requested this resource by name asked the question, and answering it honestly is not advertising. Read either side\'s reason and the other one is half the argument -- they are one decision.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **string** |  | [readonly] [default to undefined]
**status** | [**ClusterEncryptionStatusEnum**](ClusterEncryptionStatusEnum.md) |  | [readonly] [default to undefined]
**changed_at** | **string** |  | [readonly] [default to undefined]
**verified_at** | **string** |  | [readonly] [default to undefined]
**restart_required** | **boolean** |  | [readonly] [default to undefined]
**restart_required_at** | **string** |  | [readonly] [default to undefined]
**restart_checked_at** | **string** |  | [readonly] [default to undefined]
**stale_pod_count** | **number** |  | [readonly] [default to undefined]
**reason** | **string** |  | [readonly] [default to undefined]
**error** | **string** |  | [readonly] [default to undefined]
**per_node** | **{ [key: string]: any; }** | Evidence from the NEWEST operation, which may not have any yet.  A freshly queued operation carries an empty &#x60;&#x60;verification_result&#x60;&#x60;, so this blanks the moment a toggle is admitted while &#x60;&#x60;mode&#x60;&#x60; and &#x60;&#x60;status&#x60;&#x60; still describe the last verified state. An empty map therefore means \&quot;no evidence from the current operation\&quot;, NEVER \&quot;verification failed\&quot; -- read &#x60;&#x60;operation.status&#x60;&#x60; to tell them apart. Showing the previous operation\&#39;s rows instead would label evidence for one mode as evidence for another. | [readonly] [default to undefined]
**operation** | [**ClusterEncryptionOperation**](ClusterEncryptionOperation.md) |  | [readonly] [default to undefined]

## Example

```typescript
import { ClusterEncryption } from '@pidginhost/sdk';

const instance: ClusterEncryption = {
    mode,
    status,
    changed_at,
    verified_at,
    restart_required,
    restart_required_at,
    restart_checked_at,
    stale_pod_count,
    reason,
    error,
    per_node,
    operation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
