import { useEffect, useState } from "react";

interface RevealEmailProps {
  buttonClassName?: string;
  emailClassName?: string;
}

export function RevealEmail({
  buttonClassName = "",
  emailClassName = "",
}: RevealEmailProps) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (!revealed) return;
    const timer = window.setTimeout(() => setRevealed(false), 12000);
    return () => window.clearTimeout(timer);
  }, [revealed]);

  const email = ["caektagoyal", "gmail.com"].join("@");

  if (revealed) {
    return <strong className={emailClassName}>{email}</strong>;
  }

  return (
    <button
      type="button"
      onClick={() => setRevealed(true)}
      className={buttonClassName}
    >
      Click to Reveal Email
    </button>
  );
}
