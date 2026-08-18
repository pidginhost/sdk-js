# BootISO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**slug** | **string** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**description** | **string** |  | [optional] [default to undefined]
**category** | [**CategoryEnum**](CategoryEnum.md) |  | [optional] [default to undefined]
**min_disk_size** | **number** | GB, 0 &#x3D; no minimum | [optional] [default to undefined]
**min_ram** | **string** | GB, 0 &#x3D; no minimum | [optional] [default to undefined]
**wipes_disk** | **boolean** | Installer media — show the data-loss warning | [optional] [default to undefined]
**compatible** | **boolean** |  | [readonly] [default to undefined]

## Example

```typescript
import { BootISO } from '@pidginhost/sdk';

const instance: BootISO = {
    slug,
    name,
    description,
    category,
    min_disk_size,
    min_ram,
    wipes_disk,
    compatible,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
