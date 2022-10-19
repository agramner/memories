OC.L10N.register(
    "memories",
    {
    "Memories" : "Prisiminimai",
    "Yet another photo management app" : "Dar viena nuotraukų tvarkymo programėlė",
    "# Memories\n\n* **📸 Photo and Video Timeline**: Sorts photos by date taken, parsed from Exif data.\n* **🤔 Quick Recap**: Jump to anywhere in the timeline instantly.\n* **🖼️ Folders**: Browse your and shared folders with a similar, efficient timeline.\n* **🤖 AI Tagging**: Group photos by people and objects using AI, powered by the [recognize](https://github.com/nextcloud/recognize) app.\n* **🎦 Slideshow**: View photos from your timeline and folders easily.\n* **📱 Mobile Support**: Relive your memories on devices of any shape and size through the web app.\n* **✏️ Edit Metadata**: Edit Exif dates on photos quickly and easily.\n* **📦 Archive**: Store photos you don't want to see in your timeline in a separate folder.\n* **⚡️ Fast**: Memories is extremely fast. Period.\n\n## 🚀 Installation\n\n1. Install the app from the Nextcloud app store\n1. ⚒️ Install `exiftool` (see below).\n1. Run `php ./occ memories:index` to generate metadata indices for existing photos.\n1. Open the 📷 Memories app in Nextcloud and set the directory containing your photos. Photos from this directory will be displayed in the timeline, including any photos in nested subdirectories.\n1. Installing the [preview generator](https://github.com/rullzer/previewgenerator) for pre-generating thumbnails is strongly recommended.\n\n## 🔨 Installing Dependencies\nThe exact steps depend on your Nextcloud platform. If you use Docker for your Nextcloud instance, you can install Exiftool by using a custom docker image.\n- **Ubuntu/Debian**: `sudo apt install libimage-exiftool-perl`\n- **Fedora**: `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**: `sudo pacman -S perl-image-exiftool`\n- **Alpine**: `apk add --no-cache exiftool`\n- **MacOS**: `brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`" : "# Prisiminimai\n\n* **📸 Nuotraukų ir vaizdo įrašų laiko juosta**: Rikiuoja nuotraukas pagal iš EXIF duomenų išgautą fotografavimo datą.\n* **🤔 Quick Recap**: Jump to anywhere in the timeline instantly.\n* **🖼️ Aplankai**: Naršykite savo ir bendrinamus aplankus naudodami panašią, veiksmingą laiko juostą.\n* **🤖 Žymių pridėjimas naudojant dirbtinį intelektą**: Grupuokite nuotraukas pagal žmones ir objektus naudodami dirbtinį intelektą, veikiantį su [recognize](https://github.com/nextcloud/recognize) programėle.\n* **🎦 Slideshow**: View photos from your timeline and folders easily.\n* **📱 Mobile Support**: Relive your memories on devices of any shape and size through the web app.\n* **✏️ Edit Metadata**: Edit Exif dates on photos quickly and easily.\n* **📦 Archive**: Store photos you don't want to see in your timeline in a separate folder.\n* **⚡️ Fast**: Memories is extremely fast. Period.\n\n## 🚀 Installation\n\n1. Install the app from the Nextcloud app store\n1. ⚒️ Install `exiftool` (see below).\n1. Run `php ./occ memories:index` to generate metadata indices for existing photos.\n1. Open the 📷 Memories app in Nextcloud and set the directory containing your photos. Photos from this directory will be displayed in the timeline, including any photos in nested subdirectories.\n1. Installing the [preview generator](https://github.com/rullzer/previewgenerator) for pre-generating thumbnails is strongly recommended.\n\n## 🔨 Installing Dependencies\nThe exact steps depend on your Nextcloud platform. If you use Docker for your Nextcloud instance, you can install Exiftool by using a custom docker image.\n- **Ubuntu/Debian**: `sudo apt install libimage-exiftool-perl`\n- **Fedora**: `sudo dnf install perl-Image-ExifTool`\n- **Arch Linux**: `sudo pacman -S perl-image-exiftool`\n- **Alpine**: `apk add --no-cache exiftool`\n- **MacOS**: `brew install exiftool`\n- **FreeBSD**: `sudo pkg install p5-Image-ExifTool`",
    "Timeline" : "Laiko juosta",
    "Folders" : "Aplankai",
    "Favorites" : "Mėgstami",
    "Videos" : "Vaizdo įrašai",
    "People" : "Žmonės",
    "Archive" : "Archyvuoti",
    "On this day" : "Šią dieną",
    "Tags" : "Žymės",
    "Settings" : "Nustatymai",
    "Cancel" : "Atsisakyti",
    "Delete" : "Ištrinti",
    "Download" : "Atsisiųsti",
    "Favorite" : "Mėgstamas",
    "Unarchive" : "Išskleisti",
    "Edit Date/Time" : "Taisyti datą/laiką",
    "View in folder" : "Rodyti aplanke",
    "You are about to download a large number of files. Are you sure?" : "Jūs ketinate atsisiųsti didelį failų skaičių. Ar esate tikri?",
    "You are about to delete a large number of files. Are you sure?" : "Jūs ketinate ištrinti didelį failų skaičių. Ar esate tikri?",
    "You are about to touch a large number of files. Are you sure?" : "Jūs ketinate atlikti veiksmus su dideliu failų skaičiumi. Ar esate tikri?",
    "Timeline Path" : "Laiko juostos kelias",
    "Show hidden folders" : "Rodyti paslėptus aplankus",
    "Square grid mode" : "Kvadratinio tinklelio veiksena",
    "Update" : "Atnaujinti",
    "Error updating settings" : "Klaida atnaujinant nustatymus",
    "Your Timeline" : "Jūsų laiko juostą",
    "Failed to load some photos" : "Nepavyko įkelti kai kurių nuotraukų",
    "Update Exif" : "Atnaujinti EXIF",
    "Newest" : "Naujausios",
    "Year" : "Metai",
    "Month" : "Mėnuo",
    "Day" : "Diena",
    "Time" : "Laikas",
    "Hour" : "Valanda",
    "Minute" : "Minutė",
    "Oldest" : "Seniausios",
    "Processing … {n}/{m}" : "Apdorojama… {n}/{m}",
    "This feature modifies files in your storage to update Exif data." : "Ši ypatybė modifikuoja failus jūsų saugykloje, kad būtų atnaujinti EXIF duomenys.",
    "Exercise caution and make sure you have backups." : "Būkite atsargūs ir įsitikinkite, kad esate pasidarę atsarginių kopijų.",
    "Loading data … {n}/{m}" : "Įkeliami duomenys… {n}/{m}",
    "Remove person" : "Šalinti žmogų",
    "Are you sure you want to remove {name}" : "Ar tikrai norite pašalinti {name}",
    "Failed to delete {name}." : "Nepavyko ištrinti {name}.",
    "Rename person" : "Pervadinti žmogų",
    "Name" : "Vardas",
    "Failed to rename {oldName} to {name}." : "Nepavyko pervadinti {oldName} į {name}.",
    "Loading …" : "Įkeliama…",
    "Too many failures, aborting" : "Per daug nesėkmių, nutraukiama",
    "Error while moving {basename}" : "Klaida perkeliant {basename}",
    "Failed to move {name}." : "Nepavyko perkelti {name}.",
    "Back" : "Atgal",
    "Merge with different person" : "Sulieti su kitu žmogumi",
    "Failed to delete files." : "Nepavyko ištrinti failų.",
    "Failed to delete {fileName}." : "Nepavyko ištrinti {fileName}.",
    "General Failure" : "Bendrinė nesėkmė",
    "Error: {msg}" : "Klaida: {msg}",
    "Cannot find this photo anymore!" : "Daugiau nebepavyksta rasti šios nuotraukos!"
},
"nplurals=4; plural=(n % 10 == 1 && (n % 100 > 19 || n % 100 < 11) ? 0 : (n % 10 >= 2 && n % 10 <=9) && (n % 100 > 19 || n % 100 < 11) ? 1 : n % 1 != 0 ? 2: 3);");
