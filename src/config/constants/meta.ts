import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'SparkSwap',
  description:
    'Refuel your rocket with SFUEL and travel to the moon with SparkSwap, the prodigious decentralized exchange on Binance Smart Chain.',
  image: 'https://sparkswap.finance//images/192x192_App_Icon.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('SparkSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('SparkSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('SparkSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('SparkSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('SparkSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('SparkSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('SparkSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('SparkSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('SparkSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('SparkSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('SparkSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('SparkSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('SparkSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('SparkSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('SparkSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('SparkSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('SparkSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('SparkSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('SparkSwap Info & Analytics')}`,
        description: 'View statistics for SparkSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('SparkSwap Info & Analytics')}`,
        description: 'View statistics for SparkSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('SparkSwap Info & Analytics')}`,
        description: 'View statistics for SparkSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('SparkSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('SparkSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('SparkSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('SparkSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('SparkSwap')}`,
      }
    default:
      return null
  }
}
