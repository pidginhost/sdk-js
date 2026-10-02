# APITokenCreateRequest

Label bound tokens with their account + membership status (spec §4.2).  A dark deployment (flag off) with only personal rows keeps the exact pre-feature response shape; a bound row is always labeled so it cannot be mistaken for a personal token even after an emergency disable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**scope** | [**ScopeEnum**](ScopeEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { APITokenCreateRequest } from '@pidginhost/sdk';

const instance: APITokenCreateRequest = {
    name,
    scope,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
