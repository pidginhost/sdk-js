# ServerTrafficResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**year** | **number** |  | [default to undefined]
**month** | **number** |  | [default to undefined]
**as_of** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**bytes_in** | **number** |  | [default to undefined]
**bytes_out** | **number** |  | [default to undefined]
**bytes_total** | **number** |  | [default to undefined]
**included_tb** | **number** |  | [default to undefined]
**used_units** | **number** |  | [default to undefined]
**used_tb** | **string** | Usage rounded up to six decimal places; bytes_total is exact. | [default to undefined]
**billable_bytes** | **number** | Of bytes_total, the part that may be charged. | [default to undefined]
**billable_units** | **number** |  | [default to undefined]
**billable_tb** | **string** | Billable usage rounded up to six decimal places; billable_bytes is exact. | [default to undefined]
**billable_from** | **string** | First fully billable day, when one date describes the usage. May fall after the reported month. Null when all usage is billable or streams have different boundaries; use billable_bytes for the billable total. | [default to undefined]
**charged_tb** | **number** |  | [default to undefined]
**charged_amount** | **string** |  | [default to undefined]
**price_per_tb** | **string** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**unit_bytes** | **number** |  | [default to undefined]
**remaining_bytes** | **number** |  | [default to undefined]
**last_sample_at** | **string** |  | [default to undefined]
**daily** | **Array&lt;{ [key: string]: any; }&gt;** |  | [default to undefined]

## Example

```typescript
import { ServerTrafficResponse } from '@pidginhost/sdk';

const instance: ServerTrafficResponse = {
    year,
    month,
    as_of,
    status,
    bytes_in,
    bytes_out,
    bytes_total,
    included_tb,
    used_units,
    used_tb,
    billable_bytes,
    billable_units,
    billable_tb,
    billable_from,
    charged_tb,
    charged_amount,
    price_per_tb,
    currency,
    unit_bytes,
    remaining_bytes,
    last_sample_at,
    daily,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
