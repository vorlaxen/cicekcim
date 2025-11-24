import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { cn } from '@/utils'

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  className?: string;
  inputClassName?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  name,
  autoComplete,
  icon,
  className,
  inputClassName,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = type === 'password'
  const inputType = isPassword && showPassword ? 'text' : type

  return (
    <div className={cn('w-full', className)}>
      <label className="text-sm font-medium text-neutral-900/50 dark:text-white/90 mb-2 flex justify-between">
        <div>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </div>
        <div className="mt-1 min-h-[1.25rem] text-sm text-red-500 break-words">
          {error || "\u00A0"}
        </div>
      </label>

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-white/40">
            {icon}
          </div>
        )}

        <input
          type={inputType}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          className={cn(
            inputClassName,
            'w-full px-4 py-2.5 bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-600 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-white/40 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/20',
            icon && 'pl-12',
            isPassword && 'pr-10',
            isFocused && 'border-blue-500 bg-neutral-300 dark:bg-neutral-900/70 shadow-lg shadow-blue-500/10',
            error && 'border-red-500',
            disabled
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:border-neutral-400 dark:hover:border-neutral-700'
          )}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-white/40 hover:text-neutral-900 dark:hover:text-white transition-colors"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
    </div>
  )
}

export default CustomInput
