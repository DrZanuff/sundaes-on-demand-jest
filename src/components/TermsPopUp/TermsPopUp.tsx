import type { TermsPopUpProps } from './TermsPopUp.types'
import * as S from './TermsPopUp.styles'

export function TermsPopUp({ value }: TermsPopUpProps) {
  return (
    <S.TermsPopUpContainer data-testid={'dialog-terms'}>
      <span>You'll not receive an actual sundae, this is just a test mock</span>
    </S.TermsPopUpContainer>
  )
}
