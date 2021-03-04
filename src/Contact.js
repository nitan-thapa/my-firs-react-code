import { Formik, Form, ErrorMessage, Field, FieldArray } from "formik";
import * as Yup from "yup";

function Contact() {
  const initialValues = {
    username: "",
    paddress: "",
    taddress: "",
    haveproblem: false,
    radio: "",
    choose: "",
    email: "",
    phnumbers: [""],
  };

  const onSubmit = (value) => {
    console.log(value);
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .min(4, "must have at least 4 letter")
      .max(16, "must be less than or equal to 16")
      .required("*required"),
    paddress: Yup.string().required("*required"),
    taddress: Yup.string().required("*required"),
    radio: Yup.string().required("*required"),
    choose: Yup.string().required("*required"),
    email: Yup.string().required("*required").email("not a valid email"),
  });

  return (
    <div
      style={{ textAlign: "left", backgroundColor: "black", color: "white" }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label htmlFor="id1">Name</label>
          <br />
          <Field
            className="classinput"
            type="text"
            id="id1"
            name="username"
          ></Field>
          <ErrorMessage name="username">
            {(errmes) => {
              return (
                <div style={{ color: "red", display: "inline-block" }}>
                  {errmes}
                </div>
              );
            }}
          </ErrorMessage>
          <br />
          <br />

          <label htmlFor="id2">Permanent address</label>
          <br />
          <Field
            className="classinput"
            type="text"
            id="id2"
            name="paddress"
          ></Field>
          <ErrorMessage name="paddress">
            {(errmes) => {
              return (
                <div style={{ color: "red", display: "inline-block" }}>
                  {errmes}
                </div>
              );
            }}
          </ErrorMessage>
          <br />
          <br />

          <label htmlFor="id3">Temporary address</label>
          <br />
          <Field
            type="text"
            id="id3"
            name="taddress"
            className="classinput"
          ></Field>
          <ErrorMessage name="taddress">
            {(errmes) => {
              return (
                <div style={{ color: "red", display: "inline-block" }}>
                  {errmes}
                </div>
              );
            }}
          </ErrorMessage>
          <br />
          <br />
          <label htmlFor="com">email</label>
          <Field type="email" id="com" name="email"></Field>
          <ErrorMessage name="email">
            {(errmes) => {
              return (
                <div style={{ color: "red", display: "inline-block" }}>
                  {errmes}
                </div>
              );
            }}
          </ErrorMessage>
          <br />
          <br />

          <label htmlFor="id4">male</label>
          <Field type="radio" id="id4" name="radio" value="male"></Field>
          <label htmlFor="id5">female</label>
          <Field type="radio" id="id5" name="radio" value="female"></Field>

          <label htmlFor="id6">other</label>
          <Field type="radio" id="id6" name="radio" value="other"></Field>
          <ErrorMessage name="radio">
            {(errmes) => {
              return (
                <div style={{ color: "red", display: "inline-block" }}>
                  {errmes}
                </div>
              );
            }}
          </ErrorMessage>
          <br />
          <br />

          <Field name="haveproblem" type="checkbox" id="id7"></Field>
          <label htmlFor="id7"> is there any problem while downloding</label>
          <br />
          <br />

          <Field component="select" name="choose" placeholder="choose">
            <option disabled hidden>
              choosecountry
            </option>
            <option value="nepal">Nepal</option>
            <option value="india">India</option>
            <option value="china">China</option>
            <option value="bangladesh">Bangladesh</option>
          </Field>
          <ErrorMessage name="choose">
            {(errmes) => {
              return (
                <div style={{ color: "red", display: "inline-block" }}>
                  {errmes}
                </div>
              );
            }}
          </ErrorMessage>
          <br />
          <br />

          <FieldArray name="phnumbers">
            {(props) => {
              const { push, remove, form } = props;
              const { values } = form;
              const { phnumbers } = values;

              return (
                <>
                  <label htmlFor="">Add phone numbers</label>
                  {phnumbers.map((v, i) => {
                    return (
                      <div style={{ display: "inline-block" }} key={i}>
                        <Field type="text" name={`phnumbers[${i}]`}></Field>
                        <button
                          type="button"
                          onClick={() => {
                            push("");
                          }}
                        >
                          +
                        </button>
                        {i != 0 && (
                          <button
                            type="button"
                            onClick={() => {
                              remove(i);
                            }}
                          >
                            -
                          </button>
                        )}
                      </div>
                    );
                  })}
                </>
              );
            }}
          </FieldArray>

          <div className="leftbuttonsearch">
            <button className="buttonsearch" type="submit">
              submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export { Contact };
