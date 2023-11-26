import Robot from '../images/Img/Robot.png';
import FreeIconScrabble7880Image from '../images/ImgStatictics/Component1_free_icon_scrabble_7880465_1.png';
import { StProps } from '../types';
//import api from "../apiClient/_Api";

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

//Пример использования
//GET запрос
// api.get('/user/get_by_telegram_id?id=123456789')
//   .then(async function (response) {
//     // обработка успешного запроса
//     console.log(response);
//     //Данные о пользователе в разделе data
//     const user = await response.data;
//     console.log(user.firstName);
//     console.log(user.lastName);
//     console.log(user.telegramId);
//   })
//   .catch(function (error) {
//     // обработка ошибки
//     console.log(error);
//   })
//   .finally(function () {
//     // выполняется всегда
//   });

  //POST запрос
  // api.post('/user/update', {
  //   id: "b524e7e7-766f-4e2d-81b3-91a234abd7dc",
  //   firstName: 'Bob',
  //   lastName: 'Smit',
  //   telegramId: "123456789"
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

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
        <SectionLearnedWords href="/get_list_studied_words" underline="none">
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
        <ButtonWordEditor href="/get_word_editor" underline="none">
          <IconWordEditor
            src={FreeIconScrabble7880Image}
            loading="lazy"
            alt={'free-icon-scrabble-7880465 1'}
          />
          <TitleIcon>{`Редактор слов`}</TitleIcon>
        </ButtonWordEditor>
        <ButtonSettings href="/get_settings" underline="none">
          <IconNav>{`⚙️`}</IconNav>
          <TitleIcon>{`Настройки`}</TitleIcon>
        </ButtonSettings>
      </BottomNav>
    </Property1Default>
  );
}