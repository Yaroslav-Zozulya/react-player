import { Formik, Form, Field } from 'formik';
import { addPublication } from 'services/publicationsApi';
export const CreatePublication = () => {
  const handleSubmit = async (values, { resetForm }) => {
    addPublication(values);
    resetForm();
  };

  return (
    <Formik initialValues={{ title: '', text: '' }} onSubmit={handleSubmit}>
      {({ isSubmiting }) => (
        <Form>
          <Field name="title" placeholder="Enter title"></Field>
          <Field name="text" placeholder="Enter text"></Field>
          <button type="submit" disabled={isSubmiting}>
            {isSubmiting ? 'Adding...' : ' Add publication'}
          </button>
        </Form>
      )}
    </Formik>
  );
};
