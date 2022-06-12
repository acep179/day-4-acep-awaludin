//. Contact Form

const contactForm = []

const getContactForm = () => {

    let name = document.getElementById('contactName').value
    let email = document.getElementById('contactEmail').value
    let phone = document.getElementById('contactPhone').value
    let subject = document.getElementById('contactSubject').value
    let message = document.getElementById('contactMessage').value

    if(name == ''){
        return alert('Harap Masukkan Nama!')
    }else if(email == ''){
        return alert('Harap Masukkan Email!')
    }else if(phone == ''){
        return alert('Harap Masukkan Nomor Telepon Anda!')
    }else if(subject == ''){
        return alert('Harap Pilih Subjek yang Disediakan')
    }else if(message == ''){
        return alert('Pesan Anda Masih Kosong!')
    }

    const a = document.createElement("a");
    a.href = `mailto:acep.awaludin179@gmail.com?subject=${subject}&body=Halo, nama saya adalah ${name}. ${message}.Oleh karena itu, saya tertarik merekrut anda untuk menjadi seorang ${subject} di perusahaan kami. Silakan hubungi kami melalui ${email} atau ${phone}`;
    a.target = '_blank'
    a.click();

    let dataContactForm = {
        name,
        email,
        phone,
        subject,
        message
    }

    contactForm.push(dataContactForm);

console.log(contactForm)

}

//. My Project Form

const projectForm = []

const getProjectForm = () => {

    //. Name & Description
    let name = document.getElementById('projectName').value
    let description = document.getElementById('projectDescription').value
    
    //. Duration
    let startDate = document.getElementById('projectStartDate').value
    let endDate = document.getElementById('projectEndDate').value

    startMonth = Number(new Date(startDate).getMonth())
    endMonth = Number(new Date(endDate).getMonth())
    startYear = Number(new Date(startDate).getFullYear())
    endYear = Number(new Date(endDate).getFullYear())

    let yearDuration = endYear - startYear

    let monthDuration = (endMonth+(12*yearDuration) - startMonth) % 12
    
    let showMonthDuration = ''
    let showYearDuration = ''

    if(monthDuration > 0){
        showMonthDuration = `${monthDuration} bulan`
    }
        
    if(yearDuration > 0){
        showYearDuration = `${yearDuration} tahun`
    }

    // . Techologies
    let technologies = []

    let html = document.getElementById('projectHTML').checked
    if (html === true){
        html = document.getElementById('projectHTML').value
        technologies.push(html)
    }
    
    let css = document.getElementById('projectCSS').checked
    if (css === true){
        css = document.getElementById('projectCSS').value
        technologies.push(css)
    }

    let js = document.getElementById('projectJS').checked
    if (js === true){
        js = document.getElementById('projectJS').value
        technologies.push(js)
    }
    
    let tailwind = document.getElementById('projectTailwind').checked
    if (tailwind === true){
        tailwind = document.getElementById('projectTailwind').value
        technologies.push(tailwind)
    }

    let sass = document.getElementById('projectSASS').checked
    if (sass === true){
        sass = document.getElementById('projectSASS').value
        technologies.push(sass)
    }
    
    //. Image

    let image = document.getElementById('projectImage').files
    
    //. Form Validation
    
    if(name == ''){
        return alert('Silakan isi Nama Projek!')
    } else if (startDate == ''){
        return alert('Silakan tentukan tanggal memulai project!')
    } else if (endDate == ''){
        return alert('Silakan tentukan tanggal berakhirnya projek')
    } else if (description == ''){
        return alert('Kolom deskripsi masih kosong!')
    } else if (technologies.length == 0){
        return alert('Silakan pilih salah satu teknologi yang diterapkan!')
    } else if(image.length == 0){
        return alert('Silakan unggah gambar projek anda!')
    } else {
        image = URL.createObjectURL(image[0])
    }
    
    //. Set Project Form
    let setProjectForm = {
        name,
        startDate,
        endDate,
        showMonthDuration,
        showYearDuration,
        description,
        technologies,
        image
    }

    projectForm.push(setProjectForm)

    console.log(projectForm)
    
    renderProject()
}

const renderProject = () => {
    document.getElementById('myProject').innerHTML = 
    `
        <h1>MY PROJECT</h1>
        <div class="project-item">
            <div class="item-top">
                <div class="project-img" style="background-image: URL('./../assets/img/project/gudangku.png');">
                </div>
                <a href="https://acep-awaludin179-project.on.drv.tw/gudangku/Index.html" target="_blank">
                    <h3>Gudangku -2022</h3>
                </a>
                <p class="project-time">durasi: 3 bulan</p>
                <p>Gudangku adalah sebuah aplikasi manajemen gudang berbasis web.</p>
            </div>
            <div class="item-bottom">
                <div class="project-technologies">
                    <i class='bx bxl-html5'></i>
                    <i class='bx bxl-css3'></i>
                    <i class='bx bxl-javascript'></i>
                </div>
                <div class="project-button">
                    <p>edit</p>
                    <p>delete</p>
                </div>
            </div>
        </div>
    `

    for(let i = 0; i < projectForm.length; i++){
        document.getElementById('myProject').innerHTML +=
        `
        <div class="project-item">
            <div class="item-top">
                <div class="project-img" style="background-image: URL('${projectForm[i].image}');">
                </div>
                <a href="${projectForm[i].image}" target="_blank">
                    <h3>${projectForm[i].name}</h3>
                </a>
                <p class="project-time">durasi: ${projectForm[i].showYearDuration} ${projectForm[i].showMonthDuration}</p>
                <p>${projectForm[i].description}</p>
            </div>
            <div class="item-bottom">
                <div id="projectTechnologies${i}" class="project-technologies">
                </div>
                <div class="project-button">
                    <p>edit</p>
                    <p>delete</p>
                </div>
            </div>
        </div>
            
            `
            for(const a of projectForm[i].technologies){
                document.getElementById(`projectTechnologies${i}`).innerHTML += a
            }
    }
}