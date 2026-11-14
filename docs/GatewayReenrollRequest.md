# GatewayReenrollRequest

The body of a re-enrollment (spec 8.1 step 6, 13.1): the preview\'s revision, the networks the gateway routes for and the servers that lose internet while it restarts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**revision** | **number** | The gateway\&#39;s desired revision from the preview; without it, a preview. | [optional] [default to undefined]
**servers** | **Array&lt;number&gt;** | The preview\&#39;s server ids. | [optional] [default to undefined]
**networks** | **Array&lt;number&gt;** | The preview\&#39;s network ids. | [optional] [default to undefined]

## Example

```typescript
import { GatewayReenrollRequest } from '@pidginhost/sdk';

const instance: GatewayReenrollRequest = {
    revision,
    servers,
    networks,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
