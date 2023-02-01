import React, { useEffect } from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../api";

import Error from "../Helpler/Error";
import Loading from "../Helpler/Loading";
import styles from "./FeedPhotos.module.css";

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      let total = 3;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);

      console.log(json);
      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }
    fetchPhotos();
  }, [request, user, setInfinite, page]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <div>
        <ul className={`${styles.feed} animeLeft`}>
          {data.map((photo) => (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          ))}
        </ul>
      </div>
    );
  else return null;
};
export default FeedPhotos;
