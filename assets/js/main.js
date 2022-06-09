const getContactForm = () => {

    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('select-subject').value
    let message = document.getElementById('textarea-message').value

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
    a.click();

console.log(name)
console.log(email)
console.log(phone)
console.log(subject)
console.log(message)

}