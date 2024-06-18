import { Trans } from '@lingui/macro'
import { ALL_SUPPORTED_CHAIN_IDS } from 'constants/chains'
import type { ReactNode } from 'react'
import { ChainId } from 'smartorderrouter18'
import { FeeAmount } from 'v3sdk18'

export const FEE_AMOUNT_DETAIL: Record<
  FeeAmount,
  { label: string; description: ReactNode; supportedChains: ChainId[] }
> = {
  [FeeAmount.LOWEST]: {
    label: '0.01',
    description: <Trans>Best for very stable pairs.</Trans>,
    supportedChains: [
      // SupportedChainId.ARBITRUM_ONE,
      // SupportedChainId.BNB,
      // SupportedChainId.CELO,
      // SupportedChainId.CELO_ALFAJORES,
      // SupportedChainId.MAINNET,
      ChainId.MODE,
      // SupportedChainId.POLYGON,
      // SupportedChainId.POLYGON_MUMBAI,
    ],
  },
  [FeeAmount.LOW]: {
    label: '0.05',
    description: <Trans>Best for stable pairs.</Trans>,
    supportedChains: ALL_SUPPORTED_CHAIN_IDS,
  },
  [FeeAmount.MEDIUM]: {
    label: '0.3',
    description: <Trans>Best for most pairs.</Trans>,
    supportedChains: ALL_SUPPORTED_CHAIN_IDS,
  },
  [FeeAmount.HIGH]: {
    label: '1',
    description: <Trans>Best for exotic pairs.</Trans>,
    supportedChains: ALL_SUPPORTED_CHAIN_IDS,
  },
}
