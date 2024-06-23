import {Nunito} from 'next/font/google'
const nunito_init = Nunito({ subsets: ["latin"], weight: ['900'], variable: '--font-nunito' });
export const nunito= nunito_init.className