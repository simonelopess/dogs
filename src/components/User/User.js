import { useContext } from "react";
import { Route, Routes } from "react-router";
import { UserContext } from "../../UserContext";
import Feed from "../Feed/Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <div>
      <section className="container">
        <UserHeader />
        <Routes>
          <Route path="/" element={<Feed user={data.id} />}></Route>
          <Route path="/postar" element={<UserPhotoPost />}></Route>
          <Route path="estaticas" element={<UserStats />}>
            {" "}
          </Route>
        </Routes>
      </section>
    </div>
  );
};

export default User;
