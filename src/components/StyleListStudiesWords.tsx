import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const Property1Default = styled('div')({
    backgroundColor: `rgba(230, 252, 255, 1)`,
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `column`,
    height: `740px`,
    width: '100%',
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

export const IconButtons = styled('div')({
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

export const SelectionButton = styled('div')({
    borderRadius: `0px`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-end`,
    minHeight: `100vh`,
    alignItems: `flex-end`,
    padding: `13px 12px`,
    boxSizing: `border-box`,
    alignSelf: `stretch`,
    marginBottom: `38px`,
    overflow: `hidden`,
});

export const ButtonClearList = styled(Button)({
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

export const TitleButton = styled('div')({
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
    bottom: `0`,
});