document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.img-clickable').forEach(img => {
        img.addEventListener('click', function () {
         const largeUrl = this.getAttribute
         ('data-img-url');
         document.getElementById('modalImage').src = largeUrl;
        });
    });
 });





 let apiUrl = "https://fuzail939.github.io/IMG-API/index.json"

 async function getApi(link) {

    let response = await fetch(link)
    let data = await response.json()
    console.log(data);


    let img = ""

    data.forEach(element => {
        img += `
            <div class="col-md-4">
              <div class="card card-custom text-white h-100">
                <img src="${element.img_url}" class="card-img-top" alt="Outfit Image">
                <div class="card-body">
                  <div><span class="label">Image URL:</span> 
                    <a class="image-link" href="${element.img_url}" download target="_blank">Download Image</a></div>
                  <div><span class="label">Image ID:</span> <span class="value">${element.img_id}</span></div>
                  <div><span class="label">Category:</span> <span class="value">${element.img_category}</span></div>
                  <div><span class="label">Description:</span> <span class="value">${element.img_description}</span></div>
                </div>
              </div>
            </div>
          `;

      document.getElementById("all-data").innerHTML = img;

    });

}


getApi(apiUrl)