# BucketCancelResponse

Body of the 202 answered by ``BucketViewSet.destroy``.  Deletion is asynchronous, so the route cannot answer 204: the caller needs the id it cancelled and the status it moved to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**status** | **string** |  | [default to undefined]

## Example

```typescript
import { BucketCancelResponse } from '@pidginhost/sdk';

const instance: BucketCancelResponse = {
    id,
    status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
