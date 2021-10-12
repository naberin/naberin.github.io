var app = new Vue({
   el: "#personal-app",
   data: {
      fullname: {first: "Norman", last: "Aberin"}
   },
   methods: {
      setMenuToggleListener: function () {
         let menuToggle = document.getElementById("nav-menu-toggle");
         let menu = document.getElementById("nav-menu-links");
      
         menuToggle.addEventListener('click', function() {
            menu.classList.toggle('menu-is-active');
         });
      }
      
   },
   mounted() {
      this.setMenuToggleListener();
   }

})