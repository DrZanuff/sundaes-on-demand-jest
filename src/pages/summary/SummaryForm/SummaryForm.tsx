import { useState, useCallback } from 'react'
import { Checkbox, FormControlLabel, Button } from '@mui/material'
import type { SummaryFormProps } from './SummaryForm.types'
import * as S from './SummaryForm.styles'

export function SummaryForm({ value }: SummaryFormProps) {
  const [userAgreed, setUserAgreed] = useState(false)
  const handleCheckbox = useCallback(() => {
    setUserAgreed((prev) => !prev)
  }, [])

  return (
    <S.SummaryFormContainer>
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
      <Button aria-label="Submit" disabled={!userAgreed} variant="contained">
        Submit
      </Button>
    </S.SummaryFormContainer>
  )
}
