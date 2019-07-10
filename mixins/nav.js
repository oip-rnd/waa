/*
 * nav.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
export default {
  data () {
    return {
      options: [
        {
          label: 'apartment data',
          names: ['data'],
          route: '/data',
          gradient: 'bg-gradblue',
          color: 'coolblue',
        },
        {
          label: 'latest news',
          names: ['articles'],
          route: '/articles',
          gradient: 'bg-gradgreen',
          color: 'persiangreen',
        },
        {
          label: 'apartment calculator',
          names: ['calculato', 'results'],
          route: '/calculator',
          gradient: 'bg-gradpurp',
          color: 'magenta',
        },
        {
          label: 'the initiative',
          names: ['initiative'],
          route: '/initiative',
          color: 'tacao',
          gradient: 'bg-gradred',
        },
        {
          label: 'our vision',
          names: ['vision'],
          route: '/vision',
        },
      ]
    }
  }
}
