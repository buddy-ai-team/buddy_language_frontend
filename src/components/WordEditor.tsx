import Arrow from '../images/Img/Arrow.png';
import Robot from '../images/Img/Robot.png';
import PencilEdit from '../images/ImgWordEditor/free-icon-edit-420140 1.png';
import DiskSave from '../images/ImgWordEditor/icons-save.png';
import { StProps } from '../types';
import { Link } from 'react-router-dom';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputLabel, MenuItem, FormControl, Snackbar } from '@mui/material';

import {
  Property1Default,
  TopBar,
  Content,
  IcLeft,
  Shape,
  Title,
  IconBox,
  IconRobot,
  List,
  ItemToStudy,
  FirstWordInList,
  TitleWordFirst,
  TitleTranslationFirst,
  Status,
  IconButtonToStudy,
  IconPencilToStudy,
  ItemSkipped,
  SecondWordInList,
  TitleWordSecond,
  TitleTranslationSecond,
  IconButtonSkipped,
  ItemStudied,
  ThirdWordInList,
  TitleWordThird,
  TitleTranslationThird,
  IconButtonStudied,
  GroupButtons,
  ButtonDelete,
  TitleDelete,
  ButtonAddWord,
  TitleAddWord,
  SectionAddWord,
  TitleWord,
  TextFieldAddWord,
  Info,
  SectionWordTranslation,
  TextFieldWordTranslation,
  SectionWordSearch,
  TextFieldWordSearch,
  SectionSelectStatus,
  TextFieldSelectStatus,
  ButtonSearch,
  SectionSearch,
  ButtonStudyToSave,
  IconDiskToSave,
  ButtonSkippedToSave,
  ButtonStudiedToSave
} from './StyleWordEditor';
import { AddWordEntityRequest, UpdateWordEntityRequest, User, WordEntity, WordEntityStatus } from '../apiClient';
import { useEffect, useMemo, useState } from 'react';
import { addWord, deleteWord, getUserByTelegramId, getWordsByAccountId, updateWord } from '../apiService';

