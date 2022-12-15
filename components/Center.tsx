import { Container, styled } from "@nextui-org/react";

export default styled(Container, {
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "800px",
    '@xs': {
        width: "100%",
        flexDirection: "column",
    }
})