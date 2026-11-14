# LBReimageStart


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eligible** | **boolean** |  | [default to undefined]
**reason** | [**LBReimageAvailabilityEnum**](LBReimageAvailabilityEnum.md) | Why no start is possible now: busy (try later) or unavailable  * &#x60;busy&#x60; - busy * &#x60;unavailable&#x60; - unavailable | [default to undefined]
**plan_id** | **string** |  | [default to undefined]

## Example

```typescript
import { LBReimageStart } from '@pidginhost/sdk';

const instance: LBReimageStart = {
    eligible,
    reason,
    plan_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
