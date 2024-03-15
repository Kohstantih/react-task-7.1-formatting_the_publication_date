import { dateCustomizerType } from "../types/dateCustomizerType";
import { dateFuncType } from "../types/dateFuncType";

const creatorCustomDate = (Component: dateFuncType, dateCustomizer: dateCustomizerType) => (props: {date: string}) => {
    const { date } = props;
    const customDate = dateCustomizer(date);

    return <Component {...props} {...customDate}/>
}

export default creatorCustomDate;