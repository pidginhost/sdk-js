# AttachIPv4Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ipv4** | **string** | ID or address of an IPv4 you own. | [default to undefined]
**reboot** | **boolean** | Restart the server so the guest OS picks up the address. | [optional] [default to false]

## Example

```typescript
import { AttachIPv4Request } from '@pidginhost/sdk';

const instance: AttachIPv4Request = {
    ipv4,
    reboot,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
