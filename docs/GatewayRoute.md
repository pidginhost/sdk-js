# GatewayRoute

An http listener\'s route (spec 5.6): a host and path prefix to a backend pool; pending until applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**hostnames** | **Array&lt;string&gt;** | Empty matches every host. | [default to undefined]
**path_prefix** | **string** |  | [readonly] [default to undefined]
**pool** | **number** |  | [default to undefined]
**redirect_https** | **boolean** | Always false: HTTPS redirects are not available yet. | [readonly] [default to undefined]
**enabled** | **boolean** |  | [readonly] [default to undefined]
**changed_revision** | **number** |  | [readonly] [default to undefined]
**pending** | **boolean** |  | [readonly] [default to undefined]

## Example

```typescript
import { GatewayRoute } from '@pidginhost/sdk';

const instance: GatewayRoute = {
    id,
    hostnames,
    path_prefix,
    pool,
    redirect_https,
    enabled,
    changed_revision,
    pending,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
