import { useContext } from "react";
import { Route, Routes } from "react-router";
import { UserContext } from "../../UserContext";
import Feed from "../Feed/Feed";
import Head from "../Helpler/Head";
import { NotFound } from "../NotFound";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <div>
      <section className="container">
        <Head title="Minha conta" />
        <UserHeader />
        <Routes>
          <Route path="/" element={<Feed user={data.id} />}></Route>
          <Route path="/postar" element={<UserPhotoPost />}></Route>
          <Route path="estatisticas" element={<UserStats />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </section>
    </div>
  );
};

export default User;
