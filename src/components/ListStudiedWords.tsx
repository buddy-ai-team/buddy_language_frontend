/* eslint-disable @typescript-eslint/no-explicit-any */
import Arrow from '../images/Img/Arrow.png';
import Robot from '../images/Img/Robot.png';
import { StProps } from '../types';
import { Link } from 'react-router-dom';
import { getUserByTelegramId, getWordsByAccountId } from "../apiService";
import { useEffect, useState } from 'react';
import { WordEntity, WordEntityStatus } from '../apiClient';

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

    const [userWords, setUserWords] = useState<WordEntity[]>([]);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const user = await getUserByTelegramId(props.initData, props.TelegramId);
                const words = await getWordsByAccountId(props.initData, user.id);

                setUserWords(words);
            } catch (error) {
                console.error('Error fetching words:', error);
            }
        };

        fetchWords();

    }, [props.TelegramId, props.initData]);

    const filteredWords = userWords.filter(word => word.wordStatus === WordEntityStatus.NUMBER_0);

    const handleClearList = async () => {
        // try {
        //     const user = await getUserByTelegramId(props.initData, props.TelegramId);
        //     const words = await getWordsByAccountId(props.initData, user.id);
        //     const delWords = setUserWords(words);
        //     for (const word of delWords) {
        //         await updateWord(props.initData, word.id);
        //     }
        //     setUserWords([]);
        // } catch (error) {
        //     console.error('Error clearing word list:', error);
        // }
    }

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
            <table>
                <thead>
                    <tr>
                        <th>Слово</th>
                        <th>Перевод</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredWords.map(word => (
                        <tr key={word.id}>
                            <td>{word.translation}</td>
                            <td>{word.word}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* {filteredWords.map(word => (
                <div key={word.id}>{word.word}-{word.translation}</div>
            ))} */}
            <SelectionButton>
                <ButtonClearList onClick={handleClearList}>
                    <TitleButton>{`Очистить список`}</TitleButton>
                </ButtonClearList>
            </SelectionButton>
        </Property1Default>
    );
}
