import { EditorProvider } from "@/context/EditorContext";
import dynamic from "next/dynamic";

const TextEditorNoSSR = dynamic(
    () => import('@/components/TextEditor'),
    { ssr: false }
)

export default function NewArticle() {
    return (
        <main>
            <EditorProvider>
                <div className="p-2">
                    <TextEditorNoSSR />
                </div>
            </EditorProvider>
        </main>
    )
}