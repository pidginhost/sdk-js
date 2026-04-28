# ServerAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **string** | ID or slug | [default to undefined]
**_package** | **string** | ID or slug | [default to undefined]
**hostname** | **string** |  | [optional] [default to undefined]
**project** | **string** |  | [optional] [default to undefined]
**password** | **string** |  | [optional] [default to undefined]
**ssh_pub_key** | **string** | New SSH key | [optional] [default to undefined]
**ssh_pub_key_id** | **string** | ID or fingerprint | [optional] [default to undefined]
**public_ip** | **string** | ID or slug | [optional] [default to undefined]
**new_ipv4** | **boolean** |  | [optional] [default to undefined]
**public_ipv6** | **string** | ID or slug | [optional] [default to undefined]
**new_ipv6** | **boolean** |  | [optional] [default to undefined]
**fw_rules_set** | **string** | ID or slug | [optional] [default to undefined]
**fw_policy_in** | [**FwPolicyOutEnum**](FwPolicyOutEnum.md) |  | [optional] [default to undefined]
**fw_policy_out** | [**FwPolicyOutEnum**](FwPolicyOutEnum.md) |  | [optional] [default to undefined]
**private_network** | **string** | ID or slug | [optional] [default to undefined]
**private_address** | **string** | Leave empty for auto-assign | [optional] [default to undefined]
**extra_volume_product** | **string** | ID or slug | [optional] [default to undefined]
**extra_volume_size** | **number** |  | [optional] [default to 0]
**no_network_acknowledged** | **boolean** |  | [optional] [default to undefined]
**enable_ha** | **boolean** |  | [optional] [default to false]
**generation** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { ServerAdd } from '@pidginhost/sdk';

const instance: ServerAdd = {
    image,
    _package,
    hostname,
    project,
    password,
    ssh_pub_key,
    ssh_pub_key_id,
    public_ip,
    new_ipv4,
    public_ipv6,
    new_ipv6,
    fw_rules_set,
    fw_policy_in,
    fw_policy_out,
    private_network,
    private_address,
    extra_volume_product,
    extra_volume_size,
    no_network_acknowledged,
    enable_ha,
    generation,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
