# APITokenList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**name** | **string** |  | [readonly] [default to undefined]
**scope** | [**ScopeEnum**](ScopeEnum.md) |  | [readonly] [default to undefined]
**key_prefix** | **string** |  | [readonly] [default to undefined]
**created** | **string** |  | [readonly] [default to undefined]
**last_used** | **string** |  | [readonly] [default to undefined]
**request_count** | **number** |  | [readonly] [default to undefined]

## Example

```typescript
import { APITokenList } from '@pidginhost/sdk';

const instance: APITokenList = {
    id,
    name,
    scope,
    key_prefix,
    created,
    last_used,
    request_count,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
