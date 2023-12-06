import BigRobot from "../images/ImgSetting/BigRobot.png";
import Arrow from "../images/Img/Arrow.png";
import Robot from "../images/Img/Robot.png";
import { StProps } from "../types";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Box,
  Link,
  Slider,
} from "@mui/material";

import {
  Property1Default,
  ImgBigRobot,
  TopBar,
  Content,
  IcLeft,
  Shape,
  TitleSetting,
  IconBox,
  IconRobot,
  ImgRobot,
  SectionTitle,
  Text,
  Title,
  ListSounds,
  BoxIconSound1,
  IconSound1,
  BoxTitleSound1,
  TitleVoice,
  Item1,
  BoxIconSound2,
  IconSound2,
  BoxTitleSound2,
  Item2,
  SectionRoleBot,
  TitleRoleBot,
  SectionRoleBot1,
  TitleRole,
  InputRoleBot,
  SectionRoleBot2,
  GroupDescriptionRole,
  DescriptionRole,
  GroupButton,
  ButtonExit,
  TitleButtonExit,
  TitleButtonSave,
  ButtonSave,
  SelectLanguage,
  SectionLanguage,
  LanguageTitle,
  SectionVoiceSpeed,
  BoxVoiceSpeed,
  SectionRoleBot3,
  ApplyingExistingRoles,
} from "./StyleSettings";

