import Arrow from '../images/Img/Arrow.png';
import Robot from '../images/Img/Robot.png';
import { StProps } from '../types';
import { Link } from 'react-router-dom';
import apiService from '../apiService';
import React, { useEffect, useState } from 'react';

import {
    Property1Default,
    TopBar,
    Content,
    IcLeft,
    Shape,
    Title,
    IconButtons,
    IconRobot,
    SelectionButton,
    ButtonClearList,
    TitleButton
} from './StyleListStudiesWords';

export default function ListStudiedWords(props: StProps): JSX.Element {
    const [studiedWords, setStudiedWords] = useState<WordEntity[]>([]);
    const [user, setUser] = useState<User | null>(null);
    
    useEffect(() => {

        // Вызываем метод для получения пользователя по ID
    const fetchUser = async () => {
        try {
          const userId = '3fa85f64-5717-4562-b3fc-2c963f66afa6'; // Замените на реальный ID пользователя
          const user = await apiService.getUser(userId);
          setUser(user);
        } catch (error) {
          console.error('Error fetching user:', error);
        }
      };

       // Вызываем метод для получения всех изученных слов при монтировании компонента
       const fetchStudiedWords = async () => {
        try {
          const words = await apiService.getWordsByAccountId(user);
          setStudiedWords(words);
        } catch (error) {
          console.error('Error fetching studied words:', error);
        }
      };
  
      fetchStudiedWords();
      fetchUser();
    }, []); // Зависимость пуста, чтобы вызвать useEffect только при монтировании компонента

    return (
        <Property1Default className={props.className}>
            <TopBar>
                <Content>
                    <Link to="/">
                        <IcLeft>
                            <Shape src={Arrow} loading="lazy" alt={'Arrow'} />
                        </IcLeft>
                    </Link>
                    <Title>{`Список изученных слов`}</Title>
                    <IconButtons>
                        <IconRobot
                            src={Robot}
                            loading="lazy"
                            alt={'Robot Icon'}
                        />
                    </IconButtons>
                </Content>
            </TopBar>
            <SelectionButton>
                <ButtonClearList>
                {studiedWords.map((word, index) => (
                    <div key={index}>{word}</div>
                ))}
                    <TitleButton>{`Очистить список`}</TitleButton>
                </ButtonClearList>
            </SelectionButton>
        </Property1Default>
    );
}