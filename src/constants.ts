import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum ChainId {
  SEPOLIA = 11155111, // Eth Sepolia
  HOLESKY = 17000, // Eth Holesky
  BNB = 97, // Binance Smart Chain
  AVAX = 43113, // Avalanche
  BASE = 84532, // Base Sepolia Chain
  OPTIMISM = 11155420, // Op Sepolia Chain
  BLAST = 168587773, // Blast Sepolia Chain
  AMOY = 80002, // Polygon Amoy Chain
  ARBITRUM = 421614, // Arbitrum
  LINEA = 59141 // Linea Sepolia
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
  [ChainId.HOLESKY]: '0x15165a529F1310F1a361cbDbcf1f4b222212bd88',
  [ChainId.BNB]: '0x15165a529F1310F1a361cbDbcf1f4b222212bd88',
  [ChainId.AVAX]: '0x15165a529F1310F1a361cbDbcf1f4b222212bd88',
  [ChainId.BASE]: '0x15165a529F1310F1a361cbDbcf1f4b222212bd88',
  [ChainId.OPTIMISM]: '0x15165a529F1310F1a361cbDbcf1f4b222212bd88',
  [ChainId.BLAST]: '0x15165a529F1310F1a361cbDbcf1f4b222212bd88',
  [ChainId.AMOY]: '0x15165a529F1310F1a361cbDbcf1f4b222212bd88',
  [ChainId.ARBITRUM]: '0x15165a529F1310F1a361cbDbcf1f4b222212bd88',
  [ChainId.LINEA]: '0x15165a529F1310F1a361cbDbcf1f4b222212bd88'
}

export const TESTNET_INIT_CODE_HASH: { [chainId in ChainId]: string } = {
  [ChainId.SEPOLIA]: '0x1a6f9e6e30154255053fb2530e9fbc2b70121513dcd40fdbef417181aae8ea4e',
  [ChainId.HOLESKY]: '0x1a6f9e6e30154255053fb2530e9fbc2b70121513dcd40fdbef417181aae8ea4e',
  [ChainId.BNB]: '0x4dc90378a435b2d29be9cf9cc915f9d7c193234f478d6845a429befe95cbaf2d',
  [ChainId.AVAX]: '0x4dc90378a435b2d29be9cf9cc915f9d7c193234f478d6845a429befe95cbaf2d',
  [ChainId.BASE]: '0x4dc90378a435b2d29be9cf9cc915f9d7c193234f478d6845a429befe95cbaf2d',
  [ChainId.OPTIMISM]: '0xe635782caf8b443275c6be440769e3f060625a0605531680ed730e58f43739a5',
  [ChainId.BLAST]: '0xe635782caf8b443275c6be440769e3f060625a0605531680ed730e58f43739a5',
  [ChainId.AMOY]: '0x4dc90378a435b2d29be9cf9cc915f9d7c193234f478d6845a429befe95cbaf2d',
  [ChainId.ARBITRUM]: '0xf26a87fb4c576443912d3fba4644785245a9f66d50baaf6982475c7348463e53',
  [ChainId.LINEA]: '0xf26a87fb4c576443912d3fba4644785245a9f66d50baaf6982475c7348463e53'
}

export const NATIVE_CURRENCY_SYMBOL: { [chainId in ChainId]: string } = {
  [ChainId.SEPOLIA]: 'ETH',
  [ChainId.HOLESKY]: 'ETH',
  [ChainId.BNB]: 'BNB',
  [ChainId.AVAX]: 'AVAX',
  [ChainId.BASE]: 'ETH',
  [ChainId.OPTIMISM]: 'ETH',
  [ChainId.BLAST]: 'ETH',
  [ChainId.AMOY]: 'MATIC',
  [ChainId.ARBITRUM]: 'ETH',
  [ChainId.LINEA]: 'ETH'
}

export const WRAPPED_CURRENCY_SYMBOL: { [chainId in ChainId]: string } = {
  [ChainId.SEPOLIA]: 'WETH',
  [ChainId.HOLESKY]: 'WETH',
  [ChainId.BNB]: 'WBNB',
  [ChainId.AVAX]: 'WAVAX',
  [ChainId.BASE]: 'WETH',
  [ChainId.OPTIMISM]: 'WETH',
  [ChainId.BLAST]: 'WETH',
  [ChainId.AMOY]: 'WMATIC',
  [ChainId.ARBITRUM]: 'WETH',
  [ChainId.LINEA]: 'WETH'
}

export const NATIVE_CURRENCY_LOGO_URL: { [chainId in ChainId]: string } = {
  [ChainId.SEPOLIA]: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
  [ChainId.HOLESKY]: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
  [ChainId.BNB]: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png',
  [ChainId.AVAX]: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/info/logo.png',
  [ChainId.BASE]: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/info/logo.png',
  [ChainId.OPTIMISM]: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png',
  [ChainId.BLAST]: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/blast/info/logo.png',
  [ChainId.AMOY]: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png',
  [ChainId.ARBITRUM]: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png',
  [ChainId.LINEA]: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/linea/info/logo.png'
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
