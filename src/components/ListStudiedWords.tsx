/* eslint-disable @typescript-eslint/no-explicit-any */
import Arrow from '../images/Img/Arrow.png';
import Robot from '../images/Img/Robot.png';
import { StProps } from '../types';
import { Link } from 'react-router-dom';
import { getUserByTelegramId, getWordsByAccountId, deleteWord } from "../apiService";
import { useEffect, useState, useMemo } from 'react';
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

    const sortedWords = useMemo(() => {
        if (!sortedColumn) {
            return filteredWords;
        }

        return [...filteredWords].sort((a, b) => {
            const columnA = a[sortedColumn as keyof WordEntity];
            const columnB = b[sortedColumn as keyof WordEntity];

            if (columnA != null && columnB != null && columnA !== undefined && columnB !== undefined) {
                if (columnA < columnB) {
                    return sortOrder === 'asc' ? -1 : 1;
                }
                if (columnA > columnB) {
                    return sortOrder === 'asc' ? 1 : -1;
                }
                return 0;
            } else {
                return 0;
            }
        });
    }, [filteredWords, sortedColumn, sortOrder]);

    const handleSort = (column: string) => {
        setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
        setSortedColumn(column);
    };

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
                <TableContainer component={Paper} style={{ maxHeight: '500px', overflowY: 'auto' }}>
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
                            {sortedWords.map((word) => (
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
