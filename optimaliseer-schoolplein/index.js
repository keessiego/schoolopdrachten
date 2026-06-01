const data = [
    { name: "banken1", title: "Bankjes", description: "Een rustige zitplek om tussen de lessen door even bij te kletsen of een broodje te eten met een paar medestudenten.", latitude: "52.1380887", longitude: "5.3530096" },
    { name: "banken2", title: "Bankjes", description: "Een rustige zitplek om tussen de lessen door even bij te kletsen of een broodje te eten met een paar medestudenten.", latitude: "52.1377061", longitude: "5.3523897" },
    { name: "banken3", title: "Banken (Cirkelvormig)", description: "Gezellige, ronde zithoek. Door de opstelling is dit de ideale plek om met een groepje te overleggen over een project of samen te lunchen.", latitude: "52.1382939", longitude: "5.3528759" },
    { name: "busplein", title: "Busplein", description: "Het centrale verzamelpunt voor het openbaar vervoer. Hier arriveren en vertrekken de bussen die studenten van en naar de school brengen.", latitude: "52.1381285", longitude: "5.3532748" },
    { name: "fietsenstalling", title: "Fietsenstalling", description: "De aangewezen plek om je (elektrische) fiets of scooter veilig en netjes te parkeren tijdens je lesdag.", latitude: "52.1386714", longitude: "5.3530159" },
    { name: "fietspad", title: "Fietspad", description: "De belangrijkste aanrijroute voor fietsers richting de stalling. Let hier goed op overstekende wandelaars en medestudenten!", latitude: "52.1386008", longitude: "5.3520971" },
    { name: "fontein", title: "Fontein", description: "Een mooie blikvanger op het terrein. Naast een decoratief element is dit ook een heel herkenbaar punt om buiten af te spreken.", latitude: "52.1381671", longitude: "5.3517671" },
    { name: "parkeerplaats1", title: "Parkeerplaatsen", description: "Een van de kleinere, compacte parkeerhavens op het terrein. Handig voor een snelle stop of wanneer de grotere terreinen vol zijn.", latitude: "52.1377438", longitude: "5.3523506" },
    { name: "parkeerplaats2", title: "Parkeerplaatsen", description: "Een van de kleinere, compacte parkeerhavens op het terrein. Handig voor een snelle stop of wanneer de grotere terreinen vol zijn.", latitude: "52.1374053", longitude: "5.3523265" },
    { name: "parkeerplaats3", title: "Parkeerplaatsen", description: "Een van de kleinere, compacte parkeerhavens op het terrein. Handig voor een snelle stop of wanneer de grotere terreinen vol zijn.", latitude: "52.1376225", longitude: "5.3518376" },
    { name: "parkeerplaats4", title: "Parkeerplaatsen", description: "Een van de kleinere, compacte parkeerhavens op het terrein. Handig voor een snelle stop of wanneer de grotere terreinen vol zijn.", latitude: "52.1373483", longitude: "5.3516661" },
    { name: "parkeerplaats5", title: "Parkeerplaatsen", description: "Een van de kleinere, compacte parkeerhavens op het terrein. Handig voor een snelle stop of wanneer de grotere terreinen vol zijn.", latitude: "52.1373277", longitude: "5.3523917" },
    { name: "parkeerplaats6", title: "Parkeerplaatsen", description: "Een middelgrote parkeerzone. Deze plek biedt net wat meer capaciteit en overzicht dan de kleinere parkeerhavens.", latitude: "52.1377045", longitude: "5.3503884" },
    { name: "parkeerplaats7", title: "Parkeerplaatsen", description: "Dit is het gebied waar de studenten mogen roken. Buiten dit gebied is roken verboden.", latitude: "52.1369065", longitude: "5.3524724" },
    { name: "rookplein", title: "Rookplein", description: "Het hoofdparkeerterrein. Dit is de grootste en meest ruime parkeerplaats van het complex met de hoogste capaciteit voor auto's.", latitude: "52.1385460", longitude: "5.3531686" },
]

var map = L.map('map', {
    center: [52.1377309, 5.3520433],
    zoom: 18
});

const mapKey = '4EwudHRtcvkjaZ1b519V';

function toast(title, content) {
    const toast = document.createElement("div");
    toast.className = "absolute hidden min-w-xs top-10 end-10 p-3 rounded-lg bg-white/50 border border-white/80 backdrop-blur-xl shadow-xl opacity-0 transition-all duration-500 z-[999]";
    toast.innerHTML = `
    <h3 class="font-bold text-sm">${title}</h3>
    <p class="text-sm">${content}</p>
    `;
    document.body.appendChild(toast);

    console.log("Toast showed")

    setTimeout(() => {
        toast.classList.remove("hidden");
        setTimeout(() => {
            toast.classList.remove("opacity-0");
            toast.classList.add("opacity-100");
        }, 10)
    }, 100);

    setTimeout(() => {
        toast.classList.remove("opacity-100");
        toast.classList.add("opacity-0");
        setTimeout(() => {
            toast.classList.add("hidden");
        }, 500)
    }, 3000)
}

function submitReview(event) {
    event.preventDefault();
    toast("Succes", "Review is succesvol ingediend!");
    map.closePopup();
}

L.tileLayer(`https://api.maptiler.com/maps/hybrid-v4/{z}/{x}/{y}.png?key=${mapKey}`, {
    maxZoom: 21,
    attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e",
    crossOrigin: true,
    referrerPolicy: 'no-referrer-when-downgrade'
}).addTo(map);

data.map((loc) => {
    L.marker([loc.latitude, loc.longitude], { riseOnHover: true }).bindPopup(`
        <div>
            <h4 class="font-semibold text-lg">${loc.title}</h4>
        </div>
        <hr class="my-3" />
        <div class="mb-3">
            ${loc.description}
        </div>
        <div>
            <form onsubmit="submitReview(event)">
                <label for="review">Wat is je mening over '${loc.title}'?</label><br/>
                <select class="my-1 p-1 border border-black/20 rounded-lg bg-white/20 hover:bg-white transition-all duration-300">
                    <option selected disabled>Kies een optie...</option>    
                    <option>Zeer slecht</option>
                    <option>slecht</option>
                    <option>Geen mening</option>
                    <option>Goed</option>
                    <option>Zeer goed</option>
                </select>
                <br />
                <button type="submit" class="p-2 bg-blue-500/50 rounded-lg hover:bg-blue-500 transition-all duration-300">Verzend</button>
            </form>
        </div>
        `, { closeButton: false }).addTo(map);
});