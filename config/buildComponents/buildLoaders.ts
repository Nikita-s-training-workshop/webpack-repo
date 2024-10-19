import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import type {BuildOptions} from './types/config'

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
   const cssLoaders = {
      test: /\.s[ac]ss|css$/i,
      use: [
         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         {
            loader: 'css-loader',
            options: {
               modules: {
                  namedExport: false,
                  auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                  localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
               },
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
