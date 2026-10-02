# SendRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_address** | **string** |  | [default to undefined]
**to** | **Array&lt;string&gt;** |  | [default to undefined]
**cc** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**bcc** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**reply_to** | **string** |  | [optional] [default to undefined]
**subject** | **string** |  | [default to undefined]
**html_body** | **string** |  | [optional] [default to undefined]
**plain_body** | **string** |  | [optional] [default to undefined]
**headers** | **{ [key: string]: string; }** |  | [optional] [default to undefined]
**track_opens** | **boolean** |  | [optional] [default to false]
**track_clicks** | **boolean** |  | [optional] [default to false]
**attachments** | [**Array&lt;AttachmentRequest&gt;**](AttachmentRequest.md) |  | [optional] [default to undefined]

## Example

```typescript
import { SendRequest } from '@pidginhost/sdk';

const instance: SendRequest = {
    from_address,
    to,
    cc,
    bcc,
    reply_to,
    subject,
    html_body,
    plain_body,
    headers,
    track_opens,
    track_clicks,
    attachments,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
