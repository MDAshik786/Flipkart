import { useQuery } from "@tanstack/react-query";
import Rating from "../Rating";
import ReviewandRatingConatiner from "../Review&RatingConatiner";
import SingleViewProductDetails from "../SingleViewProductDetails";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SingleProductQuery from "../../../APIQueryFunction/SingleViewPageQuery/SingleProductQuery";

const SingleView = () => {
  const location = useLocation();
  const [id, setId] = useState<number | undefined>(undefined);

  useEffect(() => {
    setId(location?.state?.id);
  }, []);

  const {
    data: getSingleData,
    isLoading,
    error,
    refetch,
  } = SingleProductQuery(id);

  if (isLoading || !id) return <p>Loading</p>;

  return (
    <SingleViewProductDetails data={getSingleData}>
      <Rating data={getSingleData} />
      <ReviewandRatingConatiner />
    </SingleViewProductDetails>
  );
};

export default SingleView;
