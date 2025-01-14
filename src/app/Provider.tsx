import { SWRConfig } from "swr";
import fetcher from "@/services/fetcher";

export const Provider = ({children}: {children: React.ReactNode}) => {
    return <SWRConfig value={{fetcher}}>{children}</SWRConfig>
}