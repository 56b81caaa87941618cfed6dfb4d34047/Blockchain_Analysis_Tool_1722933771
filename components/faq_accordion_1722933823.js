Vue.component('faq_accordion_1722933823', {
  template: `
    <div>
      <section class="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 bg-white">
        <div class="space-y-3 text-center">
          <h1 class="text-4xl text-gray-800 font-semibold pt-10">Frequently Asked Questions</h1>
          <p class="text-gray-600 max-w-lg mx-auto text-lg">Everything you need to know about our blockchain analysis app</p>
        </div>
        <div class="mt-14 max-w-2xl mx-auto">
          <div v-for="(item, index) in faqs" :key="index" class="space-y-5 mt-5 overflow-hidden border-b border-gray-200 hover:bg-gray-50 cursor-pointer" @click="toggleFaq(index)">
            <h4 class="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
              { item.q }
              <svg v-if="selectedFaq === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            </h4>
            <div v-show="selectedFaq === index" style="overflow: hidden; transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;" :style="{ maxHeight: selectedFaq === index ? '1000px' : '0px', opacity: selectedFaq === index ? 1 : 0 }">
              <div class="px-4 py-6">
                <p class="text-gray-700 pb-4 max-w-full text-lg">{ item.a }</p>
              </div>
            </div>
            <br/><br/>
          </div>
        </div>
      </section>
    </div>
  `,
  delimiters: ['{', '}'],
  data() {
    return {
      selectedFaq: null,
      faqs: [
        {
          q: "What does this blockchain analysis app do?",
          a: "Our app analyzes new blockchain information in real-time, providing users with valuable insights and data about the latest transactions, smart contracts, and network activities."
        },
        {
          q: "How often is the blockchain data updated?",
          a: "Our app continuously monitors blockchain networks and updates information in real-time, ensuring you always have access to the most current data available."
        },
        {
          q: "Which blockchains does the app support?",
          a: "Currently, our app supports major blockchains such as Bitcoin, Ethereum, and Binance Smart Chain. We're constantly working on adding support for more networks."
        },
        {
          q: "Can I customize the analysis parameters?",
          a: "Yes, our app offers customizable analysis parameters, allowing you to focus on specific aspects of blockchain data that are most relevant to your needs and interests."
        },
        {
          q: "Is there an API available for developers?",
          a: "Absolutely! We offer a robust API for developers, enabling you to integrate our blockchain analysis capabilities into your own applications and services."
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.selectedFaq = this.selectedFaq === index ? null : index;
    }
  }
});