# PatchedFirewallRulesSet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**status** | [**FirewallRulesSetStatusEnum**](FirewallRulesSetStatusEnum.md) |  | [optional] [readonly] [default to undefined]
**rules** | [**Array&lt;FirewallRule&gt;**](FirewallRule.md) |  | [optional] [readonly] [default to undefined]
**read_only** | **boolean** | used with free tier vm | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PatchedFirewallRulesSet } from '@pidginhost/sdk';

const instance: PatchedFirewallRulesSet = {
    id,
    name,
    status,
    rules,
    read_only,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
