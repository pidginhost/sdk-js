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
**password** | **string** |  | [optional] [default to undefined]
**status** | [**StatusA57Enum**](StatusA57Enum.md) |  | [optional] [readonly] [default to undefined]
**username** | **string** |  | [optional] [readonly] [default to undefined]
**destroy_protection** | **boolean** | Prevents the server from being destroyed until disabled. | [optional] [readonly] [default to undefined]
**ha_enabled** | **boolean** | Enables Proxmox HA — automatic restart and migration on node failure. | [optional] [readonly] [default to undefined]

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
    password,
    status,
    username,
    destroy_protection,
    ha_enabled,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
