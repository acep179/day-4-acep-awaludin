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

    
    let showMonthDuration = ''
    let showYearDuration = ''

    let startDateNumber = ''
    let endDateNumber = ''

    let startMonthName = ''
    let endMonthName = ''

    let startYearNumber = ''
    let endYearNumber = ''
    
    const getTime = (startDate, endDate) => {
        startDate = new Date(startDate)
        endDate = new Date(endDate)
        
        let getMiliSecond = endDate - startDate
        
        let yearDuration = Math.floor(getMiliSecond/1000/60/60/24/365)
        let monthDuration = Math.floor(getMiliSecond/1000/60/60/24/30)-(yearDuration*12)
        
        if(monthDuration > 0){
            showMonthDuration = `${monthDuration} bulan`
        }
        
        if(yearDuration > 0){
            showYearDuration = `${yearDuration} tahun`
        }
    }
    
    const getDateName = (startDate,endDate) => {
        startDate = new Date(startDate)
        endDate = new Date(endDate)
        
        let monthArr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Agt','Sep','Okt','Nov','Dec']
        
        let getStartMonth = startDate.getMonth()
        startMonthName = monthArr[getStartMonth]

        let getEndMonth = endDate.getMonth()
        endMonthName = monthArr[getEndMonth]

        startYearNumber = startDate.getFullYear()
        endYearNumber = endDate.getFullYear()

        startDateNumber = startDate.getDate()
        endDateNumber = endDate.getDate()
    }
    
    // . Techologies
    let technologies = []
    let technologiesName = []
    
    let html = document.getElementById('projectHTML').checked
    if (html){
        html = document.getElementById('projectHTML').value
        technologies.push(html)
        technologiesName.push('HTML')
    }
    
    let css = document.getElementById('projectCSS').checked
    if (css){
        css = document.getElementById('projectCSS').value
        technologies.push(css)
        technologiesName.push('CSS')
    }
    
    let js = document.getElementById('projectJS').checked
    if (js){
        js = document.getElementById('projectJS').value
        technologies.push(js)
        technologiesName.push('JavaScript')
    }
    
    let tailwind = document.getElementById('projectTailwind').checked
    if (tailwind){
        tailwind = document.getElementById('projectTailwind').value
        technologies.push(tailwind)
        technologiesName.push('TailwindCSS')
    }
    
    let sass = document.getElementById('projectSASS').checked
    if (sass){
        sass = document.getElementById('projectSASS').value
        technologies.push(sass)
        technologiesName.push('SASS')
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
    
    getTime(startDate,endDate)
    getDateName(startDate,endDate)

    //. Set Project Form
    let setProjectForm = {
        name,
        startDateNumber,
        endDateNumber,
        startMonthName,
        endMonthName,
        startYearNumber,
        endYearNumber,
        showMonthDuration,
        showYearDuration,
        description,
        technologies,
        technologiesName,
        image
    }

    projectForm.push(setProjectForm)

    console.log(projectForm)
    
    renderProject()
}

//. Render Project Card

const renderProject = () => {


    document.getElementById('myProject').innerHTML = 
    `
        <h1>MY PROJECT</h1>
        <div id="projectItem" class="project-item">
            <div class="item-top">
                <div class="project-img" style="background-image: URL('./../assets/img/project/gudangku.png');">
                </div>
                <h3 onclick="exit('projectDetailContainer','block','projectDetail','flex')">Gudangku -2022</h3>
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
                    <p onclick="exit('editForm','block','formEdit','block')">edit</p>
                    <p onclick="deleteProjectItem()">delete</p>
                </div>
            </div>
        </div>
    `

    for(let i = 0; i < projectForm.length; i++){

        if (projectForm[i] == ""){
            ""
        } else {
        document.getElementById('myProject').innerHTML +=
        `
        <div id="projectItem${i}" class="project-item">
            <div class="item-top">
                <div class="project-img" style="background-image: URL('${projectForm[i].image}');">
                </div>
                <h3 onclick="exit('projectDetailContainer','block','projectDetail${i}','flex')">${projectForm[i].name}</h3>
                <p class="project-time">durasi: ${projectForm[i].showYearDuration} ${projectForm[i].showMonthDuration}</p>
                <p>${projectForm[i].description}</p>
            </div>
            <div class="item-bottom">
                <div id="projectTechnologies${i}" class="project-technologies">
                </div>
                <div class="project-button">
                    <p onclick="exit('editForm','block','formEdit${i}','block')">edit</p>
                    <p onclick="deleteProject(${i})">delete</p>
                </div>
            </div>
        </div>
            
            `
            for(const a of projectForm[i].technologies){
                document.getElementById(`projectTechnologies${i}`).innerHTML += a
            }
        }
    }

    renderDetailProject()
}

