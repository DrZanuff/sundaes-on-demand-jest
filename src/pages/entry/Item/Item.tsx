import { serverAddress } from '../../../mocks/servers'
import type { ItemProps } from './Item.types'
import * as S from './Item.styles'

export function Item({ image, name, type }: ItemProps) {
  const server = serverAddress

  return (
    <S.ItemContainer>
      <h3>{type === 'scoops' ? 'Scoop' : 'Topping'}</h3>
      <img src={`${server}${image}`} alt={`${name} ${type.slice(0, -1)}`} />
      <span>{name}</span>
    </S.ItemContainer>
  )
}
