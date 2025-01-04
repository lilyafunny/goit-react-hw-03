import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from 'nanoid'
import { useId } from "react";
import * as Yup from "yup";

const ContactFormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required")
});

const initialValues = {
    id: "",
    name: "",
    number: "",
};



const ContactForm = () => {


    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, action) => {

        values.id = nanoid();
        console.log(values);
        action.resetForm();
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}
            validationSchema={ContactFormSchema}>
            <Form>
                <div>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name="name" id={nameFieldId} />
                    <ErrorMessage name="name" component="span" />
                </div>

                <div>
                    <label htmlFor={numberFieldId}>Number</label>
                    <Field type="number" name="number" id={numberFieldId} />
                    <ErrorMessage name="number" component="span" />
                </div>

                <button type="submit">Add contact</button>
            </Form >



        </Formik>

    )

}

export default ContactForm