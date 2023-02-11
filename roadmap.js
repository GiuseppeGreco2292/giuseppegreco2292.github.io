import data from './files/roadmap.json' assert { type: 'json' };

const roadmapDiv = document.getElementById('roadmap-content');
dataToRoadmap(data, roadmapDiv);

function dataToRoadmap(data, roadmapDiv) {
    const sections = Object.values(data).map((section) => processSection(section));

    sections.forEach((section) => roadmapDiv.append(section));
}

function processSection(section) {
    if (!'label' in section || !'content' in section) return null;

    const content = section.content;
    const newSection = document.createElement("div");
    const sectionTitle = document.createElement("h3");

    sectionTitle.innerHTML = section.label;
    newSection.appendChild(sectionTitle);

    processSectionContent(content, newSection);

    return newSection;
}

function processSectionContent(content, newSection) {
    const ul = document.createElement('ul');
    const items = Object.values(content);

    items.forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = item.label;
        ul.appendChild(li);
    });

    newSection.appendChild(ul);
}