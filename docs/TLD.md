# TLD


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**tld** | **string** |  | [default to undefined]
**price** | **string** | Euro without TVA | [default to undefined]
**renew_price** | **string** | Euro without TVA | [optional] [default to undefined]
**transfer_price** | **string** | Euro without TVA | [optional] [default to undefined]
**registrar** | **string** |  | [default to undefined]
**api_renewable** | **boolean** |  | [optional] [default to undefined]
**idna_support** | **boolean** |  | [optional] [default to undefined]
**wg_support** | **boolean** |  | [optional] [default to undefined]
**reactivate_max_days** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { TLD } from '@pidginhost/sdk';

const instance: TLD = {
    id,
    tld,
    price,
    renew_price,
    transfer_price,
    registrar,
    api_renewable,
    idna_support,
    wg_support,
    reactivate_max_days,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
