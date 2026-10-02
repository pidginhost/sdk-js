# PatchedUDPRouteRequest

Serializer for UDPRoute resources with port validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [optional] [default to undefined]
**namespace** | **string** |  | [optional] [default to undefined]
**port** | **number** | External port to expose | [optional] [default to undefined]
**backend_service_name** | **string** | Name of the backend Kubernetes Service | [optional] [default to undefined]
**backend_service_port** | **number** | Port of the backend Service | [optional] [default to undefined]
**backend_namespace** | **string** | Namespace of the backend Service | [optional] [default to 'default']

## Example

```typescript
import { PatchedUDPRouteRequest } from '@pidginhost/sdk';

const instance: PatchedUDPRouteRequest = {
    name,
    namespace,
    port,
    backend_service_name,
    backend_service_port,
    backend_namespace,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
