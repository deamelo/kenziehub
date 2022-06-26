import styled from "styled-components"

export const ModalConatainerEdit = styled.section`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1001;
  inset: 0;
  background-color: transparent; 
  padding-top: 10%;

  .modalEditTechs {
    margin: 0 auto;  
    padding: 30px;
    width: 40%;
    height: 305px;
    text-align: center;
    border-radius: 5px;
    position: relative;
    background-color: #212529;

    @media (max-width: 320px) {
      width: 63%;
    }

    @media (min-width:320px) and (max-width: 425px) {
      width: 67%;
    }

    @media (min-width:1044px) {
      width: 36%;
    }
  }

  .containerHeadModalEdit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px 4px 0 0;
    background-color: #343B41;
    padding: 20px;
    margin-left: -29px;
    margin-top: -30px;
    width: 104.5%;
    height: 30px;  
  }

  .titleEdit {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #F8F9FA;
  }

  .btnClosedEdit {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    border: none;  
    background-color: #343B41;
    color: #868E96;
    cursor: pointer;
  }

  .formModalEdit {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    padding-top: 15px;
  }

  .labelInputEdit {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #F8F9FA;
  }

  .titleTech {
    background-color: #343B41;
    border: 1.2182px solid #343B41;
    box-sizing: border-box;
    border-radius: 4px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: #868E96;
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;  
    padding-left: 5px;
  }

  .selectModalEdit {
    border: 1.2182px solid #343B41;
    box-sizing: border-box;
    border-radius: 4px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    width: 100%;
    height: 40px;
    padding-left: 5px;  
    color: #F8F9FA;
    background-color: #343B41;
  }

  .containerBtn {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    width: 100%;
  }

  .btnEditTech {
    background-color: #59323F;
    border: 1.2182px solid #59323F;
    box-sizing: border-box;
    border-radius: 4px;
    height: 40px;
    width: 60%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    color: #FFFFFF;

    @media (max-width:424px) {
      font-size: 13px;
    }

    @media (max-width:320px) {
      font-size: 11px;
    }
  }

  .btnDelTech {
    background-color: #868E96;
    border: 1.2182px solid #868E96;
    box-sizing: border-box;
    border-radius: 4px;
    height: 40px;
    width: 36%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;  
  }
`

