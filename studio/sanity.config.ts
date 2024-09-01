import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'eutopia-perfumes',

  projectId: 'djpnf221',
  dataset: 'uat',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
