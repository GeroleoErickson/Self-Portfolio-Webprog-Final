
// Hero Section Contents
const heroContent = [
    {
        nav_content: [
            {image: "logoComplete.png"},
            {nav_links: [{
                links: [
                    {href: "#hero-section", name: "Home"},
                    {href: "#about-section", name: "About"},
                    {href: "#skills-section", name: "Skills"},
                    {href: "#projects-section", name: "Projects"},
                    {href: "#contact-section", name: "Contacts"}
                ]
            },
                {socials: [
                    {icon: "facebook.svg",  href: "https://www.facebook.com/ericksondave.geroleo.5?mibextid=ZbWKwL"},
                    {icon: "tik-tok.svg",  href: "https://www.tiktok.com/@xjsjssdkakakssj?_t=8rJIdlt8iYM&_r=1"},
                    {icon: "instagram.svg",  href: "https://www.instagram.com/itsme.dabiii/profilecard/?igsh=MTF0YmNlc3N6eHoxZg=="},
                    {icon: "telegram.svg",  href: "https://t.me/Dabiiisenpai"},
                    {icon: "whatsapp.svg", href: "https://wa.me/09197011930"},
                    {icon: "github.svg", href: "https://github.com/GeroleoErickson"}
                ]}
            
            
            ]}
        ]
    },
    {
        content: [{
            left_content: [
                {h2: "Hello!"},
                {h1: "I am Dave C. Geroleo"},
                {p: "A designer and developer driven by a vision to transform ideas into immersive digital experience."},
                {button: "Explore"}
            ]
        },
        {
            my_self: "hero-mypic.png"
        }]
    }
];

//About Section Contents
const aboutContent = [
    {
        img: "me.png"
    }, 
    {
        about_con_content: [
            {titles: 
                {title: "About Me", 
                caption: "Get to know me"}
            },
            {
                address_con_content: [
                    { title: "Address" },
                    {
                        detail_con: [
                            { address: "Balimbing" },
                            { address: "Boac" },
                            { address: "Marinduque" },
                            { address: "Purok 6: Sitio Paye" }
                        ]
                    },
                    {
                        background_con_content: {
                            title: "Background",
                            paragraph: "I’m a multifaceted creative professional with a passion for visually engaging, user-centered digital experiences. With a strong foundation in UI/UX design, I create intuitive, seamless user journeys that align with business goals. As a graphic designer and digital artist, I combine creative vision with technical skill to bring concepts to life, ensuring aesthetic appeal across digital platforms. My expertise in front-end development bridges design and functionality, transforming visual concepts into responsive, interactive web interfaces. I thrive on translating ideas into impactful digital solutions that connect with users and drive engagement."
                        }
                    },
                    {
                        button: { name: "Show Skills" }
                    }
                ]
            }
        ]
    }
];


