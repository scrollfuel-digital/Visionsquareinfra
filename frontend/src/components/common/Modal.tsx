import type { PropsWithChildren } from "react";
export default function Modal({ children }: PropsWithChildren) { return <div role="dialog">{children}</div>; }
