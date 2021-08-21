import React from 'react';

export default function Contact() {
  return (
    <div style={{height: "100vh", background: "#507982"}}>
      <h1>Contact Page</h1>
      <form>
      <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="jake@example.com"></input>
      </div>
      <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Name</label>
          <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Jake"></input>
      </div>
      <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Message</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button style={{marginLeft: "2em"}}class="btn btn-secondary" type="submit">Send</button>
      </form>
    </div>
  );
}
