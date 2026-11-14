# ServerRoute

A server\'s default route on the network (spec 6.3): cloud-init evidence from Proxmox, not proof that the running guest has the route. A server Proxmox could not tell about is unknown.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**server** | **number** |  | [default to undefined]
**hostname** | **string** |  | [default to undefined]
**power** | [**RoutePowerEnum**](RoutePowerEnum.md) |  | [default to undefined]
**config** | [**RouteConfigEnum**](RouteConfigEnum.md) | The spec 6.2 rule over current config.  * &#x60;ok&#x60; - ok * &#x60;missing&#x60; - missing * &#x60;duplicate&#x60; - duplicate * &#x60;obsolete&#x60; - obsolete * &#x60;unknown&#x60; - unknown | [default to undefined]
**pending** | [**RouteConfigEnum**](RouteConfigEnum.md) | The rule over the config a reboot applies; null without one.  * &#x60;ok&#x60; - ok * &#x60;missing&#x60; - missing * &#x60;duplicate&#x60; - duplicate * &#x60;obsolete&#x60; - obsolete * &#x60;unknown&#x60; - unknown | [default to undefined]
**routes_here** | **boolean** | The rule gives this network\&#39;s interface the default route. | [default to undefined]
**acknowledged** | **boolean** | The last route apply\&#39;s config and boot still hold. | [default to undefined]

## Example

```typescript
import { ServerRoute } from '@pidginhost/sdk';

const instance: ServerRoute = {
    server,
    hostname,
    power,
    config,
    pending,
    routes_here,
    acknowledged,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
