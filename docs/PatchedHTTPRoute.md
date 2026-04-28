# PatchedHTTPRoute

Serializer for HTTPRoute resources with automatic certificate issuance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [optional] [readonly] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**namespace** | **string** |  | [optional] [default to undefined]
**hostnames** | **Array&lt;string&gt;** | List of hostnames to route (e.g., [\&quot;example.com\&quot;, \&quot;www.example.com\&quot;]) | [optional] [default to undefined]
**backend_service_name** | **string** | Name of the backend Kubernetes Service | [optional] [default to undefined]
**backend_service_port** | **number** | Port of the backend Service | [optional] [default to undefined]
**backend_namespace** | **string** | Namespace of the backend Service | [optional] [default to 'default']
**path_prefix** | **string** | Path prefix to match (default: /) | [optional] [default to '/']
**enable_tls** | **boolean** | Enable TLS termination with automatic certificate issuance | [optional] [default to true]
**status_ready** | **boolean** |  | [optional] [readonly] [default to undefined]
**status_message** | **string** |  | [optional] [readonly] [default to undefined]
**created** | **string** |  | [optional] [readonly] [default to undefined]
**updated** | **string** |  | [optional] [readonly] [default to undefined]

## Example

```typescript
import { PatchedHTTPRoute } from '@pidginhost/sdk';

const instance: PatchedHTTPRoute = {
    id,
    name,
    namespace,
    hostnames,
    backend_service_name,
    backend_service_port,
    backend_namespace,
    path_prefix,
    enable_tls,
    status_ready,
    status_message,
    created,
    updated,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
