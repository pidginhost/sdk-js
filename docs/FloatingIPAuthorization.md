# FloatingIPAuthorization

Read-only authorization row for either v4 or v6 (shape is identical).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**server_id** | **number** |  | [readonly] [default to undefined]
**server_hostname** | **string** |  | [readonly] [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { FloatingIPAuthorization } from '@pidginhost/sdk';

const instance: FloatingIPAuthorization = {
    id,
    server_id,
    server_hostname,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
