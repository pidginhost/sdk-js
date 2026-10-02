# PatchedServerDetailRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project** | **string** |  | [optional] [default to undefined]
**password** | **string** |  | [optional] [default to undefined]
**ssh_pub_key** | **string** | Public key to apply for SSH login. Applying a non-empty key regenerates cloud-init and reboots a running server. Clearing removes the key from future cloud-init data, but does not revoke keys already in the guest. | [optional] [default to undefined]

## Example

```typescript
import { PatchedServerDetailRequest } from '@pidginhost/sdk';

const instance: PatchedServerDetailRequest = {
    project,
    password,
    ssh_pub_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
