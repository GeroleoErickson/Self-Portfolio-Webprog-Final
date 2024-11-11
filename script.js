
// Hero Section Contents
const heroContent = [
    {
        nav_content: [
            {image: "logoOrangeComplete.png"},
            {nav_links: [{
                links: [
                    {href: "#home-section", name: "Home"},
                    {href: "#about-section", name: "About"},
                    {href: "#skills-section", name: "Skills"},
                    {href: "#projects-section", name: "Projects"},
                    {href: "#contact-section", name: "Contacts"}
                ]
            }]}
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
            {
                h2: "About Me"
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
                {years: "1.5 years"}
            ]},

            {skills_card_details: [
                {img_text: {img: "canva.png", name: "Canva"}},
                {details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos harum assumenda veniam corrupti ducimus quis quod quos asperiores, dicta sunt, ex rem facilis! Possimus ducimus dolorem non omnis itaque accusamus."},
                {years: "1.5 years"}
            ]},

            {skills_card_details: [
                {img_text: {img: "figma.png", name: "Figma"}},
                {details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos harum assumenda veniam corrupti ducimus quis quod quos asperiores, dicta sunt, ex rem facilis! Possimus ducimus dolorem non omnis itaque accusamus."},
                {years: "1.5 years"}
            ]}
        ]
        
        
    },

    //2
    {button: 
        {name: "Show Projects"}
    }
];

//projects section Content
const projectsContent = [
    //0
    {titles: 
        {title: "My Skills", 
        caption: "Technologies and Tools"}
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
}


//show Hero Section
function showHero() {
    heroSection.style.display = "flex";
    heroSection.style.alignItems="start"

    heroSection.innerHTML = `
    <nav class="d-flex">
        <img src="assets/${heroContent[0].nav_content[0].image}" alt="logo" width="40px">
        <div class="navlinks d-flex">
            <div class="links d-flex">
                ${heroContent[0].nav_content[1].nav_links[0].links.map(link => `<a href="${link.href}">${link.name}</a>`).join('')}
            </div>

            <div class="socials d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="233" zoomAndPan="magnify" viewBox="0 0 174.75 174.749997" height="233" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="ccf2aa3d1c"><path d="M 43 0 L 131 0 L 131 174.5 L 43 174.5 Z M 43 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#ccf2aa3d1c)"><path fill="#fbc815" d="M 102.96875 174.210938 L 102.96875 95.816406 L 126.769531 95.816406 L 130.65625 60.976562 L 102.96875 60.976562 L 102.96875 44.007812 C 102.96875 35.035156 103.195312 26.132812 115.734375 26.132812 L 128.433594 26.132812 L 128.433594 1.222656 C 128.433594 0.847656 117.523438 0.00390625 106.492188 0.00390625 C 83.445312 0.00390625 69.015625 14.4375 69.015625 40.941406 L 69.015625 60.976562 L 43.550781 60.976562 L 43.550781 95.816406 L 69.015625 95.816406 L 69.015625 174.210938 Z M 102.96875 174.210938 " fill-opacity="1" fill-rule="evenodd"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="233" zoomAndPan="magnify" viewBox="0 0 174.75 174.749997" height="233" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="ca5587f4f3"><path d="M 11 0 L 164 0 L 164 174.5 L 11 174.5 Z M 11 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#ca5587f4f3)"><path fill="#fbc815" d="M 163.066406 71.613281 C 147.539062 71.613281 133.144531 66.648438 121.402344 58.214844 L 121.402344 119.078125 C 121.402344 149.476562 96.671875 174.199219 66.277344 174.199219 C 54.535156 174.199219 43.640625 170.5 34.6875 164.210938 C 20.476562 154.230469 11.15625 137.726562 11.15625 119.078125 C 11.15625 88.679688 35.886719 63.949219 66.285156 63.949219 C 68.8125 63.949219 71.28125 64.160156 73.710938 64.484375 L 73.710938 95.058594 C 71.359375 94.328125 68.878906 93.898438 66.285156 93.898438 C 52.40625 93.898438 41.113281 105.191406 41.113281 119.078125 C 41.113281 128.746094 46.601562 137.144531 54.613281 141.363281 C 58.105469 143.199219 62.074219 144.25 66.292969 144.25 C 79.851562 144.25 90.914062 133.464844 91.421875 120.023438 L 91.445312 0 L 121.394531 0 C 121.394531 2.597656 121.648438 5.132812 122.097656 7.601562 C 124.210938 19.011719 130.984375 28.800781 140.367188 34.921875 C 146.902344 39.183594 154.695312 41.671875 163.058594 41.671875 L 163.058594 71.613281 Z M 163.066406 71.613281 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="233" zoomAndPan="magnify" viewBox="0 0 174.75 174.749997" height="233" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="50470c3454"><path d="M 0 0 L 174 0 L 174 174.5 L 0 174.5 Z M 0 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#50470c3454)"><path fill="#fbc815" d="M 148.535156 25.316406 C 132.230469 9 110.554688 0.0078125 87.46875 0 C 39.886719 0 1.160156 38.71875 1.140625 86.320312 C 1.132812 101.535156 5.109375 116.386719 12.667969 129.480469 L 0.414062 174.207031 L 46.171875 162.203125 C 58.78125 169.082031 72.980469 172.707031 87.421875 172.710938 L 87.460938 172.710938 C 135.03125 172.710938 173.765625 133.988281 173.785156 86.386719 C 173.800781 63.324219 164.828125 41.628906 148.535156 25.316406 Z M 87.46875 158.128906 L 87.4375 158.128906 C 74.5625 158.128906 61.9375 154.667969 50.917969 148.128906 L 48.300781 146.574219 L 21.144531 153.695312 L 28.394531 127.214844 L 26.691406 124.5 C 19.503906 113.074219 15.714844 99.871094 15.722656 86.320312 C 15.738281 46.761719 47.929688 14.574219 87.503906 14.574219 C 106.664062 14.574219 124.683594 22.050781 138.226562 35.609375 C 151.769531 49.175781 159.226562 67.199219 159.21875 86.371094 C 159.195312 125.945312 127.011719 158.128906 87.46875 158.128906 Z M 126.824219 104.394531 C 124.667969 103.3125 114.0625 98.09375 112.082031 97.375 C 110.105469 96.65625 108.667969 96.292969 107.226562 98.449219 C 105.78125 100.605469 101.65625 105.46875 100.394531 106.914062 C 99.140625 108.351562 97.875 108.53125 95.71875 107.449219 C 93.5625 106.367188 86.609375 104.097656 78.371094 96.742188 C 71.960938 91.023438 67.628906 83.960938 66.375 81.796875 C 65.117188 79.632812 66.242188 78.472656 67.316406 77.398438 C 68.289062 76.433594 69.472656 74.878906 70.554688 73.617188 C 71.644531 72.367188 72 71.46875 72.722656 70.023438 C 73.441406 68.585938 73.085938 67.324219 72.542969 66.242188 C 72 65.167969 67.6875 54.546875 65.894531 50.230469 C 64.144531 46.019531 62.367188 46.59375 61.039062 46.527344 C 59.78125 46.460938 58.34375 46.457031 56.902344 46.457031 C 55.464844 46.457031 53.125 46.992188 51.152344 49.15625 C 49.175781 51.320312 43.601562 56.539062 43.601562 67.148438 C 43.601562 77.769531 51.332031 88.027344 52.40625 89.464844 C 53.480469 90.898438 67.613281 112.691406 89.253906 122.03125 C 94.398438 124.253906 98.421875 125.582031 101.546875 126.578125 C 106.71875 128.21875 111.421875 127.984375 115.136719 127.433594 C 119.28125 126.816406 127.898438 122.214844 129.699219 117.175781 C 131.496094 112.140625 131.496094 107.8125 130.953125 106.921875 C 130.417969 106.011719 128.980469 105.476562 126.824219 104.394531 Z M 126.824219 104.394531 " fill-opacity="1" fill-rule="evenodd"/></g></svg>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="233" zoomAndPan="magnify" viewBox="0 0 174.75 174.749997" height="233" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="5ea11ecebe"><path d="M 0 0 L 174.5 0 L 174.5 174.5 L 0 174.5 Z M 0 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#5ea11ecebe)"><path fill="#fbc815" d="M 87.105469 15.691406 C 110.359375 15.691406 113.117188 15.78125 122.300781 16.203125 C 131.796875 16.636719 141.574219 18.800781 148.492188 25.71875 C 155.472656 32.699219 157.570312 42.382812 158.007812 51.90625 C 158.425781 61.089844 158.515625 63.847656 158.515625 87.105469 C 158.515625 110.359375 158.425781 113.117188 158.007812 122.300781 C 157.578125 131.746094 155.363281 141.617188 148.492188 148.492188 C 141.507812 155.472656 131.832031 157.570312 122.300781 158.007812 C 113.117188 158.425781 110.359375 158.515625 87.105469 158.515625 C 63.847656 158.515625 61.089844 158.425781 51.90625 158.007812 C 42.535156 157.578125 32.535156 155.3125 25.71875 148.492188 C 18.769531 141.542969 16.636719 131.765625 16.203125 122.300781 C 15.78125 113.117188 15.691406 110.359375 15.691406 87.105469 C 15.691406 63.847656 15.78125 61.089844 16.203125 51.90625 C 16.628906 42.5 18.867188 32.570312 25.71875 25.71875 C 32.6875 18.75 42.40625 16.636719 51.90625 16.203125 C 61.089844 15.78125 63.847656 15.691406 87.105469 15.691406 M 87.105469 0 C 63.449219 0 60.480469 0.101562 51.1875 0.523438 C 37.722656 1.140625 24.351562 4.886719 14.617188 14.617188 C 4.847656 24.390625 1.140625 37.730469 0.523438 51.1875 C 0.101562 60.480469 0 63.449219 0 87.105469 C 0 110.761719 0.101562 113.730469 0.523438 123.019531 C 1.140625 136.46875 4.898438 149.875 14.617188 159.589844 C 24.382812 169.351562 37.746094 173.066406 51.1875 173.683594 C 60.480469 174.105469 63.449219 174.207031 87.105469 174.207031 C 110.761719 174.207031 113.730469 174.105469 123.019531 173.683594 C 136.476562 173.066406 149.863281 169.316406 159.589844 159.589844 C 169.367188 149.8125 173.066406 136.476562 173.683594 123.019531 C 174.105469 113.730469 174.207031 110.761719 174.207031 87.105469 C 174.207031 63.449219 174.105469 60.480469 173.683594 51.1875 C 173.066406 37.722656 169.316406 24.34375 159.589844 14.617188 C 149.839844 4.871094 136.441406 1.132812 123.019531 0.523438 C 113.730469 0.101562 110.761719 0 87.105469 0 Z M 87.105469 0 " fill-opacity="1" fill-rule="nonzero"/></g><path fill="#fbc815" d="M 87.105469 42.375 C 62.402344 42.375 42.375 62.402344 42.375 87.105469 C 42.375 111.804688 62.402344 131.832031 87.105469 131.832031 C 111.804688 131.832031 131.832031 111.804688 131.832031 87.105469 C 131.832031 62.402344 111.804688 42.375 87.105469 42.375 Z M 87.105469 116.136719 C 71.070312 116.136719 58.070312 103.136719 58.070312 87.105469 C 58.070312 71.070312 71.070312 58.070312 87.105469 58.070312 C 103.136719 58.070312 116.136719 71.070312 116.136719 87.105469 C 116.136719 103.136719 103.136719 116.136719 87.105469 116.136719 Z M 87.105469 116.136719 " fill-opacity="1" fill-rule="nonzero"/><path fill="#fbc815" d="M 144.054688 40.605469 C 144.054688 41.292969 143.988281 41.972656 143.855469 42.644531 C 143.71875 43.316406 143.523438 43.972656 143.257812 44.605469 C 142.996094 45.238281 142.675781 45.839844 142.292969 46.410156 C 141.914062 46.984375 141.480469 47.511719 140.992188 47.996094 C 140.507812 48.480469 139.980469 48.914062 139.410156 49.296875 C 138.839844 49.675781 138.238281 50 137.601562 50.261719 C 136.96875 50.523438 136.316406 50.722656 135.640625 50.855469 C 134.96875 50.992188 134.289062 51.058594 133.601562 51.058594 C 132.917969 51.058594 132.238281 50.992188 131.5625 50.855469 C 130.890625 50.722656 130.238281 50.523438 129.601562 50.261719 C 128.96875 50 128.367188 49.675781 127.796875 49.296875 C 127.226562 48.914062 126.695312 48.480469 126.210938 47.996094 C 125.726562 47.511719 125.292969 46.984375 124.910156 46.410156 C 124.53125 45.839844 124.207031 45.238281 123.945312 44.605469 C 123.683594 43.972656 123.484375 43.316406 123.351562 42.644531 C 123.21875 41.972656 123.152344 41.292969 123.152344 40.605469 C 123.152344 39.917969 123.21875 39.238281 123.351562 38.566406 C 123.484375 37.894531 123.683594 37.238281 123.945312 36.605469 C 124.207031 35.972656 124.53125 35.367188 124.910156 34.796875 C 125.292969 34.226562 125.726562 33.699219 126.210938 33.214844 C 126.695312 32.730469 127.226562 32.296875 127.796875 31.914062 C 128.367188 31.53125 128.96875 31.210938 129.601562 30.949219 C 130.238281 30.683594 130.890625 30.488281 131.5625 30.351562 C 132.238281 30.21875 132.917969 30.152344 133.601562 30.152344 C 134.289062 30.152344 134.96875 30.21875 135.640625 30.351562 C 136.316406 30.488281 136.96875 30.683594 137.601562 30.949219 C 138.238281 31.210938 138.839844 31.53125 139.410156 31.914062 C 139.980469 32.296875 140.507812 32.730469 140.992188 33.214844 C 141.480469 33.699219 141.914062 34.226562 142.292969 34.796875 C 142.675781 35.367188 142.996094 35.972656 143.257812 36.605469 C 143.523438 37.238281 143.71875 37.894531 143.855469 38.566406 C 143.988281 39.238281 144.054688 39.917969 144.054688 40.605469 Z M 144.054688 40.605469 " fill-opacity="1" fill-rule="nonzero"/></svg>
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
    `;
    
    const showAboutBtn = document.getElementById('showAbout');
    showAboutBtn.onclick = function(){
        location.href="#about-section";
        AboutSection.style.display="flex";
        showAbout();
    }
}


function showAbout() {
    AboutSection.style.display = "flex";
    AboutSection.innerHTML = `
        <img src="assets/about-pictures/${aboutContent[0].img}" alt="me" width="500px">
        <div class="about-con d-flex-col">
            <h2>${aboutContent[1].about_con_content[0].h2}</h2>
            
            <div class="address-con location d-flex-col">
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
    
            <div class="address-con d-flex-col">
                <h3>${aboutContent[1].about_con_content[1].address_con_content[2].background_con_content.title}</h3>
                <p>${aboutContent[1].about_con_content[1].address_con_content[2].background_con_content.paragraph}</p>
            </div>
            
            <button class="icons d-flex-col animated-buttons" id="showSkills">
                ${aboutContent[1].about_con_content[1].address_con_content[3].button.name}
                <svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="60px" fill="#ffb703">
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
            <div class="skills-card d-flex-col">
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
            <svg xmlns="http://www.w3.org/2000/svg" height="auto" viewBox="0 -960 960 960" width="60px" fill="#ffb703">
                <path d="M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5Z"/>
            </svg>
        </button>
    `;

    const showProjectsBtn = document.getElementById("showProjects");
    showProjectsBtn.onclick = function(){
        location.href="#projects-section";
        ProjectSection.style.display="flex";
        showProjects();
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
                    <div class="gradient-text d-flex-col">
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
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="233" zoomAndPan="magnify" viewBox="0 0 174.75 174.749997" height="233" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="ccf2aa3d1c"><path d="M 43 0 L 131 0 L 131 174.5 L 43 174.5 Z M 43 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#ccf2aa3d1c)"><path fill="#fbc815" d="M 102.96875 174.210938 L 102.96875 95.816406 L 126.769531 95.816406 L 130.65625 60.976562 L 102.96875 60.976562 L 102.96875 44.007812 C 102.96875 35.035156 103.195312 26.132812 115.734375 26.132812 L 128.433594 26.132812 L 128.433594 1.222656 C 128.433594 0.847656 117.523438 0.00390625 106.492188 0.00390625 C 83.445312 0.00390625 69.015625 14.4375 69.015625 40.941406 L 69.015625 60.976562 L 43.550781 60.976562 L 43.550781 95.816406 L 69.015625 95.816406 L 69.015625 174.210938 Z M 102.96875 174.210938 " fill-opacity="1" fill-rule="evenodd"/></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="233" zoomAndPan="magnify" viewBox="0 0 174.75 174.749997" height="233" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="ca5587f4f3"><path d="M 11 0 L 164 0 L 164 174.5 L 11 174.5 Z M 11 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#ca5587f4f3)"><path fill="#fbc815" d="M 163.066406 71.613281 C 147.539062 71.613281 133.144531 66.648438 121.402344 58.214844 L 121.402344 119.078125 C 121.402344 149.476562 96.671875 174.199219 66.277344 174.199219 C 54.535156 174.199219 43.640625 170.5 34.6875 164.210938 C 20.476562 154.230469 11.15625 137.726562 11.15625 119.078125 C 11.15625 88.679688 35.886719 63.949219 66.285156 63.949219 C 68.8125 63.949219 71.28125 64.160156 73.710938 64.484375 L 73.710938 95.058594 C 71.359375 94.328125 68.878906 93.898438 66.285156 93.898438 C 52.40625 93.898438 41.113281 105.191406 41.113281 119.078125 C 41.113281 128.746094 46.601562 137.144531 54.613281 141.363281 C 58.105469 143.199219 62.074219 144.25 66.292969 144.25 C 79.851562 144.25 90.914062 133.464844 91.421875 120.023438 L 91.445312 0 L 121.394531 0 C 121.394531 2.597656 121.648438 5.132812 122.097656 7.601562 C 124.210938 19.011719 130.984375 28.800781 140.367188 34.921875 C 146.902344 39.183594 154.695312 41.671875 163.058594 41.671875 L 163.058594 71.613281 Z M 163.066406 71.613281 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="233" zoomAndPan="magnify" viewBox="0 0 174.75 174.749997" height="233" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="50470c3454"><path d="M 0 0 L 174 0 L 174 174.5 L 0 174.5 Z M 0 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#50470c3454)"><path fill="#fbc815" d="M 148.535156 25.316406 C 132.230469 9 110.554688 0.0078125 87.46875 0 C 39.886719 0 1.160156 38.71875 1.140625 86.320312 C 1.132812 101.535156 5.109375 116.386719 12.667969 129.480469 L 0.414062 174.207031 L 46.171875 162.203125 C 58.78125 169.082031 72.980469 172.707031 87.421875 172.710938 L 87.460938 172.710938 C 135.03125 172.710938 173.765625 133.988281 173.785156 86.386719 C 173.800781 63.324219 164.828125 41.628906 148.535156 25.316406 Z M 87.46875 158.128906 L 87.4375 158.128906 C 74.5625 158.128906 61.9375 154.667969 50.917969 148.128906 L 48.300781 146.574219 L 21.144531 153.695312 L 28.394531 127.214844 L 26.691406 124.5 C 19.503906 113.074219 15.714844 99.871094 15.722656 86.320312 C 15.738281 46.761719 47.929688 14.574219 87.503906 14.574219 C 106.664062 14.574219 124.683594 22.050781 138.226562 35.609375 C 151.769531 49.175781 159.226562 67.199219 159.21875 86.371094 C 159.195312 125.945312 127.011719 158.128906 87.46875 158.128906 Z M 126.824219 104.394531 C 124.667969 103.3125 114.0625 98.09375 112.082031 97.375 C 110.105469 96.65625 108.667969 96.292969 107.226562 98.449219 C 105.78125 100.605469 101.65625 105.46875 100.394531 106.914062 C 99.140625 108.351562 97.875 108.53125 95.71875 107.449219 C 93.5625 106.367188 86.609375 104.097656 78.371094 96.742188 C 71.960938 91.023438 67.628906 83.960938 66.375 81.796875 C 65.117188 79.632812 66.242188 78.472656 67.316406 77.398438 C 68.289062 76.433594 69.472656 74.878906 70.554688 73.617188 C 71.644531 72.367188 72 71.46875 72.722656 70.023438 C 73.441406 68.585938 73.085938 67.324219 72.542969 66.242188 C 72 65.167969 67.6875 54.546875 65.894531 50.230469 C 64.144531 46.019531 62.367188 46.59375 61.039062 46.527344 C 59.78125 46.460938 58.34375 46.457031 56.902344 46.457031 C 55.464844 46.457031 53.125 46.992188 51.152344 49.15625 C 49.175781 51.320312 43.601562 56.539062 43.601562 67.148438 C 43.601562 77.769531 51.332031 88.027344 52.40625 89.464844 C 53.480469 90.898438 67.613281 112.691406 89.253906 122.03125 C 94.398438 124.253906 98.421875 125.582031 101.546875 126.578125 C 106.71875 128.21875 111.421875 127.984375 115.136719 127.433594 C 119.28125 126.816406 127.898438 122.214844 129.699219 117.175781 C 131.496094 112.140625 131.496094 107.8125 130.953125 106.921875 C 130.417969 106.011719 128.980469 105.476562 126.824219 104.394531 Z M 126.824219 104.394531 " fill-opacity="1" fill-rule="evenodd"/></g></svg>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="233" zoomAndPan="magnify" viewBox="0 0 174.75 174.749997" height="233" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="5ea11ecebe"><path d="M 0 0 L 174.5 0 L 174.5 174.5 L 0 174.5 Z M 0 0 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#5ea11ecebe)"><path fill="#fbc815" d="M 87.105469 15.691406 C 110.359375 15.691406 113.117188 15.78125 122.300781 16.203125 C 131.796875 16.636719 141.574219 18.800781 148.492188 25.71875 C 155.472656 32.699219 157.570312 42.382812 158.007812 51.90625 C 158.425781 61.089844 158.515625 63.847656 158.515625 87.105469 C 158.515625 110.359375 158.425781 113.117188 158.007812 122.300781 C 157.578125 131.746094 155.363281 141.617188 148.492188 148.492188 C 141.507812 155.472656 131.832031 157.570312 122.300781 158.007812 C 113.117188 158.425781 110.359375 158.515625 87.105469 158.515625 C 63.847656 158.515625 61.089844 158.425781 51.90625 158.007812 C 42.535156 157.578125 32.535156 155.3125 25.71875 148.492188 C 18.769531 141.542969 16.636719 131.765625 16.203125 122.300781 C 15.78125 113.117188 15.691406 110.359375 15.691406 87.105469 C 15.691406 63.847656 15.78125 61.089844 16.203125 51.90625 C 16.628906 42.5 18.867188 32.570312 25.71875 25.71875 C 32.6875 18.75 42.40625 16.636719 51.90625 16.203125 C 61.089844 15.78125 63.847656 15.691406 87.105469 15.691406 M 87.105469 0 C 63.449219 0 60.480469 0.101562 51.1875 0.523438 C 37.722656 1.140625 24.351562 4.886719 14.617188 14.617188 C 4.847656 24.390625 1.140625 37.730469 0.523438 51.1875 C 0.101562 60.480469 0 63.449219 0 87.105469 C 0 110.761719 0.101562 113.730469 0.523438 123.019531 C 1.140625 136.46875 4.898438 149.875 14.617188 159.589844 C 24.382812 169.351562 37.746094 173.066406 51.1875 173.683594 C 60.480469 174.105469 63.449219 174.207031 87.105469 174.207031 C 110.761719 174.207031 113.730469 174.105469 123.019531 173.683594 C 136.476562 173.066406 149.863281 169.316406 159.589844 159.589844 C 169.367188 149.8125 173.066406 136.476562 173.683594 123.019531 C 174.105469 113.730469 174.207031 110.761719 174.207031 87.105469 C 174.207031 63.449219 174.105469 60.480469 173.683594 51.1875 C 173.066406 37.722656 169.316406 24.34375 159.589844 14.617188 C 149.839844 4.871094 136.441406 1.132812 123.019531 0.523438 C 113.730469 0.101562 110.761719 0 87.105469 0 Z M 87.105469 0 " fill-opacity="1" fill-rule="nonzero"/></g><path fill="#fbc815" d="M 87.105469 42.375 C 62.402344 42.375 42.375 62.402344 42.375 87.105469 C 42.375 111.804688 62.402344 131.832031 87.105469 131.832031 C 111.804688 131.832031 131.832031 111.804688 131.832031 87.105469 C 131.832031 62.402344 111.804688 42.375 87.105469 42.375 Z M 87.105469 116.136719 C 71.070312 116.136719 58.070312 103.136719 58.070312 87.105469 C 58.070312 71.070312 71.070312 58.070312 87.105469 58.070312 C 103.136719 58.070312 116.136719 71.070312 116.136719 87.105469 C 116.136719 103.136719 103.136719 116.136719 87.105469 116.136719 Z M 87.105469 116.136719 " fill-opacity="1" fill-rule="nonzero"/><path fill="#fbc815" d="M 144.054688 40.605469 C 144.054688 41.292969 143.988281 41.972656 143.855469 42.644531 C 143.71875 43.316406 143.523438 43.972656 143.257812 44.605469 C 142.996094 45.238281 142.675781 45.839844 142.292969 46.410156 C 141.914062 46.984375 141.480469 47.511719 140.992188 47.996094 C 140.507812 48.480469 139.980469 48.914062 139.410156 49.296875 C 138.839844 49.675781 138.238281 50 137.601562 50.261719 C 136.96875 50.523438 136.316406 50.722656 135.640625 50.855469 C 134.96875 50.992188 134.289062 51.058594 133.601562 51.058594 C 132.917969 51.058594 132.238281 50.992188 131.5625 50.855469 C 130.890625 50.722656 130.238281 50.523438 129.601562 50.261719 C 128.96875 50 128.367188 49.675781 127.796875 49.296875 C 127.226562 48.914062 126.695312 48.480469 126.210938 47.996094 C 125.726562 47.511719 125.292969 46.984375 124.910156 46.410156 C 124.53125 45.839844 124.207031 45.238281 123.945312 44.605469 C 123.683594 43.972656 123.484375 43.316406 123.351562 42.644531 C 123.21875 41.972656 123.152344 41.292969 123.152344 40.605469 C 123.152344 39.917969 123.21875 39.238281 123.351562 38.566406 C 123.484375 37.894531 123.683594 37.238281 123.945312 36.605469 C 124.207031 35.972656 124.53125 35.367188 124.910156 34.796875 C 125.292969 34.226562 125.726562 33.699219 126.210938 33.214844 C 126.695312 32.730469 127.226562 32.296875 127.796875 31.914062 C 128.367188 31.53125 128.96875 31.210938 129.601562 30.949219 C 130.238281 30.683594 130.890625 30.488281 131.5625 30.351562 C 132.238281 30.21875 132.917969 30.152344 133.601562 30.152344 C 134.289062 30.152344 134.96875 30.21875 135.640625 30.351562 C 136.316406 30.488281 136.96875 30.683594 137.601562 30.949219 C 138.238281 31.210938 138.839844 31.53125 139.410156 31.914062 C 139.980469 32.296875 140.507812 32.730469 140.992188 33.214844 C 141.480469 33.699219 141.914062 34.226562 142.292969 34.796875 C 142.675781 35.367188 142.996094 35.972656 143.257812 36.605469 C 143.523438 37.238281 143.71875 37.894531 143.855469 38.566406 C 143.988281 39.238281 144.054688 39.917969 144.054688 40.605469 Z M 144.054688 40.605469 " fill-opacity="1" fill-rule="nonzero"/></svg>
        </div>
    </div>
`;

}


