import styled from "styled-components"

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  gap: 0.5rem;
  margin: 0 auto 20px auto;
  padding: 25px 0;  
  width: 100%;
  border-radius: 4px;
  background-color:#212529;

  .btnCardAdd {
    width: 90%;
    height: 20px;  
    background: #121214;
    border-radius: 4.06066px;
    cursor: pointer;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;  
  }

  .titleCard {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14.2123px;
    line-height: 24px;
    color: #F8F9FA;
  }

  .course {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 22px;  
    text-align: right;
    color: #868E96;
  }
`
