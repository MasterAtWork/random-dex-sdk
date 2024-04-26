import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3, // deprecated
  RINKEBY = 4, // deprecated
  GÖRLI = 5, // deprecated
  KOVAN = 42, // deprecated
  SEPOLIA = 11155111
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export enum TESTNET_FACTORY_ADDRESS {
  MAINNET = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  ROPSTEN = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', // deprecated
  RINKEBY = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', // deprecated
  GÖRLI = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', // deprecated
  KOVAN = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', // deprecated
  SEPOLIA = '0x24E7f67b7789555EaE221317Be9BB4B6c67a0a54'
}

export const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

export const INIT_CODE_HASH = '0xec56e64c56a2b7cd64c1270eb106742061e7bb378896f225b3e95fc74120f722' // Sepolia

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
