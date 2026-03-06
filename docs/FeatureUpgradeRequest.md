# FeatureUpgradeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_name** | **string** | Name of the feature to upgrade (e.g. cert-manager) | [default to undefined]
**retry** | **boolean** | Retry a failed install | [optional] [default to false]

## Example

```typescript
import { FeatureUpgradeRequest } from '@pidginhost/sdk';

const instance: FeatureUpgradeRequest = {
    feature_name,
    retry,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
