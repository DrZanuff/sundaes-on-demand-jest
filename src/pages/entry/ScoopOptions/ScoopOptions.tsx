import type { ScoopOptionsProps } from './ScoopOptions.types'
import * as S from './ScoopOptions.styles'

export function ScoopOptions ( { value } : ScoopOptionsProps ) {

  return (
    <S.ScoopOptionsContainer>
      <h1>ScoopOptions</h1>
      <h2>{value}</h2>
    </S.ScoopOptionsContainer>
  )
}