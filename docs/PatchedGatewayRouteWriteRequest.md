# PatchedGatewayRouteWriteRequest

The fields a customer writes; gateway.lb_routes.clean_route decides what they may hold.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostnames** | **Array&lt;string&gt;** | Up to 16 names; empty matches every host. | [optional] [default to undefined]
**path_prefix** | **string** | Literal and case-sensitive. | [optional] [default to undefined]
**pool** | **number** | A backend pool\&#39;s id. | [optional] [default to undefined]
**redirect_https** | **boolean** | Only false is accepted for now. | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { PatchedGatewayRouteWriteRequest } from '@pidginhost/sdk';

const instance: PatchedGatewayRouteWriteRequest = {
    hostnames,
    path_prefix,
    pool,
    redirect_https,
    enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
