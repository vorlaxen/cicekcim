import React from 'react'
import { Loader2 } from 'lucide-react'

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  fullWidth?: boolean
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  type = 'button',
  onClick,
  ...props
}) => {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium rounded-lg
    transition-colors duration-150
    outline-none focus:ring-offset-2 focus:ring-offset-neutral-950
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `

  const variantStyles = {
    primary: `
      bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700
      text-white
      focus:ring-blue-500
    `,
    secondary: `
      bg-neutral-200 dark:bg-neutral-900 hover:bg-neutral-300 dark:hover:bg-neutral-700
      text-neutral-900 dark:text-white
      border border-neutral-300 dark:border-neutral-700
      focus:ring-neutral-500
    `,
    outline: `
      bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900
      text-neutral-900 dark:text-white
      border border-neutral-700 dark:border-neutral-700
      focus:ring-neutral-500
    `,
    ghost: `
      bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900
      text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white
      focus:ring-neutral-500
    `,
    danger: `
      bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700
      text-white
      focus:ring-red-500
    `
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl'
  }

  const isDisabled = disabled || loading

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`
        ${className}
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
      `}
      {...props}
    >
      {loading && (
        <Loader2 className="animate-spin" size={size === 'sm' ? 14 : size === 'lg' ? 20 : size === 'xl' ? 22 : 16} />
      )}
      
      {!loading && icon && iconPosition === 'left' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      
      {children}
      
      {!loading && icon && iconPosition === 'right' && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </button>
  )
}

export default CustomButton
