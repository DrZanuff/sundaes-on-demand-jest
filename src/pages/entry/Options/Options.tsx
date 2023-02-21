import axios from 'axios'
import { useEffect, useState, useMemo } from 'react'
import { Item } from '../Item'
import { AlertBanner } from '../../../components/AlertBanner'
import { serverAddress } from '../../../mocks/servers'
import type { OptionsProps, ItemsOptions } from './Options.types'
import * as S from './Options.styles'

export function Options({ optionType }: OptionsProps) {
  const [items, setItems] = useState<ItemsOptions[]>([])
  const [error, setError] = useState(false)

  useEffect(() => {
    const getOptionsFromServer = async () => {
      try {
        const { data } = await axios.get<ItemsOptions[]>(`${serverAddress}/${optionType}`)

        setItems(data)
      } catch (err) {
        setError(true)
      }
    }

    getOptionsFromServer()
  }, [optionType])

  if (error === true) {
    return <AlertBanner />
  }

  const optionItems = useMemo(() => {
    return items.map((item, idx) => (
      <Item key={idx + item.imagePath} image={item.imagePath} name={item.name} type={optionType} />
    ))
  }, [items, optionType])

  return <S.OptionsContainer>{optionItems}</S.OptionsContainer>
}