//Skills Section Content
const skillsContent = [
    //0
    {titles: 
        {title: "My Skills", 
        caption: "Technologies and Tools"}
    },

    //1
    {skills_con_details: 
        [
            //0
            {skills_card_details: [
                {img_text: {img: "html-Css.png", name: "Html & Css"}},
                {details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos harum assumenda veniam corrupti ducimus quis quod quos asperiores, dicta sunt, ex rem facilis! Possimus ducimus dolorem non omnis itaque accusamus."},
                {years: "1.5 years"}
            ]},

            {skills_card_details: [
                {img_text: {img: "javaScript.png", name: "JavaScript"}},
                {details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos harum assumenda veniam corrupti ducimus quis quod quos asperiores, dicta sunt, ex rem facilis! Possimus ducimus dolorem non omnis itaque accusamus."},
                {years: "1 month"}
            ]},

            {skills_card_details: [
                {img_text: {img: "canva.png", name: "Canva"}},
                {details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos harum assumenda veniam corrupti ducimus quis quod quos asperiores, dicta sunt, ex rem facilis! Possimus ducimus dolorem non omnis itaque accusamus."},
                {years: "5 years"}
            ]},

            {skills_card_details: [
                {img_text: {img: "figma.png", name: "Figma"}},
                {details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos harum assumenda veniam corrupti ducimus quis quod quos asperiores, dicta sunt, ex rem facilis! Possimus ducimus dolorem non omnis itaque accusamus."},
                {years: "3 years"}
            ]}
        ]
        
        
    },

    //2
    {button: 
        {name: "Contact me"}
    }
];

//projects section Content
const projectsContent = [
    //0
    {titles: 
        {title: "My Projects", 
        caption: "List of works that I created."}
    },

    //1
    {projects_con: [
        {projects_card: [
            {img: "PCC.png"},
            {details: 
                {title: "PCC Alab Carabaoan", 
                desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sint veritatis praesentium id, recusandae cupiditate.",
                small: "view"}
            }
        ]},

        {projects_card: [
            {img: "pharmaArshie.jpg"},
            {details: 
                {title: "PharmaArshie Med. App.", 
                desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sint veritatis praesentium id, recusandae cupiditate.",
                small: "view"}
            }
        ]},

        {projects_card: [
            {img: "snubbyland.png"},
            {details: 
                {title: "World Hardest Game Semi 3D", 
                desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sint veritatis praesentium id, recusandae cupiditate.",
                small: "view"}
            }
        ]},

        {projects_card: [
            {img: "MarSU-rendered-logo.png"},
            {details: 
                {title: "MarSU Official Logo", 
                desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sint veritatis praesentium id, recusandae cupiditate.",
                small: "view"}
            }
        ]},

        {projects_card: [
            {img: "brangay-Ibaba-logo.png"},
            {details: 
                {title: "Ibaba Crossroad Logo", 
                desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sint veritatis praesentium id, recusandae cupiditate.",
                small: "view"}
            }
        ]},

        {projects_card: [
            {img: "osiris.png"},
            {details: 
                {title: "IX Osiris Gaming Logo", 
                desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sint veritatis praesentium id, recusandae cupiditate.",
                small: "view"}
            }
        ]},

        {projects_card: [
            {img: "luminaries-magazine.png"},
            {details: 
                {title: "The Luminaries Magazine Cover", 
                desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sint veritatis praesentium id, recusandae cupiditate.",
                small: "view"}
            }
        ]},

        {projects_card: [
            {img: "cryptoKnights.png"},
            {details: 
                {title: "Crypto Knights Graphics", 
                desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sint veritatis praesentium id, recusandae cupiditate.",
                small: "view"}
            }
        ]}
    ]},

    //2
    {button: 
        {name: "Show Projects"}
    }
];






//Sections
const heroSection = document.getElementById("hero-section");
const AboutSection = document.getElementById("about-section");
const SkillsSection = document.getElementById("skills-section");
const ProjectSection = document.getElementById("projects-section");
const ContacsSection = document.getElementById("contact-section");
const FooterSection = document.getElementById("footer-section");


//Triggers
const startBtn = document.getElementById("showHero");

startBtn.onclick = function(){
    document.querySelector(".greetings").style.display = "none";
    showHero();
    addLink(0);
}


function addLink(index) {
    const navigation = document.getElementById("links");
    const links = document.querySelector(".links");
    
        const link = document.createElement("a");
        link.href = heroContent[0].nav_content[1].nav_links[0].links[index].href;
        link.textContent = heroContent[0].nav_content[1].nav_links[0].links[index].name;
        links.appendChild(link);
    
        navigation.appendChild(links);
    }


//   ${heroContent[0].nav_content[1].nav_links[0].links.map(link => `<a href="${link.href}">${link.name}</a>`).join('')}

//show Hero Section
function showHero() {
    heroSection.style.display = "flex";
    heroSection.style.alignItems="start"

    heroSection.innerHTML = `
    <nav class="d-flex">
        <img src="assets/${heroContent[0].nav_content[0].image}" alt="logo" width="40px">
        <div class="navlinks d-flex" id="navlinks">
            <div class="links d-flex" id="links">
                
            </div>

            <hr>

            <div class="socials d-flex">
                ${heroContent[0].nav_content[1].nav_links[1].socials.map(social => `
                    <a href="${social.href}" target="_blank" class="d-flex">
                        <img src="assets/socials/${social.icon}" alt="${social.icon}" width="20px">
                    </a>
                `).join('')}
            </div>
        </div>
    </nav>

    <div class="hero-content-con d-flex">
        <div class="left-hero-text d-flex-col">
            <h2 class="floatUp">${heroContent[1].content[0].left_content[0].h2}</h2>
            <h1 class="floatUp">${heroContent[1].content[0].left_content[1].h1}</h1>
            <p class="floatUp">${heroContent[1].content[0].left_content[2].p}</p>
            <button id="showAbout" class="animated-buttons">${heroContent[1].content[0].left_content[3].button}</button>
        </div>

        <img class="floatUp" src="assets/hero-pictures/${heroContent[1].content[1].my_self}" alt="me" width="700px">
    </div>

    <p class="characteristics animated-buttons ed">Front End Developer</p>
    <p class="characteristics animated-buttons ui-ux">UI/UX Desiner</p>
    <p class="characteristics animated-buttons gd">Graphics Desiner</p>
    <p class="characteristics animated-buttons da" >Digital Artist</p>
    `;

    const showAboutBtn = document.getElementById('showAbout');
    showAboutBtn.onclick = function(){
        location.href="#about-section";
        AboutSection.style.display="flex";
        showAbout();
        addLink(1);
    }
}




//show about
function showAbout() {
    AboutSection.style.display = "flex";
    AboutSection.innerHTML = `
        <img src="assets/about-pictures/${aboutContent[0].img}" class="slide-right" alt="me" width="500px">
        <div class="about-con d-flex-col">
            <div class="titles d-flex-col slide-left">
                <h2>${aboutContent[1].about_con_content[0].titles.title}</h2>
                <p>${aboutContent[1].about_con_content[0].titles.caption}</p>
            </div>
            
            <div class="address-con location d-flex-col slide-left" >
                <h3>${aboutContent[1].about_con_content[1].address_con_content[0].title}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="35px" fill="#e8eaed">
                    <path d="M480-122.39q-11.69 0-23.38-4.03-11.7-4.04-21.16-12.5-53.84-49.62-100.77-102.2-46.92-52.57-81.57-105.11-34.66-52.54-54.85-104.15-20.19-51.62-20.19-99.7 0-138.46 89.57-224.19Q357.23-860 480-860t212.35 85.73q89.57 85.73 89.57 224.19 0 48.08-20.19 99.5-20.19 51.43-54.65 104.16-34.47 52.73-81.39 105.11-46.92 52.39-100.77 102-9.32 8.46-21.19 12.69-11.86 4.23-23.73 4.23Zm.07-363q29.85 0 51.04-21.26 21.2-21.26 21.2-51.11 0-29.85-21.26-51.05Q509.79-630 479.93-630q-29.85 0-51.04 21.26-21.2 21.26-21.2 51.12 0 29.85 21.26 51.04 21.26 21.19 51.12 21.19Z"/>
                </svg>
                <div class="address-detail-con d-flex">
                    <hr>
                    <div class="detail-con">
                        ${aboutContent[1].about_con_content[1].address_con_content[1].detail_con.map(details => `<p>${details.address}</p>`).join('')}
                    </div>
                </div>
            </div>
    
            <div class="address-con d-flex-col slide-left">
                <h3>${aboutContent[1].about_con_content[1].address_con_content[2].background_con_content.title}</h3>
                <p>${aboutContent[1].about_con_content[1].address_con_content[2].background_con_content.paragraph}</p>
            </div>
            
            <button class="icons d-flex-col animated-buttons" id="showSkills">
                ${aboutContent[1].about_con_content[1].address_con_content[3].button.name}
                <svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="60px" fill="#1dd3b0">
                    <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/>
                </svg>
            </button>
        </div>
    `;

    const showSkillsBtn = document.getElementById("showSkills");
    showSkillsBtn.onclick = function(){
        location.href="#skills-section";
        SkillsSection.style.display="flex";
        showSkills();
        addLink(2);
    }
}


//Show Skills
function showSkills(){
    SkillsSection.innerHTML = `
        <div class="titles d-flex-col">
            <h2>${skillsContent[0].titles.title}</h2>
            <p>${skillsContent[0].titles.caption}</p>
        </div>

        <div class="skills-con d-flex">
        ${skillsContent[1].skills_con_details.map(skills => `
            <div class="skills-card d-flex-col floatUp">
                <div class="img-text">
                    <img src="assets/my-skills/${skills.skills_card_details[0].img_text.img}" alt="${skills.skills_card_details[0].img_text.name}" width="200px">
                    <h3>${skills.skills_card_details[0].img_text.name}</h3>
                </div>

                <p>${skills.skills_card_details[1].details}</p>

                <h1 class="percentage">${skills.skills_card_details[2].years}</h1>
            </div>`).join('')}
        </div>

        <button class="icons d-flex-col animated-buttons" id="showProjects">
            ${skillsContent[2].button.name}
            <svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="60px" fill="#1dd3b0">
                <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/>
            </svg>
        </button>
    `;

    const showProjectsBtn = document.getElementById("showProjects");
    showProjectsBtn.onclick = function(){
        location.href="#projects-section";
        ProjectSection.style.display="flex";
        showProjects();
        
        addLink(3);
    }
}


//Show Projects
function showProjects() {
    ProjectSection.innerHTML = `
        <div class="titles d-flex-col">
            <h2>${projectsContent[0].titles.title}</h2>
            <p>${projectsContent[0].titles.caption}</p>
        </div>

        <div class="projects-con">
            ${projectsContent[1].projects_con.map(project => `
                <div class="projects-card d-flex-col">
                    <img src="assets/projects/${project.projects_card[0].img}" alt="${project.projects_card[1].details.title}" width="200px">
                    <div class="gradient-text d-flex-col beat">
                        <h3>${project.projects_card[1].details.title}</h3>
                        <p>${project.projects_card[1].details.desc}</p>
                        <a href="#" target="_blank"><small>${project.projects_card[1].details.small}</small></a>
                    </div>
                </div>
            `).join('')}
        </div>

        <button class="icons d-flex-col animated-buttons" id="showContacts">
            ${projectsContent[2].button.name}
            <svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="60px" fill="#ffb703">
                <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/>
            </svg>
        </button>
    `;

    const showContactsBtn = document.getElementById("showContacts");
    showContactsBtn.onclick = function(){
        location.href="#contact-section";
        [ContacsSection, FooterSection].forEach(section => section.style.display="flex");
        showContacts();
        showFooter();
        addLink(4);
    }
}

const ContactsContent = [
    {titles: 
        {title: "Contact Me", 
        caption: "For inquiries. You can send me an email"}},
    {formFields: 
        {firstName: "First Name", lastName: "Last Name", email: "Email Address", message: "Your message here"}}
];

function showContacts() {
    const ContactSection = document.getElementById("contact-section");
    
    ContactSection.innerHTML = `
        <div class="titles d-flex-col">
            <h2>${ContactsContent[0].titles.title}</h2>
            <p>${ContactsContent[0].titles.caption}</p>
        </div>
        <div class="contact-con">
            <form action="" class="d-flex-col">
                <div class="name-form d-flex">
                    <input type="text" placeholder="${ContactsContent[1].formFields.firstName}">
                    <input type="text" placeholder="${ContactsContent[1].formFields.lastName}">
                </div>

                <div class="email-form d-flex-col">
                    <input type="email" name="email" id="email" placeholder="${ContactsContent[1].formFields.email}">
                    <textarea class="message" placeholder="${ContactsContent[1].formFields.message}"></textarea>
                </div>

                <div class="buttons d-flex">
                    <button type="submit" class="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M792-443 176-183q-20 8-38-3.5T120-220v-520q0-22 18-33.5t38-3.5l616 260q25 11 25 37t-25 37ZM200-280l474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/></svg>Sent</button>
                    <button type="reset" class="d-flex">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M690-240h150q17 0 28.5 11.5T880-200q0 17-11.5 28.5T840-160H610l80-80Zm-483 80q-8 0-15.5-3t-13.5-9l-73-73q-23-23-23.5-57t22.5-58l440-456q23-24 56.5-24t56.5 23l199 199q23 23 23 57t-23 57L532-172q-6 6-13.5 9t-15.5 3H207Zm279-80 314-322-198-198-442 456 64 64h262Zm-6-240Z"/></svg>
                        Clear</button>
                </div>
            </form>
        </div>
    `;
}




function showFooter(){
    FooterSection.innerHTML = `
    <img src="assets/${heroContent[0].nav_content[0].image}" alt="logo" width="200px">
    <div class="foot-nav-links d-flex-col">
        <h3>Nav Links</h3>
        <div class="foot-links d-flex">
            ${heroContent[0].nav_content[1].nav_links[0].links.map(link => 
                `<a href="${link.href}">${link.name}</a>`).join('')}
        </div>
    </div>

    <div class="socials-con d-flex-col">
        <h3>Socials</h3>
        <div class="socials d-flex">
                ${heroContent[0].nav_content[1].nav_links[1].socials.map(social => `
                    <a href="${social.href}" target="_blank">
                        <img src="assets/socials/${social.icon}" alt="${social.icon}" width="20px">
                    </a>
                `).join('')}
        </div>
    </div>
    <p>&copy; 2024-2025 Dave Geroleo. Alrights Reserve</p>
`;

}


//<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="330" zoomAndPan="magnify" viewBox="0 0 247.5 247.500006" height="330" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="133d1a34eb"><path d="M 61 0 L 184.933594 0 L 184.933594 246 L 61 246 Z M 61 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#133d1a34eb)"><path fill="#fb8500" d="M 145.363281 245.9375 L 145.363281 135.265625 L 178.960938 135.265625 L 184.449219 86.082031 L 145.363281 86.082031 L 145.363281 62.125 C 145.363281 49.460938 145.683594 36.890625 163.382812 36.890625 L 181.3125 36.890625 L 181.3125 1.726562 C 181.3125 1.195312 165.910156 0.00390625 150.335938 0.00390625 C 117.800781 0.00390625 97.429688 20.382812 97.429688 57.796875 L 97.429688 86.082031 L 61.480469 86.082031 L 61.480469 135.265625 L 97.429688 135.265625 L 97.429688 245.9375 Z M 145.363281 245.9375 " fill-opacity="1" fill-rule="evenodd"/></g></svg>
            // <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="330" zoomAndPan="magnify" viewBox="0 0 247.5 247.500006" height="330" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="#fb8500" d="M 122.96875 22.152344 C 155.796875 22.152344 159.6875 22.277344 172.652344 22.875 C 186.058594 23.484375 199.863281 26.542969 209.628906 36.308594 C 219.484375 46.160156 222.445312 59.832031 223.0625 73.277344 C 223.652344 86.242188 223.777344 90.132812 223.777344 122.96875 C 223.777344 155.796875 223.652344 159.6875 223.0625 172.652344 C 222.457031 185.988281 219.328125 199.921875 209.628906 209.628906 C 199.769531 219.484375 186.109375 222.445312 172.652344 223.0625 C 159.6875 223.652344 155.796875 223.777344 122.96875 223.777344 C 90.132812 223.777344 86.242188 223.652344 73.277344 223.0625 C 60.046875 222.457031 45.929688 219.257812 36.308594 209.628906 C 26.496094 199.816406 23.484375 186.015625 22.875 172.652344 C 22.277344 159.6875 22.152344 155.796875 22.152344 122.96875 C 22.152344 90.132812 22.277344 86.242188 22.875 73.277344 C 23.476562 59.996094 26.636719 45.980469 36.308594 36.308594 C 46.144531 26.46875 59.867188 23.484375 73.277344 22.875 C 86.242188 22.277344 90.132812 22.152344 122.96875 22.152344 M 122.96875 0 C 89.570312 0 85.382812 0.144531 72.261719 0.738281 C 53.253906 1.609375 34.378906 6.898438 20.636719 20.636719 C 6.84375 34.433594 1.609375 53.265625 0.738281 72.261719 C 0.144531 85.382812 0 89.570312 0 122.96875 C 0 156.363281 0.144531 160.554688 0.738281 173.667969 C 1.609375 192.65625 6.914062 211.582031 20.636719 225.296875 C 34.421875 239.074219 53.285156 244.320312 72.261719 245.191406 C 85.382812 245.785156 89.570312 245.929688 122.96875 245.929688 C 156.363281 245.929688 160.554688 245.785156 173.667969 245.191406 C 192.664062 244.320312 211.5625 239.027344 225.296875 225.296875 C 239.097656 211.492188 244.320312 192.664062 245.191406 173.667969 C 245.785156 160.554688 245.929688 156.363281 245.929688 122.96875 C 245.929688 89.570312 245.785156 85.382812 245.191406 72.261719 C 244.320312 53.253906 239.027344 34.367188 225.296875 20.636719 C 211.53125 6.875 192.617188 1.597656 173.667969 0.738281 C 160.554688 0.144531 156.363281 0 122.96875 0 Z M 122.96875 0 " fill-opacity="1" fill-rule="nonzero"/><path fill="#fb8500" d="M 122.96875 59.820312 C 88.09375 59.820312 59.820312 88.09375 59.820312 122.96875 C 59.820312 157.835938 88.09375 186.109375 122.96875 186.109375 C 157.835938 186.109375 186.109375 157.835938 186.109375 122.96875 C 186.109375 88.09375 157.835938 59.820312 122.96875 59.820312 Z M 122.96875 163.953125 C 100.332031 163.953125 81.980469 145.597656 81.980469 122.96875 C 81.980469 100.332031 100.332031 81.980469 122.96875 81.980469 C 145.597656 81.980469 163.953125 100.332031 163.953125 122.96875 C 163.953125 145.597656 145.597656 163.953125 122.96875 163.953125 Z M 122.96875 163.953125 " fill-opacity="1" fill-rule="nonzero"/><path fill="#fb8500" d="M 203.363281 57.324219 C 203.363281 58.292969 203.269531 59.253906 203.082031 60.203125 C 202.890625 61.148438 202.613281 62.078125 202.238281 62.96875 C 201.871094 63.863281 201.417969 64.710938 200.875 65.519531 C 200.34375 66.328125 199.730469 67.074219 199.039062 67.757812 C 198.355469 68.441406 197.613281 69.050781 196.808594 69.59375 C 196.003906 70.128906 195.152344 70.585938 194.253906 70.957031 C 193.359375 71.324219 192.441406 71.605469 191.484375 71.792969 C 190.539062 71.988281 189.578125 72.082031 188.605469 72.082031 C 187.640625 72.082031 186.683594 71.988281 185.730469 71.792969 C 184.78125 71.605469 183.859375 71.324219 182.960938 70.957031 C 182.066406 70.585938 181.21875 70.128906 180.414062 69.59375 C 179.609375 69.050781 178.859375 68.441406 178.171875 67.757812 C 177.488281 67.074219 176.878906 66.328125 176.335938 65.519531 C 175.800781 64.710938 175.34375 63.863281 174.976562 62.96875 C 174.605469 62.078125 174.324219 61.148438 174.136719 60.203125 C 173.949219 59.253906 173.855469 58.292969 173.855469 57.324219 C 173.855469 56.351562 173.949219 55.394531 174.136719 54.445312 C 174.324219 53.496094 174.605469 52.570312 174.976562 51.675781 C 175.34375 50.78125 175.800781 49.929688 176.335938 49.125 C 176.878906 48.316406 177.488281 47.574219 178.171875 46.890625 C 178.859375 46.207031 179.609375 45.59375 180.414062 45.054688 C 181.21875 44.511719 182.066406 44.0625 182.960938 43.691406 C 183.859375 43.316406 184.78125 43.039062 185.730469 42.847656 C 186.683594 42.660156 187.640625 42.566406 188.605469 42.566406 C 189.578125 42.566406 190.539062 42.660156 191.484375 42.847656 C 192.441406 43.039062 193.359375 43.316406 194.253906 43.691406 C 195.152344 44.0625 196.003906 44.511719 196.808594 45.054688 C 197.613281 45.59375 198.355469 46.207031 199.039062 46.890625 C 199.730469 47.574219 200.34375 48.316406 200.875 49.125 C 201.417969 49.929688 201.871094 50.78125 202.238281 51.675781 C 202.613281 52.570312 202.890625 53.496094 203.082031 54.445312 C 203.269531 55.394531 203.363281 56.351562 203.363281 57.324219 Z M 203.363281 57.324219 " fill-opacity="1" fill-rule="nonzero"/></svg>
            // <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="330" zoomAndPan="magnify" viewBox="0 0 247.5 247.500006" height="330" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="cbeec6e774"><path d="M 0 0 L 245.636719 0 L 245.636719 246 L 0 246 Z M 0 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#cbeec6e774)"><path fill="#fb8500" d="M 209.6875 35.738281 C 186.671875 12.707031 156.070312 0.0117188 123.480469 0 C 56.308594 0 1.636719 54.660156 1.609375 121.859375 C 1.597656 143.339844 7.214844 164.304688 17.882812 182.789062 L 0.585938 245.929688 L 65.179688 228.984375 C 82.980469 238.695312 103.027344 243.8125 123.414062 243.820312 L 123.46875 243.820312 C 190.625 243.820312 245.308594 189.152344 245.335938 121.953125 C 245.355469 89.394531 232.691406 58.769531 209.6875 35.738281 Z M 123.480469 223.234375 L 123.4375 223.234375 C 105.261719 223.234375 87.4375 218.347656 71.882812 209.117188 L 68.1875 206.921875 L 29.851562 216.972656 L 40.085938 179.589844 L 37.679688 175.757812 C 27.535156 159.628906 22.183594 140.988281 22.195312 121.859375 C 22.21875 66.015625 67.664062 20.574219 123.53125 20.574219 C 150.578125 20.574219 176.015625 31.128906 195.136719 50.269531 C 214.253906 69.421875 224.78125 94.867188 224.769531 121.929688 C 224.738281 177.796875 179.304688 223.234375 123.480469 223.234375 Z M 179.039062 147.375 C 175.996094 145.847656 161.023438 138.480469 158.226562 137.464844 C 155.4375 136.449219 153.40625 135.9375 151.375 138.980469 C 149.332031 142.027344 143.507812 148.890625 141.726562 150.933594 C 139.957031 152.960938 138.171875 153.214844 135.128906 151.6875 C 132.082031 150.160156 122.269531 146.957031 110.636719 136.570312 C 101.589844 128.5 95.472656 118.527344 93.703125 115.472656 C 91.925781 112.417969 93.515625 110.78125 95.03125 109.265625 C 96.40625 107.902344 98.074219 105.707031 99.601562 103.925781 C 101.140625 102.160156 101.644531 100.894531 102.664062 98.851562 C 103.679688 96.824219 103.175781 95.042969 102.410156 93.515625 C 101.644531 92 95.554688 77.003906 93.023438 70.910156 C 90.554688 64.964844 88.042969 65.777344 86.167969 65.683594 C 84.394531 65.589844 82.363281 65.585938 80.328125 65.585938 C 78.300781 65.585938 74.996094 66.339844 72.210938 69.394531 C 69.421875 72.449219 61.554688 79.816406 61.554688 94.792969 C 61.554688 109.789062 72.464844 124.269531 73.984375 126.296875 C 75.5 128.324219 95.449219 159.089844 126 172.273438 C 133.261719 175.410156 138.945312 177.285156 143.355469 178.691406 C 150.65625 181.007812 157.296875 180.675781 162.539062 179.898438 C 168.390625 179.027344 180.554688 172.53125 183.097656 165.417969 C 185.636719 158.308594 185.636719 152.199219 184.867188 150.941406 C 184.113281 149.65625 182.082031 148.902344 179.039062 147.375 Z M 179.039062 147.375 " fill-opacity="1" fill-rule="evenodd"/></g></svg>
            // <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="330" zoomAndPan="magnify" viewBox="0 0 247.5 247.500006" height="330" preserveAspectRatio="xMidYMid meet" version="1.0"><path fill="#fb8500" d="M 122.96875 22.152344 C 155.796875 22.152344 159.6875 22.277344 172.652344 22.875 C 186.058594 23.484375 199.863281 26.542969 209.628906 36.308594 C 219.484375 46.160156 222.445312 59.832031 223.0625 73.277344 C 223.652344 86.242188 223.777344 90.132812 223.777344 122.96875 C 223.777344 155.796875 223.652344 159.6875 223.0625 172.652344 C 222.457031 185.988281 219.328125 199.921875 209.628906 209.628906 C 199.769531 219.484375 186.109375 222.445312 172.652344 223.0625 C 159.6875 223.652344 155.796875 223.777344 122.96875 223.777344 C 90.132812 223.777344 86.242188 223.652344 73.277344 223.0625 C 60.046875 222.457031 45.929688 219.257812 36.308594 209.628906 C 26.496094 199.816406 23.484375 186.015625 22.875 172.652344 C 22.277344 159.6875 22.152344 155.796875 22.152344 122.96875 C 22.152344 90.132812 22.277344 86.242188 22.875 73.277344 C 23.476562 59.996094 26.636719 45.980469 36.308594 36.308594 C 46.144531 26.46875 59.867188 23.484375 73.277344 22.875 C 86.242188 22.277344 90.132812 22.152344 122.96875 22.152344 M 122.96875 0 C 89.570312 0 85.382812 0.144531 72.261719 0.738281 C 53.253906 1.609375 34.378906 6.898438 20.636719 20.636719 C 6.84375 34.433594 1.609375 53.265625 0.738281 72.261719 C 0.144531 85.382812 0 89.570312 0 122.96875 C 0 156.363281 0.144531 160.554688 0.738281 173.667969 C 1.609375 192.65625 6.914062 211.582031 20.636719 225.296875 C 34.421875 239.074219 53.285156 244.320312 72.261719 245.191406 C 85.382812 245.785156 89.570312 245.929688 122.96875 245.929688 C 156.363281 245.929688 160.554688 245.785156 173.667969 245.191406 C 192.664062 244.320312 211.5625 239.027344 225.296875 225.296875 C 239.097656 211.492188 244.320312 192.664062 245.191406 173.667969 C 245.785156 160.554688 245.929688 156.363281 245.929688 122.96875 C 245.929688 89.570312 245.785156 85.382812 245.191406 72.261719 C 244.320312 53.253906 239.027344 34.367188 225.296875 20.636719 C 211.53125 6.875 192.617188 1.597656 173.667969 0.738281 C 160.554688 0.144531 156.363281 0 122.96875 0 Z M 122.96875 0 " fill-opacity="1" fill-rule="nonzero"/><path fill="#fb8500" d="M 122.96875 59.820312 C 88.09375 59.820312 59.820312 88.09375 59.820312 122.96875 C 59.820312 157.835938 88.09375 186.109375 122.96875 186.109375 C 157.835938 186.109375 186.109375 157.835938 186.109375 122.96875 C 186.109375 88.09375 157.835938 59.820312 122.96875 59.820312 Z M 122.96875 163.953125 C 100.332031 163.953125 81.980469 145.597656 81.980469 122.96875 C 81.980469 100.332031 100.332031 81.980469 122.96875 81.980469 C 145.597656 81.980469 163.953125 100.332031 163.953125 122.96875 C 163.953125 145.597656 145.597656 163.953125 122.96875 163.953125 Z M 122.96875 163.953125 " fill-opacity="1" fill-rule="nonzero"/><path fill="#fb8500" d="M 203.363281 57.324219 C 203.363281 58.292969 203.269531 59.253906 203.082031 60.203125 C 202.890625 61.148438 202.613281 62.078125 202.238281 62.96875 C 201.871094 63.863281 201.417969 64.710938 200.875 65.519531 C 200.34375 66.328125 199.730469 67.074219 199.039062 67.757812 C 198.355469 68.441406 197.613281 69.050781 196.808594 69.59375 C 196.003906 70.128906 195.152344 70.585938 194.253906 70.957031 C 193.359375 71.324219 192.441406 71.605469 191.484375 71.792969 C 190.539062 71.988281 189.578125 72.082031 188.605469 72.082031 C 187.640625 72.082031 186.683594 71.988281 185.730469 71.792969 C 184.78125 71.605469 183.859375 71.324219 182.960938 70.957031 C 182.066406 70.585938 181.21875 70.128906 180.414062 69.59375 C 179.609375 69.050781 178.859375 68.441406 178.171875 67.757812 C 177.488281 67.074219 176.878906 66.328125 176.335938 65.519531 C 175.800781 64.710938 175.34375 63.863281 174.976562 62.96875 C 174.605469 62.078125 174.324219 61.148438 174.136719 60.203125 C 173.949219 59.253906 173.855469 58.292969 173.855469 57.324219 C 173.855469 56.351562 173.949219 55.394531 174.136719 54.445312 C 174.324219 53.496094 174.605469 52.570312 174.976562 51.675781 C 175.34375 50.78125 175.800781 49.929688 176.335938 49.125 C 176.878906 48.316406 177.488281 47.574219 178.171875 46.890625 C 178.859375 46.207031 179.609375 45.59375 180.414062 45.054688 C 181.21875 44.511719 182.066406 44.0625 182.960938 43.691406 C 183.859375 43.316406 184.78125 43.039062 185.730469 42.847656 C 186.683594 42.660156 187.640625 42.566406 188.605469 42.566406 C 189.578125 42.566406 190.539062 42.660156 191.484375 42.847656 C 192.441406 43.039062 193.359375 43.316406 194.253906 43.691406 C 195.152344 44.0625 196.003906 44.511719 196.808594 45.054688 C 197.613281 45.59375 198.355469 46.207031 199.039062 46.890625 C 199.730469 47.574219 200.34375 48.316406 200.875 49.125 C 201.417969 49.929688 201.871094 50.78125 202.238281 51.675781 C 202.613281 52.570312 202.890625 53.496094 203.082031 54.445312 C 203.269531 55.394531 203.363281 56.351562 203.363281 57.324219 Z M 203.363281 57.324219 " fill-opacity="1" fill-rule="nonzero"/></svg>