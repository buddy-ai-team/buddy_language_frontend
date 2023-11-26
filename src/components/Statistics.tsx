import Robot from '../images/Img/Robot.png';
import FreeIconScrabble7880Image from '../images/ImgStatictics/Component1_free_icon_scrabble_7880465_1.png';
import { StProps } from '../types';
import { Link } from "react-router-dom";

import {
    Property1Default,
    TopBar,
    SectionTitle,
    Text,
    TitleHeading,
    List1,
    GroupNumberOfMessages,
    NumberOfMessages,
    Title1,
    OutputNumberOfMessages,
    List2,
    NumberOfWordsStudied,
    Title2,
    OutputNumberOfWordsStudied,
    NumberOfLearningWords,
    OutputNumberOfLearningWords,
    Group,
    SectionLearnedWords,
    BoxIcon,
    Icon,
    Label,
    Title3,
    LabelViewList,
    SectionDurationOfMessages,
    OutputDurationOfMessages,
    SectionNumberDaysCommunication,
    OutputNumberDaysCommunication,
    SectionNumberConsecutiveCommunicationDays,
    OutputNumberConsecutiveCommunicationDays,
    BottomNav,
    ButtonHome,
    IconNav,
    TitleIcon,
    ButtonWordEditor,
    IconWordEditor,
    ButtonSettings,
    GroupLanguage,
    Content,
    IconBox,
    IconRobot,
    TitleStatistics
  } from './StyleStatistics';

export default function Statistics(props: StProps): JSX.Element { 
  
  return (
    <Property1Default className={props.className}>
      <TopBar>
        <Content>
          <TitleStatistics>{`Статистика`}</TitleStatistics>
          <IconBox>
            <IconRobot
                  src={Robot}
                  loading="lazy"
                  alt={ 'Robot Icon' }
                />
          </IconBox>
        </Content>
      </TopBar>
      <SectionTitle>
        <Text>
          <TitleHeading>{`Сообщения`}</TitleHeading>
        </Text>
      </SectionTitle>
      <List1>
        <GroupNumberOfMessages>
          <NumberOfMessages>
            <Title1>{`Общее количество`}</Title1>
            <OutputNumberOfMessages>{`150`}</OutputNumberOfMessages>
          </NumberOfMessages>
        </GroupNumberOfMessages>
      </List1>
      <SectionTitle>
        <Text>
          <TitleHeading>{`Слова`}</TitleHeading>
        </Text>
      </SectionTitle>
      <List2>
        <GroupLanguage>
          <NumberOfWordsStudied>
            <Title2>{`Количество изученных слов`}</Title2>
            <OutputNumberOfWordsStudied>{`500`}</OutputNumberOfWordsStudied>
          </NumberOfWordsStudied>
          <NumberOfLearningWords>
            <Title2>{`Слова, которые изучаются`}</Title2>
            <OutputNumberOfLearningWords>{`100`}</OutputNumberOfLearningWords>
          </NumberOfLearningWords>
        </GroupLanguage>
      </List2>
      <Group>
        <SectionLearnedWords>
          <BoxIcon>
            <Icon>{`📖`}</Icon>
          </BoxIcon>
          <Label>
            <Title3>{`Выученные слова`}</Title3>
          </Label>
          <LabelViewList>{`Просмотреть список`}</LabelViewList>
        </SectionLearnedWords>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
        <SectionDurationOfMessages>
          <BoxIcon>
            <Icon>{`⏱️`}</Icon>
          </BoxIcon>
          <Label>
            <Title3>{`Общая продолжительность сообщений`}</Title3>
          </Label>
          <OutputDurationOfMessages>{`3ч 15мин`}</OutputDurationOfMessages>
        </SectionDurationOfMessages>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
        <SectionNumberConsecutiveCommunicationDays>
          <BoxIcon>
            <Icon>{`🔥`}</Icon>
          </BoxIcon>
          <Label>
            <Title3>{`Сумма дней общения подряд `}</Title3>
          </Label>
          <OutputNumberConsecutiveCommunicationDays>{`5`}</OutputNumberConsecutiveCommunicationDays>
        </SectionNumberConsecutiveCommunicationDays>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
        <SectionNumberDaysCommunication>
          <BoxIcon>
            <Icon>{`📅`}</Icon>
          </BoxIcon>
          <Label>
            <Title3>{`Сумма дней общения всего`}</Title3>
          </Label>
          <OutputNumberDaysCommunication>{`30`}</OutputNumberDaysCommunication>
        </SectionNumberDaysCommunication>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
      </Group>
      <BottomNav>
        <ButtonHome>
          <IconNav>{`🏠`}</IconNav>
          <TitleIcon>{`Домой`}</TitleIcon>
        </ButtonHome>
        <ButtonWordEditor>
          <Link to="/get_word_editor">
            <IconWordEditor
              src={FreeIconScrabble7880Image}
              loading="lazy"
              alt={'free-icon-scrabble-7880465 1'}
            />
            <TitleIcon>{`Редактор слов`}</TitleIcon>
          </Link>
        </ButtonWordEditor>
        <ButtonSettings>
          <IconNav>{`⚙️`}</IconNav>
          <TitleIcon>{`Настройки`}</TitleIcon>
        </ButtonSettings>
      </BottomNav>
    </Property1Default>
  );
}