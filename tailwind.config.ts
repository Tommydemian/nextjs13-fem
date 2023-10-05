import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      sapphire: '#0F52BA',
      mintCream: '#F5FFFA',
      coralBlush: '#FF6B6B',
      goldenrod: '#DAA520',
      forestGreen: '#228B22',
      lavenderBlush: '#FFF0F5',
      offBlack: '#333333',
      offWhite: '#FAFAFA',
      softGray: '#F2F2F2',
      slateGray: '#708090',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
