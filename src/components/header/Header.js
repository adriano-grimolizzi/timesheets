import LanguageButton from "../../i18n/LanguageButton";
import ThemeSelector from "../../theme/ThemeSwitcher"
import TodayIs from "../todayIs/TodayIs";

import './Header.css'

const Header = ({ setSelectedTheme }) => (
    <div className='header'>
        <h3 className="title">Timesheets</h3>
        <LanguageButton />
        <ThemeSelector setSelectedTheme={setSelectedTheme} />
        <TodayIs />
    </div>
)

export default Header
