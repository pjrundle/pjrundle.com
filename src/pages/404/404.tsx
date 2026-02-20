import { TextModule } from "@theme-os/react";
import { Link } from "wouter";

export const Page404 = () => {
  return (
    <div className="page-gutter">
      <div className="page-container pt:40x t:center">
        <TextModule
          variant="block.hero"
          overline="Error 404"
          heading="Nothing to see here"
          copy="Try checking the URL, or go back to the homepage."
          buttons={[
            {
              label: "Home",
              icon: "arrowLeft",
              renderAs: <Link to="/" />,
            },
          ]}
        />
      </div>
    </div>
  );
};
