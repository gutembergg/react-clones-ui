import React, { useRef, useState, useCallback } from 'react'
import ModelOverlay from '../ModelOverlay'
import ModelsContext, { CarModels } from '../ModelsContext'

import { Container, OverlayRoot } from './styles'

const ModelsWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModel, setRegisteredModel] = useState<CarModels[]>([])

  const registerModel = useCallback((model: CarModels) => {
    setRegisteredModel(state => [...state, model])
  }, [])

  const unRegisterModel = useCallback((modelName: string) => {
    setRegisteredModel(state =>
      state.filter(model => model.modelName !== modelName)
    )
  }, [])

  const getModelByName = useCallback(
    (modelName: string) => {
      return (
        registeredModel.find(model => model.modelName === modelName) || null
      )
    },
    [registeredModel]
  )

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModel,
        registerModel,
        unRegisterModel,
        getModelByName
      }}
    >
      <Container ref={wrapperRef}>
        <OverlayRoot>
          {registeredModel.map(item => (
            <ModelOverlay key={item.modelName} model={item}>
              {item.overlayNode}
            </ModelOverlay>
          ))}
        </OverlayRoot>

        {children}
      </Container>
    </ModelsContext.Provider>
  )
}

export default ModelsWrapper
