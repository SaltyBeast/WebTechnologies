class TeacherCard extends HTMLElement {
  constructor() {
    super();
   }

   connectedCallback() {
    this.innerHTML=`
    <section>
    <h1>Teacher's card</h1>
    <img style="width: 200px;" src="../teacher.webp" 
      alt="Teacher photo" />
    <br>
    <strong>Name:</strong>
    <br>
    <label for="teacher-name">Nataliya Mukolaivna Sadovska</label>
    <br>
    <br>
    <details>
      <summary>
        <strong>
          Read more
        </strong> 
      </summary>
      <p>
        A teacher's job is to impart knowledge <br> and 
        skills to students at school. Primary <br> school
        teachers are usually class teachers <br> who teach
        all subjects except physical <br> education and 
        singing.
      </p>
    </details>
  </section>`;
    }
}

customElements.define('teacher-card', TeacherCard);