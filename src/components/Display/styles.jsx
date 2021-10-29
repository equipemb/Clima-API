import styled from 'styled-components';

export const Container = styled.div`
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(128,38,191,1) 74%, rgba(172,51,246,1) 100%, rgba(55,101,182,1) 100%, rgba(0,212,255,1) 100%);
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 550px;
  border-radius: 10px;
  justify-content: space-between;
  padding: 40px;
  margin-top: 40px;
  border: 1px solid #CB8DF9;

  @media (max-width: 375px) {
  width: 300px;
  padding: 20px 10px;
  }

  h6{
    text-align: center;
  }

`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  h4{
    color: white;
  }
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 375px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
export const Info = styled.div`
.info-item{
  display: flex;
  align-items: center;
  padding: 10px 10px;
}
.info-item p{
  padding: 0 10px;
  font-size: 14px;
}
@media (max-width: 375px) {
    .info-item{
    }
  }
`;

export const Temperature = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-size: 80px;
    font-weight: 300;
  }
`;
