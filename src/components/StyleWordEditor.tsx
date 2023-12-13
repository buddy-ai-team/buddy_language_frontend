import { styled } from '@mui/material/styles';
import { Button, Box } from '@mui/material';

export const Property1Default = styled('div')({
    backgroundColor: `rgba(230, 252, 255, 1)`,
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    width: '100%',    
    height: `740px`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px 0px 12px 0px`,
    boxSizing: `border-box`,
});

export const TopBar = styled('div')({
    backgroundColor: `rgba(0, 20, 52, 1)`,
    boxShadow: `0px 0px 6px rgba(0, 0, 0, 0.12)`,
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `0px`,
});

export const Content = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `12px 8px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `0px`,
});

export const IcLeft = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `24px`,
    height: `24px`,
    margin: `0px`,
});

export const Shape = styled('img')({ 
    height: `18px`,
    width: `10px`,
    position: `absolute`,
    left: `7px`,
    top: `3px`,
});

export const Title = styled('div')({ 
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(230, 252, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `500`,
    fontSize: `20px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `24px`,
    textTransform: `none`,
    flex: `1`,
    margin: `0px 0px 0px 8px`,
});

export const IconBox = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    margin: `0px 0px 0px 8px`,
});

export const IconRobot = styled('img')({
    height: `44px`,
    width: `43px`,
    margin: `0px`,
});

export const List = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `0px 12px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `12px 0px 0px 0px`,
});

export const ItemToStudy = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `12px 0px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `0px`,
});

export const FirstWordInList = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    flex: `1`,
    margin: `0px`,
});

export const TitleWordFirst = styled('div')({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 20, 52, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `20px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `0px`,
});

export const TitleTranslationFirst = styled('div')({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(177, 188, 205, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `12px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `16px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `0px`,
});

export const Status = styled('div')({
    textAlign: `right`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 20, 52, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `500`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `20px`,
    textTransform: `none`,
    width: `90px`,
    margin: `0px 0px 0px 8px`,
});

export const IconButtonToStudy = styled(Button)({
    background: `transparent`,
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    margin: `0px 0px 0px 8px`,
});

export const IconPencilToStudy = styled('img')({
    height: `30px`,
    width: `29px`,
    margin: `0px`,
});

export const ItemSkipped = styled('div')({ 
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `12px 0px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `0px`,
});

export const SecondWordInList = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    flex: `1`,
    margin: `0px`,
});

export const TitleWordSecond = styled('div')({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 20, 52, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `20px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `0px`,
});

export const TitleTranslationSecond = styled('div')({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(177, 188, 205, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `12px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `16px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `0px`,
});

export const IconButtonSkipped = styled(Button)({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    margin: `0px 0px 0px 8px`,
});

export const ItemStudied = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `12px 0px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `0px`,
});

export const ThirdWordInList = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    flex: `1`,
    margin: `0px`,
});

export const TitleWordThird = styled('div')({ 
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 20, 52, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `20px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `0px`,
});

export const TitleTranslationThird = styled('div')({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(177, 188, 205, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `12px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `16px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `0px`,
});

export const IconButtonStudied = styled(Button)({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    margin: `0px 0px 0px 8px`,
});

export const SectionAddWord = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `flex-start`,
    padding: `11px 12px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `12px 0px 0px 0px`,
    overflow: `hidden`,
});

export const TitleWord = styled('div')({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 20, 52, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `500`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `20px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `0px`,
});

export const TextFieldAddWord = styled('input')({
    background: `transparent`,
    border: `1px solid rgba(0, 20, 52, 1)`,
    boxSizing: `border-box`,
    borderRadius: `6px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `8px 12px`,
    alignSelf: `stretch`,
    margin: `4px 0px 0px 0px`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `14px`,
    lineHeight: `20px`,
});

export const Info = styled('div')({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(177, 188, 205, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `12px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `16px`,
    textTransform: `none`,
    alignSelf: `stretch`,
    margin: `4px 0px 0px 0px`,
});

export const SectionWordTranslation = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `flex-start`,
    padding: `11px 12px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `12px 0px 0px 0px`,
    overflow: `hidden`,
});

export const TextFieldWordTranslation = styled('input')({
    background: `transparent`,
    border: `1px solid rgba(0, 20, 52, 1)`,
    boxSizing: `border-box`,
    borderRadius: `6px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `8px 12px`,
    alignSelf: `stretch`,
    margin: `4px 0px 0px 0px`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `14px`,
    lineHeight: `20px`,
});

export const SectionSelectStatus = styled('div')({
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `flex-start`,
    padding: `5px 12px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `12px 0px 0px 0px`,
    overflow: `hidden`,
});

export const TextFieldSelectStatus = styled(Box)({
    background: `transparent`,
    boxSizing: `border-box`,
    borderRadius: `6px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    alignSelf: `stretch`,
    margin: `4px 0px 0px 0px`,
});

export const SectionWordSearch = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `flex-start`,
    padding: `7px 12px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `5px 0px 0px 0px`,
    overflow: `hidden`,
    height: `150px`,
});

export const SectionSearch = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `center`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `0px`,
    overflow: `hidden`,
});

export const TextFieldWordSearch = styled('input')({
    background: `transparent`,
    border: `1px solid rgba(0, 20, 52, 1)`,
    boxSizing: `border-box`,
    borderRadius: `6px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    flex: `1`,
    padding: `8px 12px`,
    alignSelf: `stretch`,
    margin: `4px 7px 0px 0px`,
    fontFamily: `Roboto`,
    fontWeight: `400`,
    fontSize: `14px`,
    // width: `200px`,
    lineHeight: `20px`,
    height: `37px`,
});

export const ButtonSearch = styled(Button)({
    backgroundColor: `rgba(177, 188, 205, 1)`,
    border: `1px solid rgba(0, 20, 52, 1)`,
    boxSizing: `border-box`,
    borderRadius: `8px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `10px 12px`,
    // flex: `1`,
    height: `37px`,
    width: `155px`,
    marginTop: `5px`,
    '&:hover': {
        backgroundColor: '#D3D3D3',
    }
});

export const GroupButtons = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `10px 12px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    margin: `0px 0px 7px 0px`,
    overflow: `hidden`,
});

export const ButtonDelete = styled(Button)({
    backgroundColor: `rgba(177, 188, 205, 1)`,
    border: `1px solid rgba(0, 20, 52, 1)`,
    boxSizing: `border-box`,
    borderRadius: `8px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `10px 12px`,
    flex: `1`,
    margin: `0px`,
    '&:hover': {
        backgroundColor: '#D3D3D3',
    }
});

export const TitleDelete = styled('div')({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 20, 52, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `500`,
    fontSize: `16px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `22px`,
    textTransform: `none`,
    margin: `0px`,
});

export const ButtonAddWord = styled(Button)({
    backgroundColor: `rgba(32, 73, 129, 1)`,
    borderRadius: `8px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    justifyContent: `center`,
    alignItems: `center`,
    padding: `10px 12px`,
    boxSizing: `border-box`,
    flex: `1`,
    margin: `0px 0px 0px 8px`,
});

export const TitleAddWord = styled('div')({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(230, 252, 255, 1)`,
    fontStyle: `normal`,
    fontFamily: `Roboto`,
    fontWeight: `500`,
    fontSize: `16px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    lineHeight: `22px`,
    textTransform: `none`,
    margin: `0px`,
});
