# FloatingIPv4


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**address** | **string** |  | [readonly] [default to undefined]
**gateway** | **string** |  | [readonly] [default to undefined]
**prefix** | **number** |  | [readonly] [default to undefined]
**reverse_dns** | **string** |  | [readonly] [default to undefined]
**label** | **string** |  | [optional] [default to undefined]
**authorized_vm_count** | **number** |  | [readonly] [default to undefined]
**created_at** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { FloatingIPv4 } from '@pidginhost/sdk';

const instance: FloatingIPv4 = {
    id,
    address,
    gateway,
    prefix,
    reverse_dns,
    label,
    authorized_vm_count,
    created_at,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
