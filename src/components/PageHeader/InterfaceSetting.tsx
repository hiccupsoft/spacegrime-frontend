import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Input, Text, Toggle } from 'spacegrime-uikit'
import TranslatedText from '../TranslatedText'

const StyledInterfaceSetting = styled.div`
  margin-bottom: 16px;
`

const Label = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 8px;
`

const NewContent = styled.div`
    display: flex; 
    margin-bottom: 15px !important;
`

const InterfaceSetting = () => {
  const isChecked = false
  return (
    <StyledInterfaceSetting>
      <Label>
        <Text style={{ fontWeight: 400 }}>
          <TranslatedText translationId={90}>Interface Settings</TranslatedText>
        </Text>
      </Label>
      <NewContent>
        <div>
          <Text fontSize="18px">Toggle Expert Mode</Text>
          <Text fontSize="10x">Bypasses confirmation modals and allow high slippage trades.</Text>
          <Text fontSize="10x" style={{ fontWeight: 600 }} color="#ED4B9E">
            Use at your own risk.
          </Text>
        </div>
        <div>
          <Toggle />
        </div>
      </NewContent>
      <NewContent>
        <div style={{width: '100%'}}>
          <Text fontSize="18px">Disable Multihops</Text>
          <Text fontSize="10x">Restrict swaps to direct paires only.</Text>
        </div>
        <div>
          <Toggle />
        </div>
      </NewContent>
    </StyledInterfaceSetting>
  )
}

export default InterfaceSetting
