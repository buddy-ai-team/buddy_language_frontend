import DallE20231113161302CImage from '../images/ImgSetting/Component1_DALL_E_2023_11_13_16_13_02_Create_a_character_named_Buddy_Language_PhotoRoom_1.png';
import ShapeImage from '../images/ImgSetting/_shape.png';
import DallE20231113161302C1Image from '../images/ImgSetting/Component1_DALL_E_2023_11_13_16_13_02_Create_a_character_named_Buddy_Language_PhotoRoom_2.png';
import Vector200Image from '../images/ImgSetting/Component1_Vector_200.png';
import Vector2001Image from '../images/ImgSetting/Component1_Vector_200_1.png';
import Vector2002Image from '../images/ImgSetting/Component1_Vector_200_2.png';
import VectorImage from '../images/ImgSetting/Component1_Vector.png';
import Vector1Image from '../images/ImgSetting/Component1_Vector_1.png';
import { StProps } from '../types';
import { Link } from 'react-router-dom';

import {
  Property1Default,
  DallE20231113161302C,
  TopBar,
  Content,
  IcLeft,
  Shape,
  Title,
  IconButtons,
  IconButtons1,
  DallE20231113161302C1,
  SectionTitle,
  Text,
  Title1,
  List,
  Item,
  Frame,
  Icon1,
  Frame427318906,
  Title2,
  Vector200,
  Item1,
  Frame1,
  Icon2,
  Frame4273189061,
  Title3,
  Vector2001,
  Item2,
  Frame2,
  Icon3,
  Frame4273189062,
  Title4,
  Vector2002,
  SectionTitle1,
  Text1,
  Title5,
  Input1,
  Title6,
  Textfield,
  Text2,
  Selection,
  Title7,
  ChipGroup,
  Chip,
  Text3,
  Button1,
  Seconday,
  Title8,
  Primary,
  Title9,
  Group1,
  SectionTitle2,
  Text4,
  Title10,
  Button2,
  Title11,
  BxsUpArrow,
  Vector,
  Button3,
  Title12,
  BxsUpArrow1,
  Vector1
} from './StyleSettings';

export default function Settings(props: StProps): JSX.Element {
    return (
      <Property1Default className={props.className}>
        <DallE20231113161302C
          src={DallE20231113161302CImage}
          loading="lazy"
          alt={ 'DALL·E_2023_11_13_16_13_02_Create_a_character_named_Buddy_Language-PhotoRoom 1' }
        />
        <TopBar>
          <Content>
            <Link to="/">
              <IcLeft>
                <Shape src={ShapeImage} loading="lazy" alt={'shape'} />
              </IcLeft>
            </Link>
            <Title>{`Настройки`}</Title>
            <IconButtons>
              <IconButtons1>
                <DallE20231113161302C1
                  src={DallE20231113161302C1Image}
                  loading="lazy"
                  alt={
                    'DALL·E_2023_11_13_16_13_02_Create_a_character_named_Buddy_Language-PhotoRoom 2'
                  }
                />
              </IconButtons1>
            </IconButtons>
          </Content>
        </TopBar>
        <SectionTitle>
          <Text>
            <Title1>{`Голосовой выбор бота`}</Title1>
          </Text>
        </SectionTitle>
        <List>
          <Item>
            <Frame>
              <Icon1>{`🔊`}</Icon1>
            </Frame>
            <Frame427318906>
              <Title2>{`Голосовой вариант 1`}</Title2>
            </Frame427318906>
            <Vector200 src={Vector200Image} loading="lazy" alt={'Vector 200'} />
          </Item>
          <Item1>
            <Frame1>
              <Icon2>{`🔊`}</Icon2>
            </Frame1>
            <Frame4273189061>
              <Title3>{`Голосовой вариант 2`}</Title3>
            </Frame4273189061>
            <Vector2001 src={Vector2001Image} loading="lazy" alt={'Vector 200'} />
          </Item1>
          <Item2>
            <Frame2>
              <Icon3>{`🔊`}</Icon3>
            </Frame2>
            <Frame4273189062>
              <Title4>{`Голосовой вариант 3`}</Title4>
            </Frame4273189062>
            <Vector2002 src={Vector2002Image} loading="lazy" alt={'Vector 200'} />
          </Item2>
        </List>
        <SectionTitle1>
          <Text1>
            <Title5>{`Выбрать роль бота`}</Title5>
          </Text1>
        </SectionTitle1>
        <Input1>
          <Title6>{`Название роли`}</Title6>
          <Textfield>
            <Text2>{`Ввод роли бота`}</Text2>
          </Textfield>
        </Input1>
        <Selection>
          <Title7>{`Описание роли`}</Title7>
          <ChipGroup>
            <Chip>
              <Text3>{`Ввод описания роли `}</Text3>
            </Chip>
          </ChipGroup>
        </Selection>
        <Button1>
          <Seconday>
            <Title8>{`Выйти`}</Title8>
          </Seconday>
          <Primary>
            <Title9>{`Сохранить`}</Title9>
          </Primary>
        </Button1>
        <Group1>
          <SectionTitle2>
            <Text4>
              <Title10>{`Выбрать язык`}</Title10>
            </Text4>
          </SectionTitle2>
          <Button2>
            <Title11>{`Родной язык`}</Title11>
            <BxsUpArrow>
              <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
            </BxsUpArrow>
          </Button2>
          <Button3>
            <Title12>{`Изучаемый язык`}</Title12>
            <BxsUpArrow1>
              <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
            </BxsUpArrow1>
          </Button3>
        </Group1>
      </Property1Default>
    );
}