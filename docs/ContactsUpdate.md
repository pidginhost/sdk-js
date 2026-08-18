# ContactsUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_type** | [**ContactTypeEnum**](ContactTypeEnum.md) | Contact type to update  * &#x60;registrant&#x60; - registrant * &#x60;admin&#x60; - admin * &#x60;tech&#x60; - tech * &#x60;billing&#x60; - billing | [default to undefined]
**registrant_id** | **number** | ID of DomainRegistrant to use | [default to undefined]

## Example

```typescript
import { ContactsUpdate } from '@pidginhost/sdk';

const instance: ContactsUpdate = {
    contact_type,
    registrant_id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
