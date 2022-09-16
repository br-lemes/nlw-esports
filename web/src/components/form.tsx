import {
    InputHTMLAttributes,
    LabelHTMLAttributes,
    SelectHTMLAttributes,
} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> { }
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> { }

export const Input = (props: InputProps) => (
    <input
        {...props}
        className='
            bg-zinc-900 py-3 px-4 rounded text-sm
            placeholder:text-zinc-500'
    />
);

export const Label = ({ children, ...rest }: LabelProps) => (
    <label {...rest} className='font-semibold mt-4'>
        {children}
    </label>
)

export const Select = ({ children, ...rest }: SelectProps) => (
    <select
        {...rest}
        className='
            bg-zinc-900 py-3 px-4 rounded text-sm
            placeholder:text-zinc-500 appearance-none'
    >
        {children}
    </select>
);
