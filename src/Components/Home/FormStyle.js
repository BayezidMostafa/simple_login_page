import styled from "styled-components";

export const FormSection = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 20px #e3dede;
    width: 560px;
    height: 611px;
    padding: 40px 91px;
    display: flex;
    gap: 24px;
    flex-direction: column;
    align-items: center;
    padding: 40px, 91px, 40px, 91px;
    img{
        max-width: 55px;
        margin: 0;
    }
`
export const FormHeaderText = styled.p`
    font-size: 26px;
    margin: 0;
`
export const FormBodyText = styled.p`
    text-align: center;
    font-size: 14px;
    margin: 0;
    line-height: 18px;
    font-family: 'Roboto';
`
export const InputContainer = styled.div`
    width: 100%;
    label{
        width: 368px;
        margin: 0 auto 8px auto;
        display: block;
    }
    input{
        display: block;
        width: 368px;
        margin: auto;
        padding: 8px 0 8px 5px;
        font-size: 14px;
        border-radius: 6px;
        border: 1px solid #CED4DA;
        &:focus{
            border: 1px solid #b4bbc2;
            outline: none !important;
        }
    }
    select{
        display: block;
        width: 368px;
        margin: auto;
        padding: 8px 12px;
        font-size: 14px;
        border-radius: 6px;
        border: 1px solid #CED4DA;
        &:focus{
            border: 1px solid #b4bbc2;
            outline: none !important;
        }
    }
`

export const ToggleButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`