import Link from 'next/link';

const link = 'text-[#003afa] underline-offset-2 hover:underline';
const p = 'text-[15px] leading-[1.5] text-[#595959]';
const hSection = 'text-[15px] font-bold text-black';
const hSub = 'text-[15px] font-bold text-black';

function Br() {
  return <div className="h-6" aria-hidden />;
}

const tableCell = 'border border-black p-3 align-top text-[15px] leading-[1.5] text-[#595959]';
const tableHead = `${tableCell} font-semibold`;

export function PrivacyPolicySections8to13() {
  return (
    <>
      <section id="privacyrights" aria-labelledby="heading-privacyrights">
        <h2 id="heading-privacyrights" className={hSection}>
          8. WHAT ARE YOUR PRIVACY RIGHTS?
        </h2>
        <Br />
        <p className={p}>
          <strong>
            <em>In Short:</em>
          </strong>
          <em>
            {' '}
            In some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and
            Canada, you have rights that allow you greater access to and control over your personal
            information. You may review, change, or terminate your account at any time.
          </em>
        </p>
        <Br />
        <p className={p}>
          In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable
          data protection laws. These may include the right (i) to request access and obtain a copy of your
          personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of
          your personal information; (iv) if applicable, to data portability; and (v) not to be subject to
          automated decision-making. In certain circumstances, you may also have the right to object to the
          processing of your personal information. You can make such a request by contacting us by using the
          contact details provided in the section &quot;
          <Link className={link} href="#contact">
            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </Link>
          &quot; below.
        </p>
        <Br />
        <p className={p}>
          We will consider and act upon any request in accordance with applicable data protection laws.
        </p>
        <p className={p}>&nbsp;</p>
        <p className={p}>
          If you are located in the EEA or UK and you believe we are unlawfully processing your personal
          information, you also have the right to complain to your{' '}
          <a
            className={link}
            href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Member State data protection authority
          </a>{' '}
          or{' '}
          <a
            className={link}
            href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
            target="_blank"
            rel="noopener noreferrer"
          >
            UK data protection authority
          </a>
          .
        </p>
        <Br />
        <p className={p}>
          If you are located in Switzerland, you may contact the{' '}
          <a
            className={link}
            href="https://www.edoeb.admin.ch/edoeb/en/home.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Federal Data Protection and Information Commissioner
          </a>
          .
        </p>
        <Br />
        <p id="withdrawconsent" className={p}>
          <strong>
            <u>Withdrawing your consent:</u>
          </strong>{' '}
          If we are relying on your consent to process your personal information, which may be express and/or
          implied consent depending on the applicable law, you have the right to withdraw your consent at any
          time. You can withdraw your consent at any time by contacting us by using the contact details
          provided in the section &quot;
          <Link className={link} href="#contact">
            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </Link>
          &quot; below.
        </p>
        <Br />
        <p className={p}>
          However, please note that this will not affect the lawfulness of the processing before its withdrawal
          nor, when applicable law allows, will it affect the processing of your personal information
          conducted in reliance on lawful processing grounds other than consent.
        </p>
        <Br />
        <p className={p}>
          <strong>
            <u>Opting out of marketing and promotional communications:</u>
          </strong>
          <strong>
            <u> </u>
          </strong>
          You can unsubscribe from our marketing and promotional communications at any time by clicking on
          the unsubscribe link in the emails that we send, or by contacting us using the details provided in
          the section &quot;
          <Link className={link} href="#contact">
            HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </Link>
          &quot; below. You will then be removed from the marketing lists. However, we may still communicate
          with you — for example, to send you service-related messages that are necessary for the
          administration and use of your account, to respond to service requests, or for other non-marketing
          purposes.
        </p>
        <Br />
        <h3 className={hSub}>Account Information</h3>
        <Br />
        <p className={p}>
          If you would at any time like to review or change the information in your account or terminate your
          account, you can:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Contact us using the contact information provided.</li>
        </ul>
        <Br />
        <p className={p}>
          Upon your request to terminate your account, we will deactivate or delete your account and
          information from our active databases. However, we may retain some information in our files to
          prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or
          comply with applicable legal requirements.
        </p>
        <Br />
        <p className={p}>
          If you have questions or comments about your privacy rights, you may email us at{' '}
          <a className={link} href="mailto:hi@letswingle.com">
            hi@letswingle.com
          </a>
          .
        </p>
      </section>

      <Br />
      <Br />

      <section id="DNT" aria-labelledby="heading-dnt">
        <h2 id="heading-dnt" className={hSection}>
          9. CONTROLS FOR DO-NOT-TRACK FEATURES
        </h2>
        <Br />
        <p className={p}>
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track
          (&quot;DNT&quot;) feature or setting you can activate to signal your privacy preference not to have
          data about your online browsing activities monitored and collected. At this stage no uniform
          technology standard for recognizing and implementing DNT signals has been finalized. As such, we
          do not currently respond to DNT browser signals or any other mechanism that automatically
          communicates your choice not to be tracked online. If a standard for online tracking is adopted
          that we must follow in the future, we will inform you about that practice in a revised version of
          this privacy notice.
        </p>
      </section>

      <Br />
      <Br />

      <section id="uslaws" aria-labelledby="heading-uslaws">
        <h2 id="heading-uslaws" className={hSection}>
          10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
        </h2>
        <Br />
        <p className={p}>
          <strong>
            <em>In Short: </em>
          </strong>
          <em>
            If you are a resident of California, you are granted specific rights regarding access to your
            personal information.
          </em>
        </p>
        <Br />
        <p className={p}>
          <strong>What categories of personal information do we collect?</strong>
        </p>
        <Br />
        <p className={p}>
          We have collected the following categories of personal information in the past twelve (12) months:
        </p>
        <Br />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <th className={tableHead} scope="col" style={{ width: '33.8274%' }}>
                  Category
                </th>
                <th className={tableHead} scope="col" style={{ width: '51.4385%' }}>
                  Examples
                </th>
                <th className={`${tableHead} text-center`} scope="col" style={{ width: '14.9084%' }}>
                  Collected
                </th>
              </tr>
              <tr>
                <td className={tableCell}>A. Identifiers</td>
                <td className={tableCell}>
                  Contact details, such as real name, alias, postal address, telephone or mobile contact number,
                  unique personal identifier, online identifier, Internet Protocol address, email address, and
                  account name
                </td>
                <td className={`${tableCell} text-center align-middle`}>NO</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Br />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className={tableCell} style={{ width: '33.8274%' }}>
                  B. Personal information as defined in the California Customer Records statute
                </td>
                <td className={tableCell} style={{ width: '51.4385%' }}>
                  Name, contact information, education, employment, employment history, and financial
                  information
                </td>
                <td className={`${tableCell} text-center`}>NO</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Br />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              <tr>
                <td className={tableCell} style={{ width: '33.8274%' }}>
                  C. Protected classification characteristics under state or federal law
                </td>
                <td className={tableCell} style={{ width: '51.4385%' }}>
                  Gender and date of birth
                </td>
                <td className={`${tableCell} text-center`}>NO</td>
              </tr>
              <tr>
                <td className={tableCell}>D. Commercial information</td>
                <td className={tableCell}>
                  Transaction information, purchase history, financial details, and payment information
                </td>
                <td className={`${tableCell} text-center`}>NO</td>
              </tr>
              <tr>
                <td className={tableCell}>E. Biometric information</td>
                <td className={tableCell}>Fingerprints and voiceprints</td>
                <td className={`${tableCell} text-center`}>NO</td>
              </tr>
              <tr>
                <td className={tableCell}>F. Internet or other similar network activity</td>
                <td className={tableCell}>
                  Browsing history, search history, online behavior, interest data, and interactions with our
                  and other websites, applications, systems, and advertisements
                </td>
                <td className={`${tableCell} text-center`}>NO</td>
              </tr>
              <tr>
                <td className={tableCell}>G. Geolocation data</td>
                <td className={tableCell}>Device location</td>
                <td className={`${tableCell} text-center`}>NO</td>
              </tr>
              <tr>
                <td className={tableCell}>H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
                <td className={tableCell}>
                  Images and audio, video or call recordings created in connection with our business activities
                </td>
                <td className={`${tableCell} text-center`}>NO</td>
              </tr>
              <tr>
                <td className={tableCell}>I. Professional or employment-related information</td>
                <td className={tableCell}>
                  Business contact details in order to provide you our Services at a business level or job
                  title, work history, and professional qualifications if you apply for a job with us
                </td>
                <td className={`${tableCell} text-center`}>NO</td>
              </tr>
              <tr>
                <td className={tableCell}>J. Education Information</td>
                <td className={tableCell}>Student records and directory information</td>
                <td className={`${tableCell} text-center`}>NO</td>
              </tr>
              <tr>
                <td className={tableCell}>K. Inferences drawn from collected personal information</td>
                <td className={tableCell}>
                  Inferences drawn from any of the collected personal information listed above to create a
                  profile or summary about, for example, an individual&apos;s preferences and characteristics
                </td>
                <td className={`${tableCell} text-center`}>YES</td>
              </tr>
              <tr>
                <td className={tableCell}>L. Sensitive personal Information</td>
                <td className={tableCell} />
                <td className={`${tableCell} text-center`}>NO</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Br />
        <p className={p}>We will use and retain the collected personal information as needed to provide the Services or for:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            Category K - As long as the user has an account with us
          </li>
        </ul>
        <Br />
        <p className={p}>
          We may also collect other personal information outside of these categories through instances where
          you interact with us in person, online, or by phone or mail in the context of:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>Receiving help through our customer support channels;</li>
          <li>Participation in customer surveys or contests; and</li>
          <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
        </ul>
        <Br />
        <p className={p}>
          <strong>How do we use and share your personal information?</strong>
        </p>
        <Br />
        <p className={p}>
          Learn about how we use your personal information in the section, &quot;
          <Link className={link} href="#infouse">
            HOW DO WE PROCESS YOUR INFORMATION?
          </Link>
          &quot;
        </p>
        <Br />
        <p className={p}>
          <strong>Will your information be shared with anyone else?</strong>
        </p>
        <Br />
        <p className={p}>
          We may disclose your personal information with our service providers pursuant to a written contract
          between us and each service provider. Learn more about how we disclose personal information to in the
          section, &quot;
          <Link className={link} href="#whoshare">
            WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </Link>
          &quot;
        </p>
        <Br />
        <p className={p}>
          We may use your personal information for our own business purposes, such as for undertaking internal
          research for technological development and demonstration. This is not considered to be
          &quot;selling&quot; of your personal information.
        </p>
        <Br />
        <p className={p}>
          We have not disclosed, sold, or shared any personal information to third parties for a business or
          commercial purpose in the preceding twelve (12) months. We will not sell or share personal
          information in the future belonging to website visitors, users, and other consumers.
        </p>
        <Br />
        <p className={`${hSub}`}>California Residents</p>
        <Br />
        <p className={p}>
          California Civil Code Section 1798.83, also known as the &quot;Shine The Light&quot; law permits our
          users who are California residents to request and obtain from us, once a year and free of charge,
          information about categories of personal information (if any) we disclosed to third parties for
          direct marketing purposes and the names and addresses of all third parties with which we shared
          personal information in the immediately preceding calendar year. If you are a California resident and
          would like to make such a request, please submit your request in writing to us using the contact
          information provided below.
        </p>
        <Br />
        <p className={p}>
          If you are under 18 years of age, reside in California, and have a registered account with the
          Services, you have the right to request removal of unwanted data that you publicly post on the
          Services. To request removal of such data, please contact us using the contact information provided
          below and include the email address associated with your account and a statement that you reside in
          California. We will make sure the data is not publicly displayed on the Services, but please be aware
          that the data may not be completely or comprehensively removed from all our systems (e.g., backups,
          etc.).
        </p>
        <Br />
        <p className={p}>
          <strong>
            <u>CCPA Privacy Notice</u>
          </strong>
        </p>
        <Br />
        <p className={p}>This section applies only to California residents. Under the California Consumer Privacy Act (CCPA), you have the rights listed below.</p>
        <Br />
        <p className={p}>
          The California Code of Regulations defines a &quot;residents&quot; as:
        </p>
        <Br />
        <div className="ml-5 space-y-2">
          <p className={p}>(1) every individual who is in the State of California for other than a temporary or transitory purpose and</p>
          <p className={p}>
            (2) every individual who is domiciled in the State of California who is outside the State of
            California for a temporary or transitory purpose
          </p>
        </div>
        <Br />
        <p className={p}>All other individuals are defined as &quot;non-residents.&quot;</p>
        <Br />
        <p className={p}>
          If this definition of &quot;resident&quot; applies to you, we must adhere to certain rights and
          obligations regarding your personal information.
        </p>
        <Br />
        <p className={p}>
          <strong>Your rights with respect to your personal data</strong>
        </p>
        <Br />
        <p className={p}>
          <u>Right to request deletion of the data — Request to delete</u>
        </p>
        <Br />
        <p className={p}>
          You can ask for the deletion of your personal information. If you ask us to delete your personal
          information, we will respect your request and delete your personal information, subject to certain
          exceptions provided by law, such as (but not limited to) the exercise by another consumer of his or
          her right to free speech, our compliance requirements resulting from a legal obligation, or any
          processing that may be required to protect against illegal activities.
        </p>
        <Br />
        <p className={p}>
          <u>Right to be informed — Request to know</u>
        </p>
        <Br />
        <p className={p}>Depending on the circumstances, you have a right to know:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>whether we collect and use your personal information;</li>
          <li>the categories of personal information that we collect;</li>
          <li>the purposes for which the collected personal information is used;</li>
          <li>whether we sell or share personal information to third parties;</li>
          <li>the categories of personal information that we sold, shared, or disclosed for a business purpose;</li>
          <li>the categories of third parties to whom the personal information was sold, shared, or disclosed for a business purpose;</li>
          <li>the business or commercial purpose for collecting, selling, or sharing personal information; and</li>
          <li>the specific pieces of personal information we collected about you.</li>
        </ul>
        <Br />
        <p className={p}>
          In accordance with applicable law, we are not obligated to provide or delete consumer information
          that is de-identified in response to a consumer request or to re-identify individual data to verify a
          consumer request.
        </p>
        <Br />
        <p className={p}>
          <u>Right to Non-Discrimination for the Exercise of a Consumer&apos;s Privacy Rights</u>
        </p>
        <Br />
        <p className={p}>We will not discriminate against you if you exercise your privacy rights.</p>
        <Br />
        <p className={p}>
          <u>Right to Limit Use and Disclosure of Sensitive Personal Information</u>
        </p>
        <Br />
        <Br />
        <p className={p}>We do not process consumer&apos;s sensitive personal information.</p>
        <Br />
        <Br />
        <p className={p}>
          <u>Verification process</u>
        </p>
        <Br />
        <p className={p}>
          Upon receiving your request, we will need to verify your identity to determine you are the same
          person about whom we have the information in our system. These verification efforts require us to ask
          you to provide information so that we can match it with information you have previously provided us.
          For instance, depending on the type of request you submit, we may ask you to provide certain
          information so that we can match the information you provide with the information we already have on
          file, or we may contact you through a communication method (e.g., phone or email) that you have
          previously provided to us. We may also use other verification methods as the circumstances dictate.
        </p>
        <Br />
        <p className={p}>
          We will only use personal information provided in your request to verify your identity or authority
          to make the request. To the extent possible, we will avoid requesting additional information from you
          for the purposes of verification. However, if we cannot verify your identity from the information
          already maintained by us, we may request that you provide additional information for the purposes of
          verifying your identity and for security or fraud-prevention purposes. We will delete such additionally
          provided information as soon as we finish verifying you.
        </p>
        <Br />
        <p className={p}>
          <u>Other privacy rights</u>
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>You may object to the processing of your personal information.</li>
          <li>
            You may request correction of your personal data if it is incorrect or no longer relevant, or ask
            to restrict the processing of the information.
          </li>
          <li>
            You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny
            a request from an authorized agent that does not submit proof that they have been validly
            authorized to act on your behalf in accordance with the CCPA.
          </li>
          <li>
            You may request to opt out from future selling or sharing of your personal information to third
            parties. Upon receiving an opt-out request, we will act upon the request as soon as feasibly
            possible, but no later than fifteen (15) days from the date of the request submission.
          </li>
        </ul>
        <Br />
        <p className={p}>
          To exercise these rights, you can contact us by submitting a{' '}
          <a
            className={link}
            href="https://app.termly.io/notify/4b88abef-2d11-4bc1-9e51-2b9f90d426a5"
            target="_blank"
            rel="noopener noreferrer"
          >
            data subject access request
          </a>
          , by email at{' '}
          <a className={link} href="mailto:hi@letswingle.com">
            hi@letswingle.com
          </a>
          , or by referring to the contact details at the bottom of this document. If you have a complaint
          about how we handle your data, we would like to hear from you.
        </p>
      </section>

      <Br />
      <Br />

      <section id="policyupdates" aria-labelledby="heading-policyupdates">
        <h2 id="heading-policyupdates" className={hSection}>
          11. DO WE MAKE UPDATES TO THIS NOTICE?
        </h2>
        <Br />
        <p className={p}>
          <em>
            <strong>In Short: </strong>Yes, we will update this notice as necessary to stay compliant with relevant laws.
          </em>
        </p>
        <Br />
        <p className={p}>
          We may update this privacy notice from time to time. The updated version will be indicated by an
          updated &quot;Revised&quot; date and the updated version will be effective as soon as it is
          accessible. If we make material changes to this privacy notice, we may notify you either by
          prominently posting a notice of such changes or by directly sending you a notification. We encourage
          you to review this privacy notice frequently to be informed of how we are protecting your
          information.
        </p>
      </section>

      <Br />
      <Br />

      <section id="contact" aria-labelledby="heading-contact">
        <h2 id="heading-contact" className={hSection}>
          12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        </h2>
        <Br />
        <p className={p}>
          If you have questions or comments about this notice, you may email us at{' '}
          <a className={link} href="mailto:hi@letswingle.com">
            hi@letswingle.com
          </a>{' '}
          or contact us by post at:
        </p>
        <Br />
        <address className={`${p} not-italic`}>
          <p>LETS WINGLE S.L.</p>
          <p>Calle Lagasca, 138</p>
          <p>5 exterior izquierda</p>
          <p>28006 Madrid</p>
          <p>Spain</p>
        </address>
      </section>

      <Br />
      <Br />

      <section id="request" aria-labelledby="heading-request">
        <h2 id="heading-request" className={hSection}>
          13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
        </h2>
        <Br />
        <p className={p}>
          Based on the applicable laws of your country, you may have the right to request access to the
          personal information we collect from you, change that information, or delete it. To request to review,
          update, or delete your personal information, please fill out and submit a{' '}
          <a
            className={link}
            href="https://app.termly.io/notify/4b88abef-2d11-4bc1-9e51-2b9f90d426a5"
            target="_blank"
            rel="noopener noreferrer"
          >
            data subject access request
          </a>
          .
        </p>
      </section>
    </>
  );
}
