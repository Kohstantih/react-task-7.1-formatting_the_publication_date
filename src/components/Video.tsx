import creatorCustomDate from "./creatorCustomDate";
import DateTime from "./DateTime";
import dateCustomizer from "../funcs/dateCustomizer";
import { widgetItemObjType } from "../types/widgetItemObjType";

export default function Video({ url, date }: widgetItemObjType) {
    const DateTimePretty = creatorCustomDate(
        DateTime,
        dateCustomizer
    )

    return (
        <div className="video">
            <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={date}/>
        </div>
    )
}
