import errorStyle from "@/ui/Errors/error.css.ts";

const ErrorComponent = ({text}: { text: string }) => <div className={errorStyle()}>{text}</div>
export default ErrorComponent