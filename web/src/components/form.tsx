import {
    InputHTMLAttributes,
    LabelHTMLAttributes,
    SelectHTMLAttributes,
} from 'react';

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
    <input
        {...props}
        className='
            bg-zinc-900 py-3 px-4 rounded text-sm
            placeholder:text-zinc-500'
    />
);

export const Label = ({
    children,
    ...rest
}: LabelHTMLAttributes<HTMLLabelElement>) => (
    <label {...rest} className='font-semibold mt-4'>
        {children}
    </label>
);

export const Select = ({
    children,
    ...rest
}: SelectHTMLAttributes<HTMLSelectElement>) => (
    <select
        {...rest}
        className='
            bg-zinc-900 py-3 px-4 rounded text-sm
            placeholder:text-zinc-500 appearance-none'
    >
        {children}
    </select>
);