export default function Settings(props: StProps): JSX.Element {
  const [nativeLanguage, setNativeLanguage] = React.useState("");
  const [learningLanguage, setLearningLanguage] = React.useState("");
  const [voiceType, setVoiceType] = React.useState("");
  const [selectedRole, setSelectedRole] = React.useState("");
  const marks = [
    {
      value: 0,
      label: "0.5x",
    },
    {
      value: 1,
      label: "1x",
    },
    {
      value: 2,
      label: "1.5x",
    },
    {
      value: 3,
      label: "2x",
    },
    {
      value: 4,
      label: "2.5x",
    },
  ];

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedRole(event.target.value);
  };

  function valueLabelFormat(value: number) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }

  const handleNativeLanguageChange = (event: SelectChangeEvent) => {
    const selectedLanguage = event.target.value as string;
    if (selectedLanguage !== learningLanguage) {
      setNativeLanguage(selectedLanguage);
    } else {
      console.log("Родной язык не может быть изучаемым");
    }
  };

  const handleLearningLanguageChange = (event: SelectChangeEvent) => {
    const selectedLanguage = event.target.value as string;
    // Проверяем, чтобы выбранный язык для изучения не совпадал с выбранным родным языком
    if (selectedLanguage !== nativeLanguage) {
      setLearningLanguage(selectedLanguage);
    } else {
      console.log("Изучаемый язык не может быть родным");
    }

    // Дополнительная проверка на совпадение языков
    if (selectedLanguage === nativeLanguage) {
      console.log("Родной и изучаемый языки не могут совпадать");
    }
  };

  const handleVoiceTypeChange = (selectedVoice: string) => {
    setVoiceType(selectedVoice);
  };

  return (
    <Property1Default className={props.TelegramId}>
      <ImgBigRobot src={BigRobot} loading="lazy" alt={"Big Robot"} />
      <TopBar>
        <Content>
          <Link href="/">
            <IcLeft>
              <Shape src={Arrow} loading="lazy" alt={"Arrow"} />
            </IcLeft>
          </Link>
          <TitleSetting>{`Настройки`}</TitleSetting>
          <IconBox>
            <IconRobot>
              <ImgRobot src={Robot} loading="lazy" alt={"Robot Icon"} />
            </IconRobot>
          </IconBox>
        </Content>
      </TopBar>
      <SectionTitle>
        <Text>
          <Title>{`Голосовой выбор бота`}</Title>
        </Text>
      </SectionTitle>
      <ListSounds>
        <Item1 onClick={() => handleVoiceTypeChange("male")}>
          <BoxIconSound1
            style={{
              backgroundColor: voiceType === "male" ? "#204981" : "transparent",
            }}
          >
            <IconSound1>{`🔊`}</IconSound1>
          </BoxIconSound1>
          <BoxTitleSound1
            style={{
              textDecorationColor:
                voiceType === "male" ? "#7FFFD4" : "transparent",
            }}
          >
            <TitleVoice>{`Мужской голос`}</TitleVoice>
          </BoxTitleSound1>
        </Item1>
        <div style={{ borderBottom: "1px solid #B1BCCD", width: "100%" }} />
        <Item2 onClick={() => handleVoiceTypeChange("female")}>
          <BoxIconSound2
            style={{
              backgroundColor:
                voiceType === "female" ? "#204981" : "transparent",
            }}
          >
            <IconSound2>{`🔊`}</IconSound2>
          </BoxIconSound2>
          <BoxTitleSound2>
            <TitleVoice>{`Женский голос`}</TitleVoice>
          </BoxTitleSound2>
        </Item2>
        <div style={{ borderBottom: "1px solid #B1BCCD", width: "100%" }} />
      </ListSounds>
      <SectionVoiceSpeed>
        <Title>{`Скорость голоса`}</Title>
        <BoxVoiceSpeed>
          <Slider
            aria-label="Restricted values"
            defaultValue={1}
            valueLabelFormat={valueLabelFormat}
            //getAriaValueText={valuetext}
            step={null}
            valueLabelDisplay="off"
            marks={marks}
            max={4}
          />
        </BoxVoiceSpeed>
      </SectionVoiceSpeed>
      <SectionRoleBot>
        <TitleRoleBot>
          <Title>{`Выбрать роль бота`}</Title>
        </TitleRoleBot>
      </SectionRoleBot>
      <SectionRoleBot1>
        <TitleRole>{`Название роли`}</TitleRole>
        <InputRoleBot placeholder="Ввод роли бота" />
      </SectionRoleBot1>
      <SectionRoleBot2>
        <TitleRole>{`Описание роли`}</TitleRole>
        <GroupDescriptionRole>
          <DescriptionRole placeholder="Ввод описания роли" />
        </GroupDescriptionRole>
      </SectionRoleBot2>
      <SectionRoleBot3>
        <TitleRole>{`Существующие роли`}</TitleRole>
        <ApplyingExistingRoles>
          <FormControl fullWidth>
            <InputLabel>Роли</InputLabel>
            <Select
              id="SelectRole"
              value={selectedRole}
              onChange={handleChange}
            >
              <MenuItem value={10}>Default</MenuItem>
            </Select>
          </FormControl>
        </ApplyingExistingRoles>
      </SectionRoleBot3>
      <SectionLanguage>
        <LanguageTitle>
          <Title>{`Выбрать язык`}</Title>
        </LanguageTitle>
      </SectionLanguage>
      <SelectLanguage>
        <Box
          sx={{
            display: "inline-flex",
            position: "relative",
            border: "#001434",
            isolation: "isolate",
            flex: 1,
            marginRight: "4px",
          }}
        >
          <FormControl fullWidth>
            <InputLabel>Родной язык</InputLabel>
            <Select
              id="SelectNativeLangue"
              value={nativeLanguage}
              onChange={handleNativeLanguageChange}
            >
              <MenuItem value={"Русский"}>Русский</MenuItem>
              <MenuItem value={"Английский"}>Английский</MenuItem>
              <MenuItem value={"Французский"}>Французский</MenuItem>
              <MenuItem value={"Немецкий"}>Немецкий</MenuItem>
              <MenuItem value={"Арабский"}>Арабский</MenuItem>
              <MenuItem value={"Итальянский"}>Итальянский</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: "inline-flex",
            position: "relative",
            border: "#001434",
            isolation: "isolate",
            flex: 1,
            marginLeft: "4px",
          }}
        >
          <FormControl fullWidth>
            <InputLabel>Изучаемый язык</InputLabel>
            <Select
              id="SelectStudingLanguage"
              value={learningLanguage}
              onChange={handleLearningLanguageChange}
            >
              <MenuItem
                value={"Русский"}
                disabled={nativeLanguage === "Русский"}
              >
                Русский
              </MenuItem>
              <MenuItem
                value={"Английский"}
                disabled={nativeLanguage === "Английский"}
              >
                Английский
              </MenuItem>
              <MenuItem
                value={"Французский"}
                disabled={nativeLanguage === "Французский"}
              >
                Французский
              </MenuItem>
              <MenuItem
                value={"Немецкий"}
                disabled={nativeLanguage === "Немецкий"}
              >
                Немецкий
              </MenuItem>
              <MenuItem
                value={"Арабский"}
                disabled={nativeLanguage === "Арабский"}
              >
                Арабский
              </MenuItem>
              <MenuItem
                value={"Итальянский"}
                disabled={nativeLanguage === "Итальянский"}
              >
                Итальянский
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </SelectLanguage>
      <GroupButton>
        <ButtonExit variant="contained" href="/">
          <TitleButtonExit>{`Выйти`}</TitleButtonExit>
        </ButtonExit>
        <ButtonSave variant="contained" href="/">
          <TitleButtonSave>{`Сохранить`}</TitleButtonSave>
        </ButtonSave>
      </GroupButton>
    </Property1Default>
  );
}
