[utf-8-game](../README.md) / [Exports](../modules.md) / Sprite

# Class: Sprite

## Table of contents

### Constructors

- [constructor](sprite.md#constructor)

### Properties

- [animationSpeed](sprite.md#animationspeed)
- [animations](sprite.md#animations)
- [backgroundColor](sprite.md#backgroundcolor)
- [currentAnimation](sprite.md#currentanimation)
- [currentCoords](sprite.md#currentcoords)
- [currentFrame](sprite.md#currentframe)
- [currentlyJumping](sprite.md#currentlyjumping)
- [fallHeight](sprite.md#fallheight)
- [feelGravity](sprite.md#feelgravity)
- [firstJumpFrame](sprite.md#firstjumpframe)
- [initial](sprite.md#initial)
- [jumpAscending](sprite.md#jumpascending)
- [jumpDescending](sprite.md#jumpdescending)
- [jumpHeight](sprite.md#jumpheight)
- [originalJumpHeight](sprite.md#originaljumpheight)
- [platform](sprite.md#platform)
- [ticksPassedSinceLastJumpStep](sprite.md#tickspassedsincelastjumpstep)
- [ticksUntilNextJumpStep](sprite.md#ticksuntilnextjumpstep)
- [xPos](sprite.md#xpos)
- [yPos](sprite.md#ypos)
- [zIndex](sprite.md#zindex)

### Methods

- [addAnimation](sprite.md#addanimation)
- [createCoords](sprite.md#createcoords)
- [inPlatform](sprite.md#inplatform)
- [jump](sprite.md#jump)
- [setCurrentAnimation](sprite.md#setcurrentanimation)
- [stopJump](sprite.md#stopjump)
- [topTouchingPlatform](sprite.md#toptouchingplatform)
- [touching](sprite.md#touching)
- [touchingPlatform](sprite.md#touchingplatform)
- [updateFrame](sprite.md#updateframe)

## Constructors

### constructor

\+ **new Sprite**(`__namedParameters`: Options): [*Sprite*](sprite.md)

#### Parameters:

| Name | Type |
| :------ | :------ |
| `__namedParameters` | Options |

**Returns:** [*Sprite*](sprite.md)

Defined in: [sprite/sprite.ts:44](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L44)

## Properties

### animationSpeed

• **animationSpeed**: *number*

Defined in: [sprite/sprite.ts:32](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L32)

___

### animations

• **animations**: *object*

#### Type declaration:

Defined in: [sprite/sprite.ts:42](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L42)

___

### backgroundColor

• **backgroundColor**: *string*

Defined in: [sprite/sprite.ts:27](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L27)

___

### currentAnimation

• **currentAnimation**: ``null`` \| *string*

Defined in: [sprite/sprite.ts:43](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L43)

___

### currentCoords

• **currentCoords**: { `x`: *number* ; `y`: *number*  }[]

Defined in: [sprite/sprite.ts:44](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L44)

___

### currentFrame

• **currentFrame**: *number*

Defined in: [sprite/sprite.ts:31](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L31)

___

### currentlyJumping

• **currentlyJumping**: *boolean*

Defined in: [sprite/sprite.ts:33](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L33)

___

### fallHeight

• **fallHeight**: ``null`` \| *number*

Defined in: [sprite/sprite.ts:38](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L38)

___

### feelGravity

• **feelGravity**: *boolean*

Defined in: [sprite/sprite.ts:30](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L30)

___

### firstJumpFrame

• **firstJumpFrame**: *boolean*

Defined in: [sprite/sprite.ts:41](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L41)

___

### initial

• **initial**: Options

Defined in: [sprite/sprite.ts:24](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L24)

___

### jumpAscending

• **jumpAscending**: *boolean*

Defined in: [sprite/sprite.ts:34](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L34)

___

### jumpDescending

• **jumpDescending**: *boolean*

Defined in: [sprite/sprite.ts:35](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L35)

___

### jumpHeight

• **jumpHeight**: ``null`` \| *number*

Defined in: [sprite/sprite.ts:36](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L36)

___

### originalJumpHeight

• **originalJumpHeight**: *number*

Defined in: [sprite/sprite.ts:37](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L37)

___

### platform

• **platform**: *boolean*

Defined in: [sprite/sprite.ts:29](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L29)

___

### ticksPassedSinceLastJumpStep

• **ticksPassedSinceLastJumpStep**: *number*

Defined in: [sprite/sprite.ts:40](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L40)

___

### ticksUntilNextJumpStep

• **ticksUntilNextJumpStep**: *number*

Defined in: [sprite/sprite.ts:39](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L39)

___

### xPos

• **xPos**: *number*

Defined in: [sprite/sprite.ts:25](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L25)

___

### yPos

• **yPos**: *number*

Defined in: [sprite/sprite.ts:26](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L26)

___

### zIndex

• **zIndex**: *number*

Defined in: [sprite/sprite.ts:28](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L28)

## Methods

### addAnimation

▸ **addAnimation**(`name`: *string*, `animation`: { `backgroundColor?`: *string* ; `char`: *string* ; `color`: *string* ; `x`: *number* ; `y`: *number*  }[][]): { `backgroundColor?`: *string* ; `char`: *string* ; `color`: *string* ; `x`: *number* ; `y`: *number*  }[][]

#### Parameters:

| Name | Type |
| :------ | :------ |
| `name` | *string* |
| `animation` | { `backgroundColor?`: *string* ; `char`: *string* ; `color`: *string* ; `x`: *number* ; `y`: *number*  }[][] |

**Returns:** { `backgroundColor?`: *string* ; `char`: *string* ; `color`: *string* ; `x`: *number* ; `y`: *number*  }[][]

Defined in: [sprite/sprite.ts:185](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L185)

___

### createCoords

▸ `Private`**createCoords**(): { `x`: *number* ; `y`: *number*  }[]

**Returns:** { `x`: *number* ; `y`: *number*  }[]

Defined in: [sprite/sprite.ts:195](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L195)

___

### inPlatform

▸ **inPlatform**(): *boolean*

**Returns:** *boolean*

Defined in: [sprite/sprite.ts:151](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L151)

___

### jump

▸ **jump**(`height`: *number*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `height` | *number* |

**Returns:** *void*

Defined in: [sprite/sprite.ts:97](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L97)

___

### setCurrentAnimation

▸ **setCurrentAnimation**(`name`: *string*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *void*

Defined in: [sprite/sprite.ts:78](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L78)

___

### stopJump

▸ **stopJump**(): *void*

**Returns:** *void*

Defined in: [sprite/sprite.ts:110](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L110)

___

### topTouchingPlatform

▸ **topTouchingPlatform**(): *boolean*

**Returns:** *boolean*

Defined in: [sprite/sprite.ts:168](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L168)

___

### touching

▸ **touching**(`sprite`: [*Sprite*](sprite.md)): *boolean*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `sprite` | [*Sprite*](sprite.md) |

**Returns:** *boolean*

Defined in: [sprite/sprite.ts:121](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L121)

___

### touchingPlatform

▸ **touchingPlatform**(): *boolean*

**Returns:** *boolean*

Defined in: [sprite/sprite.ts:134](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L134)

___

### updateFrame

▸ **updateFrame**(`currentTick`: *number*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `currentTick` | *number* |

**Returns:** *void*

Defined in: [sprite/sprite.ts:86](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/sprite/sprite.ts#L86)
