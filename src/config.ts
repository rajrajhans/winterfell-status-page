import type { Config } from './types'

export const config: Config = {
  settings: {
    title: 'Winterfell Status',
    url: 'https://winterfell-status.rajrajhans.com/',
    displayDays: 90,
    collectResponseTimes: true,
  },
  monitors: [
    {
      id: 'winterfell',
      name: 'winterfell-ping',
      description: 'Ping service running on the Winterfell cluster\'s master node',
      url: 'https://winterfell.rajrajhans.com',
      method: 'GET',
      expectStatus: 200,
      followRedirect: true,
    },
    {
      id: 'audiobookshelf',
      name: 'audiobookshelf',
      description: 'Self hosted Audiobookshelf on the Winterfell cluster',
      url: 'https://audiobookshelf.rajrajhans.com',
      method: 'GET',
      expectStatus: 200,
      followRedirect: true,
    },
    {
      id: 'safierinx.xyz',
      name: 'safierinx.xyz',
      description: 'Apoorv\'s website',
      url: 'https://www.safierinx.xyz/',
      method: 'GET',
      expectStatus: 200,
      followRedirect: true,
    },
  ],
}
