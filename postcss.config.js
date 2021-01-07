module.exports = {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'postcss-preset-env': {
        preserve: false,
        browsers: 'last 2 versions',
        stage: 3,
        features: {
            'nesting-rules': true,
        }
      }
    }
  }