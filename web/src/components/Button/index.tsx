import style from './style.module.scss'
//
import React, {memo} from 'react';
import classNames from "classnames";

type Props = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button = ({text, onClick, className}: Props) => {
    return (
        <button
            className={classNames(className, style["Button"])}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default memo(Button);