//. Render Project Detail

const renderDetailProject = () => {
    document.getElementById('projectDetailContainer').innerHTML = 
    `
    <div id="projectDetail" class="project-detail">
                <i class='bx bx-x-circle' onclick="exit('projectDetailContainer','block','projectDetail','flex')"></i>
                <h1>Gudangku</h1>
                <div class="project-detail-img" style="background-image: url('./../assets/img/project/gudangku.png');">
                </div>
                <div class="project-detail-right">
                    <div class="project-detail-duration">
                        <h3>Duration</h3>
                        <p>
                            <i class='bx bxs-calendar'></i>
                            12 Jan 2021 - 11 Feb 2021
                        </p>
                        <p>
                            <i class='bx bx-time-five'></i>
                            1 month
                        </p>
                    </div>
                    <div class="project-detail-technologies">
                        <h3>Technologies</h3>
                        <p>
                            <i class='bx bxl-html5'></i>
                            HTML
                        </p>
                        <p>
                            <i class='bx bxl-css3'></i>
                            CSS
                        </p>
                        <p>
                            <i class='bx bxl-javascript'></i>
                            JavaScript
                        </p>
                    </div>
                </div>
                <article>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero minima quam, eius laudantium
                        deserunt
                        neque. Assumenda quidem blanditiis ipsa quia amet molestiae exercitationem ab. Repudiandae nam
                        minima possimus dolore eaque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam optio
                        provident tempore ratione quae accusantium at officia esse magni perferendis!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempora laboriosam delectus
                        illum
                        dolorum deleniti? Perferendis illo atque aliquid aut facere repudiandae rerum maxime modi eum
                        nam
                        perspiciatis maiores culpa voluptatem possimus, minus iure expedita sequi amet? Nemo pariatur
                        illo
                        reprehenderit molestiae officia.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, modi voluptatem debitis incidunt
                        ex
                        praesentium minus laborum necessitatibus molestias? Laborum dolorem consectetur aspernatur
                        accusamus, enim alias. Reiciendis iure alias veniam, unde laborum vitae possimus inventore culpa
                        eos
                        sint! Maxime aperiam ipsam dolorum praesentium veritatis pariatur, eos quod. Obcaecati, iusto
                        vero
                        eligendi ratione tempora voluptatum voluptate ullam assumenda fuga nobis rem corrupti non
                        deleniti
                        cumque sint placeat totam dolor consectetur dolore.
                    </p>
                </article>
            </div>
    `

    for(let i = 0; i < projectForm.length; i++){

        if (projectForm[i] == ""){
            ""
        } else {
        document.getElementById('projectDetailContainer').innerHTML +=
            `
            <div id="projectDetail${i}" class="project-detail">
                    <i class='bx bx-x-circle' onclick="exit('projectDetailContainer','block','projectDetail${i}','flex')"></i>
                    <h1>${projectForm[i].name}</h1>
                    <div class="project-detail-img" style="background-image: url('${projectForm[i].image}');">
                    </div>
                    <div class="project-detail-right">
                        <div class="project-detail-duration">
                            <h3>Duration</h3>
                            <p>
                                <i class='bx bxs-calendar'></i>
                                ${projectForm[i].startDateNumber} ${projectForm[i].startMonthName} ${projectForm[i].startYearNumber} - ${projectForm[i].endDateNumber} ${projectForm[i].endMonthName} ${projectForm[i].endYearNumber}
                            </p>
                            <p>
                                <i class='bx bx-time-five'></i>
                                ${projectForm[i].showYearDuration}
                                ${projectForm[i].showMonthDuration}
                                </p>
                        </div>
                        <div id="projectDetailTechnologies${i}" class="project-detail-technologies">
                        </div>
                    </div>
                    <article>
                        <p>
                        ${projectForm[i].description}
                        </p>
                    </article>
                </div>
            `

            document.getElementById(`projectDetailTechnologies${i}`).innerHTML = '<h3>Technologies</h3>'

            for(let n = 0; n < projectForm[i].technologies.length; n++){
                document.getElementById(`projectDetailTechnologies${i}`).innerHTML += 
                `
                <p>
                    ${projectForm[i].technologies[n]}
                    ${projectForm[i].technologiesName[n]}
                </p>
                `
            }
            
        }
    }

}

