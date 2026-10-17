# HostingUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fetched_at** | **string** |  | [default to undefined]
**_package** | **string** |  | [default to undefined]
**metrics** | [**Array&lt;HostingUsageMetric&gt;**](HostingUsageMetric.md) |  | [default to undefined]
**live_available** | **boolean** |  | [default to undefined]
**lve_available** | **boolean** |  | [default to undefined]
**lve_period** | [**Array&lt;HostingLVEPeriod&gt;**](HostingLVEPeriod.md) |  | [default to undefined]
**package_limits** | **{ [key: string]: number; }** |  | [default to undefined]
**pressure_detected** | **boolean** |  | [default to undefined]

## Example

```typescript
import { HostingUsage } from '@pidginhost/sdk';

const instance: HostingUsage = {
    fetched_at,
    _package,
    metrics,
    live_available,
    lve_available,
    lve_period,
    package_limits,
    pressure_detected,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
