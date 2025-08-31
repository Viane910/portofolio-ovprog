import React from 'react';
import styled from 'styled-components';

const QuoteComp = () => {
  return (
    <StyledWrapper>
      <section className="flex justify-center items-center">
        <div className="card">
          <h2 className=" text-5xl text-indigo-500 text-left">“</h2>
          <h2 className="text-2xl font-semibold text-second text-center px-5">
            If it's cloudy around you, come and be a rainbow
          </h2>
          <h2 className="text-5xl text-indigo-500 text-right">”</h2>
        </div>
      </section>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 330px;
    height: 250px;
    background: #07182e;
    position: relative;
    display: flex;
    place-content: center;
    place-items: center;
    overflow: hidden;
    border-radius: 20px;
  }

  .card h2 {
    z-index: 1;
  }

  .card::before {
    content: '';
    position: absolute;
    width: 150px;
    background-image: linear-gradient(180deg, rgb(170, 96, 200), rgb(255, 181, 218));
    height: 200%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .card::after {
    content: '';
    position: absolute;
    background: #f8f8f6;
    inset: 5px;
    border-radius: 15px;
  }
  /* .card:hover:before {
    background-image: linear-gradient(180deg, rgb(81, 255, 0), purple);
    animation: rotBGimg 3.5s linear infinite;
  } */
`;

export default QuoteComp;
