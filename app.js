const app = Vue.createApp({
    data() {
      return {
        // Data properties to store dynamic class names, visibility status, and inline color input
        dynamicClasses: '',
        isVisible: true,
        inlineColor: '',
      };
    },
    computed: {
      styleP() {
          // Computed property that returns an object representing class names based on conditions
          return {
              user1: this.dynamicClasses === 'user1', // Apply 'user1' class if dynamicClasses is 'user1'
              user2: this.dynamicClasses === 'user2', // Apply 'user2' class if dynamicClasses is 'user2'
              visible: this.isVisible,                // Apply 'visible' class if isVisible is true
              hidden: !this.isVisible                 // Apply 'hidden' class if isVisible is false
          };
      },
      displayColor() {
          // Computed property that returns inlineColor if it is set, otherwise returns default text
          return this.inlineColor || 'Style me inline!'
      },
      dynamicStyles() {
          // Computed property that returns an object representing inline styles
          return {
              backgroundColor: this.inlineColor,            // Set background color based on inlineColor input
              color: this.inlineColor ? 'lightgray' : ''    // Set text color to lightgray if inlineColor is set, otherwise default color
          }
      }
    },
    methods: {
      checkInput(event) {
          // Method to update dynamicClasses based on user input from the event
          this.dynamicClasses = event.target.value;
      },
      toggleView() {
          // Method to toggle the visibility status (isVisible) of an element
          this.isVisible = !this.isVisible;
      }
    }
  });
  
  // Mount the Vue app to the element with the id "assignment"
  app.mount("#assignment");
