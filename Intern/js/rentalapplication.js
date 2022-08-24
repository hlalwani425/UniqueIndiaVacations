// HTML include another HTML
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
      elmnt = z[i];
      /*search for elements with a certain attribute:*/
      file = elmnt.getAttribute("w3-include-html");
      if (file) {
        /*make an HTTP request using the attribute value as the file name:*/
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4) {
            if (this.status == 200) {elmnt.innerHTML = this.responseText;}
            if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
            /*remove the attribute, and call this function once more:*/
            elmnt.removeAttribute("w3-include-html");
            includeHTML();
          }
        }      
        xhttp.open("GET", file, true);
        xhttp.send();
        /*exit the function:*/
        return;
      }
    }
  };
// this ajax works on submit button in rental application form(Unsecured page) 
function submitApplicationForm(baseurl) {
    //for property
    var propertyID = $("#propertyId").val();
    var type = $("#type").val();
    var squareFeet = $("#squareFeet").val();
    var bedrooms = $("#bedrooms").val();
    var bathrooms = $("#bathrooms").val();
    var rentAmount = $("#rentAmount").val();
    var streetAddress = $("#streetAddress").val();
    var houseNo = $("#houseNo").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zip = $("#zip").val();
    var country = $("#country").val();
    var pets = $("#pets").val();
    var carParking = $("#carParking").val();
    var furnishing = $("#furnishing").val();

    //for applicant details
    var fullName = $("#fullName").val();
    var dob = $("#dob").val();
    var email = $("#mail").val();
    var phoneNo = $("#phone_no").val();
    var ssn = $("#ssn").val();
    var verification = $("#verify").val();

    //for current employment details
    var currentcompany = $("#current_company").val();
    var currentoccupation = $("#current_occupation").val();
    var currentduration = $("#current_duration").val();
    var currentincome = $("#current_income").val();
    var currentsupervisor = $("#current_supervisor").val();
    var currentofficeaddress = $("#current_office_address").val();
    var currentcompanyphone = $("#current_company_phoneNo").val();
    var currentcompanymail = $("#current_company_mail").val();
    var currentcompanycity = $("#current_company_city").val();
    var currentcompanystate = $("#current_company_state").val();
    var currentzip = $("#current_zip").val();
    var currentcompanycountry = $("#current_company_country").val();

    //for previous employment details
    var previouscompany = $("#previous_company").val();
    var previousoccupation = $("#previous_occupation").val();
    var previousduration = $("#previous_duration").val();
    var previousincome = $("#previous_income").val();
    var previoussupervisor = $("#previous_supervisor").val();
    var previousofficeaddress = $("#previous_office_address").val();
    var previouscompanyphone = $("#previous_company_contact").val();
    var previouscompanymail = $("#previous_company_mail").val();
    var previouscompanycity = $("#previous_company_city").val();
    var previouscompanystate = $("#previous_company_state").val();
    var previouszip = $("#previous_zip").val();
    var previouscompanycountry = $("#previous_company_country").val();

    // for personal reference
    var personalreferencename = $("#personalref_fullname").val();
    var personalreferencerelationship = $("#personalref_relationship").val();
    var personalreferencephone = $("#personalref_phone").val();
    var personalreferencemail = $("#personalref_mail").val();

    //for current landlord 
    var currentlandlordname = $("#current_landlord_name").val();
    var currentlandlordaddress = $("#current_landlord_address").val();
    var currentlandlordphone = $("#current_landlord_phoneNo").val();
    var currentlandlordmail = $("#current_landlord_mail").val();

    // for previous landlord-1
    var prevLandlordname = $("#previous_landlord1_name").val();
    var prevLandlordaddress = $("#previous_landlord1_address").val();
    var prevLandlordphone = $("#previous_landlord1_phone").val();
    var prevLandlordmail = $("#previous_landlord1_mail").val();

    //  for previous landlord-2
    var previousLandlordname = $("#previous_landlord_name").val();
    var previousLandlordaddress = $("#previous_landlord_address").val();
    var previousLandlordphone = $("#previous_landlord_phone").val();
    var previousLandlordmail = $("#previous_landlord_mail").val();

    //for current residence
    var currentresidencetype = $("#current_residence_type").val();
    var currentresidencesqFeet = $("#current_residence_sqFeet").val();
    var currentresidencebedrooms = $("#current_residence_bedrooms").val();
    var currentresidencerentamount = $("#current_residence_rent").val();
    var currentresidenceaddress = $("#current_residence_houseNo").val();
    var currentresidencestreet = $("#current_residence_street").val();
    var currentresidencecity = $("#current_residence_city").val();
    var currentresidencestate = $("#current_residence_state").val();
    var currentresidencezip = $("#current_residence_zip").val();
    var currentresidencecountry = $("#current_residence_country").val();
    var currentresidenceduration = $("#current_residence_duration").val();
    var currentleaseExpiry = $("#current_lease_expiry").val();
    var reasonformoving = $("#reason_for_moving").val();

    //for previous residence-1
    var previousresidencetype = $("#previous_residence_type").val();
    var previousresidencesqFeet = $("#previous_residence_sqFeet").val();
    var previousresidencebedrooms = $("#previous_residence_bedrooms").val();
    var previousresidencerentamount = $("#previous_residence_rent").val();
    var previousresidenceaddress = $("#previous_residence_houseNo").val();
    var previousresidencestreet = $("#previous_residence_address").val();
    var previousresidencecity = $("#previous_residence_city").val();
    var previousresidencestate = $("#previous_residence_state").val();
    var previousresidencezip = $("#previous_residence_zip").val();
    var previousresidencecountry = $("#previous_residence_country").val();
    var previousresidenceduration = $("#previous_residence_duration").val();
    var previousresidenceStartDate= $("#previous_residence_startDate").val();
    var previousresidenceEndDate= $("#previous_residence_endDate").val();


    //for previous residence-2
    var previousresidence2type = $("#previous_residence2_type").val();
    var previousresidences2sqFeet = $("#previous_residence2_sqFeet").val();
    var previousresidence2bedrooms = $("#previous_residence2_bedrooms").val();
    var previousresidence2rentamount = $("#previous_residence2_rent").val();
    var previousresidence2address = $("#previous_residence2_houseNo").val();
    var previousresidence2street = $("#previous_residence2_street").val();
    var previousresidence2city = $("#previous_residence2_city").val();
    var previousresidence2state = $("#previous_residence2_state").val();
    var previousresidence2zip = $("#previous_residence2_zip").val();
    var previousresidence2country = $("#previous_residence2_country").val();
    var previousresidence2StartDate= $("#previous_residence2_startDate").val();
    var previousresidence2EndDate= $("#previous_residence2_endDate").val();




    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("POST", baseurl + "/rentalunsecured/submitapplication?appID=" + appID, true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "" && this.readyState == 4) {
            var res = JSON.parse(this.responseText);
            var loginRes = res.response;
            console.log(res.rspnsMsg);
            var s = res.rspnsMsg;
            console.log(s);
            var s = s.replace(/[{}]/g, "");
            let pairs = s.split(', ')                
            let obj = pairs.reduce((obj,data)=> {
                let [k, v] = data.split('=')        
                obj[k] = v                          
                return obj
            }, {})


            //    APPLICANTS DETAILS

            if(obj["applicant.fullName"]=="Invalid Name!!"){
               var error= document.getElementById("name_applicants");
               error.innerHTML = obj["applicant.fullName"];
            }

            if(obj["applicant.phone"]=="Invalid Phone Number!!"){
                var error = document.getElementById("phone_applicants");
                error.innerHTML = obj["applicant.phone"];
            }
            if(obj["applicant.DOB"]=="Please fill DOB!!"){
                var error= document.getElementById("dob_applicants");
                error.innerHTML = obj["applicant.DOB"];
            }
            if(obj["applicant.emailID"]=="Invalid email!!"){
                var error =  document.getElementById("email_applicants");
                error.innerHTML = obj["applicant.emailID"];
            }
            if(obj["applicant.SSN"]=="Invalid Social Security Number!!"){
                var error =  document.getElementById("ssn_applicants");
                error.innerHTML = obj["applicant.SSN"];       
            }
         
       //current company details


       console.log(obj["employmentHistory[1].companyEmail"])
        if(obj["employmentHistory[0].company"]== "Invalid company!!"){
            document.getElementById("curr_company").innerHTML = obj["employmentHistory[0].company"];
        }
        if(obj["employmentHistory[0].occupation"]== "Invalid occupation!!"){
            document.getElementById("curr_occupation").innerHTML = obj["employmentHistory[0].occupation"];
        }
        if(obj["employmentHistory[0].income"]== "Invalid income!!"){
            document.getElementById("curr_income").innerHTML = obj["employmentHistory[0].income"];
        }
        if(obj["employmentHistory[0].supervisor"]== "Invalid supervisor!!"){
            document.getElementById("curr_supervisor").innerHTML = obj["employmentHistory[0].supervisor"];
        }
        if(obj["employmentHistory[0].address"]== "Invalid Address!!"){
            document.getElementById("curr_office_address").innerHTML = obj["employmentHistory[0].address"];
        }

        if(obj["employmentHistory[0].companyPhoneNo"]== "Invalid Company Contact Number!!"){
            document.getElementById("curr_company_phoneNo").innerHTML = obj["employmentHistory[0].companyPhoneNo"];
        }
        if(obj["employmentHistory[0].companyEmail"]== "Invalid Company email!!"){
            document.getElementById("curr_company_mail").innerHTML = obj["employmentHistory[0].companyEmail"];
        }
        if(obj["employmentHistory[0].city"]== "Invalid city!!"){
            document.getElementById("curr_company_city").innerHTML = obj["employmentHistory[0].city"];
        }
        if(obj["employmentHistory[0].state"]== "Invalid state!!"){
            document.getElementById("curr_company_state").innerHTML = obj["employmentHistory[0].state"];
        }
        if(obj["employmentHistory[0].zip"]== "Invalid zip!!"){
            document.getElementById("curr_zip").innerHTML = obj["employmentHistory[0].zip"];
        }
        if(obj["employmentHistory[0].country"]== "Invalid country!!"){
            document.getElementById("curr_company_country").innerHTML = obj["employmentHistory[0].country"];
        }

        if(obj["employmentHistory[0].duration"]== "Invalid duration!!"){
            document.getElementById("curr_duration").innerHTML = obj["employmentHistory[0].duration"];
        }

         
        //previous company details
       if(obj["employmentHistory[1].company"]== "Invalid company!!"){
            document.getElementById("pre_company").innerHTML = obj["employmentHistory[1].company"];
        }
        if(obj["employmentHistory[1].occupation"]== "Invalid occupation!!"){
            document.getElementById("pre_occupation").innerHTML = obj["employmentHistory[1].occupation"];
        }
        if(obj["employmentHistory[1].income"]== "Invalid income!!"){
            document.getElementById("pre_income").innerHTML = obj["employmentHistory[1].income"];
        }
        if(obj["employmentHistory[1].supervisor"]== "Invalid supervisor!!"){
            document.getElementById("pre_supervisor").innerHTML = obj["employmentHistory[1].supervisor"];
        }
        if(obj["employmentHistory[1].address"]== "Invalid Address!!"){
            document.getElementById("pre_office_address").innerHTML = obj["employmentHistory[1].address"];
        }

        if(obj["employmentHistory[1].companyPhoneNo"]== "Invalid Company Contact Number!!"){
            document.getElementById("pre_company_contact").innerHTML = obj["employmentHistory[1].companyPhoneNo"];
        }
        if(obj["employmentHistory[1].companyEmail"]== "Invalid Company email!!"){
            document.getElementById("pre_company_mail").innerHTML = obj["employmentHistory[1].companyEmail"];
        }
        if(obj["employmentHistory[1].city"]== "Invalid city!!"){
            document.getElementById("pre_company_city").innerHTML = obj["employmentHistory[1].city"];
        }
        if(obj["employmentHistory[1].state"]== "Invalid state!!"){
            document.getElementById("pre_company_state").innerHTML = obj["employmentHistory[1].state"];
        }
        if(obj["employmentHistory[1].zip"]== "Invalid zip!!"){
            document.getElementById("pre_zip").innerHTML = obj["employmentHistory[1].zip"];
        }
        if(obj["employmentHistory[1].country"]== "Invalid country!!"){
            document.getElementById("pre_company_country").innerHTML = obj["employmentHistory[1].country"];
        }

        if(obj["employmentHistory[1].duration"]== "Invalid duration!!"){
            document.getElementById("pre_duration").innerHTML = obj["employmentHistory[1].duration"];
        }
     
         
         
          //current landlord
          
        if(obj["landlordHistory[0].name"]== "Invalid Name!!"){
            document.getElementById("curr_landlord_name").innerHTML = obj["landlordHistory[0].name"];
        } 
        if(obj["landlordHistory[0].rentalAddress"]== "Invalid Rental Address!!"){
            document.getElementById("curr_landlord_address").innerHTML = obj["landlordHistory[0].rentalAddress"];
        } 
        if(obj["landlordHistory[0].phone"]== "Invalid Phone Number!!"){
            document.getElementById("curr_landlord_phoneNo").innerHTML = obj["landlordHistory[0].phone"];
        } 
        if(obj["landlordHistory[0].email"]== "Invalid email!!"){
            document.getElementById("curr_landlord_mail").innerHTML = obj["landlordHistory[0].email"];
        } 


        //previous landlord-1
        
        
        if(obj["landlordHistory[1].name"]== "Invalid Name!!"){
            document.getElementById("pre_landlord-1_name").innerHTML = obj["landlordHistory[1].name"];
        } 
        if(obj["landlordHistory[1].rentalAddress"]== "Invalid Rental Address!!"){
            document.getElementById("pre_landlord-1_address").innerHTML = obj["landlordHistory[1].rentalAddress"];
        } 
        if(obj["landlordHistory[1].phone"]== "Invalid Phone Number!!"){
            document.getElementById("pre_landlord-1_phone").innerHTML = obj["landlordHistory[1].phone"];
        } 
        if(obj["landlordHistory[1].email"]== "Invalid email!!"){
            document.getElementById("pre_landlord-1_mail").innerHTML = obj["landlordHistory[1].email"];
        } 
       
         // previous landlord-2
        if(obj["landlordHistory[2].name"]== "Invalid Name!!"){
            document.getElementById("pre_landlord_name").innerHTML = obj["landlordHistory[2].name"];
        } 
        if(obj["landlordHistory[2].rentalAddress"]== "Invalid Rental Address!!"){
            document.getElementById("pre_landlord_address").innerHTML = obj["landlordHistory[2].rentalAddress"];
        } 
        if(obj["landlordHistory[2].phone"]== "Invalid Phone Number!!"){
            document.getElementById("pre_landlord_phone").innerHTML = obj["landlordHistory[2].phone"];
        } 
        if(obj["landlordHistory[2].email"]== "Invalid email!!"){
            document.getElementById("pre_landlord_mail").innerHTML = obj["landlordHistory[2].email"];
        } 
       
       
       
        //personal references
        if(obj["personalReferencesVO.fullName"]== "Invalid Name!!"){
            document.getElementById("personal_fullname").innerHTML = obj["personalReferencesVO.fullName"];
        } 
        if(obj["personalReferencesVO.relationship"]== "Invalid!!"){
           document.getElementById("personal_relationship").innerHTML = obj["personalReferencesVO.relationship"];
        } 
        if(obj["personalReferencesVO.phoneNo"]== "Invalid Phone Number!!"){
           document.getElementById("personal_phone").innerHTML = obj["personalReferencesVO.phoneNo"];
        } 
        if(obj["personalReferencesVO.email"]== "Invalid email!!"){
           document.getElementById("personal_mail").innerHTML = obj["personalReferencesVO.email"];
        }




         //previous residence-2
        
        
        if(obj["residenceHistory[2].zip"]=="Invalid Zip!!"){
            document.getElementById("pre_residence-1_zip").innerHTML = obj["residenceHistory[2].zip"];
        }
        
        if(obj["residenceHistory[2].city"]=="Invalid City!!"){
            document.getElementById("pre_residence-1_city").innerHTML = obj["residenceHistory[2].city"];
            
        }
        
        if(obj["residenceHistory[2].squareFeet"]=="Invalid Square Feet!!"){
            document.getElementById("pre_residence-1_sqFeet").innerHTML = obj["residenceHistory[2].squareFeet"];
        }
        
        if(obj["residenceHistory[2].rent"]=="Invalid Rent Amount!!"){
            document.getElementById("pre_residence-1_rent").innerHTML = obj["residenceHistory[2].rent"];
        }
        
        if(obj["residenceHistory[2].houseNo"]=="Invalid House Number!!"){
            document.getElementById("pre_residence-1_address").innerHTML = obj["residenceHistory[2].houseAddress"];
        }
            
        if(obj["residenceHistory[2].streetAddress"]=="Invalid Street Address!!"){
                document.getElementById("pre_residence-1_street").innerHTML = obj["residenceHistory[2].streetAddress"];
        }
        if(obj["residenceHistory[2].state"]=="Invalid State!!"){
            document.getElementById("pre_residence-1_state").innerHTML = obj["residenceHistory[2].state"];
        }
        if(obj["residenceHistory[2].country"]=="Invalid Country!!"){
            document.getElementById("pre_residence-1_country").innerHTML = obj["residenceHistory[2].country"];
        }
        

        //previous residence-1
          
        if(obj["residenceHistory[1].zip"]=="Invalid Zip!!"){
            document.getElementById("pre_residence_zip").innerHTML = obj["residenceHistory[1].zip"];
        }
        
        if(obj["residenceHistory[1].city"]=="Invalid City!!"){
            document.getElementById("pre_residence_city").innerHTML = obj["residenceHistory[1].city"];
        }
            
        if(obj["residenceHistory[1].squareFeet"]=="Invalid Square Feet!!"){
            document.getElementById("pre_residence_sqFeet").innerHTML = obj["residenceHistory[1].squareFeet"];
        }
        
        if(obj["residenceHistory[1].rent"]=="Invalid Rent Amount!!"){
            document.getElementById("pre_residence_rent").innerHTML = obj["residenceHistory[1].rent"];
        }
        
        if(obj["residenceHistory[1].houseNo"]=="Invalid House Number!!"){
            document.getElementById("pre_residence_houseNo").innerHTML = obj["residenceHistory[1].houseNo"];
        }
        
        if(obj["residenceHistory[1].streetAddress"]=="Invalid Street Address!!"){
            document.getElementById("pre_residence_address").innerHTML = obj["residenceHistory[1].streetAddress"]
        }

        if(obj["residenceHistory[1].state"]=="Invalid State!!"){
            document.getElementById("pre_residence_state").innerHTML = obj["residenceHistory[1].state"];
        }

        if(obj["residenceHistory[1].country"]=="Invalid Country!!"){
            document.getElementById("pre_residence_country").innerHTML = obj["residenceHistory[1].country"];
        }
        
        
       // current residence
       
    if(obj["residenceHistory[1].zip"]=="Invalid Zip!!"){
        document.getElementById("curr_residence_zip").innerHTML = obj["residenceHistory[0].zip"];
    }
   
    if(obj["residenceHistory[0].city"]=="Invalid City!!"){
        document.getElementById("curr_residence_city").innerHTML = obj["residenceHistory[0].city"];
    }
     
    if(obj["residenceHistory[0].squareFeet"]=="Invalid Square Feet!!"){
        document.getElementById("curr_residence_sqFeet").innerHTML = obj["residenceHistory[0].squareFeet"];
    }
 
    if(obj["residenceHistory[0].rent"]=="Invalid Rent Amount!!"){
        document.getElementById("curr_residence_rent").innerHTML = obj["residenceHistory[0].rent"];
     
    }
 
    if(obj["residenceHistory[0].houseNo"]=="Invalid House Number!!"){
        document.getElementById("curr_residence_houseNo").innerHTML = obj["residenceHistory[0].houseNo"];
    }
 
    if(obj["residenceHistory[0].streetAddress"]=="Invalid Street Address!!"){
        document.getElementById("curr_residence_address").innerHTML = obj["residenceHistory[0].streetAddress"]
    }

    if(obj["residenceHistory[0].state"]=="Invalid State!!"){
        document.getElementById("curr_residence_state").innerHTML = obj["residenceHistory[0].state"];
    }  
    if(obj["residenceHistory[0].country"]=="Invalid Country!!"){
        document.getElementById("curr_residence_country").innerHTML = obj["residenceHistory[0].country"];
    }
 
    if(res.rspnsMsg=="GOOD"){
        window.location.href = window.location.protocol + "//" + window.location.host + "/submitted.html"
        }

 
       
        }


    };



    xmlhttp1.send(JSON.stringify({

        "applicant": {
            "DOB": dob,
            "SSN": ssn,
            "dob": dob,
            "emailID": email,
            "fullName": fullName,
            "phone": phoneNo,
            "ssn": ssn,
            "verification": verification
        },
        "employmentHistory": [{
                "address": currentofficeaddress,
                "city": currentcompanycity,
                "company": currentcompany,
                "companyEmail": currentcompanymail,
                "companyPhoneNo": currentcompanyphone,
                "country": currentcompanycountry,
                "duration": currentduration,
                "income": currentincome,
                "occupation": currentoccupation,
                "state": currentcompanystate,
                "supervisor": currentsupervisor,
                "zip": currentzip,
            },

            {
                "address": previousofficeaddress,
                "city": previouscompanycity,
                "company": previouscompany,
                "companyEmail": previouscompanymail,
                "companyPhoneNo": previouscompanyphone,
                "country": previouscompanycountry,
                "duration": previousduration,
                "income": previousincome,
                "occupation": previousoccupation,
                "state": previouscompanystate,
                "supervisor": previoussupervisor,
                "zip": previouszip,
            }
        ],
        "landlordHistory": [{
                "email": currentlandlordmail,
                "name": currentlandlordname,
                "phone": currentlandlordphone,
                "rentalAddress": currentlandlordaddress
            },

            {
                "email": prevLandlordmail,
                "name": prevLandlordname,
                "phone": prevLandlordphone,
                "rentalAddress": prevLandlordaddress
            },

            {
                "email": previousLandlordmail,
                "name": previousLandlordname,
                "phone": previousLandlordphone,
                "rentalAddress": previousLandlordaddress
            }


        ],
        "personalReferencesVO": {
            "email": personalreferencemail,
            "fullName": personalreferencename,
            "phoneNo": personalreferencephone,
            "relationship": personalreferencerelationship
        },
        "propertyId" : propertyID,
        "propertyInfo": {
            "type": type,
            "bedrooms": bedrooms,
            "zip": zip,
            "furnishing": furnishing,
            "squareFeet": squareFeet,
            "carParking": carParking,
            "rentAmount": rentAmount,
            "houseNo": houseNo,
            "streetAddress": streetAddress,
            "city": city,
            "state": state,
            "country": country,
            "bathrooms": bathrooms,
        },

        "residenceHistory": [{
                "bedrooms": currentresidencebedrooms,
                "city": currentresidencecity,
                "country": currentresidencecountry,
                "currLeaseExpDate": currentleaseExpiry,
                "duration": currentresidenceduration,
                "houseAddress": currentresidenceaddress,
                "reasonForMoving": reasonformoving,
                "rent": currentresidencerentamount,
                "squareFeet": currentresidencesqFeet,
                "state": currentresidencestate,
                "streetAddress": currentresidencestreet,
                "type": currentresidencetype,
                "zip": currentresidencezip
            },

            {
                "bedrooms": previousresidencebedrooms,
                "city": previousresidencecity,
                "country": previousresidencecountry,
                // "currLeaseExpDate": previousleaseExpiry,
                "duration": previousresidenceduration,
                "houseAddress": previousresidenceaddress,
                // "reasonForMoving": reasonformoving,
                "rent": previousresidencerentamount,
                "squareFeet": previousresidencesqFeet,
                "state": previousresidencestate,
                "streetAddress": previousresidencestreet,
                "type": previousresidencetype,
                "zip": previousresidencezip,
                "startDate": previousresidenceStartDate,
                "endDate": previousresidenceEndDate
            },

            {
                "bedrooms": previousresidence2bedrooms,
                "city": previousresidence2city,
                "country": previousresidence2country,
                // "currLeaseExpDate": previousleaseExpiry,
                "duration": previousresidenceduration,
                "houseAddress": previousresidence2address,
                // "reasonForMoving": reasonformoving,
                "rent": previousresidence2rentamount,
                "squareFeet": previousresidences2sqFeet,
                "state": previousresidence2state,
                "streetAddress": previousresidence2street,
                "type": previousresidence2type,
                "zip": previousresidence2zip,
                "startDate": previousresidence2StartDate,
                "endDate" : previousresidence2EndDate
            }
        ],


        "roles": []
    }));
    console.log("waiting for server response....");


}

