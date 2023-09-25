'use client'
import { createEditorStateWithText } from "@draft-js-plugins/editor";
import { EditorState } from "draft-js";
import { createContext, useContext, useState } from "react";
import { IBox } from "@/types/base";

interface IEditorContext {
    editorState: EditorState;
    setEditorState: React.Dispatch<EditorState>;
}

const EditorContext = createContext<IEditorContext | null>(null);

export const EditorProvider = ({ children }: IBox) => {
    const [editorState, setEditorState] = useState<EditorState>(
        createEditorStateWithText('type here...')
    );

    return (
        <EditorContext.Provider value={{ editorState, setEditorState }}>
            {children}
        </EditorContext.Provider>
    )
}

export const useEditorContext = (): IEditorContext => {
    const context = useContext(EditorContext);
    if (context === null) {
        throw new Error('useEditorContext must be used within a EditorProvider')
    }

    return context;
}
