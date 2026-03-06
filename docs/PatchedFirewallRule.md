# PatchedFirewallRule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**direction** | [**FirewallRuleDirectionEnum**](FirewallRuleDirectionEnum.md) |  | [optional] [default to undefined]
**action** | [**FwPolicyOutEnum**](FwPolicyOutEnum.md) |  | [optional] [default to undefined]
**protocol** | **string** |  | [optional] [default to undefined]
**source** | **string** | single IP, range (20.34.101.207-201.3.9.99) or comma separated list | [optional] [default to undefined]
**sport** | **string** | numbers (0-65535), range (\&quot;\\d+:\\d+\&quot;, like \&quot;80:85\&quot;), comma separated list | [optional] [default to undefined]
**destination** | **string** | single IP, range (20.34.101.207-201.3.9.99) or comma separated list | [optional] [default to undefined]
**dport** | **string** | numbers (0-65535), range (\&quot;\\d+:\\d+\&quot;, like \&quot;80:85\&quot;), comma separated list | [optional] [default to undefined]
**enabled** | **boolean** |  | [optional] [default to undefined]
**position** | **number** |  | [optional] [default to undefined]
**has_error** | **boolean** |  | [optional] [readonly] [default to undefined]
**error_message** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PatchedFirewallRule } from '@pidginhost/sdk';

const instance: PatchedFirewallRule = {
    id,
    direction,
    action,
    protocol,
    source,
    sport,
    destination,
    dport,
    enabled,
    position,
    has_error,
    error_message,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
