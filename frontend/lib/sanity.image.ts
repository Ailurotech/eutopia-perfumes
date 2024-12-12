import imageUrlBuilder from '@sanity/image-url'
import { sanityClient } from './sanityClient'

const builder = imageUrlBuilder(sanityClient)

export function urlForImage(source: any) {
  return builder.image(source)
} 