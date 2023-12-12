import { useQuery } from "@tanstack/react-query";
import Rating from "../Rating";
import ReviewandRatingConatiner from "../Review&RatingConatiner";
import SingleViewProductDetails from "../SingleViewProductDetails";
import { getSingleProductData } from "../../../API Functions/SinglePageAPI";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SingleView = () => {
  const location = useLocation();
  const [id, setId] = useState<number | undefined>(undefined);

  useEffect(() => {
    setId(location?.state?.id);
  }, []);

  const {
    data: getSingleData,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["getSingleProductData", id],
    queryFn: () => getSingleProductData(id),
    enabled: id !== undefined,
  });

  if (isLoading || !id) return <p>Loading</p>;

  return (
    <SingleViewProductDetails data={getSingleData}>
      <Rating data={getSingleData} />
      <ReviewandRatingConatiner />
    </SingleViewProductDetails>
  );
};

export default SingleView;
