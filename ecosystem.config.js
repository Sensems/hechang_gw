module.exports = {
    apps: [
      {
        name: 'hechang_gw',
        exec_mode: 'cluster',
        instances: 'max',
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start'
      }
    ]
  }