# OSImage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**slug** | **string** |  | [default to undefined]
**name** | **string** | Display name for users | [default to undefined]
**family_name** | **string** |  | [readonly] [default to undefined]
**is_default** | **boolean** | Default version within this family (shown pre-selected) | [optional] [default to undefined]

## Example

```typescript
import { OSImage } from '@pidginhost/sdk';

const instance: OSImage = {
    id,
    slug,
    name,
    family_name,
    is_default,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
