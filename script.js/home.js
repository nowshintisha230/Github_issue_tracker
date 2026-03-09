let allIssuesData = [];
//spinner
const manageSpinner = (status) => {
  const spinner = document.getElementById("spinner");
  const container = document.getElementById("issues-container");

  if (status) {                             
    spinner.classList.remove("hidden");
    container.classList.add("hidden");
  } else {
    spinner.classList.add("hidden");
    container.classList.remove("hidden");
  }
};


// Fetch all issues
const allIssues = () => {
    manageSpinner(true);
  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(res => res.json())
    .then(json => {
      allIssuesData = json.data;
      displayIssues(allIssuesData); // Initially show all
      setActiveButton("allBtn");
          // All button active
           manageSpinner(false);
         
    });
};

// Show All issues
const showAllIssues = () => {
  displayIssues(allIssuesData);
  setActiveButton("allBtn");
};

// Show Open issues
const showOpenIssues = () => {
  const openIssues = allIssuesData.filter(issue => issue.status.toLowerCase() === "open");
  displayIssues(openIssues);
  setActiveButton("openBtn");
};

// Show Closed issues
const showClosedIssues = () => {
  const closedIssues = allIssuesData.filter(issue => issue.status.toLowerCase() === "closed");
  displayIssues(closedIssues);
  setActiveButton("closedBtn");
};

// Active button
const setActiveButton = (id) => {
  document.getElementById("allBtn").classList.remove("activeBtn");
  document.getElementById("openBtn").classList.remove("activeBtn");
  document.getElementById("closedBtn").classList.remove("activeBtn");

  document.getElementById(id).classList.add("activeBtn");
};

// Display issues
const displayIssues = (issues) => {
  const issuesContainer = document.getElementById("issues-container");
  issuesContainer.innerHTML = "";

//update issues count number
 document.getElementById("issue-count").innerText = `${issues.length} issues`;

  for (let issue of issues) {
    const issueDiv = document.createElement("div");

    issueDiv.innerHTML = `
      <div onclick="loadIssues(${issue.id})" class="relative p-2 shadow-lg space-y-2 border-t-4 rounded-xl h-full
        ${issue.status.toLowerCase() === 'open' ? 'border-t-green-500' : 'border-t-purple-500'}">

        ${
          issue.status.toLowerCase() === 'open'
          ? `<img src="./assets/Open-Status.png" class="absolute top-2 left-2">`
          : `<img src="./assets/Closed- Status .png" class="absolute top-2 left-2">`
        }

        ${
          issue.priority.toLowerCase() === 'high'
          ? `<button class="btn rounded-4xl bg-red-100 text-red-600 absolute top-2 right-2">High</button>`
          : issue.priority.toLowerCase() === 'medium'
          ? `<button class="btn bg-yellow-100 text-yellow-600 rounded-4xl absolute top-2 right-2">Medium</button>`
          : `<button class="btn rounded-4xl bg-gray-100 text-gray-600 absolute top-2 right-2">Low</button>`
        }

        <h3 class="font-bold mt-12">${issue.title}</h3>
        <p>${issue.description}</p>

        <div class="flex gap-2">
          <button class="btn ${
            issue.labels[0]
              ? issue.labels[0].toLowerCase() === 'enhancement'
                ? 'bg-green-100 border-green-600 text-green-600'
                : 'bg-red-100 border-red-600 text-red-600'
              : 'bg-gray-300 text-black'
          } px-3 py-1 rounded-full">${
              issue.labels[0]
                ? issue.labels[0].toLowerCase() === 'enhancement'
                  ? '<i class="fa-solid fa-star-of-david"></i> '
                  : '<i class="fa-solid fa-bug"></i> '
                : ''
            }
            ${issue.labels[0] ? issue.labels[0].toUpperCase() : 'NO LABEL'}
          </button>

          <button class="btn ${
            issue.labels[1] ?issue.labels[1].toLowerCase() === 'enhancement'
                ? 'bg-green-100 border-green-600 text-green-600'
                : 'bg-yellow-100 border-yellow-600 text-yellow-600'
              : 'bg-gray-300 text-black'
          } px-3 py-1 rounded-full">
            ${
              issue.labels[1]
                ? issue.labels[1].toLowerCase() === 'enhancement'
                  ? '<i class="fa-solid fa-star-of-david"></i> '
                  : '<i class="fa-solid fa-bug"></i> '
                : ''
            }
            ${issue.labels[1] ? issue.labels[1].toUpperCase() : 'NO LABEL'}
          </button>
        </div>

        <hr class="border-gray-400 my-5">

        <h1 class="text-gray-400">#${issue.id} by ${issue.author}</h1>
        <p class="text-gray-500 text-sm">
          ${new Date(issue.createdAt).toLocaleDateString('en-US',{
            year:'numeric', month:'numeric', day:'numeric'
          })}
        </p>

      </div>
    `;

    issuesContainer.append(issueDiv);
  }
   
};

