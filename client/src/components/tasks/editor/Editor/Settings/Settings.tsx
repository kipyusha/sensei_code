import React from "react";
import styled from "styled-components";
import CustomSelect from "../select/Select";
import { IEditorOptions } from "../interfaces";
import { fontSizeOptions, langOptions, themeOptions } from "./options";
import { getStyles } from "./styles";
import RunButton from "./RunButton/RunButton";

interface IProps {
  options: IEditorOptions;
  setOptions: React.Dispatch<React.SetStateAction<IEditorOptions>>;
  answer?: string,
  setisRightAnswer: React.Dispatch<React.SetStateAction<boolean>>
  setisStart: React.Dispatch<React.SetStateAction<boolean>>
  code?: string;
}

const Settings = ({ options, setOptions, setisRightAnswer, setisStart, answer, code }: IProps) => {

  const handleSubmit = () => {
    console.log("answer", answer, "code", code);
    if(answer && code) {
      setisStart(true);
      if (answer === code) {
        setisRightAnswer(true)
      } else {
        setisRightAnswer(false)
        setTimeout(() => {
          setisStart(false);
        }, 2000);
      }
    }
  }

  return (
    <SettingsContainer>
      <div>
        {/* SELECT THEME */}
        <label style={{ color: "#fff" }} htmlFor="themeSelect">
          Theme:
        </label>
        <CustomSelect
          name="themeSelect"
          styles={getStyles()}
          onChange={(curOption) => {
            curOption && setOptions({ ...options, theme: curOption.value });
          }}
          options={themeOptions}
          value={themeOptions.find((el) => el.value === options.theme)}
        />

        {/* SELECT LANG */}
        <label style={{ color: "#fff" }} htmlFor="langSelect">
          Language:
        </label>
        <CustomSelect
          name="langSelect"
          styles={getStyles()}
          onChange={(curOption) => {
            curOption &&
              setOptions({
                ...options,
                lang: { id: curOption.id, link: curOption.value },
              });
          }}
          options={langOptions}
          value={langOptions.find((el) => el.id === options.lang.id)}
        />

        <label style={{ color: "#fff" }} htmlFor="langSelect">
          Font-size:
        </label>
        <CustomSelect
          name="langSelect"
          styles={getStyles()}
          onChange={(curOption) => {
            curOption &&
              setOptions({
                ...options,
                fontSize: curOption.value,
              });
          }}
          options={fontSizeOptions}
          value={fontSizeOptions.find((el) => el.value === options.fontSize)}
        />
      </div>
      <RunButton handleSubmit={handleSubmit} />
    </SettingsContainer>
  );
};

export default Settings;

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 30px;
  width: 150px;
  background: #202020;
  min-height: 100%;
  max-height: 100%;
`;
