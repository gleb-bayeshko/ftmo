"use client";

import Image from "next/image.js";
import { useEffect, useState } from "react";

export default function CertificateContent({ id }) {
  const [privacyPolicyVisible, setPrivacyPolicyVisible] = useState(false);
  const [termsAndConditionsVisible, setTermsAndConditionsVisible] =
    useState(false);

  useEffect(() => {
    if (privacyPolicyVisible || termsAndConditionsVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [privacyPolicyVisible, termsAndConditionsVisible]);

  return (
    <>
      <div className="global-alert-container" id="globalAlertContainer" />
      <nav
        id="top-bar"
        className="navbar navbar--fixed navbar--main navbar--expand-lg"
        data-avatar-with-picture="false"
        style={{ top: 0 }}
      >
        <div className="container">
          <div className="navbar__content">
            <a
              href="https://trader.ftmo.com/accounts-overview"
              className="brand__image"
            />
          </div>
        </div>
      </nav>
      <div className="container" data-container-main="" style={{}}>
        <div className="layout-wrapper">
          {/* Sidebar main navigation */}
          <div className="page">
            <nav className="breadcrumb__container mb-3">
              <div
                className="breadcrumb__gradient breadcrumb__gradient--left"
                data-gradient="left"
                style={{ display: "none" }}
              />
              <ul className="breadcrumb" data-breadcrumb-scroll-container="">
                <li className="breadcrumb-item">
                  <a href="https://trader.ftmo.com/accounts-overview">Trader</a>
                </li>
                <li className="breadcrumb-item active">Certificates</li>
              </ul>
              <div
                className="breadcrumb__gradient breadcrumb__gradient--right"
                data-gradient="right"
                style={{ display: "none" }}
              />
            </nav>
            {/* Main content */}
            <div className="container mb-5 mb-md-auto">
              <div className="row">
                <div className="col-12">
                  <div className="alert alert--success">
                    <div className="alert__content">
                      <div className="alert__content-header">
                        <div className="alert__icon">
                          <i className="fi fi--binfo" />
                        </div>
                      </div>
                      <div className="alert__content-body">
                        <div>Certificate is verified by FTMO</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <div className="alert alert--secondary">
                    <div className="alert__content">
                      <div className="alert__content-header">
                        <div className="alert__icon">
                          <i className="fi fi--binfo" />
                        </div>
                      </div>
                      <div className="alert__content-body">
                        <div>
                          Check the name on your certificate to make sure it's
                          the one you verified with QR.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="portlet portlet--certificate text-center">
                    <div className="portlet__body certificates__image-wrapper certificates__share">
                      {/* <img
                        src={`/api/certificates/${id}`}
                        className="img-fluid"
                      /> */}
                      <Image
                        src={`/api/certificates/${id}`}
                        alt={`Certificate ${id}`}
                        width={2000}
                        height={400}
                        style={{ maxWidth: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-5">
                  <div className="alert alert--primary">
                    <div className="alert__content">
                      <div className="alert__content-header">
                        <div className="alert__icon">
                          <i className="fi fi--challenge-exclamation" />
                        </div>
                      </div>
                      <div className="alert__content-body">
                        <div>Are you ready to become an FTMO Trader?</div>
                      </div>
                    </div>
                    <div className="alert__button">
                      <a
                        href="https://trader.ftmo.com/start-challenge"
                        className="btn btn-sm btn-primary"
                      >
                        Start FTMO Challenge
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer mb-5 mb-md-auto">
              <div className="row my-4 small">
                <div className="col-12 small text-center text-md-end mb-md-1 mb-2 fw-bold">
                  <a href="#" id="ftmo-cookie-settings" className="d-none">
                    Cookie settings
                  </a>
                  &nbsp;
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#modal_privacy_policy"
                    onClick={() => setPrivacyPolicyVisible(true)}
                  >
                    Privacy policy
                  </a>
                  &nbsp;
                  <a
                    href="#"
                    id="footer__link-terms-conditions"
                    onClick={() => setTermsAndConditionsVisible(true)}
                    className="footer__link-default"
                  >
                    Terms &amp; Conditions
                  </a>
                </div>
                <div className="col-12 small">
                  <p>
                    All information provided on this site is intended solely for
                    educational purposes related to trading on financial markets
                    and does not serve in any way as a specific investment
                    recommendation, business recommendation, investment
                    opportunity analysis or similar general recommendation
                    regarding the trading of investment instruments. FTMO only
                    provides services of simulated trading and educational tools
                    for traders. The information on this site is not directed at
                    residents in any country or jurisdiction where such
                    distribution or use would be contrary to local laws or
                    regulations. FTMO companies do not act as a broker and do
                    not accept any deposits. The offered technical solution for
                    the FTMO platforms and data feed is powered by liquidity
                    providers.
                  </p>
                </div>
                <div className="col-12 small text-left">
                  2025 © Copyright - FTMO.com Made with
                  <span className="text-danger">❤</span> for trading.
                </div>
                <div className="col-12">
                  <small>Version: 43a0ba2 </small>
                </div>
              </div>
            </div>
            {/* Mobile extra spacing */}
            <div className="mb-5 mb-md-0" />
          </div>
        </div>
        {/* layout wrapper header main */}
      </div>

      <div
        className={`modal fade ${privacyPolicyVisible ? "show" : ""}`}
        tabIndex={-1}
        id="modal_privacy_policy"
        style={{ display: privacyPolicyVisible ? "block" : "none" }}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Privacy policy</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setPrivacyPolicyVisible(false)}
              />
            </div>
            <div className="modal-body">
              <p>
                When using our services we process personal data of our
                customers (“
                <strong>you</strong>”, “<strong>your</strong>” or the “
                <strong>Customer</strong>”). This Privacy Policy (the “
                <strong>Policy</strong>”) provides you with information about
                how your data are processed.
              </p>
              <p>
                In this Privacy Policy, you will find information regarding the
                following:
              </p>
              <ol>
                <li>
                  Who is the controller of your personal data and whom to
                  contact?
                </li>
                <li>
                  What information do we collect about you and how do we obtain
                  it?
                </li>
                <li>How do we use your personal data?</li>
                <li>How do we store personal data and how are they secured?</li>
                <li>To whom do we make your personal data available?</li>
                <li>
                  Do we transfer your data to third countries and international
                  organisations?
                </li>
                <li>What are your rights and how can you exercise them?</li>
              </ol>
              <ol>
                <li>
                  WHO IS THE CONTROLLER OF YOUR PERSONAL DATA AND WHOM TO
                  CONTACT?
                </li>
              </ol>
              <p>
                The controller of personal data is FTMO Evaluation Global
                s.r.o., with its registered office at&nbsp;Opletalova 1417/25,
                Nové Město, 110 00 Prague 1, Czech Republic, Business ID: 092 13
                651, registered in&nbsp;the Commercial Register maintained by
                the Municipal Court in Prague, file no. C 332660 (hereinafter
                referred to as “<strong>we</strong>”, “<strong>our</strong>”, “
                <strong>our Company</strong>”, or “<strong>Controller</strong>
                ”).
              </p>
              <p>
                You can contact FTMO Evaluation Global s.r.o. at Opletalova
                1417/25, Nové Město, 110 00 Prague&nbsp;1, or at
                privacy@ftmo.com regarding any questions and the exercise of
                rights relating to&nbsp;the&nbsp;processing of your personal
                data.
              </p>
              <ol start={2}>
                <li>
                  WHAT INFORMATION DO WE COLLECT ABOUT YOU AND HOW DO WE OBTAIN
                  IT?
                </li>
              </ol>
              <p>
                In this section, you can read general information about which of
                your personal data we collect and&nbsp;how we collect it.
                Detailed information on the purposes for which we process
                personal data is&nbsp;given in Section 3 of this Policy. All
                information on the basis of which we can directly or indirectly
                identify you or which is related to you is considered personal
                data.
              </p>
              <p>
                We obtain most of the data we collect about you directly from
                you in connection with your use of&nbsp;our&nbsp;services. This
                includes, in particular:
              </p>
              <ol>
                <li>
                  Data that you provide to us yourself, especially when you
                  register on the website, enter information into your user
                  account, order services, participate in our events and
                  projects, or when you communicate with us through customer
                  support or social networks. These are&nbsp;
                  <strong>identification and contact data</strong>, specifically
                  the name, surname, telephone number, e‑mail address, postal
                  address, date of birth, user name and password, and business
                  identification number or tax registration number, if you are
                  an entrepreneur;&nbsp;<strong>payment data</strong>, such as
                  bank details; and&nbsp;<strong>other data</strong>, such as
                  records of communication between you and our company or
                  details of&nbsp;any&nbsp;warranty claims.
                </li>
              </ol>
              <ol start={2}>
                <li>
                  Data that we automatically collect when you use our services.
                  These are&nbsp;<strong>data about your device</strong>
                  &nbsp;(such as the IP address, device type, operating system,
                  browser used, connection provider);&nbsp;
                  <strong>website usage data&nbsp;</strong>(such as the date,
                  time and duration of visit, country from&nbsp;which you visit
                  the website, website browsing history), and&nbsp;
                  <strong>data on the use of&nbsp;services</strong>&nbsp;(such
                  as the login and logout information, your account settings,
                  value of your fictitious capital, your account currency,
                  business strategy).
                </li>
              </ol>
              <p>
                Some data about you is provided to us by third parties, such as
                providers of trading platforms that you choose for use of our
                services, and social network operators if you decide to link
                your social networking accounts to an account on the website.
                This includes:
              </p>
              <ol start={3}>
                <li>
                  <strong>Data about the simulated transactions</strong>
                  &nbsp;you have completed (such as the type of financial
                  instrument, time of opening and closing the position, amount
                  of investment, profit and loss) and&nbsp;
                  <strong>data from social networks</strong>&nbsp;(user name,
                  profile picture, e-mail address associated
                  with&nbsp;the&nbsp;account on the social network). For
                  information on how your personal data are processed by trading
                  platform providers and social network operators for their own
                  purposes, please refer to the privacy policies of those
                  parties.
                </li>
              </ol>
              <ol start={3}>
                <li>How do we use your personal data?</li>
              </ol>
              <p>We use personal data for the following purposes:</p>
              <ul>
                <li>
                  <strong>Registration and user account</strong>
                </li>
              </ul>
              <p>
                In order to use the services, you must register on the website
                and create your account, and for this purpose we process your
                personal data.
              </p>
              <p>
                <u>Personal data</u>: identification and contact data; we may
                also process your data related to&nbsp;the settings of your user
                account.
              </p>
              <p>
                <u>Legal ground for the processing</u>: Processing is necessary
                for the performance of the contract, and the provision of these
                personal data is required, as we cannot register your user
                account without them.
              </p>
              <ul>
                <li>
                  <strong>
                    Provision of services and exercise of rights and obligations
                    under the contract between us and the customer
                  </strong>
                </li>
              </ul>
              <p>
                In order to be able to provide you with our services, i.e. in
                particular to provide you with the relevant access, tools and
                support, and to carry out trades, we need to process your
                personal data. For this purpose, the following shall apply:
              </p>
              <p>
                <u>Personal data:</u>&nbsp;Identification and contact data and,
                in the case of paid services, also payment data, data on the use
                of the services, data on the simulated trades and, if you decide
                to link your social networks accounts with the account on the
                website, also data from social networks.
              </p>
              <p>
                <u>Legal ground for the processing:</u>&nbsp;Processing is
                necessary for the performance of the contract
                on&nbsp;the&nbsp;basis of which we provide our services, or on
                the basis of our legitimate interest. After&nbsp;we&nbsp;stop
                providing you with services, we process personal information for
                a limited period of&nbsp;time. Such processing is necessary for
                the purposes of exercising and protecting our rights based on
                our legitimate interest.
              </p>
              <ul>
                <li>
                  <strong>
                    Marketing communication about&nbsp;our&nbsp;services and
                    products or about events in which we take part
                  </strong>
                </li>
              </ul>
              <p>
                If you are our current or past customer, we may from time to
                time send you marketing communications that relate
                to&nbsp;our&nbsp;services. We may also send you commercial
                communications to the extent to which you give us your consent.
                Each of the e-mails sent will be marked as a business
                communication and each of&nbsp;them will contain a link with the
                help of which you can easily unsubscribe from the business
                communications. For this purpose, the following shall apply:
              </p>
              <p>
                <u>Personal data:</u>&nbsp;Identification and contact data.
              </p>
              <p>
                <u>Legal ground for the processing:</u>&nbsp;If we have provided
                you with our services, we may from time to time send you
                marketing communications based on our legitimate interest,
                namely keeping in touch with our customers. If&nbsp;you give us
                your consent to process your data for marketing purposes, then
                we process your data on&nbsp;the basis thereof.
              </p>
              <ul>
                <li>
                  <strong>Customer support and communication</strong>
                </li>
              </ul>
              <p>
                If you use our customer support services, we will process your
                personal data. For this purpose, the&nbsp;following shall apply:
              </p>
              <p>
                <u>Personal data:</u>&nbsp;Identification data, contact data,
                other data and data from social networks, if you contact us
                through social networks.
              </p>
              <p>
                <u>Legal ground for the processing:</u>&nbsp;Processing is based
                on our legitimate interest, namely in maintaining customer
                satisfaction and supporting the use of our services.
              </p>
              <ul>
                <li>
                  <strong>Improving services</strong>
                </li>
              </ul>
              <p>
                If you use some of our services, we will process your personal
                data in order to develop, test and&nbsp;enhance the services and
                improve their security. For this purpose, the following shall
                apply:
              </p>
              <p>
                <u>Personal data:</u>&nbsp;Identification and contact data, data
                about your device, website usage data, data on the use of the
                services, and data on the simulated trades.
              </p>
              <p>
                <u>Legal ground for the processing:</u>&nbsp;Processing is based
                on our legitimate interest, namely in improving our services.
              </p>
              <ul>
                <li>
                  <strong>Analytics</strong>
                </li>
              </ul>
              <p>
                To obtain information about how our website and our services are
                used, we analyse customer behaviour. For this purpose, the
                following shall apply:
              </p>
              <p>
                <u>Personal data:</u>&nbsp;Identification data, contact data,
                payment data, data about your device, website usage data, data
                on the use of the services, and data on the simulated trades.
              </p>
              <p>
                <u>Legal ground for the processing:</u>&nbsp;Processing is based
                on our legitimate interest, namely in ascertaining customer
                behaviour and estimating customer preferences.
              </p>
              <ol start={4}>
                <li>How do we store personal data and how are they secured?</li>
              </ol>
              <p>
                We process your personal data in an encrypted database on
                computers and other devices. In order to ensure protection
                against unauthorised access or unauthorised alteration,
                disclosure or destruction of the data that we collect and
                process, we have adopted organisational and technical measures
                to&nbsp;secure them, which we strictly adhere to.
              </p>
              <ol start={5}>
                <li>How long do we process your data?</li>
              </ol>
              <p>
                Personal data are processed to the extent necessary to fulfil
                the purposes described above and&nbsp;for&nbsp;the&nbsp;time
                necessary to achieve those purposes or for a period directly
                stipulated by law. Thereafter, the personal data are deleted or
                anonymised. We process personal data for the following periods
                of time:
              </p>
              <ol>
                <li>
                  for the purpose of performance of contract and for the
                  exercise of rights and obligations in&nbsp;connection with the
                  contract, including any complaints, settlement of damage
                  claims or&nbsp;related litigation, personal data are processed
                  for the necessary period of time, but&nbsp;not&nbsp;more than
                  10 years from the termination of the last contract;
                </li>
                <li>
                  for the purpose of sending business communications without
                  your given consent, personal data are processed for a maximum
                  of 5 years from the expiry of the last contract between us or
                  until you raise an objection or unsubscribe from the business
                  communications;
                </li>
                <li>
                  for the purpose of enhancing our services, we usually process
                  personal data for a maximum period of 6 months;
                </li>
                <li>
                  in order to fulfil our legal obligations, we process personal
                  data for the period set out by&nbsp;the&nbsp;relevant legal
                  regulations (e.g. in accordance with tax regulations for a
                  period of&nbsp;10&nbsp;years from the issuance of the relevant
                  documents for your order);
                </li>
                <li>
                  if you have given your consent, for the period specified in
                  the consent.
                </li>
              </ol>
              <ol start={6}>
                <li>DATA SHARING and TRANSFERS TO&nbsp;THIRD COUNTRIES</li>
              </ol>
              <p>
                We make your data available or transfer them to persons that
                help us provide our services, in particular the following
                persons:
              </p>
              <ol>
                <li>
                  The trading platform provider, in order to enable you to
                  perform the simulated trades.
                </li>
                <li>
                  Other third parties that help us run our website and provide
                  our services (such as other companies in our group, hosting
                  and cloud service providers, payment system operators
                  and&nbsp;financial institutions, providers of customer support
                  tools and services, IT companies and system administrators,
                  marketing and communication agencies, consultants and postal
                  service providers);
                </li>
              </ol>
              <p>
                In addition, we may transfer your data to persons in respect of
                which you give your consent thereto, as well as in the cases
                where it is our obligation under the law or under a judicial or
                any other legally binding decision. Each such entity to whom
                personal data are transferred is contractually obligated
                to&nbsp;protect your personal data in accordance with legal
                provisions and to process the data exclusively according to our
                instructions.
              </p>
              <p>
                Certain third parties collect personal data for their own
                purposes as controllers. In such a case, their&nbsp;own rules
                for the processing of personal data shall apply.
              </p>
              <ol start={7}>
                <li>your rights</li>
              </ol>
              <p>
                You can exercise all your rights mentioned below, including the
                withdrawal of your consent, by sending a request to
                privacy@ftmo.com. In connection with the processing of personal
                data you have the following rights:
              </p>
              <ul>
                <li>
                  <strong>Right of access to personal data</strong>
                </li>
              </ul>
              <p>
                You can ask us at any time to send you a confirmation as to
                whether or not your personal data are being processed. If we
                process your data, we will provide you with further details on
                the processing. If you request it, we will also provide you with
                a copy of the personal data processed. Please note that the
                first copy is free of charge, but later copies will be provided
                for a small fee.
              </p>
              <ul>
                <li>
                  <strong>Right to rectification of personal data</strong>
                </li>
              </ul>
              <p>
                If we process your personal data inaccurately, you can notify us
                of this fact, and we will rectify the&nbsp;inaccurate personal
                data without undue delay. If you register on the Website, you
                will be able to&nbsp;rectify and amend your personal data
                yourself by editing your user account.
              </p>
              <ul>
                <li>
                  <strong>
                    Right to erasure of personal data (“right to be forgotten”)
                  </strong>
                </li>
              </ul>
              <p>
                You have the right to obtain from us erasure of personal data
                concerning you without undue delay in the following cases:
              </p>
              <ul>
                <li>
                  If the data are no longer necessary in relation to the
                  purposes for which we have collected or&nbsp;otherwise
                  processed them;
                </li>
                <li>
                  If you withdraw your consent to their processing and, at the
                  same time, there will be no&nbsp;other&nbsp;legal ground for
                  their processing (this only applies in the cases where we
                  process personal data on the basis of your consent);
                </li>
                <li>
                  If you object and there are no overriding legitimate grounds
                  for the processing, or&nbsp;if&nbsp;you&nbsp;object to the
                  processing for direct marketing purposes; or
                </li>
                <li>If your personal data are processed unlawfully.</li>
              </ul>
              <p>
                We will not be able to act on the request for erasure of
                personal data if their processing is necessary for exercising
                the right of freedom of expression and information, for
                compliance with any of our&nbsp;legal obligations, for the
                performance of a task carried out in the public interest, for
                the establishment, exercise, or defence of our legal claims, or
                for other reasons provided for by law.
              </p>
              <ul>
                <li>
                  <strong>Right to restriction of processing</strong>
                </li>
              </ul>
              <p>
                In cases stated in article 18 of the GDRP, you have the right to
                obtain from us restriction of processing of your personal data
                for a certain period.
              </p>
              <ul>
                <li>
                  <strong>
                    Right to data portability and to the provision of data in a
                    machine-readable format
                  </strong>
                </li>
              </ul>
              <p>
                In the case of automated processing based on your consent or
                performance of the contract, you have the right to receive the
                data in a structured, commonly used and machine-readable format
                and&nbsp;to&nbsp;have them transmitted by us to another personal
                data controller.
              </p>
              <ul>
                <li>
                  <strong>Right to object</strong>
                </li>
              </ul>
              <p>
                If we process personal data on the basis of our legitimate
                interest, you have the right to object to&nbsp;such processing.
                If you file such an objection, we will not be able to process
                your personal data unless we demonstrate compelling legitimate
                grounds for the processing which override your interests or
                rights and freedoms, or for the establishment, exercise or
                defence of our legal claims.
              </p>
              <p>
                In case we process your personal data for marketing purposes
                about our products and services, we will terminate the
                processing without undue delay upon receipt of the objection. In
                such a case, we will no longer be able to send you offers of our
                products and services.
              </p>
              <ul>
                <li>
                  <strong>Right to withdraw consent</strong>
                </li>
              </ul>
              <p>
                If processing is based on your consent, you have the right to
                withdraw that consent at any time. Withdrawal of consent does
                not affect the lawfulness of processing based on the consent
                given before its withdrawal.
              </p>
              <ul>
                <li>
                  <strong>
                    Right not to be the subject of automated decision-making
                  </strong>
                </li>
              </ul>
              <p>
                Except where processing is necessary for entering into, or
                performance of, a contract, where this is&nbsp;permitted by
                applicable law, or based on your express consent, you have the
                right not to be the&nbsp;subject of any decision which is based
                solely on automated processing, including profiling,
                which&nbsp;produces legal effects concerning you or similarly
                affects you to a significant extent.
              </p>
              <ul>
                <li>
                  <strong>
                    Right to lodge a complaint with the supervisory authority
                  </strong>
                </li>
              </ul>
              <p>
                If you believe that we are processing your data in violation of
                the relevant legal regulations, you can lodge a complaint with
                the relevant supervisory authority. Based on our registered
                office, our relevant supervisory authority is The Office for
                Personal Data Protection with its address at Pplk. Sochora 27,
                Prague 7, postcode 170 00, Czech Republic, or email&nbsp;
                <a href="mailto:posta@uoou.cz">posta@uoou.cz</a>. More
                information about the Office can be found on the following
                website:&nbsp;
                <a href="https://www.uoou.cz/en/">https://www.uoou.cz/en/</a>.
              </p>
              <ol start={8}>
                <li>FINAL PROVISIONS</li>
              </ol>
              <p>
                We may change this policy unilaterally, but we will do so only
                when necessary and we will notify you about such change. You can
                find the latest version of this policy in your Client Section.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary modal-footer__button"
                data-bs-dismiss="modal"
                onClick={() => setPrivacyPolicyVisible(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal fade ${termsAndConditionsVisible ? "show" : ""}`}
        tabIndex={-1}
        id="modal_terms_conditions"
        data-country="FR"
        style={{ display: termsAndConditionsVisible ? "block" : "none" }}
        aria-modal="true"
        role="dialog"
      >
        <div
          className="modal-dialog modal-xl modal-fullscreen"
          role="document"
          style={{ width: "100%", maxWidth: "100%" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Terms &amp; Conditions</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setTermsAndConditionsVisible(false)}
              />
            </div>
            <div
              className="modal-body text-center"
              id="modal_body_terms_conditions"
            >
              <iframe
                src="/gtc-global-2023-07-13-64afaaaddce66.pdf"
                height="100%"
                width="100%"
                className="pdf-viewer"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary modal-footer__button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`modal-backdrop fade ${
          privacyPolicyVisible || termsAndConditionsVisible ? "show" : ""
        }`}
        style={{
          display:
            privacyPolicyVisible || termsAndConditionsVisible
              ? "block"
              : "none",
        }}
      ></div>
    </>
  );
}
