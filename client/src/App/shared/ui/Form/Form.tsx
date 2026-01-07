import { FC, FormHTMLAttributes, ReactNode } from 'react';
import cls from './Form.module.scss';
import { classNames } from '../../lib/classNames';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
    className?: string;
};

export const Form: FC<FormProps> = ({ children, className = '', onSubmit }) => {
    return (
        <form className={classNames(cls.form, {}, [className])} onSubmit={onSubmit}>
            {children}
        </form>
    );
};