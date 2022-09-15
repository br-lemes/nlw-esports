import { InputHTMLAttributes, LabelHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { }
interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> { }

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
