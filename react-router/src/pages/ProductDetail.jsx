import { useParams, Link } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  return (
    <>
      <h2>Product Detail!</h2>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}
