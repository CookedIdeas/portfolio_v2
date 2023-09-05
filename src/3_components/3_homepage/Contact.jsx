import React from 'react';
import ContactInput from './7_Contact/ContactInput';
import Button from '../99_smallReusable/Button';
import { IconContext } from 'react-icons';
import { BsFillSendFill } from 'react-icons/bs';

const Contact = () => {
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  function validateEmail(email) {
    return emailRegex.test(email);
  }

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const fullName = e.target.nom.value;
    const company = e.target.entreprise.value;
    const mail = e.target.entreprise.mail;
    const phone = e.target.telephone.mail;
    const message = e.target.projet.mail;

    const isEmailValid = validateEmail(mail);

    emailIsError(!isEmailValid);
    if (!isEmailValid) return;

    console.log('send request');
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
        // action="https://formspree.io/f/xyyalloy"
        // method="POST"
        // target="_blank"
        className="flex flex-col gap-6 w-full sm:w-4/5 lg:w-full xl:w-4/5 2xl:2/3 "
      >
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-2 ">
          <ContactInput
            type={'text'}
            inputName={'nom'}
            placeHolder={'Votre nom'}
            cutWidth={'70px'}
          />
          {/* COMPANY */}
          <div className="input-container">
            <input
              id={`entreprise-input`}
              className="input"
              type="text"
              name={'entreprise'}
              placeholder=" "
              required
            />
            <div className={`cut !w-[100px] `}></div>
            <label htmlFor={'entreprise'} className="placeholder">
              Votre entreprise
            </label>
          </div>

          {/* MAIL ADRESS */}
          <div className="input-container relative">
            <input
              id={`mail-input`}
              className="input"
              type="text"
              name="mail"
              placeholder=" "
              onBlur={(e) => checkInputValidity('mail', e)}
              required
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
          {/* <ContactInput
            type={'text'}
            inputName={'mail'}
            placeHolder={'Votre e-mail'}
            cutWidth={'85px'}
          /> */}
          <ContactInput
            type={'text'}
            inputName={'telephone'}
            placeHolder={'Votre numéro'}
            cutWidth={'90px'}
          />
        </div>
        <ContactInput
          type={'textarea'}
          inputName={'projet'}
          placeHolder={'Votre projet'}
          cutWidth={'90px'}
        />
        <div className="w-full self-center flex flex-col items-center gap-2">
          <Button
            type={'button'}
            text_fr={
              <IconContext.Provider value={{ size: '1.4rem' }}>
                <BsFillSendFill className="" />
              </IconContext.Provider>
            }
            alt_text={'Envoyer le message'}
            additionalClassName={'w-1/2 self-center'}
          />
        </div>
      </form>
    </section>
  );
};
export default Contact;
