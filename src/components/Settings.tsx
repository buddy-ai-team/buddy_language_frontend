import BigRobot from '../images/ImgSetting/BigRobot.png';
import Arrow from '../images/Img/Arrow.png';
import Robot from '../images/Img/Robot.png';
import { StProps } from '../types';
import { Link } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import * as React from 'react';

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
  Item2,
  Frame2,
  Icon3,
  Frame4273189062,
  Title4,
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

export default function Settings(props: StProps): JSX.Element {

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

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
        </Item>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
        <Item1>
          <Frame1>
            <Icon2>{`🔊`}</Icon2>
          </Frame1>
          <Frame4273189061>
            <Title3>{`Голосовой вариант 2`}</Title3>
          </Frame4273189061>
        </Item1>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
        <Item2>
          <Frame2>
            <Icon3>{`🔊`}</Icon3>
          </Frame2>
          <Frame4273189062>
            <Title4>{`Голосовой вариант 3`}</Title4>
          </Frame4273189062>
        </Item2>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
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
        <Box sx={{
          display: 'inline-flex',
          position: 'relative',
          border: '#001434',
          isolation: 'isolate',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          flex: 1,
          margin: 0
        }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Родной язык</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              onChange={handleChange}
              label="NativeLangue"
            >
              <MenuItem value={10}>Русский</MenuItem>
              <MenuItem value={20}>Английский</MenuItem>
            </Select>
          </FormControl>
        </Box>
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