// this is for getting auto filled values in property section of application form
function getApplicationData(baseurl, appID) {
    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("GET", baseurl + "/rentalunsecured/getapplication?appID=" + appID, true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "") {
            var res = JSON.parse(this.responseText);
            var response = JSON.parse(res['response']);
            if (response == null) {
                window.location.href = window.location.protocol + "//" + window.location.host + "/error.html";
            } else if (response != null) {
                console.log(response.propertyId);
                document.getElementById('type').value = response.propertyInfo['type'];
                document.getElementById('squareFeet').value = response.propertyInfo['squareFeet'];
                document.getElementById('bedrooms').value = response.propertyInfo['bedrooms'];
                document.getElementById('rentAmount').value = response.propertyInfo['rentAmount'];
                document.getElementById("streetAddress").value = response.propertyInfo["streetAddress"];
                document.getElementById("houseNo").value = response.propertyInfo["houseNo"];
                document.getElementById("city").value = response.propertyInfo["city"];
                document.getElementById("state").value = response.propertyInfo["state"];
                document.getElementById("zip").value = response.propertyInfo["zip"];
                document.getElementById("country").value = response.propertyInfo["country"];
                document.getElementById("bathrooms").value = response.propertyInfo["bathrooms"];
                document.getElementById("carParking").value = response.propertyInfo["carParking"];
                document.getElementById("furnishing").value = response.propertyInfo["furnishing"];
                document.getElementById("propertyId").value = response.propertyId;
                document.getElementById("app_id").innerHTML = appID;
                document.getElementById("mail").value = response.applicant['emailID'];
                
                // document.getElementById("inlineRadio2").value = response.propertyInfo["pets"];
            }


        }
    };

    xmlhttp1.send();

}
// for getting user information on each page
function getUserInfo() {
    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }
    xmlhttp1.open("GET", baseurl + "/rentaladmin/getuserinfo", true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "") {
            var res = JSON.parse(this.responseText);
            var user = document.getElementById("profile_name");
            user.innerHTML = res.response;
        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/login.html"
        }
    };

    xmlhttp1.send();
}

