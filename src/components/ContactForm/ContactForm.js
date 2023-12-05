import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  FormStyle,
  FormButton,
  FormError,
  FormField,
} from './ContactForm.styled';

const validation = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/g, 'Number format: xxx-xx-xx')
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        onAdd(values);
        actions.resetForm();
      }}
    >
      <FormStyle>
        <label>
          Name
          <FormField type="text" name="name" required></FormField>
        </label>
        <label>
          Number
          <FormField
            type="tel"
            name="number"
            placeholder="xxx-xx-xx"
            required
          ></FormField>
          <FormError name="number" component="span" />
        </label>

        <FormButton type="submit">Add contact</FormButton>
      </FormStyle>
    </Formik>
  );
};
