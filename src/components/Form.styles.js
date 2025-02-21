import styled from "styled-components";

export const FormContainer = styled.div`
  width: 95%;
  max-width: 700px;
  margin: 0 auto;
  padding: 24px;
  background-color: var(--background-form);
  border-radius: var(--radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  .container-img{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 7px;

    .container-list{
      display: flex;
      align-items: center;
      height: 30px;

      .img-span{
        color: var(--text);
      }
    
      .remove-btn{
        margin-left: "10px";
        background: "red";
        color: "white";
        border: "none";
        border-radius: "50%";
        cursor: "pointer";
        width: "20px";
        height: "20px";
        display: "flex";
        align-items: "center";
        justify-content: "center";
      }

    }

  }

`;

export const FormTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 25px;
  color: var(--text);
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .input-container{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledLabel = styled.label`
  font-size: 1.2em;
  font-weight: bold;
  color: var(--text-form);
`;

export const StyledInput = styled.input`
  padding: 8px;
  font-size: 1.1em;
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  background-color: var(--color-inputs);
  color: var(--text);
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 3px var(--primary);
  }
`;

export const StyledSelect = styled.select`
  padding: 8px 20px;
  font-size: 1.1em;
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  background-color: var(--color-inputs);
  color: var(--text);
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 3px var(--primary);
  }
`;

export const StyledTextarea = styled.textarea`
  padding: 8px;
  font-size: 1.1em;
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  resize: vertical;
  min-height: 100px;
  background-color: var(--color-inputs);
  color: var(--text);
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 3px var(--primary);
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  margin-top: 30px;
  font-size: 1.2em;
  color: #FFFFFF;
  background-color: var(--primary);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: var(--secondary);
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
  }
  &:disabled {
    background-color: hsl(var(--muted));
    cursor: not-allowed;
  }
`;
