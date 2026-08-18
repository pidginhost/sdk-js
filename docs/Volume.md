# Volume


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**project** | **string** |  | [optional] [default to undefined]
**alias** | **string** |  | [optional] [default to undefined]
**size** | **number** | GB | [default to undefined]
**product** | **string** | ID or slug | [default to undefined]
**attached** | **boolean** |  | [readonly] [default to undefined]
**server** | **string** |  | [readonly] [default to '']

## Example

```typescript
import { Volume } from '@pidginhost/sdk';

const instance: Volume = {
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
