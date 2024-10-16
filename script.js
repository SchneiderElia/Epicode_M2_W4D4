const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },
  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
]


let page = document.querySelector("body")

let div000 = document.createElement("div")
div000.id = "box000"
page.appendChild(div000)

let div1 = document.createElement("div")
div1.id = "box1"
div000.appendChild(div1)

let searchBoxTitle = document.createElement("label")
searchBoxTitle.className = "label"
searchBoxTitle.innerText = "Job Title"
div1.appendChild(searchBoxTitle)

let searchBoxT = document.createElement("input")
searchBoxT.id = "title"
searchBoxT.placeholder = " job"
searchBoxT.type = "text"
div1.appendChild(searchBoxT)
searchBoxT = document.getElementById("title")


let div2 = document.createElement("div")
div2.id = "box2"
div000.appendChild(div2)

let searchBoxLocation = document.createElement("label")
searchBoxLocation.className = "label"
searchBoxLocation.innerText = "Job Location"
div2.appendChild(searchBoxLocation)

let searchBoxL = document.createElement("input")
searchBoxL.id = "location"
searchBoxL.placeholder = " location"
searchBoxL.type = "text"
div2.appendChild(searchBoxL)
searchBoxL = document.getElementById("location")


let div3 = document.createElement("div")
div3.id = "box3"
div000.appendChild(div3)


let button = document.createElement("button")
button.innerText = " Search"
button.id = "button"
div3.appendChild(button)



function searchJob(title, location) {

  let finder = []

  title = title.toLowerCase()
  location = location.toLowerCase()

  for (let job of jobs) {
    //console.log(job)

    let jobTitle = job.title.toLowerCase()
    let jobLocation = job.location.toLowerCase()
    //console.log(JobTitle)

    if (jobTitle.includes(title) && jobLocation.includes(location)) {
      finder.push(job)
    }
  }

  return finder
}




button.addEventListener("click", () => {
  let title = searchBoxT.value.toLocaleLowerCase()
  console.log(title)
  searchBoxT.value = ""
  let location = searchBoxL.value.toLocaleLowerCase()
  console.log(location)
  searchBoxL.value = ""
  let searchResult = searchJob(title, location)

  console.log(searchResult)


  let viewportJob = document.getElementById("jobList")
  viewportJob.innerHTML = ""


  for (let i = 0; i < searchResult.length; i++) {
    let job = searchResult[i]


    let card = document.createElement("div")
    card.className = "cardWork"

    let jobTitle = document.createElement("div")
    jobTitle.className = "jobTitle"
    jobTitle.innerHTML = "<div class='jobTitleText'><h3> Type Work </h3> <h4>" + job.title + "</h4></div>"
    card.appendChild(jobTitle)

    let jobLocation = document.createElement("div")
    jobLocation.className = "jobLocation"
    jobLocation.innerHTML = "<div class='jobLocationText'><h3> Location </h3> <h4>" + job.location + "</h4></div>"
    card.appendChild(jobLocation)

    viewportJob.appendChild(card)

  }

})


let viewportJob = document.createElement("div")
viewportJob.id = "jobList"
viewportJob.innerHTML = ""
page.appendChild(viewportJob)




let text = document.createElement("div")
 text.id = "text"
 text.innerHTML = "<h2>Find your job</h2>"
 page.prepend(text)


//----------------------------------------------------------------------

// FUCK THIS CODE

//----------------------------------------------------------------------


/* let div0 = document.createElement("div")
div0.id = "boxFilterLoc"
page.prepend(div0)


let filterLocation = document.getElementById("boxFilterLoc")



function filterLocations() {

  let location = []
  //console.log(location)

  for (let job of jobs) {
    //console.log(location)

    let jobLocation = job.location.split(",")[0]
    //console.log(job.location) 

    if (!location.includes(jobLocation)) {
      location.push(jobLocation);
    }
  }

  for (let i = 0; i < location.length; i++) {
    //console.log(location[i])

    let locations = location[i]
    //console.log(locations)

    let containerFSL = document.createElement("div")
    containerFSL.className = "FSL"

    filterLocation.appendChild(containerFSL)

    let checkBox = document.createElement("input");
    checkBox.type = "radio";
    checkBox.name = "location";
    checkBox.value = location

    containerFSL.appendChild(checkBox)


    let labelCheckBox = document.createElement("label")
    labelCheckBox.innerText = location[i]

    containerFSL.appendChild(labelCheckBox)

    filterLocation.appendChild(document.createElement("br"))
  }

  let checkBox = document.querySelectorAll("input[type='radio']")
  let disable = null

  function radioDisable(checkBox) {

    for (let i = 0; i < checkBox.length; i++) {
      checkBox[i].addEventListener("click", function() {
              if (disable === this) {
              this.checked = false
                disable = null
              } else {
                disable = this
              }
      })
    }
  } radioDisable(checkBox)


  return location
}
filterLocations()

//-------------------------------------------------------------

let div01 = document.createElement("div")
div01.id = "boxFilterJob"
div0.appendChild(div01)


let filterJob = document.getElementById("boxFilterJob")



function filterJobs() {

  let Job = []
  //console.log(Job)

  for (let job of jobs) {
    //console.log(Job)

    let jobJob = job.title.split(",")[0]
    //console.log(job.Job) 

    if (!Job.includes(jobJob)) {
      Job.push(jobJob);
    }
  }

  for (let i = 0; i < Job.length; i++) {
    //console.log(Job[i])

    let Jobs = Job[i]
    //console.log(Jobs)

    let containerFSL = document.createElement("div")
    containerFSL.className = "FSJ"

    filterJob.appendChild(containerFSL)

    let checkBox = document.createElement("input");
    checkBox.type = "radio";
    checkBox.name = "Job";
    checkBox.value = Job

    containerFSL.appendChild(checkBox)


    let labelCheckBox = document.createElement("label")
    labelCheckBox.innerText = Job[i]

    containerFSL.appendChild(labelCheckBox)

    filterJob.appendChild(document.createElement("br"))
  }

  let checkBox = document.querySelectorAll("input[type='radio']")
  let disable = null

  function radioDisable(checkBox) {

    for (let i = 0; i < checkBox.length; i++) {
      checkBox[i].addEventListener("click", function() {
              if (disable === this) {
              this.checked = false
                disable = null
              } else {
                disable = this
              }
      })
    }
  } radioDisable(checkBox)


  return Job
}
filterJobs()


let buttonFilter = document.createElement("button")
    buttonFilter.id = "buttonFilter"
    buttonFilter.innerText = "filter"
    div01.prepend(buttonFilter)


  let locationSelect = null
  let titleSelect = null


  let locationselected = document.getElementsByName("location")
    for( let i=0; i<locationselected.length; i++){
      if(locationselected[i].checked){
        locationselected = locationselected[i].value
        break
      }
    }
  
    let titleSelected = document.getElementsByName("job")
    for( let i=0; i<titleSelected.length; i++){
      if(titleSelected[i].checked){
        titleSelected = titleSelected[i].value
        break
      }
}
 */

  


    
 
