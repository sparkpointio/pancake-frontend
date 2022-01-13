import React from 'react'
import { useLocation } from 'react-router'
import { useWeb3React } from '@web3-react/core'
import { Menu as UikitMenu } from '@sparkpointio/sparkswap-uikit'
import { languageList } from 'config/localization/languages'
import { useTranslation } from 'contexts/Localization'
import PhishingWarningBanner from 'components/PhishingWarningBanner'
import useTheme from 'hooks/useTheme'
import useAuth from 'hooks/useAuth'
import { usePhishingBannerManager } from 'state/user/hooks'
import config from './config'
import UserMenu from './UserMenu'
import GlobalSettings from './GlobalSettings'
import { getActiveMenuItem, getActiveSubMenuItem } from './utils'
import { footerLinks } from './config/footerConfig'

const Menu = (props) => {
  const { account } = useWeb3React()
  const { isDark, toggleTheme } = useTheme()
  const { login, logout } = useAuth()
  const { currentLanguage, setLanguage, t } = useTranslation()
  const { pathname } = useLocation()
  const [showPhishingWarningBanner] = usePhishingBannerManager()

  // const activeMenuItem = getActiveMenuItem({ menuConfig: config(t), pathname })
  // const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  return (
    <UikitMenu
      account={account}
      login={login}
      logout={logout}
      globalMenu={<GlobalSettings />}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={currentLanguage.code}
      langs={languageList}
      setLang={setLanguage}
      links={config}
      {...props}
    />
  )
}

export default Menu
