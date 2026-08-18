# InboundRoute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**domain** | **number** |  | [readonly] [default to undefined]
**pattern** | **string** |  | [default to undefined]
**mode** | [**ModeEnum**](ModeEnum.md) |  | [default to undefined]
**webhook_url** | **string** |  | [optional] [default to undefined]
**forward_to** | **string** |  | [optional] [default to undefined]
**active** | **boolean** |  | [optional] [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { InboundRoute } from '@pidginhost/sdk';

const instance: InboundRoute = {
    id,
    domain,
    pattern,
    mode,
    webhook_url,
    forward_to,
    active,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
