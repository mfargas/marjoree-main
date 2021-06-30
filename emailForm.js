const form = document.querySelector(".email-form");

form.addEventListener("submit", (event) => {
    // prevent the form submit from refreshing the page
    event.preventDefault();
    console.log(event);

    const { name, email, message } = JSON.parse(event.body);

    // Use your API endpoint URL you copied from the previous step
    const endpoint ="https://2do26j66wf.execute-api.us-west-1.amazonaws.com/prod/sendContactEmail";

    // We use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
    });

    const requestOptions = {
        method: "POST",
        body
    };

    fetch(endpoint, requestOptions)
        .then((response) => {
            if (!response.ok) throw new Error("Error in fetch");
            return response.json();
        })
        .then((response) => {
            document.getElementById("result-text").innerText =
                "Success";
        })
        .catch((error) => {
            document.getElementById("result-text").innerText =
                "still doesn't work :(";
        });
});