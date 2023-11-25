import BigRobot from '../images/ImgSetting/BigRobot.png';
import Arrow from '../images/Img/Arrow.png';
import Robot from '../images/Img/Robot.png';
import Vector2001Image from '../images/ImgSetting/Component1_Vector_200_1.png';
import Vector2002Image from '../images/ImgSetting/Component1_Vector_200_2.png';
import { StProps } from '../types';
import { Link } from 'react-router-dom';
import api from "../apiClient/_Api";

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
  Title11,
  Title12,
  ButtonNativeLangue,
  ButtonStudingLanguage
} from './StyleSettings';

//Пример использования

//Пример использования
//GET запрос
api.get('/user/get_by_telegram_id?id=123456789')
  .then(async function (response) {
    // обработка успешного запроса
    console.log(response);
    //Данные о пользователе в разделе data
    const user = await response.data;
    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.telegramId);
  })
  .catch(function (error) {
    // обработка ошибки
    console.log(error);
  })
  .finally(function () {
    // выполняется всегда
  });

  //POST запрос
  api.post('/user/update', {
    id: "b524e7e7-766f-4e2d-81b3-91a234abd7dc",
    firstName: 'Bob',
    lastName: 'Smit',
    telegramId: "123456789"
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

export default function Settings(props: StProps): JSX.Element {
  return (
    <Property1Default className={props.className}>
      <DallE20231113161302C
        src={BigRobot}
        loading="lazy"
        alt={ 'Big Robot' }
      />
      <TopBar>
        <Content>
          <Link to="/">
            <IcLeft>
              <Shape src={Arrow} loading="lazy" alt={'Arrow'} />
            </IcLeft>
          </Link>
          <Title>{`Настройки`}</Title>
          <IconButtons>
            <IconButtons1>
              <DallE20231113161302C1
                src={Robot}
                loading="lazy"
                alt={
                  'Robot Icon'
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
          <Vector2002 src={Vector2002Image} loading="lazy" alt={'Vector 200'} />
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
      <SectionTitle2>
        <Text4>
          <Title10>{`Выбрать язык`}</Title10>
        </Text4>
      </SectionTitle2>
      <Group1>
        <ButtonNativeLangue>
          <Title11>{`Родной язык`}</Title11>
        </ButtonNativeLangue>
        <ButtonStudingLanguage>
          <Title12>{`Изучаемый язык`}</Title12>
        </ButtonStudingLanguage>
      </Group1>
      <Button1>
        <Seconday>
            <Title8>{`Выйти`}</Title8>
        </Seconday>
        <Primary>
          <Title9>{`Сохранить`}</Title9>
        </Primary>
      </Button1>
    </Property1Default>
  );
}