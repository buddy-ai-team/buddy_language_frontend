/* eslint-disable @typescript-eslint/no-explicit-any */
import Arrow from '../images/Img/Arrow.png';
import Robot from '../images/Img/Robot.png';
import { StProps } from '../types';
import { Link } from 'react-router-dom';
import { getUserByTelegramId} from "../apiService";
import { useEffect, useState } from 'react';
// import { WordEntity } from '../apiClient';

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

    //const [userWords, setUserWords] = useState<WordEntity[]>([]);
    const [firstName, setFirstName] = useState<string | null>(null);
    const [lastName, setLastName] = useState<string | null>(null);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const user = await getUserByTelegramId(props.initData, props.TelegramId);
                setFirstName(user.firstName);
                setLastName(user.lastName);
                // const words = await getWordsByAccountId(props.initData, user.id);
                // setUserWords(words);
            } catch (error) {
                console.error('Error fetching words:', error);
            }
        };

        fetchWords();
    }, [props.TelegramId, props.initData]);

    return (
        <Property1Default className={props.TelegramId}>
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
            {firstName} {lastName}
            <SelectionButton>
                <ButtonClearList>
                    <TitleButton>{`Очистить список`}</TitleButton>
                </ButtonClearList>
            </SelectionButton>
        </Property1Default>
    );
}