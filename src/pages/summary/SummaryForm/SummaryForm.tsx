import { useState, useCallback } from 'react'
import {
  Checkbox,
  FormControlLabel,
  Button,
  Dialog,
  DialogTitle,
  DialogContentText,
  DialogContent
} from '@mui/material'
import type { SummaryFormProps } from './SummaryForm.types'
import * as S from './SummaryForm.styles'

export function SummaryForm({ value }: SummaryFormProps) {
  const [userAgreed, setUserAgreed] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const handleCheckbox = useCallback(() => {
    setUserAgreed((prev) => !prev)
  }, [])

  const handleOpenTerms = useCallback(() => {
    setShowTerms(true)
  }, [])

  const handleCloseTerms = useCallback(() => {
    setShowTerms(false)
  }, [])

  return (
    <S.SummaryFormContainer>
      <S.Row>
        <FormControlLabel
          control={
            <Checkbox
              inputProps={{ 'aria-label': 'Agree' }}
              checked={userAgreed}
              onChange={handleCheckbox}
            />
          }
          label="Agree"
        />
        <Button aria-label="Terms and Conditions" color="secondary" onMouseEnter={handleOpenTerms}>
          Terms and Conditions
        </Button>
      </S.Row>
      <Button aria-label="Submit" disabled={!userAgreed} variant="contained">
        Submit
      </Button>
      <Dialog open={showTerms} onClose={handleCloseTerms}>
        <DialogTitle id="alert-dialog-title" onMouseLeave={handleCloseTerms}>
          {'Terms and Conditions'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You'll not receive an actual sundae, this is just a test mock
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </S.SummaryFormContainer>
  )
}
