import axios from 'axios'
import { useEffect, useState, useMemo } from 'react'
import { Item } from '../Item'
import type { OptionsProps, ItemsOptions } from './Options.types'
import * as S from './Options.styles'

export function Options({ optionType }: OptionsProps) {
  const [items, setItems] = useState<ItemsOptions[]>([])

  useEffect(() => {
    const getOptionsFromServer = async () => {
      try {
        const { data } = await axios.get<ItemsOptions[]>(`http:localhost:3030/${optionType}`)

        setItems(data)
      } catch (err) {
        alert(`Error retrieving the options: ${optionType}`)
      }
    }

    getOptionsFromServer()
  }, [optionType])

  const optionItems = useMemo(() => {
    return items.map((item, idx) => (
      <Item key={idx + item.imagePath} image={item.imagePath} name={item.name} type={optionType} />
    ))
  }, [items, optionType])

  return <S.OptionsContainer>{optionItems}</S.OptionsContainer>
}
