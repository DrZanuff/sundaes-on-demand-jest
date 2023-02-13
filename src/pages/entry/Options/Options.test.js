import { render, screen } from '@testing-library/react'
import { Options } from './Options'

function renderOptions(optionType) {
  const { debug } = render(<Options optionType={optionType} />)

  return debug
}

test('display image for each scoop opitons from the server', async () => {
  // render(<Options optionType="scoops" />)
  renderOptions('scoops')

  // find images
  const scoopImages = await screen.findAllByRole('img', { name: /scoop$/i })
  expect(scoopImages).toHaveLength(2)

  // confirm all text of images
  const altText = scoopImages.map((scoop) => scoop.alt)
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop'])
})

test('display image for each topping options from the server', async () => {
  renderOptions('toppings')

  const toppingImages = await screen.findAllByRole('img', { name: /topping$/i })
  expect(toppingImages).toHaveLength(2)

  const altText = toppingImages.map((topping) => topping.alt)
  expect(altText).toEqual(['Mochi topping', 'Cherries topping'])
})
