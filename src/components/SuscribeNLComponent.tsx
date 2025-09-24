import React, { useState, useEffect, useRef } from 'react';

interface MailerLiteFormProps {
    lang: string;
    t: {
        suscribise: string;
        checkPrivacy: string;
        errorForm1: string;
        errorForm2: string;
        errorForm3: string;
        privacity1: string;
        privacity2: string;
    };
}

declare global {
    interface Window {
        ml_webform_success_27423499?: () => void;
    }
}

const MailerLiteForm: React.FC<MailerLiteFormProps> = ({ lang, t }) => {
    const [privacyAccepted, setPrivacyAccepted] = useState(false);
    const [showCheckMessage, setShowCheckMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const mailerLiteReady = useRef(false);

    const emailInputRef = useRef<HTMLInputElement>(null);
    // No necesitamos una ref al formulario si vamos a dejar que el submit nativo ocurra directamente
    // const formRef = useRef<HTMLFormElement>(null);

    // Función de éxito de MailerLite
    const handleMailerLiteSuccess = () => {
        try {
            console.log("SUCCES redirectione");
            window.location.href = `/welcome/${lang}`;
            console.log("Redirection to /welcome/ was successful after MailerLite success.");
        } catch (e) {
            window.location.href = `/welcome/${lang}`;
        }
    };

    useEffect(() => {
        // Asegúrate de que la función global de MailerLite apunte a nuestra función manejadora.
        if (window.ml_webform_success_27423499 !== handleMailerLiteSuccess) {
            window.ml_webform_success_27423499 = handleMailerLiteSuccess;
        }
    }, [lang]);

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    // *** MANEJADOR DE ENVÍO REVISADO: NO HACE PREVENTDEFAULT INCONDICIONALMENTE ***
    const handleSubmit = async (event: React.FormEvent) => {
        // Siempre previene el default al principio para hacer nuestras validaciones
        event.preventDefault();

        setShowCheckMessage(false);
        setShowErrorMessage(false);

        if (!privacyAccepted) {
            setShowCheckMessage(true);
            return; // Detiene el envío si la privacidad no está aceptada
        }

        if (!emailInputRef.current || !validateEmail(emailInputRef.current.value)) {
            setShowErrorMessage(true);
            return; // Detiene el envío si el email no es válido
        }
    };

    const handleDivClick = () => {
    // ¡CAMBIO AQUÍ! Ahora usa la prop 'href'
    window.location.href = `/privacy/${lang}`; 
  };

    return (
        <div
            id="mlb2-27423499"
            className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-27423499 animate pb-12"
        >
            <div className="ml-form-align-center">
                <div className="ml-form-embedWrapper embedForm">
                    <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                        <div className="ml-form-embedContent" style={{ marginBottom: 0 }}></div>

                        <form
                            // Ya no necesitamos ref={formRef} si vamos a manipular el evento directamente
                            className="ml-block-form flex flex-col gap-4"
                            action="https://assets.mailerlite.com/jsonp/1607083/forms/157651417861981447/subscribe"
                            data-code="" method="post" target="_blank"
                            onSubmit={handleSubmit}
                        >
                            <div className="ml-form-formContent">
                                <div className="ml-form-fieldRow ml-last-item">
                                    <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required flex flex-col sm:flex-row gap-4">
                                        <input
                                            aria-label="email"
                                            id="email"
                                            aria-required="true"
                                            type="email"
                                            className="form-control flex-grow p-3 rounded-md border-accent border border-accent/15 text-accent text-lg bg-accent-bg focus:outline-none focus:ring-2 focus:ring-accent placeholder-accent/45"
                                            data-inputmask=""
                                            name="fields[email]"
                                            placeholder="Email"
                                            autoComplete="email"
                                            ref={emailInputRef}
                                        />
                                        <button
                                            type="submit"
                                            id="SubmitButton"
                                            className="primary w-full sm:w-1/3 p-3 bg-accent text-lg text-accent-bg rounded-md hover:bg-accent-bg hover:rounded-lg hover:border hover:border-accent/15 hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-dark"

                                        >
                                            {t.suscribise}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {showCheckMessage && (
                                <div id="checkMessage" className="p-3 text-xl text-red-700">
                                    &#x2193; {t.checkPrivacy}
                                </div>
                            )}

                            {showErrorMessage && (
                                <div id="errorMessage" className="p-3 text-xl text-red-700">
                                    <span>{t.errorForm1}</span>
                                    <br />
                                    <span>{t.errorForm2} &#x2193;</span>
                                    <br />
                                    <br />
                                    <span>{t.errorForm3}</span>
                                </div>
                            )}

                            <div className="flex items-center gap-2 ml-form-checkboxRow ml-validate-required">
                                <input
                                    type="checkbox"
                                    id="privacyAccepted"
                                    name="privacyAccepted"
                                    className="form-checkbox h-4 w-4 text-accent rounded-sm focus:ring-accent"
                                    checked={privacyAccepted}
                                    onChange={(e) => setPrivacyAccepted(e.target.checked)}
                                />
                                <div onClick={handleDivClick} className='cursor-pointer'>
                                    <label htmlFor="privacyAccepted" className="text-accent/45 text-base animate-links">
                                        {t.privacity1}{' '}
                                        <a
                                            href={`/privacy/${lang}`}
                                            target="_self"

                                            rel="noopener noreferrer"
                                            className="text-accent pb-2 InterLinks"
                                        >
                                            {t.privacity2}
                                        </a>
                                        .
                                    </label>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MailerLiteForm;