import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import styled from "styled-components";

import ChildrenImage from "../../assets/children.jpg";
import Button from "../Shared/Button";
import Input from "../Shared/Input";

const Container = styled.section`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url(${ChildrenImage}) no-repeat center;
  background-size: cover;
`;

const Title = styled.h2`
  width: 80vw;
  height: auto;
  padding: 2rem 0;
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.8);
  font-size: 6vmin;
  text-align: center;
`;

const Team = styled.div`
  margin: 0 0 2rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.8);
`;

const Notice = styled.p`
  margin: 0 0 1rem 0;
  font-size: 2vmin;
`;

const ValidationText = styled.p`
  margin: 1rem 0 0 0;
  color: blue;
`;

const Attribute = styled.a`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  font-size: 1rem;
  color: lightgrey;
  text-decoration: none;
`;

const Main = () => {
  const [teams, setTeams] = useState("");
  const [validation, setValidation] = useState(null);
  const history = useHistory();

  const startGame = () => {
    if (teams === "") {
      setValidation("팀을 입력해주세요");
      return;
    }

    if (Number(teams) < 2 || Number(teams) > 10) {
      setValidation("팀 수는 2이상 10이하여야 합니다.");
      return;
    }

    history.push({
      pathname: "/game",
      state: { teams }
    });
  };

  return (
    <Container>
      <Title>
        같은 카드 맞추기 게임 (제목 적기)
      </Title>
      <Team>
        <Notice>몇 팀이 참가하나요?</Notice>
        <Input
          id="team-numbers"
          label="팀의 수"
          value={teams}
          handleChange={(event) => setTeams(event.target.value)}
          placeHolder="팀의 숫자를 입력해주세요"
          type="number"
        />
        {validation && (
          <ValidationText>{validation}</ValidationText>
        )}
      </Team>
      <Button
        padding="1rem"
        fontSize="2.5vmin"
        title="시작하기"
        color="black"
        handleClick={startGame}
      />
      <Attribute
        href="https://www.freepik.com/free-photos-vectors/school"
        target="_blank"
      >
        Designed by pikisuperstar / Freepik
      </Attribute>
    </Container>
  );
};

export default Main;
