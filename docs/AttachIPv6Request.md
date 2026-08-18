# AttachIPv6Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipv6** | **string** | ID or address of an IPv6 you own. | [default to undefined]
**reboot** | **boolean** | Restart the server so the guest OS picks up the address. | [optional] [default to false]

## Example

```typescript
import { AttachIPv6Request } from '@pidginhost/sdk';

const instance: AttachIPv6Request = {
    ipv6,
    reboot,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
