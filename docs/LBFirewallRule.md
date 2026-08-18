# LBFirewallRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**direction** | [**LBFirewallRuleDirectionEnum**](LBFirewallRuleDirectionEnum.md) |  | [optional] [default to undefined]
**action** | [**LBFirewallRuleActionEnum**](LBFirewallRuleActionEnum.md) |  | [optional] [default to undefined]
**protocol** | **string** | tcp, udp, icmp, etc. | [optional] [default to undefined]
**source** | **string** | IP address or CIDR | [optional] [default to undefined]
**sport** | **string** | Port or range (e.g., 1024-65535) | [optional] [default to undefined]
**destination** | **string** | IP address or CIDR | [optional] [default to undefined]
**dport** | **string** | Port or range (e.g., 80, 8000-9000) | [optional] [default to undefined]
**comment** | **string** |  | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**position** | **number** | Rule order (lower &#x3D; higher priority) | [optional] [default to undefined]
**created** | **string** |  | [readonly] [default to undefined]
**updated** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { LBFirewallRule } from '@pidginhost/sdk';

const instance: LBFirewallRule = {
    id,
    direction,
    action,
    protocol,
    source,
    sport,
    destination,
    dport,
    comment,
    enabled,
    position,
    created,
    updated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
