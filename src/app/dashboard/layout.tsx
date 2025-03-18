import { ReduxProvider } from "@/providers/ReduxProvider";
import { Header } from "./components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <ReduxProvider>
        <main>{children}</main>
      </ReduxProvider>
    </>
  );
}
