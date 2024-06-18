import { SupportedChainId } from 'constants/chains'

const BLOCK_EXPLORER_PREFIXES: { [chainId: number]: string } = {
  [SupportedChainId.ROLLUX]: 'https://explorer.rollux.com',
  [SupportedChainId.ROLLUX_TANENBAUM]: 'https://rollux.tanenbaum.io',
}

export enum ExplorerDataType {
  TRANSACTION = 'transaction',
  TOKEN = 'token',
  ADDRESS = 'address',
  BLOCK = 'block',
}

/**
 * Return the explorer link for the given data and data type
 * @param chainId the ID of the chain for which to return the data
 * @param data the data to return a link for
 * @param type the type of the data
 */
export function getExplorerLink(chainId: number, data: string, type: ExplorerDataType): string {
  // if (chainId === SupportedChainId.ARBITRUM_ONE) {
  //   switch (type) {
  //     case ExplorerDataType.TRANSACTION:
  //       return `https://arbiscan.io/tx/${data}`
  //     case ExplorerDataType.ADDRESS:
  //     case ExplorerDataType.TOKEN:
  //       return `https://arbiscan.io/address/${data}`
  //     case ExplorerDataType.BLOCK:
  //       return `https://arbiscan.io/block/${data}`
  //     default:
  //       return `https://arbiscan.io/`
  //   }
  // }

  // if (chainId === SupportedChainId.ARBITRUM_GOERLI) {
  //   switch (type) {
  //     case ExplorerDataType.TRANSACTION:
  //       return `https://goerli.arbiscan.io/tx/${data}`
  //     case ExplorerDataType.ADDRESS:
  //     case ExplorerDataType.TOKEN:
  //       return `https://goerli.arbiscan.io/address/${data}`
  //     case ExplorerDataType.BLOCK:
  //       return `https://goerli.arbiscan.io/block/${data}`
  //     default:
  //       return `https://goerli.arbiscan.io/`
  //   }
  // }

  const prefix = BLOCK_EXPLORER_PREFIXES[chainId] ?? 'https://explorer.rollux.com'

  switch (type) {
    case ExplorerDataType.TRANSACTION:
      return `${prefix}/tx/${data}`

    case ExplorerDataType.TOKEN:
      return `${prefix}/token/${data}`

    case ExplorerDataType.BLOCK:
      return `${prefix}/block/${data}`

    case ExplorerDataType.ADDRESS:
      return `${prefix}/address/${data}`
    default:
      return `${prefix}`
  }
}