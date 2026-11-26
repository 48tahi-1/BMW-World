
const modelContainer = document.getElementById("modelContainer");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");

const imageSearchNames = {
    "1-series": "BMW 1 Series",
    "2-series-gran-coupe": "BMW 2 Series Gran Coupe",
    "2-series-coupe": "BMW 2 Series Coupe",
    "3-series": "BMW 3 Series",
    "4-series-coupe": "BMW 4 Series Coupe",
    "4-series-convertible": "BMW 4 Series Convertible",
    "5-series": "BMW 5 Series",
    "7-series": "BMW 7 Series",
    "8-series-coupe": "BMW 8 Series Coupe",
    "8-series-convertible": "BMW 8 Series Convertible",
    "x1": "BMW X1",
    "x2": "BMW X2",
    "x3": "BMW X3",
    "x4": "BMW X4",
    "x5": "BMW X5",
    "x6": "BMW X6",
    "x7": "BMW X7",
    "ix": "BMW iX",
    "ix1": "BMW iX1",
    "ix2": "BMW iX2",
    "i4": "BMW i4",
    "i5": "BMW i5",
    "i7": "BMW i7",
    "z4": "BMW Z4",
    "m2": "BMW M2",
    "m3": "BMW M3",
    "m4": "BMW M4",
    "m5": "BMW M5",
    "m8": "BMW M8",
    "xm": "BMW XM",
    "x3-m": "BMW X3 M",
    "x5-m": "BMW X5 M",
    "x6-m": "BMW X6 M"
};

const imageCache = {};

function normalizeText(value) {
    return value.toLowerCase().replace(/[^a-z0-9]/g, "");
}

async function findBMWImage(model) {
    if (imageCache[model.id]) return imageCache[model.id];

    const searchName = imageSearchNames[model.id];
    if (!searchName) return null;

    const params = new URLSearchParams({
        action: "query",
        generator: "search",
        gsrsearch: `filetype:bitmap "${searchName}"`,
        gsrnamespace: "6",
        gsrlimit: "20",
        prop: "imageinfo",
        iiprop: "url",
        iiurlwidth: "900",
        format: "json",
        origin: "*"
    });

    try {
        const response = await fetch(
            `https://commons.wikimedia.org/w/api.php?${params}`
        );

        if (!response.ok) return null;

        const data = await response.json();
        const pages = Object.values(data.query?.pages || {});

        const wanted = normalizeText(searchName);

        const matchingPage = pages.find(page => {
            const title = normalizeText(page.title);

            return title.includes("bmw") &&
                title.includes(wanted.replace("bmw", ""));
        });

        if (!matchingPage) return null;

        const url =
            matchingPage.imageinfo?.[0]?.thumburl ||
            matchingPage.imageinfo?.[0]?.url;

        if (url) imageCache[model.id] = url;

        return url || null;

    } catch (error) {
        console.error("Image loading error:", model.name, error);
        return null;
    }
}

async function createModelCard(model) {
    const imageURL = await findBMWImage(model);

    // Image nahi mili toh model card create hi nahi hoga.
    if (!imageURL) return "";

    return `
        <div class="col-lg-4 col-md-6 mb-4">
            <div class="model-card h-100">

                <img
                    src="${imageURL}"
                    alt="${model.name}"
                    class="model-image"
                    onerror="this.closest('.col-lg-4').remove()"
                >

                <div class="model-card-content p-3">
                    <h3>${model.name}</h3>

                    <p>${model.description || ""}</p>

                    <span class="model-category">
                        ${model.category || "BMW"}
                    </span>

                    <a href="details.html?id=${encodeURIComponent(model.id)}"
                       class="btn explore-btn mt-3">
                        Explore Model
                    </a>
                </div>

            </div>
        </div>
    `;
}

let activeCategory = "all";
let renderVersion = 0;

async function renderModels(models) {
    const currentVersion = ++renderVersion;

    modelContainer.innerHTML = "";

    const cards = await Promise.all(
        models.map(model => createModelCard(model))
    );

    if (currentVersion !== renderVersion) return;

    modelContainer.innerHTML = cards.join("");
}

function filterModels() {
    const searchTerm = searchInput
        ? searchInput.value.toLowerCase().trim()
        : "";

    const filteredModels = bmwModels.filter(model => {
        const text = [
            model.name,
            model.category,
            model.family,
            model.body,
            model.powertrain
        ].join(" ").toLowerCase();

        const matchesSearch = text.includes(searchTerm);

        let matchesCategory = activeCategory === "all";

        if (activeCategory === "m") {
            matchesCategory =
                model.id.startsWith("m") ||
                model.id.endsWith("-m") ||
                model.id === "xm";
        } else if (activeCategory !== "all") {
            matchesCategory = text.includes(activeCategory);
        }

        return matchesSearch && matchesCategory;
    });

    renderModels(filteredModels);
}

if (typeof bmwModels !== "undefined") {
    renderModels(bmwModels);
}

if (searchInput) {
    searchInput.addEventListener("input", filterModels);
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(item => item.classList.remove("active"));

        button.classList.add("active");

        activeCategory = (
            button.dataset.filter || "all"
        ).toLowerCase();

        filterModels();
    });
});
