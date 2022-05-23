import InitialHero from "../../components/Home/InitialHero";
import getFSData from "../../hooks/readFs";

export default function IndexingHome(): JSX.Element {
  const data = getFSData();


  return (
    <>
      <InitialHero />
      Some Indexing
    </>
  );
}
