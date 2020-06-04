[vnstat-ui-deps](../README.md) › [Globals](../globals.md) › ["types"](_types_.md)

# Module: "types"

## Index

### Interfaces

* [ThemeData](../interfaces/_types_.themedata.md)

### Type aliases

* [BooleanType](_types_.md#booleantype)
* [Config](_types_.md#config)
* [Data](_types_.md#data)
* [FullConfig](_types_.md#fullconfig)
* [FullData](_types_.md#fulldata)
* [NumberType](_types_.md#numbertype)
* [ObjectType](_types_.md#objecttype)
* [StringType](_types_.md#stringtype)
* [Type](_types_.md#type)
* [Types](_types_.md#types)
* [VnstatData](_types_.md#vnstatdata)
* [VnstatDataV1](_types_.md#vnstatdatav1)
* [VnstatDataV2](_types_.md#vnstatdatav2)
* [date](_types_.md#date)
* [formattedData](_types_.md#formatteddata)
* [obj](_types_.md#obj)
* [rxTx](_types_.md#rxtx)
* [time](_types_.md#time)

### Functions

* [isVnstatV1](_types_.md#const-isvnstatv1)

## Type aliases

###  BooleanType

Ƭ **BooleanType**: *[Type](_types_.md#type)‹"boolean"›*

*Defined in [types.ts:150](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L150)*

___

###  Config

Ƭ **Config**: *object*

*Defined in [types.ts:107](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L107)*

#### Type declaration:

* **theme**: *string*

___

###  Data

Ƭ **Data**: *object*

*Defined in [types.ts:134](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L134)*

#### Type declaration:

* **downData**: *number[]*

* **labels**: *string[]*

* **upData**: *number[]*

___

###  FullConfig

Ƭ **FullConfig**: *object*

*Defined in [types.ts:110](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L110)*

the full users config data scheme

#### Type declaration:

* **config**(): *object*

  * **client**: *[Config](_types_.md#config) & object*

  * **server**(): *object*

    * **port**: *number*

    * **vnstatBin**: *string*

* **themes**: *[obj](_types_.md#obj)‹object›*

___

###  FullData

Ƭ **FullData**: *object*

*Defined in [types.ts:128](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L128)*

#### Type declaration:

* **config**: *[Config](_types_.md#config)*

* **list**: *string[]*

* **vnstatData**: *[VnstatData](_types_.md#vnstatdata)*

___

###  NumberType

Ƭ **NumberType**: *[Type](_types_.md#type)‹"number"›*

*Defined in [types.ts:152](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L152)*

___

###  ObjectType

Ƭ **ObjectType**: *object & [Type](_types_.md#type)‹"object"›*

*Defined in [types.ts:146](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L146)*

___

###  StringType

Ƭ **StringType**: *object & [Type](_types_.md#type)‹"string"›*

*Defined in [types.ts:142](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L142)*

___

###  Type

Ƭ **Type**: *object*

*Defined in [types.ts:138](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L138)*

#### Type declaration:

* **type**: *T*

___

###  Types

Ƭ **Types**: *[ObjectType](_types_.md#objecttype) | [NumberType](_types_.md#numbertype) | [StringType](_types_.md#stringtype) | [BooleanType](_types_.md#booleantype)*

*Defined in [types.ts:136](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L136)*

___

###  VnstatData

Ƭ **VnstatData**: *[VnstatDataV1](_types_.md#vnstatdatav1) | [VnstatDataV2](_types_.md#vnstatdatav2)*

*Defined in [types.ts:103](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L103)*

___

###  VnstatDataV1

Ƭ **VnstatDataV1**: *object*

*Defined in [types.ts:22](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L22)*

vnstat v1 data scheme

#### Type declaration:

* **interfaces**: *object[]*

* **jsonversion**: *string*

* **vnstatversion**: *string*

___

###  VnstatDataV2

Ƭ **VnstatDataV2**: *object*

*Defined in [types.ts:60](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L60)*

vnstat v2 data scheme

#### Type declaration:

* **interfaces**: *object[]*

* **jsonversion**: *string*

* **vnstatversion**: *string*

___

###  date

Ƭ **date**: *object*

*Defined in [types.ts:5](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L5)*

#### Type declaration:

* **day**: *number*

* **month**: *number*

* **year**: *number*

___

###  formattedData

Ƭ **formattedData**: *[obj](_types_.md#obj)‹[obj](_types_.md#obj)‹[obj](_types_.md#obj)‹[rxTx](_types_.md#rxtx) & object›››*

*Defined in [types.ts:105](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L105)*

___

###  obj

Ƭ **obj**: *object*

*Defined in [types.ts:1](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L1)*

#### Type declaration:

* \[ **key**: *string*\]: T

___

###  rxTx

Ƭ **rxTx**: *object*

*Defined in [types.ts:16](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L16)*

#### Type declaration:

* **rx**: *number*

* **tx**: *number*

___

###  time

Ƭ **time**: *object*

*Defined in [types.ts:11](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L11)*

#### Type declaration:

* **hour**: *number*

* **minute**: *number*

## Functions

### `Const` isVnstatV1

▸ **isVnstatV1**(`obj`: any): *obj is VnstatDataV1*

*Defined in [types.ts:100](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/types.ts#L100)*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *obj is VnstatDataV1*
