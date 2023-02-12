import type { OptionsProps } from './Options.types'
import * as S from './Options.styles'

export function Options({ optionType }: OptionsProps) {
  return (
    <S.OptionsContainer>
      <h1>Options</h1>
      <h2>{optionType}</h2>
    </S.OptionsContainer>
  )
}