const deleteProject = (i) => {
    projectForm[i] = "";
    renderProject();
}

const deleteProjectItem = () => {
    document.getElementById('projectItem').classList.toggle('d-none');
}


//. Update Project Form

// const updateProjectForm = (i) => {
    

//     //. Name & Description
//     let name = document.getElementById('editProjectName').value
//     let description = document.getElementById('editProjectDescription').value
    
//     //. Duration
//     let startDate = document.getElementById('editProjectStartDate').value
//     let endDate = document.getElementById('editProjectEndDate').value

//     startMonth = Number(new Date(startDate).getMonth())
//     endMonth = Number(new Date(endDate).getMonth())
//     startYear = Number(new Date(startDate).getFullYear())
//     endYear = Number(new Date(endDate).getFullYear())

//     let yearDuration = endYear - startYear

//     let monthDuration = (endMonth+(12*yearDuration) - startMonth) % 12
    
//     let showMonthDuration = ''
//     let showYearDuration = ''

//     if(monthDuration > 0){
//         showMonthDuration = `${monthDuration} bulan`
//     }
        
//     if(yearDuration > 0){
//         showYearDuration = `${yearDuration} tahun`
//     }

//     // . Techologies
//     let technologies = []

//     let html = document.getElementById('editProjectHTML').checked
//     if (html === true){
//         html = document.getElementById('editProjectHTML').value
//         technologies.push(html)
//     }
    
//     let css = document.getElementById('editProjectCSS').checked
//     if (css === true){
//         css = document.getElementById('editProjectCSS').value
//         technologies.push(css)
//     }

//     let js = document.getElementById('editProjectJS').checked
//     if (js === true){
//         js = document.getElementById('editProjectJS').value
//         technologies.push(js)
//     }
    
//     let tailwind = document.getElementById('editProjectTailwind').checked
//     if (tailwind === true){
//         tailwind = document.getElementById('editProjectTailwind').value
//         technologies.push(tailwind)
//     }

//     let sass = document.getElementById('editProjectSASS').checked
//     if (sass === true){
//         sass = document.getElementById('editProjectSASS').value
//         technologies.push(sass)
//     }
    
//     //. Image

//     let image = document.getElementById('editProjectImage').files
    
//     //. Form Validation
    
//     if(name == ''){
//         return alert('Silakan isi Nama Projek!')
//     } else if (startDate == ''){
//         return alert('Silakan tentukan tanggal memulai project!')
//     } else if (endDate == ''){
//         return alert('Silakan tentukan tanggal berakhirnya projek')
//     } else if (description == ''){
//         return alert('Kolom deskripsi masih kosong!')
//     } else if (technologies.length == 0){
//         return alert('Silakan pilih salah satu teknologi yang diterapkan!')
//     } else if(image.length == 0){
//         return alert('Silakan unggah gambar projek anda!')
//     } else {
//         image = URL.createObjectURL(image[0])
//     }
    
//     //. Set Project Form
//     let setProjectForm = {
//         name,
//         startDate,
//         endDate,
//         showMonthDuration,
//         showYearDuration,
//         description,
//         technologies,
//         image
//     }

//     projectForm.push(setProjectForm)

//     console.log(projectForm)
    
    // renderProject()

// }

const exit = (idParent,display1,idChild,display2) => {
    idPrnt = document.getElementById(`${idParent}`)
    idPrnt.classList.toggle(display1)
    
    idChld = document.getElementById(`${idChild}`)
    idChld.classList.toggle(display2)
}