# PublicInterfaceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fw_rules_set** | **string** | ID or slug | [optional] [default to undefined]
**fw_policy_in** | [**FwPolicyOutEnum**](FwPolicyOutEnum.md) |  | [optional] [default to undefined]
**fw_policy_out** | [**FwPolicyOutEnum**](FwPolicyOutEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PublicInterfaceRequest } from '@pidginhost/sdk';

const instance: PublicInterfaceRequest = {
    fw_rules_set,
    fw_policy_in,
    fw_policy_out,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
