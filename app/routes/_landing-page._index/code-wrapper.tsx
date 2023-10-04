import type { FC, ReactNode } from "react";

type CodeWrapperProps = {
  children: ReactNode;
};

export const CodeWrapper: FC<CodeWrapperProps> = ({ children }) => {
  return (
    <span className="mx-1 rounded-lg bg-primary p-1 font-mono italic text-primary-foreground">
      {children}
    </span>
  );
};
