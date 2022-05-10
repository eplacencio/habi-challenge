import React, { useState } from 'react';
import RegistryForm from '../../components/registry/registryForm';

import { connect } from 'react-redux';
import { saveRequest } from '../../redux/request/request.actions';

import styles from '../../styles/Registry.module.css';
import HabiLogo from '../../components/icons/habiLogo';

function RegistryPage(props) {
  const [step, setStep] = useState(1);
  const [canContinue, setCanContinue] = useState(false);

  const handleChance = async (event, regex, index) => {
    const { value, checked } = event.target;
    let dataToSave = props.data;
    if (checked) dataToSave[step - 1].inputs[index].value = checked;
    else dataToSave[step - 1].inputs[index].value = value;
    dataToSave[step - 1].inputs[index].showError = false;
    await props.saveRequest([...dataToSave]);
  };

  const handleOnBlur = async (event, regex = null, index) => {
    const { value } = event.target;
    console.log('value', value);
    let dataToSave = props.data;
    if (regex) {
      const isValid = regex.test(value);
      dataToSave[step - 1].inputs[index].showError = !isValid;
      setCanContinue(isValid);
    }
    await props.saveRequest([...dataToSave]);
  };

  // const validateFields = () => {
  //   const { value } = event.target;
  //   console.log('value', value);
  //   let dataToSave = props.data;
  //   if (regex) {
  //     const isValid = regex.test(value);
  //     dataToSave[step - 1].inputs[index].showError = !isValid;
  //     setCanContinue(isValid);
  //   }
  //   await props.saveRequest([...dataToSave]);
  // }

  const handleContinue = () => {
    if (canContinue) setStep(step + 1);
  };

  const handleBack = () => {
    setCanContinue(true);
    setStep(step - 1);
  };

  return (
    <section className="flex flex-center">
      <div className="container absolute z-1">
        <div className={styles.registryBox}>
          <HabiLogo />
          <RegistryForm
            step={step}
            setStep={setStep}
            handleChance={handleChance}
            handleOnBlur={handleOnBlur}
          />
          <div className="flex justify-between w-full">
            <button
              className="btn-white mt-40"
              disabled={step === 1}
              aria-label="volver"
              onClick={() => handleBack()}
            >
              Volver
            </button>
            <button
              className="btn-purple mt-40"
              aria-label="siguiente"
              onClick={() => handleContinue()}
            >
              Siguiente
            </button>
          </div>
        </div>
      </div>
      <div className={styles.registryBg}>
        <img
          className={styles.registryBgImg}
          src="/images/bg-registry.jpeg"
          alt="apartamento"
        />
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.request.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveRequest: (e) => dispatch(saveRequest(e))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistryPage);
