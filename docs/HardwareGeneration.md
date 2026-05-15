# HardwareGeneration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**cpu_label** | **string** |  | [optional] [default to undefined]
**price_multiplier** | **string** | Multiplier applied to base MeteredProduct price (1.00 &#x3D; no change, 1.50 &#x3D; +50%) | [optional] [default to undefined]
**is_default** | **boolean** |  | [optional] [default to undefined]
**icon_class** | **string** |  | [optional] [default to undefined]
**free_tier_eligible** | **boolean** | Whether free tier VM plans are available on this generation | [optional] [default to undefined]

## Example

```typescript
import { HardwareGeneration } from '@pidginhost/sdk';

const instance: HardwareGeneration = {
    slug,
    name,
    description,
    cpu_label,
    price_multiplier,
    is_default,
    icon_class,
    free_tier_eligible,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
