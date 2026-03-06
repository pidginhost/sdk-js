# ActivateFreeDNS


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **string** | Domain name or primary key of the domain to activate. | [default to undefined]
**source** | [**SourceEnum**](SourceEnum.md) | \&#39;internal\&#39; for domains purchased on PidginHost, \&#39;external\&#39; for user-added domains.  * &#x60;internal&#x60; - Internal * &#x60;external&#x60; - External | [default to undefined]
**ip** | **string** | IPv4 address to use as the default A record for the zone. | [default to undefined]

## Example

```typescript
import { ActivateFreeDNS } from '@pidginhost/sdk';

const instance: ActivateFreeDNS = {
    domain,
    source,
    ip,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
