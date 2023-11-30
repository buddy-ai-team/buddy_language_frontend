import Arrow from '../images/Img/Arrow.png';
import Robot from '../images/Img/Robot.png';
import PencilEdit from '../images/ImgWordEditor/free-icon-edit-420140 1.png';
import { StProps } from '../types';
import { Link } from 'react-router-dom';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {InputLabel, MenuItem, FormControl } from '@mui/material';
import * as React from 'react';

import {
    Property1Default,
    TopBar,
    Content,
    IcLeft,
    Shape,
    Title,
    IconBox,
    IconRobot,
    List,
    ItemToStudy,
    FirstWordInList,
    TitleWordFirst,
    TitleTranslationFirst,
    Status,
    IconButtonToStudy,
    IconPencilToStudy,
    ItemSkipped,
    SecondWordInList,
    TitleWordSecond,
    TitleTranslationSecond,
    IconButtonSkipped,
    ItemStudied,
    ThirdWordInList,
    TitleWordThird,
    TitleTranslationThird,
    IconButtonStudied,
    GroupButtons,
    ButtonDelete,
    TitleDelete,
    ButtonAddWord,
    TitleAddWord,
    SectionAddWord,
    TitleWord,
    TextFieldAddWord,
    Info,
    SectionWordTranslation,
    TextFieldWordTranslation,
    SectionWordSearch,
    TextFieldWordSearch,
    SectionSelectStatus,
    TextFieldSelectStatus
} from './StyleWordEditor';

export default function WordEditor(props: StProps): JSX.Element {
  
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
      <Property1Default className={props.className}>
        <TopBar>
          <Content>
            <Link to="/">
              <IcLeft>
                <Shape src={Arrow} loading="lazy" alt={'Arrow'} />
              </IcLeft>
            </Link>
            <Title>{`Редактор слов`}</Title>
            <IconBox>
              <IconRobot
                src={Robot}
                loading="lazy"
                alt={ 'Robot Icon' }
              />
            </IconBox>
          </Content>
        </TopBar>
        <List>
          <ItemToStudy>
            <FirstWordInList>
              <TitleWordFirst>{`Слово 1`}</TitleWordFirst>
              <TitleTranslationFirst>{`Перевод 1`}</TitleTranslationFirst>
            </FirstWordInList>
            <Status>
              {`На изучении`}
            </Status>
            <IconButtonToStudy>
              <IconPencilToStudy
                src={PencilEdit}
                loading="lazy"
                alt={
                  'Pencil'
                }
              />
            </IconButtonToStudy>
          </ItemToStudy>
          <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
          <ItemSkipped>
            <SecondWordInList>
              <TitleWordSecond>{`Слово 2`}</TitleWordSecond>
              <TitleTranslationSecond>{`Перевод 2`}</TitleTranslationSecond>
            </SecondWordInList>
            <Status>{`Пропущено`}</Status>
            <IconButtonSkipped>
              <IconPencilToStudy
                src={PencilEdit}
                loading="lazy"
                alt={
                  'Edit'
                }
              />
            </IconButtonSkipped>
          </ItemSkipped>
          <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
          <ItemStudied>
            <ThirdWordInList>
              <TitleWordThird>{`Слово 3`}</TitleWordThird>
              <TitleTranslationThird>{`Перевод 3`}</TitleTranslationThird>
            </ThirdWordInList>
            <Status>{`Изучено`}</Status>
            <IconButtonStudied>
              <IconPencilToStudy
                src={PencilEdit}
                loading="lazy"
                alt={ 'Pencil' }
              />
            </IconButtonStudied>
          </ItemStudied>
          <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
        </List>
        <SectionAddWord>
          <TitleWord>{`Добавить слово`}</TitleWord>
          <TextFieldAddWord placeholder="Вводите слова, разделенные запятыми" />
          <Info>{`Слова будут добавлены в список изучения`}</Info>
        </SectionAddWord>
        <SectionWordTranslation>
          <TitleWord>{`Перевод слов`}</TitleWord>
          <TextFieldWordTranslation placeholder="Вводите перевод слов" />
          <Info>{`Перевод появится под словами в списке изучения`}</Info>
        </SectionWordTranslation>
        <SectionSelectStatus>
          <TextFieldSelectStatus>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Выбрать статус</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                label="NativeLangue"
              >
                <MenuItem value={10}>На изучении</MenuItem>
                <MenuItem value={20}>Пропущено</MenuItem>
                <MenuItem value={30}>Изучено</MenuItem>
              </Select>
            </FormControl>
          </TextFieldSelectStatus>
        </SectionSelectStatus>
        <SectionWordSearch>
          <TitleWord>{`Поиск слов`}</TitleWord>
          <TextFieldWordSearch placeholder="Введите ключевое слово" />
          <Info>{`Выполните поиск слов в списке`}</Info>
        </SectionWordSearch>
        <GroupButtons>
          <ButtonDelete variant="contained">
            <TitleDelete>{`Удалить слово`}</TitleDelete>
          </ButtonDelete>
          <ButtonAddWord variant="contained">
            <TitleAddWord>{`Добавить слово`}</TitleAddWord>
          </ButtonAddWord>
        </GroupButtons>
      </Property1Default>
    );
}


//{`Слово 1`}