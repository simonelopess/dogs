import { Route, Routes } from "react-router";
import Feed from "../Feed";
import UserHeader from "./UserHeader";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

const User = () => {
  return (
    <div>
      <section className="container">
        <UserHeader />
        <Routes>
          <Route path="/" element={<Feed />}></Route>
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
