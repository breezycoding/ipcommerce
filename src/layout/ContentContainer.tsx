import { Fragment, FC } from "react";
import { Container } from "@mui/material";

import { ContentContainerInterface } from "../utils/Interfaces";

const ContentContainer: FC<ContentContainerInterface> = ({ children }) => {
  return (
    <Fragment>
      <Container maxWidth="xl">{children}</Container>
    </Fragment>
  );
};

export default ContentContainer;
