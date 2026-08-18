# FundsLog


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [readonly] [default to undefined]
**date** | **string** |  | [readonly] [default to undefined]
**operation** | [**OperationEnum**](OperationEnum.md) |  | [readonly] [default to undefined]
**amount** | **string** | + or - sum | [readonly] [default to undefined]
**balance** | **string** | Balance after operation | [readonly] [default to undefined]
**for_date** | **string** | Used for cloud service payments | [readonly] [default to undefined]

## Example

```typescript
import { FundsLog } from '@pidginhost/sdk';

const instance: FundsLog = {
    id,
    date,
    operation,
    amount,
    balance,
    for_date,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
