# PublicInterface


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_interface** | **string** |  | [readonly] [default to undefined]
**ipv4** | **string** |  | [readonly] [default to undefined]
**ipv6** | **string** |  | [readonly] [default to undefined]
**fw_rules_set** | **string** | ID or slug | [optional] [default to undefined]
**fw_policy_in** | [**FwPolicyOutEnum**](FwPolicyOutEnum.md) |  | [optional] [default to undefined]
**fw_policy_out** | [**FwPolicyOutEnum**](FwPolicyOutEnum.md) |  | [optional] [default to undefined]

## Example

```typescript
import { PublicInterface } from '@pidginhost/sdk';

const instance: PublicInterface = {
    _interface,
    ipv4,
    ipv6,
    fw_rules_set,
    fw_policy_in,
    fw_policy_out,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
