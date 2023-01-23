import React from 'react'
import { theme as chakraTheme } from '@chakra-ui/core'

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  icons: {
    ...chakraTheme.icons,
    jermaine: {
      path: (
        <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
          <path d="M323.892 152.596c.392 40.619.277 76.394.231 87.588-.233 56.87-16.818 101.048-42.675 131.952-28.982 34.639-64.145 54.828-115.25 56.138-42.363 1.087-82.787-12.434-109.258-36.677-33.41-30.599-55.438-82.245-54.755-153.731l119.995 1.147c-.194 46.045 10.95 70.07 40.942 69.301 32.261-.827 41.002-21.081 41.002-68.622 0-30.012-.249-239.568-.249-239.568l119.992.111s.526 46.284 1.07 98.509h-52.622c0 29.751 22.935 53.852 51.577 53.852.435 0-.434.012 0 0zM274.088 22.054c14.655 0 26.552 11.897 26.552 26.552 0 14.654-11.897 26.552-26.552 26.552-14.654 0-26.552-11.898-26.552-26.552 0-14.655 11.898-26.552 26.552-26.552z" />
        </g>
      ),
      viewBox: '0 0 325 430',
    },
    apple: {
      path: (
        <path
          fill="currentColor"
          d="M979.04184 925.18785c-17.95397 41.47737-39.20563 79.65705-63.82824 114.75895-33.56298 47.8528-61.04356 80.9761-82.22194 99.3698-32.83013 30.192-68.00529 45.6544-105.67203 46.5338-27.04089 0-59.6512-7.6946-97.61105-23.3035-38.08442-15.5358-73.08371-23.2303-105.08578-23.2303-33.56296 0-69.55888 7.6945-108.06101 23.2303-38.5608 15.6089-69.62484 23.7432-93.37541 24.5493-36.12049 1.5389-72.1237-14.3632-108.06101-47.7796-22.93711-20.0059-51.62684-54.3017-85.99592-102.8874-36.875274-51.88328-67.191862-112.04745-90.942422-180.639C12.750995 781.70252 0 709.95986 0 640.50361c0-79.5618 17.191859-148.18267 51.626869-205.68673 27.062885-46.18935 63.066121-82.62496 108.126941-109.37275 45.06086-26.74775 93.74914-40.37812 146.18212-41.25019 28.68971 0 66.3125 8.8744 113.06613 26.31542 46.62174 17.49964 76.55727 26.37404 89.68198 26.37404 9.8124 0 43.06758-10.37669 99.4431-31.06405 53.31237-19.18512 98.30724-27.12887 135.16787-23.99975 99.8828 8.06098 174.92313 47.43518 224.82789 118.37174-89.33023 54.12578-133.51903 129.93556-132.63966 227.18753.8061 75.75115 28.28668 138.78795 82.2952 188.8393 24.47603 23.23022 51.81008 41.18421 82.22186 53.93522-6.59525 19.12648-13.557 37.44688-20.95846 55.03446zM749.96366 23.751237c0 59.37343-21.69138 114.810233-64.92748 166.121963-52.17652 60.99961-115.28658 96.24803-183.72426 90.68597-.87204-7.12298-1.37769-14.61967-1.37769-22.49743 0-56.99843 24.81315-117.99801 68.87738-167.873453 21.99909-25.25281 49.978-46.25018 83.90738-63.00018 33.85608-16.50008 65.88014-25.6249796 95.99884-27.18757966.87944 7.93730006 1.24583 15.87509966 1.24583 23.74993966z"
        />
      ),
      viewBox: '0 0 1000 1187.198',
    },
    crowdai: {
      path: (
        <g>
          <defs>
            <clipPath id="a">
              <path fill="none" d="M0 1h395.1v89.2H0z" />
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <path
              d="M21.4 70.3c-3.6-3.8-4.3-7.8-4.3-24.8s.7-20.9 4.3-24.8c2.6-3.1 6.3-4.6 11-4.6 8.3 0 12.9 4.9 14.8 12.4h17.4C61.6 10.9 49.1 1 32.3 1a32.2 32.2 0 00-23.7 9.6 24.22 24.22 0 00-7.1 13.2C.5 28.7 0 36 0 45.6s.5 16.9 1.5 21.8a25.62 25.62 0 007.1 13.2 32.13 32.13 0 0023.6 9.6c16.8 0 29.3-9.9 32.3-27.7H47.2c-1.8 7.5-6.5 12.4-14.8 12.4-4.7 0-8.4-1.5-11-4.6m83.5-27.5L117 30.6c-4.4-4.4-8.9-6-15.1-6-6.9 0-13.1 3.2-16.1 6.9v-6.2H70.1v64.2h16V50.8c0-8.1 5.4-11.8 10.3-11.8 4-.1 6.1 1.3 8.5 3.8m45 14.5c0 6.7-.4 12.3-3.7 15.6a11.31 11.31 0 01-14.9 0c-3.3-3.3-3.7-9-3.7-15.6s.4-12.2 3.7-15.5a10 10 0 017.4-2.8 10.19 10.19 0 017.5 2.8c3.3 3.3 3.7 8.8 3.7 15.5m16 0c0-11.6-1.5-18.8-7.3-24.9-3.9-4.2-10.5-7.9-20-7.9s-15.9 3.7-19.8 7.9c-5.8 6-7.3 13.3-7.3 24.9s1.5 19 7.3 25c3.9 4.2 10.3 7.9 19.8 7.9s16-3.7 20-7.9c5.8-6.1 7.3-13.3 7.3-25m70.7 32.1l19.6-64.2h-16.9L229 64.9l-13.2-39.7h-11.7L191 64.9l-10.3-39.7h-17l19.7 64.2h13.2L210 49.2l13.4 40.3h13.2zm56.1-32.1c0 10.5-1.4 18.5-11 18.5s-10.8-8-10.8-18.5S272.1 39 281.7 39s11 7.8 11 18.3m16-22.8V1.7h-16v29.2c-4.2-4.7-9.1-6.4-15.6-6.4-6.3 0-12.1 2.2-15.6 5.8-6.4 6.4-6.5 17.4-6.5 27s.1 20.7 6.5 27.1c3.6 3.6 9.5 5.8 15.8 5.8 5.2 0 9.1-1.1 12.6-3.8z"
              fill="#a2a7aa"
            />
          </g>
          <path
            d="M348.5 28.3l10.7 31.9h-21.8zm29.4-25.8v63.4L354.8 2.5h-13.4l-31.9 87.7h17.9l5.3-15.5h31.2l5.2 15.5h26.1V2.5z"
            fill="#00d1d0"
          />
        </g>
      ),
      viewBox: '0 0 395.1 90.2',
    },
    sisense: {
      path: (
        <g
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
        >
          <path fill="#ffce07" d="M0 0h128v128H0z" />
          <path d="M33.215 22.22v33.568L79.579 39.05 33.215 22.22zM95.379 46.202v33.523L49.041 62.952l46.338-16.75zM33.074 69.151v33.528L79.575 85.99 33.074 69.151zM95.383 91.84v13.796l-19.21-6.926 19.21-6.87z" />
        </g>
      ),
      viewBox: '0 0 128 128',
    },
    periscopedata: {
      path: (
        <g
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
        >
          <circle
            cx="14.943"
            cy="13.583"
            r="9.026"
            fill="none"
            stroke="currentColor"
            strokeWidth=".78"
            transform="translate(-7.03961 -5.30662) scale(1.27416)"
          />
          <path d="M12 2.25c5.381025 0 9.75 4.368975 9.75 9.75s-4.368975 9.75-9.75 9.75S2.25 17.381025 2.25 12 6.618975 2.25 12 2.25zM3.46875 12c0 4.7112 3.82005 8.53125 8.53125 8.53125S20.53125 16.7112 20.53125 12H3.46875z" />
        </g>
      ),
      viewBox: '0 0 24 24',
    },
    objective: {
      path: (
        <g
          fill="none"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeMiterlimit="1.5"
          stroke="currentColor"
        >
          <path
            d="M1156.23 547c87.18 0 98.4 88.141 98.4 122.803V1305h81.4V670.803c0-34.662 5-122.803 108.4-122.803 103.41 0 102.81 88.141 102.81 122.803V1305s69.46.37 77.55 1.09V922.803c0-34.662 9.76-112.803 112.8-112.803 88.25 0 98.41 78.141 98.41 112.803V1928.2c0 6.7-3 175.05-3 175.05 0 150.53-92.21 272.75-242.75 272.75h-583.5c-116.542 0-221.71-132.07-266.858-190.99-231.656-302.33-224.969-281.36-360.39-470.34-194.719-250.13 128.7-294.62 263.791-71.04L732 1788.94V819.803C732 785.141 750.292 687 841.803 687s111.409 98.141 111.409 132.803V1306c7.758-.66 90.208-1 90.208-1V669.803c0-34.662 9.11-122.803 112.81-122.803z"
            strokeWidth="47.44"
            transform="matrix(.43784 0 0 .44044 -19.71209552 -140.25520412)"
          />
          <path
            fill="currentColor"
            d="M301.48709198 658.8039074c50.29802947 16.88550624 104.96734998 36.46931558 142.62201475 65.95762644 28.15055463 22.05289742 46.65108954 49.6190192 45.51979063 86.02801504-.14790834 2.89534759 2.08670683 5.36443566 4.98091324 5.50920304 2.89420641.1487887 5.36467542-2.08304173 5.50858624-4.97838931 2.82624853-40.51073826-16.35386524-72.13034665-46.76302018-97.90296145-37.80057435-32.02978262-93.47087454-54.7461972-144.85982794-74.22947364-5.41384495-1.93425303-11.37974778.88871086-13.31374925 6.30542363-1.93400147 5.41269145.8910478 11.3763032 6.3052925 13.31055624z"
          />
          <g>
            <path
              d="M1352 1744c-102.1 52-185 173.9-185 312s82.9 260 185 312c102.1-52 185-173.9 185-312s-82.9-260-185-312z"
              strokeWidth="50.69"
              transform="matrix(0 .41224 -.4098 0 1388.21988056 47.48551082)"
            />
            <circle
              cx="1287"
              cy="1794"
              r="176"
              fill="currentColor"
              strokeWidth="73.47"
              transform="matrix(.28271 0 0 .2844 182.32421679 94.61207121)"
            />
            <path
              d="M881 1653.97c0-3.3-1.456-5.97-3.25-5.97h-6.5c-1.794 0-3.25 2.67-3.25 5.97v198.06c0 3.3 1.456 5.97 3.25 5.97h6.5c1.794 0 3.25-2.67 3.25-5.97v-198.06z"
              strokeWidth="98.39"
              transform="matrix(.263 0 0 .14316 317.0778004 261.77271903)"
            />
            <path
              d="M881 1653.98c0-3.3-1.456-5.98-3.25-5.98h-6.5c-1.794 0-3.25 2.68-3.25 5.98v198.04c0 3.3 1.456 5.98 3.25 5.98h6.5c1.794 0 3.25-2.68 3.25-5.98v-198.04z"
              strokeWidth="98.51"
              transform="matrix(.24732 -.08999 .0484 .13463 190.33369882 365.39322652)"
            />
            <path
              d="M881 1654c0-3.31-1.456-6-3.25-6h-6.5c-1.794 0-3.25 2.69-3.25 6v198c0 3.31 1.456 6 3.25 6h6.5c1.794 0 3.25-2.69 3.25-6v-198z"
              strokeWidth="98.5"
              transform="matrix(.20283 -.16842 .0906 .1104 104.79367695 504.08943957)"
            />
            <path
              d="M881 1654.02c0-3.32-1.456-6.02-3.25-6.02h-6.5c-1.794 0-3.25 2.7-3.25 6.02v197.96c0 3.32 1.456 6.02 3.25 6.02h6.5c1.794 0 3.25-2.7 3.25-6.02v-197.96z"
              strokeWidth="98.38"
              transform="matrix(.13647 -.22616 .12166 .07429 72.9057129 659.69073025)"
            />
            <path
              d="M881 1653.98c0-3.3-1.456-5.98-3.25-5.98h-6.5c-1.794 0-3.25 2.68-3.25 5.98v198.04c0 3.3 1.456 5.98 3.25 5.98h6.5c1.794 0 3.25-2.68 3.25-5.98v-198.04z"
              strokeWidth="98.51"
              transform="matrix(-.24732 -.08999 -.0484 .13463 902.3528452 365.39322652)"
            />
            <path
              d="M881 1654c0-3.31-1.456-6-3.25-6h-6.5c-1.794 0-3.25 2.69-3.25 6v198c0 3.31 1.456 6 3.25 6h6.5c1.794 0 3.25-2.69 3.25-6v-198z"
              strokeWidth="98.5"
              transform="matrix(-.20283 -.16842 -.0906 .1104 987.8927712 504.08943957)"
            />
            <path
              d="M881 1654.02c0-3.32-1.456-6.02-3.25-6.02h-6.5c-1.794 0-3.25 2.7-3.25 6.02v197.96c0 3.32 1.456 6.02 3.25 6.02h6.5c1.794 0 3.25-2.7 3.25-6.02v-197.96z"
              strokeWidth="98.38"
              transform="matrix(-.13647 -.22616 -.12166 .07429 1019.78051156 659.69073025)"
            />
          </g>
          <g>
            <path
              d="M1165.26 522.565c100.1-8.626 141.5 40.011 141.5 40.011s48.36-45.996 151.72-43.056c181.88 5.174 205.79 227.583 205.79 227.583s52.59-4.128 116.31 11.371c125.05 30.413 123.44 129.667 123.44 164.329V1928.2c0 6.7-3 175.05-3 175.05 0 150.53-160.23 272.75-310.77 272.75h-583.5c-116.542 0-221.71-132.07-266.858-190.99-231.656-302.33-224.969-281.36-360.39-470.34-86.84-111.55-45.772-291.33 45.338-331.75 149.257-66.22 281.627 27.6 281.627 27.6l14.196-588.463c0-34.662 17.315-155.642 150.625-171.462 60.555-7.187 123.176 14.897 123.176 14.897s38.586-131.534 170.796-142.927z"
              strokeWidth="62.79"
              transform="matrix(.48697 0 0 .48987 -94.354 -209.183)"
            />
          </g>
        </g>
      ),
      viewBox: '0 0 900 1000',
    },
    roblox: {
      path: (
        <path
          d="M11.676 0L0 44.166 43.577 56l11.676-44.166L11.676 0zm20.409 35.827l-12.177-3.308 3.264-12.342 12.182 3.308-3.27 12.342z"
          fill="currentColor"
        />
      ),
      viewBox: '0 0 56 56',
    },
    twitter: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </g>
      ),
    },
    github: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </g>
      ),
    },
    linkedin: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </g>
      ),
    },
    mail: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </g>
      ),
    },
  },
}

export default theme
