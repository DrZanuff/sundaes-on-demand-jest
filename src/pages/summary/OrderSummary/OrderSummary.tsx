import type { OrderSummaryProps } from './OrderSummary.types'
import * as S from './OrderSummary.styles'

export function OrderSummary ( { value } : OrderSummaryProps ) {

  return (
    <S.OrderSummaryContainer>
      <h1>OrderSummary</h1>
      <h2>{value}</h2>
    </S.OrderSummaryContainer>
  )
}