import { FC, ReactNode } from "react";
import { Link, LinkProps } from "react-router-dom";
import { classNames } from "../shared/lib/classNames";

interface AppLinkProps extends LinkProps {
    children: ReactNode;
    className?: string;
};

export const AppLink: FC<AppLinkProps> = ({
    children,
    className = '',
    to,
    ...rest
}) => {
    return (
        <Link className={classNames("", {}, [className])} to={to} {...rest}>
            {children}
        </Link>
    );
};