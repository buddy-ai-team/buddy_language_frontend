import ShapeImage from '../images/PageStatictics/_shape.png';
import Vector200Image from '../images/PageStatictics/_Vector_200.png';
import Vector2001Image from '../images/PageStatictics/_Vector_200_1.png';
import Vector2002Image from '../images/PageStatictics/_Vector_200_2.png';
import Vector2003Image from '../images/PageStatictics/_Vector_200_3.png';
import FreeIconScrabble7880Image from '../images/PageStatictics/_free_icon_scrabble_7880465_1.png';
import { StProps } from '../types';

//import Link from "next/link";

// const pages = [
//     {href:'/', name:'Home'}
// ];

import {
    Property1Default,
    TopBar,
    Content,
    IcLeft,
    Shape,
    Title,
    IconButtons,
    Icon1,
    TabGroup,
    Tab,
    Title1,
    Tab1,
    Title2,
    Tab2,
    Title3,
    SectionTitle,
    Text,
    Title4,
    List,
    Row,
    Metric,
    Title5,
    Data,
    SectionTitle1,
    Text1,
    Title6,
    List1,
    Row1,
    Metric1,
    Title7,
    Data1,
    Metric2,
    Title8,
    Data2,
    List2,
    Item,
    Frame,
    Icon2,
    Frame427318906,
    Title9,
    Subtitle,
    Vector200,
    Item1,
    Frame1,
    Icon3,
    Frame4273189061,
    Title10,
    Subtitle1,
    Vector2001,
    Item2,
    Frame2,
    Icon4,
    Frame4273189062,
    Title11,
    Subtitle2,
    Vector2002,
    Item3,
    Frame3,
    Icon5,
    Frame4273189063,
    Title12,
    Subtitle3,
    Vector2003,
    BottomNav,
    Tab3,
    Icon6,
    Title13,
    Tab4,
    FreeIconScrabble7880,
    Title14,
    Tab5,
    Icon7,
    Title15
  } from './StyleStatistics';

export default function Statistics(props: StProps): JSX.Element {
    
    return (
        <Property1Default className={props.className}>
      <TopBar>
        <Content>
          <IcLeft>
            <Shape src={ShapeImage} loading="lazy" alt={'shape'} />
          </IcLeft>
          <Title>{`Статистика`}</Title>
          <IconButtons>
            <Icon1>{`😃`}</Icon1>
          </IconButtons>
        </Content>
      </TopBar>
      <TabGroup>
        <Tab>
          <Title1>{`Сообщения`}</Title1>
        </Tab>
        <Tab1>
          <Title2>{`Слова`}</Title2>
        </Tab1>
        <Tab2>
          <Title3>{`Достижения`}</Title3>
        </Tab2>
      </TabGroup>
      <SectionTitle>
        <Text>
          <Title4>{`Сообщения`}</Title4>
        </Text>
      </SectionTitle>
      <List>
        <Row>
          <Metric>
            <Title5>{`Общее количество`}</Title5>
            <Data>{`150`}</Data>
          </Metric>
        </Row>
      </List>
      <SectionTitle1>
        <Text1>
          <Title6>{`Слова`}</Title6>
        </Text1>
      </SectionTitle1>
      <List1>
        <Row1>
          <Metric1>
            <Title7>{`Количество изученных слов`}</Title7>
            <Data1>{`500`}</Data1>
          </Metric1>
          <Metric2>
            <Title8>{`Слова, которые изучаются`}</Title8>
            <Data2>{`100`}</Data2>
          </Metric2>
        </Row1>
      </List1>
      <List2>
        <Item>
          <Frame>
            <Icon2>{`📖`}</Icon2>
          </Frame>
          <Frame427318906>
            <Title9>{`Выученные слова`}</Title9>
          </Frame427318906>
          <Subtitle>{`Просмотреть список`}</Subtitle>
          <Vector200 src={Vector200Image} loading="lazy" alt={'Vector 200'} />
        </Item>
        <Item1>
          <Frame1>
            <Icon3>{`⏱️`}</Icon3>
          </Frame1>
          <Frame4273189061>
            <Title10>{`Общая продолжительность сообщений`}</Title10>
          </Frame4273189061>
          <Subtitle1>{`3ч 15мин`}</Subtitle1>
          <Vector2001 src={Vector2001Image} loading="lazy" alt={'Vector 200'} />
        </Item1>
        <Item2>
          <Frame2>
            <Icon4>{`🔥`}</Icon4>
          </Frame2>
          <Frame4273189062>
            <Title11>{`Сумма дней общения подряд `}</Title11>
          </Frame4273189062>
          <Subtitle2>{`5`}</Subtitle2>
          <Vector2002 src={Vector2002Image} loading="lazy" alt={'Vector 200'} />
        </Item2>
        <Item3>
          <Frame3>
            <Icon5>{`📅`}</Icon5>
          </Frame3>
          <Frame4273189063>
            <Title12>{`Сумма дней общения всего`}</Title12>
          </Frame4273189063>
          <Subtitle3>{`30`}</Subtitle3>
          <Vector2003 src={Vector2003Image} loading="lazy" alt={'Vector 200'} />
        </Item3>
      </List2>
      <BottomNav>
        <Tab3>
          <Icon6>{`🏠`}</Icon6>
          <Title13>{`Домой`}</Title13>
        </Tab3>
        <Tab4>
          <FreeIconScrabble7880
            src={FreeIconScrabble7880Image}
            loading="lazy"
            alt={'free-icon-scrabble-7880465 1'}
          />
          <Title14>{`Редактор слов`}</Title14>
        </Tab4>
        <Tab5>
          <Icon7>{`⚙️`}</Icon7>
          <Title15>{`Настройки`}</Title15>
        </Tab5>
      </BottomNav>
    </Property1Default>
    );
}