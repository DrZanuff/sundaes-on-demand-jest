import { useState, useCallback } from 'react'
import { Checkbox, FormControlLabel, Button } from '@mui/material'
import type { SummaryFormProps } from './SummaryForm.types'
import * as S from './SummaryForm.styles'
import { TermsPopUp } from '../../../components/TermsPopUp'

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
        <S.TermsContainer onMouseEnter={handleOpenTerms} onMouseLeave={handleCloseTerms}>
          <Button aria-label="Read Terms" color="secondary">
            Read Terms
          </Button>
          {showTerms && <TermsPopUp />}
        </S.TermsContainer>
      </S.Row>
      <Button aria-label="Submit" disabled={!userAgreed} variant="contained">
        Submit
      </Button>
    </S.SummaryFormContainer>
  )
}
