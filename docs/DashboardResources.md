# DashboardResources


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**server_count** | **number** |  | [default to undefined]
**hosting_count** | **number** |  | [default to undefined]
**servers** | [**Array&lt;DashboardServer&gt;**](DashboardServer.md) |  | [default to undefined]
**hosting** | [**Array&lt;HostingService&gt;**](HostingService.md) |  | [default to undefined]
**expiring_domains** | [**Array&lt;ExpiringDomain&gt;**](ExpiringDomain.md) |  | [default to undefined]

## Example

```typescript
import { DashboardResources } from '@pidginhost/sdk';

const instance: DashboardResources = {
    server_count,
    hosting_count,
    servers,
    hosting,
    expiring_domains,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
