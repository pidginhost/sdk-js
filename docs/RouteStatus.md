# RouteStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network** | **number** |  | [default to undefined]
**gateway** | **number** | The gateway that routes for the network, or null. | [default to undefined]
**servers** | [**Array&lt;ServerRoute&gt;**](ServerRoute.md) |  | [default to undefined]
**operations** | [**Array&lt;GatewayOperation&gt;**](GatewayOperation.md) | The network\&#39;s route applies, newest first. | [default to undefined]

## Example

```typescript
import { RouteStatus } from '@pidginhost/sdk';

const instance: RouteStatus = {
    network,
    gateway,
    servers,
    operations,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
