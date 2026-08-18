# PatchedVolume


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**project** | **string** |  | [optional] [default to undefined]
**alias** | **string** |  | [optional] [default to undefined]
**size** | **number** | GB | [optional] [default to undefined]
**product** | **string** | ID or slug | [optional] [default to undefined]
**attached** | **boolean** |  | [optional] [readonly] [default to undefined]
**server** | **string** |  | [optional] [readonly] [default to '']

## Example

```typescript
import { PatchedVolume } from '@pidginhost/sdk';

const instance: PatchedVolume = {
    id,
    project,
    alias,
    size,
    product,
    attached,
    server,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
