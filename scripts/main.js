/*
    1. I will need to import the functions from (guests.js/parkLocations.js/services.js

    2. I will need to create the document.querySelector and build out the innerHtml
*/
import { guestHtml } from "./guests.js";
import { parkLocationHTML } from "./parkLocations.js";
import { parkServicesHtml } from "./services.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
<div class="park-services">
<h2>Park Services</h2>
${parkServicesHtml()}
</div>

<div class="main-content">
    <div class="park-location">
        <h2>Park Locations</h2>
        ${parkLocationHTML()}
    </div>

    <div class="guest-list">
        <h2>Guest List</h2>
         ${guestHtml()}
    </div>
</div>
`;

mainContainer.innerHTML = applicationHTML;
