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
issueDiv.innerHTML=`<div class="border-2 p-2 shadow-lg  h-full space-y-2" >
<h3 class="font-bold">${issue.title}</h3>
      <p>Description:${issue.description}</p>


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
