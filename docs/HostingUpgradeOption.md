# HostingUpgradeOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**base_price** | **number** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**tax_included** | **boolean** |  | [default to undefined]
**limits** | **{ [key: string]: any; }** | Package display limits; disk_quota and traffic are in GB. | [default to undefined]
**review_url** | **string** |  | [default to undefined]

## Example

```typescript
import { HostingUpgradeOption } from '@pidginhost/sdk';

const instance: HostingUpgradeOption = {
    id,
    name,
    base_price,
    currency,
    tax_included,
    limits,
    review_url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
