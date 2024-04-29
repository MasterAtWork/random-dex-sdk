import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  SEPOLIA = 11155111,
  HOLESKY = 17000
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

export const TESTNET_FACTORY_ADDRESS: { [chainId in ChainId]: string } = {
  [ChainId.SEPOLIA]: '0x1cA91381B6A6FFA0436bE1C829BfAa25F7D3191c',
  [ChainId.HOLESKY]: '0x15165a529F1310F1a361cbDbcf1f4b222212bd88'
}

export const TESTNET_INIT_CODE_HASH: { [chainId in ChainId]: string } = {
  [ChainId.SEPOLIA]: '0x1a6f9e6e30154255053fb2530e9fbc2b70121513dcd40fdbef417181aae8ea4e',
  [ChainId.HOLESKY]: '0x1a6f9e6e30154255053fb2530e9fbc2b70121513dcd40fdbef417181aae8ea4e'
}

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
