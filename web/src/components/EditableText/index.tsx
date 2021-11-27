import style from './style.module.scss';
//
import React, {memo} from "react";

type Props = {
    onTextChange: (text: string) => void;
    editable?: boolean;
    text?: string;
};

const EditableText = (
    {
        onTextChange,
        editable = false,
        text = '',
    }: Props
): JSX.Element => {
    return (
        <input
            type="text"
            className={style['EditableText']}
            value={text}
            disabled={!editable}
            onChange={event => onTextChange(event.target.value)}
        />
    )
}

export default memo(EditableText);
