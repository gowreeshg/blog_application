import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    initialize() { }
    connect() { }
    toggleForm(event) {
        console.log("Clicked edit button");
        event.preventDefault();
        event.stopPropagation();
        const formID = event.params["form"];
        console.log(formID);
        const commentBodyID = event.params["body"];
        console.log(commentBodyID);

        const form = document.getElementById(formID);
        form.classList.toggle("d-none");
        const commentBody = document.getElementById(commentBodyID);

        commentBody.classList.toggle("d-none");
    }
}
