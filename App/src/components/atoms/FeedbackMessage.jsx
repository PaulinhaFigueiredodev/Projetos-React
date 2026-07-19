export default function FeedbackMessage({ type = "status", children }) {
  const isError = type === "error";

  return (
    <p
      className={`feedback-message feedback-message--${type}`}
      role={isError ? "alert" : "status"}
      aria-live={isError ? "assertive" : "polite"}
    >
      {children}
    </p>
  );
}
