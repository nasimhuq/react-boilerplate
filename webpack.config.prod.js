const merge = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const baseConfig = require('./webpack.config.base')
// const reportFilename = `Bundle-size-report-${(new Date).toISOString().replace(/[:/.]/g, '-')}.html`
const reportFilename = 'Bundle-size-report.html'
module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [new BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false,
    reportFilename: reportFilename
  })],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  }
})
