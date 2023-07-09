import { Formik, Form, Field, ErrorMessage } from "formik"
import * as yup from 'yup'

function loginPage(){
    return (
        <>
            <Formik initialValues={{}}>
            <Form>
                <div>
                    <Field name='email' placeholder='Email'>

                    </Field>
                    <ErrorMessage 
                    component={span} 
                    name="email"
                    >
                    </ErrorMessage>
                </div>
            </Form>
            </Formik>
        </>
    )
}
export default loginPage