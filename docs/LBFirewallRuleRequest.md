# LBFirewallRuleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
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

## Example

```typescript
import { LBFirewallRuleRequest } from '@pidginhost/sdk';

const instance: LBFirewallRuleRequest = {
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
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
