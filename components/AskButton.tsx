"use client";

import { useZalo } from "./ZaloProvider";

type Props = { subject?: string; className?: string; children: React.ReactNode; onAsk?: () => void };

/** Nút mở bong bóng Zalo với tiêu đề hỏi giá, VD subject="mã ĐM-4356" */
export default function AskButton({ subject, className = "btn btn-primary btn-sm", children, onAsk }: Props) {
  const { ask } = useZalo();
  return (
    <button
      type="button"
      className={className}
      data-ask=""
      onClick={() => {
        onAsk?.();
        ask(subject);
      }}
    >
      {children}
    </button>
  );
}
