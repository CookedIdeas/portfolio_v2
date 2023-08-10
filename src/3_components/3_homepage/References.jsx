import React from 'react';
import styled from 'styled-components';
import Reference from './3_References/Reference';
import { references } from '../../1_assets/datas/references';

const References = () => {
  return (
    <Wrapper id="references_section" className="min-h-35 flex flex-col gap-8">
      <h2>Mes réalisations</h2>
      {references.map((reference) => (
        <Reference key={reference.basic_name} project={reference} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default References;
