import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  text-align: center;
  box-shadow: 0px 0px 16px 2px;
  padding: 24px;
  margin: 50px 200px;
`;

export const LabelField = styled.label`
  width: 100px;
  text-align: left;
  display: inline-block;
  vertical-align: top;
  padding-top: 5px;
  height: 100%;
`;

export const SelectField = styled.select`
  width: 208px;
  height: 24px;
  margin: 8px 0;
  border: 1px solid;
`;
export const InputField = styled.input`
  width: 200px;
  height: 24px;
  margin: 8px 0;
  border: 1px solid;
`;
export const TextAreaField = styled.textarea`
  width: 200px;
  margin: 8px 0;
  border: 1px solid;
`;

export const ErrorLabel = styled.label`
  color: red;
`;
