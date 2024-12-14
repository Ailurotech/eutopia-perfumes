import {ListItemBuilder} from 'sanity/structure'
import {DocumentIcon} from '@sanity/icons'
export default function joinFormStructure(S: any): ListItemBuilder {
  return S.listItem()
    .title('Join Form')
    .icon(DocumentIcon)
    .child(
        S.document()
          .schemaType('joinForm')
          .documentId('joinForm')
      )
} 