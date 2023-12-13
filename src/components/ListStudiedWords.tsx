/* eslint-disable @typescript-eslint/no-explicit-any */
import Arrow from '../images/Img/Arrow.png';
import Robot from '../images/Img/Robot.png';
import { StProps } from '../types';
import { Link } from 'react-router-dom';
import { getUserByTelegramId, getWordsByAccountId, deleteWord } from "../apiService";
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

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel
} from '@mui/material';

export default function ListStudiedWords(props: StProps): JSX.Element {

    const [userWords, setUserWords] = useState<WordEntity[]>([]);
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
    const [sortedColumn, setSortedColumn] = useState<string | null>(null);

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

    const handleSort = (column: string) => {
        setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
        setSortedColumn(column);
    };

    // const getSortIndicator = (column: string) => {
    //     if (column === sortedColumn) {
    //         return sortOrder === 'asc' ? '↑' : '↓';
    //     }
    //     return null;
    // };

    const handleClearList = async () => {
        try {
            const user = await getUserByTelegramId(props.initData, props.TelegramId);
            const words = await getWordsByAccountId(props.initData, user.id);

            for (const item of words) {
                if (item.id) {
                    await deleteWord(props.initData, item.id);
                }
            }
            setUserWords([]);

        } catch (error) {
            console.error('Error clearing word list:', error);
        }
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
            <Paper style={{margin: `10px`, height: `600px`}}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <TableSortLabel
                                        active={sortedColumn === 'translation'}
                                        direction={sortOrder}
                                        onClick={() => handleSort('translation')}
                                    >
                                        Слово
                                    </TableSortLabel>
                                </TableCell>
                                <TableCell>
                                    <TableSortLabel
                                        active={sortedColumn === 'word'}
                                        direction={sortOrder}
                                        onClick={() => handleSort('word')}
                                    >
                                        Перевод
                                    </TableSortLabel>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredWords.map((word) => (
                                <TableRow key={word.id}>
                                    <TableCell>{word.translation}</TableCell>
                                    <TableCell>{word.word}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <SelectionButton>
                <ButtonClearList onClick={handleClearList}>
                    <TitleButton>{`Очистить список`}</TitleButton>
                </ButtonClearList>
            </SelectionButton>
        </Property1Default>
    );
}
