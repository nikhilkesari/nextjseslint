import { Fragment } from "react";
import Header from "../components/Header/Header";
export default function Layout() {
  return (
    <Fragment>
      <div className="container mx-auto bg-blue-100">
        <Header></Header>
      </div>
    </Fragment>
  );
}
