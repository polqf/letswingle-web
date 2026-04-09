import Link from 'next/link';

import { PrivacyPolicySections } from './PrivacyPolicySections';

const link = 'text-[#003afa] underline-offset-2 hover:underline';
const p = 'text-[15px] leading-[1.5] text-[#595959]';
const pMuted = 'text-[15px] leading-[1.5] text-[#7f7f7f]';
const h1Main = 'text-[26px] font-bold text-[#111318]';
const hSection = 'text-[15px] font-bold text-black';
const spacer = 'h-6';

function Br() {
  return <div className={spacer} aria-hidden />;
}

export function PrivacyPolicyDocument() {
  return (
    <article className="privacy-policy max-w-none [&_li]:text-[15px] [&_li]:leading-[1.5] [&_li]:text-[#595959] [&_strong]:text-[#595959]">
      <h1 className={h1Main}>PRIVACY POLICY</h1>
      <Br />
      <p className={`${pMuted} font-semibold`}>
        Last updated <time dateTime="2024-03-18">March 18, 2024</time>
      </p>
      <Br />
      <Br />
      <Br />

      <p className={p}>
        This privacy notice for LETS WINGLE S.L. (doing business as WINGLE) (&quot;
        <strong>we</strong>,&quot; &quot;<strong>us</strong>,&quot; or &quot;
        <strong>our</strong>
        &quot;), describes how and why we might collect, store, use, and/or share (&quot;
        <strong>process</strong>
        &quot;) your information when you use our services (&quot;
        <strong>Services</strong>
        &quot;), such as when you:
      </p>
      <ul className="mt-4 list-disc space-y-2 pl-6">
        <li>
          Visit our website at{' '}
          <Link className={link} href="https://letswingle.com" target="_blank" rel="noopener noreferrer">
            https://letswingle.com
          </Link>
          , or any website of ours that links to this privacy notice
        </li>
        <li>
          Download and use our mobile application (WINGLE), or any other application of ours that links to
          this privacy notice
        </li>
        <li>Engage with us in other related ways, including any sales, marketing, or events</li>
      </ul>
      <Br />
      <p className={p}>
        <strong>Questions or concerns? </strong>
        Reading this privacy notice will help you understand your privacy rights and choices. If you do not
        agree with our policies and practices, please do not use our Services. If you still have any
        questions or concerns, please contact us at{' '}
        <a className={link} href="mailto:hi@letswingle.com">
          hi@letswingle.com
        </a>
        .
      </p>
      <Br />
      <Br />

      <p className={`${hSection}`}>SUMMARY OF KEY POINTS</p>
      <Br />
      <p className={p}>
        <strong>
          <em>
            This summary provides key points from our privacy notice, but you can find out more details about
            any of these topics by clicking the link following each key point or by using our{' '}
          </em>
        </strong>
        <Link className={link} href="#toc">
          <strong>
            <em>table of contents</em>
          </strong>
        </Link>
        <strong>
          <em> below to find the section you are looking for.</em>
        </strong>
      </p>
      <Br />
      <p className={p}>
        <strong>What personal information do we process?</strong> When you visit, use, or navigate our
        Services, we may process personal information depending on how you interact with us and the Services,
        the choices you make, and the products and features you use. Learn more about{' '}
        <Link className={link} href="#personalinfo">
          personal information you disclose to us
        </Link>
        .
      </p>
      <Br />
      <p className={p}>
        <strong>Do we process any sensitive personal information?</strong> We may process sensitive personal
        information when necessary with your consent or as otherwise permitted by applicable law. Learn more
        about{' '}
        <Link className={link} href="#sensitiveinfo">
          sensitive information we process
        </Link>
        .
      </p>
      <Br />
      <p className={p}>
        <strong>Do we receive any information from third parties?</strong> We do not receive any information
        from third parties.
      </p>
      <Br />
      <p className={p}>
        <strong>How do we process your information?</strong> We process your information to provide, improve,
        and administer our Services, communicate with you, for security and fraud prevention, and to comply
        with law. We may also process your information for other purposes with your consent. We process your
        information only when we have a valid legal reason to do so. Learn more about{' '}
        <Link className={link} href="#infouse">
          how we process your information
        </Link>
        .
      </p>
      <Br />
      <p className={p}>
        <strong>In what situations and with which parties do we share personal information?</strong> We may
        share information in specific situations and with specific third parties. Learn more about{' '}
        <Link className={link} href="#whoshare">
          when and with whom we share your personal information
        </Link>
        .
      </p>
      <Br />
      <p className={p}>
        <strong>How do we keep your information safe?</strong> We have organizational and technical processes
        and procedures in place to protect your personal information. However, no electronic transmission
        over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot
        promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able
        to defeat our security and improperly collect, access, steal, or modify your information. Learn more
        about{' '}
        <Link className={link} href="#infosafe">
          how we keep your information safe
        </Link>
        .
      </p>
      <Br />
      <p className={p}>
        <strong>What are your rights?</strong> Depending on where you are located geographically, the
        applicable privacy law may mean you have certain rights regarding your personal information. Learn
        more about{' '}
        <Link className={link} href="#privacyrights">
          your privacy rights
        </Link>
        .
      </p>
      <Br />
      <p className={p}>
        <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by
        submitting a{' '}
        <a
          className={link}
          href="https://app.termly.io/notify/4b88abef-2d11-4bc1-9e51-2b9f90d426a5"
          target="_blank"
          rel="noopener noreferrer"
        >
          data subject access request
        </a>
        , or by contacting us. We will consider and act upon any request in accordance with applicable data
        protection laws.
      </p>
      <Br />
      <p className={p}>
        Want to learn more about what we do with any information we collect?{' '}
        <Link className={link} href="#toc">
          Review the privacy notice in full
        </Link>
        .
      </p>
      <Br />
      <Br />

      <nav id="toc" aria-label="Table of contents">
        <p className={`${hSection} text-black`}>TABLE OF CONTENTS</p>
        <Br />
        <ol className="list-none space-y-2 pl-0 [&_a]:text-[15px]">
          <li>
            <Link className={link} href="#infocollect">
              1. WHAT INFORMATION DO WE COLLECT?
            </Link>
          </li>
          <li>
            <Link className={link} href="#infouse">
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </Link>
          </li>
          <li>
            <Link className={link} href="#legalbases">
              3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
            </Link>
          </li>
          <li>
            <Link className={link} href="#whoshare">
              4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </Link>
          </li>
          <li>
            <Link className={link} href="#inforetain">
              5. HOW LONG DO WE KEEP YOUR INFORMATION?
            </Link>
          </li>
          <li>
            <Link className={link} href="#infosafe">
              6. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </Link>
          </li>
          <li>
            <Link className={link} href="#infominors">
              7. DO WE COLLECT INFORMATION FROM MINORS?
            </Link>
          </li>
          <li>
            <Link className={link} href="#privacyrights">
              8. WHAT ARE YOUR PRIVACY RIGHTS?
            </Link>
          </li>
          <li>
            <Link className={link} href="#DNT">
              9. CONTROLS FOR DO-NOT-TRACK FEATURES
            </Link>
          </li>
          <li>
            <Link className={link} href="#uslaws">
              10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
            </Link>
          </li>
          <li>
            <Link className={link} href="#policyupdates">
              11. DO WE MAKE UPDATES TO THIS NOTICE?
            </Link>
          </li>
          <li>
            <Link className={link} href="#contact">
              12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </Link>
          </li>
          <li>
            <Link className={link} href="#request">
              13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
            </Link>
          </li>
        </ol>
      </nav>
      <Br />
      <Br />

      <PrivacyPolicySections />
    </article>
  );
}
