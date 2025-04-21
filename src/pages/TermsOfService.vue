<template>
  <q-page class="q-pa-md">
    <div class="content-width q-mx-auto">
      <h1 class="text-h3 text-weight-bold q-mb-lg">Terms of Service</h1>
      <div class="text-subtitle1 text-grey-8">Effective Date: December 1, 2024</div>

      <div class="text-body1 q-mt-lg">
        <p>Welcome to MnMoo! These Terms of Service ("Terms") outline the rules and guidelines for using our website, applications, and related services (collectively, the "Services"). By using MnMoo, you agree to these Terms, so please read them carefully.</p>

        <div class="company-info q-pa-md bg-grey-2 rounded-borders q-mb-lg">
          <p class="text-weight-bold">About MnMoo</p>
          <p>MnMoo is a service provided by Omaha Technologies, a company registered in Canada.</p>
          <p>Registration Details:</p>
          <p> Omaha Technologies</p>
           
          <p>In these Terms, "Omaha Technologies" may also be referred to as "MnMoo", "we," "us," or "our."</p>
        </div>

        <p>MnMoo is an online platform designed to help you improve your singing skills. We offer a variety of interactive tools and resources, including pitch training, ear training, and personalized feedback. Whether you're an individual learner or part of an educational institution, MnMoo is here to support your musical journey.</p>

        <div v-for="(section, index) in sections" :key="index" class="q-mb-xl">
          <h2 class="text-h5 text-weight-bold q-mb-md">{{ section.title }}</h2>
          <div v-html="section.content" class="text-body1"></div>
        </div>
      </div>

      <div class="q-pa-md q-mt-xl bg-grey-2 rounded-borders">
        <p class="text-caption text-grey-8">
          Last Updated: December 1, 2024
        </p>
      </div>
    </div>
  </q-page>
</template>

<script setup>
const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `
      <p>By accessing or using MnMoo, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use our Services. Your continued use of MnMoo constitutes your acceptance of these Terms.</p>
    `
  },
  {
    title: "2. Description of Service",
    content: `
      <p>MnMoo is an educational platform designed to help users improve their singing skills through interactive exercises, pitch training, and ear training. We offer various tools and services, with some available for free and others requiring a premium subscription. MnMoo is available for both individual learners and educational institutions.</p>
    `
  },
  {
    title: "3. User Accounts",
    content: `
      <p>To access certain features of MnMoo, you may need to create an account. You agree to provide accurate and up-to-date information when registering. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
    `
  },
  {
    title: "4. User Content",
    content: `
      <p>MnMoo may allow you to submit content, such as recordings and feedback ("User Content"). You retain ownership of your User Content. By sharing User Content on MnMoo, you grant us a license to use, display, and distribute your content within our platform to provide and improve our Services.</p>
    `
  },
  {
    title: "5. Prohibited Conduct",
    content: `
      <p>When using MnMoo, you agree not to:</p>
      <ul>
        <li>Violate any laws or regulations.</li>
        <li>Post or share content that is harmful, offensive, or inappropriate.</li>
        <li>Impersonate others or misrepresent your affiliation with any entity.</li>
        <li>Interfere with the operation of MnMoo or disrupt other users' experiences.</li>
      </ul>
    `
  },
  {
    title: "6. Intellectual Property",
    content: `
      <p>MnMoo and its original content, features, and functionality are owned by MnMoo and are protected by intellectual property laws. You may not use our trademarks, logos, or content without our permission.</p>
    `
  },
  {
    title: "7. Termination",
    content: `
      <p>We may suspend or terminate your access to MnMoo at any time, with or without cause, and without notice. You may also terminate your account at any time.</p>
    `
  },
  {
    title: "8. Disclaimer of Warranties",
    content: `
      <p>MnMoo is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our Services will be uninterrupted, error-free, or completely secure.</p>
    `
  },
  {
    title: "9. Limitation of Liability",
    content: `
      <p>To the fullest extent permitted by law, Omaha Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of MnMoo.</p>
    `
  },
  {
    title: "10. Governing Law",
    content: `
      <p>These Terms shall be governed by the laws of Canada, without regard to its conflict of law principles.</p>
    `
  },
  {
    title: "11. Changes to These Terms",
    content: `
      <p>We may update these Terms from time to time. We will notify you of any significant changes by posting the new Terms on our website. Your continued use of MnMoo after such changes constitutes your acceptance of the updated Terms.</p>
    `
  },
  {
    title: "12. Contact Us",
    content: `
      <p>If you have any questions or concerns about these Terms, please contact us at contact@mnmo.com.</p>
    `
  },
  {
    title: "13. Content Disclaimer",
    content: `
      <p>We strive to provide accurate and up-to-date content on MnMoo. However, we do not guarantee that all information is current, complete, or error-free. The content on MnMoo is for informational purposes only and should not be considered professional advice. We are not responsible for any reliance you place on such information.</p>
    `
  },
  {
    title: "14. No Warranties",
    content: `
      <p>MnMoo is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that our Services will be uninterrupted, error-free, or completely secure.</p>
    `
  },
  {
    title: "15. Liability Exclusion",
    content: `
      <p>To the fullest extent permitted by law, MnMoo shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of MnMoo.</p>
    `
  },
  {
    title: "16. Indemnification",
    content: `
      <p>You agree to indemnify and hold harmless MnMoo, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, or expenses, including reasonable attorneys' fees, arising out of or related to your use of MnMoo or your violation of these Terms.</p>
    `
  },
  {
    title: "17. Refund Policy",
    content: `
      <p>We offer a refund for our subscription plans within 14 days of your initial purchase. To request a refund, please contact our support team with your account details and reason for the refund. Refunds are processed at our discretion and may be subject to certain conditions.</p>
      <p>Please note that refunds are not available after the 14-day period or for any other services purchased on MnMoo.</p>
    `
  },
  {
    title: "18. Privacy Policy",
    content: `
      <p>Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using MnMoo, you agree to our Privacy Policy, which is incorporated into these Terms. You can review our Privacy Policy <a href="/privacy" target="_blank">here</a>.</p>
    `
  }
]
</script>

<style scoped>
.content-width {
  max-width: 800px;
}

:deep(h6) {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

:deep(p) {
  margin-bottom: 1rem;
  line-height: 1.6;
}

:deep(ul) {
  list-style-type: disc;
  padding-left: 2rem;
  margin-bottom: 1rem;
}

:deep(li) {
  margin-bottom: 0.5rem;
}

:deep(.text-warning) {
  color: #f2c037;
}

:deep(.bg-warning-1) {
  background-color: rgba(242, 192, 55, 0.1);
}
</style>
