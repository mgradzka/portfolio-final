<template>
  <main class="contact flex">
    <h1>Let's have a chat!</h1>
    <!-- <div class="contact1">
            <i class="fas fa-phone-alt"></i>
            <p>+45 22 36 76 87</p>
        </div> -->
    <div class="tools-container flex">
      <a href="https://github.com/mgradzka" target="_blank">
        <font-awesome-icon icon="fa-brands fa-github" class="fa-brands"
      /></a>
      <a href="https://www.linkedin.com/in/martyna-gradzka/" target="_blank"
        ><font-awesome-icon icon="fa-brands fa-linkedin"  class="fa-brands"
      /></a>
      <a href="mailto:gradzkamartyna@gmail.com"><font-awesome-icon :icon="['fas', 'envelope']" class="fa-brands"/></a>
    </div>
    <form action="form.html" name="contact" netlify>
      <div class="container-form flex">
        <h2>Contact me</h2>

        <input
          type="text"
          class="field"
          placeholder="First Name"
          autocomplete="off"
          required
        />

        <input
          type="text"
          class="field"
          placeholder="Surname"
          name="surname"
          required
        />

        <input
          type="text"
          class="field"
          placeholder="E-mail"
          name="email"
          required
        />

        <textarea
          rows="6"
          class="field"
          placeholder="Message"
          required
          name="message"
        ></textarea>
        <base-button class="btn" type="submit" value="Send">SEND</base-button>
      </div>
    </form>
  </main>
</template>

<style scoped>
.contact h1 {
  color: var(--pinkdark);
  margin-top: 6rem

}
.contact h2 {
  font-size: 2.4rem;
}

.contact {
  padding: 10rem;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
}

.container-form {
  flex-direction: column;
  gap: 3rem;
  padding: 5rem;
  background-color: white;
  width: 70rem;
}

.field {
  width: 100%;
  padding: 1rem 0.5rem;
  background-color: white;
  border: none;
  border-bottom: 1px solid var(--greyfont);
  font-family: inherit;
}

input[type="text"],
textarea {
  font-size: 1.2rem;
}

.contact .btn {
  margin-top: 0;
}

.tools-container {
    gap: 4rem
}

@media (max-width: 544px) {
  .container-form {
    width:30rem
  }
}
</style>

