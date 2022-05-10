import React, { Fragment } from 'react';
import { connect } from 'react-redux';

const RegistryForm = ({ step, handleChance, handleOnBlur, data }) => {
  if (step < 0) return <div>Paso inválido</div>;
  if (step > data.length) return <div>Finalizado</div>;
  const { _id, path, order, description, toSend, inputs } = data[step - 1];

  return (
    <div>
      <div key={_id}>
        <p className="fs-32 strong text-center">{description}</p>
        {inputs?.map(
          (
            {
              name,
              value,
              required,
              label,
              type,
              error,
              showError,
              regex,
              options,
              depend
            },
            index
          ) => {
            console.log('regex', regex);
            if (type === 'text' || type === 'email')
              return (
                <Fragment key={name}>
                  {/* {(depend && depend === name)

                  } */}
                  <label htmlFor={name}>{label}</label>
                  {required === true && (
                    <strong className="labelRequired"> *</strong>
                  )}
                  <input
                    name={name}
                    type={type}
                    value={value}
                    required={required}
                    className="inputClass"
                    onChange={(e) => handleChance(e, regex, index)}
                    onBlur={(e) => handleOnBlur(e, regex, index)}
                  />
                  {showError && (
                    <span className="labelRequired px-2 strong">{error}</span>
                  )}
                </Fragment>
              );
            if (type === 'select') {
              return (
                <Fragment key={name}>
                  <label htmlFor={name}>{label}</label>
                  {required === true && (
                    <strong className="labelRequired"> *</strong>
                  )}
                  <select
                    name={name}
                    type={type}
                    value={value}
                    required={required}
                    className="inputClass"
                    onChange={(e) => handleChance(e, null, index)}
                  >
                    <option value="" defaultValue="selected" disabled={true}>
                      Seleccione
                    </option>
                    {options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {showError && (
                    <span className="labelRequired px-2 strong">{error}</span>
                  )}
                </Fragment>
              );
            }
            if (type === 'checkbox')
              return (
                <div className="flex items-center" key={name}>
                  <input
                    name={name}
                    type={type}
                    value={value}
                    required={required}
                    onChange={(e) => handleChance(e, null, index)}
                  />
                  <label htmlFor={name}>{label}</label>
                  {required === true && (
                    <strong className="labelRequired"> *</strong>
                  )}
                </div>
              );
          }
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.request.data
  };
};

export default connect(mapStateToProps)(RegistryForm);
