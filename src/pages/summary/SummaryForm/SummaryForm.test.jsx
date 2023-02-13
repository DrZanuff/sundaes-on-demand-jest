import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SummaryForm } from './SummaryForm'

function renderSumaryForm() {
  // https://kentcdodds.com/blog/test-isolation-with-react
  const { debug } = render(<SummaryForm />)
  const checkBox = screen.getByRole('checkbox', { name: /agree/i })
  const button = screen.getByRole('button', { name: /submit/i })
  const terms = screen.getByTestId('terms-and-conditions')
  const user = userEvent.setup()

  return { checkBox, button, user, terms, debug }
}

describe('Ensure checkbox can enable and disable the submit buton', () => {
  test('Checkbox should be unchecked by default', () => {
    const { checkBox } = renderSumaryForm()

    expect(checkBox).not.toBeChecked()
  })

  test('Button should be disabled by default', () => {
    const { button } = renderSumaryForm()

    expect(button).toHaveAttribute('disabled')
  })

  test('Button should be enabled when checking the checkbox', async () => {
    const { button, checkBox, user } = renderSumaryForm()
    await user.click(checkBox)

    expect(checkBox).toBeChecked()
    expect(button).not.toHaveAttribute('disabled')
  })

  test('Uncheking the checkbox should disable the button', async () => {
    const { button, checkBox, user, debug } = renderSumaryForm()
    debug()

    await user.click(checkBox)
    await user.click(checkBox)

    expect(checkBox).not.toBeChecked()
    expect(button).toHaveAttribute('disabled')
  })
})

describe('User should be able to read Terms and conditions', () => {
  it('Should display when Terms and conditions when user clicks the button', async () => {
    const { terms, user } = renderSumaryForm()
    await user.hover(terms)

    await screen.findByTestId('dialog-terms')
  })

  it('Should hide the Terms and conditions when user move the mouse over', async () => {
    const { terms, user } = renderSumaryForm()
    await user.hover(terms)

    const dialog = await screen.findByTestId('dialog-terms')
    await user.unhover(terms)

    expect(dialog).not.toBeInTheDocument()
  })
})
