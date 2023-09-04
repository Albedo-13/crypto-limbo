import { Header } from "../header/Header";
import { Entry } from "../entry/Entry";

export const EntryPage = ({ component }) => {
  return (
    <>
      <Header />
      <main>
        <Entry component={component} />
      </main>
    </>
  );
};
