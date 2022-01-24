import React from 'react'
import { ButtonMenu, ButtonMenuItem } from '@sparkpointio/sparkswap-uikit'
import { useTranslation } from 'contexts/Localization'

const HistoryTabMenu = ({ setActiveIndex, activeIndex }) => {
  const { t } = useTranslation()

  return (
    // <ButtonMenu activeIndex={activeIndex} onItemClick={setActiveIndex} scale="sm" variant="subtle">
    <ButtonMenu activeIndex={activeIndex} onClick={setActiveIndex} size="sm" variant="subtle">
      <ButtonMenuItem>{t('All History')}</ButtonMenuItem>
      <ButtonMenuItem>{t('Your History')}</ButtonMenuItem>
    </ButtonMenu>
  )
}

export default HistoryTabMenu
