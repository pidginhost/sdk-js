# Server


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**hostname** | **string** |  | [optional] [default to undefined]
**project** | **string** |  | [optional] [default to undefined]
**image** | **string** |  | [readonly] [default to undefined]
**_package** | **string** |  | [readonly] [default to undefined]
**cpus** | **number** |  | [readonly] [default to undefined]
**memory** | **number** |  | [readonly] [default to undefined]
**disk_size** | **number** |  | [readonly] [default to undefined]
**status** | [**StatusA57Enum**](StatusA57Enum.md) |  | [optional] [default to undefined]
**destroy_protection** | **boolean** | Prevents the server from being destroyed until disabled. | [readonly] [default to undefined]
**ha_enabled** | **boolean** | Enables Proxmox HA — automatic restart and migration on node failure. | [readonly] [default to undefined]
**networks** | **{ [key: string]: any; }** |  | [readonly] [default to undefined]

## Example

```typescript
import { Server } from '@pidginhost/sdk';

const instance: Server = {
    id,
    hostname,
    project,
    image,
    _package,
    cpus,
    memory,
    disk_size,
    status,
    destroy_protection,
    ha_enabled,
    networks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
