import Arrow from '../images/Img/Arrow.png';
import Robot from '../images/Img/Robot.png';
import PencilEdit from '../images/ImgWordEditor/free-icon-edit-420140 1.png';
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
    List,
    Item,
    FirstWordInList,
    Title4,
    Subtitle,
    Status,
    IconButtons1,
    IconRobotLearningWords,
    Item1,
    SecondWordInList,
    Title5,
    Subtitle2,
    IconButtons2,
    Item2,
    ThirdWordInList,
    Title6,
    Subtitle4,
    IconButtons3,
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
                src={PencilEdit}
                loading="lazy"
                alt={
                  'Pencil'
                }
              />
            </IconButtons1>
          </Item>
          <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
          <Item1>
            <SecondWordInList>
              <Title5>{`Слово 2`}</Title5>
              <Subtitle2>{`Перевод 2`}</Subtitle2>
            </SecondWordInList>
            <Status>{`Статус: Пропущено`}</Status>
            <IconButtons2>
              <IconRobotLearningWords
                src={PencilEdit}
                loading="lazy"
                alt={
                  'Edit'
                }
              />
            </IconButtons2>
          </Item1>
          <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
          <Item2>
            <ThirdWordInList>
              <Title6>{`Слово 3`}</Title6>
              <Subtitle4>{`Перевод 3`}</Subtitle4>
            </ThirdWordInList>
            <Status>{`Статус: Изучено`}</Status>
            <IconButtons3>
              <IconRobotLearningWords
                src={PencilEdit}
                loading="lazy"
                alt={ 'Pencil' }
              />
            </IconButtons3>
          </Item2>
          <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
        </List>
        <Input1>
          <Title9>{`Добавить слово`}</Title9>
          <Textfield>
            <Text>{`Ввести слово`}</Text>
          </Textfield>
          <Info>{`Перевод рядом со словом`}</Info>
        </Input1>
        <Input2>
          <Title10>{`Перевод слов`}</Title10>
          <Textfield1>
            <Text1>{`Вводите перевод слов`}</Text1>
          </Textfield1>
          <Info1>{`Перевод появится в списке изучения`}</Info1>
        </Input2>
        <Input3>
          <Title11>{`Поиск слов`}</Title11>
          <Textfield2>
            <Text2>{`Введите ключевое слово`}</Text2>
          </Textfield2>
          <Info2>{`Выполните поиск слов в списке`}</Info2>
        </Input3>
        <Button1>
          <Seconday>
            <Title7>{`Удалить слово`}</Title7>
          </Seconday>
          <Primary>
            <Title8>{`Добавить слово`}</Title8>
          </Primary>
        </Button1>
      </Property1Default>
    );
}