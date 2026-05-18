# EmailService


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**tier** | **string** |  | [readonly] [default to undefined]
**status** | [**StatusA57Enum**](StatusA57Enum.md) |  | [readonly] [default to undefined]
**sandbox_mode** | **boolean** |  | [readonly] [default to undefined]
**auto_suspended** | **boolean** |  | [readonly] [default to undefined]
**auto_suspend_reason** | **string** |  | [readonly] [default to undefined]
**msgs_sent_24h** | **number** |  | [readonly] [default to undefined]
**msgs_sent_30d** | **number** |  | [readonly] [default to undefined]
**bounce_rate_pct** | **string** |  | [readonly] [default to undefined]
**complaint_rate_pct** | **string** |  | [readonly] [default to undefined]
**dedicated_ip_addon** | **boolean** |  | [readonly] [default to undefined]
**quota_monthly** | **string** |  | [readonly] [default to undefined]
**price_monthly_eur** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { EmailService } from '@pidginhost/sdk';

const instance: EmailService = {
    id,
    tier,
    status,
    sandbox_mode,
    auto_suspended,
    auto_suspend_reason,
    msgs_sent_24h,
    msgs_sent_30d,
    bounce_rate_pct,
    complaint_rate_pct,
    dedicated_ip_addon,
    quota_monthly,
    price_monthly_eur,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
