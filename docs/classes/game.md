[utf-8-game](../README.md) / [Exports](../modules.md) / Game

# Class: Game

## Table of contents

### Constructors

- [constructor](game.md#constructor)

### Properties

- [animating](game.md#animating)
- [backgroundColor](game.md#backgroundcolor)
- [canvas](game.md#canvas)
- [currentTick](game.md#currenttick)
- [elementsToBeCleared](game.md#elementstobecleared)
- [everyTickCB](game.md#everytickcb)
- [height](game.md#height)
- [keyboardSpeed](game.md#keyboardspeed)
- [pixelSize](game.md#pixelsize)
- [rows](game.md#rows)
- [width](game.md#width)

### Methods

- [endLoop](game.md#endloop)
- [everyTick](game.md#everytick)
- [loop](game.md#loop)
- [startLoop](game.md#startloop)

## Constructors

### constructor

\+ **new Game**(`__namedParameters`: Options): [*Game*](game.md)

#### Parameters:

| Name | Type |
| :------ | :------ |
| `__namedParameters` | Options |

**Returns:** [*Game*](game.md)

Defined in: [game/game.ts:30](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L30)

## Properties

### animating

• **animating**: *boolean*

Defined in: [game/game.ts:24](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L24)

___

### backgroundColor

• **backgroundColor**: *string*

Defined in: [game/game.ts:23](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L23)

___

### canvas

• **canvas**: HTMLDivElement

Defined in: [game/game.ts:25](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L25)

___

### currentTick

• **currentTick**: *number*

Defined in: [game/game.ts:27](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L27)

___

### elementsToBeCleared

• **elementsToBeCleared**: HTMLDivElement[]

Defined in: [game/game.ts:29](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L29)

___

### everyTickCB

• `Optional` **everyTickCB**: ``null`` \| (`tick`: *number*) => *void*

Defined in: [game/game.ts:30](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L30)

___

### height

• **height**: *number*

Defined in: [game/game.ts:21](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L21)

___

### keyboardSpeed

• **keyboardSpeed**: *number*

Defined in: [game/game.ts:28](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L28)

___

### pixelSize

• **pixelSize**: *number*

Defined in: [game/game.ts:22](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L22)

___

### rows

• **rows**: HTMLDivElement[][]

Defined in: [game/game.ts:26](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L26)

___

### width

• **width**: *number*

Defined in: [game/game.ts:20](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L20)

## Methods

### endLoop

▸ **endLoop**(): *void*

**Returns:** *void*

Defined in: [game/game.ts:59](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L59)

___

### everyTick

▸ **everyTick**(`cb`: (`tick`: *number*) => *void*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `cb` | (`tick`: *number*) => *void* |

**Returns:** *void*

Defined in: [game/game.ts:62](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L62)

___

### loop

▸ `Private`**loop**(): *void*

**Returns:** *void*

Defined in: [game/game.ts:66](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L66)

___

### startLoop

▸ **startLoop**(): *void*

**Returns:** *void*

Defined in: [game/game.ts:55](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/game/game.ts#L55)
