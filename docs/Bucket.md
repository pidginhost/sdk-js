# Bucket


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**name** | **string** |  | [readonly] [default to undefined]
**full_name** | **string** |  | [readonly] [default to undefined]
**quota_gb** | **number** |  | [readonly] [default to undefined]
**used_bytes** | **number** |  | [readonly] [default to undefined]
**object_count** | **number** |  | [readonly] [default to undefined]
**public_read** | **boolean** |  | [readonly] [default to undefined]
**status** | [**StatusA57Enum**](StatusA57Enum.md) |  | [readonly] [default to undefined]
**endpoint** | **string** |  | [readonly] [default to undefined]
**region** | **string** |  | [readonly] [default to undefined]
**created** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { Bucket } from '@pidginhost/sdk';

const instance: Bucket = {
    id,
    name,
    full_name,
    quota_gb,
    used_bytes,
    object_count,
    public_read,
    status,
    endpoint,
    region,
    created,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
