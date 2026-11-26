
const galleryContainer = document.getElementById("galleryContainer");
const galleryFilters = document.querySelectorAll(".gallery-filter");
const previewModal = document.getElementById("previewModal");
const previewImage = document.getElementById("previewImage");
const closePreview = document.getElementById("closePreview");

const galleryCache = new Map();

async function loadGallery(query) {
    galleryContainer.innerHTML =
        '<div class="col-12 gallery-empty">Loading BMW photographs...</div>';

    if (galleryCache.has(query)) {
        displayGallery(galleryCache.get(query));
        return;
    }

    const apiURL =
        "https://commons.wikimedia.org/w/api.php?action=query" +
        "&generator=search" +
        "&gsrnamespace=6" +
        "&gsrlimit=24" +
        "&gsrsearch=" + encodeURIComponent(query) +
        "&prop=imageinfo" +
        "&iiprop=url" +
        "&iiurlwidth=1000" +
        "&format=json&origin=*";

    try {
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error("Gallery request failed");
        }

        const data = await response.json();
        const pages = Object.values(data.query?.pages || {});

        const images = pages
            .filter(page => {
                const title = page.title.toLowerCase();

                return title.includes("bmw") &&
                    !/logo|emblem|badge|engine|wheel|diagram|manual/.test(title);
            })
            .map(page => ({
                title: page.title
                    .replace(/^File:/i, "")
                    .replace(/\.[^.]+$/, "")
                    .replace(/_/g, " "),
                url: page.imageinfo?.[0]?.thumburl ||
                     page.imageinfo?.[0]?.url
            }))
            .filter(item => item.url);

        const uniqueImages = [];
        const used = new Set();

        images.forEach(item => {
            if (!used.has(item.url)) {
                used.add(item.url);
                uniqueImages.push(item);
            }
        });

        galleryCache.set(query, uniqueImages);
        displayGallery(uniqueImages);

    } catch (error) {
        galleryContainer.innerHTML =
            '<div class="col-12 gallery-empty">Unable to load photographs. Please check your internet connection and try again.</div>';
    }
}

function displayGallery(images) {
    galleryContainer.innerHTML = "";

    if (!images.length) {
        galleryContainer.innerHTML =
            '<div class="col-12 gallery-empty">No photographs found for this category.</div>';
        return;
    }

    images.forEach(item => {
        const column = document.createElement("div");
        column.className = "col-lg-4 col-md-6";

        const card = document.createElement("div");
        card.className = "gallery-card";

        const image = document.createElement("img");
        image.src = item.url;
        image.alt = item.title;
        image.loading = "lazy";

        const caption = document.createElement("div");
        caption.className = "gallery-caption";

        const heading = document.createElement("h5");
        heading.textContent = item.title;

        const description = document.createElement("p");
        description.textContent = "BMW Collection";

        caption.append(heading, description);
        card.append(image, caption);
        column.appendChild(card);

        image.onerror = () => column.remove();

        card.addEventListener("click", () => {
            previewImage.src = item.url;
            previewModal.classList.add("show");
        });

        galleryContainer.appendChild(column);
    });
}

galleryFilters.forEach(button => {
    button.addEventListener("click", () => {
        galleryFilters.forEach(item => item.classList.remove("active"));
        button.classList.add("active");
        loadGallery(button.dataset.query);
    });
});

closePreview.addEventListener("click", () => {
    previewModal.classList.remove("show");
    previewImage.src = "";
});

previewModal.addEventListener("click", event => {
    if (event.target === previewModal) {
        previewModal.classList.remove("show");
        previewImage.src = "";
    }
});

loadGallery("BMW car");
