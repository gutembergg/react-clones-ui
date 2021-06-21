import { useCallback, useContext, useEffect } from 'react'
import ModelsContext from './ModelsContext'

export default function useModel(modelName: string) {
  const { registerModel, unRegisterModel, getModelByName } =
    useContext(ModelsContext)

  useEffect(() => {
    return () => unRegisterModel(modelName)
  }, [modelName, unRegisterModel])

  const getModel = useCallback(() => {
    return getModelByName(modelName)
  }, [modelName, getModelByName])

  return { registerModel, getModel }
}