export default function WordEditor(props: StProps): JSX.Element {

  const [user, setUser] = useState<User>();
  const [allWords, setAllWords] = useState<WordEntity[]>([]);
  const [status, setStatus] = useState("");
  const [learningWords, setLearningWords] = useState<WordEntity[]>([]);
  const [learnedWords, setLearnedWords] = useState<WordEntity[]>([]);
  const [droppedWords, setDroppedWords] = useState<WordEntity[]>([]);
  const [learningWord, setLearningWord] = useState("");
  const [learnedWord, setLearnedWord] = useState("");
  const [droppedWord, setDroppedWord] = useState("");
  const [learningWordTranslation, setlearningWordTranslation] = useState("");
  const [learnedWordTranslation, setLearnedWordTranslation] = useState("");
  const [droppedWordTranslation, setDroppedWordTranslation] = useState("");
  const [editWord, setEditWord] = useState("");
  const [editTranslation, setEditTranslation] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [messageSnackbar, setMessageSnackbar] = useState("");

  const wordStatus = useMemo(() => [
    { name: "На изучении", value: WordEntityStatus.NUMBER_0 },
    { name: "Изучено", value: WordEntityStatus.NUMBER_1 },
    { name: "Пропущено", value: WordEntityStatus.NUMBER_2 },], []);

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    console.log(event);
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const getAdnInstalUserWods = async () => {
    try {
      if (user) {
        const words = await getWordsByAccountId(props.initData, user.id);
        setAllWords(words);

        if (words.length) {

          const learningW = words.filter(w => w.wordStatus === WordEntityStatus.NUMBER_0);
          setLearningWords(learningW);
          if (learningW.length) {
            setLearningWord(learningW[0].word);
            setlearningWordTranslation(learningW[0].translation);
          }

          const learnedW = words.filter(w => w.wordStatus === WordEntityStatus.NUMBER_1);
          setLearnedWords(learnedW);
          if (learnedW.length) {
            setLearnedWord(learnedW[0].word);
            setLearnedWordTranslation(learnedW[0].translation);
          }

          const droppedW = words.filter(w => w.wordStatus === WordEntityStatus.NUMBER_2);
          setDroppedWords(droppedW);
          if (droppedW.length) {
            setDroppedWord(droppedW[0].word);
            setDroppedWordTranslation(droppedW[0].translation);
          }
        }
        else {
          setLearningWord("");
          setlearningWordTranslation("");
          setLearnedWord("");
          setLearnedWordTranslation("");
          setDroppedWord("");
          setDroppedWordTranslation("");
        }
      }
    } catch (error) {
      console.error('Error fetching words:', error);
    }
  };

  const handleChangeStatusWord = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  const handleChangeEditWord = (event: SelectChangeEvent) => {
    setEditWord(event.target.value);
  };

  const handleChangeEditTranslation = (event: SelectChangeEvent) => {
    setEditTranslation(event.target.value);
  };

  const handleChangeSearchWord = (event: SelectChangeEvent) => {
    setSearchWord(event.target.value);
  };

  const cleanEditForm = () => {
    setEditWord("");
    setEditTranslation("");
    setStatus("");
  }

  const onEditWord = (words: WordEntity[], word: string) => {
    if (words.length) {
      const w = words.find(w => w.word === word);
      if (w) {
        setEditWord(w.word);
        setEditTranslation(w.translation);
        const statusEditWord = wordStatus.find(st => w.wordStatus === st.value)
        if (statusEditWord) setStatus(statusEditWord.name);
      }
    } else {
      cleanEditForm();
    }
  }

  const onSaveChanges = async (word: string, translation: string, status: string) => {

    const w = allWords.find(w => w.word === word);
    const st = wordStatus.find(st => st.name === status);
    if (w && st) {
      const newWordRequest: UpdateWordEntityRequest = {
        id: w.id,
        word: word,
        translation: translation,
        language: w.language,
        status: st.value,
      }

      const newWord = await updateWord(props.initData, newWordRequest);
      console.log(newWord);
      await getAdnInstalUserWods();
      cleanEditForm();
      setOpenSnackbar(true);
      setMessageSnackbar("Изменения сохранены!");
    }
  }

  const onDeleteWord = async () => {
    const delWord = allWords.find(w => w.word === editWord);
    if (delWord) {
      await deleteWord(props.initData, delWord.id);
      await getAdnInstalUserWods();
      cleanEditForm();
      setOpenSnackbar(true);
      setMessageSnackbar("Слово удалено!");
    }
  }

  const onAddWord = async () => {
    const addWordStatus = wordStatus.find(st => st.name === status);
    if (user && addWordStatus && editWord != "" && editTranslation != "") {
      const addWordRequest: AddWordEntityRequest = {
        accountId: user.id,
        word: editWord,
        translation: editTranslation,
        language: user.userPreferences.targetLanguage,
        status: addWordStatus.value,
      }
      await addWord(props.initData, addWordRequest);
      await getAdnInstalUserWods();
      cleanEditForm();
      setOpenSnackbar(true);
      setMessageSnackbar("Слово успешно добавлено!");
    }
  }

  const onSearchWord = () => {
    const word = allWords.find(w => w.word.toLowerCase().includes(searchWord.toLowerCase()) 
                                 || w.translation.toLowerCase().includes(searchWord.toLowerCase()))
    if (word) {
      console.log(word);
      if (word.wordStatus === 0) {
        setLearningWord(word.word);
        setlearningWordTranslation(word.translation);
      }
      if (word.wordStatus === 1) {
        setLearnedWord(word.word);
        setLearnedWordTranslation(word.translation);
      }
      if (word.wordStatus === 2) {
        setDroppedWord(word.word);
        setDroppedWordTranslation(word.translation);
      }
      setSearchWord("");
    }
    else{
      setOpenSnackbar(true);
      setMessageSnackbar("Слово не найдено! Проверьте правильность ввода!");
    }
  };

  useEffect(() => {
    const fetchUsersWords = async () => {
      try {
        const user = await getUserByTelegramId(props.initData, props.TelegramId);
        setUser(user);
        if (user) {
          const words = await getWordsByAccountId(props.initData, user.id);
          setAllWords(words);

          if (words.length) {

            const learningW = words.filter(w => w.wordStatus === WordEntityStatus.NUMBER_0);
            setLearningWords(learningW);
            if (learningW.length) {
              setLearningWord(learningW[0].word);
              setlearningWordTranslation(learningW[0].translation);
            }

            const learnedW = words.filter(w => w.wordStatus === WordEntityStatus.NUMBER_1);
            setLearnedWords(learnedW);
            if (learnedW.length) {
              setLearnedWord(learnedW[0].word);
              setLearnedWordTranslation(learnedW[0].translation);
            }

            const droppedW = words.filter(w => w.wordStatus === WordEntityStatus.NUMBER_2);
            setDroppedWords(droppedW);
            if (droppedW.length) {
              setDroppedWord(droppedW[0].word);
              setDroppedWordTranslation(droppedW[0].translation);
            }
          }
          else {
            setLearningWord("");
            setlearningWordTranslation("");
            setLearnedWord("");
            setLearnedWordTranslation("");
            setDroppedWord("");
            setDroppedWordTranslation("");
          }
        }

      } catch (error) {
        console.error('Error fetching words:', error);
      }
    };

    fetchUsersWords();
  }, [props.TelegramId, props.initData, wordStatus]);



  return (
    <Property1Default className={props.TelegramId}>
      <TopBar>
        <Content>
          <Link to="/">
            <IcLeft>
              <Shape src={Arrow} loading="lazy" alt={'Arrow'} />
            </IcLeft>
          </Link>
          <Title>{`Редактор слов`}</Title>
          <IconBox>
            <IconRobot
              src={Robot}
              loading="lazy"
              alt={'Robot Icon'}
            />
          </IconBox>
        </Content>
      </TopBar>
      <List>
        <ItemToStudy>
          <FirstWordInList>
            {learningWords.length ? <TitleWordFirst>{learningWord}</TitleWordFirst> : <TitleWordFirst>Нет слов на изучение</TitleWordFirst>}
            {learningWords.length ? <TitleTranslationFirst>{learningWordTranslation}</TitleTranslationFirst> : <TitleTranslationFirst></TitleTranslationFirst>}
          </FirstWordInList>
          <Status>
            {`На изучении`}
          </Status>
          <IconButtonToStudy onClick={() => onEditWord(learningWords, learningWord)}>
            <IconPencilToStudy
              src={PencilEdit}
              loading="lazy"
              alt={'Pencil'} />
          </IconButtonToStudy>
          <ButtonStudyToSave onClick={() => onSaveChanges(editWord, editTranslation, status)}>
            <IconDiskToSave
              src={DiskSave}
              loading="lazy"
              alt={'Disk'} />
          </ButtonStudyToSave>
        </ItemToStudy>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
        <ItemSkipped>
          <SecondWordInList>
            {droppedWords.length ? <TitleWordSecond>{droppedWord}</TitleWordSecond> : <TitleWordSecond>Нет пропущеных слов</TitleWordSecond>}
            {droppedWords.length ? <TitleTranslationSecond>{droppedWordTranslation}</TitleTranslationSecond> : <TitleTranslationSecond></TitleTranslationSecond>}
          </SecondWordInList>
          <Status>{`Пропущено`}</Status>
          <IconButtonSkipped onClick={() => onEditWord(droppedWords, droppedWord)}>
            <IconPencilToStudy
              src={PencilEdit}
              loading="lazy"
              alt={'Edit'} />
          </IconButtonSkipped>
          <ButtonSkippedToSave onClick={() => onSaveChanges(editWord, editTranslation, status)}>
            <IconDiskToSave
              src={DiskSave}
              loading="lazy"
              alt={'Disk'} />
          </ButtonSkippedToSave>
        </ItemSkipped>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
        <ItemStudied>
          <ThirdWordInList>
            {learnedWords.length ? <TitleWordThird>{learnedWord}</TitleWordThird> : <TitleWordThird>Нет изученых слов</TitleWordThird>}
            {learnedWords.length ? <TitleTranslationThird>{learnedWordTranslation}</TitleTranslationThird> : <TitleWordThird></TitleWordThird>}
          </ThirdWordInList>
          <Status>{`Изучено`}</Status>
          <IconButtonStudied >
            <IconPencilToStudy
              src={PencilEdit}
              loading="lazy"
              alt={'Pencil'}
              onClick={() => onEditWord(learnedWords, learnedWord)}
            />
          </IconButtonStudied>
          <ButtonStudiedToSave onClick={() => onSaveChanges(editWord, editTranslation, status)}>
            <IconDiskToSave
              src={DiskSave}
              loading="lazy"
              alt={
                'Disk'
              }
            />
          </ButtonStudiedToSave>
        </ItemStudied>
        <div style={{ borderBottom: '1px solid #B1BCCD', width: '100%' }} />
      </List>
      <SectionAddWord>
        <TitleWord>{`Слово`}</TitleWord>
        <TextFieldAddWord placeholder="Введите слово" value={editWord} onChange={handleChangeEditWord} />
        <Info>{`Слово будет добавлено в список изучения`}</Info>
      </SectionAddWord>
      <SectionWordTranslation>
        <TitleWord>{`Перевод`}</TitleWord>
        <TextFieldWordTranslation placeholder="Введите перевод" value={editTranslation} onChange={handleChangeEditTranslation} />
        <Info>{`Перевод появится под словом в списке изучения`}</Info>
      </SectionWordTranslation>
      <SectionSelectStatus>
        <TextFieldSelectStatus>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Выбрать статус</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              onChange={handleChangeStatusWord}
              label="NativeLangue"
            >
              {wordStatus.map(status =>
                <MenuItem value={status.name} key={status.value}>{status.name}</MenuItem>)}
            </Select>
          </FormControl>
        </TextFieldSelectStatus>
      </SectionSelectStatus>
      <SectionWordSearch>
        <TitleWord>{`Поиск слов`}</TitleWord>
        <SectionSearch>
          <TextFieldWordSearch placeholder="Введите ключевое слово" value={searchWord} onChange={handleChangeSearchWord} />
          <ButtonSearch variant="contained" onClick={onSearchWord}>
            <TitleDelete>{`Найти`}</TitleDelete>
          </ButtonSearch>
        </SectionSearch>
        <Info>{`Выполните поиск слов в списке`}</Info>
      </SectionWordSearch>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        message={messageSnackbar}
      />
      <GroupButtons>
        <ButtonDelete variant="contained" onClick={onDeleteWord}>
          <TitleDelete>{`Удалить слово`}</TitleDelete>
        </ButtonDelete>
        <ButtonAddWord variant="contained" onClick={onAddWord}>
          <TitleAddWord>{`Добавить слово`}</TitleAddWord>
        </ButtonAddWord>
      </GroupButtons>
    </Property1Default>
  );
}
