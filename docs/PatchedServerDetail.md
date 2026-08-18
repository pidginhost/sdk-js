# PatchedServerDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**hostname** | **string** |  | [optional] [readonly] [default to undefined]
**project** | **string** |  | [optional] [default to undefined]
**image** | **string** |  | [optional] [readonly] [default to undefined]
**_package** | **string** |  | [optional] [readonly] [default to undefined]
**cpus** | **number** |  | [optional] [readonly] [default to undefined]
**memory** | **number** |  | [optional] [readonly] [default to undefined]
**disk_size** | **number** |  | [optional] [readonly] [default to undefined]
**generation** | **string** |  | [optional] [readonly] [default to undefined]
**machine** | **{ [key: string]: any; }** |  | [optional] [readonly] [default to undefined]
**volumes** | [**Array&lt;Volume&gt;**](Volume.md) |  | [optional] [readonly] [default to undefined]
**networks** | **{ [key: string]: any; }** |  | [optional] [readonly] [default to undefined]
**floating_ips** | [**Array&lt;FloatingIPSummary&gt;**](FloatingIPSummary.md) |  | [optional] [readonly] [default to undefined]
**password** | **string** |  | [optional] [default to undefined]
**ssh_pub_key** | **string** | Public key to apply for SSH login. Applying a non-empty key regenerates cloud-init and reboots a running server. Clearing removes the key from future cloud-init data, but does not revoke keys already in the guest. | [optional] [default to undefined]
**status** | [**ResourceStatusEnum**](ResourceStatusEnum.md) |  | [optional] [readonly] [default to undefined]
**username** | **string** |  | [optional] [readonly] [default to undefined]
**destroy_protection** | **boolean** | Prevents the server from being destroyed until disabled. | [optional] [readonly] [default to undefined]
**ha_enabled** | **boolean** | Enables Proxmox HA — automatic restart and migration on node failure. | [optional] [readonly] [default to undefined]
**custom_os** | **boolean** | Customer installed their own OS from an ISO; cloud-init features no longer apply | [optional] [readonly] [default to undefined]
**rescue_mode** | **boolean** |  | [optional] [readonly] [default to undefined]
**boot_iso** | **string** |  | [optional] [readonly] [default to undefined]
**rescue_supported** | **boolean** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PatchedServerDetail } from '@pidginhost/sdk';

const instance: PatchedServerDetail = {
    id,
    hostname,
    project,
    image,
    _package,
    cpus,
    memory,
    disk_size,
    generation,
    machine,
    volumes,
    networks,
    floating_ips,
    password,
    ssh_pub_key,
    status,
    username,
    destroy_protection,
    ha_enabled,
    custom_os,
    rescue_mode,
    boot_iso,
    rescue_supported,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
