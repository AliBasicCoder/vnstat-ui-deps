[vnstat-ui-deps](../README.md) › [Globals](../globals.md) › ["index"](_index_.md)

# Module: "index"

## Index

### References

* [BooleanType](_index_.md#booleantype)
* [Config](_index_.md#config)
* [Data](_index_.md#data)
* [FullConfig](_index_.md#fullconfig)
* [FullData](_index_.md#fulldata)
* [NumberType](_index_.md#numbertype)
* [ObjectType](_index_.md#objecttype)
* [StringType](_index_.md#stringtype)
* [ThemeData](_index_.md#themedata)
* [Type](_index_.md#type)
* [Types](_index_.md#types)
* [VnstatData](_index_.md#vnstatdata)
* [VnstatDataV1](_index_.md#vnstatdatav1)
* [VnstatDataV2](_index_.md#vnstatdatav2)
* [date](_index_.md#date)
* [formattedData](_index_.md#formatteddata)
* [get5MinData](_index_.md#get5mindata)
* [getConfig](_index_.md#getconfig)
* [getDailyData](_index_.md#getdailydata)
* [getData](_index_.md#getdata)
* [getHourlyData](_index_.md#gethourlydata)
* [getInterfacesList](_index_.md#getinterfaceslist)
* [getMonthlyData](_index_.md#getmonthlydata)
* [getStatic](_index_.md#getstatic)
* [getThemeData](_index_.md#getthemedata)
* [getYearlyData](_index_.md#getyearlydata)
* [isVnstatV1](_index_.md#isvnstatv1)
* [obj](_index_.md#obj)
* [rxTx](_index_.md#rxtx)
* [time](_index_.md#time)

### Functions

* [getSelectedInterface](_index_.md#getselectedinterface)
* [getThisName](_index_.md#getthisname)
* [isV1Data](_index_.md#isv1data)
* [isV2Data](_index_.md#isv2data)

## References

###  BooleanType

• **BooleanType**:

___

###  Config

• **Config**:

___

###  Data

• **Data**:

___

###  FullConfig

• **FullConfig**:

___

###  FullData

• **FullData**:

___

###  NumberType

• **NumberType**:

___

###  ObjectType

• **ObjectType**:

___

###  StringType

• **StringType**:

___

###  ThemeData

• **ThemeData**:

___

###  Type

• **Type**:

___

###  Types

• **Types**:

___

###  VnstatData

• **VnstatData**:

___

###  VnstatDataV1

• **VnstatDataV1**:

___

###  VnstatDataV2

• **VnstatDataV2**:

___

###  date

• **date**:

___

###  formattedData

• **formattedData**:

___

###  get5MinData

• **get5MinData**:

___

###  getConfig

• **getConfig**:

___

###  getDailyData

• **getDailyData**:

___

###  getData

• **getData**:

___

###  getHourlyData

• **getHourlyData**:

___

###  getInterfacesList

• **getInterfacesList**:

___

###  getMonthlyData

• **getMonthlyData**:

___

###  getStatic

• **getStatic**:

___

###  getThemeData

• **getThemeData**:

___

###  getYearlyData

• **getYearlyData**:

___

###  isVnstatV1

• **isVnstatV1**:

___

###  obj

• **obj**:

___

###  rxTx

• **rxTx**:

___

###  time

• **time**:

## Functions

###  getSelectedInterface

▸ **getSelectedInterface**(): *undefined | string*

*Defined in [index.ts:20](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/index.ts#L20)*

gets the selected interface from the `i` query param and null if not found

**Returns:** *undefined | string*

___

###  getThisName

▸ **getThisName**(): *Promise‹string›*

*Defined in [index.ts:15](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/index.ts#L15)*

get the current theme's name

**Returns:** *Promise‹string›*

___

###  isV1Data

▸ **isV1Data**(`data`: [VnstatData](_index_.md#vnstatdata)): *data is VnstatDataV1*

*Defined in [index.ts:30](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/index.ts#L30)*

detects if the data is vnstat v1

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | [VnstatData](_index_.md#vnstatdata) | the vnstat data  |

**Returns:** *data is VnstatDataV1*

___

###  isV2Data

▸ **isV2Data**(`data`: [VnstatData](_index_.md#vnstatdata)): *data is VnstatDataV2*

*Defined in [index.ts:38](https://github.com/AliBasicCoder/vnstat-ui-deps/blob/b4245ac/src/index.ts#L38)*

detects if the data is vnstat v2

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | [VnstatData](_index_.md#vnstatdata) | the vnstat data  |

**Returns:** *data is VnstatDataV2*