// login function 
function initLogin() {

    var email = $("#username").val();
    var pass = $("#password").val();

    var xmlhttpAuth;
    try {
        xmlhttpAuth = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttpAuth = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttpAuth = new ActiveXObject(
                    "Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }
    xmlhttpAuth.open("POST", baseurl + "/authentication/getGenericJWTToken", true);
    xmlhttpAuth.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttpAuth.setRequestHeader('clientID', clientId);
    xmlhttpAuth.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "" && this.readyState == 4) {
            var res = JSON.parse(this.responseText);
            if (res.token != "Invalid User or Password / Or Account Locked") {

                localStorage.setItem('token', res.token);
                window.location.href = window.location.protocol + "//" + window.location.host + "/admin/index.html";

            } else {

                $("#error_message").show();
                $("#error_message").html("<strong>Invalid User or Password / Or Account Locked</strong>");
            }
        }
    }
    xmlhttpAuth.send(JSON.stringify({
        "username": email,
        "password": pass
    }));
}

// this is for list of properties page -- for delete button
function deleteProperty(propertyID) {
    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject(
                    "Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("POST", baseurl + "/rentaladmin/deleteproperty?propertyID=" + propertyID, true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    if (confirm('Are you sure you want to delete this property')) {
        xmlhttp1.onreadystatechange = function () {
            if (this.status == 200 && this.responseText != null && this.responseText != "") {
                var res = JSON.parse(this.responseText);
                var resp = res.response;
                console.log(resp);
                window.location.href = window.location.protocol + "//" + window.location.host + "/admin/list-of-properties.html";
            } else if ((this.status == 403 || this.status == 401 || this.status == 404) && this.readyState == 4) {
                window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html";
            }
        };

        xmlhttp1.send(JSON.stringify({
            "propertyInfo": {
                // "bedrooms": bedrooms,
                "city": city,
                "country": country,
                "houseNo": houseNo,
                // "pets": pets,
                // "rentAmount": rentamount,
                // "squareFeet": squareFeet,
                "state": state,
                // "streetAddress": streetaddress,
                // "type": type,
                "zip": zip
            },
        }));
    }

}

// this is for list of properties page-- for getting auto filled values on form when edit button is clicked
function getProperty(propertyID) {
    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("GET", baseurl + "/rentaladmin/getproperty?propertyID=" + propertyID, true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "") {
            var res = JSON.parse(this.responseText);
            if (res.rspnsCode === 1000) {
                var response = JSON.parse(res['response']);
                document.getElementById('type').value = response.type;
                document.getElementById('squareFeet').value = response.squareFeet;
                document.getElementById('bedrooms').value = response.bedrooms;
                document.getElementById('rentAmount').value = response.rentAmount;
                document.getElementById("streetAddress").value = response.streetAddress;
                document.getElementById("houseNo").value = response.houseNo;
                document.getElementById("city").value = response.city;
                document.getElementById("state").value = response.state;
                document.getElementById("zip").value = response.zip;
                document.getElementById("country").value = response.country;
                document.getElementById("bathrooms").value = response.bathrooms;
                document.getElementById("carParking").value = response.carParking;
                document.getElementById("furnishing").value = response.furnishing;
                document.getElementById("carParkingType").value = response.carParkingType;
                document.getElementById("rentalRate").value = response.rentalRate;


            }

        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }
    };

    xmlhttp1.send();

}
// this is for list of properties page details button
function viewProperty(propertyID) {
    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("GET", baseurl + "/rentaladmin/getproperty?propertyID=" + propertyID, true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "") {
            var res = JSON.parse(this.responseText);
            if (res.rspnsCode === 1000) {
                var response = JSON.parse(res['response']);
                document.getElementById('type').innerHTML = response.type;
                document.getElementById('squareFeet').innerHTML = response.squareFeet;
                document.getElementById('bedrooms').innerHTML = response.bedrooms;
                document.getElementById('rentAmount').innerHTML = response.rentAmount;
                document.getElementById("streetAddress").innerHTML = response.streetAddress;
                document.getElementById("houseNo").innerHTML = response.houseNo;
                document.getElementById("city").innerHTML = response.city;
                document.getElementById("state").innerHTML = response.state;
                document.getElementById("zip").innerHTML = response.zip;
                document.getElementById("country").innerHTML = response.country;
                document.getElementById("bathrooms").innerHTML = response.bathrooms;
                document.getElementById("carParking").innerHTML = response.carParking;
                document.getElementById("furnishing").innerHTML = response.furnishing;
                document.getElementById("carParkingType").innerHTML = response.carParkingType;
                document.getElementById("rentalRate").innerHTML = response.rentalRate;


            }

        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }
    };

    xmlhttp1.send();

}
// for get property details page-- unsecured page(getProperty.html)
function getPropertyUnsecured(propertyID) {
    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("GET", baseurl + "/rentalunsecured/getproperty?propertyID=" + propertyID, true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "") {
            var res = JSON.parse(this.responseText);
        console.log(res)
            if (res.rspnsCode === 1000) {
                var response = JSON.parse(res['response']);
                console.log(response)
                document.getElementById('type').innerHTML = response.type;
                document.getElementById('squareFeet').innerHTML = response.squareFeet;
                document.getElementById('bedrooms').innerHTML = response.bedrooms;
                document.getElementById('rentAmount').innerHTML = response.rentAmount;
                // document.getElementById("streetAddress").innerHTML = response.streetAddress;
                // document.getElementById("houseNo").innerHTML = response.houseNo;
                // document.getElementById("city").innerHTML = response.city;
                // document.getElementById("state").innerHTML = response.state;
                // document.getElementById("zip").innerHTML = response.zip;
                // document.getElementById("country").innerHTML = response.country;
                document.getElementById("bathrooms").innerHTML = response.bathrooms;
                document.getElementById("carParking").innerHTML = response.carParking;
                document.getElementById("furnishing").innerHTML = response.furnishing;
                document.getElementById("carParkingType").innerHTML = response.carParkingType;
                document.getElementById("rentalRate").innerHTML = response.rentalRate;


            }

        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-erro++r-404.html"
        }
    };

    xmlhttp1.send();

}

// this is for add property page
function addproperties() {
    var type = $("#type").val();
    var bedrooms = $("#bedrooms").val();
    var zip = $("#zip").val();
    var furnishing = $("#furnishing").val();
    var squareFeet = $("#squareFeet").val();
    var rentAmount = $("#rentAmount").val();
    var houseNo = $("#houseNo").val();
    var streetAddress = $("#streetAddress").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var country = $("#country").val();
    var carParking = $("#carParking").val();
    var bathrooms = $("#bathrooms").val();
    var carParkingType = $("#carParkingType").val();
    var rentalRate = $("#rentalRate").val();

    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }
    xmlhttp1.open("POST", baseurl + "/rentaladmin/addproperty", true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "" && this.readyState == 4) {
            var res = JSON.parse(this.responseText);
            var loginRes = res.response;
            var s = res.rspnsMsg;
            // console.log(s);
            var s = s.replace(/[{}]/g, "");
            let pairs = s.split(', ')                
            let obj = pairs.reduce((obj,data)=> {
                let [k, v] = data.split('=')        
                obj[k] = v                          
                return obj
            }, {})
            // console.log(obj)

            // this is to clear error after user puts fills valid values
            document.getElementById('city_error').innerHTML='';
            document.getElementById('zip_error').innerHTML='';
            document.getElementById('squareFeet_error').innerHTML='';
            document.getElementById('rentAmount_error').innerHTML='';
            document.getElementById('houseNo_error').innerHTML='';
            document.getElementById('streetAddress_error').innerHTML='';
            document.getElementById('state_error').innerHTML='';
            document.getElementById('country_error').innerHTML='';
            document.getElementById('type_error').innerHTML='';
            document.getElementById('rentalRate_error').innerHTML='';
            document.getElementById('bathrooms_error').innerHTML='';
            document.getElementById('bedrooms_error').innerHTML='';
            document.getElementById('furnishing_error').innerHTML='';
            document.getElementById('carParking_error').innerHTML='';
            document.getElementById('carParkingType_error').innerHTML='';

            
            // this is to populate error below each field in add properties form
            
            if(zip=="" || zip==null){
            var message ="This field is required";
            var error = document.getElementById("zip_error");
            error.innerHTML = message;
            return false;
        }
        else
        if(obj.zip=="Invalid Zip!!"){
            var error = document.getElementById("zip_error");
            error.innerHTML = obj.zip;
        }
        
        
        
        

            if(city=="" || city==null){
               var message ="This field is required";
               var error = document.getElementById("city_error");
               error.innerHTML = message;
                return false;
            }
            else
            if(obj.city=="Invalid City!!"){
                var error = document.getElementById("city_error");
                error.innerHTML = obj.city;
            }
            
            
            if(squareFeet=="" || squareFeet==null){
                var error = document.getElementById("squareFeet_error");
                var message ="This field is required";
                error.innerHTML = message;
                return false;
            }
            else
            if(obj.squareFeet=="Invalid Square Feet!!"){
                var error = document.getElementById("squareFeet_error");
                error.innerHTML = obj.squareFeet;
            }
            
            if(rentAmount=="" || rentAmount==null){
                var error = document.getElementById("rentAmount_error");
                var message ="This field is required";
                error.innerHTML = message;
                return false;
            }
            else
            if(obj.rentAmount=="Invalid Amount!!"){
                var error = document.getElementById("rentAmount_error");
                error.innerHTML = obj.rentAmount;
            }

            if(houseNo=="" || houseNo==null){
                var error = document.getElementById("houseNo_error");
                var message ="This field is required";
                error.innerHTML = message;
                return false;
                
            }
            else
            if(obj.houseNo=="Invalid House Number!!"){
                var error = document.getElementById("houseNo_error");
                error.innerHTML = obj.houseNo;
            }
            
            if(streetAddress=="" || streetAddress==null){
                var error = document.getElementById("streetAddress_error");
                var message ="This field is required";
                error.innerHTML = message;
                return false; }
                else
                if(obj.streetAddress=="Invalid Street Address!!"){
                    var error = document.getElementById("streetAddress_error");
                    error.innerHTML = obj.streetAddress;
                }

                if(state=="" || state==null){
                    var error = document.getElementById("state_error");
                    var message ="This field is required";
                    error.innerHTML = message;
                    return false; }
                    
                    else
                    if(obj.state=="Invalid State!!"){
                var error = document.getElementById("state_error");
                error.innerHTML = obj.state;
            }
            if(country=="" || country==null){
                var error = document.getElementById("country_error");
                var message ="This field is required";
                error.innerHTML = message;
                return false; }
                
                else
                if(obj.country=="Invalid Country!!"){
                    var error = document.getElementById("country_error");
                    error.innerHTML = obj.country;
                }
                if(type== "" || type==null){
                    var error = document.getElementById("type_error");
                    var message ="This field is required";
                    error.innerHTML = message;
                    return false; }
                    
                    else
      if(obj.type== "Please select an item"){
                var error = document.getElementById("type_error");
                error.innerHTML = obj.type;
            }

            if(bedrooms=="" || bedrooms==null){
                var error = document.getElementById("bedrooms_error");
                var message ="This field is required";
                error.innerHTML = message;
                return false; }
                
                else
                if(obj.bedrooms== "Please select an item"){
                    var error = document.getElementById("bedrooms_error");
                error.innerHTML = obj.bedrooms;
            }

            if(bathrooms== "" || bathrooms==null){
                var error = document.getElementById("bathrooms_error");
                var message ="This field is required";
                error.innerHTML = message;
                return false; }
                
                
            else
            if(obj.bathrooms== "Please select an item"){
                var error = document.getElementById("bathrooms_error");
                error.innerHTML = obj.bathrooms;
            }
            
            if(furnishing== "" || furnishing==null){
                var error = document.getElementById("furnishing_error");
            var message ="This field is required";
            error.innerHTML = message;
            return false; }
            
            else
            
            if(obj.furnishing== "Please select an item"){
                var error = document.getElementById("furnishing_error");
                error.innerHTML = obj.furnishing;
            }
            
            if(carParking== "" || carParking==null){
                var error = document.getElementById("carParking_error");
                var message ="This field is required";
                error.innerHTML = message;
                return false; }
                
                else
            if(obj.carParking== "Please select an item"){
                var error = document.getElementById("carParking_error");
                error.innerHTML = obj.carParking;
            }

            if(carParkingType== "" || carParkingType==null){
                var error = document.getElementById("carParkingType_error");
            var message ="This field is required";
                error.innerHTML = message;
                return false; }
            else
            if(obj.carParkingType== "Please select an item"){
                var error = document.getElementById("carParkingType_error");
                error.innerHTML = obj.carParkingType;
            }

            if(rentalRate== "" || rentalRate==null){
                var error = document.getElementById("rentalRate_error");
                error.innerHTML = obj.rentalRate;
            }
            else
            if(obj.rentalRate== "Please select an item"){
                var error = document.getElementById("rentalRate_error");
                error.innerHTML = obj.rentalRate;
            }

            if(res.rspnsMsg=="GOOD"){
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/list-of-properties.html"
            }

            } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }
    };

    xmlhttp1.send(JSON.stringify({
        "type": type,
        "bedrooms": bedrooms,
        "zip": zip,
        "furnishing": furnishing,
        "squareFeet": squareFeet,
        "carParking": carParking,
        "rentAmount": rentAmount,
        "houseNo": houseNo,
        "streetAddress": streetAddress,
        "city": city,
        "state": state,
        "country": country,
        "bathrooms": bathrooms,
        "rentalRate" : rentalRate,
        "carParkingType" : carParkingType,
        "roles": []

    }));
    console.log("waiting for server response....");
}

