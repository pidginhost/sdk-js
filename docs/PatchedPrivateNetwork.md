# PatchedPrivateNetwork


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**slug** | **string** | CIDR format | [optional] [readonly] [default to undefined]
**address** | **string** | CIDR format | [optional] [default to undefined]
**gateway** | **string** |  | [optional] [default to undefined]
**provisioned** | **boolean** |  | [optional] [readonly] [default to undefined]
**servers** | **Array&lt;{ [key: string]: string; }&gt;** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PatchedPrivateNetwork } from '@pidginhost/sdk';

const instance: PatchedPrivateNetwork = {
    id,
    slug,
    address,
    gateway,
    provisioned,
    servers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
