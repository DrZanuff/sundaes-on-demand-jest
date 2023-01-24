import type { TestComponentProps } from './TestComponent.types'
import * as S from './TestComponent.styles'

export function TestComponent ( { value } : TestComponentProps ) {

  return (
    <S.TestComponentContainer>
      <h1>TestComponent</h1>
      <h2>{value}</h2>
    </S.TestComponentContainer>
  )
}