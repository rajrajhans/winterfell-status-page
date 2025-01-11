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
      name: 'Ping service running on the Winterfell cluster\'s master node',
      description: 'Ping service running on the Winterfell cluster',
      url: 'https://winterfell.rajrajhans.com',
      method: 'GET',
      expectStatus: 200,
      followRedirect: true,
    },
    {
      id: 'audiobookshelf',
      name: 'Self hosted Audiobookshelf on the Winterfell cluster',
      description: 'Audiobookshelf',
      url: 'https://audiobookshelf.rajrajhans.com',
      method: 'GET',
      expectStatus: 200,
      followRedirect: true,
    },
  ],
}
