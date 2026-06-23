function sendChat(){

    const input = document.getElementById("chatInput");

    const responses = document.getElementById("chatResponses");

    if(input.value.trim() === "") return;

    responses.innerHTML += `

    <div class="chat-message user">
        ${input.value}
    </div>

    `;

    setTimeout(()=>{

        responses.innerHTML += `

        <div class="chat-message bot">

        Thank you for your requirement.

        Our DS Enterprises team will contact you shortly.

        </div>

        `;

    },1000);

    input.value = "";

}