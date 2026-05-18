# ServerDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**hostname** | **string** |  | [readonly] [default to undefined]
**project** | **string** |  | [optional] [default to undefined]
**image** | **string** |  | [readonly] [default to undefined]
**_package** | **string** |  | [readonly] [default to undefined]
**cpus** | **number** |  | [readonly] [default to undefined]
**memory** | **number** |  | [readonly] [default to undefined]
**disk_size** | **number** |  | [readonly] [default to undefined]
**generation** | **string** |  | [readonly] [default to undefined]
**machine** | **{ [key: string]: any; }** |  | [readonly] [default to undefined]
**volumes** | [**Array&lt;Volume&gt;**](Volume.md) |  | [readonly] [default to undefined]
**networks** | **{ [key: string]: any; }** |  | [readonly] [default to undefined]
**password** | **string** |  | [optional] [default to undefined]
**status** | [**StatusA57Enum**](StatusA57Enum.md) |  | [readonly] [default to undefined]
**username** | **string** |  | [readonly] [default to undefined]
**destroy_protection** | **boolean** | Prevents the server from being destroyed until disabled. | [readonly] [default to undefined]
**ha_enabled** | **boolean** | Enables Proxmox HA — automatic restart and migration on node failure. | [readonly] [default to undefined]

## Example

```typescript
import { ServerDetail } from '@pidginhost/sdk';

const instance: ServerDetail = {
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
