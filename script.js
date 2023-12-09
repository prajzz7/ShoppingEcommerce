const clothingData = [
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-1.png', title: 'Blouse and belted skirt', gender: 'Female', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-2.png', title: 'Pink ankara mixed gown', gender: 'Female', ageGroup: '0-11', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-3.png', title: 'A - shaped gown', gender: 'Female', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-4.png', title: 'Blouse and belted skirt', gender: 'Female', ageGroup: '20-50', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-5.png', title: 'Ankara suit', gender: 'Male', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-6.png', title: 'Brown ball gown', gender: 'Female', ageGroup: '0-11', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-7.png', title: 'Male Suit', gender: 'Male', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-8.png', title: 'Flared gown', gender: 'Female', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-1.png', title: 'Blouse and belted skirt', gender: 'Female', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-2.png', title: 'Pink ankara mixed gown', gender: 'Female', ageGroup: '0-11', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-3.png', title: 'A - shaped gown', gender: 'Female', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-4.png', title: 'Blouse and belted skirt', gender: 'Female', ageGroup: '20-50', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-5.png', title: 'Ankara suit', gender: 'Male', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-6.png', title: 'Brown ball gown', gender: 'Female', ageGroup: '0-11', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-7.png', title: 'Male Suit', gender: 'Male', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-8.png', title: 'Flared gown', gender: 'Female', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-1.png', title: 'Blouse and belted skirt', gender: 'Female', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-2.png', title: 'Pink ankara mixed gown', gender: 'Female', ageGroup: '0-11', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-3.png', title: 'A - shaped gown', gender: 'Female', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-4.png', title: 'Blouse and belted skirt', gender: 'Female', ageGroup: '20-50', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-5.png', title: 'Ankara suit', gender: 'Male', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-6.png', title: 'Brown ball gown', gender: 'Female', ageGroup: '0-11', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-7.png', title: 'Male Suit', gender: 'Male', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-8.png', title: 'Flared gown', gender: 'Female', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-1.png', title: 'Blouse and belted skirt', gender: 'Female', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-2.png', title: 'Pink ankara mixed gown', gender: 'Female', ageGroup: '0-11', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-3.png', title: 'A - shaped gown', gender: 'Female', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-4.png', title: 'Blouse and belted skirt', gender: 'Female', ageGroup: '20-50', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-5.png', title: 'Ankara suit', gender: 'Male', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-6.png', title: 'Brown ball gown', gender: 'Female', ageGroup: '0-11', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-7.png', title: 'Male Suit', gender: 'Male', ageGroup: 'Ranges', price: 'N8.900.000' },
    { imageUrl: './assets/main-store-content/store-featured-images/model-image-8.png', title: 'Flared gown', gender: 'Female', ageGroup: 'Ranges', price: 'N8.900.000' },   

];


const itemsPerPage = 12;
let currentPage = 1;

function displayClothingItems(page) {
    const container = document.getElementById('clothingContainer');
    container.innerHTML = '';

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < clothingData.length; i++) {
        const item = clothingData[i];
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = item.imageUrl;
        image.alt = item.title;
        card.appendChild(image);


        const titleDiv = document.createElement('div')
        titleDiv.classList.add('card-title-wrapper')
        card.appendChild(titleDiv)

        const title = document.createElement('span');
        title.textContent = item.title;
        title.classList.add('clothing-title')
        titleDiv.appendChild(title);

        const addToCartIcon = document.createElement('span');
        addToCartIcon.classList.add('clothing-title-cart-container')
        addToCartIcon.innerHTML = '<img class="card-cart-icon" src="./assets/main-store-content/card-cart-icon.svg" alt="cart-icon"/>'; 
        titleDiv.appendChild(addToCartIcon);


        const categoryDiv = document.createElement('div')
        categoryDiv.classList.add('singleLineDiv')
        card.appendChild(categoryDiv)


        const genderLabel = createLabel('Gene', item.gender);
        categoryDiv.appendChild(genderLabel);

        const separator = document.createElement('span')
        separator.textContent = '.'
        separator.classList.add('category-separator')
        categoryDiv.appendChild(separator)

        const ageGroupLabel = createLabel('Age', item.ageGroup);
        categoryDiv.appendChild(ageGroupLabel);

        const priceLabel = document.createElement('div')
        priceLabel.classList.add('card-price')
        priceLabel.textContent = item.price
        card.appendChild(priceLabel)

        container.appendChild(card);
    }
}

function createLabel(label, value) {
    const labelElement = document.createElement('span');
    const strongElement = document.createElement('span');
    strongElement.classList.add('card-category');
    strongElement.textContent = `${label}: `;
    labelElement.appendChild(strongElement);

    const valueElement = document.createElement('span');
    valueElement.classList.add('card-category-value'); 
    valueElement.innerHTML = value;
    labelElement.appendChild(valueElement);

    return labelElement;
}


function updatePagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(clothingData.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => {
            currentPage = i;
            displayClothingItems(currentPage);
            updatePagination();
        });
        paginationContainer.appendChild(button);
    }
}


displayClothingItems(currentPage);
updatePagination();



