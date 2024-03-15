import Video from "./Video";
import { widgetItemObjType } from "../types/widgetItemObjType";

export default function VideoList({ list }:{ list: widgetItemObjType[] } ) {
    return list.map((item, index) => <Video key={index} url={item.url} date={item.date} />);
}