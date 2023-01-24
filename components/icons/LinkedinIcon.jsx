import React from 'react'
import { Icon } from '@chakra-ui/react'

const LinkedinIcon = (props) => (
  <Icon
    viewBox="0 0 24 24"
    aria-label={'linkedin'}
    name={'linkedin'}
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </g>
  </Icon>
)
export default LinkedinIcon
