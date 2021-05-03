[utf-8-game](README.md) / Exports

# utf-8-game

## Table of contents

### Classes

- [Game](classes/game.md)
- [Sprite](classes/sprite.md)

### Functions

- [onClick](modules.md#onclick)
- [onCollision](modules.md#oncollision)
- [onKeyDown](modules.md#onkeydown)
- [onKeyUp](modules.md#onkeyup)
- [onSpriteClicked](modules.md#onspriteclicked)

## Functions

### onClick

▸ `Const`**onClick**(`callback`: (`__namedParameters`: { `x`: *number* ; `y`: *number*  }) => *any*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `callback` | (`__namedParameters`: { `x`: *number* ; `y`: *number*  }) => *any* |

**Returns:** *void*

Defined in: [mouse/mouse.ts:44](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/mouse/mouse.ts#L44)

___

### onCollision

▸ `Const`**onCollision**(`spriteOne`: [*Sprite*](classes/sprite.md), `spriteTwo`: [*Sprite*](classes/sprite.md), `triggerOnceWhileTrue`: *boolean*, `callback`: () => *any*): *number*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `spriteOne` | [*Sprite*](classes/sprite.md) |
| `spriteTwo` | [*Sprite*](classes/sprite.md) |
| `triggerOnceWhileTrue` | *boolean* |
| `callback` | () => *any* |

**Returns:** *number*

Defined in: [collisions/collisions.ts:12](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/collisions/collisions.ts#L12)

___

### onKeyDown

▸ `Const`**onKeyDown**(`key`: keys, `callback`: () => *any*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `key` | keys |
| `callback` | () => *any* |

**Returns:** *void*

Defined in: [keyboard/keyboard.ts:29](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/keyboard/keyboard.ts#L29)

___

### onKeyUp

▸ `Const`**onKeyUp**(`key`: keys, `callback`: () => *any*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `key` | keys |
| `callback` | () => *any* |

**Returns:** *void*

Defined in: [keyboard/keyboard.ts:38](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/keyboard/keyboard.ts#L38)

___

### onSpriteClicked

▸ `Const`**onSpriteClicked**(`sprite`: [*Sprite*](classes/sprite.md), `callback`: (`coords`: { `x`: *number* ; `y`: *number*  }) => *any*): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `sprite` | [*Sprite*](classes/sprite.md) |
| `callback` | (`coords`: { `x`: *number* ; `y`: *number*  }) => *any* |

**Returns:** *void*

Defined in: [mouse/mouse.ts:34](https://github.com/HatAndBread/text-game-engine/blob/422b3dc/src/mouse/mouse.ts#L34)