// this is for populating list of properties page
function getProperties() {
    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("GET", baseurl + "/rentaladmin/getproperties", true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "" && this.readyState == 4) {
            var res = JSON.parse(this.responseText);
            if (res.rspnsCode === 1000) {
                var response = JSON.parse(res['response']);
                var dynamicCard = document.querySelector('.container_card');
                for (var i = 0; i < response.length; i++) {
                    var propertyID = response[i].propertyId;
                    var fetch = document.querySelector('.container_card').innerHTML;
                    dynamicCard.innerHTML = `<article class="postcard light blue " >
                    <a class="postcard__img_link" href="#">
                        <img class="postcard__img" src= "${"assets/img/img for card.jpg"}"  alt="Image Title" />
                    </a>
                    <div class="postcard__text t-dark">
                       <!-- type and rate -->
                         <div class="typeandprice">
          
                        <h1 class="postcard__title blue"><a href="#">${response[i].propertyInfo["type"]}</a>
                        </h1>
                         <h4 class="house-price" style="color:#0076bd ;"><span>$</span>${response[i].propertyInfo["rentAmount"]}<span>/</span><span id="rentalRate">${response[i].propertyInfo["rentalRate"]} </span></h4>
                        </div>
                        <div class="house house-info" style=" padding-bottom: 0px; padding-top: 0px; flex-basis: 18%;">
                          <div class="house address" style="font-size: 10px;font-style: initial;padding-bottom: 0px;padding-top: 0px;">
                          <i class="fas fa-map-marker-alt" style="font-size: 1.2rem; margin-top: .1rem;  margin-right: 0.5rem;"></i>
                            <span class="houseNo" id="houseNo">${response[i].propertyInfo["houseNo"]}</span>
                            <span>,&nbsp;</span>
                            <span class="street" id="street">${response[i].propertyInfo["streetAddress"]}</span>
                            <span>,&nbsp;</span>
                            <span class="city" id="city"> ${response[i].propertyInfo["city"]}</span>
                            <span>,&nbsp;</span>
                            <span class="state" id="state" >${response[i].propertyInfo["state"]}</span>
                            <span>- </span>
                            <span class="zip" id="zip" >${response[i].propertyInfo["zip"]}</span> 
                            <span>,&nbsp;</span>
                            <span class="country" id="country">${response[i].propertyInfo["country"]}</span>
                            
                        </div>
                    </div>
                    <div class="postcard__bar" style=" margin-bottom: 10px;"></div>
                    <!-- property details -->
                    <p class="category">
                      <!-- area -->
                      <i class="fas fa-expand fa-xs ml-1"></i>
                      <span class="ml-1" >${response[i].propertyInfo["squareFeet"]} Sq Ft</span>
                      <!-- bedroom -->
                      <i class="fas fa-bed fa-xs ml-1"></i>
                      <span class="ml-1">${response[i].propertyInfo["bedrooms"]} Bedrooms</span>
                      <!-- bathroom -->
                      <i class="fas fa-shower fa-xs ml-1"></i>
                      <span class="ml-1">${response[i].propertyInfo["bathrooms"]} Bathrooms</span>
                      <!-- furnishing -->
                      <i class="fas fa-couch fa-xs ml-1"></i>
                      <span class="ml-1">${response[i].propertyInfo["furnishing"]} </span>
                      <!-- No. and type of car parking -->
                      <i class="fas fa-car fa-xs ml-1"></i>
                      <span class="ml-1">${response[i].propertyInfo["carParking"]}</span>
                      <span class="ml-1"> ${response[i].propertyInfo["carParkingType"]} </span>
                    </p>
              
                            <ul class="postcard__tagbox">
                              
                              <button onclick="location.href='${"/admin/updateproperties.html?propertyID=" + "" + propertyID}'" type="button" class="btn btn-primary" title="Edit" style="background-color: #0b5ed7; margin-right: 10px;"><i class="fas fa-edit"></i></button>
                                  <button onclick = "deleteProperty('${propertyID}')" type="button" class="btn btn-danger" title="Delete" style="background-color:#dc3545"><i class="far fa-trash-alt"></i></button>
                                  <button class="button button3" onclick="location.href='${"/admin/viewproperty.html?propertyID=" + "" + propertyID}'" style="">Details</button>
                          </ul>
                        </div>
                      </div>
                </article>` + fetch;


                }

            } else {
                window.location.href = window.location.protocol + "//" + window.location.host + "/error.html";
            }


        }
    };

    xmlhttp1.send();

}

// this is for list of properties page-- edit button
function updateProperty() {
    var type = $("#type").val();
    var bedrooms = $("#bedrooms").val();
    var zip = $("#zip").val();
    var furnishing = $("#furnishing").val();
    var squareFeet = $("#squareFeet").val();
    var rentAmount = $("#rentAmount").val();
    var houseNo = $("#houseNo").val();
    var streetAddress = $("#streetAddress").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var country = $("#country").val();
    var carParking = $("#carParking").val();
    var bathrooms = $("#bathrooms").val();
    var carParkingType = $("#carParkingType").val();
    var rentalRate = $("#rentalRate").val();

    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }
    xmlhttp1.open("POST", baseurl + "/rentaladmin/updateproperty?propertyID=" + propertyID, true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "" && this.readyState == 4) {
            var res = JSON.parse(this.responseText);
            var loginRes = res.response;
            console.log(loginRes);
            var s = res.rspnsMsg;
            // console.log(s);
            var s = s.replace(/[{}]/g, "");
            let pairs = s.split(', ')                
            let obj = pairs.reduce((obj,data)=> {
                let [k, v] = data.split('=')        
                obj[k] = v                          
                return obj
            }, {})
            // console.log(obj)

            // this is to clear error after user puts fills valid values
            document.getElementById('city_error').innerHTML='';
            document.getElementById('zip_error').innerHTML='';
            document.getElementById('squareFeet_error').innerHTML='';
            document.getElementById('rentAmount_error').innerHTML='';
            document.getElementById('houseNo_error').innerHTML='';
            document.getElementById('streetAddress_error').innerHTML='';
            document.getElementById('state_error').innerHTML='';
            document.getElementById('country_error').innerHTML='';
            document.getElementById('type_error').innerHTML='';
            document.getElementById('rentalRate_error').innerHTML='';
            document.getElementById('bathrooms_error').innerHTML='';
            document.getElementById('bedrooms_error').innerHTML='';
            document.getElementById('furnishing_error').innerHTML='';
            document.getElementById('carParking_error').innerHTML='';
            document.getElementById('carParkingType_error').innerHTML='';

            // this is to populate error below each field in add properties form
            if(obj.zip=="Invalid Zip!!"){
            var error = document.getElementById("zip_error");
            error.innerHTML = obj.zip;
            }

            if(obj.city=="Invalid City!!"){
                var error = document.getElementById("city_error");
                error.innerHTML = obj.city;
            }

            if(obj.squareFeet=="Invalid Square Feet!!"){
                var error = document.getElementById("squareFeet_error");
                error.innerHTML = obj.squareFeet;
            }

            if(obj.rentAmount=="Invalid Amount!!"){
                var error = document.getElementById("rentAmount_error");
                error.innerHTML = obj.rentAmount;
            }

            if(obj.houseNo=="Invalid House Number!!"){
                var error = document.getElementById("houseNo_error");
                error.innerHTML = obj.houseNo;
            }

            if(obj.streetAddress=="Invalid Street Address!!"){
                var error = document.getElementById("streetAddress_error");
                error.innerHTML = obj.streetAddress;
            }
            if(obj.state=="Invalid State!!"){
                var error = document.getElementById("state_error");
                error.innerHTML = obj.state;
            }
            if(obj.country=="Invalid Country!!"){
                var error = document.getElementById("country_error");
                error.innerHTML = obj.country;
            }

            if(obj.type== "Please select an item"){
                var error = document.getElementById("type_error");
                error.innerHTML = obj.type;
            }

            if(obj.bedrooms== "Please select an item"){
                var error = document.getElementById("bedrooms_error");
                error.innerHTML = obj.bedrooms;
            }

            if(obj.bathrooms== "Please select an item"){
                var error = document.getElementById("bathrooms_error");
                error.innerHTML = obj.bathrooms;
            }

            if(obj.furnishing== "Please select an item"){
                var error = document.getElementById("furnishing_error");
                error.innerHTML = obj.furnishing;
            }

            if(obj.carParking== "Please select an item"){
                var error = document.getElementById("carParking_error");
                error.innerHTML = obj.carParking;
            }

            if(obj.carParkingType== "Please select an item"){
                var error = document.getElementById("carParkingType_error");
                error.innerHTML = obj.carParkingType;
            }

            if(obj.rentalRate== "Please select an item"){
                var error = document.getElementById("rentalRate_error");
                error.innerHTML = obj.rentalRate;
            }

            if(res.rspnsMsg=="GOOD"){
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/list-of-properties.html"
            }

            } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }

    };

    xmlhttp1.send(JSON.stringify({
        "type": type,
        "bedrooms": bedrooms,
        "zip": zip,
        "furnishing": furnishing,
        "squareFeet": squareFeet,
        "carParking": carParking,
        "rentAmount": rentAmount,
        "houseNo": houseNo,
        "streetAddress": streetAddress,
        "city": city,
        "state": state,
        "country": country,
        "bathrooms": bathrooms,
        "rentalRate" : rentalRate,
        "carParkingType" : carParkingType,
        "roles": []

    }));
    console.log("waiting for server response....");
}

//this is for invite applicant page-- property dropdown
function loadAllProperties() {

    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("GET", baseurl + "/rentaladmin/getproperties", true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "") {
            var res = JSON.parse(this.responseText);
            if (res.rspnsCode === 1000) {
                var response = JSON.parse(res['response']);
                var dropdown = '<option value = "-1"> Please select property </option>';
                for (var i = 0; i < response.length; i++) {
                    dropdown += '<option value ="' + response[i].propertyId + '">' + response[i].propertyInfo["houseNo"] + ", " + response[i].propertyInfo["streetAddress"] + ", " +
                        response[i].propertyInfo["city"] + ", " + response[i].propertyInfo["zip"] + ", " + response[i].propertyInfo["state"] + ", " + response[i].propertyInfo["country"] + '</option>';

                }
                $("#propertyDropdown").html(dropdown);


            }

        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }
    };

    xmlhttp1.send();


}

// this sends mail for inviting application
function initInviteApplication() {

    var email = $("#customer_email").val();
    var webBaseURL = window.location.protocol + "//" + window.location.host;
    var propertyID = $('#propertyDropdown').val();

    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("POST", baseurl + "/rentaladmin/inviteapplication?email=" + email +  "&propertyID=" + propertyID + "&webBaseURL=" + webBaseURL, true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText!= null && this.responseText != "" && this.readyState == 4) {
            var res = JSON.parse(this.responseText);
            var loginRes = res.response;
            var s = res.rspnsMsg;
            // console.log(s);
            var s = s.replace(/[{}]/g, "");
            const obj = Object.fromEntries([s.split("=")]) 
            // console.log(obj)
            // console.log(obj.error);
            document.getElementById("error_nullMail").innerHTML= "";
            document.getElementById("invite_email").innerHTML= "";
            document.getElementById("error_propertyId").innerHTML= "";

            if(propertyID==-1){
                $("#error_propertyId").html("Please Select Required Property");
            }
           
            if(email==""){
                $("#error_nullMail").html("Please fill Mail Id");
                return false;
            }
            if(obj.error=="Invalid Mail Id!!"){
                var error = document.getElementById("invite_email");
                error.innerHTML = obj.error;
            }
           
            if(res.response=="SUCCESS"){
                $('#basicModal').modal("show"); 
                $("#modal_message").html("<p>Email sent to your customer</p>");
                $("#modal_title").html("<b>SUCCESS!!</b>");
                // window.location.href = window.location.protocol + "//" + window.location.host + "/admin/invite-applicant.html"
            }
    

        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }else if(this.status==500){
            $('#basicModal').modal("show");
            $("#modal_message").html("<p>Error sending mail....Please try again later</p>");
            $("#modal_title").html("<b>OOPS!!</b>");
        }
    };

    xmlhttp1.send(JSON.stringify({
        "customer_email": email,
        "propertyID": propertyID,
        "webBaseURL": webBaseURL,
        "roles": []

    }));
    console.log("waiting for server response....");
}

// this is for populating table of unsubmitted application(invite-applicant.html)

function getUnsubmitApplication() {
    var webBaseURL = window.location.protocol + "//" + window.location.host;
	var xmlhttp1;
	try {
		xmlhttp1 = new XMLHttpRequest();
	} catch (e) {
		try {
			xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
			} catch (e) {
				alert("BROWSER BROKE");
				return false;
			}
		}
	}
	xmlhttp1.open("GET", baseurl +"/rentaladmin/unsubmittedapplication", true);
	xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
	xmlhttp1.onreadystatechange = function () {
		if (this.status == 200 && this.responseText != null && this.responseText != "") {
			var res = JSON.parse(this.responseText);
            if (res.rspnsCode === 1000) {
                var response = JSON.parse(res['response']);
			    tableData = '';
                if(response.length > 0){
                for (i = 0; i < response.length; i++) {
                    var propertyAddress = response[i].rentProperty.propertyInfo["houseNo"] + ", " + response[i].rentProperty.propertyInfo["streetAddress"] + ", " +
                    response[i].rentProperty.propertyInfo["city"] + ", " + response[i].rentProperty.propertyInfo["zip"] + ", " + response[i].rentProperty.propertyInfo["state"] + ", " + response[i].rentProperty.propertyInfo["country"];
                    var copyLink = webBaseURL + "" + "/applicationform.html?appID="+ "" + response[i].applicationID;
                        tableData += '<tr id = >';
                        tableData += '<td id="serialNumber" class="invert">' + (i+1)  + '</td>';
                        tableData += '<td id="table_email" class="invert" style="width:50px">' + response[i].email + '</td>';
                        tableData += '<td class="invert">' +propertyAddress+ '</td>';
                        tableData += '<td class="invert">' + "Unsubmitted" + '</td>';
                        tableData += '<td class="invert">' +' <button type = "button" title = "Copy Link" style="margin-right:4px" onclick="copyText(\'' + copyLink + '\')" class="btn copy-btn"><i class="fa fa-copy" style="font-size:20px;color:blue;"></i></button>' +
                        '<button type="button"  id="resend" onclick="resendApplication(\'' + response[i].applicationID + '\',\'' + response[i].email + '\',\''  + webBaseURL + '\')" class="btn " title="Resend"><i class="fas fa-redo" style="font-size:20px;color:yellow;"></i></button>'
                        + ' <button type="button" class="btn" title="Delete" id="delete" onclick="deleteApplication(' + response[i].applicationID+ ')" ><i class="far fa-trash-alt" style="font-size:20px;color:red;"></i></button>' + '</td>';
                        tableData += '<td class="invert" >' + response[i].updateTimeStamp + '</td>';
                        }
                        
                    }
            }
                document.getElementById('unsubmitapp').innerHTML = tableData;
        }
    };
    
    xmlhttp1.send();
}

