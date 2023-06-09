class FullTeacherCard extends HTMLElement {
  constructor() {
    super();
   }

  connectedCallback() {
    this.innerHTML=`
    <section data-="magenta">
    <h1>Full card of the teacher</h1>
    <p><strong>Full name:</strong> 
      Nataliya Mukolaivna Sadovska</p>
    <p><strong>Gander:</strong> female</p>
    <p><strong>Age:</strong> 64 years old</p>
    <p><strong>Email:</strong> nataliya01@gmail.com</p>
    <p><strong>Number:</strong> +38068123565</p>
    <p><strong>Country:</strong> Ukraine</p>
    <p><strong>City:</strong> Vorohta</p>
    <p><strong>Comment:</strong> I hate children!!!</p>
    <p><strong>Map:</strong></p>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85029.87047271848!2d24.499274499329076!3d48.24159589204938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4736e22a43497841%3A0x8888614d1dad7b6!2z0JLQvtGA0L7RhdGC0LAsINCY0LLQsNC90L4t0KTRgNCw0L3QutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNzg1OTU!5e0!3m2!1sru!2sua!4v1684146306795!5m2!1sru!2sua" 
      width="350" height="200" style="border:0;" 
        allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </section>`;
  }
}

customElements.define('full-teacher-card', FullTeacherCard);