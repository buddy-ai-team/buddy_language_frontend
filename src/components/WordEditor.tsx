import ShapeImage from '../images/ImgWordEditor/_shape.png';
import DallE20231113161302CImage from '../images/ImgWordEditor/_DALL_E_2023_11_13_16_13_02_Create_a_character_named_Buddy_Language_PhotoRoom_2.png';
import DallE20231113161302C1Image from '../images/ImgWordEditor/_DALL_E_2023_11_13_16_13_02_Create_a_character_named_Buddy_Language_PhotoRoom_2_1.png';
import Vector200Image from '../images/ImgWordEditor/_Vector_200.png';
import DallE20231113161302C2Image from '../images/ImgWordEditor/_DALL_E_2023_11_13_16_13_02_Create_a_character_named_Buddy_Language_PhotoRoom_2_2.png';
import Vector2001Image from '../images/ImgWordEditor/_Vector_200_1.png';
import DallE20231113161302C3Image from '../images/ImgWordEditor/_DALL_E_2023_11_13_16_13_02_Create_a_character_named_Buddy_Language_PhotoRoom_2_3.png';
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
    DallE20231113161302C,
    TabGroup,
    Tab,
    Title1,
    Tab1,
    Title2,
    Tab2,
    Title3,
    List,
    Item,
    Frame427318906,
    Title4,
    Subtitle,
    Subtitle1,
    IconButtons1,
    DallE20231113161302C1,
    Vector200,
    Item1,
    Frame4273189061,
    Title5,
    Subtitle2,
    Subtitle3,
    IconButtons2,
    DallE20231113161302C2,
    Vector2001,
    Item2,
    Frame4273189062,
    Title6,
    Subtitle4,
    Subtitle5,
    IconButtons3,
    DallE20231113161302C3,
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
                <Shape src={ShapeImage} loading="lazy" alt={'shape'} />
              </IcLeft>
            </Link>
            <Title>{`Редактор слов`}</Title>
            <IconButtons>
              <DallE20231113161302C
                src={DallE20231113161302CImage}
                loading="lazy"
                alt={ 'DALL·E_2023_11_13_16_13_02_Create_a_character_named_Buddy_Language-PhotoRoom 2' }
              />
            </IconButtons>
          </Content>
        </TopBar>
        <TabGroup>
          <Tab>
            <Title1>{`Список`}</Title1>
          </Tab>
          <Tab1>
            <Title2>{`Импорт`}</Title2>
          </Tab1>
          <Tab2>
            <Title3>{`Поиск`}</Title3>
          </Tab2>
        </TabGroup>
        <List>
          <Item>
            <Frame427318906>
              <Title4>{`Слово 1`}</Title4>
              <Subtitle>{`Перевод 1`}</Subtitle>
            </Frame427318906>
            <Subtitle1>
              {`Статус: 
  На изучении`}
            </Subtitle1>
            <IconButtons1>
              <DallE20231113161302C1
                src={DallE20231113161302C1Image}
                loading="lazy"
                alt={
                  'DALL·E_2023_11_13_16_13_02_Create_a_character_named_Buddy_Language-PhotoRoom 2'
                }
              />
            </IconButtons1>
            <Vector200 src={Vector200Image} loading="lazy" alt={'Vector 200'} />
          </Item>
          <Item1>
            <Frame4273189061>
              <Title5>{`Слово 2`}</Title5>
              <Subtitle2>{`Перевод 2`}</Subtitle2>
            </Frame4273189061>
            <Subtitle3>{`Статус: Пропущено`}</Subtitle3>
            <IconButtons2>
              <DallE20231113161302C2
                src={DallE20231113161302C2Image}
                loading="lazy"
                alt={
                  'DALL·E_2023_11_13_16_13_02_Create_a_character_named_Buddy_Language-PhotoRoom 2'
                }
              />
            </IconButtons2>
            <Vector2001 src={Vector2001Image} loading="lazy" alt={'Vector 200'} />
          </Item1>
          <Item2>
            <Frame4273189062>
              <Title6>{`Слово 3`}</Title6>
              <Subtitle4>{`Перевод 3`}</Subtitle4>
            </Frame4273189062>
            <Subtitle5>{`Статус: Изучено`}</Subtitle5>
            <IconButtons3>
              <DallE20231113161302C3
                src={DallE20231113161302C3Image}
                loading="lazy"
                alt={ 'DALL·E_2023_11_13_16_13_02_Create_a_character_named_Buddy_Language-PhotoRoom 2' }
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