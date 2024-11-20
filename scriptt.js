const token = "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"
const inputTxt = document.getElementById("input")
const image = document.getElementById("image")
const button = document.getElementById("btn")


async function query() {

    image.src = "/gif3.gif"
    const response = await fetch(
        "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image",
        {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ "inputs": inputTxt.value }),
        }
    );
    const result = await response.blob();
    return result;
}

button.addEventListener('click', async function () {

    query().then((response) => {

        const objectUrl = URL.createObjectURL(response)
        image.src = objectUrl

    });

})

//api 1
//"https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image"

//api 2
//"https://api-inference.huggingface.co/models/kothariyashhh/GenAi-Texttoimage"