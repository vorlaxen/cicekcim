import { useState, useRef, useEffect } from "react";
import { ChevronDown, X } from "lucide-react";

export type OptionType = {
  label: string;
  value: string | number;
  disabled?: boolean;
};

interface CustomSelectorProps {
  options: OptionType[];
  value?: OptionType | null;
  onChange?: (val: OptionType | null) => void;
  color?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  searchable?: boolean;
  clearable?: boolean;
}

const CustomSelector: React.FC<CustomSelectorProps> = ({
  options,
  value = null,
  onChange = () => { },
  placeholder = "Seçiniz...",
  className = "",
  color = "",
  required = false,
  disabled = false,
  searchable = true,
  clearable = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [highlight, setHighlight] = useState<number>(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filtered = options.filter((opt) =>
    opt.label.toLowerCase().includes(query.toLowerCase())
  );

  const selectOption = (opt: OptionType) => {
    if (opt.disabled) return;
    onChange(opt);
    setIsOpen(false);
    setQuery("");
  };

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(null);
    setQuery("");
  };

  const handleBlur = () => {
    if (required && !value) {
      console.warn("Bu alan zorunludur");
    } else {
    }
  };

  return (
    <div className={`relative w-full ${className}`} ref={wrapperRef}>
      <div
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`
          flex items-center justify-between px-3 py-2 border rounded-md text-sm cursor-pointer
          transition-all select-none bg-white dark:bg-neutral-800
          ${disabled ? "opacity-60 cursor-not-allowed" : "hover:border-gray-400 dark:hover:border-neutral-500"}
          ${isOpen ? "border-blue-500 ring-2 ring-blue-100 dark:ring-blue-900" : "border-gray-300 dark:border-neutral-700"}
        `}
        onBlur={handleBlur}
      >
        <div className="flex-1">
          {searchable && isOpen ? (
            <input
              ref={inputRef}
              type="text"
              className="w-full outline-none bg-transparent text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-neutral-500"
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          ) : (
            <div className="flex items-center gap-2">
              {value && color && (
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                ></span>
              )}
              <span className={value ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-neutral-500"}>
                {value ? value.label : placeholder}
                {required && <span className="text-red-500 ml-1">*</span>}
              </span>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1">
          {clearable && value && (
            <X
              size={16}
              onClick={clearSelection}
              className="text-gray-400 dark:text-neutral-400 hover:text-gray-600 dark:hover:text-white"
            />
          )}
          <ChevronDown
            size={18}
            className={`text-gray-400 dark:text-neutral-400 transition-transform ${isOpen ? "rotate-180" : ""
              }`}
          />
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute z-50 mt-1 w-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-md shadow-lg max-h-60 overflow-y-auto"
        >
          {filtered.length === 0 ? (
            <div className="px-3 py-4 text-center text-sm text-gray-500 dark:text-neutral-400">
              Sonuç bulunamadı
            </div>
          ) : (
            filtered.map((opt, idx) => (
              <div
                key={opt.value}
                onClick={() => selectOption(opt)}
                onMouseEnter={() => setHighlight(idx)}
                className={`
                  px-3 py-2 cursor-pointer text-sm transition-all
                  ${opt.disabled
                    ? "opacity-50 cursor-not-allowed"
                    : highlight === idx
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100"
                      : "hover:bg-gray-100 dark:hover:bg-neutral-700"}
                  ${value?.value === opt.value ? "bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-200" : "text-black dark:text-white"}
                `}
              >
                {opt.label}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CustomSelector;
