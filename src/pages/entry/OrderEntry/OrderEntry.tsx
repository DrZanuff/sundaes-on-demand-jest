import { Options } from '../Options'
import * as S from './OrderEntry.styles'

export function OrderEntry() {
  return (
    <S.OrderEntryContainer>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
    </S.OrderEntryContainer>
  )
}
