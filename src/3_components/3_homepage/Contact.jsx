import React, { useEffect, useState } from 'react';

import Button from '../99_smallReusable/Button';
import { IconContext } from 'react-icons';
import {
  BsFillSendCheckFill,
  BsFillSendExclamationFill,
  BsFillSendFill,
} from 'react-icons/bs';
import { useSendMail } from '../../4_customHooks/useSendMail';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useGlobalContext } from '../../2_context/GlobalContext';

const Contact = () => {
  const { dark } = useGlobalContext();

  const [notificationMessage, setNotificationMessage] = useState({
    type: '',
    message: '',
  });
  const [secondNotificationMessage, setSecondNotificationMessage] = useState({
    type: '',
    message: '',
  });

  const [isSendMailButtonEnabled, setIsSendMailButtonEnabled] = useState(false);

  useEffect(() => {
    console.log('isSendMailButtonEnabled', isSendMailButtonEnabled);
  }, [isSendMailButtonEnabled]);

  const [nameValue, setNameValue] = useState('');
  const [companyValue, setCompanyValue] = useState('');
  const [mailValue, setMailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const [isSendEmailLoading, setIsSendEmailLoading] = useState(false);
  const [isSendEmailSuccess, setIsSendEmailSuccess] = useState(false);
  const [isSendEmailError, setIsSendEmailError] = useState(false);

  const [allInputs, setAllInputs] = useState({});

  useEffect(() => {
    setAllInputs({
      nameValue,
      companyValue,
      mailValue,
      phoneValue,
      messageValue,
    });
  }, [nameValue, companyValue, mailValue, phoneValue, messageValue]);

  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  function validateEmail(email) {
    return emailRegex.test(email);
  }

  useEffect(() => {
    if (Object.values(allInputs).includes('')) {
      setIsSendMailButtonEnabled(false);
      setNotificationMessage({
        type: 'empty_fields',
        message: 'Veuillez remplir tous les champs pour envoyer un message',
      });
    } else {
      if (!validateEmail(allInputs.mailValue)) {
        setIsSendMailButtonEnabled(false);
        setNotificationMessage({
          type: 'empty_fields',
          message: 'Veuillez renseigner un email valide',
        });
      } else {
        setIsSendMailButtonEnabled(true);
        setNotificationMessage({
          type: '',
          message: '',
        });
      }
    }
  }, [allInputs]);

  const emailIsError = (isError) => {
    if (isError) {
      document.getElementById('mail-input').classList.add('invalid-input');
      document.getElementById('email-error-message').style.display = 'block';
    } else {
      document.getElementById('mail-input').classList.remove('invalid-input');
      document.getElementById('email-error-message').style.display = 'none';
    }
  };

  const checkInputValidity = (inputName, e) => {
    if (inputName === 'mail') {
      const isEmailValid = validateEmail(e.target.value);
      emailIsError(!isEmailValid);
    }
  };

  const { isLoading, isError, isSuccess, sendMail } = useSendMail();

  // === Error handler === //

  useEffect(() => {
    if (isError) {
      setSecondNotificationMessage({
        type: 'error',
        message:
          'Aïe... Une erreur est survenue ! Veuillez me contacter sur LinkedIn.',
      });
    }
  }, [isError]);

  //https://alphonso-javier.medium.com/how-to-use-recaptcha-v3-with-gatsbyjs-and-express-2e963575db60
  // const { executeRecaptcha } = useGoogleReCaptcha();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      Object.values(allInputs).includes('') ||
      !validateEmail(allInputs.mailValue)
    )
      return;

    const mailBody = allInputs;
    console.log('mailBody', mailBody);

    console.log('send request');

    console.log('isLoading', isLoading);

    sendMail(mailBody, {
      onSuccess: () => {
        console.log('success from contact');
      },
    });
  };

  const handleInputOnBlur = () => {
    // if (!notificationMessage) return;

    if (notificationMessage.type === 'empty_fields') {
      if (
        nameValue &&
        phoneValue &&
        companyValue &&
        mailValue &&
        messageValue
      ) {
        setNotificationMessage({
          type: '',
          message: '',
        });
      }
    }

    if (secondNotificationMessage.type === 'wrong_email') {
      console.log(mailValue);
      if (validateEmail(mailValue)) {
        setSecondNotificationMessage({
          type: '',
          message: '',
        });
      }
    }
  };

  return (
    <section
      id="contact_section"
      className="min-h-35 flex flex-col gap-12 mb-16 items-center"
    >
      <h2 className="self-start">Contactez-moi</h2>

      {/* before send mail success, display form */}
      {!isSuccess && (
        <>
          <p className="self-start text-start">
            Pour savoir quand je suis disponible, je vous invite à me contacter
            par ce formulaire.
          </p>
          <form
            onSubmit={handleFormSubmit}
            // action="https://formspree.io/f/xyyalloy"
            // method="POST"
            // target="_blank"
            className="flex flex-col gap-6 w-full sm:w-4/5 lg:w-full xl:w-4/5 2xl:2/3 "
          >
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-2 ">
              {/* NAME */}
              <div className="input-container">
                <input
                  id={`nom`}
                  className="input"
                  type="text"
                  name="nom"
                  placeholder=" "
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                />
                <div className={`cut !w-[71px] `}></div>
                <label htmlFor="nom" className="placeholder">
                  Votre nom
                </label>
              </div>

              {/* COMPANY */}
              <div className="input-container">
                <input
                  id={`entreprise`}
                  className="input"
                  type="text"
                  name={'entreprise'}
                  placeholder=" "
                  value={companyValue}
                  onChange={(e) => setCompanyValue(e.target.value)}
                />
                <div className={`cut !w-[100px] `}></div>
                <label htmlFor={'entreprise'} className="placeholder">
                  Votre entreprise
                </label>
              </div>

              {/* MAIL ADRESS */}
              <div className="input-container relative">
                <input
                  id={`mail`}
                  className="input"
                  type="text"
                  name="mail"
                  placeholder=" "
                  // onBlur={(e) => checkInputValidity('mail', e)}
                  onBlur={handleInputOnBlur}
                  value={mailValue}
                  onChange={(e) => setMailValue(e.target.value)}
                />
                <div className={`cut !w-[85px]`}></div>
                <label htmlFor="mail" className="placeholder">
                  Votre e-mail
                </label>
                <div
                  id="email-error-message"
                  className="hidden absolute right-2 bottom-0 text-xs"
                >
                  <span>Veuillez renseigner un email valide</span>
                </div>
              </div>
              {/* PHONE */}
              <div className="input-container">
                <input
                  id={`telephone`}
                  className="input"
                  type="tel"
                  name="telephone"
                  placeholder=" "
                  value={phoneValue}
                  onChange={(e) => setPhoneValue(e.target.value)}
                />
                <div className={`cut !w-[90px] `}></div>
                <label htmlFor="telephone" className="placeholder">
                  Votre numéro
                </label>
              </div>
            </div>
            {/* MESSAGE */}
            <div className="input-container !h-40">
              <textarea
                id={`projet`}
                className="input input--textarea"
                name="projet"
                placeholder=" "
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
                onBlur={handleInputOnBlur}
              />
              <div className={`cut !w-[80px]`}></div>
              <label htmlFor="projet" className="placeholder">
                Votre projet
              </label>
            </div>

            <div className="w-full self-center flex flex-col items-center gap-2 relative">
              <button
                type="submit"
                className={`${
                  dark ? 'btn btn--dark ' : 'btn'
                } w-1/2 self-center rounded-full border dark:border-0 !text-[#121212] font-normal flex items-center justify-center`}
                aria-label="Envoyer le message"
                aria-disabled={!isSendMailButtonEnabled}
                disabled={!isSendMailButtonEnabled}
              >
                <IconContext.Provider value={{ size: '1.4rem' }}>
                  {isLoading && <span>Loading</span>}
                  {isSuccess && <BsFillSendCheckFill className="" />}
                  {isError && <BsFillSendExclamationFill className="" />}
                  {!isLoading && !isSuccess && !isError && (
                    <BsFillSendFill className="" />
                  )}
                </IconContext.Provider>
              </button>
              <span className="absolute bottom-[-2rem]">
                {notificationMessage.message}
                {secondNotificationMessage.message}
              </span>
            </div>
          </form>
        </>
      )}

      {/* before send mail success, display form */}
      {isSuccess && (
        <div>
          <span>Mail bien envoyé</span>
        </div>
      )}
    </section>
  );
};
export default Contact;