// this is for copy link to clipboard for tables
function copyText(copyLink){

  
    var body = $(window.document.body);
    var textarea = $('<textarea/>');
    textarea.css({
        position: 'fixed',
        opacity: '0'
    });

    textarea.val(copyLink);
    body.append(textarea);
    textarea[0].select();

    try {
        var successful = document.execCommand('copy');
        if (!successful)
            throw successful;
        else
            alert(message);
    } catch (err) {
        window.prompt("Copy to clipboard: Ctrl+C, Enter", copyLink);
    }

    textarea.remove();
}

// this is for resend button on unsubmitted application table(invite-applicant.html)
function resendApplication(appID, emailID, webBaseURL){

   
    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("POST", baseurl + "/rentaladmin/resendapplication?email=" + emailID +  "&appID=" + appID + "&webBaseURL=" + webBaseURL, true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "" && this.readyState == 4) {
            var res = JSON.parse(this.responseText);
            var loginRes = res.response;
            $('#basicModal').modal("show"); 
            $("#modal_message").html("<p>Email sent to your customer</p>");
            $("#modal_title").html("<b>SUCCESS!!</b>");
            // window.location.href = window.location.protocol + "//" + window.location.host + "/admin/invite-applicant.html";

        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }else if(this.status==500){
            $('#basicModal').modal("show");
            $("#modal_message").html("<p>Error sending mail....Please try again later</p>");
            $("#modal_title").html("<b>OOPS!!</b>");
        }
    };

    xmlhttp1.send(JSON.stringify({
        "table_email": emailID,
        "table_appID": appID,
        "webBaseURL": webBaseURL,
        "roles": []

    }));
    console.log("waiting for server response....");
    
}

// this is for delete button on unsubmitted application table(invite-applicant.html)

function deleteApplication(appID){

    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("POST", baseurl + "/rentaladmin/deleteapplication?appID=" + appID , true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    if (confirm('Are you sure you want to delete this application')) {
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "" && this.readyState == 4) {
            var res = JSON.parse(this.responseText);
            var loginRes = res.response;
            location.reload();

        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }
    };

    xmlhttp1.send();
       
}

    console.log("waiting for server response....");
}


// this is for inviting new lease-- this will send mail with lease form 
function inviteNewLease(appID, propertyID, email){

    var webBaseURL = window.location.protocol + "//" + window.location.host;
    // rental address
    var houseNo = $("#houseNo").val();
    var streetAddress = $("#streetAddress").val();
    var zip = $("#zip").val();
    var city = $("#city").val();
    var state = $("#state").val();

    //applicant details
    var fullName = $('#fullName').val();
    var mail = $('#mail').val();
    var phoneNo = $('#phone_no').val();

    var principalOwner =  $("#principalOwner").val();
    var tenant =  $("#tenant").val();
 
    //terms
    var leasestartDate = $("#leaseStartDate").val();
    var leaseEndDate = $("#leaseEndDate").val();

    // rent 
    var rentAmount= $("#rentAmount").val();
	var rentPayDate = $("#rentPayDate").val();
	var percentElectricityBill = $("#percentElectricityBill").val();
	var electricityBillAmount = $("#electricityBillAmount").val();
	var percentWaterBill = $("#percentWaterBill").val();
	var waterBillAmount = $("#waterBillAmount").val();
    var percentPhoneBill = $("#percentPhoneBill").val();
	var phoneBillAmount = $("#phoneBillAmount").val();
	var percentOtherBill = $("#percentOtherBill").val();
	var otherBillAmount = $("#otherBillAmount").val();

    //house hold rules
    var cleaning = $("#cleaning").val();
	var kitchenUse = $("#kitchenUse").val();
	var overnightGuests = $("#overnightGuests").val();
	var useOfAppliances = $("#useOfAppliances").val();
	var smoking = $("#smoking").val();
	var useOfCommonAreas = $("#useOfCommonAreas").val();
	var alcoholUse = $("#alcoholUse").val();
	var telephoneUse = $("#telephoneUse").val();
	var studyingHours = $("#studyingHours").val();
	var personalItemsShared = $("#personalItemsShared").val();
	var music = $("#music").val();
	var bedroomAssignment = $("#bedroomAssignment").val();
	var pets = $("#pets").val();
	var other = $("#other").val();

    //deposits
    var lastPaidDate = $("#lastPaidDate").val();
	var lastPaidAmount = $("#lastPaidAmount").val();
	var securityDeposit = $("#securityDeposit").val();
	var securityAmount = $("#securityAmount").val();
	var refundDeposit = $("#refundDeposit").val();
	var refundPaidDate = $("#refundPaidDate").val();
	var refundDuration = $("#refundDuration").val();

    //lead based paint discloser
	var agreementDay = $("#agreementDay").val();
	var agreementMonth = $("#agreementMonth").val();
	var agreementYear = $("#agreementYear").val();


    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    let objec=" ";
    xmlhttp1.open("POST", baseurl + "/rentaladmin/inviteforlease?propertyID=" + propertyID + "&email=" + email + "&webBaseURL=" + webBaseURL + 
    "&appID=" + appID ,true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
   
    xmlhttp1.onreadystatechange = function () {


        if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            // window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }else if(this.status ==500){
            $('#basicModal').modal("show");
            $("#modal_message").html("<p>Error sending mail....Please try again later</p>");
            $("#modal_title").html("<b>OOPS!!</b>");
        }
        else
        if (this.status == 200 && this.responseText != null && this.responseText != "" && this.readyState == 4) {
            var res1 = JSON.parse(this.responseText);
           var  loginRes1 = res1.response;
            alert("response_error");
            console.log(loginRes1);
            console.log(res1.rspnsMsg);
            var s1 = res1.rspnsMsg;
            alert("rspnsmsg_error");
            console.log(s1);
            console.log("helllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllo");
            alert("hello_error");
            var s1 = s1.replace(/[{}]/g, "");
            let pairs = s1.split(', ')  
            console.log("00000000000_error");              
            objec = pairs.reduce((objec,data)=> {
                let [k, v] = data.split('=')        
                objec[k] = v                          
                return objec
            }, {})
            
            alert("finalcheck_error");
            // console.log(obj["applicant.fullName"]);
            console.log("hello0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000");
            alert("object_error");
            console.log(objec);
            console.log("object2222222_error");


            // if(email==null){
            //     // alert("Error in sending mail....Please try again");
            //     return false;
            // }
            // if(propertyID="" || propertyID ==null){
            //     // alert("Error in sending mail....Please try again");
            //     return false;
            // }
            // if(appID==null){
            //     // alert("Error in sending mail....Please try again");
            //     return false;
            // }
            $('#basicModal').modal("show"); 
            $("#modal_message").html("<p>Email sent to your customer</p>");
            $("#modal_title").html("<b>SUCCESS!!</b>");
            // window.location.href = window.location.protocol + "//" + window.location.host + "/admin/invite-lease.html";

        // } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
        //     // window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        // }else if(this.status ==500){
        //     $('#basicModal').modal("show");
        //     $("#modal_message").html("<p>Error sending mail....Please try again later</p>");
        //     $("#modal_title").html("<b>OOPS!!</b>");
        // }


        // alert("check_error");
        console.log("testing: ");
        console.log(objec);
        console.log("testing_complete");
        if(objec.houseNo=="Invalid House Number!!"){
            // alert("house_error");
            document.getElementById("house").innerHTML = objec.houseNo;
         
        }
         
        if(objec.streetAddress=="Invalid Street Address!!"){
            // alert("streetAddress_error");
            document.getElementById("street").innerHTML = objec.streetAddress;
        }
        
        if(objec.zip=="Invalid zip!!"){
            // alert("zip_error");
            document.getElementById("rentalzip").innerHTML = objec.zip;
        }
        if(objec.city=="Invalid City!!"){
            
            document.getElementById("rentalcity").innerHTML = objec.city;
        }
        if(objec.state=="Invalid State!!"){
           
            document.getElementById("rentalstate").innerHTML = objec.state;
        }
        if(objec.country=="Invalid Country!!"){
            document.getElementById("rentalcountry").innerHTML = objec.country;
           
        }


       if(objec.name=="Invalid Name!!"){
           
            document.getElementById("applicantname").innerHTML = objec.name;
        }

        if(objec.mail=="Invalid email!!"){
           
            document.getElementById("applicantmail").innerHTML = objec.email;
        }
        if(objec.phone_no=="Invalid Phone Number!!"){
           
            document.getElementById("applicantphone_no").innerHTML = objec.phoneNo;
        }
        if(objec.leaseStartDate=="Invalid Number!!"){
           
            document.getElementById("applicantleaseStartDate").innerHTML = objec.leaseStartDate;
        }
        if(objec.leaseEndDate=="Invalid Number!!"){
           
            document.getElementById("applicantleaseEndDate").innerHTML = objec.leaseEndDate;
        }
        if(objec.rentAmount=="Invalid Number!!"){
            document.getElementById("rentOfAmount").innerHTML = objec.rentAmount;
           
        }
        if(objec.rentPayDate=="Invalid Number!!"){
           
            document.getElementById("rentOfPayDate").innerHTML = objec.rentPayDate;
        }

        if(objec.percentElectricityBill=="Invalid Number!!"){
            document.getElementById("rentboxpercentElectricityBill").innerHTML = objec.percentElectricityBill;
           
        }
        if(objec.electricityBillAmount=="Invalid Number!!"){
            document.getElementById("rentboxelectricityBillAmount").innerHTML = objec.electricityBillAmount;
           
        }

        if(objec.percentWaterBill=="Invalid Number!!"){
            document.getElementById("rentboxpercentWaterBill").innerHTML = objec.percentWaterBill;
           
        }
        if(objec.waterBillAmount=="Invalid Number!!"){
           
            document.getElementById("rentboxwaterBillAmount").innerHTML = objec.waterBillAmount;
        }
        if(objec.percentPhoneBill=="Invalid Number!!"){
           
            document.getElementById("rentboxpercentPhoneBill").innerHTML = objec.percentPhoneBill;
        }
       
        if(objec.phoneBillAmount=="Invalid Number!!"){
           
            document.getElementById("rentboxphoneBillAmount").innerHTML = objec.phoneBillAmount;
        }
        if(objec.percentOtherBill=="Invalid Number!!"){
           
            document.getElementById("rentboxpercentOtherBill").innerHTML = objec.percentOtherBill;
        }
       
        if(objec.otherBillAmount=="Invalid Number!!"){
            document.getElementById("rentboxotherBillAmount").innerHTML = objec.otherBillAmount;
           
        }
        if(objec.cleaning=="Invalid Characters!!"){
            document.getElementById("housecleaning").innerHTML = objec.cleaning;
           
        }
        if(objec.kitchenUse=="Invalid Characters!!"){
           
            document.getElementById("housekitchenUse").innerHTML = objec.kitchenUse;
        }
        if(objec.overnightGuests=="Invalid Characters!!"){
           
            document.getElementById("houseovernightGuests").innerHTML = objec.overnightGuests;
        }
        if(objec.useOfAppliances=="Invalid Characters!!"){
            document.getElementById("houseuseOfAppliances").innerHTML = objec.useOfAppliances;
           
        }
        if(objec.smoking=="Invalid Characters!!"){
           
            document.getElementById("housesmoking").innerHTML = objec.smoking;
        }
        if(objec.useOfCommonAreas=="Invalid Characters!!"){
           
            document.getElementById("houseuseOfCommonAreas").innerHTML = objec.useOfCommonAreas;
        }
        if(objec.alcoholUse=="Invalid Characters!!"){
           
            document.getElementById("housealcoholUse").innerHTML = objec.alcoholUse;
        }
        if(objec.telephoneUse=="Invalid Characters!!"){
            document.getElementById("housetelephoneUse").innerHTML = objec.telephoneUse;
           
        }
        if(objec.studyingHours=="Invalid Characters!!"){
            document.getElementById("housestudyingHours").innerHTML = objec.studyingHours;
           
        }
        if(objec.personalItemsShared=="Invalid Characters!!"){
           
            document.getElementById("housepersonalItemsShared").innerHTML = objec.personalItemsShared;
        }
        if(objec.music=="Invalid Characters!!"){
           
            document.getElementById("housemusic").innerHTML = objec.music;
        }
        if(objec.bedroomAssignment=="Invalid Characters!!"){
           
            document.getElementById("housebedroomAssignment").innerHTML = objec.bedroomAssignment;
        }
        if(objec.pets=="Invalid Characters!!"){
            document.getElementById("housepets").innerHTML = objec.pets;
           
        }
        if(objec.other=="Invalid Characters!!"){
            document.getElementById("houseother").innerHTML = objec.other;
           
        }
        if(objec.lastPaidDate=="Invalid Number!!"){
           
            document.getElementById("conflictlastPaidDate").innerHTML = objec.lastPaidDate;
        }
        if(objec.lastPaidAmount=="Invalid Number!!"){
           
            document.getElementById("conflictlastPaidAmount").innerHTML = objec.lastPaidAmount;
        }
        if(objec.securityDeposit=="Invalid Number!!"){
            document.getElementById("conflictsecurityDeposit").innerHTML = objec.securityDeposit;
           
        }
        if(objec.securityAmount=="Invalid Number!!"){
           
            document.getElementById("conflictsecurityAmount").innerHTML = objec.securityAmount;
        }
        if(objec.refundDeposit=="Invalid Number!!"){
           
            document.getElementById("depositrefundDeposit").innerHTML = objec.refundDeposit;
        }
        if(objec.refundPaidDate=="Invalid Number!!"){
            document.getElementById("depositrefundPaidDate").innerHTML = objec.refundPaidDate;
           
        }
        if(objec.refundDuration=="Invalid Number!!"){
            document.getElementById("depositrefundDuration").innerHTML = objec.refundDuration;
           
        }
        if(objec.agreementDay=="Invalid Number!!"){
           
            document.getElementById("leadagreementDay").innerHTML = objec.agreementDay;
        }
        if(objec.agreementMonth=="Invalid Number!!"){
            document.getElementById("leadagreementMonth").innerHTML = objec.agreementMonth;
           
        }
        if(objec.agreementYear=="Invalid Number!!"){
           
            document.getElementById("leadagreementYear").innerHTML = objec.agreementYear;
        }
       
        

        if(res1.rspnsMsg=="GOOD"){
            // window.location.href = window.location.protocol + "//" + window.location.host + "/submitted.html"
            }




        }


    };

    xmlhttp1.send(JSON.stringify({
        "name": fullName,
        "email": mail,
        "phoneNo":phoneNo,
        "houseNo": houseNo,
        "streetAddress": streetAddress,
        "zip": zip,
        "city": city,
        "state": state,
        "principalOwner": principalOwner,
        "tenant": tenant,
        "leaseStartDate": leasestartDate,
        "leaseEndDate": leaseEndDate,
        "rentAmount": rentAmount,
        "rentPayDate": rentPayDate,
        "percentElectricityBill": percentElectricityBill,
        "electricityBillAmount": electricityBillAmount,
        "percentWaterBill": percentWaterBill,
        "waterBillAmount": waterBillAmount,
        "percentPhoneBill": percentPhoneBill,
        "phoneBillAmount": phoneBillAmount,
        "percentOtherBill": percentOtherBill,
        "otherBillAmount": otherBillAmount,
        "cleaning": cleaning,
        "kitchenUse": kitchenUse,
        "overnightGuests": overnightGuests,
        "useOfAppliances": useOfAppliances,
        "smoking": smoking,
        "useOfCommonAreas": useOfCommonAreas,
        "alcoholUse": alcoholUse,
        "telephoneUse": telephoneUse,
        "studyingHours": studyingHours,
        "personalItemsShared": personalItemsShared,
        "music": music,
        "bedroomAssignment": bedroomAssignment,
        "pets": pets,
        "other": other,
        "lastPaidDate": lastPaidDate,
        "lastPaidAmount": lastPaidAmount,
        "securityDeposit": securityDeposit,
        "securityAmount": securityAmount,
        "refundDeposit": refundDeposit,
        "refundPaidDate": refundPaidDate,
        "refundDuration": refundDuration,
        "agreementDay": agreementDay,
        "agreementMonth": agreementMonth,
        "agreementYear": agreementYear,

        "roles": []

    }));
    
}

