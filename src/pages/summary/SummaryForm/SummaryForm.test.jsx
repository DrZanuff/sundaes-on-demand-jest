import { render, screen, fireEvent } from '@testing-library/react'
import { SummaryForm } from './SummaryForm'

describe('Ensure checkbox can enable and disable the submit buuton', () => {
  render(<SummaryForm />)
  const checkBox = screen.getByRole('checkbox', { name: /agree/i })
  const button = screen.getByRole('button', { name: /submit/i })

  test('Checkbox should be unchecked by default', () => {
    expect(checkBox).not.toBeChecked()
  })

  test('Button should be disabled by default', () => {
    expect(button).toHaveAttribute('disabled')
  })

  test('Button should be enabled when checking the checkbox', () => {
    fireEvent.click(checkBox)

    expect(checkBox).toBeChecked()
    expect(button).toHaveAttribute('disabled', '')
  })

  test('Uncheking the checkbox should disable the button', () => {
    fireEvent.click(checkBox)

    expect(checkBox).not.toBeChecked()
    expect(button).toHaveAttribute('disabled')
  })
})
