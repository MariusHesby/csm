const connect = document.querySelector(".bottomPart");
connect.innerHTML = `
<div class="connect">
        <!-- SECTION 2: ADMISSION -->
        <section id="content-admission">
          <h2>Admission</h2>
          <img
            src="img/stock/positive-millennial-girl-with-natural-ginger-hair-recommends-sales-keeps-thumbs-up-smiles-gladfully-gives-approval-wears-blue-hat-sweatshirt-breaks-through-paper-hole.png"
            alt=""
          />
          <p class="black">The entrance is free for all!</p>
          <p>There are guided tours of the museum that leave every hour. These tours are 70 <abbr title="Norwegian kroner">NOK</abbr> per person and include a handy printed guide off the museum.</p>
          <p>
            If you would like to organize a guided tour for your group of 6 or more people, please
            <a href="contact.html">contact us</a> to arrange the tour.
          </p>
          <p class="envelope">
            <a href="contact.html
            ">
              <img
                src="img/svg/envelope.svg"
                class="envelope"
                alt="shortcut to contact site"/>
            </a>
          </p>
        </section>

        <!-- SECTION 3: HOURS -->
        <section id="content-hours">
          <h2>Hours</h2>
          <ul class="opening-hours">
            <li>
              <span>Monday</span>
              <span>Closed</span>
            </li>
            <li>
              <span>Tuesday</span>
              <span>10.00 - 16.00</span>
            </li>
            <li>
              <span>Wednesday</span>
              <span>10.00 - 16.00</span>
            </li>
            <li>
              <span>Thursday</span>
              <span>10.00 - 16.00</span>
            </li>
            <li>
              <span>Friday</span>
              <span>10.00 - 19.00</span>
            </li>
            <li>
              <span>Saturday</span>
              <span>09.00 - 16.00</span>
            </li>
            <li>
              <span>Sunday</span>
              <span>09.00 - 13.00</span>
            </li>
          </ul>
        </section>
      </div>

      <!-- SECTION 4: SOCIAL MEDIA -->
      <section id="content-social">
        <h2>Follow us on social media</h2>
        <ul class="social-media">
          <li>
            <a href="#0"><img src="img/svg/facebook_w.svg" class="facebook-img" alt="link to the museums facebook site" /></a>
          </li>
          <li>
            <a href="#0"><img src="img/svg/youtube_w.svg" class="youtube-img" alt="link to the museums youtube site" /></a>
          </li>
          <li>
            <a href="#0"><img src="img/svg/twitter_w.svg" class="twitter-img" alt="link to the museums facebook site" /></a>
          </li>
        </ul>
      </section>

      <!-- SECTION 5: NEWSLETTER -->
      <section class="content-newsletter">
        <h2>Join our newsletter!</h2>
        <p>Stay up to date with new exhibitions, special discounts and more!</p>
        <!-- form -->
        <form action="newsletter_joined.html#scroll" method="GET" autocomplete="on">
          <fieldset>
            <legend>Your e-mail</legend>
            <label for="email">E-mail:</label>
            <input type="email" name="email" id="email" value="isaac.newton@philosophia.com" class="form__input" required />
            <button type="submit" value="Submit" class="cta-create">Submit</button>
          </fieldset>
        </form>
      </section>

      <!-- FOOTER -->
      <footer></footer>
    </div>`;
