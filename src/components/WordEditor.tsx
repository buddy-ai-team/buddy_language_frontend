import Arrow from '../images/Img/Arrow.png';
import Robot from '../images/Img/Robot.png';
import RobotLearningWords from '../images/ImgWordEditor/RobotLearningWords.png';
import Vector200Image from '../images/ImgWordEditor/_Vector_200.png';
import Vector2001Image from '../images/ImgWordEditor/_Vector_200_1.png';
import Vector2002Image from '../images/ImgWordEditor/_Vector_200_2.png';
import { StProps } from '../types';
import { Link } from 'react-router-dom';

import {
    Property1Default,
    TopBar,
    Content,
    IcLeft,
    Shape,
    Title,
    IconButtons,
    IconRobot,
    TabGroup,
    ButtonList,
    TitleButtons,
    ButtonImport,
    ButtonSearch,
    List,
    Item,
    FirstWordInList,
    Title4,
    Subtitle,
    Status,
    IconButtons1,
    IconRobotLearningWords,
    Vector200,
    Item1,
    SecondWordInList,
    Title5,
    Subtitle2,
    IconButtons2,
    Vector2001,
    Item2,
    ThirdWordInList,
    Title6,
    Subtitle4,
    IconButtons3,
    Vector2002,
    Button1,
    Seconday,
    Title7,
    Primary,
    Title8,
    Input1,
    Title9,
    Textfield,
    Text,
    Info,
    Input2,
    Title10,
    Textfield1,
    Text1,
    Info1,
    Input3,
    Title11,
    Textfield2,
    Text2,
    Info2
} from './StyleWordEditor';

export default function WordEditor(props: StProps): JSX.Element {
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
            <IconButtons>
              <IconRobot
                src={Robot}
                loading="lazy"
                alt={ 'Robot Icon' }
              />
            </IconButtons>
          </Content>
        </TopBar>
        <TabGroup>
          <ButtonList>
            <TitleButtons>{`Список`}</TitleButtons>
          </ButtonList>
          <ButtonImport>
            <TitleButtons>{`Импорт`}</TitleButtons>
          </ButtonImport>
          <ButtonSearch>
            <TitleButtons>{`Поиск`}</TitleButtons>
          </ButtonSearch>
        </TabGroup>
        <List>
          <Item>
            <FirstWordInList>
              <Title4>{`Слово 1`}</Title4>
              <Subtitle>{`Перевод 1`}</Subtitle>
            </FirstWordInList>
            <Status>
              {`Статус: 
  На изучении`}
            </Status>
            <IconButtons1>
              <IconRobotLearningWords
                src={RobotLearningWords}
                loading="lazy"
                alt={
                  'Robot Icon'
                }
              />
            </IconButtons1>
            <Vector200 src={Vector200Image} loading="lazy" alt={'Vector 200'} />
          </Item>
          <Item1>
            <SecondWordInList>
              <Title5>{`Слово 2`}</Title5>
              <Subtitle2>{`Перевод 2`}</Subtitle2>
            </SecondWordInList>
            <Status>{`Статус: Пропущено`}</Status>
            <IconButtons2>
              <IconRobotLearningWords
                src={RobotLearningWords}
                loading="lazy"
                alt={
                  'Robot Icon'
                }
              />
            </IconButtons2>
            <Vector2001 src={Vector2001Image} loading="lazy" alt={'Vector 200'} />
          </Item1>
          <Item2>
            <ThirdWordInList>
              <Title6>{`Слово 3`}</Title6>
              <Subtitle4>{`Перевод 3`}</Subtitle4>
            </ThirdWordInList>
            <Status>{`Статус: Изучено`}</Status>
            <IconButtons3>
              <IconRobotLearningWords
                src={RobotLearningWords}
                loading="lazy"
                alt={ 'Robot Icon' }
              />
            </IconButtons3>
            <Vector2002 src={Vector2002Image} loading="lazy" alt={'Vector 200'} />
          </Item2>
        </List>
        <Button1>
          <Seconday>
            <Title7>{`Очистить список`}</Title7>
          </Seconday>
          <Primary>
            <Title8>{`Добавить слово`}</Title8>
          </Primary>
        </Button1>
        <Input1>
          <Title9>{`Добавить слово`}</Title9>
          <Textfield>
            <Text>{`Ввести слово`}</Text>
          </Textfield>
          <Info>{`Перевод рядом со словом`}</Info>
        </Input1>
        <Input2>
          <Title10>{`Импорт слов`}</Title10>
          <Textfield1>
            <Text1>{`Вводите слова, разделенные запятыми`}</Text1>
          </Textfield1>
          <Info1>{`Слова будут добавлены в список`}</Info1>
        </Input2>
        <Input3>
          <Title11>{`Поиск слов`}</Title11>
          <Textfield2>
            <Text2>{`Введите ключевое слово`}</Text2>
          </Textfield2>
          <Info2>{`Выполните поиск слов в списке`}</Info2>
        </Input3>
      </Property1Default>
    );
}