import React from 'react'
import DefaultOverlay from '../defaultOverlay'
import { ModelsWrapper, ModelsSection } from '../Models'
import { Container } from './styles'

const Pages: React.FC = () => {
  const modelsNames = [
    'Model One',
    'Model Two',
    'Model Three',
    'Model Four',
    'Model Five',
    'Model Six',
    'Model seven'
  ]
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {modelsNames.map(modelName => (
            <ModelsSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlay
                  label={modelName}
                  description="descriptions fake"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  )
}

export default Pages
