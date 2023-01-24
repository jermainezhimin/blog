import React from 'react'
import { Icon } from '@chakra-ui/react'

const ChevronLessIcon = (props) => (
  <Icon viewBox="0 0 24 24" aria-label={'more'} name={'more'} {...props}>
    <path
      fill="currentColor"
      d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
    ></path>
  </Icon>
)
export default ChevronLessIcon
