import {ListItemBuilder} from 'sanity/structure'
import {ConfigContext} from 'sanity'
import defineStructure from '../utils/defineStructure'

export default defineStructure<ListItemBuilder>((S, context: ConfigContext) =>
  S.listItem()
    .title('Story')
    .schemaType('aboutUs')
    .child(
      S.editor()
        .title('Story')
        .schemaType('aboutUs')
        .documentId('aboutUs')
    )
) 