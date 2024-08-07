
import { Architects_Daughter} from 'next/font/google'
import localFont from 'next/font/local'
export const bigStem = localFont({
    src:'./fonts/bigstem/bigstem-regular-webfont.woff2',
    variable:'--font-big-stem'
  })
export const nickAinley = localFont(
    {
        src:'./fonts/nickainley/nickainley-normal-webfont.woff2',
        variable:'--font-nick-ainley'
      }
)
export const architectsDaughter = Architects_Daughter({
  variable:'--font-architects-daughter',
  subsets:["latin"],
  weight:"400"

})
  