import { render, screen } from '@testing-library/react'
import { OrderEntry } from './OrderEntry'
import { rest } from 'msw'
import { server, serverAddress } from '../../../mocks/servers'

function renderOrderEntry() {
  const { debug } = render(<OrderEntry />)

  return { debug }
}

test.only('Handle error for scoops and toppings routes', async () => {
  server.resetHandlers(
    rest.get(`${serverAddress}/scoops`),
    (req, res, ctx) => res(ctx.status(500)),
    rest.get(`${serverAddress}/toppings`),
    (req, res, ctx) => res(ctx.status(500))
  )

  const { debug } = renderOrderEntry()

  debug()
  const alert = await screen.findAllByRole(
    'alert'
    // {
    //   name: /an unexpected error ocurred. please try again later./i
    // }
  )

  expect(alert).toHaveLength(2)
})
