import Robot from '../images/Img/Robot.png';
import FreeIconScrabble7880Image from '../images/ImgStatictics/Component1_free_icon_scrabble_7880465_1.png';
import { StProps } from '../types';
import { getUserByTelegramId, getWordsByAccountId } from "../apiService";
import { useEffect, useState } from 'react';
import { WordEntity, WordEntityStatus } from '../apiClient';

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
  SectionLearningdWords,
  SectionNumberDaysCommunication,
  OutputNumberDaysCommunication,
  BottomNav,
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

export default function Statistics(props: StProps): JSX.Element | null {
  const [userWords, setUserWords] = useState<WordEntity[]>([]);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const user = await getUserByTelegramId(props.initData, props.TelegramId);
        const words = await getWordsByAccountId(props.initData, user.id);

        setUserWords(words);
      } catch (error) {
        console.error('Error fetching words:', error);
      }
    };

    fetchWords();

  }, [props.TelegramId, props.initData]);

  const studingWords = userWords.filter(word => word.wordStatus === WordEntityStatus.NUMBER_1);
  const studiedWords = userWords.filter(word => word.wordStatus === WordEntityStatus.NUMBER_0);

  return (
    <Property1Default className={props.TelegramId}>
      <TopBar>
        <Content>
          <TitleStatistics>{`Статистика`}</TitleStatistics>
          <IconBox>
            <IconRobot
              src={Robot}
              loading="lazy"
              alt={'Robot Icon'}
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
            <OutputNumberOfWordsStudied>{studiedWords.length}</OutputNumberOfWordsStudied>
          </NumberOfWordsStudied>
          <NumberOfLearningWords>
            <Title2>{`Слова, которые изучаются`}</Title2>
            <OutputNumberOfLearningWords>{studingWords.length}</OutputNumberOfLearningWords>
          </NumberOfLearningWords>
        </GroupLanguage>
      </List2>
      <Group>
        <SectionLearnedWords to="/get_list_studied_words">
          <BoxIcon>
            <Icon>{`📖`}</Icon>
          </BoxIcon>
          <Label>
            <Title3>{`Выученные слова`}</Title3>
          </Label>
          <LabelViewList>{`Просмотреть список`}</LabelViewList>
        </SectionLearnedWords>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
        <SectionLearningdWords to="/get_list_studing_words">
          <BoxIcon>
            <Icon>{`⏱️`}</Icon>
          </BoxIcon>
          <Label>
            <Title3>{`Слова на изучении`}</Title3>
          </Label>
          <LabelViewList>{`Просмотреть список`}</LabelViewList>
        </SectionLearningdWords>
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
        <ButtonWordEditor to="/get_word_editor">
          <IconWordEditor
            src={FreeIconScrabble7880Image}
            loading="lazy"
            alt={'free-icon-scrabble-7880465 1'}
          />
          <TitleIcon>{`Редактор слов`}</TitleIcon>
        </ButtonWordEditor>
        <ButtonSettings to="/get_settings">
          <IconNav>{`⚙️`}</IconNav>
          <TitleIcon>{`Настройки`}</TitleIcon>
        </ButtonSettings>
      </BottomNav>
    </Property1Default>
  );
}