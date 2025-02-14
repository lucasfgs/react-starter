import { Map } from 'immutable'
import { EditorState, DefaultDraftBlockRenderMap, Modifier } from 'draft-js'

export function setBlockData(editorState, data) {
    const newContentState = Modifier.setBlockData(
        editorState.getCurrentContent(),
        editorState.getSelection(),
        data
    )

    return EditorState.push(editorState, newContentState, 'change-block-data')
}

const newBlockRenderMap = Map({
    unstyled: {
        element: 'p',
    },
    paragraph: {
        element: 'p',
    },
})

// TODO:
// 1. DraftJS uses 'div' tags inside every block.
//    When we use 'p' tag for paragraphs, we get a warning because "div" tag cannot be inside a "p" tag.

export const blockRenderMap = DefaultDraftBlockRenderMap.merge(
    newBlockRenderMap
)
