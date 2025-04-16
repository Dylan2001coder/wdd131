document.addEventListener('DOMContentLoaded', function () {
    const projects = [
        {
            projectName: "Upper Body",
            imageUrl: "images/upperbody.jpg",
            width: "893px",
            height: "784px",
            projectDescription: "This section illustrates the first half to focus on in exercising. It is important to separate Upper body and Lower body. On upper body you focus only on biceps, triceps, sholders and chest mainly. You will need to focus on maybe just two in the morning and two in the evening."
        },
        {
            projectName: "Lower Body",
            imageUrl: "images/lowerbody2.jpeg",
            width: "765px",
            height: "601px",
            projectDescription: "This section focuses on the lower body which is the secong half, here you will focus mainly on your entire leg from thighs to culf. The main exercise here are squats and leg raises, to make these effective you can use weights."
        }
    ];

    const container = document.querySelector('.container-project-box');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const projectTitle = document.createElement('h2');
        projectTitle.textContent = project.projectName;
        projectCard.appendChild(projectTitle);

        const projectImage = document.createElement('img');
        projectImage.src = project.imageUrl;
        projectImage.width = project.width;
        projectImage.height = project.height;
        projectImage.alt = `${project.projectName} Image`;
        projectCard.appendChild(projectImage);

        const projectInfo = document.createElement('div');
        projectInfo.className = 'project-info';

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.projectDescription;
        projectInfo.appendChild(projectDescription);

        const logosDiv = document.createElement('div');
        logosDiv.className = 'logos';

        projectInfo.appendChild(logosDiv);
        projectCard.appendChild(projectInfo);
        container.appendChild(projectCard);
    });
});