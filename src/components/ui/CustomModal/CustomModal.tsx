import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalLifecycle {
  onOpen?: () => void;
  onClose?: () => void;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
}

export interface ModalControls extends ModalLifecycle {
  isOpen: boolean;
  closeOnOverlay?: boolean;
  closeOnEscape?: boolean;
  closeButton?: boolean;
  disableFocusTrap?: boolean;
  initialFocus?: string;
  restoreFocus?: boolean;
  lockScroll?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | { width: string };
  transition?: boolean;
  transitionDuration?: number;
}

interface CustomModalProps {
  controls: ModalControls;
  children: React.ReactNode;
  id?: string;
}

const CustomModal = ({ controls, children, id }: CustomModalProps) => {
  const {
    isOpen,
    onOpen,
    onClose,
    onAfterOpen,
    onAfterClose,
    closeOnOverlay = true,
    closeOnEscape = true,
    closeButton = true,
    disableFocusTrap = false,
    initialFocus,
    restoreFocus = true,
    lockScroll = true,
    size = "md",
    transition = true,
    transitionDuration = 180
  } = controls;

  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  const getSizeClass = () => {
    if (typeof size === "string") {
      return {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-2xl"
      }[size];
    }
    return "";
  };

  const getCustomWidthStyle = () => {
    if (typeof size === "object") return { width: size.width };
    return {};
  };

  useEffect(() => {
    if (!isOpen) return;

    onOpen && onOpen();

    if (restoreFocus) {
      previouslyFocused.current = document.activeElement as HTMLElement;
    }

    if (lockScroll) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closeOnEscape) onClose && onClose();
      if (e.key === "Tab" && !disableFocusTrap) trapFocus(e);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, closeOnEscape, disableFocusTrap]);

  const trapFocus = (e: KeyboardEvent) => {
    if (!modalRef.current) return;

    const focusable = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const focusTarget = modalRef.current?.querySelector<HTMLElement>(
      initialFocus ?? 'button, input, [href], select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    setTimeout(() => {
      focusTarget?.focus();
      onAfterOpen && onAfterOpen();
    }, transition ? transitionDuration : 10);

    return () => {
      if (restoreFocus && previouslyFocused.current) {
        previouslyFocused.current.focus();
      }
      onAfterClose && onAfterClose();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      aria-modal="true"
      role="dialog"
      id={id}
      className="fixed inset-0 z-[999999999] flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closeOnOverlay ? onClose : undefined}
      />

      <div
        ref={modalRef}
        className={`relative bg-white dark:bg-neutral-900 rounded-2xl shadow-xl w-full min-h-[360px] flex flex-col outline-none transition-all ${getSizeClass()}`}
        style={{
          ...getCustomWidthStyle(),
          opacity: transition ? 1 : undefined,
          transitionDuration: transition ? `${transitionDuration}ms` : undefined
        }}
        tabIndex={-1}
      >
        {closeButton && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 h-10 w-10 rounded-xl border border-neutral-400 dark:border-neutral-700 flex items-center justify-center"
          >
            <X />
          </button>
        )}

        <div className="p-4 flex flex-col justify-between h-full flex-1 mt-10">{children}</div>
      </div>
    </div>,
    document.body
  );
};

export default CustomModal;
