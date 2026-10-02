# TCPRouteRequest

Serializer for TCPRoute resources with port validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** |  | [default to undefined]
**namespace** | **string** |  | [optional] [default to undefined]
**port** | **number** | External port to expose (blocked: 22, 6443, 50000, 50001) | [default to undefined]
**backend_service_name** | **string** | Name of the backend Kubernetes Service | [default to undefined]
**backend_service_port** | **number** | Port of the backend Service | [default to undefined]
**backend_namespace** | **string** | Namespace of the backend Service | [optional] [default to 'default']

## Example

```typescript
import { TCPRouteRequest } from '@pidginhost/sdk';

const instance: TCPRouteRequest = {
    name,
    namespace,
    port,
    backend_service_name,
    backend_service_port,
    backend_namespace,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
