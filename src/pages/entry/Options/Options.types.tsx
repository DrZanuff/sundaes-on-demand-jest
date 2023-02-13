export type OptionType = 'scoops' | 'toppings'

export interface OptionsProps {
  optionType: OptionType
}

export interface ItemsOptions {
  name: string
  imagePath: string
}
