<template>
<div class="main-wrap">
    <div class="form">
      <h2>Enter Details</h2>
      <form>
        <div class="form-item">
          <label for="name">Name*</label>
          <input
            type="text"
            name="name"
            v-model="form.name"
            @blur="v$.name.$touch"
            required
          />
          <p class="error" v-if="v$.name.$error">Please enter your name</p>
        </div>
        <div class="form-item">
          <label for="job">Job Title*</label>
          <input
            type="text"
            name="job"
            v-model="form.jobTitle"
            @blur="v$.jobTitle.$touch"
            required
          />
          <p class="error" v-if="v$.jobTitle.$error">
            Please enter a Job Title
          </p>
        </div>
        <div class="form-item">
          <label for="email">Email*</label>
          <p class="help">Enter your harikar email.</p>
          <input
            type="text"
            name="email"
            placeholder="@harikar.org"
            v-model="form.email"
            @blur="v$.email.$touch"
            required
          />
          <p class="error" v-if="v$.email.$error">Please enter a valid email</p>
        </div>
        <div class="form-item">
          <label for="phone">Mobile Number*</label>
          <p class="help">
            Enter valid phone number, example: +964-750-000-0000.
          </p>
          <input
            type="text"
            name="phone"
            placeholder="+"
            v-model="form.mobile"
            @blur="v$.mobile.$touch"
            required
          />
          <p class="error" v-if="v$.mobile.$error">
            Please enter a valid mobile number
          </p>
        </div>
        <div class="form-item">
          <label for="skype">Skype ID</label>
          <input
            type="text"
            name="skype"
            v-model="form.skypeId"
            @blur="v$.skypeId.$touch"
          />
          <p class="error" v-if="v$.skypeId.$error">
            Please enter a valid Skype ID
          </p>
        </div>
        <div class="btns">
          <button
            :disabled="v$.$invalid"
            class="btn primary-btn"
            @click.prevent="copySignature"
          >
            {{ signCopied ? "Signature Copied" : "Copy Signature" }}
          </button>
          <button
            :disabled="v$.$invalid"
            class="btn secondary-btn"
            @click.prevent="copyHtml()"
          >
            {{ htmlCopied ? "HTML Copied" : "Copy HTML" }}
          </button>
        </div>
      </form>
    </div>
    <div class="preview">
      <h2>Signature Preview</h2>
      <div ref="preview" class="preview-card">
        <table cellspacing="0" cellpadding="0" border="0">
          <tr>
            <td :width="50" :style="{ 'vertical-align': 'middle' }">
              <img :src="logoUrl" width="50" height="88" :style="imgStyle" />
            </td>
            <td width="49">
              <table
                cellspacing="0"
                cellpadding="0"
                border="0"
                :style="{ margin: '1.5px 0px' }"
              >
                <tr>
                  <td width="24" height="64" :style="{ width: '24px' }">
                    &nbsp;
                  </td>
                  <td
                    width="1"
                    height="64"
                    :style="{ 'border-left': '1px solid #d1dbe5' }"
                  ></td>
                  <td width="24" height="64" :style="{ width: '24px' }">
                    &nbsp;
                  </td>
                </tr>
              </table>
            </td>
            <td>
              <table cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td :style="nameStyle">
                    {{ form.name }}
                  </td>
                </tr>
                <tr>
                  <td :style="jobTitleStyle">{{ form.jobTitle }}</td>
                </tr>
                <tr>
                  <td :style="fieldStyle">
                    <strong :style="{ color: '#4b60a5' }">Mobile:</strong>
                    {{ form.mobile }}
                  </td>
                </tr>
                <tr>
                  <td :style="fieldStyle">
                    <strong :style="{ color: '#4b60a5' }">Email:</strong>
                    {{ form.email }}
                  </td>
                </tr>
                <tr>
                  <td :style="fieldStyle">
                    <strong :style="{ color: '#4b60a5' }">Skype ID:</strong>
                    {{ form.skypeId }}
                  </td>
                </tr>
                <tr>
                  <td :style="emailStyle">
                    <a href="https://www.harikar.org" :style="emailAnchorStyle"
                      >www.harikar.org</a
                    >
                  </td>
                </tr>
                <tr :style="addressStyle">
                  <td>Australia Streat/Media Quarter, 99448 Duhok, KRI-Iraq</td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="integrations">
      <h2>Add signature in Outlook</h2>
      <ol>
        <li>Click on Copy Signature and open Outlook.</li>
        <li>Select file>Options.</li>
        <li>Select Mail then signature</li>
        <li>Click new, and give the signature a name.</li>
        <li>paste the signature and click ok</li>
        <li>
          Choose your new default signature for New messages and
          Replies/forwards.
        </li>
      </ol>
      <h2>Add signature in Gmail</h2>
      <ol>
        <li>Click on Copy Signature and go to your work Gmail account.</li>
        <li>Select the Settings gear in your Gmail toolbar.</li>
        <li>Select See All Settings > General>Signature.</li>
        <li>Select + Create New button.</li>
        <li>Give this signature a name and select Create.</li>
        <li>
          Paste the signature in the box on the right and set siganture
          defaults.
        </li>
        <li>Select your new default signature under Signature defaults.</li>
        <li>Scroll to bottom and select Save Changes.</li>
      </ol>
      <div class="note">
        <p>
          <em
            >Depending on the version of outlook you have installed, some steps
            might be different for you</em
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

const logoUrl =
  "https://raw.githubusercontent.com/Harikar-NGO/harikar-website-files/main/images/harikar-logo-sign.png";

