import styled from 'styled-components';
import {shade} from 'polished'

interface ModalProps {
  open:boolean
}

export const Container = styled.div`
  max-width:960px;
  margin:0 auto;
  padding:40px 20px;
`;

export const FormCreate = styled.form`
  .form_input + .form_input {
    margin-top:12px;
  }
  .form_input{
    display:flex;
    flex-direction:column;

    label{
      font-size:14px;
      color:#3a3a3a;
      margin-bottom:4px;
    }

    input{
      height:45px;
      padding:12px 12px;
      color:#3a3a3a;
      border-radius:5px;
      border:1px solid #aaa;
      font-size:14px;
    }
    
  }
  button{
    height:45px;
    color:#fff;
    border-radius:5px;
    border:0;
    font-size:18px;
    width:100%;
    margin-top:12px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#04d361;
    font-weight:bold;

    &:hover{
      background:${shade(0.2, '#04d361')}
    }

    &:disabled{
      background-color:#aaa;
    }
  }
`;

export const Modal = styled.div<ModalProps>`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);

  display:${(props) => props.open ? "block" : "none"};

  
  .container {
    .close{
      display:flex;
      align-items:center;
      justify-content:space-between;
      height:28px;
      width:100%;

      svg{
        color:#3d3d4d;
        cursor: pointer;
      }
    }
    border-radius:10px;
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    max-width:500px;
    min-height:100px;
    display:block;
  }
`;

export const Title = styled.h1`
  font-size:36px;
  color:#3a3a3a;
  max-width:450px;
  line-height:48px;
  margin-top:80px;
`;

export const Add = styled.button`
  background-color:#04d361;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;

  height:100px;
  width:100px;

  border:0;

  svg{
    color:#fff;
  }

  position:absolute;
  right:50px;
  bottom:50px;

  &:hover{
    background:${shade(0.2, '#04d361')}
  }
`;

export const Form = styled.form`
  margin-top:40px;
  max-width:700px;
  display:flex;

  input{
    flex:1;
    height:70px;
    padding:0 24px;
    border:0;
    border-radius:5px 0 0 5px;

    color:#3a3a3a;

    &::placeholder{
      color:#a8a8b3;
    }
  }

  button{
    width:210px;
    height:70px;

    background-color:#04d361;
    border-radius:0 5px 5px 0;
    border:0;
    color:#fff;
    font-weight:bold;
    transition:background-color 0.2s;

    &:hover{
      background:${shade(0.2, '#04d361')}
    }
  }
`;

export const Links = styled.div`
  margin-top:40px;
  max-width:700px;

  a + a {
    margin-top:16px;
  }

  a{
    background-color:#fff;
    border-radius:5px;
    width:100%;
    padding:24px;
    display:block;
    text-decoration:none;

    display:flex;
    align-items:center;
    justify-content:space-between;

    transition:transform 0.2s;

    &:hover{
      transform:translateX(10px);
    }

    div{
      strong{
        font-size:20px;
        color:#3d3d4d;
      }
  
      p{
        font-size:18px;
        color:#aba8b3;
        margin-top:4px;
      }
    }

    .icons{
      .icon{
        cursor:pointer;
      }
      svg{
        color:#3d3d4d;
      }
    }
  }

`;
