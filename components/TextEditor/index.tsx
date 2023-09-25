'use client'
import { Fragment, createRef, useCallback, useState } from "react"
import { DraftModel, EditorState, RichUtils, convertToRaw } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
// this group all plugins related to the toolBar for draft-js-plugins
import DefaultToolbar, { plugins } from "./Toolbar";
// all stylesheet for draft-js-plugins
import '@draft-js-plugins/static-toolbar/lib/plugin.css';
import '@draft-js-plugins/text-alignment/lib/plugin.css';
import '@draft-js-plugins/anchor/lib/plugin.css';
import { Button, Card } from "flowbite-react";
import { exportToHtml } from "./lib";
import { useEditorContext } from "@/context/EditorContext";

export default function TextEditor() {
    const editorRef = createRef<Editor>();
    const { editorState, setEditorState } = useEditorContext();
    
    const [htmlContent, setHtmlContent] = useState<string>('');

    const handleKeyCommand = useCallback(
        (command: DraftModel.Constants.DraftEditorCommand, editorState: EditorState) => {
            const newState = RichUtils.handleKeyCommand(editorState, command);
            if (newState) {
                setEditorState(newState);
                return 'handled';
            }

            return 'not-handled';
        }, [editorState]
    );

    const focusEditor = () => editorRef.current?.focus();

    const onSubmit = () => {
        const content = exportToHtml(editorState);
        setHtmlContent(content);
    }

    return (
        <Fragment>
            <div 
                onClick={focusEditor} 
                className=" border border-gray-300 rounded-sm p-2 mt-2"
            >
                <DefaultToolbar />
                <div className=" mt-2">
                    <Editor
                        ref={editorRef}
                        handleKeyCommand={handleKeyCommand}
                        editorState={editorState}
                        onChange={setEditorState}
                        plugins={plugins}
                    />
                </div>
            </div>
            <Button className="mt-2" onClick={onSubmit} >Submit</Button>
            <Card className=" mx-auto max-w-sm shadow-none my-4" >
                <h3>Preview</h3>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> 
            </Card>
        </Fragment>
    );
}