const htmlCopied = ref(false);
const signCopied = ref(false);
const preview = ref(null);

const copySignature = () => {
  let element = preview;

  if (!element) {
    alert("Preview element not yet ready");
    return false;
  }

  if (document.body.createTextRange) {
    let range = document.body.createTextRange();
    range.moveToElementText(element.value);
    range.select();
    document.execCommand("copy");
  } else if (window.getSelection) {
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(element.value);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
    selection.removeAllRanges();
  }
  signCopied.value = true;
  setTimeout(() => {
    signCopied.value = false;
  }, 2000);
};
const copyHtml = () => {
  let element = preview;

  if (!element) {
    alert("Preview element not yet ready");
    return false;
  }

  const el = document.createElement("textarea");

  el.value = element.value.innerHTML;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);

  const selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false;
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
  htmlCopied.value = true;
  setTimeout(() => {
    htmlCopied.value = false;
  }, 2000);
};

const form = reactive({
  name: "",
  jobTitle: "",
  email: "",
  mobile: "",
  skypeId: "",
});

const imgStyle = {
  display: "block",
  "image-rendering": "-webkit-optimize-contrast",
  "min-width": "100%",
  height: "auto",
};

const nameStyle = {
  "font-weight": 700,
  "font-size": "16px",
  "line-height": "19px",
  color: "#4b60a5",
  whitespace: "nowrap",
  padding: "0px 0px 4px 0px",
  "text-transform": "capitalize",
};

const jobTitleStyle = {
  "font-weight": 700,
  "font-size": "10px",
  "line-height": "12px",
  color: "#000000",
  whitespace: "nowrap",
  padding: "0px 0px 4px 0px",
  "text-transform": "uppercase",
};

const fieldStyle = {
  padding: "0px",
  "font-weight": 500,
  "font-size": "10px",
  color: "#000000",
  "line-height": "12px",
  whitespace: "nowrap",
};

const emailStyle = {
  padding: "0px",
  "font-size": "10px",
  "line-height": "12px",
};

const emailAnchorStyle = {
  "font-weight": 700,
  color: "#ff7f26",
  "text-decoration": "none",
};

const addressStyle = {
  padding: "0px",
  "font-size": "10px",
  "line-height": "12px",
  color: "#4b60a5",
};

const phone = helpers.regex(/\+((\d){3}-){3}(\d){4}/);

const rules = {
  name: { required },
  jobTitle: { required },
  email: { required, email },
  mobile: { required, phone },
  skypeId: {},
};

const v$ = useVuelidate(rules, form);
</script>

<style scoped>
.main-wrap {
  padding-inline: var(--size-2);
  padding-block: var(--size-4);
  display: grid;
  gap: var(--size-2);
  grid-template:
    "form"
    "preview"
    "integrations" / 1fr;
}

@media (min-width: 950px) {
  .main-wrap {
    padding-inline: var(--size-12);
    gap: var(--size-1);
    grid-template:
      "form preview" 11rem
      "form integrations" / 1fr 1fr;
  }
}

h2 {
  font-size: var(--font-size-2);
  padding-block: var(--size-4);
  color: var(--brand);
}

.form {
  grid-area: form;
  padding-inline: var(--size-8);
  padding-block: var(--size-2);
}

form {
  display: grid;
  gap: var(--size-4);
}
.form-item {
  display: grid;
  gap: var(--size-2);
}

label {
  color: var(--text1);
  font-size: var(--font-size-0);
  font-weight: var(--font-weight-6);
}

input {
  max-width: 100%;
  box-shadow: var(--shadow-2);
  border: var(--border-size-1) solid var(--text2);
  padding: var(--size-2);
  color: var(--text2);
  background: var(--surface3);
  border-radius: var(--radius-2);
}

.error,
.help {
  font-size: var(--font-size-0);
}

.error {
  color: var(--red-7);
}

.preview {
  padding-inline: var(--size-8);
  padding-block: var(--size-2);
  background: var(--surface1);
  grid-area: preview;
}

.preview-card {
  background: var(--gray-1);
  padding: var(--size-2);
  max-width: max-content;
  border-radius: var(--radius-2);
}

.integrations {
  grid-area: integrations;
  padding-inline: var(--size-8);
  padding-top: var(--size-1);
  padding-bottom: var(--size-3);
  background: var(--surface3);
  box-shadow: var(--shadow-2);
  border-radius: var(--radius-2);
}

.integrations ol > li {
  font-size: var(--font-size-0);
  margin-left: var(--size-4);
  color: var(--text2);
}

.note {
  padding-inline: var(--size-4);
  margin-top: var(--size-4);
  border-left: 5px solid var(--brand);
}

.note > p {
  font-size: var(--font-size-0);
}

.btns {
  display: flex;
  gap: var(--size-2);
}

.btn {
  font-size: var(--size-fluid-1);
  color: var(--brand);
  font-weight: var(--font-weight-6);
  padding-inline: var(--size-2);
  padding-block: var(--size-2);
  border-radius: var(--radius-2);
  background: var(--surface1);
  text-transform: uppercase;
  border: var(--border-size-1) solid var(--brand);
}
.btn:hover,
.btn:active {
  outline: none;
  cursor: pointer;
}
.btn:disabled {
  opacity: 0.8;
  cursor: not-allowed;
}

.primary-btn {
  color: var(--gray-1);
  background: var(--brand);
}
.secondary-btn {
  color: var(--v-primary-base);
  background: var(--surface3);
}
</style>
