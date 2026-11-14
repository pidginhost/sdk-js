# PatchedServerDetailRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostname** | **string** | Renaming also moves reverse DNS still on the old name. The server takes the new name at its next reboot from the panel or API, which also creates new SSH host keys and resets the login password and SSH keys to the ones saved here. | [optional] [default to undefined]
**project** | **string** |  | [optional] [default to undefined]
**password** | **string** |  | [optional] [default to undefined]
**ssh_pub_key** | **string** | Public key to apply for SSH login. Applying a non-empty key regenerates cloud-init and reboots a running server. Clearing removes the key from future cloud-init data, but does not revoke keys already in the guest. | [optional] [default to undefined]

## Example

```typescript
import { PatchedServerDetailRequest } from '@pidginhost/sdk';

const instance: PatchedServerDetailRequest = {
    hostname,
    project,
    password,
    ssh_pub_key,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
