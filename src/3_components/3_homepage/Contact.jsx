import React, { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import {
  BsFillSendCheckFill,
  BsFillSendExclamationFill,
  BsFillSendFill,
} from 'react-icons/bs';
import { useSendMail } from '../../4_customHooks/useSendMail';
import { useGlobalContext } from '../../2_context/GlobalContext';
import { socialLinks } from '../../1_assets/datas/socialLinks';

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

  // useEffect(() => {
  //   console.log('isSendMailButtonEnabled', isSendMailButtonEnabled);
  // }, [isSendMailButtonEnabled]);

  const [nameValue, setNameValue] = useState('');
  const [companyValue, setCompanyValue] = useState('');
  const [mailValue, setMailValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const [isSendEmailSuccess, setIsSendEmailSuccess] = useState(false);
  const [isSendEmailError, setIsSendEmailError] = useState(false);

  const [isFormDisabled, setIsFormDisabled] = useState(false);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allInputs]);

  // const emailIsError = (isError) => {
  //   if (isError) {
  //     document.getElementById('mail-input').classList.add('invalid-input');
  //     document.getElementById('email-error-message').style.display = 'block';
  //   } else {
  //     document.getElementById('mail-input').classList.remove('invalid-input');
  //     document.getElementById('email-error-message').style.display = 'none';
  //   }
  // };

  // const checkInputValidity = (inputName, e) => {
  //   if (inputName === 'mail') {
  //     const isEmailValid = validateEmail(e.target.value);
  //     emailIsError(!isEmailValid);
  //   }
  // };

  const { isLoading, isError, isSuccess, sendMail } = useSendMail();

  // === Error & Success & Loading handler === //

  useEffect(() => {
    if (isSuccess) {
      setIsSendEmailSuccess(true);
    } else {
      setIsSendEmailSuccess(false);
    }
    if (isError) {
      setIsSendEmailError(true);
    } else {
      setIsSendEmailError(false);
    }
    if (isError || isSuccess || isLoading) {
      setIsFormDisabled(true);
    } else {
      setIsFormDisabled(false);
    }
  }, [isError, isSuccess, isLoading]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      Object.values(allInputs).includes('') ||
      !validateEmail(allInputs.mailValue)
    )
      return;

    const mailBody = allInputs;
    // console.log('mailBody', mailBody);

    // console.log('send request');

    // console.log('isLoading', isLoading);

    sendMail(mailBody, {
      onSuccess: () => {
        // console.log('success from contact');
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
      // console.log(mailValue);
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

      <p className="self-start text-start">
        Pour savoir quand je suis disponible, je vous invite à me contacter par
        ce formulaire.
      </p>
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-6 w-full sm:w-4/5 lg:w-full xl:w-4/5 2xl:2/3 "
      >
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-2 ">
          {/* NAME */}
          <div
            className={`input-container ${
              isFormDisabled && 'disabled-contact-input'
            }`}
          >
            <input
              id={`nom`}
              className="input"
              type="text"
              name="nom"
              placeholder=" "
              value={nameValue}
              onChange={(e) => setNameValue(e.target.value)}
              aria-disabled={isFormDisabled}
              disabled={isFormDisabled}
            />
            <div className={`cut !w-[71px] `}></div>
            <label htmlFor="nom" className="placeholder">
              Votre nom complet
            </label>
          </div>

          {/* COMPANY */}
          <div
            className={`input-container ${
              isFormDisabled && 'disabled-contact-input'
            }`}
          >
            <input
              id={`entreprise`}
              className="input"
              type="text"
              name={'entreprise'}
              placeholder=" "
              value={companyValue}
              onChange={(e) => setCompanyValue(e.target.value)}
              aria-disabled={isFormDisabled}
              disabled={isFormDisabled}
            />
            <div className={`cut !w-[100px] `}></div>
            <label htmlFor={'entreprise'} className="placeholder">
              Votre entreprise
            </label>
          </div>

          {/* MAIL ADRESS */}
          <div
            className={`input-container ${
              isFormDisabled && 'disabled-contact-input'
            }`}
          >
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
              aria-disabled={isFormDisabled}
              disabled={isFormDisabled}
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
          <div
            className={`input-container ${
              isFormDisabled && 'disabled-contact-input'
            }`}
          >
            <input
              id={`telephone`}
              className="input"
              type="tel"
              name="telephone"
              placeholder=" "
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
              aria-disabled={isFormDisabled}
              disabled={isFormDisabled}
            />
            <div className={`cut !w-[90px] `}></div>
            <label htmlFor="telephone" className="placeholder">
              Votre numéro
            </label>
          </div>
        </div>
        {/* MESSAGE */}
        <div
          className={`input-container !h-40 ${
            isFormDisabled && 'disabled-contact-input'
          }`}
        >
          <textarea
            id={`projet`}
            className="input input--textarea"
            name="projet"
            placeholder=" "
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            onBlur={handleInputOnBlur}
            aria-disabled={isFormDisabled}
            disabled={isFormDisabled}
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
            aria-disabled={!isSendMailButtonEnabled || isFormDisabled}
            disabled={!isSendMailButtonEnabled || isFormDisabled}
          >
            <IconContext.Provider value={{ size: '1.4rem' }}>
              {isLoading && <span className="mini-loader"></span>}
              {isSuccess && <BsFillSendCheckFill className="" />}
              {isError && <BsFillSendExclamationFill className="" />}
              {!isLoading && !isSuccess && !isError && (
                <BsFillSendFill className="" />
              )}
            </IconContext.Provider>
          </button>
          <span className="absolute bottom-[-3rem] lg:bottom-[-2rem] text-center">
            {notificationMessage.message}
            {secondNotificationMessage.message}
          </span>

          {/* === MESSAGES === */}

          {/* === ERROR === */}
          {isSendEmailError && (
            <div className="mt-4 flex flex-col gap-2 items-center">
              <span>Une erreur est survenue...</span>
              <span className="text-center">
                Je vous laisse me contacter sur{' '}
                {socialLinks.map((link, index) => {
                  return (
                    <span key={link.id}>
                      <a
                        href={link.url}
                        aria-label={link.alt_fr}
                        rel="noreferrer"
                        target="_blank"
                        className="relative effect-underline"
                      >
                        {link.name}
                      </a>
                      {index < socialLinks.length - 1 ? (
                        <span>
                          {index < socialLinks.length - 2 ? ', ' : ' ou '}
                        </span>
                      ) : (
                        '.'
                      )}
                    </span>
                  );
                })}
              </span>
            </div>
          )}

          {/* === SUCCESS === */}
          {isSendEmailSuccess && (
            <div className="mt-4 flex flex-col gap-2 items-center">
              <span>Votre mail a bien été envoyé !</span>
              <span>J'y répondrai dans les meilleurs délais.</span>
              <span className="text-center">
                D'ici là, vous pouvez me retrouver sur{' '}
                {socialLinks.map((link, index) => {
                  return (
                    <span key={link.id}>
                      <a
                        href={link.url}
                        aria-label={link.alt_fr}
                        rel="noreferrer"
                        target="_blank"
                        className="relative effect-underline"
                      >
                        {link.name}
                      </a>
                      {index < socialLinks.length - 1 ? (
                        <span>
                          {index < socialLinks.length - 2 ? ', ' : ' et '}
                        </span>
                      ) : (
                        '.'
                      )}
                    </span>
                  );
                })}
              </span>
            </div>
          )}
        </div>
      </form>
    </section>
  );
};
export default Contact;
