import type { AlertProps } from '@mui/material'

type AlertSeverity = Pick<AlertProps, 'severity'>

export interface AlertBannerProps extends AlertSeverity {
  text?: string
}
