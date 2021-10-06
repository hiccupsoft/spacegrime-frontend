import React from 'react'
import { Modal, Text } from 'spacegrime-uikit'
import InterfaceSetting from './InterfaceSetting'
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'

type SettingsModalProps = {
  onDismiss?: () => void
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss }: SettingsModalProps) => {
  const handleOnBack = () => {
    return 1;
  };
  return (
    <Modal title="Settings" onDismiss={onDismiss} onBack={handleOnBack} hideCloseButton>
      <SlippageToleranceSetting />
      <TransactionDeadlineSetting />
      <InterfaceSetting />
      <Text onClick={onDismiss} style={{textAlign: 'right',color: '#fff', cursor: 'pointer'}}>
        UPDATE SETTINGS
      </Text>
    </Modal>
  )
}

export default SettingsModal
