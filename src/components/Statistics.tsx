import Robot from '../images/Img/Robot.png';
import FreeIconScrabble7880Image from '../images/ImgStatictics/Component1_free_icon_scrabble_7880465_1.png';
import { StProps } from '../types';
import { Link } from 'react-router-dom';

import {
    Property1Default,
    TopBar,
    SectionTitle,
    Text,
    Title3,
    List,
    Row,
    Metric,
    Title4,
    Data,
    SectionTitle1,
    Text1,
    Title5,
    List1,
    Metric1,
    Title6,
    Data1,
    Metric2,
    Title7,
    Data2,
    List2,
    Item,
    Frame,
    Icon1,
    Frame427318906,
    Title8,
    Subtitle,
    Item1,
    Frame1,
    Icon2,
    Frame4273189061,
    Title9,
    Subtitle1,
    Item2,
    Frame2,
    Icon3,
    Frame4273189062,
    Title10,
    Subtitle2,
    Item3,
    Frame3,
    Icon4,
    Frame4273189063,
    Title11,
    Subtitle3,
    BottomNav,
    Tab3,
    Icon5,
    Title12,
    Tab4,
    FreeIconScrabble7880,
    Title13,
    Tab5,
    Icon6,
    Title14,
    Row1,
    Content,
    IconButtons,
    IconRobot,
    Title15
  } from './StyleStatistics';

export default function Statistics(props: StProps): JSX.Element { 
  
  return (
    <Property1Default className={props.className}>
      <TopBar>
        <Content>
          <Title15>{`Статистика`}</Title15>
          <IconButtons>
            <IconRobot
                  src={Robot}
                  loading="lazy"
                  alt={ 'Robot Icon' }
                />
          </IconButtons>
        </Content>
      </TopBar>
      <SectionTitle>
        <Text>
          <Title3>{`Сообщения`}</Title3>
        </Text>
      </SectionTitle>
      <List>
        <Row>
          <Metric>
            <Title4>{`Общее количество`}</Title4>
            <Data>{`150`}</Data>
          </Metric>
        </Row>
      </List>
      <SectionTitle1>
        <Text1>
          <Title5>{`Слова`}</Title5>
        </Text1>
      </SectionTitle1>
      <List1>
        <Row1>
          <Metric1>
            <Title6>{`Количество изученных слов`}</Title6>
            <Data1>{`500`}</Data1>
          </Metric1>
          <Metric2>
            <Title7>{`Слова, которые изучаются`}</Title7>
            <Data2>{`100`}</Data2>
          </Metric2>
        </Row1>
      </List1>
      <List2>
        <Item>
          <Frame>
            <Icon1>{`📖`}</Icon1>
          </Frame>
          <Frame427318906>
            <Title8>{`Выученные слова`}</Title8>
          </Frame427318906>
          <Subtitle>{`Просмотреть список`}</Subtitle>
        </Item>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
        <Item1>
          <Frame1>
            <Icon2>{`⏱️`}</Icon2>
          </Frame1>
          <Frame4273189061>
            <Title9>{`Общая продолжительность сообщений`}</Title9>
          </Frame4273189061>
          <Subtitle1>{`3ч 15мин`}</Subtitle1>
        </Item1>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
        <Item2>
          <Frame2>
            <Icon3>{`🔥`}</Icon3>
          </Frame2>
          <Frame4273189062>
            <Title10>{`Сумма дней общения подряд `}</Title10>
          </Frame4273189062>
          <Subtitle2>{`5`}</Subtitle2>
        </Item2>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
        <Item3>
          <Frame3>
            <Icon4>{`📅`}</Icon4>
          </Frame3>
          <Frame4273189063>
            <Title11>{`Сумма дней общения всего`}</Title11>
          </Frame4273189063>
          <Subtitle3>{`30`}</Subtitle3>
        </Item3>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
      </List2>
      <BottomNav>
        <Tab3>
          <Icon5>{`🏠`}</Icon5>
          <Title12>{`Домой`}</Title12>
        </Tab3>
        <Tab4>
          <Link to="/get_word_editor">
            <FreeIconScrabble7880
              src={FreeIconScrabble7880Image}
              loading="lazy"
              alt={'free-icon-scrabble-7880465 1'}
            />
            <Title13>{`Редактор слов`}</Title13>
          </Link>
        </Tab4>
        <Tab5>
          <Link to="/get_settings">
            <Icon6>{`⚙️`}</Icon6>
            <Title14>{`Настройки`}</Title14>
          </Link>
        </Tab5>
      </BottomNav>
    </Property1Default>
  );
}