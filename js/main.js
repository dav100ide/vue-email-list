const { createApp } = Vue;

createApp({
   data() {
      return {
         mails: [],
      };
   },

   created() {
      for (let i = 0; i < 10; i++) {
         axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail') //
            .then((response) => {
               const mail = response.data.response;
               this.mails.push(mail);
            });
      }
   },
}).mount('#app');
