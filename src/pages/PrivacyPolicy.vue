<template>
  <q-page class="q-pa-md">
    <div class="content-width q-mx-auto">
      <h1 class="text-h3 text-weight-bold q-mb-lg">Privacy Policy</h1>
      <div class="text-subtitle1 text-grey-8">Effective Date: December 1, 2024</div>

      <div class="text-body1 q-mt-lg">
        <p>Your privacy is important to us. This Privacy Policy explains how [Your Company Name] ("we," "us," or "our") collects, uses, and shares information about you when you use our website, applications, and related services (collectively, the "Services").</p>

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
    title: "1. Information We Collect",
    content: `
      <p>We collect the following types of information:</p>
      <ul>
        <li><strong>Information You Provide:</strong> We collect information you provide directly to us, such as your name, email address, and any content you submit to our Services.</li>
        <li><strong>Automatically Collected Information:</strong> We automatically collect certain information about your use of our Services, such as your IP address, device type, and browsing activity.</li>
        <li><strong>Cookies:</strong> We use cookies and similar technologies to collect information about your use of our Services. You can control cookies through your browser settings.</li>
      </ul>
    `
  },
  {
    title: "2. How We Use Your Information",
    content: `
      <p>We use your information for the following purposes:</p>
      <ul>
        <li>To provide and improve our Services.</li>
        <li>To personalize your experience.</li>
        <li>To communicate with you.</li>
        <li>To analyze usage trends and preferences.</li>
      </ul>
    `
  },
  {
    title: "3. How We Share Your Information",
    content: `
      <p>We may share your information with the following categories of recipients:</p>
      <ul>
        <li><strong>Service Providers:</strong> We share information with third-party service providers who help us operate our Services.</li>
        <li><strong>Legal Authorities:</strong> We may disclose information to legal authorities if required by law.</li>
        <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of the transaction.</li>
      </ul>
    `
  },
  {
    title: "4. Your Choices",
    content: `
      <p>You have the following choices regarding your information:</p>
      <ul>
        <li><strong>Access and Correction:</strong> You can access and update your account information at any time.</li>
        <li><strong>Opt-Out:</strong> You can opt-out of receiving promotional communications from us.</li>
        <li><strong>Deletion:</strong> You can request deletion of your account and associated information.</li>
      </ul>
    `
  },
  {
    title: "5. Security",
    content: `
      <p>We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is completely secure.</p>
    `
  },
  {
    title: "6. Children's Privacy",
    content: `
      <p>Our Services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under the age of 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us.</p>
    `
  },
  {
    title: "7. Changes to This Privacy Policy",
    content: `
      <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on our website. Your continued use of MnMoo after such changes constitutes your acceptance of the updated Privacy Policy.</p>
    `
  },
  {
    title: "8. Contact Us",
    content: `
      <p>If you have any questions or concerns about this Privacy Policy, please contact us at [Your Contact Information].</p>
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
