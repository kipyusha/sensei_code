import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { ViewUpdate } from '@codemirror/view';
import { dracula } from '@uiw/codemirror-theme-dracula';
import styled from 'styled-components';
import Settings from './Settings/Settings';
import { IEditorOptions } from './interfaces';
import { codeEditor } from '../../../../assets/img/svgIcons';

interface Props {
    answer?: string,
    setisRightAnswer: React.Dispatch<React.SetStateAction<boolean>>
    setisStart: React.Dispatch<React.SetStateAction<boolean>>
}

const Editor = ({setisRightAnswer, setisStart, answer}: Props) => {
    const [code, setCode] = useState<string | undefined>("console.log('hello world!');");
    const handleChangeCode = React.useCallback(
        (value: string, viewUpdate: ViewUpdate) => {
            setCode(value);
        },
        []
    );

    const [editorOptions, setEditorOptions] = useState<IEditorOptions>({
        theme: dracula,
        lang: { id: 1, link: javascript({ jsx: true }) },
        fontSize: 16,
    });

    return (
        <Wrapper>
            <EditorContainer>
                <TitleContainer>
                    <img src={codeEditor} alt="" />
                    <Title>Code editor</Title>
                </TitleContainer>
                <EditorMain>
                    <CodeMirror
                        style={{
                            border: '1px solid #202020',
                            fontSize: editorOptions.fontSize + 'px',
                        }}
                        value={code}
                        height="400px"
                        width="800px"
                        extensions={[editorOptions.lang.link]}
                        onChange={handleChangeCode}
                        theme={editorOptions.theme}
                        lang="javascript"
                    />
                    <Settings
                        options={editorOptions}
                        setOptions={setEditorOptions}
                        code={code}
                        setisRightAnswer={setisRightAnswer}
                        setisStart={setisStart}
                        answer={answer}
                    />
                </EditorMain>
            </EditorContainer>
        </Wrapper>
    );
};
export default Editor;

const Wrapper = styled.div`
    margin-top: 10px;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
`;

const EditorContainer = styled.div`
    box-sizing: border-box;
    font-size: 16px;

    border-radius: 10px;
`;

const Title = styled.h3`
    font-size: 14px;
    color: #fff;
    font-family: sans-serif;
    margin: 0 10px;
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    background: #202020;
    border-radius: 10px 10px 0 0;
    padding: 5px;
    box-sizing: border-box;
`;

const EditorMain = styled.div`
    display: flex;
`;
