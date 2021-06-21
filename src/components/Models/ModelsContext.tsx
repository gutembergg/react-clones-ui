import React, { ReactNode } from 'react'

export interface CarModels {
  modelName: string
  overlayNode: ReactNode
  sectionRef: React.RefObject<HTMLElement>
}

interface ModelsContext {
  wrapperRef: React.RefObject<HTMLElement>
  registeredModel: CarModels[]
  registerModel: (model: CarModels) => void
  unRegisterModel: (modelName: string) => void
  getModelByName: (modelName: string) => CarModels | null
}

export default React.createContext<ModelsContext>({} as ModelsContext)
