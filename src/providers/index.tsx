import { ReactNode } from "react";
import { TasksProvider } from "./tasksProvider";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <TasksProvider>{children}</TasksProvider>;
}
