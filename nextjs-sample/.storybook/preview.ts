import type { Preview } from '@storybook/react'

// 커스텀 viewport나 배경 색상의 정의가 가능
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        iphonex: {
          name: 'iphoneX',
          styles: {
            width: '375px',
            height: '812px',
          },
        },
      },
    },
    backgrounds: {
      values: [
        {
          name: 'grey',
          value: '#808080',
        },
      ],
    },
  },
}

export default preview