// this is for populating table of submitted applications (invite-lease.html)
function listApplications() {

	var xmlhttp1;
	try {
		xmlhttp1 = new XMLHttpRequest();
	} catch (e) {
		try {
			xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
			} catch (e) {
				alert("BROWSER BROKE");
				return false;
			}
		}
	}
	xmlhttp1.open("GET", baseurl +"/rentaladmin/listapplications", true);
	xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
	xmlhttp1.onreadystatechange = function () {
		if (this.status == 200 && this.responseText != null && this.responseText != "") {
			var res = JSON.parse(this.responseText);
            if (res.rspnsCode === 1000) {
                var response = JSON.parse(res['response']);
			    tableData = '';
                if(response.length > 0){
                for (i = 0; i < response.length; i++) {
                    var propertyAddress = response[i].rentProperty.propertyInfo["houseNo"] + ", " + response[i].rentProperty.propertyInfo["streetAddress"] + ", " +
                    response[i].rentProperty.propertyInfo["city"] + ", " + response[i].rentProperty.propertyInfo["zip"] + ", " + response[i].rentProperty.propertyInfo["state"] + ", " + response[i].rentProperty.propertyInfo["country"];
                        tableData += '<tr id = >';
                        tableData += '<td id="serialNumber" class="invert">' + (i+1)  + '</td>';
                        tableData += '<td id="table_email" class="invert">' + response[i].rentProperty.applicant["fullName"] + '</td>';
                        tableData += '<td class="invert">' +propertyAddress+ '</td>';
                        tableData += '<td class="invert">' + ` <div class="">
                        <a href=${"/admin/applicant-details.html?appID=" + response[i].applicationID } class="btn btn-primary" style="
                        margin-top: 20%;  margin-left:15%; padding: 5px 5px;
                        ">View</a>` + '</td>';
                        tableData += '<td class="invert">' + ` <div class="">
                        <a href=${"/admin/new-lease.html?propertyID="  + response[i].rentProperty.propertyId + "&appID=" + response[i].applicationID + "&email=" + response[i].email} class="btn btn-primary" style="
                        margin-top: 2%;  margin-left:25%; padding: 5px 9px; 
                        margin-right:25%;">Invite</a>` +
                        ' <button type="button" class="btn btn-danger" title="Delete" id="delete" onclick="deleteApplication(' + response[i].applicationID+ ')" style="background-color:#dc3545;  margin-top: 2%;  margin-left:25%; padding: 5px 5px; margin-right:25%;">Delete</button>'+ '</td>';
                        }
                        
                    }
            }
                document.getElementById('submittedapplication').innerHTML = tableData;
        }
    };
    
    xmlhttp1.send();
}

// this is to get applicant details when clicked view button (invite for lease table)
function getApplicantDetails(appID){

    var xmlhttp1;
	try {
		xmlhttp1 = new XMLHttpRequest();
	} catch (e) {
		try {
			xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
			} catch (e) {
				alert("BROWSER BROKE");
				return false;
			}
		}
	}

    xmlhttp1.open("GET", baseurl +"/rentaladmin/getapplication?appID=" + appID, true);
	xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
	xmlhttp1.onreadystatechange = function () {
		if (this.status == 200 && this.responseText != null && this.responseText != "") {
			var res = JSON.parse(this.responseText);
            var response = JSON.parse(res['response']);
            console.log(response);
            if (response == null) {
                window.location.href = window.location.protocol + "//" + window.location.host + "/error.html";
            } else if (response != null) {
                document.getElementById('fullName').innerHTML = response.applicant['fullName'];
                document.getElementById('mail').innerHTML = response.applicant['emailID'];
                document.getElementById('phone_no').innerHTML = response.applicant['phone'];
                document.getElementById('dob').innerHTML = response.applicant['dob'];
                document.getElementById('ssn').innerHTML = response.applicant['ssn'];
                //current company details
                document.getElementById("current_company").innerHTML = response.employmentHistory[0]["company"];
                document.getElementById("current_occupation").innerHTML = response.employmentHistory[0]["occupation"];
                document.getElementById("current_income").innerHTML = response.employmentHistory[0]["income"];
                document.getElementById("current_supervisor").innerHTML = response.employmentHistory[0]["supervisor"];
                document.getElementById("current_office_address").innerHTML = response.employmentHistory[0]["address"];
                document.getElementById("current_company_phoneNo").innerHTML = response.employmentHistory[0]["companyPhoneNo"];
                document.getElementById("current_company_mail").innerHTML = response.employmentHistory[0]["companyEmail"];
                document.getElementById("current_company_city").innerHTML = response.employmentHistory[0]["city"];
                document.getElementById("current_company_state").innerHTML = response.employmentHistory[0]["state"];
                document.getElementById("current_zip").innerHTML = response.employmentHistory[0]["zip"];
                document.getElementById("current_company_country").innerHTML = response.employmentHistory[0]["country"];

                //previous company details
                document.getElementById("previous_company").innerHTML = response.employmentHistory[1]["company"];
                document.getElementById("previous_occupation").innerHTML = response.employmentHistory[1]["occupation"];
                document.getElementById("previous_income").innerHTML = response.employmentHistory[1]["income"];
                document.getElementById("previous_supervisor").innerHTML = response.employmentHistory[1]["supervisor"];
                document.getElementById("previous_office_address").innerHTML = response.employmentHistory[1]["address"];
                document.getElementById("previous_company_phoneNo").innerHTML = response.employmentHistory[1]["companyPhoneNo"];
                document.getElementById("previous_company_mail").innerHTML = response.employmentHistory[1]["companyEmail"];
                document.getElementById("previous_company_city").innerHTML = response.employmentHistory[1]["city"];
                document.getElementById("previous_company_state").innerHTML = response.employmentHistory[1]["state"];
                document.getElementById("previous_zip").innerHTML = response.employmentHistory[1]["zip"];
                document.getElementById("previous_company_country").innerHTML = response.employmentHistory[1]["country"];

                // current residence
                document.getElementById("current_residence_type").innerHTML = response.residenceHistory[0]["type"];
                document.getElementById("current_residence_sqFeet").innerHTML = response.residenceHistory[0]["squareFeet"];
                document.getElementById("current_residence_bedrooms").innerHTML = response.residenceHistory[0]["bedrooms"];
                document.getElementById("current_residence_rent").innerHTML = response.residenceHistory[0]["rent"];
                document.getElementById("current_residence_address").innerHTML = response.residenceHistory[0]["houseAddress"];
                document.getElementById("current_residence_street").innerHTML = response.residenceHistory[0]["streetAddress"];
                document.getElementById("current_residence_city").innerHTML = response.residenceHistory[0]["city"];
                document.getElementById("current_residence_state").innerHTML = response.residenceHistory[0]["state"];
                document.getElementById("current_residence_zip").innerHTML = response.residenceHistory[0]["zip"];
                document.getElementById("current_residence_country").innerHTML = response.residenceHistory[0]["country"];
                document.getElementById("current_residence_duration").innerHTML = response.residenceHistory[0]["duration"];
                document.getElementById("current_lease_expiry").innerHTML = response.residenceHistory[0]["currLeaseExpDate"];
                document.getElementById("reason_for_moving").innerHTML = response.residenceHistory[0]["reasonForMoving"];

                //previous residence-1
                document.getElementById("previous_residence_type").innerHTML = response.residenceHistory[1]["type"];
                document.getElementById("previous_residence_sqFeet").innerHTML = response.residenceHistory[1]["squareFeet"];
                document.getElementById("previous_residence_bedrooms").innerHTML = response.residenceHistory[1]["bedrooms"];
                document.getElementById("previous_residence_rent").innerHTML = response.residenceHistory[1]["rent"];
                document.getElementById("previous_residence_address").innerHTML = response.residenceHistory[1]["houseAddress"];
                document.getElementById("previous_residence_street").innerHTML = response.residenceHistory[1]["streetAddress"];
                document.getElementById("previous_residence_city").innerHTML = response.residenceHistory[1]["city"];
                document.getElementById("previous_residence_state").innerHTML = response.residenceHistory[1]["state"];
                document.getElementById("previous_residence_zip").innerHTML = response.residenceHistory[1]["zip"];
                document.getElementById("previous_residence_country").innerHTML = response.residenceHistory[1]["country"];
                // document.getElementById("previous_residence_duration").innerHTML = response.residenceHistory[1]["duration"];
                // document.getElementById("previous_lease_expiry").innerHTML = response.residenceHistory[1]["currLeaseExpDate"];
                document.getElementById("previous_residence_startDate").innerHTML = response.residenceHistory[1]["startDate"];
                document.getElementById("previous_residence_endDate").innerHTML = response.residenceHistory[1]["endDate"];

                // document.getElementById("reason_for_moving").innerHTML = response.residenceHistory[0]["reasonForMoving"];

                //previous residence-2
                document.getElementById("previous_residence2_type").innerHTML = response.residenceHistory[2]["type"];
                document.getElementById("previous_residence2_sqFeet").innerHTML = response.residenceHistory[2]["squareFeet"];
                document.getElementById("previous_residence2_bedrooms").innerHTML = response.residenceHistory[2]["bedrooms"];
                document.getElementById("previous_residence2_rent").innerHTML = response.residenceHistory[2]["rent"];
                document.getElementById("previous_residence2_address").innerHTML = response.residenceHistory[2]["houseAddress"];
                document.getElementById("previous_residence2_street").innerHTML = response.residenceHistory[2]["streetAddress"];
                document.getElementById("previous_residence2_city").innerHTML = response.residenceHistory[2]["city"];
                document.getElementById("previous_residence2_state").innerHTML = response.residenceHistory[2]["state"];
                document.getElementById("previous_residence2_zip").innerHTML = response.residenceHistory[2]["zip"];
                document.getElementById("previous_residence2_country").innerHTML = response.residenceHistory[2]["country"];
                // document.getElementById("previous_residence-1_duration").innerHTML = response.residenceHistory[2]["duration"];
                // document.getElementById("previous_lease-1_expiry").innerHTML = response.residenceHistory[2]["currLeaseExpDate"];
                document.getElementById("previous_residence2_startDate").innerHTML = response.residenceHistory[2]["startDate"];
                document.getElementById("previous_residence2_endDate").innerHTML = response.residenceHistory[2]["endDate"];

                //current landlord
                document.getElementById("current_landlord_name").innerHTML = response.landlordHistory[0]["name"];
                document.getElementById("current_landlord_address").innerHTML = response.landlordHistory[0]["rentalAddress"];
                document.getElementById("current_landlord_phoneNo").innerHTML = response.landlordHistory[0]["phone"];
                document.getElementById("current_landlord_mail").innerHTML = response.landlordHistory[0]["email"];

                //previous landlord-1
                document.getElementById("previous_landlord1_name").innerHTML = response.landlordHistory[1]["name"];
                document.getElementById("previous_landlord1_address").innerHTML = response.landlordHistory[1]["rentalAddress"];
                document.getElementById("previous_landlord1_phone").innerHTML = response.landlordHistory[1]["phone"];
                document.getElementById("previous_landlord1_mail").innerHTML = response.landlordHistory[1]["email"];

                // previous landlord-2
                document.getElementById("previous_landlord_name").innerHTML = response.landlordHistory[2]["name"];
                document.getElementById("previous_landlord_address").innerHTML = response.landlordHistory[2]["rentalAddress"];
                document.getElementById("previous_landlord_phoneNo").innerHTML = response.landlordHistory[2]["phone"];
                document.getElementById("previous_landlord_mail").innerHTML = response.landlordHistory[2]["email"];

                //personal references
                document.getElementById("personalref_fullname").innerHTML = response.personalReferencesVO["fullName"];
                document.getElementById("personalref_relationship").innerHTML = response.personalReferencesVO["relationship"];
                document.getElementById("personalref_phone").innerHTML = response.personalReferencesVO["phoneNo"];
                document.getElementById("personalref_mail").innerHTML = response.personalReferencesVO["email"];




            }
        }
    };
    
    xmlhttp1.send();

}

