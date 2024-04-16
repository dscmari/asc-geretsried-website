export const ScrollToBottomMixin = {
    methods: {
      scrollToBottom() {
        console.log("scroll to bottom is called");
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  };