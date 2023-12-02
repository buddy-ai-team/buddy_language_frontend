/* eslint-disable @typescript-eslint/no-explicit-any */
import Arrow from '../images/Img/Arrow.png';
import Robot from '../images/Img/Robot.png';
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
    IconRobot,
    SelectionButton,
    ButtonClearList,
    TitleButton
} from './StyleListStudiesWords';

// import apiService from "../apiService";
// import { getInitData } from '../initData';
// import { getCurentTelegramUser } from '../currentTelegramUser';

// const initData = getInitData();
// const userTelegramId = getCurentTelegramUser(initData).id;
// const user = await apiService.getUserByTelegramId(userTelegramId);

// const userWords = await apiService.getWordsByAccountId(user.id);
// const outWords: any[] = []; 
// userWords.forEach((userWord)=>{
//   outWords.push(<div>{userWord.word}</div>)
// });

export default function ListStudiedWords(props: StProps): JSX.Element {

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
            <SelectionButton>
                <ButtonClearList>
                    <TitleButton>{`Очистить список`}</TitleButton>
                </ButtonClearList>
            </SelectionButton>
        </Property1Default>
    );
}