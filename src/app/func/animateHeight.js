export default function AnimateHeight({ isOpen, children }) {
    return <div className={`animate-height-wrapper ${isOpen ? "active" : undefined}`}>{children}</div>;
}
