function myFunction() {
        alert("I am an alert box!");
      }
        $(document).ready(function() {
        $("#openModal").click(function() {
          $("#myModal").show();
        });
      
        $(".close").click(function() {
          $("#myModal").hide();
        });
      });
      
      
      // Get the modal
      var modal = document.getElementById("myModal");
      
      // Get the button that opens the modal
      var btn = document.getElementById("myBtn");
      
      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];
      
      // When the user clicks on the button, open the modal
      btn.onclick = function() {
        modal.style.display = "block";
      }
      
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
        modal.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
          $(document).ready(function() {
        $("#openModal_1").click(function() {
          $("#myModal_1").show();
        });
      
        $(".close").click(function() {
          $("#myModal_1").hide();
        });
      });
      
      
      
      // Get the modal
      var modal_1 = document.getElementById("myModal_1");
      
      // Get the button that opens the modal
      var btn_1 = document.getElementById("myBtn_1");
      
      // Get the <span> element that closes the modal
      var span_1 = document.getElementsByClassName("close")[0];
      
      // When the user clicks on the button, open the modal
      btn_1.onclick = function() {
        modal_1.style.display = "block";
      }
      
      // When the user clicks on <span> (x), close the modal
      span_1.onclick = function() {
        modal_1.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal_1) {
          modal_1.style.display = "none";
        }
      }
      $(document).ready(function() {
        $("#openModal_2").click(function() {
          $("#myModal_2").show();
        });
      
        $(".close").click(function() {
          $("#myModal_2").hide();
        });
      });
      // Get the modal
      var modal_2 = document.getElementById("myModal_2");
      
      // Get the button that opens the modal
      var btn_2 = document.getElementById("myBtn_2");
      
      // Get the <span> element that closes the modal
      var span_2 = document.getElementsByClassName("close")[0];
      
      // When the user clicks on the button, open the modal
      btn_2.onclick = function() {
        modal_2.style.display = "block";
      }
      
      // When the user clicks on <span> (x), close the modal
      span_2.onclick = function() {
        modal_2.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal_2) {
          modal_2.style.display = "none";
        }
      }
      
       $(document).ready(function() {
        $("#openModal").click(function() {
          $("#myModal_up").show();
        });
      
        $(".close").click(function() {
          $("#myModal_up").hide();
        });
      });
      
      function myBtn_up() {
            alert("This is a popup message!");
          }
      // Attach the showAlert function to the button click event
      document.getElementById("myBtn_up").addEventListener("click", myBtn_up);
      
      /*// Get the modal
      var modal_up = document.getElementById("myModal_up");
      
      // Get the button that opens the modal
      var btn_up = document.getElementById("myBtn_up");
      
      // Get the <span> element that closes the modal
      var span_up = document.getElementsByClassName("close")[0];
      
      // When the user clicks on the button, open the modal
      btn_up.onclick = function() {
        modal_up.style.display = "block";
      }
      
      // When the user clicks on <span> (x), close the modal
      span_up.onclick = function() {
        modal_up.style.display = "none";
      }
      
      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function(event) {
        if (event.target == modal_up) {
          modal_up.style.display = "none";
        }
      }*/
      
      
              var slider = document.getElementById("myRange");
              var output = document.getElementById("demo");
              output.innerHTML = slider.value;
      
              slider.oninput = function() {
              output.innerHTML = this.value;
              }
              var slider1 = document.getElementById("myRange1");
              var output1 = document.getElementById("demo1");
              output1.innerHTML = slider1.value;
      
              slider1.oninput = function() {
              output1.innerHTML = this.value;
              }
              var slider2 = document.getElementById("myRange2");
              var output2 = document.getElementById("demo2");
              output2.innerHTML = slider2.value;
      
              slider2.oninput = function() {
              output2.innerHTML = this.value;
              }
              var slider3 = document.getElementById("myRange3");
              var output3 = document.getElementById("demo3");
              output3.innerHTML = slider3.value;
      
              slider3.oninput = function() {
              output3.innerHTML = this.value;
              }
          const body = document.querySelector('body'),
          sidebar = body.querySelector('nav'),
          toggle = body.querySelector(".toggle"),
          searchBtn = body.querySelector(".search-box"),
          modeSwitch = body.querySelector(".toggle-switch"),
          modeText = body.querySelector(".mode-text");
      
      
      toggle.addEventListener("click", () => {
          sidebar.classList.toggle("close");
      })
      
      searchBtn.addEventListener("click", () => {
          sidebar.classList.remove("close");
      })
      
      modeSwitch.addEventListener("click", () => {
          body.classList.toggle("dark");
      
          if (body.classList.contains("dark")) {
              modeText.innerText = "Light mode";
          } else {
              modeText.innerText = "Dark mode";
      
          }
      });
      
      $(document).ready(function() {
          $('#example').DataTable();
      } );
      
      var el = document.getElementById('curr');
            var r = document.getElementById('myRange');
            el.innerText = r.valueAsNumber;
            r.addEventListener('change', () => {
            el.innerText = r.valueAsNumber;
    })
              