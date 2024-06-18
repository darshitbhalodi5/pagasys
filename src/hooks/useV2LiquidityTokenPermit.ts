import { CurrencyAmount, Token } from '@pollum-io/sdk-core'

import { PermitInfo, PermitType, useERC20Permit } from './useERC20Permit'
import useTransactionDeadline from './useTransactionDeadline'

const REMOVE_V2_LIQUIDITY_PERMIT_INFO: PermitInfo = {
  version: '1',
  name: 'Pegasys LP Token',
  type: PermitType.AMOUNT,
}

export function useV2LiquidityTokenPermit(
  liquidityAmount: CurrencyAmount<Token> | null | undefined,
  spender: string | null | undefined
) {
  const transactionDeadline = useTransactionDeadline()
  return useERC20Permit(liquidityAmount, spender, transactionDeadline, REMOVE_V2_LIQUIDITY_PERMIT_INFO)
}