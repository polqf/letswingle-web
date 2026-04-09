import Link from 'next/link';

import { PrivacyPolicySections8to13 } from './PrivacyPolicySections8to13';

const link = 'text-[#003afa] underline-offset-2 hover:underline';
const p = 'text-[15px] leading-[1.5] text-[#595959]';
const hSection = 'text-[15px] font-bold text-black';
const hSub = 'text-[15px] font-bold text-black';

function Br() {
  return <div className="h-6" aria-hidden />;
}

export function PrivacyPolicySections() {
  return (
    <>
      <section id="infocollect" aria-labelledby="heading-infocollect">
        <h2 id="heading-infocollect" className={hSection}>
          1. WHAT INFORMATION DO WE COLLECT?
        </h2>
        <Br />
        <h3 id="personalinfo" className={hSub}>
          Personal information you disclose to us
        </h3>
        <Br />
        <p className={p}>
          <strong>
            <em>In Short:</em>
          </strong>
          <em> We collect personal information that you provide to us.</em>
        </p>
        <Br />
        <p className={p}>
          We collect personal information that you voluntarily provide to us when you register on the Services,{' '}
          express an interest in obtaining information about us or our products and Services, when you
          participate in activities on the Services, or otherwise when you contact us.
        </p>
        <Br />
        <Br />
        <p className={p}>
          <strong>Personal Information Provided by You.</strong> The personal information that we collect
          depends on the context of your interactions with us and the Services, the choices you make, and the
          products and features you use. The personal information we collect may include the following:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>names</li>
          <li>email addresses</li>
        </ul>
        <Br />
        <div id="sensitiveinfo">
          <p className={p}>
            <strong>Sensitive Information.</strong> When necessary, with your consent or as otherwise
            permitted by applicable law, we process the following categories of sensitive information:
          </p>
        </div>
        <Br />
        <p className={p}>
          <strong>Application Data.</strong> If you use our application(s), we also may collect the following
          information if you choose to provide us with access or permission:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <em>Geolocation Information.</em> We may request access or permission to track location-based
            information from your mobile device, either continuously or while you are using our mobile
            application(s), to provide certain location-based services. If you wish to change our access or
            permissions, you may do so in your device&apos;s settings.
          </li>
          <li>
            <em>Mobile Device Access.</em> We may request access or permission to certain features from your
            mobile device, including your mobile device&apos;s bluetooth, reminders, camera, and other
            features. If you wish to change our access or permissions, you may do so in your device&apos;s
            settings.
          </li>
          <li>
            <em>Mobile Device Data.</em> We automatically collect device information (such as your mobile
            device ID, model, and manufacturer), operating system, version information and system configuration
            information, device and application identification numbers, browser type and version, hardware
            model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or
            proxy server). If you are using our application(s), we may also collect information about the
            phone network associated with your mobile device, your mobile device&apos;s operating system or
            platform, the type of mobile device you use, your mobile device&apos;s unique device ID, and
            information about the features of our application(s) you accessed.
          </li>
          <li>
            <em>Push Notifications.</em> We may request to send you push notifications regarding your account
            or certain features of the application(s). If you wish to opt out from receiving these types of
            communications, you may turn them off in your device&apos;s settings.
          </li>
        </ul>
        <Br />
        <p className={p}>
          This information is primarily needed to maintain the security and operation of our application(s),
          for troubleshooting, and for our internal analytics and reporting purposes.
        </p>
        <Br />
        <Br />
        <p className={p}>
          All personal information that you provide to us must be true, complete, and accurate, and you must
          notify us of any changes to such personal information.
        </p>
        <Br />
        <Br />
        <h3 className={hSub}>Information automatically collected</h3>
        <Br />
        <p className={p}>
          <strong>
            <em>In Short:</em>
          </strong>
          <em>
            {' '}
            Some information — such as your Internet Protocol (IP) address and/or browser and device
            characteristics — is collected automatically when you visit our Services.
          </em>
        </p>
        <Br />
        <p className={p}>
          We automatically collect certain information when you visit, use, or navigate the Services. This
          information does not reveal your specific identity (like your name or contact information) but may
          include device and usage information, such as your IP address, browser and device characteristics,
          operating system, language preferences, referring URLs, device name, country, location, information
          about how and when you use our Services, and other technical information. This information is
          primarily needed to maintain the security and operation of our Services, and for our internal
          analytics and reporting purposes.
        </p>
        <Br />
        <p className={p}>The information we collect includes:</p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage, and
            performance information our servers automatically collect when you access or use our Services and
            which we record in log files. Depending on how you interact with us, this log data may include
            your IP address, device information, browser type, and settings and information about your activity
            in the Services (such as the date/time stamps associated with your usage, pages and files viewed,
            searches, and other actions you take such as which features you use), device event information
            (such as system activity, error reports (sometimes called &quot;crash dumps&quot;), and hardware
            settings).
          </li>
          <li>
            <em>Device Data.</em> We collect device data such as information about your computer, phone,
            tablet, or other device you use to access the Services. Depending on the device used, this device
            data may include information such as your IP address (or proxy server), device and application
            identification numbers, location, browser type, hardware model, Internet service provider and/or
            mobile carrier, operating system, and system configuration information.
          </li>
          <li>
            <em>Location Data.</em> We collect location data such as information about your device&apos;s
            location, which can be either precise or imprecise. How much information we collect depends on
            the type and settings of the device you use to access the Services. For example, we may use GPS
            and other technologies to collect geolocation data that tells us your current location (based on
            your IP address). You can opt out of allowing us to collect this information either by refusing
            access to the information or by disabling your Location setting on your device. However, if you
            choose to opt out, you may not be able to use certain aspects of the Services.
          </li>
        </ul>
      </section>

      <Br />
      <Br />

      <section id="infouse" aria-labelledby="heading-infouse">
        <h2 id="heading-infouse" className={hSection}>
          2. HOW DO WE PROCESS YOUR INFORMATION?
        </h2>
        <Br />
        <p className={p}>
          <strong>
            <em>In Short: </em>
          </strong>
          <em>
            We process your information to provide, improve, and administer our Services, communicate with you,
            for security and fraud prevention, and to comply with law. We may also process your information
            for other purposes with your consent.
          </em>
        </p>
        <Br />
        <p className={p}>
          <strong>
            We process your personal information for a variety of reasons, depending on how you interact with
            our Services, including:
          </strong>
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            <strong>To facilitate account creation and authentication and otherwise manage user accounts. </strong>
            We may process your information so you can create and log in to your account, as well as keep your
            account in working order.
          </li>
          <li>
            <strong>To deliver and facilitate delivery of services to the user. </strong>
            We may process your information to provide you with the requested service.
          </li>
          <li>
            <strong>To respond to user inquiries/offer support to users. </strong>
            We may process your information to respond to your inquiries and solve any potential issues you
            might have with the requested service.
          </li>
          <li>
            <strong>To send administrative information to you. </strong>
            We may process your information to send you details about our products and services, changes to
            our terms and policies, and other similar information.
          </li>
          <li>
            <strong>To enable user-to-user communications. </strong>
            We may process your information if you choose to use any of our offerings that allow for
            communication with another user.
          </li>
          <li>
            <strong>To save or protect an individual&apos;s vital interest.</strong> We may process your
            information when necessary to save or protect an individual&apos;s vital interest, such as to
            prevent harm.
          </li>
        </ul>
      </section>

      <Br />
      <Br />

      <section id="legalbases" aria-labelledby="heading-legalbases">
        <h2 id="heading-legalbases" className={hSection}>
          3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
        </h2>
        <Br />
        <p className={`${p} italic`}>
          <strong>In Short: </strong>
          We only process your personal information when we believe it is necessary and we have a valid legal
          reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with
          laws, to provide you with services to enter into or fulfill our contractual obligations, to protect
          your rights, or to fulfill our legitimate business interests.
        </p>
        <Br />
        <p className={`${p} italic`}>
          <strong>
            <u>If you are located in the EU or UK, this section applies to you.</u>
          </strong>
        </p>
        <Br />
        <p className={p}>
          The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases
          we rely on in order to process your personal information. As such, we may rely on the following
          legal bases to process your personal information:
        </p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            <strong>Consent. </strong>
            We may process your information if you have given us permission (i.e., consent) to use your personal
            information for a specific purpose. You can withdraw your consent at any time. Learn more about{' '}
            <Link className={link} href="#withdrawconsent">
              withdrawing your consent
            </Link>
            .
          </li>
          <li>
            <strong>Performance of a Contract.</strong> We may process your personal information when we
            believe it is necessary to fulfill our contractual obligations to you, including providing our
            Services or at your request prior to entering into a contract with you.
          </li>
          <li>
            <strong>Legal Obligations.</strong> We may process your information where we believe it is
            necessary for compliance with our legal obligations, such as to cooperate with a law enforcement
            body or regulatory agency, exercise or defend our legal rights, or disclose your information as
            evidence in litigation in which we are involved.
            <br />
          </li>
          <li>
            <strong>Vital Interests.</strong> We may process your information where we believe it is necessary
            to protect your vital interests or the vital interests of a third party, such as situations
            involving potential threats to the safety of any person.
          </li>
        </ul>
        <Br />
        <p className={p}>
          <strong>
            <u>
              <em>If you are located in Canada, this section applies to you.</em>
            </u>
          </strong>
        </p>
        <Br />
        <p className={p}>
          We may process your information if you have given us specific permission (i.e., express consent) to
          use your personal information for a specific purpose, or in situations where your permission can be
          inferred (i.e., implied consent). You can{' '}
          <Link className={link} href="#withdrawconsent">
            withdraw your consent
          </Link>{' '}
          at any time.
        </p>
        <Br />
        <p className={p}>
          In some exceptional cases, we may be legally permitted under applicable law to process your
          information without your consent, including, for example:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
          <li>For investigations and fraud detection and prevention</li>
          <li>For business transactions provided certain conditions are met</li>
          <li>
            If it is contained in a witness statement and the collection is necessary to assess, process, or
            settle an insurance claim
          </li>
          <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
          <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
          <li>
            If it is reasonable to expect collection and use with consent would compromise the availability or
            the accuracy of the information and the collection is reasonable for purposes related to
            investigating a breach of an agreement or a contravention of the laws of Canada or a province
          </li>
          <li>
            If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court
            relating to the production of records
          </li>
          <li>
            If it was produced by an individual in the course of their employment, business, or profession and
            the collection is consistent with the purposes for which the information was produced
          </li>
          <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
          <li>If the information is publicly available and is specified by the regulations</li>
        </ul>
      </section>

      <Br />
      <Br />

      <section id="whoshare" aria-labelledby="heading-whoshare">
        <h2 id="heading-whoshare" className={hSection}>
          4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </h2>
        <Br />
        <p className={p}>
          <strong>
            <em>In Short:</em>
          </strong>
          <em> We may share information in specific situations described in this section and/or with the following third parties.</em>
        </p>
        <Br />
        <p className={p}>We may need to share your personal information in the following situations:</p>
        <ul className="mt-4 list-disc space-y-3 pl-6">
          <li>
            <strong>Business Transfers.</strong> We may share or transfer your information in connection with,
            or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or
            a portion of our business to another company.
          </li>
          <li>
            <strong>When we use Google Analytics.</strong> We may share your information with Google Analytics
            to track and analyze the use of the Services. To opt out of being tracked by Google Analytics
            across the Services, visit{' '}
            <a
              className={link}
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://tools.google.com/dlpage/gaoptout
            </a>
            . For more information on the privacy practices of Google, please visit the{' '}
            <a
              className={link}
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Privacy & Terms page
            </a>
            .
          </li>
          <li>
            <strong>Business Partners.</strong> We may share your information with our business partners to
            offer you certain products, services, or promotions.
          </li>
          <li>
            <strong>Other Users.</strong> When you share personal information (for example, by posting comments,
            contributions, or other content to the Services) or otherwise interact with public areas of the
            Services, such personal information may be viewed by all users and may be publicly made available
            outside the Services in perpetuity. Similarly, other users will be able to view descriptions of
            your activity, communicate with you within our Services, and view your profile.
          </li>
        </ul>
      </section>

      <Br />
      <Br />

      <section id="inforetain" aria-labelledby="heading-inforetain">
        <h2 id="heading-inforetain" className={hSection}>
          5. HOW LONG DO WE KEEP YOUR INFORMATION?
        </h2>
        <Br />
        <p className={p}>
          <strong>
            <em>In Short: </em>
          </strong>
          <em>
            We keep your information for as long as necessary to fulfill the purposes outlined in this privacy
            notice unless otherwise required by law.
          </em>
        </p>
        <Br />
        <p className={p}>
          We will only keep your personal information for as long as it is necessary for the purposes set out
          in this privacy notice, unless a longer retention period is required or permitted by law (such as
          tax, accounting, or other legal requirements). No purpose in this notice will require us keeping
          your personal information for longer than three (3) months past the termination of the user&apos;s
          account.
        </p>
        <Br />
        <p className={p}>
          When we have no ongoing legitimate business need to process your personal information, we will either
          delete or anonymize such information, or, if this is not possible (for example, because your personal
          information has been stored in backup archives), then we will securely store your personal
          information and isolate it from any further processing until deletion is possible.
        </p>
      </section>

      <Br />
      <Br />

      <section id="infosafe" aria-labelledby="heading-infosafe">
        <h2 id="heading-infosafe" className={hSection}>
          6. HOW DO WE KEEP YOUR INFORMATION SAFE?
        </h2>
        <Br />
        <p className={p}>
          <strong>
            <em>In Short: </em>
          </strong>
          <em>
            We aim to protect your personal information through a system of organizational and technical
            security measures.
          </em>
        </p>
        <Br />
        <p className={p}>
          We have implemented appropriate and reasonable technical and organizational security measures
          designed to protect the security of any personal information we process. However, despite our
          safeguards and efforts to secure your information, no electronic transmission over the Internet or
          information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee
          that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our
          security and improperly collect, access, steal, or modify your information. Although we will do our
          best to protect your personal information, transmission of personal information to and from our
          Services is at your own risk. You should only access the Services within a secure environment.
        </p>
      </section>

      <Br />
      <Br />

      <section id="infominors" aria-labelledby="heading-infominors">
        <h2 id="heading-infominors" className={hSection}>
          7. DO WE COLLECT INFORMATION FROM MINORS?
        </h2>
        <Br />
        <p className={p}>
          <strong>
            <em>In Short:</em>
          </strong>
          <em> We do not knowingly collect data from or market to children under 18 years of age.</em>
        </p>
        <Br />
        <p className={p}>
          We do not knowingly solicit data from or market to children under 18 years of age. By using the
          Services, you represent that you are at least 18 or that you are the parent or guardian of such a
          minor and consent to such minor dependent&apos;s use of the Services. If we learn that personal
          information from users less than 18 years of age has been collected, we will deactivate the account
          and take reasonable measures to promptly delete such data from our records. If you become aware of
          any data we may have collected from children under age 18, please contact us at{' '}
          <a className={link} href="mailto:hi@letswingle.com">
            hi@letswingle.com
          </a>
          .
        </p>
      </section>

      <PrivacyPolicySections8to13 />
    </>
  );
}
