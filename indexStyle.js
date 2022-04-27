function activeNavElement(element){
    let parentNode = element.parentNode;
    let childNodes = element.parentNode.children;
    //removing nav-link class
    for(let i=0; i < childNodes.length; i++){
        childNodes[i].classList.remove('nav_target');
    }
    //add class to clicked element
    element.classList.add("nav_target");
 
}

let dashboard = document.querySelector('.cls-1');
let shipment = document.querySelector('.cls-2');
let inventory = document.querySelector('.cls-3');
let channel = document.querySelector('.cls-4');
let orders = document.querySelector('.cls-5');

dashboard.click();
orders.addEventListener('click',() => {
    document.querySelector('.main-container').innerHTML=`          <div class="container-fluid">
    <div class="row" id="col-01">

      <div class="col-md-6">
        <h2>Orders</h2>
      </div>
      <div class="col-md-2">
        <a href="" id="Export_Order">Export Order</a>
      </div>
      <div class="col-md-2">
        <a href="" id="import_Order">Import Order</a>
      </div>
      <div class="col-md-2">
        <button>Create Order</button>
      </div>
    </div>

  </div>
  <div class="container">
    <div class="row" id="col-02">

      <div class="col-md-4">
        <div class="input-group">
          <input type="text" class="form-control" />
          <div class="input-group-append">
            <button class="form-control" id="button"><i class="fa fa-search" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>



      <div class="col-md-1">
        <div class="dropdown">
          <button class="btn btn-light dropdown-toggle buttonDrop-date" type="button" id="dropdownMenuButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Date
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
      <div class="col-md-1">
        <div class="dropdown">
          <button class="btn btn-light dropdown-toggle buttonDrop" type="button" id="dropdownMenuButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            All Destinations
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>

      </div>
      <div class="col-md-1">
        <div class="dropdown">
          <button class="btn btn-light dropdown-toggle buttonDrop" type="button" id="dropdownMenuButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sales Channel
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </div>
      <div class="col-md-1">
        <div class="dropdown">
          <button class="btn btn-light dropdown-toggle buttonDrop" type="button" id="dropdownMenuButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Tags
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>

      </div>
    </div>

  </div>

  <div class="container-fluid ">
    <div class="row ">

      <table class="table table-style">
        <thead>
          <tr>
            <th scope="col" style="padding-bottom: 30px;"><input type="checkbox" class="table-checkbox"></th>
            <th scope="col" style="padding-bottom: 30px;">Order Number</th>
            <th scope="col" style="padding-bottom: 30px;">Channel</th>
            <th scope="col" style="padding-bottom: 30px;">Date</th>
            <th scope="col" style="padding-bottom: 30px;">SKU</th>
            <th scope="col" style="padding-bottom: 30px;">items(s)</th>
            <th scope="col" style="padding-bottom: 30px;">Customer</th>
            <th scope="col" style="padding-bottom: 30px;">ISO</th>
            <th scope="col" style="padding-bottom: 30px;">Action</th>
          </tr>
        </thead>
        <tbody>

          <tr style="padding-top: 10px;">
            <th scope="row" style="padding-top: 50px;"><input type="checkbox" class="table-checkbox"></th>
            <td>HE168593176
              <div class="ord-num-div">
                <span class="ord-num-data">
                  <p>Watch</p>
                </span>
                <span class="ord-num-data">
                  <p>Electronic</p>
                </span>
                <span class="ord-num-data">
                  <p>Fitbit</p>
                </span>
                <span class="ord-num-data">
                  <p>Heartrate</p>
                </span>
                <span class="ord-num-data">
                  <p>Fitness</p>
                </span>
              </div>
            </td>
            <td style="padding-top: 50px;">Manual</td>
            <td style="padding-top: 50px;">2022-05-05</td>
            <td style="padding-top: 50px;">SM542</td>
            <td style="padding-top: 50px;">25</td>
            <td style="padding-top: 50px;">John Doe</td>
            <td style="padding-top: 50px;">NP108Tb
              <div class="country-logo-div">
                <img src="./images/united-kingdom.png" height="15px" width="15px" style="border-radius: 20px;">
                GB
              </div>
            </td>
            <td style="padding-top: 50px;">
              <div class="action-btn"><span class="material-icons action-icon">
                  more_vert
                </span></div>
            </td>

          </tr>





          <tr style="padding-top: 10px;">
            <th scope="row" style="padding-top: 50px;"><input type="checkbox" class="table-checkbox"></th>
            <td>HE168593176
              <div class="ord-num-div">
                <span class="ord-num-data">
                  <p>Watch</p>
                </span>
                <span class="ord-num-data">
                  <p>Electronic</p>
                </span>
                <span class="ord-num-data">
                  <p>Fitbit</p>
                </span>
                <span class="ord-num-data">
                  <p>Heartrate</p>
                </span>
                <span class="ord-num-data">
                  <p>Fitness</p>
                </span>
              </div>
            </td>
            <td style="padding-top: 50px;">Manual</td>
            <td style="padding-top: 50px;">2022-05-05</td>
            <td style="padding-top: 50px;">SM542</td>
            <td style="padding-top: 50px;">25</td>
            <td style="padding-top: 50px;">John Doe</td>
            <td style="padding-top: 50px;">NP108Tb
              <div class="country-logo-div">
                <img src="./images/united-kingdom.png" height="15px" width="15px" style="border-radius: 20px;">
                GB
              </div>
            </td>
            <td style="padding-top: 50px;">
              <div class="action-btn"><span class="material-icons action-icon">
                  more_vert
                </span></div>
            </td>

          </tr>


          <tr style="padding-top: 10px;">
            <th scope="row" style="padding-top: 50px;"><input type="checkbox" class="table-checkbox"></th>
            <td>HE168593176
              <div class="ord-num-div">
                <span class="ord-num-data">
                  <p>Watch</p>
                </span>
                <span class="ord-num-data">
                  <p>Electronic</p>
                </span>
                <span class="ord-num-data">
                  <p>Fitbit</p>
                </span>
                <span class="ord-num-data">
                  <p>Heartrate</p>
                </span>
                <span class="ord-num-data">
                  <p>Fitness</p>
                </span>
              </div>
            </td>
            <td style="padding-top: 50px;">Manual</td>
            <td style="padding-top: 50px;">2022-05-05</td>
            <td style="padding-top: 50px;">SM542</td>
            <td style="padding-top: 50px;">25</td>
            <td style="padding-top: 50px;">John Doe</td>
            <td style="padding-top: 50px;">NP108Tb
              <div class="country-logo-div">
                <img src="./images/united-kingdom.png" height="15px" width="15px" style="border-radius: 20px;">
                GB
              </div>
            </td>
            <td style="padding-top: 50px;">
              <div class="action-btn"><span class="material-icons action-icon">
                  more_vert
                </span></div>
            </td>

          </tr>

<!-- --------------table footer----------------- -->
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td style="padding-top: 30px; font-weight: 500;">Per page:</td>
            <td style="padding-top: 30px;">
              <div class="action-btn-table-footer">100</div>
            </td>

          </tr>


        </tbody>
      </table>

    </div>
  </div>

  <div id="footerDiv">
    <p>CopyRight © <span id="year"></span> <span class="red-text">HECT</span></p>
  </div>
</div>`;
})
inventory.addEventListener('click',() => {
    document.querySelector('.main-container').innerHTML=`          <div class="container-fluid">
    <div class="row" id="col-01">

      <div class="col-md-6">
        <h2>Inventory</h2>
      </div>
      <div class="col-md-2"></div>
      <div class="col-md-2"></div>
      <div class="col-md-2"></div>
    </div>
  </div>

  <div class="container">
    <div class="row" id="col-02">

      <div class="col-md-5 action-div">
        <h4>inventory list empty!</h4>
        <p class="invt-desc" style="opacity: 0.5;">Headover To New Inventory And Start Adding <br>Inventory</p>
        <button style="background-color: #2ec00a; color:white;">New Inventory</button> <button style="border: none; color:#ff4300; font-weight: 500;">Import Inventory</button>

      </div>
      <div class="col-md-1"></div>
      <div class="col-md-1"></div>
      <div class="col-md-1"></div>
    </div>

  </div>

  <div class="container image-container">
    <div class="row" id="col-02">
      <div class="col-md-12 image-div"><img src="./images/inventoryImage.png" alt=""></div>
    </div>

  </div>


  <div id="footerDiv">
    <p>CopyRight © <span id="year"></span> <span class="red-text">HECT</span></p>
  </div>`;
})


