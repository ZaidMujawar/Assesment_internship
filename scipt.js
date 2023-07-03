// Scroll to section when clicking on the "Learn More" button
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    const featuresSection = document.querySelector('#features');
    featuresSection.scrollIntoView({ behavior: 'smooth' });
  });
  
const candidatesData = [
    { name: 'Yash ', location: 'Bharghad', jobRole: 'Software Engineer' },
    { name: 'Harsh', location: 'Madhya Pradesh', jobRole: 'UI/UX Designer' },
    { name: 'Ankit', location: 'Mirzapur', jobRole: 'Project Manager' },
  ];
  
  // Function to search candidates
  function searchCandidates() { 
    const locationInput = document.getElementById('location').value.toLowerCase();
    const jobRoleInput = document.getElementById('jobRole').value.toLowerCase();
    
    // Filter candidates based on search inputs
    const filteredCandidates = candidatesData.filter(candidate => {
      const candidateLocation = candidate.location.toLowerCase();
      const candidateJobRole = candidate.jobRole.toLowerCase();
      
      // Match candidates with search inputs
      return candidateLocation.includes(locationInput) && candidateJobRole.includes(jobRoleInput);
    });
    
    // Display filtered candidates in the candidate list
    displayCandidates(filteredCandidates);
  }
  
  // Function to display candidates in the candidate list
  function displayCandidates(candidates) {
    const candidateList = document.getElementById('candidateList');
    candidateList.innerHTML = ''; // Clear previous candidate list
    
    // Iterate over filtered candidates and create candidate item elements
    candidates.forEach(candidate => {
      const candidateItem = document.createElement('div');
      candidateItem.classList.add('candidate-item');
      
      const candidateName = document.createElement('h3');
      candidateName.textContent = candidate.name;
      
      const candidateDetails = document.createElement('p');
      candidateDetails.textContent = `Location: ${candidate.location}, Job Role: ${candidate.jobRole}`;
      
      // Append candidate item elements to the candidate list
      candidateItem.appendChild(candidateName);
      candidateItem.appendChild(candidateDetails);
      candidateList.appendChild(candidateItem);
    });
  }
  
  