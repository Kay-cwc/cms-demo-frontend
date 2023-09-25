import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

export const exportToHtml = (editorState: EditorState) => {
    const contentState = editorState.getCurrentContent();
    const htmlContent = stateToHTML(contentState, {
        inlineStyles: {
            'left': {
                element: 'div',
                attributes: {
                    style: 'text-align: left;'
                }
            },
            'right': {
                element: 'div',
                attributes: {
                    style: 'text-align: right;'
                }
            },
        },
        blockStyleFn: (block) => {
            if (block.getType() === 'blockquote') {
                return {
                    element: 'blockquote',
                    style: {
                        backgroundColor: '#f9f9f9',
                        borderLeft: '10px solid #ccc',
                        margin: '1.5em 10px',
                        padding: '0.5em 10px',
                        quotes: "\x81\x201D\x2018\x2019",
                    }
                }
            }
            return undefined;
        },
        entityStyleFn: (entity) => {
            const data = entity.getData();
            console.log(entity);
            return {
                element: 'a',
                attributes: {
                    href: data.url,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                },
            }
        },
    });

    return htmlContent;
}
