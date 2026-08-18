# StorageProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**slug** | **string** |  | [default to undefined]
**name** | **string** |  | [readonly] [default to undefined]
**type** | **string** |  | [readonly] [default to undefined]
**unit** | **string** |  | [readonly] [default to undefined]
**price** | **string** | price per quantity units per month (if applicable) | [default to undefined]
**min_size** | **string** |  | [readonly] [default to undefined]
**max_size** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { StorageProduct } from '@pidginhost/sdk';

const instance: StorageProduct = {
    id,
    slug,
    name,
    type,
    unit,
    price,
    min_size,
    max_size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
