import React from "react";
import styled from "styled-components";

type TO = {
  text: string;
  id: string | number;
};

type Props = {
  text: [TO];
  id: string | number;
};

function List({ ...props }: Props) {
  return <div>index</div>;
}

export default List;
