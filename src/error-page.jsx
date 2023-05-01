import { Container } from "react-bootstrap";
import { useRouteError } from "react-router-dom";
import Marquee from "react-fast-marquee";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container id="error-page">
      <h1 className="position-absolute top-50 start-50 translate-middle pb-5">
        {error.status}
        {error.statusText}
      </h1>
      <Marquee className="position-absolute top-50 start-50 translate-middle pt-5" speed={100}>
        <p>
          Sorry, an unexpected error has occurred.
          <i>{error.statusText || error.message}</i>
        </p>
      </Marquee>
    </Container>
  );
}
