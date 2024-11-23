import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

export const SingleOpenContext = createContext<
  [string | null, Dispatch<SetStateAction<string | null>>]
>([null, () => {}]);

const SingleOpenProvider = ({ children }: { children: ReactNode }) => {
  const state = useState<string | null>(null);
  return (
    <SingleOpenContext.Provider value={state}>
      {children}
    </SingleOpenContext.Provider>
  );
};

export default SingleOpenProvider;

export const useSingleOpen = (id: string) => {
  const [currentId, dispatch] = useContext(SingleOpenContext);
  return [id === currentId, dispatch];
};
