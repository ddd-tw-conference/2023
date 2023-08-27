<template>
    <div>
      <button @click="loadJson">Load JSON Data</button>
      <pre>{{ jsonData }}</pre>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        jsonData: null
      };
    },
    methods: {
      async loadJson() {
        try {
          const response = await fetch('/your-json-endpoint'); // Change this URL to your JSON endpoint
          this.jsonData = await response.json();
        } catch (error) {
          console.error('Error loading JSON data:', error);
        }
      }
    }
  };
  </script>
  