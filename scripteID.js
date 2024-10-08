<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBkeYhHZc9Na0UHjETg9GABYsDZFx1bLtQ",
    authDomain: "esp32-b9013.firebaseapp.com",
    databaseURL: "https://esp32-b9013-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "esp32-b9013",
    storageBucket: "esp32-b9013.appspot.com",
    messagingSenderId: "547189202345",
    appId: "1:547189202345:web:054bd09f1f7e66f7b538b8",
    measurementId: "G-ZMJZQ1K55P"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>