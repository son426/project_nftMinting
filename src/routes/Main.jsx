import styled from "styled-components";
import { accentColor, bgColor } from "../style";
import { Link } from "react-router-dom";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 375px;
  height: 812px;
  border: 5px black solid;
  h1 {
    font-size: 50px;
    font-weight: 600;
  }
`;

export const TopBar = styled.div`
  height: 50px;
  background-color: ${accentColor};
  color: white;

  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  .back {
    position: absolute;
    left: 40px;
    font-size: 25px;
  }
  .header {
    font-weight: 600;
    font-size: 22px;
  }
`;

const Box = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  border: transparent;
  border-radius: 5px;
  background-color: ${accentColor};
  color: white;
  font-size: 20px;
  display: block;
  width: 80%;
  height: 8%;
  margin-bottom: 20px;
  a {
    padding: 20px 40px;
  }
`;

function Main() {
  return (
    <Wrapper>
      <Container>
        <TopBar>
          <span className="header">Main</span>
        </TopBar>
        <Box>
          <Button>
            <Link to="./mycollection">My Collections</Link>
          </Button>
          <Button>
            <Link to="./collections">All Collections</Link>
          </Button>
          <Button>
            <Link to="./sellers">All Sellers</Link>
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Main;