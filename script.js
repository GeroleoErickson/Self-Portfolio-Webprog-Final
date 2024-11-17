const finalstyle = document.querySelector('link[href="styles.css"]');
finalstyle.disabled = true;

const flexes = document.querySelector('link[href="flexes.css"]');
flexes.disabled = true;

const textDesign = document.querySelector('link[href="text.css"]');
textDesign.disabled = true;

const colors = document.querySelector('link[href="colors.css"]');
colors.disabled = true;






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
                {button: "Fix Layout"}
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
                        button: { name: "Add font Styles" }
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
                {details: "I have 1.5 years of experience working with HTML and CSS. I can build responsive and visually appealing layouts that look great on different devices. My skills ensure a clean, organized structure and style for web pages."},
                {years: "1.5 years"}
            ]},

            {skills_card_details: [
                {img_text: {img: "javaScript.png", name: "JavaScript"}},
                {details: "I have been working with JavaScript for about a month, learning to add interactive features to websites. This skill allows me to create dynamic elements like animations and responsive forms. I’m continuing to deepen my knowledge to enhance user experience further."},
                {years: "1 month"}
            ]},

            {skills_card_details: [
                {img_text: {img: "canva.png", name: "Canva"}},
                {details: "With 5 years of experience in Canva, I can create a wide range of professional and eye-catching designs. I specialize in creating visuals for social media, presentations, and marketing materials. My Canva skills allow me to quickly produce polished, visually appealing content."},
                {years: "5 years"}
            ]},

            {skills_card_details: [
                {img_text: {img: "figma.png", name: "Figma"}},
                {details: "I’ve been using Figma for 3 years to design clean, user-friendly interfaces for websites and apps. I focus on creating intuitive layouts that improve the user experience. My Figma skills bridge design and functionality, making concepts come to life effectively."},
                {years: "3 years"}
            ]}
        ]
        
        
    },

    //2
    {button: 
        {name: "Add Colors"}
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
                desc: "Interactive Programming Final project during my 2nd Year using php html Css and JavaScript.",
                small: "view"}
            }
        ]},

        {projects_card: [
            {img: "pharmaArshie.jpg"},
            {details: 
                {title: "PharmaArshie Med. App.", 
                desc: "This was created during my second year for my Mobile Development subject. It features a responsive layout and was embedded as an app, making it a hybrid application.",
                small: "view"}
            }
        ]},

        {projects_card: [
            {img: "snubbyland.png"},
            {details: 
                {title: "World Hardest Game Semi 3D", 
                desc: "We recreated the world's hardest game, The Snubby Land, adding a semi-3D twist. This was made using Unity.",
                small: "view"}
            }
        ]},

        {projects_card: [
            {img: "MarSU-rendered-logo.png"},
            {details: 
                {title: "MarSU Official Logo", 
                desc: "This was a competition at Marinduque State University, and they now use this as their official university logo. It was created entirely in Figma for design and Photopea for rendering.",
                small: "view"}
            }
        ]},

        {projects_card: [
            {img: "brangay-Ibaba-logo.png"},
            {details: 
                {title: "Ibaba Crossroad Logo", 
                desc: "This was a commission to create a logo for a barangay. I made it using Figma and Photopea.",
                small: "view"}
            }
        ]},

        {projects_card: [
            {img: "osiris.png"},
            {details: 
                {title: "IX Osiris Gaming Logo", 
                desc: "An Call of duty mobile Esports Logo for my team. This was made using pure figma.",
                small: "view"}
            }
        ]},

        {projects_card: [
            {img: "luminaries-magazine.png"},
            {details: 
                {title: "The Luminaries Magazine Cover", 
                desc: "This was a commissioned magazine for a student from another university. It was created using only Canva.",
                small: "view"}
            }
        ]},

        {projects_card: [
            {img: "cryptoKnights.png"},
            {details: 
                {title: "Crypto Knights Intram Shirt", 
                desc: "This was created for my department as they compete during our Intramurals at Marinduque State University. I made this using ibisPaint, Canva, and Figma.",
                small: "view"}
            }
        ]}
    ]},

    //2
    {button: 
        {name: "Add Animations"}
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
}


// function addLink(index) {
//     const navigation = document.getElementById("links");
//     const links = document.querySelector(".links");
    
//         const link = document.createElement("a");
//         link.href = heroContent[0].nav_content[1].nav_links[0].links[index].href;
//         link.textContent = heroContent[0].nav_content[1].nav_links[0].links[index].name;
//         links.appendChild(link);
    
//         navigation.appendChild(links);
//     }


//   ${heroContent[0].nav_content[1].nav_links[0].links.map(link => `<a href="${link.href}">${link.name}</a>`).join('')}

//show Hero Section
function showHero() {
    heroSection.style.display = "flex";
    heroSection.style.alignItems="start"

    heroSection.innerHTML = `
    <nav class="d-flex">
        <img src="assets/${heroContent[0].nav_content[0].image}" alt="logo" width="150px">
        <div class="navlinks d-flex" id="navlinks">
            <div class="links d-flex" id="links">
                ${heroContent[0].nav_content[1].nav_links[0].links.map(link => `
                    <a href="${link.href}" target="_self">${link.name}</a>
                `).join('')}
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

    <p class="characteristics animated-buttons ed">Front-End Developer</p>
    <p class="characteristics animated-buttons ui-ux">UI/UX Designer</p>
    <p class="characteristics animated-buttons gd">Graphics Designer</p>
    <p class="characteristics animated-buttons da" >Digital Artist</p>
    `;

    const showAboutBtn = document.getElementById('showAbout');
    showAboutBtn.onclick = function(){

        AboutSection.style.display="flex";
        const defaultdesign = document.querySelector('link[href="default.css"]');
        defaultdesign.disabled = true;


        setTimeout(() => {
            flexes.disabled = false;
        }, 200);

        setTimeout(() => {
            showAbout();
            location.href="#about-section";
        }, 500);

        
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
        heroContent[1].content[0].left_content[3].button = 'Know Me';
        showHero();


        location.href="#skills-section";
        SkillsSection.style.display="flex";
        showSkills();


        setTimeout(()=>{
            textDesign.disabled = false
        }, 800);
        ;
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
        aboutContent[1].about_con_content[1].address_con_content[3].button.name = "";
        showAbout();
        

        location.href="#projects-section";
        ProjectSection.style.display="flex";
        showProjects();

        skillsContent[2].button.name ="";
        

        setTimeout(()=>{
            colors.disabled = false;
        }, 500);
        
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
        skillsContent[2].button.name = ""
        showSkills();
        

        location.href="#contact-section";
        [ContacsSection, FooterSection].forEach(section => section.style.display="flex");
        finalstyle.disabled = false;
        showContacts();
        showFooter();
        
        setTimeout(() => {
            location.href = "#hero-section";
            showHero();
        }, 2000); 

        
    }

    
}

//Show Contacts
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
        <div class="contact-con floatUp">
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
    projectsContent[2].button.name = "";
    showProjects();
}

//Show Footer
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


//floating anim
// document.querySelectorAll('.floatUp').forEach((float)=>{
//     float.classList.add('floating-upwards-default');
// });

// floating_anim();

// const floatUpObserver = new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add('floating-upwards-final');
//         }
//         else{
//             entry.target.classList.remove('floating-upwards-final');
//         }
//     });
// });

// function floating_anim(){
//     const temp = document.querySelectorAll('.floating-upwards-default');
//     temp.forEach((el)=> floatUpObserver.observe(el));
// }



