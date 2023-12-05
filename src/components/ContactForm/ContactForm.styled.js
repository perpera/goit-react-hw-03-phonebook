import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormField = styled(Field)`
  margin-left: 4px;
`;

export const FormButton = styled.button`
  height: 24px;
  width: 144px;
`;

export const FormError = styled(ErrorMessage)`
  color: tomato;
`;
