import React from 'react';
import ContactInput from './7_Contact/ContactInput';
import Button from '../99_smallReusable/Button';
import { IconContext } from 'react-icons';
import { BsFillSendFill } from 'react-icons/bs';

const Contact = () => {
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
        action="https://formspree.io/f/xyyalloy"
        method="POST"
        target="_blank"
        className="flex flex-col gap-6 w-full sm:w-4/5 lg:w-full xl:w-4/5 2xl:2/3 "
      >
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-2 ">
          <ContactInput
            type={'text'}
            inputName={'nom'}
            placeHolder={'Votre nom'}
            cutWidth={'70px'}
          />
          <ContactInput
            type={'text'}
            inputName={'entreprise'}
            placeHolder={'Votre entreprise'}
            cutWidth={'150px'}
          />
          <ContactInput
            type={'text'}
            inputName={'mail'}
            placeHolder={'Votre e-mail'}
            cutWidth={'85px'}
          />
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
