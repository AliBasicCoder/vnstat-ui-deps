[vnstat-ui-deps](../README.md) › [Globals](../globals.md) › ["fetchers"](_fetchers_.md)

# Module: "fetchers"

## Index

### Namespaces

* [__global](_fetchers_.md#__global)

### Functions

* [getConfig](_fetchers_.md#getconfig)
* [getData](_fetchers_.md#getdata)
* [getInterfacesList](_fetchers_.md#getinterfaceslist)
* [getStatic](_fetchers_.md#getstatic)
* [getThemeData](_fetchers_.md#getthemedata)

## Namespaces

###  __global

• **__global**:

*Defined in [fetchers.ts:42](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/fetchers.ts#L42)*

###  Window

• **Window**:

*Defined in [fetchers.ts:43](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/fetchers.ts#L43)*

### `Optional` __cache

• **__cache**? : *undefined | object*

*Defined in [fetchers.ts:44](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/fetchers.ts#L44)*

## Functions

###  getConfig

▸ **getConfig**<**T**>(`reFetch?`: undefined | false | true): *Promise‹[FullConfig](_types_.md#fullconfig)‹Partial‹T›››*

*Defined in [fetchers.ts:81](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/fetchers.ts#L81)*

gets the user's config file

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reFetch?` | undefined &#124; false &#124; true | if true will not use cache  |

**Returns:** *Promise‹[FullConfig](_types_.md#fullconfig)‹Partial‹T›››*

___

###  getData

▸ **getData**(`reFetch?`: undefined | false | true): *Promise‹object | object›*

*Defined in [fetchers.ts:56](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/fetchers.ts#L56)*

gets the vnstat json data from `vnstat --json`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reFetch?` | undefined &#124; false &#124; true | if true will not use cache  |

**Returns:** *Promise‹object | object›*

___

###  getInterfacesList

▸ **getInterfacesList**(`reFetch?`: undefined | false | true): *Promise‹string[]›*

*Defined in [fetchers.ts:68](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/fetchers.ts#L68)*

gets the vnstat available interfaces from `vnstat --iflist`

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`reFetch?` | undefined &#124; false &#124; true | if true will not use cache  |

**Returns:** *Promise‹string[]›*

___

###  getStatic

▸ **getStatic**<**T**>(`themeName`: string, `staticName`: string, `holeRes?`: undefined | false): *Promise‹T›*

*Defined in [fetchers.ts:4](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/fetchers.ts#L4)*

get a file (static) from your theme directory

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`themeName` | string | the theme you get a static (aka file) from |
`staticName` | string | the static path |
`holeRes?` | undefined &#124; false | if true will return the hole axios response  |

**Returns:** *Promise‹T›*

▸ **getStatic**<**T**>(`themeName`: string, `staticName`: string, `holeRes`: true): *Promise‹AxiosResponse‹T››*

*Defined in [fetchers.ts:9](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/fetchers.ts#L9)*

get a file (static) from your theme directory

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`themeName` | string |
`staticName` | string |
`holeRes` | true |

**Returns:** *Promise‹AxiosResponse‹T››*

___

###  getThemeData

▸ **getThemeData**(`themeName`: string): *Promise‹[ThemeData](../interfaces/_types_.themedata.md)›*

*Defined in [fetchers.ts:36](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/fetchers.ts#L36)*

get the themes data.json

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`themeName` | string | the theme to get data from  |

**Returns:** *Promise‹[ThemeData](../interfaces/_types_.themedata.md)›*