// Attach click events
document.getElementById("allBtn").addEventListener("click", showAllIssues);
document.getElementById("openBtn").addEventListener("click", showOpenIssues);
document.getElementById("closedBtn").addEventListener("click", showClosedIssues);

// Initial load
allIssues();


//modal action
const loadIssues=async(id) =>{
     
      const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
      const res=await fetch(url);
      const details =await res.json();
      displayIssueDetails(details.data);
};
const  displayIssueDetails =(issue) =>{
      console.log(issue);
      const detailsBox=document.getElementById("modal-container");
      detailsBox.innerHTML=`<h1 class="font-bold m-3">${issue.title}</h1>
   <div class="flex items-center gap-4 m-3">
      ${issue.status.toLowerCase()==='open'?`<button class="rounded-xl bg-green-500  p-1 text-white">Opened</button>`:`<button class="rounded-xl bg-purple-600 text-white p-1">Closed</button>`}
            <p class= "text-gray-400">
      <i class="fa-solid fa-circle fa-xs"></i> Opened by ${issue.author} <i class="fa-solid fa-circle fa-xs"></i> 
      ${new Date(issue.createdAt).toLocaleDateString('en-US',{
            year:'numeric', month:'numeric', day:'numeric'
          })}
      </p> 
      </div>
      
     <div class="flex gap-2">
          <button class="btn ${
            issue.labels[0]
              ? issue.labels[0].toLowerCase() === 'enhancement'
                ? 'bg-green-100 border-green-600 text-green-600'
                : 'bg-red-100 border-red-600 text-red-600'
              : 'bg-gray-300 text-black'
          } px-3 py-1 rounded-full">${
              issue.labels[0]
                ? issue.labels[0].toLowerCase() === 'enhancement'
                  ? '<i class="fa-solid fa-star-of-david"></i> '
                  : '<i class="fa-solid fa-bug"></i> '
                : ''
            }
            ${issue.labels[0] ? issue.labels[0].toUpperCase() : 'NO LABEL'}
          </button>

          <button class="btn ${
            issue.labels[1] ?issue.labels[1].toLowerCase() === 'enhancement'
                ? 'bg-green-100 border-green-600 text-green-600'
                : 'bg-yellow-100 border-yellow-600 text-yellow-600'
              : 'bg-gray-300 text-black'
          } px-3 py-1 rounded-full">
            ${
              issue.labels[1]
                ? issue.labels[1].toLowerCase() === 'enhancement'
                  ? '<i class="fa-solid fa-star-of-david"></i> '
                  : '<i class="fa-solid fa-bug"></i> '
                : ''
            }
            ${issue.labels[1] ? issue.labels[1].toUpperCase() : 'NO LABEL'}
          </button>
        </div>  
      <p class="p-1 text-gray-400">${issue.description}</p>
<div class="p-3 m-3 flex justify-between bg-gray-100 rounded-xl">
<div>
<h1 class="text-gray-400">Assignee:</h1><p class="font-bold">${issue.assignee ?issue.assignee:"Not Available"}</p>
</div>
<div>
<h1 class="m-1">Priority:</h1>${
          issue.priority.toLowerCase() === 'high'
          ? `<button class="btn rounded-4xl bg-red-100 text-red-600 ">High</button>`
          : issue.priority.toLowerCase() === 'medium'
          ? `<button class="btn bg-yellow-100 text-yellow-600 rounded-4xl">Medium</button>`
          : `<button class="btn rounded-4xl bg-gray-100 text-gray-600 ">Low</button>`
        }

</div>
</div>
      
      `;
      document.getElementById("my_modal_5").showModal();
};

//search
document.getElementById("searchInput").addEventListener("keyup", async (event) => {
  if (event.key === "Enter") {  // Enter key check
    const query = event.target.value.trim();
    if (!query) {
      alert("Please type something to search");
      return;
    }

    try {
      manageSpinner(true); // spinner on

      const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();

      displayIssues(data.data); // show search results
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      manageSpinner(false); // spinner off
    }
  }
});


document.getElementById("searchInput").addEventListener("keyup", async (event) => {
  if (event.key !== "Enter") return;  // Enter key check

  const query = event.target.value.trim().toLowerCase();

  
  if (!query) {
    displayIssues(allIssuesData); // existing all issues
    return;
  }

  try {
    // search API call
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${encodeURIComponent(query)}`);
    const data = await res.json();

    displayIssues(data.data);
  } catch (err) {
    console.error("Search error:", err);
    document.getElementById("issues-container").innerHTML =
      "<p class='text-red-500'>Error fetching search results</p>";
  }
});