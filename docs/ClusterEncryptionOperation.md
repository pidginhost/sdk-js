# ClusterEncryptionOperation

One encryption change, as the customer sees it.  ``verification_result`` is deliberately absent: the evidence is published once, sanitised, as the state\'s ``per_node`` -- two copies of a JSON column are two places for key material to escape from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**kind** | **string** |  | [readonly] [default to undefined]
**status** | **string** |  | [readonly] [default to undefined]
**requested_mode** | **string** |  | [readonly] [default to undefined]
**previous_mode** | **string** |  | [readonly] [default to undefined]
**reason** | **string** |  | [readonly] [default to undefined]
**message** | **string** |  | [readonly] [default to undefined]
**override_unverifiable** | **boolean** |  | [readonly] [default to undefined]
**request_id** | **string** |  | [readonly] [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]
**finished_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { ClusterEncryptionOperation } from '@pidginhost/sdk';

const instance: ClusterEncryptionOperation = {
    id,
    kind,
    status,
    requested_mode,
    previous_mode,
    reason,
    message,
    override_unverifiable,
    request_id,
    created_at,
    finished_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
