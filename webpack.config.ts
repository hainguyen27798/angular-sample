import CompressionPlugin from 'compression-webpack-plugin';
import type { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default {
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
    new CompressionPlugin({
      filename: '[path][base].br',
      algorithm: 'brotliCompress',
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
  ],
} as Configuration;
