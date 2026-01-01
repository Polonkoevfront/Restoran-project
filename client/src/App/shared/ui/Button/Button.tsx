import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cls from "./Button.module.scss";
import { classNames, Mods } from "../../lib/classNames";

type ButtonVariant = "default" | "primary";
type ButtonSize = "l" | "m" | "s";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  max?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    variant = "primary",
    size = "m",
    className,
    disabled,
    max = false,
  } = props;

  const variantClasses: Record<ButtonVariant, string> = {
    default: cls.default,
    primary: cls.primary,
  };
  const sizeClasses: Record<ButtonSize, string> = {
    l: cls.l,
    m: cls.m,
    s: cls.s,
  };

  const classes: any = [variant && variantClasses[variant], [size && sizeClasses[size]], className];

  const mods: Mods = {
    [cls.disabled]: disabled,
    [cls.max]: max,
  };

  return (
    <button disabled={disabled} className={classNames(cls.btn, mods, classes)}>
      {children}
    </button>
  );
};
