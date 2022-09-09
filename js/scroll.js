const menuLinkAboutMe = document.querySelector('.menu__link:first-child')
menuLinkAboutMe.onclick = function () {
    const aboutMe = document.querySelector('.about-me');
    aboutMe.scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: "smooth"
    });
}

const menuLinkPortfolio = document.querySelector('.menu__link:nth-child(2)')
menuLinkPortfolio.onclick = function () {
    const portfolio = document.querySelector('.portfolio');
    portfolio.scrollIntoView({
        //block: "center",
        inline: "nearest",
        behavior: "smooth"
    });
}

const menuLinkTariffs = document.querySelector('.menu__link:nth-child(3)')
menuLinkTariffs.onclick = function () {
    const tariffs = document.querySelector('.price');
    tariffs.scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: "smooth"
    });
}

const menuLinkContacts = document.querySelector('.menu__link:last-child')
menuLinkContacts.onclick = function () {
    const contacts = document.querySelector('.contacts');
    contacts.scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: "smooth"
    });
}

const aboutMeContacts = document.querySelector('.btn_about-me')
aboutMeContacts.onclick = function () {
    const contacts = document.querySelector('.contacts');
    contacts.scrollIntoView({
        block: "center",
        inline: "nearest",
        behavior: "smooth"
    });
}

const welcomeLinkPortfolio = document.querySelector('.btn_welcome')
welcomeLinkPortfolio.onclick = function () {
    const portfolio = document.querySelector('.portfolio');
    portfolio.scrollIntoView({
        //block: "center",
        inline: "nearest",
        behavior: "smooth"
    });
}

const up = document.querySelector('.btn-up')
up.onclick = function () {
    const up = document.querySelector('.header');
    up.scrollIntoView({
        //block: "center",
        inline: "nearest",
        behavior: "smooth"
    });
}