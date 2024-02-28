function topFunction() {
    document.body.scrollTop = 1300; // For Safari
    document.documentElement.scrollTop = 1300; // For Chrome, Firefox, IE and Opera
}

function onMouseOverGit() {
    const git = document.querySelector('.github');
    const aGit = document.getElementById('a-git');

    const mouseOver = () => {
        git.style.width='12.5em';
        const p = () => {
            aGit.style.display='block';
        }
        setTimeout(p, 150);
    }

    const mouseOut = () => {
        git.style.width='4.5em';
        const p = () => {
            aGit.style.display='none';
        }
        setTimeout(p, 150);
    }

    git.addEventListener('mouseover', mouseOver);
    git.addEventListener('mouseout', mouseOut)
}


function onMouseOverMail() {
    const email = document.querySelector('.email');
    const aMail = document.getElementById('a-email');

    const mouseOver = () => {
        email.style.width='19em';
        const p = () => {
            aMail.style.display='block';
        }
        setTimeout(p, 150);
    }

    const mouseOut = () => {
        email.style.width='4.5em';
        const p = () => {
            aMail.style.display='none';
        }
        setTimeout(p, 150);
    }

    email.addEventListener('mouseover', mouseOver);
    email.addEventListener('mouseout', mouseOut);
}

function onMouseOverProj() {
    const proj = document.querySelector('.f-t-pro-img');
    const h = document.querySelector('.deskH');
    const p = document.querySelector('.deskP');

    const mouseOver = () => {
        h.style.fontSize = '24px';
        p.style.fontSize = '19px';

        h.style.letterSpacing = '2px';
        p.style.letterSpacing = '2px';
    }
    const mouseOut = () => {
        h.style.fontSize = '21px';
        p.style.fontSize = '17px';

        h.style.letterSpacing = '.5px';
        p.style.letterSpacing = '.5px';
    }

    proj.addEventListener('mouseover', mouseOver);
    proj.addEventListener('mouseout', mouseOut);
}

