import BigRobot from '../images/ImgSetting/BigRobot.png';
import Arrow from '../images/Img/Arrow.png';
import Robot from '../images/Img/Robot.png';
import { StProps } from '../types';
import {InputLabel, MenuItem, FormControl, Box, Link } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';

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
  List7,
  Item3,
  BoxIconSound1,
  IconSound1,
  BoxTitleSound1,
  TitleVoice,
  Item1,
  BoxIconSound2,
  IconSound2,
  BoxTitleSound2,
  Item2,
  BoxIconSound3,
  IconSound3,
  BoxTitleSound3,
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
  LanguageTitle
} from './StyleSettings';

export default function Settings(props: StProps): JSX.Element {

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Property1Default className={props.className}>
      <ImgBigRobot
        src={BigRobot}
        loading="lazy"
        alt={ 'Big Robot' }
      />
      <TopBar>
        <Content>
          <Link href="/">
            <IcLeft>
              <Shape src={Arrow} loading="lazy" alt={'Arrow'} />
            </IcLeft>
          </Link>
          <TitleSetting>{`Настройки`}</TitleSetting>
          <IconBox>
            <IconRobot>
              <ImgRobot
                src={Robot}
                loading="lazy"
                alt={
                  'Robot Icon'
                }
              />
            </IconRobot>
          </IconBox>
        </Content>
      </TopBar>
      <SectionTitle>
        <Text>
          <Title>{`Голосовой выбор бота`}</Title>
        </Text>
      </SectionTitle>
      <List7>
        <Item1>
          <BoxIconSound1>
            <IconSound1>{`🔊`}</IconSound1>
          </BoxIconSound1>
          <BoxTitleSound1>
            <TitleVoice>{`Голосовой вариант 1`}</TitleVoice>
          </BoxTitleSound1>
        </Item1>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
        <Item2>
          <BoxIconSound2>
            <IconSound2>{`🔊`}</IconSound2>
          </BoxIconSound2>
          <BoxTitleSound2>
            <TitleVoice>{`Голосовой вариант 2`}</TitleVoice>
          </BoxTitleSound2>
        </Item2>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
        <Item3>
          <BoxIconSound3>
            <IconSound3>{`🔊`}</IconSound3>
          </BoxIconSound3>
          <BoxTitleSound3>
            <TitleVoice>{`Голосовой вариант 3`}</TitleVoice>
          </BoxTitleSound3>
        </Item3>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
      </List7>
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
          <DescriptionRole placeholder="Ввод описания роли"/>
        </GroupDescriptionRole>
      </SectionRoleBot2>
      <SectionLanguage>
        <LanguageTitle>
          <Title>{`Выбрать язык`}</Title>
        </LanguageTitle>
      </SectionLanguage>
      <SelectLanguage>
        <Box id="LabelNativeLangue" sx={{
          display: 'inline-flex',
          position: 'relative',
          border: '#001434',
          isolation: 'isolate',
          flex: 1,
          marginRight: '4px'
        }}>
          <FormControl fullWidth>
            <InputLabel>Родной язык</InputLabel>
            <Select
              labelId="LabelNativeLangue"
              id="SelectNativeLangue"
              value={age}
              onChange={handleChange}
              label="NativeLangue"
            >
              <MenuItem value={10}>Русский</MenuItem>
              <MenuItem value={20}>Английский</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box id="LabelStudingLanguage" sx={{
          display: 'inline-flex',
          position: 'relative',
          border: '#001434',
          isolation: 'isolate',
          flex: 1,
          marginLeft: '4px'
        }}>
          <FormControl fullWidth>
            <InputLabel>Изучаемый язык</InputLabel>
            <Select
              labelId="LabelStudingLanguage"
              id="SelectStudingLanguage"
              value={age}
              onChange={handleChange}
              label="StudingLanguage"
            >
              <MenuItem value={10}>Русский</MenuItem>
              <MenuItem value={20}>Английский</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </SelectLanguage>
      <GroupButton>
        <ButtonExit variant="contained" href="/">
          <TitleButtonExit>{`Выйти`}</TitleButtonExit>
        </ButtonExit>
        <ButtonSave variant="contained">
          <TitleButtonSave>{`Сохранить`}</TitleButtonSave>
        </ButtonSave>
      </GroupButton>
    </Property1Default>
  );
}