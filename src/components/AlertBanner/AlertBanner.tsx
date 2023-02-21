import { Alert } from '@mui/material'
import type { AlertBannerProps } from './AlertBanner.types'
import * as S from './AlertBanner.styles'

export function AlertBanner({
  text = 'An unexpected error ocurred. Please try again later.',
  severity = 'error'
}: AlertBannerProps) {
  return (
    <S.AlertBannerContainer>
      <Alert severity={severity}>{text}</Alert>
    </S.AlertBannerContainer>
  )
}
