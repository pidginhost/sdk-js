# PrivateNetwork


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**slug** | **string** | CIDR format | [readonly] [default to undefined]
**address** | **string** | CIDR format | [default to undefined]
**gateway** | **string** |  | [optional] [default to undefined]
**provisioned** | **boolean** |  | [readonly] [default to undefined]
**servers** | **Array&lt;{ [key: string]: string; }&gt;** |  | [readonly] [default to undefined]

## Example

```typescript
import { PrivateNetwork } from '@pidginhost/sdk';

const instance: PrivateNetwork = {
    id,
    slug,
    address,
    gateway,
    provisioned,
    servers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
