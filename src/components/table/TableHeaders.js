import { useTranslation } from "react-i18next"

import { MONDAY, TUESDAY,  WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY} from '../../model/DaysOfTheWeek'

const TableHeaders = () => {
    const { t } = useTranslation()
    return (
        <tr>
            <th>{t('days.' + MONDAY)}</th>
            <th>{t('days.' + TUESDAY)}</th>
            <th>{t('days.' + WEDNESDAY)}</th>
            <th>{t('days.' + THURSDAY)}</th>
            <th>{t('days.' + FRIDAY)}</th>
            <th>{t('days.' + SATURDAY)}</th>
            <th>{t('days.' + SUNDAY)}</th>
        </tr>
    )
}

export default TableHeaders
