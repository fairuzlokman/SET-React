import { ErrorMessage, Field } from "formik"

export const FormContent = (props) => {
    return (
        <div className="input-container">
            <label htmlFor={props.htmlFor}>{props.title}</label>
            <Field
                style={{
                    height: "40px",
                    fontSize: "16px",
                    paddingLeft: "6px",
                    borderTop: "0",
                    borderLeft: "0",
                }}
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
            />
            <ErrorMessage name={props.name} />
        </div>
    )
}
