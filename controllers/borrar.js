var bodyFormData = new FormData();
//And then add the fields to the form you want to send:
bodyFormData.append('userName', 'Fred');

//If you are uploading images, you may want to use .append

bodyFormData.append('image', imageFile);


axios({
    method: "post",
    url: "myurl",
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
})
    .then(function (response) {
        //handle success
        console.log(response);
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });



// o metodo con instancia       
const instance = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places/bogota.json',
    method: 'POST',
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
})
const respuesta = await instance.get();