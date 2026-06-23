async function fetchInquiries(){

    try{

        const response = await fetch(
            "http://localhost:5000/api/inquiry/all"
        );

        const data = await response.json();

        document.getElementById("totalInquiry")
        .innerText = data.length;

        const table = document.getElementById("inquiryTable");

        data.forEach((item)=>{

            table.innerHTML += `

            <tr>

                <td>${item.name}</td>

                <td>${item.email}</td>

                <td>${item.phone}</td>

                <td>${item.product}</td>

                <td>${item.quantity}</td>

            </tr>

            `;

        });

    }

    catch(error){

        console.log(error);

    }

}

fetchInquiries();