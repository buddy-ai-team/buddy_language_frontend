import QRcode from '../images/Img/QRcode.jpg';
import TelegramIcon from '@mui/icons-material/Telegram';

export default function Notification() {

    return (
        <div style={{ background: 'linear-gradient(#FFFFFF, #AFEEEE)', height: '600px' }}>
                <h1 style={{ textAlign: 'center', color: '#191970' }}>Buddy Language: Ваш личный помощник и переводчик в Telegram!</h1>
                <div style={{ textAlign: 'center', color: '#191970', fontSize: '20px' }}>
                    <TelegramIcon fontSize="large"/>
                    <a href="https://t.me/buddy_language_bot">Присоединяйся к нашему Telegram каналу</a>
                </div>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <img src={QRcode} alt="Image" width={400} />
                </div>
        </div>
    );
}
