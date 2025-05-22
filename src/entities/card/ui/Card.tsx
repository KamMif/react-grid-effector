import type {FC} from "react";
import type {CardProps} from "../model/types.ts";

export const Card: FC<CardProps> = ({ x, h, id, w, y, title, content }) => {
    return <div key={id} data-grid={{ x, y, w, h }}>
        <div>{title}</div>
        <div>{content}</div>
    </div>
}
