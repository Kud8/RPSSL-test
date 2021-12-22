import React, { useCallback } from "react";
import cn from "classnames";
import "./ChoiceItem.scss";
import { ChoiceType } from "../../utils/types";

interface ChoiceItemProps {
    choice: ChoiceType;
    onClick?: (id: number) => void;
    className?: string;
    isSelected?: boolean;
    isSelectedByEnemy?: boolean;
    disabled?: boolean;
}

export const ChoiceItem = ({
    choice,
    className,
    onClick,
    isSelected = false,
    isSelectedByEnemy = false,
    disabled = false,
}: ChoiceItemProps) => {
    const handleClick = useCallback(() => {
        if (onClick) {
            onClick(choice.id);
        }
    }, [onClick, choice]);

    return (
        <div
            className={cn("ChoiceItem", {
                className,
                "ChoiceItem--disabled": disabled,
                "ChoiceItem--selected": isSelected,
                "ChoiceItem--selected-by-enemy": isSelectedByEnemy,
            })}
            onClick={handleClick}
        >
            {choice.name}
        </div>
    );
};
