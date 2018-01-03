import merge from 'webpack-merge'
import base from '../base'
import prod from './'

export default [
  merge(base.client, prod.client)
]
