import React from 'react';
import styled from 'styled-components';
import SingleReference from './3_References/SingleReference';
import { references } from '../../1_assets/datas/references';

const References = () => {
  return (
    <Wrapper id="references_section" className="min-h-35 flex flex-col gap-12">
      <h2>Mes réalisations</h2>
      {references.map((reference) => (
        <SingleReference key={reference.basic_name} project={reference} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default References;
