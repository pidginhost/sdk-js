# PublicIPv6


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**slug** | **string** |  | [readonly] [default to undefined]
**address** | **string** |  | [readonly] [default to undefined]
**gateway** | **string** |  | [readonly] [default to undefined]
**prefix** | **number** |  | [readonly] [default to undefined]
**attached** | **boolean** |  | [readonly] [default to undefined]
**server** | **string** | Hostname of the server this address is attached to. Empty when it is not attached. | [readonly] [default to undefined]
**server_id** | **number** | ID of the attached server, as used by /api/cloud/servers/{id}/. Null when the address is not attached to a cloud server. | [readonly] [default to undefined]

## Example

```typescript
import { PublicIPv6 } from '@pidginhost/sdk';

const instance: PublicIPv6 = {
    id,
    slug,
    address,
    gateway,
    prefix,
    attached,
    server,
    server_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
