# APITokenCreate

Label bound tokens with their account + membership status (spec §4.2).  A dark deployment (flag off) with only personal rows keeps the exact pre-feature response shape; a bound row is always labeled so it cannot be mistaken for a personal token even after an emergency disable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**name** | **string** |  | [default to undefined]
**scope** | [**ScopeEnum**](ScopeEnum.md) |  | [optional] [default to undefined]
**key** | **string** |  | [readonly] [default to undefined]
**created** | **string** |  | [readonly] [default to undefined]
**account** | **string** |  | [readonly] [default to undefined]
**membership_status** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { APITokenCreate } from '@pidginhost/sdk';

const instance: APITokenCreate = {
    id,
    name,
    scope,
    key,
    created,
    account,
    membership_status,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
