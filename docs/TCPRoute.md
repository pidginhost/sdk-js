# TCPRoute

Serializer for TCPRoute resources with port validation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**name** | **string** |  | [default to undefined]
**namespace** | **string** |  | [optional] [default to undefined]
**port** | **number** | External port to expose (blocked: 22, 6443, 50000, 50001) | [default to undefined]
**backend_service_name** | **string** | Name of the backend Kubernetes Service | [default to undefined]
**backend_service_port** | **number** | Port of the backend Service | [default to undefined]
**backend_namespace** | **string** | Namespace of the backend Service | [optional] [default to 'default']
**status_ready** | **boolean** |  | [readonly] [default to undefined]
**status_message** | **string** |  | [readonly] [default to undefined]
**created** | **string** |  | [readonly] [default to undefined]
**updated** | **string** |  | [readonly] [default to undefined]

## Example

```typescript
import { TCPRoute } from '@pidginhost/sdk';

const instance: TCPRoute = {
    id,
    name,
    namespace,
    port,
    backend_service_name,
    backend_service_port,
    backend_namespace,
    status_ready,
    status_message,
    created,
    updated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
