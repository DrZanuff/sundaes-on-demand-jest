import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SummaryForm } from './SummaryForm'

describe('Ensure checkbox can enable and disable the submit buton', () => {
  render(<SummaryForm />)
  const checkBox = screen.getByRole('checkbox', { name: /agree/i })
  const button = screen.getByRole('button', { name: /submit/i })
  const user = userEvent.setup()

  test('Checkbox should be unchecked by default', () => {
    expect(checkBox).not.toBeChecked()
  })

  test('Button should be disabled by default', () => {
    expect(button).toHaveAttribute('disabled')
  })

  test('Button should be enabled when checking the checkbox', async () => {
    await user.click(checkBox)

    expect(checkBox).toBeChecked()
    expect(button).toHaveAttribute('disabled', '')
  })

  test('Uncheking the checkbox should disable the button', async () => {
    await user.click(checkBox)

    expect(checkBox).not.toBeChecked()
    expect(button).toHaveAttribute('disabled')
  })
})

describe('User should be able to read Terms and conditions', () => {
  render(<SummaryForm />)
  const user = userEvent.setup()
  const buttonsList = screen.getAllByRole('button', { name: /read terms/i })
  const button = buttonsList.length > 0 ? buttonsList[0] : null

  it('Should display when Terms and conditions when user clicks the button', async () => {
    await user.hover(button)
    // const terms = screen.getByText()
    await screen.findByTestId('dialog-terms')
  })

  it('Should hide the Terms and conditions when user move the mouse over', async () => {
    await user.hover(button)
    // const terms = screen.getByText()
    const terms = await screen.findByTestId('dialog-terms')

    await user.unhover(terms)

    expect(terms).toBeFalsy()
  })
})
