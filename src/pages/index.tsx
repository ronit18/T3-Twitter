import { type NextPage } from "next";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  return (
    <>
      <main>Hii</main>
    </>
  );
};

export default api.withTRPC(Home);
