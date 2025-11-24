import React, { useState, useRef, useLayoutEffect } from 'react'

interface CustomTextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'> {
  label: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  error?: string
  icon?: React.ReactNode
  className?: string
  maxChars?: number
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  label,
  placeholder,
  value = '',
  onChange,
  error,
  required = false,
  disabled = false,
  name,
  autoComplete,
  icon,
  className = '',
  rows = 2,
  maxChars = 500,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [currentValue, setCurrentValue] = useState(value)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let val = e.target.value
    if (val.length > maxChars) val = val.slice(0, maxChars)
    setCurrentValue(val)

    if (onChange) {
      const syntheticEvent = {
        ...e,
        target: { ...e.target, value: val }
      } as React.ChangeEvent<HTMLTextAreaElement>
      onChange(syntheticEvent)
    }
  }

  useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto' // reset
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
    }
  }, [currentValue])

  return (
    <div className={`w-full ${className}`}>
      <label className="block text-sm font-medium text-neutral-900 dark:text-white/90 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-3 text-neutral-500 dark:text-white/40">
            {icon}
          </div>
        )}

        <textarea
          ref={textareaRef}
          name={name}
          value={currentValue}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          rows={rows}
          className={`
            w-full px-4 py-3 
            ${icon ? 'pl-10' : ''} 
            bg-white dark:bg-neutral-800
            border border-neutral-300 dark:border-neutral-600 
            rounded-lg
            text-neutral-900 dark:text-white 
            placeholder-neutral-400 dark:placeholder-white/40
            outline-none
            transition-all duration-200
            ${isFocused ? 'border-blue-500 bg-neutral-300 dark:bg-neutral-900/70 shadow-lg shadow-blue-500/10' : ''} 
            ${error ? 'border-red-500' : ''} 
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-neutral-400 dark:hover:border-neutral-700'} 
            focus:ring-2 focus:ring-blue-500/20
          `}
        />
      </div>

      <div className="flex justify-end mt-1 text-sm text-neutral-500 dark:text-white/60">
        {currentValue.length}/{maxChars}
      </div>

      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}


export default CustomTextarea