// this is to populate address and applicant fields in new lease form
function getApplicationDetails(){

    var xmlhttp1;
	try {
		xmlhttp1 = new XMLHttpRequest();
	} catch (e) {
		try {
			xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
			} catch (e) {
				alert("BROWSER BROKE");
				return false;
			}
		}
	}

    xmlhttp1.open("GET", baseurl +"/rentaladmin/getapplication?appID=" + appID, true);
	xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
	xmlhttp1.onreadystatechange = function () {
		if (this.status == 200 && this.responseText != null && this.responseText != "") {
			var res = JSON.parse(this.responseText);
            var response = JSON.parse(res['response']);
            // console.log(response);
            if (response == null) {
                window.location.href = window.location.protocol + "//" + window.location.host + "/error.html";
            } else if (response != null) {
                 document.getElementById("houseNo").value = response.propertyInfo["houseNo"];
                 document.getElementById("streetAddress").value = response.propertyInfo["streetAddress"];
                 document.getElementById("city").value = response.propertyInfo["city"];
                 document.getElementById("zip").value = response.propertyInfo["zip"];
                 document.getElementById("state").value = response.propertyInfo["state"];

                 document.getElementById("fullName").value = response.applicant["fullName"];
                 document.getElementById("mail").value = response.applicant["emailID"];
                 document.getElementById("phone_no").value = response.applicant["phone"];



            }
        }
    };
    
    xmlhttp1.send();

}
// this is for get property house location popup (getProperty.html---unsecured)
function getPropertyAddress(propertyID) {
    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("GET", baseurl + "/rentalunsecured/getproperty?propertyID=" + propertyID, true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "") {
            var res = JSON.parse(this.responseText);
        console.log(res)
            if (res.rspnsCode === 1000) {
                var response = JSON.parse(res['response']);
                console.log(res)
               
                document.getElementById("streetaddress").innerHTML = response.streetAddress;
                document.getElementById("houseno").innerHTML = response.houseNo;
                document.getElementById("City").innerHTML = response.city;
                document.getElementById("State").innerHTML = response.state;
                document.getElementById("Zip").innerHTML = response.zip;
                document.getElementById("Country").innerHTML = response.country;
               


            }

        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }
    };

    xmlhttp1.send();

}

// this is to populate fields in lease form when tenant opens the lease form
function getLeaseDetails(leaseID){

    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("GET", baseurl + "/rentalunsecured/getlease?leaseID=" + leaseID, true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "") {
            var res = JSON.parse(this.responseText);
            if (res.rspnsCode === 1000) {
                var response = JSON.parse(res['response']);
                console.log(response);
                document.getElementById("houseNo").value = response.houseNo;
                document.getElementById("streetAddress").value = response.streetAddress;
                document.getElementById("zip").value = response.zip;
                document.getElementById("city").value = response.city;
                document.getElementById("state").value = response.state;
                document.getElementById("country").value = response.country;
                document.getElementById("fullName").value = response.name;
                document.getElementById("mail").value = response.email;
                document.getElementById("phone_no").value = response.phoneNo;
                document.getElementById("leaseStartDate").value = response.leaseStartDate;
                document.getElementById("leaseEndDate").value = response.leaseEndDate;
                document.getElementById("rentAmount").value = response.rentAmount;
                document.getElementById("rentPayDate").value = response.rentPayDate;
                document.getElementById("percentElectricityBill").value = response.percentElectricityBill;
                document.getElementById("electricityBillAmount").value = response.electricityBillAmount;
                document.getElementById("percentWaterBill").value = response.percentWaterBill;
                document.getElementById("waterBillAmount").value = response.waterBillAmount;
                document.getElementById("percentPhoneBill").value = response.percentPhoneBill;
                document.getElementById("phoneBillAmount").value = response.phoneBillAmount;
                document.getElementById("percentOtherBill").value = response.percentOtherBill;
                document.getElementById("otherBillAmount").value = response.otherBillAmount;
                document.getElementById("cleaning").value = response.cleaning;
                document.getElementById("kitchenUse").value = response.kitchenUse;
                document.getElementById("overnightGuests").value = response.overnightGuests;
                document.getElementById("useOfAppliances").value = response.useOfAppliances;
                document.getElementById("smoking").value = response.smoking;
                document.getElementById("useOfCommonAreas").value = response.useOfCommonAreas;
                document.getElementById("alcoholUse").value = response.alcoholUse;
                document.getElementById("telephoneUse").value = response.telephoneUse;
                document.getElementById("studyingHours").value = response.studyingHours;
                document.getElementById("personalItemsShared").value = response.personalItemsShared;
                document.getElementById("music").value = response.music;
                document.getElementById("bedroomAssignment").value = response.bedroomAssignment;
                document.getElementById("pets").value = response.pets;
                document.getElementById("other").value = response.other;
                document.getElementById("lastPaidDate").value = response.lastPaidDate;
                document.getElementById("lastPaidAmount").value = response.lastPaidAmount;
                document.getElementById("securityDeposit").value = response.securityDeposit;
                document.getElementById("securityAmount").value = response.securityAmount;
                document.getElementById("refundDeposit").value = response.refundDeposit;
                document.getElementById("refundPaidDate").value = response.refundPaidDate;
                document.getElementById("refundDuration").value = response.refundDuration;
                document.getElementById("agreementDay").value = response.agreementDay;
                document.getElementById("agreementMonth").value = response.agreementMonth;
                document.getElementById("agreementYear").value = response.agreementYear;
               
               


            }

        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }
    };

    xmlhttp1.send();
}

// this is to get lease details after tenant submits the lease (open button)
function getLeaseDetailsSecured(leaseID){

    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("GET", baseurl + "/rentaladmin/getlease?leaseID=" + leaseID, true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "") {
            var res = JSON.parse(this.responseText);
            if (res.rspnsCode === 1000) {
                var response = JSON.parse(res['response']);
                console.log(response);
                document.getElementById("houseNo").value = response.houseNo;
                document.getElementById("streetAddress").value = response.streetAddress;
                document.getElementById("zip").value = response.zip;
                document.getElementById("city").value = response.city;
                document.getElementById("state").value = response.state;
                document.getElementById("country").value = response.country;
                document.getElementById("fullName").value = response.name;
                document.getElementById("mail").value = response.email;
                document.getElementById("phone_no").value = response.phoneNo;
                document.getElementById("leaseStartDate").value = response.leaseStartDate;
                document.getElementById("leaseEndDate").value = response.leaseEndDate;
                document.getElementById("rentAmount").value = response.rentAmount;
                document.getElementById("rentPayDate").value = response.rentPayDate;
                document.getElementById("percentElectricityBill").value = response.percentElectricityBill;
                document.getElementById("electricityBillAmount").value = response.electricityBillAmount;
                document.getElementById("percentWaterBill").value = response.percentWaterBill;
                document.getElementById("waterBillAmount").value = response.waterBillAmount;
                document.getElementById("percentPhoneBill").value = response.percentPhoneBill;
                document.getElementById("phoneBillAmount").value = response.phoneBillAmount;
                document.getElementById("percentOtherBill").value = response.percentOtherBill;
                document.getElementById("otherBillAmount").value = response.otherBillAmount;
                document.getElementById("cleaning").value = response.cleaning;
                document.getElementById("kitchenUse").value = response.kitchenUse;
                document.getElementById("overnightGuests").value = response.overnightGuests;
                document.getElementById("useOfAppliances").value = response.useOfAppliances;
                document.getElementById("smoking").value = response.smoking;
                document.getElementById("useOfCommonAreas").value = response.useOfCommonAreas;
                document.getElementById("alcoholUse").value = response.alcoholUse;
                document.getElementById("telephoneUse").value = response.telephoneUse;
                document.getElementById("studyingHours").value = response.studyingHours;
                document.getElementById("personalItemsShared").value = response.personalItemsShared;
                document.getElementById("music").value = response.music;
                document.getElementById("bedroomAssignment").value = response.bedroomAssignment;
                document.getElementById("pets").value = response.pets;
                document.getElementById("other").value = response.other;
                document.getElementById("lastPaidDate").value = response.lastPaidDate;
                document.getElementById("lastPaidAmount").value = response.lastPaidAmount;
                document.getElementById("securityDeposit").value = response.securityDeposit;
                document.getElementById("securityAmount").value = response.securityAmount;
                document.getElementById("refundDeposit").value = response.refundDeposit;
                document.getElementById("refundPaidDate").value = response.refundPaidDate;
                document.getElementById("refundDuration").value = response.refundDuration;
                document.getElementById("agreementDay").value = response.agreementDay;
                document.getElementById("agreementMonth").value = response.agreementMonth;
                document.getElementById("agreementYear").value = response.agreementYear;
               
               


            }

        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }
    };

    xmlhttp1.send();
}

// this is ajax on submit button in leaseform.html
function submitLease(leaseID){

    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("POST", baseurl + "/rentalunsecured/submitlease?leaseID=" + leaseID , true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "" && this.readyState == 4) {
            var res = JSON.parse(this.responseText);
            var loginRes = res.response;

        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }
    };

    xmlhttp1.send();
       

}

// this is to populate table on list of submitted leases table(list-of-lease.html)
function listLease() {

	var xmlhttp1;
	try {
		xmlhttp1 = new XMLHttpRequest();
	} catch (e) {
		try {
			xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
			} catch (e) {
				alert("BROWSER BROKE");
				return false;
			}
		}
	}
	xmlhttp1.open("GET", baseurl +"/rentaladmin/listleases", true);
	xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
	xmlhttp1.onreadystatechange = function () {
		if (this.status == 200 && this.responseText != null && this.responseText != "") {
			var res = JSON.parse(this.responseText);
            if (res.rspnsCode === 1000) {
                var response = JSON.parse(res['response']);
                console.log(res);
			    tableData = '';
                if(response.length > 0){
                for (i = 0; i < response.length; i++) {
                    var propertyAddress = response[i].lease["houseNo"] + ", " + response[i].lease["streetAddress"] + ", " +
                    response[i].lease["city"] + ", " + response[i].lease["zip"] + ", " + response[i].lease["state"];
                        tableData += '<tr id = >';
                        tableData += '<td id="serialNumber" class="invert">' + (i+1)  + '</td>';
                        tableData += '<td id="table_email" class="invert">' + response[i].name + '</td>';
                        tableData += '<td class="invert">' +propertyAddress+ '</td>';
                        tableData += '<td class="invert">' + ` <div class="">
                        <a href=${"/admin/submitted-lease.html?leaseID=" + response[i].leaseID } class="btn btn-primary" style="
                          margin-left:15%; padding: 12px 12px;
                        ">Open</a>`  + ' <button type="button" class="btn btn-danger" title="Delete" id="delete" onclick="deleteLease(' + response[i].leaseID+ ')" style="background-color:#dc3545">Delete</button>' + '</td>';
                        tableData += '<td class="invert">' + response[i].updateTimeStamp + '</td>';
                    }
                        
                    }
            }
                document.getElementById('submittedLease').innerHTML = tableData;
        }
    };
    
    xmlhttp1.send();
}

// this is to approve submitted lease
function approveLease(leaseID){

    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("POST", baseurl + "/rentaladmin/approvelease?leaseID=" + leaseID , true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "" && this.readyState == 4) {
            var res = JSON.parse(this.responseText);
            var loginRes = res.response;
            $('#basicModal').modal("show"); 
            $("#modal_message").html("<p>Lease Approved</p>");
            $("#modal_title").html("<b>SUCCESS!!</b>");
            // location.reload();

        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }
    };

    xmlhttp1.send();
       

}

// this is ajax on delete button in submitted lease table(list-of-lease.html) 
function deleteLease(leaseID){

    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("POST", baseurl + "/rentaladmin/deletelease?leaseID=" + leaseID , true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    if (confirm('Are you sure you want to delete this lease')) {
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "" && this.readyState == 4) {
            var res = JSON.parse(this.responseText);
            var loginRes = res.response;
            location.reload();

        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }
    };

    xmlhttp1.send();
}
       

}


