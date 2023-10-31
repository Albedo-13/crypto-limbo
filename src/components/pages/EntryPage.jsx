import { Header } from "../header/Header";
import { Entry } from "../entry/Entry";

const EntryPage = ({ component }) => {
  return (
    <>
      <Header />
      <main>
        <Entry component={component} />
      </main>
    </>
  );
};

export default EntryPage;
