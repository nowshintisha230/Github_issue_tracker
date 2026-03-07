const allIssues=()=>{
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((json)=>displayIssues(json.data));
};
const displayIssues=(issues)=>{
//1.get the container & empty
const issuesContainer=document.getElementById("issues-container");
issuesContainer.innerHTML = " ";
//2.get into every issues
for(let issue of issues){
//3.create element
const issueDiv=document.createElement("div");
issueDiv.innerHTML=`<div class="relative p-2 shadow-lg  h-full space-y-2  border-t-4 rounded-xl ${issue.status.toLowerCase() === 'open' 
  ? 'border-t-green-500' 
  : 'border-t-purple-500'}">
  
  ${issue.status.toLowerCase() === 'open'
? `<img src="./assets/Open-Status.png" class=" absolute top-2 left-2"></img>`
: `<img src="./assets/Closed- Status .png" class=" absolute top-2 left-2"></img>`} 
  
${issue.priority.toLowerCase() === 'high'?`<button class="btn rounded-4xl bg-red-100 text-red-600 absolute top-2 right-2">High</button>`:issue.priority.toLowerCase() === 'medium'?`<button class="btn bg-yellow-100 text-yellow-600 rounded-4xl absolute top-2 right-2">Medium</button>`:`<button class="btn rounded-4xl bg-gray-100 text-gray-600 absolute top-2 right-2">Low</button>`}

<h3 class="font-bold mt-12">${issue.title}</h3>
      <p>${issue.description}</p>

     <div class="flex gap-2"> 
     <button class="btn  ${issue.labels[0] 
      ? (issue.labels[0].toLowerCase() === 'enhancement' 
            ? 'bg-green-100 border-green-600 text-green-600' 
            : 'bg-red-100 border-red-600 text-red-600') 
      : 'bg-gray-300 text-black'}"><i class="fa-solid fa-bug"></i>${issue.labels[0]? issue.labels[0].toUpperCase():'NO LABEL'}</button> 

     <button class="btn  ${issue.labels[1] 
      ? (issue.labels[1].toLowerCase() === 'enhancement' 
            ? 'bg-green-100 border-green-600 text-green-600' 
            : 'bg-yellow-100 border-yellow-600 text-yellow-600') 
      : 'bg-gray-300 text-black'}"></i>${issue.labels[1]?issue.labels[1].toUpperCase():'NO LABEL'}</button>
      </div>
      <hr class="border-gray-400 my-5">
      <h1 class="text-gray-400">#${issue.id} by ${issue.author}</h1>
      <p class="text-gray-500">
  ${new Date(issue.createdAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
  })}
</p>
      </div>`;
//4.append
issuesContainer.append(issueDiv);
}
};
allIssues();
