import React from "react";
import cn from 'classnames';

const validateField = (field, data) => {
    let errorText = undefined;
    const foundError = (field.validators || [])
        .find(validator => {
            errorText = validator({ value: field.value, field, data });
            return !!errorText;
        });
    if (foundError) {
        return errorText;
    }
    return undefined;
};

const validateData = data => {
    return Object.keys(data)
        .reduce((errors, fieldName) => {
            const errorText = validateField(data[fieldName], data);
            return errorText ? { ...errors, [fieldName]: errorText } : errors;
        } , {})
};

const hasErrors = (errors = {}) => Object.values(errors).filter(item => !!item).length > 0;

/* *
* params:
*   labelClassName = 'label-hoc-form',
*   fieldWrapperClassName = 'field-hoc-form'
* */
const withFormData = params => WrappedForm => {
    const HOCForm = props => {
        const [loading, setLoading] = React.useState(false);
        const [posted, setPosted] = React.useState(false);
        const [data, setData] = React.useState(props.fields);
        const [errors, setErrors] = React.useState({});

        const handleChangeField = fieldName => event =>
            setData({
                ...data,
                [fieldName]: {
                    ...data[fieldName],
                    value: event.target.value
                }
            });

        const postFormData = async data => {
            setPosted(false);

            // check data
            const validateErrors = validateData(data);
            setErrors({ ...validateErrors });

            if (hasErrors(validateErrors)) {
                return Promise.reject(validateErrors);
            }

            // send data
            setLoading(true);

            const preparedData = Object
                .keys(data)
                .reduce((acc, key) => ({ ...acc, [key]: data[key].value }) , {});

            const postErrors = await props.postFormData({ data: preparedData });

            setErrors({ ...postErrors });

            setLoading(false);
            if (!hasErrors(postErrors)) {
                setPosted(true);
            }

            return Promise.resolve({});
        };

        const preventKeyEnter = event => {
            const key = event.charCode || event.keyCode || 0;
            if (key === 13) {
                event.preventDefault();
            }
        };

        const {
            labelClassName = 'label-hoc-form',
            fieldWrapperClassName = 'field-hoc-form',
        } = params;

        const renderTextInput = ({ fieldName, type = 'text' }) => (
            <label htmlFor={fieldName} className={
                cn(data[fieldName].className,
                    labelClassName,
                    'text-input'
                )} >
                <span>{data[fieldName].label}</span>
                <input
                    type={type}
                    name={fieldName}
                    placeholder={
                        data[fieldName].placeholder || data[fieldName].label
                    }
                    value={data[fieldName].value}
                    onChange={handleChangeField(fieldName)}
                />
            </label>
        );

        const renderSelect = ({ fieldName }) => (
            <label htmlFor={fieldName} className={
                cn(data[fieldName].className,
                    labelClassName,
                    'select-input'
                )} >
                <span>{data[fieldName].label}</span>
                <select
                    className="select-css"
                    name={fieldName}
                    value={data[fieldName].value}
                    onChange={handleChangeField(fieldName)}
                >
                    <option disabled value="">
                        {data[fieldName].placeholder}
                    </option>
                    {data[fieldName].options.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </label>
        );

        const renderTextArea = ({ fieldName }) => (
            <label htmlFor={fieldName} className={
                cn(data[fieldName].className,
                    labelClassName,
                    'text-area-input'
                )}>
                <span>{data[fieldName].label}</span>
                <textarea
                    className="textarea"
                    name={fieldName}
                    placeholder={
                        data[fieldName].placeholder || data[fieldName].label
                    }
                    value={data[fieldName].value}
                    onChange={handleChangeField(fieldName)}
                />
            </label>
        );

        const renderCheckbox = ({ fieldName }) => (
            <label htmlFor={fieldName} className={
                cn(data[fieldName].className,
                    labelClassName,
                    'checkbox-input'
                )}>
                <input
                    type="checkbox"
                    className="checkbox"
                    name={fieldName}
                    placeholder={
                        data[fieldName].placeholder || data[fieldName].label
                    }
                    checked={!!data[fieldName].value}
                    onChange={handleChangeField(fieldName)}
                />
                <span>{data[fieldName].label}</span>
            </label>
        );

        const getField = fieldName => {
            switch (data[fieldName].type) {
                case "select":
                    return renderSelect({ fieldName });
                case "textarea":
                    return renderTextArea({ fieldName });
                case "checkbox":
                    return renderCheckbox({ fieldName });
                case "text":
                case "password":
                case "email":
                    return renderTextInput({ fieldName, type: data[fieldName].type });
                default:
                    return renderTextInput({ fieldName });
            }
        };

        const renderField = fieldName => {
            const errorText = errors[fieldName];
            return (
                <div className={cn(
                    fieldWrapperClassName,
                    `field-${fieldName}`,
                )}>
                    <div className="control">{getField(fieldName)}</div>
                    {!!errorText && (
                        <span className="help-block error-message">
                        <strong className="error-message">{errorText}</strong>
                    </span>
                    )}
                </div>
            );
        };

        const getFormError = () => {
            const errorText = errors.formError;
            return (
                <div className={cn(
                    fieldWrapperClassName,
                    'form-error',
                )}>
                    {!!errorText && (
                        <span className="help-block error-message">
                        <strong className="error-message">{errorText}</strong>
                    </span>
                    )}
                </div>
            );
        };

        return (
            <WrappedForm
                {...props}
                {...{
                    loading,
                    posted,
                    data,
                    errors,
                    setData,
                    setErrors,
                    postFormData,
                    renderField,
                    getFormError,
                    preventKeyEnter,
                }}
            />
        );
    }

    return HOCForm;
};

export default withFormData;
