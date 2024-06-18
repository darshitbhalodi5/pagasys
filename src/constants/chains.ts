// SupportedChainId must be defined inline, without using sdkcore18, so that its members are their own types
// {@see https://www.typescriptlang.org/docs/handbook/enums.html#union-enums-and-enum-member-types}. This allows the
// derived const arrays and their types (eg {@link L1_CHAIN_IDS}, {@link SupportedL1ChainId}) to be narrowed and used
// to enforce chain typing.
//

import { ChainId } from 'smartorderrouter18'

const SUPPORTED_CHAINS = [ChainId.MODE] as const
type SupportedChainsType = (typeof SUPPORTED_CHAINS)[number]

// Because this is not explicitly derived from sdkcore18, there is a unit test to enforce conformance.
export enum SupportedChainId {
  MODE = 919,
  // ROLLUX_TANENBAUM = 57000,
}

export const CHAIN_IDS_TO_NAMES = {
  [SupportedChainId.MODE]: 'mode',
  // [SupportedChainId.ROLLUX_TANENBAUM]: 'rollux_tanenbaum',
}

// export type SupportedInterfaceChain = Exclude<SupportedChainsType, ChainId.ROLLUX_TANENBAUM>

/**
 * Array of all the supported chain IDs
 */
export const ALL_SUPPORTED_CHAIN_IDS: ChainId[] = Object.values(ChainId).filter(
  (id) => typeof id === 'number'
) as ChainId[]

export function isSupportedChain(chainId: number | null | undefined): chainId is ChainId {
  return !!chainId && !!ChainId[chainId]
}

export const SUPPORTED_GAS_ESTIMATE_CHAIN_IDS = [SupportedChainId.MODE] as const

/**
 * Unsupported networks for V2 pool behavior.
 */
// export const UNSUPPORTED_V2POOL_CHAIN_IDS = [SupportedChainId] as const

/**
 * All the chain IDs that are running the Ethereum protocol.
 */
const L1_CHAIN_IDS = [] as const

export type SupportedL1ChainId = (typeof L1_CHAIN_IDS)[number]

/**
 * Controls some L2 specific behavior, e.g. slippage tolerance, special UI behavior.
 * The expectation is that all of these networks have immediate transaction confirmation.
 */
export const L2_CHAIN_IDS = [ChainId.MODE] as const

export type SupportedL2ChainId = (typeof L2_CHAIN_IDS)[number]

/**
 * Get the priority of a chainId based on its relevance to the user.
 * @param {ChainId} chainId - The chainId to determine the priority for.
 * @returns {number} The priority of the chainId, the lower the priority, the earlier it should be displayed, with base of MAINNET=0.
 */
export function getChainPriority(chainId: ChainId): number {
  switch (chainId) {
    case ChainId.MODE:
    default:
      return 2
  }
}
