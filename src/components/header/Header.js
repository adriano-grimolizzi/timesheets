import LanguageButton from "./LanguageButton";
import ThemeSelector from "../../theme/ThemeSwitcher"
import TodayIs from "./TodayIs";

import './Header.css'

const Header = ({ setSelectedTheme }) => (
    <div className='header-container'>
        <h3 className="title">Timesheets</h3>
        <LanguageButton />
        <ThemeSelector setSelectedTheme={setSelectedTheme} />
        <TodayIs/>
    </div>
)

export default Header
