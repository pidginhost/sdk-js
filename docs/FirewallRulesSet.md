# FirewallRulesSet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**name** | **string** |  | [default to undefined]
**status** | [**FirewallRulesSetStatusEnum**](FirewallRulesSetStatusEnum.md) |  | [readonly] [default to undefined]
**rules** | [**Array&lt;FirewallRule&gt;**](FirewallRule.md) |  | [readonly] [default to undefined]
**read_only** | **boolean** | used with free tier vm | [readonly] [default to undefined]

## Example

```typescript
import { FirewallRulesSet } from '@pidginhost/sdk';

const instance: FirewallRulesSet = {
    id,
    name,
    status,
    rules,
    read_only,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
