import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button type1">
        <span className="btn-txt">
          Explore
          <span className="hover-arrow">↗</span>
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    height: 50px;
    width: 200px;
    position: relative;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid #252525;
    overflow: hidden;
    border-radius: 30px;
    color: #252525;
    transition: all 0.4s ease;
    font-weight: 800;
    letter-spacing: 2px;
    z-index: 0;
  }

  .btn-txt {
    z-index: 2;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .hover-arrow {
    font-size: 20px;
    opacity: 0;
    transform: translateX(-5px);
    transition: all 0.3s ease;
    display: inline-block;
  }

  .button:hover .hover-arrow {
    opacity: 1;
    transform: translateX(2px);
  }

  .type1::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.4s ease;
    background-color: #252525;
    border-radius: 50%;
    width: 300%;
    height: 300%;
    z-index: 1;
  }

  .button:hover::after {
    transform: translate(-50%, -50%) scale(1);
  }

  .button:hover {
    color: white;
    border-color: transparent;
    box-shadow: none;
  }
`;

export default Button;
