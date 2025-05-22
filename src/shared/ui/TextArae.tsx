import type { FC, TextareaHTMLAttributes } from 'react';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const TextArea: FC<TextAreaProps> = ({ label, error, className, ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={props.id || props.name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <textarea
        className={`block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm text-black
                    focus:outline-none focus:ring-blue-500 focus:border-blue-500
                    sm:text-sm resize-y ${error ? 'border-red-500' : ''} ${className || ''}`}
        rows={3}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};
