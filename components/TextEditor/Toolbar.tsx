import createStaticToolbarPlugin, { Separator, } from '@draft-js-plugins/static-toolbar';
import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    CodeButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
} from '@draft-js-plugins/buttons';
import createTextAlignmentPlugin from '@draft-js-plugins/text-alignment';
import createLinkPlugin from '@draft-js-plugins/anchor';
import createImagePlugin from '@draft-js-plugins/image';
  
const StaticToolbarPlugin = createStaticToolbarPlugin();
const TextAlignPlugin = createTextAlignmentPlugin();
const CreateLinkPlugin = createLinkPlugin();
const CreateImagePlugin = createImagePlugin();

export const plugins = [
    StaticToolbarPlugin,
    TextAlignPlugin,
    CreateLinkPlugin,
    CreateImagePlugin,
];

export default function DefaultToolbar() {
    return (
        <StaticToolbarPlugin.Toolbar>
            {(externalProps) => (
                <span>
                    <BoldButton {...externalProps} />
                    <ItalicButton {...externalProps} />
                    <UnderlineButton {...externalProps} />
                    <CodeButton {...externalProps} />
                    <CreateLinkPlugin.LinkButton {...externalProps} />
                    <Separator />
                    <HeadlineOneButton {...externalProps} />
                    <HeadlineTwoButton {...externalProps} />
                    <HeadlineThreeButton {...externalProps} />
                    <UnorderedListButton {...externalProps} />
                    <OrderedListButton {...externalProps} />
                    <BlockquoteButton {...externalProps} />
                    <CodeBlockButton {...externalProps} />
                    <Separator />
                    <TextAlignPlugin.TextAlignment {...externalProps} />
                </span>
            )}
        </StaticToolbarPlugin.Toolbar>
    )
}