//this is to populate initiated leases table (list-of-lease.html)
function unsubmittedLease() {
    var webBaseURL = window.location.protocol + "//" + window.location.host;

	var xmlhttp1;
	try {
		xmlhttp1 = new XMLHttpRequest();
	} catch (e) {
		try {
			xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
			} catch (e) {
				alert("BROWSER BROKE");
				return false;
			}
		}
	}
	xmlhttp1.open("GET", baseurl +"/rentaladmin/unsubmittedleases", true);
	xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
	xmlhttp1.onreadystatechange = function () {
		if (this.status == 200 && this.responseText != null && this.responseText != "") {
			var res = JSON.parse(this.responseText);
            if (res.rspnsCode === 1000) {
                var response = JSON.parse(res['response']);
			    tableData = '';
                if(response.length > 0){
                for (i = 0; i < response.length; i++) {
                    var propertyAddress = response[i].lease["houseNo"] + ", " + response[i].lease["streetAddress"] + ", " +
                    response[i].lease["city"] + ", " + response[i].lease["zip"] + ", " + response[i].lease["state"];
                    var copyLink = webBaseURL + "" + "/leaseform.html?leaseID="+ "" + response[i].leaseID;
                        tableData += '<tr id = >';
                        tableData += '<td id="serialNumber" class="invert">' + (i+1)  + '</td>';
                        tableData += '<td id="table_email" class="invert">' + response[i].name + '</td>';
                        tableData += '<td class="invert">' +propertyAddress+ '</td>';
                        tableData += '<td class="invert">' + response[i].status + '</td>';
                        tableData += '<td class="invert" style="display:flex">' +' <button type = "button" title = "Copy Link" style="margin:0 2px;font-size:13px;" onclick="copyText(\'' + copyLink + '\')" class="btn btn-primary"  style="background-color: #0b5ed7"><i class="fa fa-copy" style="font-size:20px"></i></button>' +
                        '<button type="button"  id="resend" onclick="resendLease(\'' + response[i].leaseID + '\',\'' + response[i].email + '\',\''  + webBaseURL + '\')" class="btn btn-primary" title="Resend" style="margin:0 2px; background-color: #0b5ed7"><i class="fas fa-redo"></i></button>'
                        + ' <button type="button" class="btn btn-danger" title="Delete" id="delete" onclick="deleteLease(' + response[i].leaseID+ ')" style="margin:0 2px;background-color:#dc3545"><i class="far fa-trash-alt"></i></button>' + '</td>';
                        tableData += '<td class="invert">' + response[i].updateTimeStamp + '</td>';;
                    }
                        
                    }
            }
                document.getElementById('unsubmittedLeaseList').innerHTML = tableData;
        }
    };
    
    xmlhttp1.send();
}

// this is for the resend button in initiated leases table (list-of-lease.html)
function resendLease(leaseID, emailID, webBaseURL){

   
    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("POST", baseurl + "/rentaladmin/resendlease?email=" + emailID +  "&leaseID=" + leaseID + "&webBaseURL=" + webBaseURL, true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "" && this.readyState == 4) {
            var res = JSON.parse(this.responseText);
            var loginRes = res.response;
            $('#basicModal').modal("show"); 
            $("#modal_message").html("<p>Email sent to your customer</p>");
            $("#modal_title").html("<b>SUCCESS!!</b>");
            // window.location.href = window.location.protocol + "//" + window.location.host + "/admin/list-of-lease.html";

        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }else if (this.status==500){
            $('#basicModal').modal("show");
            $("#modal_message").html("<p>Error sending mail....Please try again later</p>");
            $("#modal_title").html("<b>OOPS!!</b>");
        }
    };

    xmlhttp1.send();

    
}

// this is to populate submitted leases table(list-of-lease.html)
function listApprovedLease(){

    var xmlhttp1;
	try {
		xmlhttp1 = new XMLHttpRequest();
	} catch (e) {
		try {
			xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
			} catch (e) {
				alert("BROWSER BROKE");
				return false;
			}
		}
	}
	xmlhttp1.open("GET", baseurl +"/rentaladmin/listapprovedlease", true);
	xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
	xmlhttp1.onreadystatechange = function () {
		if (this.status == 200 && this.responseText != null && this.responseText != "") {
			var res = JSON.parse(this.responseText);
            if (res.rspnsCode === 1000) {
                var response = JSON.parse(res['response']);
			    tableData = '';
                if(response.length > 0){
                for (i = 0; i < response.length; i++) {
                    var propertyAddress = response[i].lease["houseNo"] + ", " + response[i].lease["streetAddress"] + ", " +
                    response[i].lease["city"] + ", " + response[i].lease["zip"] + ", " + response[i].lease["state"];
                        tableData += '<tr id = >';
                        tableData += '<td id="serialNumber" class="invert">' + (i+1)  + '</td>';
                        tableData += '<td id="table_email" class="invert">' + response[i].name + '</td>';
                        tableData += '<td class="invert">' +propertyAddress+ '</td>';
                        tableData += '<td class="invert">' + response[i].lease["leaseStartDate"] + '</td>';
                        tableData += '<td class="invert">' + response[i].lease["leaseEndDate"] + '</td>';
                    }
                        
                    }
            }
                document.getElementById('approvedLease').innerHTML = tableData;
        }
    };
    
    xmlhttp1.send();
}

//----------------------------------------------------------------------------------------------------------------------
// BELOW AJAX IS FOR CREATE LEASE FLOW(LANDLORD CLICKS ON CREATE LEASE BUTTON--->  FILLS FORM AND MAIL IS SENT TO TENANT )

// this is ajax on submit button in new-lease.html when landlord sends it by create lease button
function inviteCreatedLease(){

    var webBaseURL = window.location.protocol + "//" + window.location.host;
    // rental address
    var houseNo = $("#houseNo").val();
    var streetAddress = $("#streetAddress").val();
    var zip = $("#zip").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var country = $("#country").val();

    //applicant details
    var fullName = $('#fullName').val();
    var mail = $('#mail').val();
    var phoneNo = $('#phone_no').val();

    var principalOwner =  $("#principalOwner").val();
    var tenant =  $("#tenant").val();
 
    //terms
    var leasestartDate = $("#leaseStartDate").val();
    var leaseEndDate = $("#leaseEndDate").val();

    // rent 
    var rentAmount= $("#rentAmount").val();
	var rentPayDate = $("#rentPayDate").val();
	var percentElectricityBill = $("#percentElectricityBill").val();
	var electricityBillAmount = $("#electricityBillAmount").val();
	var percentWaterBill = $("#percentWaterBill").val();
	var waterBillAmount = $("#waterBillAmount").val();
    var percentPhoneBill = $("#percentPhoneBill").val();
	var phoneBillAmount = $("#phoneBillAmount").val();
	var percentOtherBill = $("#percentOtherBill").val();
	var otherBillAmount = $("#otherBillAmount").val();

    //house hold rules
    var cleaning = $("#cleaning").val();
	var kitchenUse = $("#kitchenUse").val();
	var overnightGuests = $("#overnightGuests").val();
	var useOfAppliances = $("#useOfAppliances").val();
	var smoking = $("#smoking").val();
	var useOfCommonAreas = $("#useOfCommonAreas").val();
	var alcoholUse = $("#alcoholUse").val();
	var telephoneUse = $("#telephoneUse").val();
	var studyingHours = $("#studyingHours").val();
	var personalItemsShared = $("#personalItemsShared").val();
	var music = $("#music").val();
	var bedroomAssignment = $("#bedroomAssignment").val();
	var pets = $("#pets").val();
	var other = $("#other").val();

    //deposits
    var lastPaidDate = $("#lastPaidDate").val();
	var lastPaidAmount = $("#lastPaidAmount").val();
	var securityDeposit = $("#securityDeposit").val();
	var securityAmount = $("#securityAmount").val();
	var refundDeposit = $("#refundDeposit").val();
	var refundPaidDate = $("#refundPaidDate").val();
	var refundDuration = $("#refundDuration").val();

    //lead based paint discloser
	var agreementDay = $("#agreementDay").val();
	var agreementMonth = $("#agreementMonth").val();
	var agreementYear = $("#agreementYear").val();


    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }

    xmlhttp1.open("POST", baseurl + "/rentaladmin/invitecreatedlease?email=" + mail + "&webBaseURL=" + webBaseURL ,true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "" && this.readyState == 4) {
            var res = JSON.parse(this.responseText);
            var loginRes = res.response;
            if(mail==null){
                alert("Error in sending mail....Please try again");
                return false;
            }
           
            $('#basicModal').modal("show"); 
            $("#modal_message").html("<p>Email sent to your customer</p>");
            $("#modal_title").html("<b>SUCCESS!!</b>");
            // window.location.href = window.location.protocol + "//" + window.location.host + "/admin/invite-lease.html";

        } else if ((this.status == 403 || this.status == 401) && this.readyState == 4) {
            window.location.href = window.location.protocol + "//" + window.location.host + "/admin/pages-error-404.html"
        }else if(this.status ==500){
            $('#basicModal').modal("show");
            $("#modal_message").html("<p>Error sending mail....Please try again later</p>");
            $("#modal_title").html("<b>OOPS!!</b>");
        }
    };

    xmlhttp1.send(JSON.stringify({
        "name": fullName,
        "email": mail,
        "phoneNo":phoneNo,
        "houseNo": houseNo,
        "streetAddress": streetAddress,
        "zip": zip,
        "city": city,
        "state": state,
        "country":country,
        "principalOwner": principalOwner,
        "tenant": tenant,
        "leaseStartDate": leasestartDate,
        "leaseEndDate": leaseEndDate,
        "rentAmount": rentAmount,
        "rentPayDate": rentPayDate,
        "percentElectricityBill": percentElectricityBill,
        "electricityBillAmount": electricityBillAmount,
        "percentWaterBill": percentWaterBill,
        "waterBillAmount": waterBillAmount,
        "percentPhoneBill": percentPhoneBill,
        "phoneBillAmount": phoneBillAmount,
        "percentOtherBill": percentOtherBill,
        "otherBillAmount": otherBillAmount,
        "cleaning": cleaning,
        "kitchenUse": kitchenUse,
        "overnightGuests": overnightGuests,
        "useOfAppliances": useOfAppliances,
        "smoking": smoking,
        "useOfCommonAreas": useOfCommonAreas,
        "alcoholUse": alcoholUse,
        "telephoneUse": telephoneUse,
        "studyingHours": studyingHours,
        "personalItemsShared": personalItemsShared,
        "music": music,
        "bedroomAssignment": bedroomAssignment,
        "pets": pets,
        "other": other,
        "lastPaidDate": lastPaidDate,
        "lastPaidAmount": lastPaidAmount,
        "securityDeposit": securityDeposit,
        "securityAmount": securityAmount,
        "refundDeposit": refundDeposit,
        "refundPaidDate": refundPaidDate,
        "refundDuration": refundDuration,
        "agreementDay": agreementDay,
        "agreementMonth": agreementMonth,
        "agreementYear": agreementYear,

        "roles": []

    }));
    
}

//-----------------------------------------------------------------------------------------------------------------------

//this is for getting lease details(Property + applicant) in the form of dropdowm
function loadAllExecLeases(){

    var xmlhttp1;
	try {
		xmlhttp1 = new XMLHttpRequest();
	} catch (e) {
		try {
			xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
			} catch (e) {
				alert("BROWSER BROKE");
				return false;
			}
		}
	}
	xmlhttp1.open("GET", baseurl +"/rentaladmin/listapprovedlease", true);
	xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
	xmlhttp1.onreadystatechange = function () {
		if (this.status == 200 && this.responseText != null && this.responseText != "") {
			var res = JSON.parse(this.responseText);
            if (res.rspnsCode === 1000) {
                var response = JSON.parse(res['response']);
                console.log(response);
                var dropdown = '<option value = "-1"> Please select tenant</option>';
                for (var i = 0; i < response.length; i++) {
                    dropdown += '<option value ="' + response[i].leaseID + '">' +"Property Name: "+ response[i].lease.houseNo + ", " + response[i].lease.streetAddress + ", " +
                        response[i].lease.city + ", " + response[i].lease.zip + ", " + response[i].lease.state + ", " + response[i].lease.country + " | Applicant Name: " + 
                        response[i].name + '</option>';

                }
                $("#leaseDropdown").html(dropdown);
        }
    }
    };
    
    xmlhttp1.send();
}

function initAddTransaction(){

    var leaseID = $('#leaseDropdown').val();
    var status = $('#status').val();
    var account = $('#account').val();
    var transaction_type = $('#transaction_type').val();
    var amount = $('#amount').val();

    var xmlhttp1;
    try {
        xmlhttp1 = new XMLHttpRequest();
    } catch (e) {
        try {
            xmlhttp1 = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp1 = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                alert("BROWSER BROKE");
                return false;
            }
        }
    }
    console.log(status);
    xmlhttp1.open("POST", baseurl + "/rentaladmin/addtransaction?leaseID=" + leaseID + "&status=" + status, true);
    xmlhttp1.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    xmlhttp1.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
    xmlhttp1.onreadystatechange = function () {
        if (this.status == 200 && this.responseText != null && this.responseText != "" && this.readyState == 4) {
            var res = JSON.parse(this.responseText);
            var loginRes = res.response;
        }
    };

    xmlhttp1.send(JSON.stringify({
        "account": account,
        "transactionType": transaction_type,
        "amount": amount,
        "roles": []

    }));
    console.log("waiting for server response....");

}