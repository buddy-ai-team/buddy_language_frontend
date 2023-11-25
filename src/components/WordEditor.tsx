import Arrow from '../images/Img/Arrow.png';
import Robot from '../images/Img/Robot.png';
import PencilEdit from '../images/ImgWordEditor/free-icon-edit-420140 1.png';
import { StProps } from '../types';
import { Link } from 'react-router-dom';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {InputLabel, MenuItem, FormControl, Box } from '@mui/material';
import * as React from 'react';

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
    Info,
    Input2,
    Textfield1,
    Info1,
    Input4,
    Textfield2,
    Text2,
    Info2,
    Input3,
    Textfield5
} from './StyleWordEditor';

export default function WordEditor(props: StProps): JSX.Element {
  
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

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
              {`На изучении`}
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
            <Status>{`Пропущено`}</Status>
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
            <Status>{`Изучено`}</Status>
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
          <Textfield placeholder="Вводите слова, разделенные запятыми" />
          <Info>{`Слова будут добавлены в список изучения`}</Info>
        </Input1>
        <Input2>
          <Title9>{`Перевод слов`}</Title9>
          <Textfield1 placeholder="Вводите перевод слов" />
          <Info1>{`Перевод появится под словами в списке изучения`}</Info1>
        </Input2>
        <Input3>
          <Textfield5>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Выбрать статус</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
                label="NativeLangue"
              >
                <MenuItem value={10}>На изучении</MenuItem>
                <MenuItem value={20}>Пропущено</MenuItem>
                <MenuItem value={30}>Изучено</MenuItem>
              </Select>
            </FormControl>
          </Textfield5>
        </Input3>
        <Input4>
          <Title9>{`Поиск слов`}</Title9>
          <Textfield2 placeholder="Введите ключевое слово" />
          <Info2>{`Выполните поиск слов в списке`}</Info2>
        </Input4>
        <Button1>
          <Seconday variant="contained">
            <Title7>{`Удалить слово`}</Title7>
          </Seconday>
          <Primary variant="contained">
            <Title8>{`Добавить слово`}</Title8>
          </Primary>
        </Button1>
      </Property1Default>
    );
}