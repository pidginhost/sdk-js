# PatchedInboundRouteCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pattern** | **string** |  | [optional] [default to undefined]
**mode** | [**ModeEnum**](ModeEnum.md) |  | [optional] [default to undefined]
**webhook_url** | **string** |  | [optional] [default to undefined]
**forward_to** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { PatchedInboundRouteCreateRequest } from '@pidginhost/sdk';

const instance: PatchedInboundRouteCreateRequest = {
    pattern,
    mode,
    webhook_url,
    forward_to,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
