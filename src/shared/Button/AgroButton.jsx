import { Loader2 } from 'lucide-react';

const AgroButton = ({
  children,
  onClick,
  type = 'button',
  className = '',
  variant = 'gradient', 
  fullWidth = false,
  disabled = false,
  loading = false,
  icon = null,
  size = 'md',
}) => {
  const baseClasses = `
    inline-flex items-center justify-center gap-2 
    font-semibold rounded-lg transition-all duration-300
    ${fullWidth ? 'w-full' : 'w-auto'}
    ${disabled || loading ? 'opacity-60 cursor-not-allowed' : ''}
    ${size === 'sm' ? 'text-sm px-4 py-2' : size === 'lg' ? 'text-lg px-6 py-3' : 'text-base px-5 py-3'}
    ${className}
  `;

  const styles = {
    gradient: `
      bg-gradient-to-r from-green-500 to-lime-400
      hover:from-green-600 hover:to-lime-600 
      text-white shadow-lg rounded-full
    `,
    solid: `
      bg-lime-600 hover:bg-lime-700 
      dark:bg-lime-500 dark:hover:bg-lime-600 
      text-white rounded-xl
    `,
    outline: `
      border border-lime-600 text-lime-600 
      hover:bg-lime-600 hover:text-white 
      dark:border-lime-500 dark:text-lime-500 
      dark:hover:bg-lime-500 dark:hover:text-white 
      rounded-xl
    `,
  };

  const selectedStyle = styles[variant] || styles.gradient;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${selectedStyle}`}
    >
      {loading ? (
        <Loader2 className="animate-spin h-5 w-5" />
      ) : (
        icon && <span>{icon}</span>
      )}
      {children}
    </button>
  );
};

export default AgroButton;
