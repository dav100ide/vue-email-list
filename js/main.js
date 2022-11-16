const { createApp } = Vue;

createApp({
   data() {
      return {
         mails: [],
         maxNum: 10,
         writingMode: '',
      };
   },
   methods: {
      changeWritingMode() {
         this.writingMode === '' ? (this.writingMode = 'vertical-mode') : (this.writingMode = '');
      },
   },
   created() {
      for (let i = 0; i < this.maxNum; i++) {
         axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail') //
            .then((response) => {
               const mail = response.data.response;
               this.mails.push(mail);
            });
      }
   },
}).mount('#app');
