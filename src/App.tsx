import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

// css 초기화
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
 } 
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  color:black;
  line-height: 1.2;
  background:linear-gradient(135deg,#e09,#d0e);
  }
`;
const Wrapper = styled.div`
  background-image: linear-gradient(
    108deg,
    rgb(254, 172, 94),
    rgb(252, 170, 98) 12%,
    rgb(223, 144, 157) 33%,
    rgb(199, 121, 208) 51%,
    rgb(163, 142, 206) 70%,
    rgb(133, 159, 204) 86%,
    rgb(75, 192, 200)
  );
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;
const Grid = styled.div`
  display: grid;
  width: 400px;
  gap: 10px;
  grid-template-columns: repeat(2, 1fr);
`;
const Overlay = styled(motion.div)`
  height: 300%;
  width: 300%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #c0e2ed;
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const ButtonDiv = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled(motion.button)`
  border-radius: 4px;
  height: 25px;
  border-style: none;
  color: rgba(53, 101, 198, 0.9);
`;
const overlay: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};
const Circle = styled(motion.div)`
  height: 50px;
  width: 50px;
  border-radius: 35px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const [id, setId] = useState<string | null>(null);
  const [toggle, setToggle] = useState(false);
  const onClick = () => setToggle((prev) => !prev);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Grid>
          <Box
            whileHover={{
              scaleX: 1.1,
              translateX: "-10px",
              scaleY: 1.1,
              translateY: "-8px",
              translateZ: "0",
              transition: { duration: 0.2 },
            }}
            onClick={() => setId("1")}
            key="1"
            layoutId="1"
          />
          <Box key="2">{!toggle ? <Circle layoutId="circle" /> : null}</Box>
          <Box key="3">{toggle ? <Circle layoutId="circle" /> : null}</Box>
          <Box
            whileHover={{
              scaleX: 1.1,
              translateX: "10px",
              scaleY: 1.1,
              translateY: "8px",
              transition: { duration: 0.2 },
            }}
            onClick={() => setId("4")}
            key="4"
            layoutId="4"
          />
        </Grid>
        <AnimatePresence>
          {id === "1" || id === "4" ? (
            <Overlay
              onClick={() => setId(null)}
              variants={overlay}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Box
                layoutId={id}
                style={{
                  width: "195px",
                  height: "150px",
                  marginBottom: "50px",
                }}
              />
            </Overlay>
          ) : null}
        </AnimatePresence>
        <ButtonDiv>
          {!toggle ? (
            <Button
              style={{
                scale: 1,
                transitionDuration: "0.2s",
              }}
              onClick={onClick}
            >
              Switch
            </Button>
          ) : (
            <Button
              style={{
                scale: 1.2,
                color: "#de8342",
                transitionDuration: "0.2s",
              }}
              onClick={onClick}
            >
              Switch
            </Button>
          )}
        </ButtonDiv>
      </Wrapper>
    </>
  );
}
export default App;
