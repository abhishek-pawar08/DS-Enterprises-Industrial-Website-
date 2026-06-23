function filterProducts(category){

    const products =
    document.querySelectorAll(".product-card");

    products.forEach((card)=>{

        if(category === "all"){

            card.style.display = "block";

        }

        else if(card.classList.contains(category)){

            card.style.display = "block";

        }

        else{

            card.style.display = "none";

        }

    });

}

/* PRODUCT DETAILS */

function openProductModal(product){

    const modal =
    document.getElementById("productModal");

    const modalData =
    document.getElementById("modalData");

    let content = "";

    /* CORRUGATED BOX */

    if(product === "corrugated"){

        content = `

        <div class="modal-product-grid">

            <div>

                <img src="images/corrugated-box.jpeg">

            </div>

            <div class="modal-details">

                <h2>
                Corrugated Boxes
                </h2>

                <p>

                Heavy-duty industrial corrugated boxes
                designed for warehousing, logistics,
                e-commerce and manufacturing industries.

                </p>

                <div class="spec-grid">

                    <div class="spec-card">

                        <h4>Flute Types</h4>

                        <p>
                        A, B, C, E, F Flute
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Ply Types</h4>

                        <p>
                        3 Ply, 5 Ply, 7 Ply, 9 Ply
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>GSM Range</h4>

                        <p>
                        120 GSM – 350 GSM
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Applications</h4>

                        <p>
                        Industrial Shipping,
                        Storage & Logistics
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Strength</h4>

                        <p>
                        High Compression &
                        Bursting Strength
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Customization</h4>

                        <p>
                        Custom Sizes &
                        Branding Available
                        </p>

                    </div>

                </div>

            </div>

        </div>

        `;

    }

    /* BOPP TAPE */

    else if(product === "bopp"){

        content = `

        <div class="modal-product-grid">

            <div>

                <img src="images/bopp-tape.png">

            </div>

            <div class="modal-details">

                <h2>
                BOPP Tapes
                </h2>

                <p>

                Premium adhesive BOPP tapes for
                industrial carton sealing and
                packaging applications.

                </p>

                <div class="spec-grid">

                    <div class="spec-card">

                        <h4>Types</h4>

                        <p>
                        Transparent, Brown,
                        Printed
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Micron Range</h4>

                        <p>
                        36 to 65 Micron
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Adhesive</h4>

                        <p>
                        Strong Acrylic Adhesive
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Roll Sizes</h4>

                        <p>
                        Custom Width & Length
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Usage</h4>

                        <p>
                        Carton Sealing &
                        Packaging
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Features</h4>

                        <p>
                        High Grip &
                        Durable Bonding
                        </p>

                    </div>

                </div>

            </div>

        </div>

        `;

    }

    /* PP BOX */

    else if(product === "ppbox"){

        content = `

        <div class="modal-product-grid">

            <div>

                <img src="images/pp-box.jpeg">

            </div>

            <div class="modal-details">

                <h2>
                PP Boxes
                </h2>

                <p>

                Reusable heavy-duty polypropylene
                boxes for industrial storage and
                logistics applications.

                </p>

                <div class="spec-grid">

                    <div class="spec-card">

                        <h4>Material</h4>

                        <p>
                        Polypropylene
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Features</h4>

                        <p>
                        Stackable & Durable
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Applications</h4>

                        <p>
                        Warehouses &
                        Manufacturing Units
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Load Capacity</h4>

                        <p>
                        Heavy Industrial Load
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Customization</h4>

                        <p>
                        Available
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Reusable</h4>

                        <p>
                        Eco-Friendly &
                        Long Life
                        </p>

                    </div>

                </div>

            </div>

        </div>

        `;

    }

    /* BUBBLE WRAP */

    else if(product === "bubble"){

        content = `

        <div class="modal-product-grid">

            <div>

                <img src="images/bubble-bags.jpeg">

            </div>

            <div class="modal-details">

                <h2>
                Bubble Wraps
                </h2>

                <p>

                Shock absorption packaging
                materials for fragile products
                and industrial protection.

                </p>

                <div class="spec-grid">

                    <div class="spec-card">

                        <h4>Protection</h4>

                        <p>
                        Air Bubble Cushioning
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Applications</h4>

                        <p>
                        Electronics &
                        Fragile Packaging
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Roll Sizes</h4>

                        <p>
                        Multiple Dimensions
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Features</h4>

                        <p>
                        Lightweight &
                        Flexible
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Strength</h4>

                        <p>
                        Impact Resistance
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Usage</h4>

                        <p>
                        Industrial &
                        E-commerce Packaging
                        </p>

                    </div>

                </div>

            </div>

        </div>

        `;

    }

    /* FOAM WRAP */

    else if(product === "foam"){

        content = `

        <div class="modal-product-grid">

            <div>

                <img src="images/foam-sheet.jpeg">

            </div>

            <div class="modal-details">

                <h2>
                Foam Wraps
                </h2>

                <p>

                Protective foam packaging sheets
                designed for cushioning and
                anti-scratch protection.

                </p>

                <div class="spec-grid">

                    <div class="spec-card">

                        <h4>Material</h4>

                        <p>
                        EPE Foam
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Protection</h4>

                        <p>
                        Cushioning &
                        Anti-Scratch
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Applications</h4>

                        <p>
                        Electronics &
                        Fragile Goods
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Moisture Resistance</h4>

                        <p>
                        Yes
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Density</h4>

                        <p>
                        Multiple Density Options
                        </p>

                    </div>

                    <div class="spec-card">

                        <h4>Customization</h4>

                        <p>
                        Available
                        </p>

                    </div>

                </div>

            </div>

        </div>

        `;

    }
    /* EPE FOAM BAGS */

else if(product === "epefoam"){

    content = `

    <div class="modal-product-grid">

        <div>

            <img src="images/foam-bags.jpeg">

        </div>

        <div class="modal-details">

            <h2>
            EPE Foam Bags
            </h2>

            <p>

            High-quality EPE foam packaging bags
            designed for industrial cushioning,
            anti-scratch protection and fragile
            product safety during transportation.

            </p>

            <div class="spec-grid">

                <div class="spec-card">

                    <h4>Material</h4>

                    <p>
                    Expanded Polyethylene Foam
                    </p>

                </div>

                <div class="spec-card">

                    <h4>Protection</h4>

                    <p>
                    Cushioning & Impact Resistance
                    </p>

                </div>

                <div class="spec-card">

                    <h4>Applications</h4>

                    <p>
                    Electronics, Automotive,
                    Glass & Fragile Products
                    </p>

                </div>

                <div class="spec-card">

                    <h4>Features</h4>

                    <p>
                    Lightweight, Flexible &
                    Anti-Scratch
                    </p>

                </div>

                <div class="spec-card">

                    <h4>Moisture Resistance</h4>

                    <p>
                    Excellent Resistance
                    </p>

                </div>

                <div class="spec-card">

                    <h4>Customization</h4>

                    <p>
                    Custom Sizes &
                    Thickness Available
                    </p>

                </div>

            </div>

        </div>

    </div>

    `;

}
/* AIR BUBBLE INDUSTRIAL BAGS */

else if(product === "airbubble"){

    content = `

    <div class="modal-product-grid">

        <div>

            <img src="images/bubble-bags.jpeg">

        </div>

        <div class="modal-details">

            <h2>
            Air Bubble Industrial Bags
            </h2>

            <p>

            Premium industrial air bubble bags
            designed for shock absorption and
            protective packaging during shipping
            and logistics.

            </p>

            <div class="spec-grid">

                <div class="spec-card">

                    <h4>Material</h4>

                    <p>
                    Air Bubble Poly Film
                    </p>

                </div>

                <div class="spec-card">

                    <h4>Protection</h4>

                    <p>
                    Shock Absorption &
                    Cushion Protection
                    </p>

                </div>

                <div class="spec-card">

                    <h4>Applications</h4>

                    <p>
                    Fragile Industrial Products
                    </p>

                </div>

                <div class="spec-card">

                    <h4>Features</h4>

                    <p>
                    Lightweight & Durable
                    </p>

                </div>

                <div class="spec-card">

                    <h4>Sizes</h4>

                    <p>
                    Custom Sizes Available
                    </p>

                </div>

                <div class="spec-card">

                    <h4>Industrial Usage</h4>

                    <p>
                    Warehousing, E-commerce &
                    Electronics Packaging
                    </p>

                </div>

            </div>

        </div>

    </div>

    `;

}

    modalData.innerHTML = content;

    modal.style.display = "block";


}

/* CLOSE MODAL */

function closeProductModal(){

    document.getElementById("productModal")
    .style.display = "none";

}

/* CLOSE OUTSIDE CLICK */

window.onclick = function(event){

    const modal =
    document.getElementById("productModal");

    if(event.target == modal){

        modal.style.display = "none";

    }

}