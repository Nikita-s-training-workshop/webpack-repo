import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import type {BuildOptions} from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
   const cssLoaders = {
      test: /\.s[ac]ss$/i,
      use: [
         options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         {
            loader: 'css-loader',
            options: {
               modules: true,
            },
         },
         'sass-loader',
      ],
   }

   const typescriptLoaders = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   }

   return [typescriptLoaders, cssLoaders]
}
