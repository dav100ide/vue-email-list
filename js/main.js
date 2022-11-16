const { createApp } = Vue;

createApp({
   data() {
      return {
         mails: [],
      };
   },
   methods: {
      // metodi vue
   },
   created() {
      for (let i = 0; i < 5; i++) {
         axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail') //
            .then((response) => {
               const mail = response.data.response;
               this.mails.push(mail);
               console.log(mail);
            });
      }
   },
}).mount('#app');
