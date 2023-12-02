const divBenefits = document.getElementById("benefits-div");
const mainJoin = document.querySelector("main");
const spaceForm = document.querySelector(".space-form");
const timestamp = document.getElementById("timestamp");
const benefit1 = document.getElementById("b1");
const benefit2 = document.getElementById("b2");
const benefit3 = document.getElementById("b3");
const benefit4 = document.getElementById("b4");
const benefit5 = document.getElementById("b5");
spaceForm.classList = "benefits";

timestamp.value = new Date().toISOString(); 

function np()
{
    document.getElementById("benefits-title").textContent = "NP Membership";
    divBenefits.style.display = "block";
    mainJoin.classList = "main-join benefits";
    spaceForm.classList = "benefits";
    benefit1.textContent = "🏆 Inclusion in the chamber's online directory.";
    benefit2.textContent = "🏆 Access to chamber events and networking opportunities.";
    benefit3.textContent = "🏆 Monthly newsletter subscription.";
    benefit4.textContent = "🏆 Recognition as a non-profit supporter on the chamber's website.";
    benefit5.textContent = "";

    benefit1.style.setProperty('--content', '""');
    benefit2.style.setProperty('--content', '""');
    benefit3.style.setProperty('--content', '""');
    benefit4.style.setProperty('--content', '""');
    benefit5.style.setProperty('--content', '""');
}

function bronze()
{
    document.getElementById("benefits-title").textContent = "Bronze Membership";
    divBenefits.style.display = "block";
    mainJoin.classList = "main-join benefits";
    spaceForm.classList = "benefits";
    benefit1.textContent = "🏆 All NP Membership benefits.";
    benefit2.textContent = "🏆 Featured listing in the chamber's online directory.";
    benefit3.textContent = "🏆 One complimentary ticket to an annual chamber event.";
    benefit4.textContent = "🏆 Access to exclusive training webinars and workshops.";
    benefit5.textContent = "🏆 Social media shout-out on the chamber's platforms.";

    benefit1.style.setProperty('--content', '""');
    benefit2.style.setProperty('--content', '""');
    benefit3.style.setProperty('--content', '""');
    benefit4.style.setProperty('--content', '""');
    benefit5.style.setProperty('--content', '""');
}

function silver()
{
    document.getElementById("benefits-title").textContent = "Silver Membership";
    divBenefits.style.display = "block";
    mainJoin.classList = "main-join benefits";
    spaceForm.classList = "benefits";
    benefit1.textContent = "🏆 All Bronze Membership benefits.";
    benefit2.textContent = "🏆 Enhanced visibility with a banner or logo on the chamber's website.";
    benefit3.textContent = "🏆 Two complimentary tickets to an annual chamber event.";
    benefit4.textContent = "🏆 Priority access to sponsor chamber-hosted events.";
    benefit5.textContent = "🏆 Discounted rates on advertising space in the chamber's newsletter.";

    benefit1.style.setProperty('--content', '""');
    benefit2.style.setProperty('--content', '""');
    benefit3.style.setProperty('--content', '""');
    benefit4.style.setProperty('--content', '""');
    benefit5.style.setProperty('--content', '""');
}

function gold()
{
    document.getElementById("benefits-title").textContent = "Gold Membership";
    divBenefits.style.display = "block";
    mainJoin.classList = "main-join benefits";
    spaceForm.classList = "benefits";
    benefit1.textContent = "🏆 All Silver Membership benefits.";
    benefit2.textContent = "🏆 Premier placement on the chamber's homepage with a spotlight feature.";
    benefit3.textContent = "🏆 Three complimentary tickets to an annual chamber event.";
    benefit4.textContent = "🏆 Highest priority for sponsorship opportunities at chamber events.";
    benefit5.textContent = "🏆 Dedicated chamber representative for personalized assistance.";

    benefit1.style.setProperty('--content', '""');
    benefit2.style.setProperty('--content', '""');
    benefit3.style.setProperty('--content', '""');
    benefit4.style.setProperty('--content', '""');
    benefit5.style.setProperty('--content', '""');
}

