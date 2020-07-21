import { merge } from 'webpack-merge'
import base from '../base'
import dev from './'

export default [
  merge(base.client, dev.client)
]
