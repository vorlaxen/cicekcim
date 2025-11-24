import { Check } from "lucide-react";

const OptionItem = ({ option, isSelected, isHighlighted, onSelect, renderOption }: any) => {
  return (
    <div
      className={`
        px-3 py-2 cursor-pointer transition-colors flex items-center justify-between
        ${option.disabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}
        ${isHighlighted ? 'bg-gray-50' : ''}
        ${isSelected ? 'bg-blue-50 text-blue-700' : 'text-gray-900'}
      `}
      onClick={() => onSelect(option)}
    >
      <div className="flex-1">
        {renderOption ? (
          renderOption(option)
        ) : (
          <div>
            <div className="text-sm font-medium">{option.label}</div>
            {option.description && (
              <div className="text-xs text-gray-500 mt-0.5">{option.description}</div>
            )}
          </div>
        )}
      </div>
      
      {isSelected && (
        <Check size={16} className="ml-2 text-blue-600" />
      )}
    </div>
  );
};

export default OptionItem;